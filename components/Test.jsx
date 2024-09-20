"use client";
import assets from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="flex flex-col m-1">
            <div className="flex flex-col sm:flex-row items-center justify-center text-center lg:p-4 sm:p-2">
                <p className="lg:text-lg text-sm sm:text-base hover:text-yellow-400">
                    Subscribe to our Newsletter For New & Latest Blogs and Resources
                </p>
                <Image
                    src={assets.subscribeIcon}
                    alt="subscribeIcon"
                    className="w-[16.5px] h-[16.5px] sm:w-[20px] sm:h-[20px] ml-0 sm:ml-2 mt-2 sm:mt-0"
                />
            </div>
            <div className="flex justify-between items-center bg-zinc-900 px-5 py-5 lg:px-20">
                <Image src={assets.logo} alt="logo" width={200} className="w-[130px] sm:w-auto sm:ml-0" />

                <nav
                    className={`md:flex mr-15 md:gap-10 text-[25px] text-white ${
                        isMenuOpen ? "flex flex-col absolute top-40 left-1/2 transform -translate-x-1/2" : "hidden"
                    } `}
                >
                    <Link href="/" className="hover:text-yellow-400 py-1">
                        Home
                    </Link>
                    <Link href="/news" className="hover:text-yellow-400 py-1">
                        News
                    </Link>
                    <Link href="/podcasts" className="hover:text-yellow-400 py-1">
                        Podcasts
                    </Link>
                    <Link href="/resources" className="hover:text-yellow-400 py-1">
                        Resources
                    </Link>
                </nav>

                <button className="hidden md:flex bg-yellow-400 text-black font-semibold rounded-md py-2 px-4">
                    Contact Us
                </button>

                {/* Mobile Icon to toggle menu */}
                <Image
                    src={assets.mobileIcon}
                    className="flex md:hidden cursor-pointer"
                    alt="Mobile Menu"
                    onClick={toggleMenu}
                />
            </div>
        </div>
    );
};

export default Header;
