import connectDB from "@/lib/config/db";
import Blog from "@/lib/models/BlogModel";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        await connectDB();

        // Parse the request body (assuming JSON format)
        const body = await req.json();
        console.log(body);
        
        const {  blogTitle, publishingDate, category, authorName, paragraphTitle, description } = body;

        if (!blogTitle || !publishingDate || !category || !authorName || !paragraphTitle || !description) {
            return NextResponse.json({ error: "All fields are required" }, { status: 400 });
        }

        const newBlog = new Blog({
            blogImage: "sss", // Add logic here for handling blog image uploads
            blogTitle,
            publishingDate,
            category,
            authorName,
            paragraphTitle,
            description,
        });

        await newBlog.save();
        console.log("Blog created successfully:", newBlog.blogTitle);

        return NextResponse.json(newBlog, { status: 201 });
    } catch (error) {
        console.error("Error creating blog:", error.message);

        return NextResponse.json({ error: "Server error while creating blog" }, { status: 500 });
    }
}
