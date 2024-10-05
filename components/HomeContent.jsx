import assets from "@/assets/assets";
import { FilePlus } from "lucide-react";
import Image from "next/image";
import React from "react";

const HomeContent = () => {
    return (
        <div className="md:flex hidden">
            <div className="flex-2 border-b border-gray-600 w-4/6 h-[600px]">
                <div className="flex flex-col h-full pt-[128px] gap-5">
                    <h3 className="px-20  text-2xl text-gray-400">Your Journey to Tomorrow Begins Here</h3>
                    <h1 className="px-20  text-5xl">Explore the Frontiers of Artificial Intelligence</h1>
                    <p className="px-20  text-xl text-gray-400">
                        Welcome to the epicenter of AI innovation. FutureTech AI News is your passport to a world where
                        machines think, learn, and reshape the future. Join us on this visionary expedition into the heart
                        of AI.
                    </p>

                    <div className="flex pt-[74px]">
                        <div className="border-t border-r border-gray-600 w-1/3 h-[200px] space-y-1 flex flex-col items-center justify-center text-2xl">
                            <p className="font-bold">300 + </p>
                            <p>Resources Available</p>
                        </div>
                        <div className="border-t border-r border-gray-600 w-1/3 h-[200px]  flex flex-col items-center justify-center text-2xl">
                            <p className="font-bold">12K + </p>
                            <p>Total Downloads</p>
                        </div>
                        <div className="border-t border-gray-600 w-1/3 h-[200px] flex flex-col items-center justify-center text-2xl">
                            <p className="font-bold">10K + </p>
                            <p>Active Users</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-[url('../assets/Abstract_Design.png')] opacity-70 flex-1 border-l text-[18px] border-b border-gray-600 w-4/6 h-[600px] flex flex-col justify-end p-14 gap-10">
                <div className="border border-gray-700 w-44 h-8 rounded-full"></div>
                <div className="space-y-2">
                    <h1>Explore 1000+ resources</h1>
                    <p>Over 1,000 articles on emerging tech trends and breakthroughs.</p>
                    <button className="border py-2 px-8 rounded-xl flex items-center justify-center gap-2">
                        Explore
                        <span>
                            <Image src={assets.subscribeIcon} />
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HomeContent;
