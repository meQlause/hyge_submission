"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { FAQSectionProps } from "@/utils/interfaces";
import { Accordion } from "../ui/AccordionItems";

const FAQSection: React.FC<FAQSectionProps> = ({ eyebrow, heading, subheading, cta, items, defaultOpen }) => {
    const [open, setOpen] = useState<number>(defaultOpen);
    const toggle = (i: number) => setOpen((p) => (p === i ? -1 : i));

    return (
        <section className="max-w-[1440px] mx-auto flex flex-col xxl:flex-row xxl:justify-start gap-[80px] w-full min-w-[375px] bg-white px-[40px] xxl:px-[80px] xxl:pt-[120px] pb-[60px]">
            <div className="mx-auto xxl:mx-0 text-center xxl:text-left">
                <div className="inline-flex items-center rounded-full bg-[#28282C] text-white px-3 py-1 text-[12px]  tracking-wide mb-4 ">
                    {eyebrow}
                </div>

                <h2 className="text-[48px]  leading-[120%] font-[500] tracking-tight text-neutral-900">
                    {heading}
                </h2>

                <div className="mt-[16px] mb-[80px] gap-[56px] flex flex-col items-center justify-center xxl:items-start ">
                    <p className="text-[20px] xs:w-[300px] leading-[170%] text-neutral-600">
                        {subheading}
                    </p>
                    {cta && (
                        <button
                            type="button"
                            onClick={cta.onClick}
                            className="inline-flex items-center gap-2 rounded-full bg-[#e7e7e7] border border-neutral-200 px-4 py-2 text-[14px] font-medium text-neutral-900 hover:bg-neutral-50 active:bg-neutral-100 transition"
                        >
                            {cta.label}
                            <div className="bg-black p-[6px] rounded-full">
                                <ArrowRight className="text-white size-[20px] -rotate-45" />
                            </div>
                        </button>
                    )}
                </div>
            </div>

            <div className="rounded-2xl w-full bg-white/0 p-0">
                {items.map((it, i) => (
                    <Accordion.FAQ
                        key={i}
                        index={i}
                        isOpen={open === i}
                        onToggle={toggle}
                        title={it.question}
                    >
                        <p>{it.answer}</p>
                    </Accordion.FAQ>
                ))}
            </div>
        </section >
    );
}

export default FAQSection
