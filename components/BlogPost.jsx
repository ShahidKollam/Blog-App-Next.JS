"use client";
import assets from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { FaHeart, FaShareAlt, FaEye } from "react-icons/fa";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

// BlogList.js
const Page = () => {
    const id = "66f6244f13ee56820611a3af"
    const fetchBlogs = async () => { 
        const response = await axios(`/api/blog/${id}`);
        return response.data;
    };

    const { isLoading, isError, error, data } = useQuery({
        queryKey: ["blogs", id],
        queryFn: fetchBlogs,
        //enabled: false,
    });

    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (isError) {
        return <p>Error fetching blogs: {error.message}</p>;
    }
    console.log("blog", data);

    return (
        <>
            <div className=""   >
                <div>
                    <Image
                        src={data.blogImage}
                        alt="Blog Image"
                        width={"1700"}
                        height={70}
                        className="md:h-[500px] object-cover h-[281px] px-0 my-1 md:my-0 border-b border-gray-600 md:border-none"
                    />
                    {/* image show text */}
                    <h1 className="text-center md:px-7 md:py-4 p-2 bg-zinc-900 rounded-full absolute top-[350px] left-2 md:font-bold text-xl md:text-5xl md:absolute md:left-[293px] md:top-[520px] ">
                        {data?.blogTitle}
                    </h1>
                </div>
                {/* blog content */}
                <div className="flex flex-col md:flex md:flex-row h-screen md:border-b border-t border-zinc-600 mb-40">
                    {/* left side  */}

                    <div className="flex-[2] border-r border-zinc-600 pb-[100px] h-[150vh] md:h-[100vh] flex flex-col">
                        <div className="md:p-20 p-5 space-y-5 border-b border-zinc-600">
                        {/* Introduction */}
                            <h1 className="text-2xl">Introduction</h1>
                            <p className="text-1xl">
                               {data.paragraphTitle}
                               </p>
                        </div>
                        <div className="p-5 md:p-20 space-y-5 overflow-auto flex-grow">
                            {/* paragragh */}
                            <h1 className="text-2xl">Artificial Intelligence AI</h1>
                            <p className="text-1xl">
                               {data.description}
                               </p>
                        </div>
                    </div>

                    {/* right side */}
                    <div className="flex-[1] last:-order-1 md:last:order-none">
                        {/* like box */}
                        <div className="flex justify-center items-center p-3 gap-5 border-b border-zinc-600 h-[150px]">
                            <div className="flex justify-center items-center p-1 gap-2 border border-zinc-700 w-28 h-10 rounded-full">
                                <FaHeart className="text-red-600" />
                                <span>24.5k</span>
                            </div>
                            <div className="flex justify-center items-center p-1 gap-2 border border-zinc-700 w-28 h-10 rounded-full">
                                <FaEye className="" />
                                <span>50k</span>
                            </div>
                            <div className="flex justify-center items-center p-1 gap-2 border border-zinc-700 w-28 h-10 rounded-full">
                                <FaShareAlt className="" />
                                <span>200</span>
                            </div>
                        </div>
                        {/* table content box */}
                        <div className="md:p-20 p-5 pb-20 md:border-none border-b border-zinc-400">
                            <div className="space-y-7">
                                <div className="flex gap-20 ">
                                    <p className="md:text-xl font-bold text-gray-500">
                                        Publication Date <br />
                                        <span className="font-light text-white">October 15, 2023</span>
                                    </p>
                                    <p className="md:text-xl font-bold text-gray-500">
                                        Category <br />
                                        <span className="font-light text-white">Healthcare</span>
                                    </p>
                                </div>
                                <div className="flex gap-[105px] md:gap-[110px]">
                                    <p className="md:text-xl font-bold text-gray-500">
                                        Reading Time <br />
                                        <span className="font-light text-white">10 Min</span>
                                    </p>
                                    <p className="md:text-xl font-bold text-gray-500">
                                        Author <br /> <span className="font-light text-white">Dr. Emily Walker</span>
                                    </p>
                                </div>
                                <div class="mb-4 p-4 bg-zinc-900 rounded-xl">
                                    <h3 class="text-xl  text-gray-500 font-semibold mb-4">Table of Contents</h3>
                                    <ul class="list-disc ml-6">
                                        <li class="mb-2">Introduction</li>
                                        <li class="mb-2">AI in Diagnostic Imaging</li>
                                        <li class="mb-2">Predictive Analytics and Disease Prevention</li>
                                        <li class="mb-2">Personalized Treatment Plans</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            ;
        </>
    );
};

export default Page;
