"use client";

import Image from "next/image";
import { Quote } from "lucide-react";
import { FeaturedProjectProps } from "@/utils/interfaces";
import { FeaturedCarousel } from './../ui/Carousel';

const FeaturedProjectSection: React.FC<FeaturedProjectProps> = ({ eyebrow, heading, subheading, data }) => {
    return (
        <section className="max-w-[1440px] xxxl:mx-auto w-full min-w-[375px] mx-auto px-[40px] xxl:px-[80px] py-[120px]">
            <div className="flex flex-col justify-center items-center">
                <div className="inline-flex items-center rounded-full bg-[#28282C] px-[12px]  text-white text-[16px] py-[8px] mb-3">
                    <span className='font-[600] text-[16px]'>{eyebrow}</span>
                </div>

                <h2 className="text-[48px] font-semibold xxl:max-w-[700px] w-full text-center lg2:max-w-[400px] tracking-tight text-neutral-900">
                    {heading}
                </h2>
                <p className="mt-[16px] mb-[120px] text-[20px] w-full lg2:max-w-[500px] max-w-[295px] text-center text-neutral-600">
                    {subheading}
                </p>
            </div>

            <div className="flex lg2:hidden flex-col gap-[300px]"
            >
                <FeaturedCarousel featured={data} />
            </div>

            <div className="hidden lg2:flex flex-col lg2:gap-[20px] xxl:gap-[460px]"
            >

                {data.map((item, index) => {
                    const isEven = (index + 1) % 2 === 0;

                    return (
                        <article
                            key={index}
                            className={[
                                "bg-[#E9ECF2] backdrop-blur-sm rounded-xl lg2:p-[20px] xxl:p-[32px] overflow-hidden",
                                "lg2:grid lg2:grid-cols-[560px_1fr] lg2:rounded-[10px]",
                                isEven
                                    ? "lg2:bg-[#0E0F12] lg2:text-white"
                                    : "lg2:bg-[#E9ECF2] lg2:text-[#101014]",
                            ].join(" ")}
                        >
                            <div className="p-4 lg2:p-0">
                                <div className="relative lg2:rounded-[10px] overflow-hidden bg-neutral-200 aspect-[4/3] lg2:aspect-auto lg2:h-full">
                                    <Image
                                        src={item.image.src}
                                        alt={item.image.alt}
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 100vw, 640px"
                                        priority
                                    />
                                </div>
                            </div>

                            <div className="px-5 pb-5 lg2:px-10 lg2:py-8">
                                <h3
                                    className={[
                                        "text-[40px] font-[500] tracking-tight",
                                        "text-[#101014]",
                                        isEven ? "lg2:text-white" : "lg2:text-[#101014]",
                                    ].join(" ")}
                                >
                                    {item.title}
                                </h3>
                                <p
                                    className={[
                                        "mt-[15px] text-[16px] leading-[170%] text-neutral-600",
                                        isEven ? "lg2:text-neutral-300" : "lg2:text-neutral-700",
                                    ].join(" ")}
                                >
                                    {item.description}
                                </p>
                                <div className="mt-[24px] flex flex-wrap gap-2">
                                    {item.tags?.map((t, i) => (
                                        <span
                                            key={i}
                                            className={[
                                                "inline-flex items-center rounded-full px-2.5 py-1 text-xs",
                                                "bg-[#28282C] text-white",
                                                isEven ? "lg2:bg-white/10 lg2:text-white" : "",
                                            ].join(" ")}
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>
                                {item.testimonial?.quote && (
                                    <div
                                        className="xl2:block hidden px-5 pb-5 lg2:px-0 lg2:col-span-2 lg2:py-6"
                                    >
                                        <div className="flex items-start gap-2">
                                            <Quote
                                                className={[
                                                    "w-4 h-4 mt-1 shrink-0",
                                                    "text-neutral-400",
                                                    isEven ? "lg2:text-neutral-400" : "lg2:text-neutral-500",
                                                ].join(" ")}
                                                aria-hidden
                                            />
                                            <p
                                                className={[
                                                    "text-[18px] leading-[170%] text-neutral-700",
                                                    isEven ? "lg2:text-neutral-300" : "lg2:text-neutral-700",
                                                ].join(" ")}
                                            >
                                                {item.testimonial.quote}
                                            </p>
                                        </div>
                                        <div className="mt-[24px] flex ml-[24px] lg2:mx-0 items-center gap-3">
                                            {item.testimonial.avatar && (
                                                <div className="relative size-[50px] rounded-full overflow-hidden bg-neutral-200">
                                                    <Image
                                                        src={item.testimonial.avatar}
                                                        alt={item.testimonial.author}
                                                        fill
                                                        className="object-cover"
                                                        sizes="28px"
                                                    />
                                                </div>
                                            )}
                                            <span
                                                className={[
                                                    "text-[16px] text-neutral-700",
                                                    isEven
                                                        ? "lg2:text-neutral-200"
                                                        : "lg2:text-neutral-700",
                                                ].join(" ")}
                                            >
                                                {item.testimonial.author}
                                            </span>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {item.testimonial?.quote && (
                                <div
                                    className="xl2:hidden px-5 pb-5 lg2:px-0 lg2:col-span-2 lg2:py-6"
                                >
                                    <div className="flex items-start gap-2">
                                        <Quote
                                            className={[
                                                "w-4 h-4 mt-1 shrink-0",
                                                "text-neutral-400",
                                                isEven ? "lg2:text-neutral-400" : "lg2:text-neutral-500",
                                            ].join(" ")}
                                            aria-hidden
                                        />
                                        <p
                                            className={[
                                                "text-[18px] leading-[170%] text-neutral-700",
                                                isEven ? "lg2:text-neutral-300" : "lg2:text-neutral-700",
                                            ].join(" ")}
                                        >
                                            {item.testimonial.quote}
                                        </p>
                                    </div>
                                    <div className="mt-[24px] flex ml-[24px]  items-center gap-3">
                                        {item.testimonial.avatar && (
                                            <div className="relative size-[50px] rounded-full overflow-hidden bg-neutral-200">
                                                <Image
                                                    src={item.testimonial.avatar}
                                                    alt={item.testimonial.author}
                                                    fill
                                                    className="object-cover"
                                                    sizes="28px"
                                                />
                                            </div>
                                        )}
                                        <span
                                            className={[
                                                "text-[16px] text-neutral-700",
                                                isEven
                                                    ? "lg2:text-neutral-200"
                                                    : "lg2:text-neutral-700",
                                            ].join(" ")}
                                        >
                                            {item.testimonial.author}
                                        </span>
                                    </div>
                                </div>
                            )}
                        </article>
                    );
                })}
            </div>
        </section >
    );
}

export default FeaturedProjectSection