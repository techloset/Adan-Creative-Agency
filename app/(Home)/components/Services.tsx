"use client"

import Header from "@/components/Header";
import Bg from "../../../public/Services/Bg.svg";

import { useState } from "react";
import Image from "next/image";

const Data = [
    {
        svgIcon: (
            <g transform="translate(0.000000,36.000000) scale(0.100000,-0.100000)">
                <path d="M91 312 c-64 -64 -85 -105 -85 -167 0 -53 26 -105 63 -124 15 -8 16 -5 13 25 -4 33 32 113 59 129 26 17 79 -63 79 -120 0 -39 9 -44 33 -17 52 57 56 132 11 209 -23 40 -98 113 -116 113 -5 0 -31 -22 -57 -48z" />
            </g>
        ),
        title: "Ideate",
        text: "We help you develop creative ideas so that your business can grow more rapidly",
        bg: "bg-exact-purple",
        fill: "fill-exact-purple",
        dark: "dark:exact-purple",
        shadow: "shadow-exact-purple/50",
    },
    {
        svgIcon: (
            <g transform="translate(0.000000,34.000000) scale(0.100000,-0.100000)">
                <path d="M232 318 c-9 -9 -3 -22 30 -55 39 -40 43 -42 60 -26 18 16 17 18 -19 55 -40 41 -52 45 -71 26z" />
                <path d="M176 265 c-11 -8 -36 -15 -57 -15 -20 0 -41 -6 -46 -12 -18 -24 -72 -187 -64 -193 5 -3 37 25 70 61 39 42 67 64 76 60 26 -9 17 -25 -50 -87 -36 -34 -63 -65 -60 -70 6 -8 169 46 193 64 6 5 12 26 12 47 0 21 7 43 15 50 23 19 18 33 -23 73 -43 42 -41 41 -66 22z" />
            </g>
        ),
        title: "Design",
        text: "We provide services with the best designs than our designer team for your business",
        bg: "bg-exact-red",
        fill: "fill-exact-red",
        dark: "dark:exact-red",
        shadow: "shadow-exact-red/50",
    },
    {
        svgIcon: (
            <g transform="translate(0.000000,32.000000) scale(0.050000,-0.050000)">
                <path d="M28 616 c-18 -28 -16 -427 2 -456 7 -11 75 -20 153 -20 122 0 139 -4 133 -35 -4 -21 -25 -34 -56 -35 -31 0 -50 -11 -50 -30 0 -23 28 -29 130 -29 102 0 130 6 130 29 0 19 -19 30 -50 30 -30 1 -52 14 -56 34 -6 29 15 35 140 40 l146 6 16 144 c8 79 8 187 -1 240 l-16 96 -303 6 c-223 4 -307 -1 -318 -20z m572 -185 l0 -149 -260 -6 -260 -6 0 155 0 155 260 0 260 0 0 -149z" />
            </g>
        ),
        title: "Web Development",
        text: "We help develop company websites to be more professional and attractive",
        bg: "bg-exact-green",
        fill: "fill-exact-green",
        dark: "dark:exact-green",
        shadow: "shadow-exact-green/50",
    },
    {
        svgIcon: (
            <g transform="translate(4.000000,34.000000) scale(0.100000,-0.100000)">
                <path d="M16 324 c-13 -12 -16 -41 -16 -154 0 -173 -2 -170 120 -170 122 0 120 -3 120 170 0 173 2 170 -120 170 -67 0 -92 -4 -104 -16z m184 -134 l0 -100 -80 0 -80 0 0 100 0 100 80 0 80 0 0 -100z" />
            </g>
        ),
        title: "App Development",
        text: "We help you develop creative ideas so that your business can grow more rapidly",
        bg: "bg-exact-yellow",
        fill: "fill-exact-yellow",
        dark: "dark:exact-yellow",
        shadow: "shadow-exact-yellow/50",
    },
    {
        svgIcon: (
            <g transform="translate(0.000000,30.000000) scale(0.100000,-0.100000)">
                <path d="M5 287 c-3 -7 -4 -74 -3 -148 l3 -134 165 0 165 0 0 110 0 110 -65 0 c-63 0 -65 -1 -68 -27 -2 -16 -10 -28 -17 -28 -10 0 -15 17 -17 63 l-3 62 -78 3 c-58 2 -79 -1 -82 -11z m65 -52 c0 -8 -7 -15 -15 -15 -8 0 -15 7 -15 15 0 8 7 15 15 15 8 0 15 -7 15 -15z m70 0 c0 -8 -9 -15 -20 -15 -11 0 -20 7 -20 15 0 8 9 15 20 15 11 0 20 -7 20 -15z m-70 -70 c0 -8 -7 -15 -15 -15 -8 0 -15 7 -15 15 0 8 7 15 15 15 8 0 15 -7 15 -15z m70 0 c0 -8 -9 -15 -20 -15 -11 0 -20 7 -20 15 0 8 9 15 20 15 11 0 20 -7 20 -15z m150 0 c0 -8 -9 -15 -20 -15 -11 0 -20 7 -20 15 0 8 9 15 20 15 11 0 20 -7 20 -15z m-220 -65 c0 -11 -7 -20 -15 -20 -8 0 -15 9 -15 20 0 11 7 20 15 20 8 0 15 -9 15 -20z m66 9 c10 -17 -13 -36 -27 -22 -12 12 -4 33 11 33 5 0 12 -5 16 -11z m150 0 c10 -17 -13 -36 -27 -22 -12 12 -4 33 11 33 5 0 12 -5 16 -11z" />
            </g>
        ),
        title: "Business Growth",
        text: "We also provide services by providing input for your business growth",
        bg: "bg-exact-blue",
        fill: "fill-exact-blue",
        dark: "dark:exact-blue",
        shadow: "shadow-exact-blue/50",

    },
    {
        svgIcon: (
            <g transform="translate(0.000000,32.000000) scale(0.050000,-0.050000)">
                <path d="M247 609 c-5 -11 -6 -151 -3 -310 l6 -289 76 -6 75 -6 -5 314 -6 314 -68 2 c-37 1 -71 -7 -75 -19z" />
                <path d="M489 415 c-6 -16 -8 -113 -5 -217 l6 -188 70 0 70 0 0 210 0 210 -65 6 c-42 4 -69 -3 -76 -21z" />
                <path d="M18 332 c-4 -5 -5 -81 -1 -170 l6 -162 66 0 66 0 10 155 c6 85 6 162 1 170 -9 16 -133 21 -148 7z" />
            </g>
        ),
        title: "Digital marketing",
        text: "We also help you market your products through an online marketplace",
        bg: "bg-exact-orange",
        fill: "fill-exact-orange",
        dark: "dark:exact-orange",
        shadow: "shadow-exact-orange/50",
    },
];

const Services = () => {
    const [hover, setHover] = useState(0);
    return (
        <div className={` relative pb-[100px] lg:pb-[200px] -mt-16 bg-no-repeat bg-bottom`}>
            <div className="bg-top bg-no-repeat xl:hidden lg:hidden md:hidden sm:block xs:block absolute -top-40  -bottom-56 visible">
                <Image src={Bg} alt="" />
            </div>
            <div className="absolute right-0  -bottom-56 invisible lg:visible">
                <Image src={Bg} alt="" />
            </div>
            <div className={`mx-[24px] lg:mx-[80px]  xl:mx-[160px]`}>
                <Header
                    Heading="Our Services"
                    Text="The various services we provide to make your business more powerful"
                />
                <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center text-center gap-x-8 gap-y-[60px]">
                    {Data.map((item, index: number) => {
                        const Hovered = hover === index;
                        return (
                            <div key={index} className="flex justify-center cursor-pointer">
                                <div
                                    onMouseEnter={() => setHover(index)}
                                    className={`self-center py-11 px-[30px] shadow-2xl dark:shadow-blue-900/50   space-y-11 max-w-[352px] flex flex-col rounded-2xl items-center ${Hovered ? `${item.bg}` : "bg-exact-white dark:bg-[#00113B]"}`}>
                                    <div className={`p-8 shadow-xl  rounded-full ${item.shadow} ${Hovered ? "bg-exact-white shadow-gray-800/50" : `${item.bg}`}`}>
                                        <svg className={`${Hovered ? ` ${item.fill}` : "fill-exact-white"} w-[33px] h-[33px]`} viewBox="0 0 33 33"> {item.svgIcon}servie</svg>
                                    </div>
                                    <div className="info space-y-4">
                                        <h3 className={`dark:text-exact-white text-xl lg:text-lg xl:text-xl font-semibold ${Hovered ? "text-exact-white" : "text-black"}`} >
                                            {item.title}
                                        </h3>
                                        <p className={`dark:text-exact-white lg:max-w-[292px] text-lg  leading-[32px] lg:text-[18px] xl:text-[18px] xl:leading-[32px] font-normal ${Hovered ? "text-exact-white" : "text-[#6B6B6B]"}`}>
                                            {item.text}
                                        </p>
                                    </div>
                                    <div className={`dark:bg-[#020E2D] p-[17px] rounded-full hover:relative hover:left-1 hover:bg-[#F3F4F6] dark:fill-blue-600 fill-blue-600 ${Hovered ? `bg-exact-white ${item.fill} dark:bg-exact-white/100 ` : "bg-[#F3F4F6]"} `}>
                                        <svg
                                            className="font-bold w-[11px] h-[11px]"
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
                    })}
                </div>
            </div>
        </div>
    )
}

export default Services