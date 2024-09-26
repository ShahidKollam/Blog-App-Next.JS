import dbConnect from "@/lib/config/db";
import Blog from "@/lib/models/BlogModel";
import { NextResponse } from "next/server";

export async function GET(request) {
    try {
        await dbConnect();

        const blogs = await Blog.find({}).lean();  // Using .lean() to get plain objects

        console.log(blogs);

        return NextResponse.json(blogs, { status: 200 });
    } catch (error) {
        console.error("Error fetching blogs:", error);

        return NextResponse.json({ message: 'Failed to fetch blogs' }, { status: 500 });
    }
}
