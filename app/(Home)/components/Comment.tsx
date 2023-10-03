"use client"


import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import Image from "next/image";

import quotationMarks from "../../../public/Quoations.svg";

const Comment = () => {
    return (
        <div className="bg-[#FE9602] dark:bg-[#020E2D] py-[100px] px-3 md:px-0">
            <div className="relative mx-[24px] lg:mx-[80px]  xl:mx-[160px]">
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    loop={false}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: true,
                    }}
                    navigation={{
                        nextEl: ".image-swiper-button-next",
                        prevEl: ".image-swiper-button-prev",
                    }}
                    pagination={{ clickable: true, type: "bullets" }}
                    className="w-[85%]"
                >
                    <SwiperSlide>
                        <div className="grid text-white space-y-[44px]">
                            <div className="grid justify-center">
                                <Image src={quotationMarks} alt="quoteMark" />
                            </div>
                            <div className="grid justify-center">
                                <p className="text-lg md:text-2xl xl:text-[28px] xl:leading-10 font-normal px-4 text-white lg:w-[723px] text-center">
                                    We are serious about providing our best service to all the customers
                                    we help. Customers satisfaction is our number one priority.
                                </p>
                            </div>
                            <p className="text-lg md:text-xl lg:text-xl pb-[34px] text-center">
                                Mark Garfield
                                <br />
                                CEO & Head of Product
                            </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="grid text-white space-y-[44px]">
                            <div className="grid justify-center">
                                <Image src={quotationMarks} alt="quoteMark" />
                            </div>
                            <div className="grid justify-center">
                                <p className="text-lg md:text-2xl xl:text-[28px] xl:leading-10 font-normal px-4 text-white lg:w-[723px] text-center">
                                    We are serious about providing our best service to all the customers we help. Customers satisfaction is our number one priority.
                                </p>
                            </div>
                            <p className="text-lg md:text-xl lg:text-xl pb-[34px] text-center">
                                Mark Garfield
                                <br />
                                CEO & Head of Product
                            </p>
                        </div>
                    </SwiperSlide>
                </Swiper>
                <div className="right-0 top-[50%] p-4 absolute rounded-full dark:bg-exact-gray dark:fill-white hover:fill-white hover:bg-exact-purple bg-white w-fit fill-exact-purple">
                    <svg
                        className="font-bold w-[12px] h-[12px]"
                        width="12.000000pt"
                        height="12.000000pt"
                        viewBox="0 0 12.000000 12.000000"
                        preserveAspectRatio="xMidYMid meet"
                    >
                        <g transform="translate(0.000000,12.000000) scale(0.100000,-0.100000)">
                            <path d="M65 90 c18 -20 17 -20 -18 -20 -21 0 -37 -4 -37 -10 0 -5 16 -10 37 -10 35 0 36 0 18 -20 -26 -29 -3 -24 25 5 l23 25 -23 25 c-28 29 -51 34 -25 5z" />
                        </g>
                    </svg>
                </div>
                <div className="rotate-180 top-[50%] p-4 absolute rounded-full dark:bg-exact-gray dark:fill-white hover:fill-white hover:bg-exact-purple bg-white w-fit fill-exact-purple">
                    <svg
                        className="font-bold w-[12px] h-[12px]"
                        width="12.000000pt"
                        height="12.000000pt"
                        viewBox="0 0 12.000000 12.000000"
                        preserveAspectRatio="xMidYMid meet"
                    >
                        <g transform="translate(0.000000,12.000000) scale(0.100000,-0.100000)">
                            <path d="M65 90 c18 -20 17 -20 -18 -20 -21 0 -37 -4 -37 -10 0 -5 16 -10 37 -10 35 0 36 0 18 -20 -26 -29 -3 -24 25 5 l23 25 -23 25 c-28 29 -51 34 -25 5z" />
                        </g>
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default Comment