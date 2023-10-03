
import Header from "@/components/Header";

import Image from "next/image";
import Bg from "../../../public/Doc/Bg.png"
import video from "../../../public/Doc/video.svg"

const Documentation = () => {
  return (
    <>
     <div className={` mx-[24px] lg:mx-[80px]  xl:mx-[160px]`}>
        <Header
          Heading="Our Documentation"
          Text="See what our profile is like and how we work for your business"
        />
      </div>
      <div
        className={` relative grid grid-cols-1 w-full justify-center`}>
        <Image src={Bg} alt="image not found" className="w-full" />
        <div className="flex justify-center absolute top-2 mx-[24px] lg:mx-[80px]  xl:mx-[160px]">
          <Image
            src={video}
            alt=""
            className="w-[5000px]"
          />
        </div>
      </div>

    </>
  )
}

export default Documentation