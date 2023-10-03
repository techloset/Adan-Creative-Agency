import Image from "next/image";

import Header from "@/components/Header";

const Interior = () => {
  return (
    <div className={`relative lg:pb-[200px] pb-[100px] bg-bottom`}>
      <Image src="/curve.png" alt="" height={1000} width={1000} className="w-full absolute  xl:top-56 md:top-10" />
      <Image src="/curve.png" alt="" height={1000} width={1000} className="w-full absolute    xl:-bottom-80 md:-bottom-20" />
      <div className={`mx-[24px] lg:mx-[80px]  xl:mx-[160px]`}>
        <Header
          Heading="Working space"
          Text="Let’s meet our interior room decoration"
        />
      </div>
      <div className={`mt-10 relative`}>
        <div className="mx-[24px] lg:mx-[80px] xl:mx-[160px] gap-8 grid grid-cols-1 md:grid-cols-3">
          <div className="space-y-8">
            <Image src="/interior1.svg" height={1000} width={1000} className="w-full" alt="" />
            <Image src="/interior5.svg" height={1000} width={1000} className="w-full" alt="" />
          </div>
          <div className="space-y-8">
            <Image src="/interior4.svg" height={1000} width={1000} className="w-full" alt="" />
            <Image src="/interior3.svg" height={1000} width={1000} className="w-full" alt="" />
          </div>
          <div className="space-y-8">
            <Image src="/interior2.svg" height={1000} width={1000} className="w-full" alt="" />
            <Image src="/interior6.svg" height={1000} width={1000} className="w-full" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Interior