import connectDB from "@/lib/config/db";
import Blog from "@/lib/models/BlogModel";
import { NextResponse } from "next/server";
import { revalidatePath, revalidateTag } from "next/cache";

export async function DELETE(req) {
    try {
        await connectDB();

        // Extract the blog ID from the request URL
        const { searchParams } = new URL(req.url);
        const blogId = searchParams.get("id");

        if (!blogId) {
            return NextResponse.json({ error: "Blog ID is required" }, { status: 400 });
        }

        // Find and delete the blog by ID
        const deletedBlog = await Blog.findByIdAndDelete(blogId);

        if (!deletedBlog) {
            return NextResponse.json({ error: "Blog not found" }, { status: 404 });
        }

        // Revalidate the caches after deletion
        revalidateTag("blogs");
        revalidatePath("/");
        revalidatePath("/admin/blogList");

        // console.log("Blog deleted successfully:", deletedBlog.blogTitle);

        return NextResponse.json({ message: "Blog deleted successfully" }, { status: 200 });
    } catch (error) {
        console.error("Error deleting blog:", error.message);

        return NextResponse.json({ error: "Server error while deleting blog" }, { status: 500 });
    }
}
