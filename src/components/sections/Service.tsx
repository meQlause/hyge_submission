"use client";

import Image from "next/image";
import { useState } from "react";
import { ServiceSectionProps } from "@/utils/interfaces";
import { Accordion } from "@/components/ui/AccordionItems";


const ServiceSection: React.FC<ServiceSectionProps> = ({ eyebrow, heading, subheading, image, data }) => {
    const [open, setOpen] = useState<number>(0);
    const toggle = (i: number) => setOpen((prev) => (prev === i ? -1 : i));

    return (
        <section className=" w-full min-w-[375px] bg-[#FAFAFA] px-[40px] xxl:px-[80px] py-[120px]">
            <div className="flex flex-col justify-center items-center">
                <div className="inline-flex items-center rounded-full bg-[#28282C] px-[12px]  text-white text-[16px] py-[8px] mb-3">
                    <span className='font-[600] text-[16px]'>{eyebrow}</span>
                </div>

                <h2 className="text-[48px] font-semibold tracking-tight text-neutral-900">
                    {heading}
                </h2>
                <p className="mt-2 text-[20px] w-[295px] text-center text-neutral-600 xxl:w-[800px]">
                    {subheading}
                </p>
            </div>

            <div className="max-w-[1440px] mx-auto mt-[96px] flex flex-col lg2:flex-row gap-[40px] items-start justify-center lg2:gap-[80px]">
                <div className="relative mt-[15px] overflow-hidden rounded-xl bg-neutral-100 w-full min-h-[330px]  lg2:min-h-[493px] lg2:min-w-[432px] xxl:min-w-[600px] xxl:min-h-[685px] xxxl:min-w-[680px] xxxl:min-h-[777px]">
                    <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover"
                        priority
                        sizes="(max-width: 768px) 100vw, 640px"
                    />
                </div>

                <div className="mt-[80px] lg2:my-auto">
                    {data.map((item, index) => (
                        <Accordion.service
                            key={index}
                            index={index}
                            isOpen={open === index}
                            onToggle={toggle}
                            icon={item.icon}
                            title={item.title}
                        >
                            <p>{item.description}</p>
                        </Accordion.service>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ServiceSection