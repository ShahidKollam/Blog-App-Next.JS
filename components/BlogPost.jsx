import assets from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { FaHeart, FaShareAlt, FaEye } from "react-icons/fa";

const Page = ({ params }) => {
    return (
        <div className="">
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
            <div className="flex flex-col md:flex md:flex-row h-screen md:border-b border-t border-zinc-600 mb-40">
                {/* left side  */}

                <div className="flex-[2] border-r border-zinc-600 pb-[100px] h-[150vh] md:h-[100vh] flex flex-col">
                    <div className="md:p-20 p-5 space-y-5 border-b border-zinc-600">
                        <h1 className="text-2xl">Introduction</h1>
                        <p className="text-1xl">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio nulla iste deserunt blanditiis
                            aliquid explicabo magni assumenda, itaque dicta accusamus recusandae obcaecati ut quasi earum
                            quia. Reprehenderit nulla fugit accusamus.
                        </p>
                    </div>
                    <div className="p-5 md:p-20 space-y-5 overflow-auto flex-grow">
                        <h1 className="text-2xl">Artificial Intelligence AI</h1>
                        <p className="text-1xl">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus amet, asperiores obcaecati fuga
                            animi sapiente quo magni numquam cum nemo dolores debitis optio quaerat, saepe sed doloremque!
                            Id, autem incidunt! Recusandae voluptas enim ipsa, dolorum, velit voluptates harum facere odit,
                            impedit culpa natus? Eius quidem quos itaque, ipsum culpa molestias iusto exercitationem
                            voluptatibus, modi quod nemo possimus! Magnam, tempore veniam. Dolores accusantium harum soluta
                            blanditiis repudiandae quia, facilis odit quam sed libero. Obcaecati libero, velit reprehenderit
                            numquam rem possimus dignissimos nisi facere modi. Rerum a eveniet quidem doloribus neque
                            doloremque. Iste eos labore odio earum temporibus. Voluptatum omnis cumque architecto molestias
                            illo eum magnam facere, ducimus, ratione hic harum illum. Repellendus, aliquam quis enim quod
                            animi odio mollitia vero soluta! Ab dolores sunt facere sit esse consequuntur et necess
                            <br />
                            itatibus consectetur accusamus eveniet velit, laborum iusto nulla ut aspernatur nihil ipsum
                            itaque fugiat? Molestias aperiam voluptas voluptatum! Temporibus magni similique maxime. Quas
                            ipsa similique excepturi molestiae accusamus tempore perferendis, maiores omnis placeat
                            asperiores ullam ut iusto sequi provident quia quae enim pariatur distinctio id a minima neque
                            explicabo necessitatibus exercitationem? A. In possimus ullam temporibus cum veritatis iusto sit
                            libero soluta eligendi voluptatum reprehenderit error delectus minima quos laboriosam earum
                            repudiandae amet suscipit, laudantium veniam, nisi quas, inventore corrupti odio! Ipsa? Pariatur
                            expedita eligendi voluptatibus. Deserunt accusantium vitae temporibus laboriosam, et sed qui
                            dolorum necessitatibus ullam non, asperiores sapiente, sint corporis nesciunt! Dignissimos ab
                            autem asperiores recusandae excepturi, dolores cupiditate quisquam. Facilis ipsum voluptatibus
                            impedit blanditiis iusto quaerat ex mollitia neque atque, a nulla deserunt sapiente, ab aliquid
                            esse eos voluptatem saepe reprehenderit delectus nihil cupiditate qui repellendus eligendi?
                            Soluta, doloribus. Vitae, praesentium laboriosam nisi excepturi magnam minima natus eaque
                            sapiente blanditiis commodi animi quae aperiam a voluptates fugit fugiat dolores ex saepe
                            numquam. Illo, dolorem dolores? Nulla quam rerum repudiandae? Lorem ipsum dolor sit amet
                            consectetur adipisicing eli t. Commodi similique, architecto tenetur quos, modi veniam ipsa
                            cupiditate officia expedita sit suscipit quas vel doloremque facere. Explicabo sint nemo aliquam
                            odio! Repellendus, magni? Tempore ipsum adipisci quae Adipisci vitae, soluta magni praesentium
                            nisi aperiam tempora rem molestias enim. Ad recusandae perferendis culpa et cum nemo ipsam,
                            blanditiis soluta quas excepturi eaque, consequatur labore exercitationem id consectetur
                            voluptate! Incidunt, neque odit aspernatur ullam nesciunt ex necessitatibus facilis quae nostrum
                            aliquam eveniet quisquam vero alias quas optio unde explicabo. Eaque commodi dignissimos
                            praesentium voluptates, magnam sint cumque nam recusandae. Modi ullam in, praesentium eos ad
                            itaque dolor facere molestiae perspiciatis doloribus eaque. Impedit vel quasi aspernatur maxime
                            perspiciatis, voluptas repellat debitis atque aliquid accusantium labore praesentium, pariatur
                            necessitatibus saepe. Maxime iste, numquam molestiae quam animi enim optio, distinctio voluptate
                            nulla, inventore dolor nihil. Cum, minima? Ratione, eaque repellendus laborum ducimus minus
                            dignissimos enim libero delectus eligendi illum debitis expedita! Ipsum laudantium saepe labore
                            eum eos, incidunt ducimus nulla animi facere nostrum sed non quia dignissimos autem accusamus
                            eligendi mollitia alias exercitationem sapiente reprehenderit quis ullam minima vel ab. Omnis?
                            Adipisci dicta tempora perspiciatis dolorem amet? Laboriosam quos reprehenderit eum in excepturi
                            inventore quis a molestiae esse accusamus, temporibus veritatis. Labore repellat cupiditate
                            ullam aspernatur, doloribus recusandae sed neque in? Odio perspiciatis, officia aspernatur
                            excepturi vel saepe quaerat animi temporibus delectus optio debitis, fuga sit commodi, dolore
                            repellendus molestiae non? Commodi, placeat! Soluta ut nihil ad nesciunt vel tempora facere!
                        </p>
                    </div>
                </div>
                


                {/* right side */}
                <div className="flex-[1] last:-order-1 md:last:order-none">
                    {/* like box */}
                    <div className="flex justify-center items-center p-3 gap-5 border-b border-zinc-600 h-[150px]">
                        <div className="flex justify-center items-center p-1 gap-2 border border-zinc-700 w-28 h-10 rounded-full">
                            <FaHeart className="text-red-600" />
                            <span>24.5k</span>
                        </div>
                        <div className="flex justify-center items-center p-1 gap-2 border border-zinc-700 w-28 h-10 rounded-full">
                            <FaEye className="" />
                            <span>50k</span>
                        </div>
                        <div className="flex justify-center items-center p-1 gap-2 border border-zinc-700 w-28 h-10 rounded-full">
                            <FaShareAlt className="" />
                            <span>200</span>
                        </div>
                    </div>
                    {/* table content box */}
                    <div className="md:p-20 p-5 pb-20 md:border-none border-b border-zinc-400">
                        <div className="space-y-7">
                            <div className="flex gap-20 ">
                                <p className="md:text-xl font-bold text-gray-500">
                                    Publication Date <br />
                                    <span className="font-light text-white">October 15, 2023</span>
                                </p>
                                <p className="md:text-xl font-bold text-gray-500">
                                    Category <br />
                                    <span className="font-light text-white">Healthcare</span>
                                </p>
                            </div>
                            <div className="flex gap-[105px] md:gap-[110px]">
                                <p className="md:text-xl font-bold text-gray-500">
                                    Reading Time <br />
                                    <span className="font-light text-white">10 Min</span>
                                </p>
                                <p className="md:text-xl font-bold text-gray-500">
                                    Author <br /> <span className="font-light text-white">Dr. Emily Walker</span>
                                </p>
                            </div>
                            <div class="mb-4 p-4 bg-zinc-900 rounded-xl">
                                <h3 class="text-xl  text-gray-500 font-semibold mb-4">Table of Contents</h3>
                                <ul class="list-disc ml-6">
                                    <li class="mb-2">Introduction</li>
                                    <li class="mb-2">AI in Diagnostic Imaging</li>
                                    <li class="mb-2">Predictive Analytics and Disease Prevention</li>
                                    <li class="mb-2">Personalized Treatment Plans</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;
