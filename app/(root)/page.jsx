"use client";
import BlogCard_lg from "@/components/BlogCard_lg";
import BlogCard_sm from "@/components/BlogCard_sm";
import Loader from "@/components/Loader";
import useFetchBlogs from "@/hooks/useFetchBlogs";

export default function Home() {
    const { isError, isLoading, error, data } = useFetchBlogs();
    
    if (isLoading) {
        return <Loader />;
    }
    
    if (isError) {
        return <p>Error fetching blogs: {error.message}</p>;
    }

    const featuredBlog = data[0];  // Example: First blog is featured in large card
    const remainingBlogs = data.slice(1);  // Remaining blogs for smaller cards
    console.log(featuredBlog);
    
    return (
        <>
            {featuredBlog && <BlogCard_lg blog={featuredBlog} />}
            
            {/* Display the rest of the blogs in BlogCard_sm */}
            <div className="grid grid-cols-3 gap-5 p-10">
                {remainingBlogs.map((blogs) => (
                    <BlogCard_sm key={blogs.id} blogs={blogs} />
                ))}
            </div>
        </>
    );
}
