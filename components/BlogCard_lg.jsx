import assets from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { FaEye, FaHeart } from "react-icons/fa";

const BlogCard_lg = () => {
    return (
        <div className="flex p-20 border-b border-zinc-700">
            {/* child-1 */}
            <div className="flex-[1]">
                <Image src={assets.blogImg3} alt="card-img" className="w-6/6 h-[310px] object-cover rounded" />
            </div>
            {/* child-2 */}

            <div className="flex-[2] flex flex-col justify-between p-10">
                <h1>Global Climate Summit Addresses Urgent Climate Action</h1>
                <p className="text-zinc-500">
                    World leaders gathered at the Global Climate Summit to discuss urgent climate action, emissions
                    reductions, and renewable energy targets.
                </p>
                <div className="flex gap-10">
                    <div className="flex gap-10 ">
                        <p className="text-gray-500">
                            Category <br />
                            <span className="font-light text-white">Healthcare</span>
                        </p>

                        <p className="text-gray-500">
                            Publication Date <br />
                            <span className="font-light">October 15, 2023</span>
                        </p>
                        <p className="text-gray-500">
                            Author <br />
                            <span className="font-light text-white">Emily Walker</span>
                        </p>
                    </div>
                </div>

                <div className="">
                    <div className="flex justify-between">
                        <div className="flex justify-center items-center p-1 border border-zinc-700 w-20 h-8 rounded-full">
                            <span className="flex gap-2 items-center">
                                <FaEye /> 15k
                            </span>
                        </div>
                        <div className="flex justify-center items-center p-1 mr-[700px] border border-zinc-700 w-20 h-8 rounded-full">
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
