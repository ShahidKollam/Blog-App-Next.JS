import Image from "next/image";
import React from "react";
import assets from "../../../../assets/assets";

const page = () => {
    return (
        <div>
            <header className="flex justify-center md:justify-between  items-center border-b border-zinc-700 bg-zinc-900 md:bg-transparent px-5 py-5 lg:px-20">
                <Image src={assets.logo} alt="logo" className="w-[130px] md:w-[140px]  sm:ml-0" width={"180"} />
            </header>

            <div className="flex h-screen">
              <div className="w-1/3 border-r border-zinc-700">
                
              </div>
              <div className="">
                
              </div>
            </div>
        </div>
    );
};

export default page;
