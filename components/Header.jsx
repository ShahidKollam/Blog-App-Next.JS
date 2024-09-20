import assets from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
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
                <Image src={assets.logo} alt="logo" width={200} className=" w-[130px] sm:w-auto sm:ml-0" />

                <nav className="hidden sm:flex gap-5 text-white">
                    <Link href="/" className="hover:text-yellow-400">
                        Home
                    </Link>
                    <Link href="/news" className="hover:text-yellow-400">
                        News
                    </Link>
                    <Link href="/podcasts" className="hover:text-yellow-400">
                        Podcasts
                    </Link>
                    <Link href="/resources" className="hover:text-yellow-400">
                        Resources
                    </Link>
                </nav>

                <button className="hidden md:flex bg-yellow-400 text-black font-semibold rounded-md py-2 px-4">
                    Contact Us
                </button>
            </div>
        </div>
    );
};

export default Header;
