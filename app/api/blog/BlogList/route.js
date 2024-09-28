import dbConnect from "@/lib/config/db";
import Blog from "@/lib/models/BlogModel";
import { NextResponse } from "next/server";

export async function GET(request) {
    try {
        await dbConnect();

        const blogs = await Blog.find().lean();

        if (!blogs || blogs.length === 0) {
            return NextResponse.json({ message: "No blogs found" }, { status: 404 });
        }

        // Return the blogs in a JSON response with a 200 status
        return NextResponse.json(blogs, { status: 200 });
    } catch (error) {
        console.error("Error fetching blogs:", error);

        return NextResponse.json({ message: "Failed to fetch the blogs" }, { status: 500 });
    }
}
