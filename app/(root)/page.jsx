"use client";
import BlogCard_lg from "@/components/BlogCard_lg";
import BlogCard_sm from "@/components/BlogCard_sm";
import Loader from "@/components/Loader";
import HomeContent from "@/components/HomeContent";

import useFetchBlogs from "@/hooks/useFetchBlogs";

export default function Home() {
    const { isError, isLoading, error, data } = useFetchBlogs();

    if (isLoading) {
        return <Loader />;
    }

    if (isError) {
        return <p>Error fetching blogs: {error.message}</p>;
    }

    const featuredBlog = data[0]; // Example: First blog is featured in large card
    const remainingBlogs = data.slice(1); // Remaining blogs for smaller cards
    console.log(featuredBlog);

    return (
        <>
            <HomeContent />
            {featuredBlog && <BlogCard_lg blog={featuredBlog} />}


            <div className="grid grid-cols-1 md:grid-cols-3 md:gap-5 p-4 md:p-10">
                {remainingBlogs.map((blogs) => (
                    <BlogCard_sm key={blogs.id} blogs={blogs} />
                ))}
            </div>
        </>
    );
}
