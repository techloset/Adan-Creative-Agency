import Image from "next/image";
import BgDesktop from "../../../public/Dashboard/BgDeskTop.png"
import BgMobile from "../../../public/Dashboard/Bgmobile.png"
import Arrow from "../../../public/Dashboard/RightArrow.svg"

const Dashboard = () => {
    return (
        <div className={`bg-bottom pb-[100px] lg:pb-[200px] bg-no-repeat lg:bg-none `}>
            <div className="absolute lg:right-0 w-fit  invisible lg:visible">
                <Image src={BgDesktop} alt="bgHeroSec" />
            </div>
            <div className="mx-[24px] lg:mx-[80px]  xl:mx-[160px]">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="space-y-6 xl:mt-[80px] my-20 dark:text-exact-white">
                        <h1 className="text-2xl text-[#111029] dark:text-exact-white md:text-[42px] md:leading-[52px] xl:text-[56px] xl:leading-[72px]  tracking-[-0.8px] font-semibold">Make your business<span className="text-exact-orange  dark:text-exact-light-orange">{" "}more powerful{" "}</span><br />with us</h1>
                        <p className=" md:text-[17px] text-[15px] xl:text-lg leading-[32px] lg:!w-[380px] !font-normal text-exact-gray dark:text-exact-white">
                            We provide various services to make{" "}
                            <br className="hidden xl:inline" /> your business grow and get
                            bigger. Your satisfaction is our first priority.
                        </p>
                        <button className={`w-fit shadow-[-5px_10px_30px_rgba(76,64,247,0.5)] py-[19px] px-[35px] bg-exact-purple rounded-xl`}>
                            <span className="flex items-baseline">
                                <p className="text-base font-semibold leading-[26px] text-exact-white">
                                    Get Started
                                </p>
                                <Image
                                    src={Arrow}
                                    alt="icon"
                                    className="w-[20px] h-[14px] ml-4"
                                />
                            </span>
                        </button>
                    </div>
                    <div className="order-first lg:order-none w-full">
                        <Image
                            src={BgMobile}
                            className="lg:invisible w-full"
                            alt="heroImage"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard