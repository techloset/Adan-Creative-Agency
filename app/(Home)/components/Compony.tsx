import Image from "next/image";

import Header from "@/components/Header";

import Compony1 from "../../../public/company.svg"
import Compony2 from "../../../public/company2.svg"
import Compony3 from "../../../public/company3.svg"
import Compony4 from "../../../public/company4.svg"
import Compony5 from "../../../public/company5.svg"
import Compony6 from "../../../public/company6.svg"
import Compony7 from "../../../public/company7.svg"
import Compony8 from "../../../public/company8.svg"
import Compony9 from "../../../public/company9.svg"
import Compony10 from "../../../public/company10.svg"


const Compony = () => {
    return (
        <div className={`customersSec mx-[24px] lg:mx-[80px]  xl:mx-[160px]`}>
            <Header
                Heading="Some of Our Great Customers"
                Text="Some of the companies we have worked with"
            />
            <div className=" md:pt-10 pb-20 lg:pb-[200px] space-y-11">
                <div className="grid grid-cols-1 md:grid-cols-3 md:-mt-20 lg:-mt-10 lg:grid-cols-5 sm:justify-between    justify-around lg:gap-y-[60px] lg:gap-x-20 md:gap-x-36 gap-x-auto space-y-11 lg:space-y-0">
                    <div className="grid items-end md:justify-start justify-center">
                        <Image src={Compony1} alt="image not found" />
                    </div>
                    <div className="grid justify-center">
                        <Image src={Compony2} alt="image not found" />
                    </div>
                    <div className="grid justify-center md:justify-end">
                        <Image src={Compony3} alt="image not found" />
                    </div>
                    <div className="grid justify-center md:justify-start">
                        <Image src={Compony4} alt="image not found" />
                    </div>
                    <div className="grid justify-center lg:justify-end">
                        <Image src={Compony5} alt="image not found" />
                    </div>
                    <div className="grid justify-center lg:justify-start md:justify-end">
                        <Image src={Compony6} alt="image not found" />
                    </div>
                    <div className="grid justify-center md:justify-start">
                        <Image src={Compony7} alt="image not found" />
                    </div>
                    <div className="grid justify-center">
                        <Image src={Compony8} alt="image not found" />
                    </div>
                    <div className="grid justify-center md:justify-end">
                        <Image src={Compony9} alt="image not found" />
                    </div>
                    <div className="grid justify-center lg:justify-end">
                        <Image src={Compony10} alt="image not found" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Compony