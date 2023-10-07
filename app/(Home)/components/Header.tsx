"use client"
import Image from "next/image";
import Link from "next/link";

import React, { useState } from "react";
import styles from "../Home.module.css"

const Header = () => {
    const [openMenu, setOpenMenu] = useState(false);

    return (
        <>
            <div className={`bg-center  ${openMenu ? styles.bgNavbar : null}`}>
                <nav className={`mx-[24px] lg:mx-[80px]  xl:mx-[160px] flex flex-col md:flex-row justify-between items-center ${!openMenu ? "h-[160px]" : "h-screen"} `}>
                    <div className={`flex w-full md:max-w-fit justify-between items-center ${openMenu ? "border-b-2" : "border-none"} border-exact-black/25 dark:border-exact-white pb-4 md:border-none `}>
                        <Image
                            src="/Logo.svg"
                            alt="Logo"
                            width={100}
                            height={100}
                            className="relative top-4 -left-8"
                        />
                        <div onClick={() => setOpenMenu(openMenu === false ? true : false)} className="md:hidden cursor-pointer">
                            <Image
                                src={!openMenu ? "/OpenMenu.png" : "/CloseMenu.png"}
                                className="filter dark:invert"
                                alt="mobileMenu"
                                width={40}
                                height={40}
                            />
                        </div>
                    </div>
                    <ul className={`flex flex-col items-center md:space-x-20 space-y-10 ${!openMenu ? "invisible md:visible" : "visible"} md:space-y-0 mt-10 md:mt-0 h-screen md:h-auto md:flex-row`} >
                        <li className={` text-exact-purple cursor-pointer dark:text-exact-yellow text-xl  hover:text-exact-purple  dark:hover:text-exact-yellow`}><Link href={"#"}>Home</Link></li>
                        <li className={` text-exact-gray cursor-pointer dark:text-white text-xl  hover:text-exact-purple  dark:hover:text-exact-yellow`}><Link href={"#"}>Work</Link></li>
                        <li className={`text-exact-gray cursor-pointer dark:text-white text-xl  hover:text-exact-purple  dark:hover:text-exact-yellow`}><Link href={"#"}>About</Link></li>
                    </ul>
                    <button className={`text-base w-full ${!openMenu ? "invisible md:visible" : "visible"} md:max-w-fit leading-[26px] font-semibold md:shadow-[-5px_10px_30px_rgba(76,64,247,0.5)] py-[19px] px-[35px] bg-exact-purple rounded-xl text-white`}>Contact us</button>
                </nav>
            </div>
        </>
    );
};

export default Header;
