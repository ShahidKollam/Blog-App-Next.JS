"use client";
import BlogCard_lg from "@/components/BlogCard_lg";
import BlogCard_sm from "@/components/BlogCard_sm";

export default function Home() {
    return (
        <>
            <BlogCard_lg />
            <div className="grid grid-cols-3 gap-5 p-10">
                <BlogCard_sm />
                <BlogCard_sm />
                <BlogCard_sm />
                <BlogCard_sm />
                <BlogCard_sm />
                <BlogCard_sm />
        
            </div>
        </>
    );
}
