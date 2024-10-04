"use client";
import assets from "@/assets/assets";
import useStore from "@/store/useStore";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import useLogout from "@/hooks/useLogout";

const Header = () => {
    const { logoutHandler, isLoading, error } = useLogout();
    const { user } = useStore();
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
                    <Link href="/" className="hover:text-yellow-400 py-1">
                        News
                    </Link>
                    <Link href="/" className="hover:text-yellow-400 py-1">
                        Podcasts
                    </Link>
                    <Link href="/" className="hover:text-yellow-400 py-1">
                        Resources
                    </Link>
                </nav>
                <div className="flex justify-end w-[20%] gap-1">
                    {!user ? (
                        <Link href="/sign-in" className="">
                            <button className="hidden md:flex bg-yellow-400 text-black text-center font-semibold rounded-md p-2 px-3 hover:bg-yellow-600">
                                Log In
                            </button>
                        </Link>
                    ) : (
                        <Link href="/" className="">
                            <button
                                onClick={logoutHandler}
                                disabled={isLoading} // Disable button while loading
                                className={`hidden md:flex bg-yellow-400 text-black font-semibold rounded-md p-2 px-3 hover:bg-yellow-600 ${
                                    isLoading ? "opacity-50 cursor-not-allowed" : ""
                                }`}
                                style={{ width: "120px", whiteSpace: "nowrap" }}
                            >
                                {isLoading ? "Logging out..." : "Log out"}
                            </button>
                        </Link>
                    )}

                    <button className="hidden md:flex w-[100px] bg-yellow-400 text-black text-center font-semibold rounded-md p-2 hover:bg-yellow-600">
                        Contact Us
                    </button>
                </div>

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
