import connectDB from "@/lib/config/db";
import Blog from "@/lib/models/BlogModel";
import { NextResponse } from "next/server";
// import { v2 as cloudinary } from "cloudinary";
import cloudinary from "@/lib/config/cloudinary";
import { revalidatePath } from "next/cache";

export async function POST(req) {
    
    try {
        await connectDB();

        const body = await req.json();
        
        const { blogTitle, publishingDate, category, authorName, paragraphTitle, description } = body;

        let { blogImage } = body;

        if (!blogTitle || !publishingDate || !category || !authorName || !paragraphTitle || !description) {
            return NextResponse.json({ error: "All fields are required" }, { status: 400 });
        }
        console.log("okkkkkk");
        
        if (blogImage) {
            const uploadResponse = await cloudinary.uploader.upload(blogImage);
            blogImage = uploadResponse.secure_url;
        }
        console.log(blogImage);

        const newBlog = new Blog({
            blogImage,
            blogTitle,
            publishingDate,
            category,
            authorName,
            paragraphTitle,
            description,
        });

        await newBlog.save();
        revalidatePath('/')
        console.log("Blog created successfully:", newBlog.blogTitle);


        return NextResponse.json(newBlog, { status: 201 });
    } catch (error) {
        console.error("Error creating blog:", error.message);

        return NextResponse.json({ error: "Server error while creating blog" }, { status: 500 });
    }
}
