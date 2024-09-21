import assets from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Page = ({ params }) => {
    return (
        <div className="  ">
            <div>
                <Image
                    src={assets.blogImg1}
                    alt="Blog Image"
                    className="md:h-[500px] object-cover h-[281px] px-0 my-1 md:my-0 border-b border-gray-600 md:border-none"
                />
                <h1 className="text-center absolute top-[300px] font-bold text-3xl md:text-5xl md:absolute md:left-[293px] md:top-[520px] ">
                    The Rise of Artificial Intelligence in Healthcare
                </h1>
            </div>
            {/* blog content */}
            <div className="flex h-screen border-b border-zinc-600 mb-40">
                <div className="flex-[2] border-r border-zinc-600">
                    <div className="border-b border-zinc-600">
                        <h1>Introduction</h1>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio nulla iste deserunt blanditiis
                            aliquid explicabo magni assumenda, itaque dicta accusamus recusandae obcaecati ut quasi earum
                            quia. Reprehenderit nulla fugit accusamus.
                        </p>
                    </div>
                    <div>
                        <h1>Artificial Intelligence AI</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi similique, architecto tenetur
                            quos, modi veniam ipsa cupiditate officia expedita sit suscipit quas vel doloremque facere.
                            Explicabo sint nemo aliquam odio! Repellendus, magni? Tempore ipsum adipisci quae
                            exercitationem, nulla delectus ex in quam magni earum dolorum eos repudiandae nostrum voluptas
                            ut quaerat, eaque modi voluptatem quibusdam eligendi doloribus impedit nesciunt officiis. Optio
                            dolore quod deserunt vel laboriosam, voluptatibus aliquam eius? Deleniti recusandae modi itaque
                            culpa nobis in alias quod beatae maiores expedita consectetur labore numquam quo, minus qui
                            nisi, dolorem quaerat. Dignissimos nobis temporibus quam sapiente qui vero error dolores magni,
                            quis molestias, accusamus distinctio quisquam. Quia aut praesentium sint culpa tempora minima
                            repellat enim nulla placeat beatae. Maiores, dolorum cum? Voluptate saepe sunt tenetur eaque eos
                            minima
                        </p>
                    </div>
                </div>
                <div className="flex-1">right</div>
            </div>
        </div>
    );
};

export default Page;
