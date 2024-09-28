import dbConnect from "@/lib/config/db";
import Blog from "@/lib/models/BlogModel";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
    try {
        await dbConnect();

        const { id } = params;
        console.log(id);
        
        const blog = await Blog.findById(id).lean();

        if (!blog) {
            return NextResponse.json({ message: "Blog not found" }, { status: 404 });
        }
      //  console.log(blog);
        
        return NextResponse.json(blog, { status: 200 });
    } catch (error) {
        console.error("Error fetching blog by ID:", error);

        return NextResponse.json({ message: "Failed to fetch the blog" }, { status: 500 });
    }
}
