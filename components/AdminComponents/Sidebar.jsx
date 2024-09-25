"use client";
import assets from "@/assets/assets";
import Image from "next/image";
import React from "react";

import { useState } from "react";
import { FaAngleDoubleUp } from "react-icons/fa";
import { PiFoldersFill, PiNoteBlankFill, PiUserSquareBold } from "react-icons/pi";
import { BsThreeDotsVertical } from "react-icons/bs";
import Link from "next/link";

const Sidebar = function Sidebar() {
    const [blogOpen, setBlogOpen] = useState(false);
    const [usersOpen, setUsersOpen] = useState(false);

    console.log("sidebar");

    return (
        <div className="flex flex-col justify-between bg-zinc-800 text-white h-screen w-1/6 p-3">
            <div className="">
                <Image src={assets.logo} alt="logo" className="w-[160px] pt-12" />
            </div>
            {/* files */}
            <div className="w-full p-2 text-xl pb-[400px]">
                {/* Blog Section */}
                <div className={`p-4 pb-0`}>
                    <div
                        className={`flex items-center justify-between cursor-pointer hover:text-yellow-400 p-2 rounded-xl ${blogOpen ? "bg-gray-600" : "bg-zinc-800"} `}
                        onClick={() => setBlogOpen(!blogOpen)}
                    >
                        <div className="flex justify-center items-center ">
                            <span>{<PiNoteBlankFill />}</span>
                            <span className="ml-2">Blog</span>
                            {blogOpen && <span className="pl-28">{<FaAngleDoubleUp />}</span>}
                        </div>
                    </div>
                    {blogOpen && (
                        <div className="ml-6 mt-2 pl-4">
                            <Link href="" className="block mb-2 hover:text-blue-500">
                                Edit Blog
                            </Link>
                            <Link href="" className="block mb-2 hover:text-blue-500">
                                Edit Blog
                            </Link>{" "}
                        </div>
                    )}
                </div>

                {/* Users Section */}

                <div className="p-4">
                        <div
                        className={`flex items-center justify-between cursor-pointer hover:text-yellow-400 p-2 rounded-xl ${usersOpen ? "bg-gray-600" : "bg-zinc-800"} `}
                        onClick={() => setUsersOpen(!usersOpen)}
                        >
                        <div className="flex justify-center items-center ">
                            <span>{<PiUserSquareBold />}</span>
                            <span className="ml-2">Users</span>
                            {usersOpen && <span className="pl-[105px]">{<FaAngleDoubleUp />}</span>}
                        </div>
                        </div>
                        {usersOpen && (
                        <div className="ml-6 mt-2 pl-4">
                                <Link href="" className="block mb-2 hover:text-blue-500">
                                    Edit Blog
                                </Link>{" "}
                                <Link href="" className="block mb-2 hover:text-blue-500">
                                    Edit Blog
                                </Link>
                            </div>
                        )}
                    </div>
                    
            </div>
                        {/* login admin data display */}
                <div className="sticky bottom-10 z-10 flex justify-between bg-yellow-400 text-black p-3 rounded-md">
                        <Image src={assets.blogImg1} alt="userImage" className="w-10 h-10 rounded-full object-cover"/>
                        <div>
                            <p className="text-sm">Admin Name</p>
                            <p className="text-xs">Admin Email</p>
                        </div>
                        <BsThreeDotsVertical />
            </div>
        </div>
    );
};

export default Sidebar;
