"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import assets from "../../../../assets/assets";
import SignInForm from "@/components/SignInForm";

import { useRouter } from "next/navigation";
import useStore from "@/store/useStore";

const Page = () => {
    const router = useRouter();
    const { authenticated } = useStore();

    useEffect(() => {
        // If the user is authenticated, redirect to the home page or dashboard
        console.log("authenticated", authenticated);

        if (authenticated) {

            router.push("/"); // or wherever you want to redirect
        }
    }, [router]);

    return (
        <div className="h-screen ">
            <header className="flex justify-center md:justify-between  items-center border-b border-zinc-700 bg-zinc-900 md:bg-transparent px-5 py-5 lg:px-20">
                <Image src={assets.logo} alt="logo" className="w-[130px] md:w-[140px]  sm:ml-0" width={"180"} />
            </header>

            {/* left section */}
            <div className="md:flex md:flex-row md:h-[80vh]">
                <div className="md:w-1/3 w-full h-[60vh] md:h-[80vh] flex justify-center flex-col  gap-10 px-4 md:px-10 pb-24 md:pb-56 md:border-r border-zinc-700">
                    <Image
                        src={assets.loginIcon}
                        alt="logo"
                        className="w-[80px] pt-20 md:pt-0 md:w-[60px] md:h-[60px]  sm:ml-0"
                        width={"80"}
                    />
                    <h1 className="text-3xl md:text-4xl">
                        Welcome,
                        <br /> Enter Your Details To Stay Logged In
                    </h1>
                </div>

                {/* right section */}

                <div className="w-full ">
                    <SignInForm />
                </div>
            </div>
        </div>
    );
};

export default Page;
