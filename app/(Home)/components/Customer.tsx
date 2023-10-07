import Image from "next/image";
const Customer = () => {
  return (
    <div className=" lg:mb-[200px]  bg-exact-white dark:bg-[#020E2D] py-[105px]">
      <div className={`mx-[24px] lg:mx-[80px]  xl:mx-[160px] flex flex-col lg:flex-row gap-y-10 space-x-10 justify-between items-center`}>
        <div className="grid  grid-cols-1 md:grid-cols-2 gap-10 justify-center">
          <div className="grid gap-10 md:mt-12">
          <div className="rounded-[20px] py-[72px] space-y-5 px-7 text-center dark:bg-exact-purple  bg-exact-white">
              <h2 className=" text-[56px] lg:text-4xl xl:text-[56px] leading-[72px] xl:leading-[72px] font-semibold text-exact-purple dark:text-exact-white " >
                70K+
              </h2>
              <p className="max-w-[214px] font-normal text-lg leading-[32px] dark:text-[#FFFFFF] text-[#111029]">
              We have more than customers
              </p>
            </div>


            <div className=" rounded-[20px] py-[72px] space-y-5 px-7 text-center dark:bg-exact-purple bg-exact-white">
              <h2 className="text-exact-red text-[56px] lg:text-4xl xl:text-[56px] leading-[72px] xl:leading-[72px] font-semibold  " >
              10M+
              </h2>
              <p className="max-w-[214px] font-normal text-lg leading-[32px] dark:text-[#FFFFFF] text-[#111029]">
              People who are helped because of our hard work
              </p>
            </div>
 
          </div>
          <div className="grid gap-10 md:mb-12">
          <div className=" rounded-[20px] py-[72px] space-y-5 px-7 text-center dark:bg-exact-purple bg-exact-white">
              <h2 className=" text-[56px] lg:text-4xl xl:text-[56px] leading-[72px] xl:leading-[72px] font-semibold text-exact-orange" >
              100+
              </h2>
              <p className="max-w-[214px] font-normal text-lg leading-[32px] dark:text-[#FFFFFF] text-[#111029]">
              Projects we have completed
              </p>
            </div>

            <div className=" rounded-[20px] py-[72px] space-y-5 px-7 text-center dark:bg-exact-purple bg-exact-white">
              <h2 className=" text-[56px] lg:text-4xl xl:text-[56px] leading-[72px] xl:leading-[72px] font-semibold text-exact-green" >
                200+
              </h2>
              <p className="max-w-[214px] font-normal text-lg leading-[32px] dark:text-[#FFFFFF] text-[#111029]">
              Support from world-renowned companies&quot;
              </p>
            </div>
            
          </div>
        </div>

        <div className="grid justify-center lg:justify-end">
          <div className="space-y-9 max-w-[460px] ">
            <h1 className="text-3xl text-[#111029] dark:text-exact-white md:text-5xl lg:text-[56px] lg:leading-[72px] font-semibold">
              Customer satisfaction is our first priority
            </h1>
            <p className="text-lg dark:text-exact-white font-normal text-exact-gray">
              We serve many customers, ranging from small businesses, medium
              entrepreneurs, to world-renowned companies. Their satisfaction
              is our pleasure. We strive to provide the best service by:
            </p>

            <ul className={`list-outside dark:text-exact-white space-y-4 text-exact-gray text-lg`}>
              <li className="flex items-center">
                <Image src="/checkmark.svg"  width={100} height={100}  alt="" className="lg:w-[27px] w-5 lg:h-[27px] h-5 mr-6" />
                <p className="text-base font-normal lg:text-lg">Provide idea support from our creative team</p>
              </li>
              <li className="flex items-center">
                <Image src="/checkmark.svg"   width={100} height={100} alt="" className="lg:w-[27px] w-5 lg:h-[27px] h-5 mr-6" />
                <p className="text-base font-normal lg:text-lg">Provide attractive and professional design services</p>
              </li>
              <li className="flex items-center">
                <Image src="/checkmark.svg"  width={100} height={100}  alt="" className="lg:w-[27px] w-5 lg:h-[27px] h-5 mr-6" />
                <p className="text-base font-normal lg:text-lg">Support for service 24 hours a week</p>
              </li>
              <li className="flex items-center">
                <Image src="/checkmark.svg"  width={100} height={100}  alt="" className="lg:w-[27px] w-5 lg:h-[27px] h-5 mr-6" />
                <p className="text-base font-normal lg:text-lg">Helping our customers to grow their business</p>
              </li>
              <li className="flex items-center">
                <Image src="/checkmark.svg"  width={100} height={100}  alt="" className="lg:w-[27px] w-5 lg:h-[27px] h-5 mr-6" />
                <p className="text-base font-normal lg:text-lg">Provide support to market products through online marketplace</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Customer