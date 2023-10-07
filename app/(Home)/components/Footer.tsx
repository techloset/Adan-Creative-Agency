import Image from "next/image";
import Link from "next/link";


import Facebook from "../../../public/facebook.svg"
import Twitter from "../../../public/twitter.svg"
import Insta from "../../../public/intsagram.svg"
import In from "../../../public/In.svg"

const Footer = () => {
    return (
        <>
            <div className={` relative dark:bg-[#00113B]`}>
                <Image src="/curve.png" alt="" height={1000} width={1000} className="w-full absolute top-40 " />
                <Image src="/curve.png" alt="" height={1000} width={1000} className="w-full absolute bottom-5 " />
                {/* Card One */}
                <div className="mx-[24px] lg:mx-[80px] xl:mx-[160px] py-[100px] lg:py-[200px] relative">
                    <div className="rounded-[20px] text-exact-white bg-exact-yellow text-center pt-16 pb-[84px]">
                        <p className="pb-2 md:pb-3 xl:pb-4 text-sm md:text-base font-medium">Are You Ready For</p>
                        <h1 className="pb-4 md:pb-6 xl:pb-8 text-[21px] md:text-8 xl:text-[42px] leading-7 xl:leading-[56px] font-semibold">Start a New Project</h1>
                        <div className="flex justify-center">
                            <button className={`shadow-2xl shadow-exact-red/50 md:max-w-fit py-[19px] px-[42.5px] bg-exact-purple rounded-xl `}>
                                <span className="flex items-baseline">
                                    <p className="text-base font-semibold leading-[26px] text-exact-white">Start Now</p>
                                    <Image src="/whitearrow.svg" alt="icon" width={50} height={50} className="w-[20px] h-[14px] ml-4" />
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="bg-[#00113B] mt-40 relative">
                    <div className="mx-[24px] lg:mx-[80px] xl:mx-[160px] text-exact-white relative pt-40">
                        {/*Card Two  */}
                        <div className="w-full mx-auto absolute -top-40">
                            <div className="text-center rounded-[20px]  bg-exact-purple pt-[60px] pb-[80px]">
                                <p className="pb-2 md:pb-3 xl:pb-4 text-sm md:text-base font-medium"> Get Notified About Project</p>
                                <h1 className="pb-4 md:pb-6 xl:pb-8 text-[21px] md:text-8 xl:text-[42px] leading-7 xl:leading-[56px] font-semibold"> Subscribe Now</h1>
                                <div className="flex justify-center">
                                    <div className="flex justify-center text-black/75 items-center w-fit relative">
                                        <input type="email" placeholder="Email" className="py-5 pl-7 pr-14 rounded-[11px] text-lg leading-[32px] font-normal mx-5 md:w-[500px] w-full " />
                                        <Image width={150} height={150} src="/send.png" alt="" className="w-[19px] h-[18px] absolute right-12 cursor-pointer" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Footer */}
                        <div className="grid grid-cols-1 space-y-8  gap-x-16 justify-between lg:grid-cols-10 mt-20 pb-11">
                            <div className="col-span-4">
                                <Image
                                    src="/Logo.svg"
                                    alt="Logo"
                                    width={100}
                                    height={100}
                                    className="relative top-2 -left-9"
                                />
                                <p className="text-base max-w-[365px] font-medium opacity-75">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                    do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                                    irure dolor in reprehenderit in voluptate velit esse cillum
                                    dolore eu fugiat nulla pariatur.
                                </p>
                            </div>
                            <div className="col-span-4 space-y-8 ">
                                <h2 className="text-xl font-semibold">Our Office</h2>
                                <Image src="/world.svg" width={1000} height={1000} alt="map" className="w-full" />
                            </div>
                            <div className="col-span-2 space-y-8 ">
                                <h2 className="text-xl">Contact</h2>
                                <div className="space-y-5 opacity-75">
                                    <p className="text-base font-medium">Jl KH Samanhudi Metro Atom Plaza Bl AKS 1/11, Dki Jakarta</p>
                                    <p className="text-base font-medium">info@yourdomain .com</p>
                                    <div><p className="text-base font-medium"> +62 (0) 000 0000 00 </p></div>
                                </div>
                            </div>
                        </div>
                        <div className="border-[1px] mb-16 lg:mb-8"></div>
                        <div className="flex lg:flex-row text-[#ABAFC7] space-y-8  flex-col justify-center lg:justify-between pb-[68px] text-base font-medium items-center">
                            <p className="lg:mt-5">© 2021 Creative Agency</p>
                            <ul className="flex space-x-4 lg:space-x-9">
                                <li className="cursor-pointer hover:text-exact-blue"><Link href={"#"}>Home</Link></li>
                                <li className="cursor-pointer hover:text-exact-blue"><Link href={"#"}>Work</Link></li>
                                <li className="cursor-pointer hover:text-exact-blue"><Link href={"#"}>About</Link></li>
                                <li className="cursor-pointer hover:text-exact-blue"><Link href={"#"}>Pricing</Link></li>
                                <li className="cursor-pointer hover:text-exact-blue"><Link href={"#"}>Contact</Link> </li>
                            </ul>
                            <div className="flex space-x-[10px]">
                               <Link href={"#"}><Image src={Facebook} alt="" className="cursor-pointer" /></Link> 
                               <Link href={"#"}><Image src={Insta} alt="" className="cursor-pointer" /></Link> 
                               <Link href={"#"}><Image src={In} alt="" className="cursor-pointer" /></Link> 
                               <Link href={"#"}><Image src={Twitter} alt="" className="cursor-pointer" /></Link> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer