    import assets from "@/assets/assets";
    import Image from "next/image";
    import Link from "next/link";
    import React from "react";
    import { FaEye, FaHeart } from "react-icons/fa";

    const BlogCard_sm = ({ blogs }) => {
        return (
            <div className="flex flex-col gap-2 border border-zinc-900 rounded-md p-4 hover:shadow-lg hover:scale-105 hover:border-slate-500 hover:bg-zinc-900 transition-all duration-300 ease-in-out">
                {/* child-1 */}
                <div className="">
                    <Link href={`/blogPage/${blogs._id}` }>
                        <Image
                            src={blogs.blogImage}
                            alt="card-img"
                            width={700}
                            height={50}
                            className="w-6/6 h-[250px] object-cover rounded "
                        />
                    </Link>
                </div>
                {/* child-2 */}

                <h1>{blogs.blogTitle}</h1>
                <h2>{blogs?.category}</h2>
                <div className="flex justify-between items-center">
                    <div className="flex justify-center items-center p-1 border border-zinc-700 w-20 h-8 rounded-full">
                        <span className="flex gap-2 items-center">
                            <FaEye /> 15k
                        </span>
                    </div>
                    <div className="flex justify-center items-center p-1 border border-zinc-700 mr-48 w-20 h-8 rounded-full">
                        <span className="flex gap-2 items-center">
                            <FaHeart /> 10k
                        </span>
                    </div>
                    <button className="border border-zinc-600 p-2 rounded-lg">Read More</button>
                </div>
            </div>
        );
    };

    export default BlogCard_sm;
