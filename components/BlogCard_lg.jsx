import assets from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { FaEye, FaHeart } from "react-icons/fa";
import { formatDate } from "@/utils/formateDate";

const BlogCard_lg = ({ blog }) => {
    return (
        <div className="md:flex p-4 md:p-20 border-b border-zinc-700">
            {/* child-1 */}
            <div className="md:flex-[1]">
                <Image
                    src={blog?.blogImage}
                    width={700}
                    height={50}
                    alt="card-img"
                    className="w-6/6 md:h-[310px] object-cover rounded-xl"
                />
            </div>
            {/* child-2 */}

            <div className="md:flex-[2] flex flex-col md:justify-between space-y-2 py-6 md:p-10">
                <h1>{blog?.blogTitle}</h1>
                <p className="text-zinc-500">
                    {blog?.paragraghTitle}
                </p>
                <div className="flex gap-10">
                    <div className="flex gap-10 ">
                        <p className="text-gray-500">
                            Category <br />
                            <span className="font-light text-white">{blog?.category}</span>
                        </p>

                        <p className="text-gray-500">
                            Publication Date <br />
                            <span className="font-light">{formatDate(blog?.publishingDate)}</span>
                        </p>
                        <p className="text-gray-500">
                            Author <br />
                            <span className="font-light text-white">{blog?.authorName}</span>
                        </p>
                    </div>
                </div>

                <div className="pt-5">
                    <div className="flex gap-10 md:gap-0 md:justify-between">
                        <div className="flex justify-center items-center p-1 border border-zinc-700 w-20 h-8 rounded-full">
                            <span className="flex gap-2 items-center">
                                <FaEye /> 15k
                            </span>
                        </div>
                        <div className="flex justify-center items-center p-1 md:mr-[700px] border border-zinc-700 w-20 h-8 rounded-full">
                            <span className="flex gap-2 items-center">
                                <FaHeart /> 10k
                            </span>
                        </div>
                        <button className="border border-zinc-600 p-2 rounded-lg">Read More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogCard_lg;
