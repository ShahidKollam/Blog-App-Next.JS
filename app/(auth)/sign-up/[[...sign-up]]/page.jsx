import Image from "next/image";
import React from "react";
import assets from "../../../../assets/assets";
import SignUpForm from '@/components/SignUpForm'

const page = () => {
    return (
        <div className="h-screen ">
            <header className="flex justify-center md:justify-between  items-center border-b border-zinc-700 bg-zinc-900 md:bg-transparent px-5 py-5 lg:px-20">
                <Image src={assets.logo} alt="logo" className="w-[130px] md:w-[140px]  sm:ml-0" width={"180"} />
            </header>

            {/* left section */}
            <div className="md:flex md:flex-row md:h-[90vh]">
                <div className="md:w-1/3 w-full h-[60vh] md:h-[90vh] flex justify-center flex-col  gap-10 px-4 md:px-10 pb-24 md:pb-56 md:border-r border-zinc-700">
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
                  <SignUpForm />
                </div>
            </div>
        </div>
    );
};

export default page;
