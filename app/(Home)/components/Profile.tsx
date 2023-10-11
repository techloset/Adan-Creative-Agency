import Header from "@/components/Header";

import Image from "next/image";

import Profile1 from "../../../public/profile1.svg"
import Profile2 from "../../../public/profile2.svg"
import Profile3 from "../../../public/profile3.svg"
import Profile4 from "../../../public/profile4.svg"
import Profile5 from "../../../public/profile5.svg"
import Profile6 from "../../../public/profile6.svg"

const Data = [
    {
        image: Profile1,
        name: "Ronald Richards",
        company: "Google inc.",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    },
    {
        image: Profile2,
        name: "Guy Hawkins",
        company: "Paypal inc.",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    },
    {
        image: Profile3,
        name: "Kristin Watson",
        company: "Microsoft inc.",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    },
    {
        image: Profile4,
        name: "Robert Fox",
        company: "Facebook inc.",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    },
    {
        image: Profile5,
        name: "Savannah Nguyen",
        company: "Twitter inc.",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    },
    {
        image: Profile6,
        name: "Courtney Henry",
        company: "Apple inc.",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    }]

const Profile = () => {
    return (
        <div className={` py-[100px] dark:bg-[#020E2D] bg-[#F9F9FD]`}>
            <div className={`mx-[24px] lg:mx-[80px]  xl:mx-[160px]`}>
                <Header
                    Heading="Testimonials"
                    Text="Some testimonials from our customers"
                />
                <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8`}>
                    {Data.map((item: any, index: number) => {
                        return (
                            <div className="pt-14 flex justify-center" key={index}>
                                <div className={`flex text-center max-w-[352px] flex-col items-center px-8 pb-11 scroll-pt-6 rounded-[20px] shadow-none hover:shadow-xl  dark:bg-[#00113B] bg-exact-white space-y-6`} >
                                    <Image
                                    width={50}
                                    height={50}
                                        src={item.image}
                                        alt=""
                                        className={`-mt-14 rounded-full shadow-2xl w-[120px] h-[120px]`}
                                    />
                                    <div className="flex flex-col dark:text-exact-white space-y-2 items-center">
                                        <h1 className="text-2xl lg:text-lg xl:text-2xl font-semibold">  {item.name} </h1>
                                        <strong className="text-base font-medium dark:text-exact-white text-[#ABAFC7]"> {item.company} </strong>
                                    </div>
                                    <p className="text-lg leading-[32px] lg:text-base xl:text-lg xl:leading-[32px] font-normal dark:text-exact-white text-exact-gray"> {item.text} </p>
                                    <div className="rating flex space-x-2.5">
                                        <div>
                                            <Image
                                                src="/star.svg"
                                                alt=""
                                                width={50}
                                                height={50}
                                                className="w-4 lg:w-3 xl:w-4 h-4 lg:h-3 xl:h-4"
                                            />
                                        </div>
                                        <div>
                                            <Image
                                                src="/star.svg"
                                                alt=""
                                                width={50}
                                                height={50}
                                                className="w-4 lg:w-3 xl:w-4 h-4 lg:h-3 xl:h-4"
                                            />
                                        </div>
                                        <div>
                                            <Image
                                                src="/star.svg"
                                                alt=""
                                                width={50}
                                                height={50}
                                                className="w-4 lg:w-3 xl:w-4 h-4 lg:h-3 xl:h-4"
                                            />
                                        </div>
                                        <div>
                                            <Image
                                                src="/star.svg"
                                                alt=""
                                                width={50}
                                                height={50}
                                                className="w-4 lg:w-3 xl:w-4 h-4 lg:h-3 xl:h-4"
                                            />
                                        </div>
                                        <div>
                                            <Image
                                                src="/star.svg"
                                                alt=""
                                                width={50}
                                                height={50}
                                                className="w-4 lg:w-3 xl:w-4 h-4 lg:h-3 xl:h-4"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}

export default Profile 