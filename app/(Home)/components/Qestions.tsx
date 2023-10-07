"use client"
import { useState } from "react";

import Header from "@/components/Header";

import Image from "next/image";

const Data = [
    {
        Number: "one",
        Heading: "What are the services provided to customers?",
        Text: "Hello, we provide various services to help your business grow and develop. We help provide ideas, create designs, develop websites and mobile applications, provide support for the growth of business ideas, to help customers market their products online through the marketplace.",
    },
    {
        Number: "two",
        Heading: "How can I submit a proposal for cooperation?",
        Text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, magni suscipit culpa minima incidunt, reiciendis quia fugit commodi beatae laudantium illo deserunt molestias deleniti voluptatum. Aut deleniti quae repudiandae id",
    },
    {
        Number: "three",
        Heading: "I come from a faraway place, can collaboration be done full time online through several meeting applications?",
        Text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem modi cumque possimus rerum placeat, quo ab culpa, recusandae qui itaque dolore optio explicabo laudantium. Doloremque repellat fuga maxime numquam ea.!",
    },
    {
        Number: "four",
        Heading: "How do I get the payment complete?",
        Text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, possimus nisi obcaecati harum facere reprehenderit voluptatibus aut. Labore consequuntur odio quidem eaque cum tempora ut. Molestias, facilis. Ipsa, molestias dignissimos.",
    },
    {
        Number: "five",
        Heading: "How long can the collaboration last?",
        Text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit voluptatum neque ea ducimus ad vero pariatur a consectetur non, at nisi explicabo minus molestiae iusto sunt itaque. Aspernatur, error alias!",
    },
];

const Qestions = () => {


    const [isOpen, setIsOpen] = useState(["one"]);

    const DropDown = ({ Number }: any) => {
        if (isOpen.indexOf(Number) === -1) {
            setIsOpen([Number])
        } else {
            setIsOpen((Item) => Item.filter((item) => item !== Number));
        }
    };

   
    return (
        <div className={` bg-top xl:bg-[url('/QuestionBg.png')] sm:bg-none bg-no-repeat`}>
            <div className={`mx-[24px] lg:mx-[80px] xl:mx-[160px] lg:pt-[200px] pt-[100px]`}>
                <Header
                    Heading="Frequently Ask Question"
                    Text="Some of our frequently asked questions"
                />
                <div className={` pb-16 ${isOpen.length > 1 ? "lg:pb-[100px]" : isOpen.length == 0 ? "lg:pb-[300px]" : "lg:pb-[200px]"}  space-y-8`} >
                    {Data.map((item: any, index: number) => {
                        return (
                            <div key={index} className={` bg-white dark:bg-[#020E2D] p-8 rounded-lg border space-y-7 border-[#D8D8D8] hover:border-exact-purple`} >
                                <div
                                    onClick={() => DropDown(item)}
                                    className={` flex cursor-pointer justify-between items-center ${isOpen?.indexOf(item.Number) > -1 ? "border-b-[1px] pb-7" : "border-none"}`} >
                                    <h1 className="dark:text-exact-white font-medium text-sm lg:text-base">
                                        {item.Heading}
                                    </h1>
                                    <Image
                                        className={`w-3 h-3 ml-4 filter dark:invert cursor-pointer ${isOpen?.indexOf(item.Number) > -1 ? "rotate-180" : ""}`}
                                        src="/Arrow.png"
                                        width={200}
                                        height={200}
                                        alt=""
                                    />
                                </div>
                                <div className={`${isOpen?.indexOf(item.Number) > -1 ? "block" : "hidden"} `} >
                                    <p className="text-exact-gray font-normal text-sm lg:text-lg lg:leading-8 dark:text-exact-white/75">
                                        {item.Text}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}

export default Qestions