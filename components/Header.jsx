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
        <header className="sticky top-0 z-50 bg-black flex flex-col">
            <div className="flex flex-col sm:flex-row items-center justify-center text-center lg:p-2 sm:p-2">
                <p className="text-sm font-light sm:text-base hover:text-yellow-400">
                    Subscribe to our Newsletter For New & Latest Blogs and Resources
                </p>
                <Image
                    src={assets.subscribeIcon}
                    alt="subscribeIcon"
                    className="w-[16.5px] h-[16.5px] sm:w-[20px] sm:h-[20px] ml-0 sm:ml-2 mt-2 sm:mt-0"
                />
            </div>
            <div className="flex justify-between items-center bg-zinc-900 px-5 py-5 lg:px-20">
                <Image src={assets.logo} alt="logo" className="w-[130px] md:w-[140px]  sm:ml-0" width={"180"} />

                <nav
                    className={`md:flex mr-15 md:gap-10 bg-zinc-900 w-full text-[20px] text-white flex justify-center  ${
                        isMenuOpen
                            ? "flex flex-col justify-center items-center absolute top-40 left-1/2 transform -translate-x-1/2"
                            : "hidden"
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

                <button className="hidden md:flex bg-yellow-400 text-black font-semibold rounded-md w-1/12 py-2 px-4">
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
        </header>
    );
};

export default Header;
