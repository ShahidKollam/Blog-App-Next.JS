import assets from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { FaEye, FaHeart } from "react-icons/fa";

const BlogCard_sm = () => {
    return (
        <div className="flex flex-col gap-2 border border-zinc-900 rounded-md">
            {/* child-1 */}
            <div className="">
                <Image src={assets.blogImg2} alt="card-img" className="w-6/6 h-[250px] object-cover rounded" />
            </div>
            {/* child-2 */}

            <h1>Global Climate Summit Addresses Urgent Climate Action</h1>
            <h2>Politics</h2>
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
