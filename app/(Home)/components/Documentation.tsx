
import Header from "@/components/Header";

import Image from "next/image";
import Bg from "../../../public/Doc/Bg.png"
import video from "../../../public/Doc/video.svg"

const Documentation = () => {
  return (
    <>
     <div className={` mx-[24px] lg:mx-[80px]  xl:mx-[160px]`}>
     <div className="heading space-y-5 xl:px-4 sm:p-0 mb-[60px] max-w-[1120px] mx-auto">
            <h6 className="text-exact-red dark:text-exact-light-orange text-center text-xl font-semibold">
            Our Documentation
            </h6>
            <h3 className="text-center text-[#111029] dark:text-white tracking-[-0.8px] text-xl md:text-2xl lg:text-[42px] xl:text-[42px] px-1 font-semibold lg:leading-[56px]">
            See what our profile is like and how we work for your business
            </h3>
        </div>
      </div>
      <div
        className={` relative grid grid-cols-1 w-full justify-center`}>
        <Image src={Bg} alt="image not found" className="w-full" />
        <div className="flex justify-center absolute top-2 mx-[24px] lg:mx-[80px]  xl:mx-[160px]">
          <Image
            src={video}
            alt=""
            className="w-[5000px] mb-10"
          />
        </div>
      </div>

    </>
  )
}

export default Documentation