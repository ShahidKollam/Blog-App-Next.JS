"use client";
import BlogCard_lg from "@/components/BlogCard_lg";
import BlogCard_sm from "@/components/BlogCard_sm";

export default function Home() {
    return (
        <>
            <BlogCard_lg />
            <div className="flex px-20 gap-10 p-5">
                <BlogCard_sm />
                <BlogCard_sm />
                <BlogCard_sm />
            </div>
        </>
    );
}
