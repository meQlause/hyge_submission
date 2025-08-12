/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
"use client";

import { useId } from "react";
import { Plus } from "lucide-react";
import React from "react";
import { AccordionItemProps } from "@/utils/interfaces";


const AccordionItemFAQ: React.FC<AccordionItemProps> = ({
    index,
    isOpen,
    onToggle,
    title,
    children,
}) => {
    const panelId = useId();
    const buttonId = useId();

    return (
        <>
            <button
                id={buttonId}
                className={`cursor-pointer w-full xxl:max-w-[800px] bg-[#fafafa] px-[20px] flex items-center gap-3 py-5 text-left focus:outline-none transition-all duration-0 ${isOpen ? "rounded-t-2xl" : "rounded-2xl"
                    }`}
                aria-controls={panelId}
                aria-expanded={isOpen}
                onClick={() => onToggle(index)}
            >
                <span className="flex-1 font-[500] text-[20px]  text-neutral-900">
                    {title}
                </span>
                <Plus
                    aria-hidden
                    className={`size-4 text-neutral-500 shrink-0 transition-transform duration-300 ${isOpen ? "rotate-45" : "rotate-0"
                        }`}
                />
            </button>

            <div
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
                className={`xxl:max-w-[800px] grid mb-[20px] px-[20px] ${isOpen
                    ? "grid-rows-[1fr] rounded-b-2xl bg-[#fafafa]"
                    : "grid-rows-[0fr] rounded-t-2xl bg-transparent"
                    } custom-transition`}
            >
                <div className="overflow-hidden">
                    <div
                        className={`pb-6 text-[16px] font-[400] leading-[170%] text-neutral-600 ${!isOpen && "text-white"
                            }`}
                    >
                        {children}
                    </div>
                </div>
            </div>
        </>
    );
};

const AccordionItemService: React.FC<AccordionItemProps> = ({
    index, isOpen, icon: Icon, onToggle, title, children
}) => {
    const panelId = useId();
    const buttonId = useId();

    return (
        <div className="border-b  border-neutral-200">
            <button
                title="service"
                id={buttonId}
                className={`px-2 ${isOpen && "bg-black/5"} w-full hover:bg-black/5 cursor-pointer  transition-all duration-500 flex items-center gap-3 py-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900/20`}
                aria-controls={panelId}
                aria-expanded={isOpen}
                onClick={() => onToggle(index)}
            >
                {Icon && <img src={Icon} className="shrink-0 size-[40px] text-neutral-600" />}
                <span className="flex-1 size-[20px] font-[500] md:text-base text-neutral-800 text-left">
                    {title}
                </span>
                <Plus
                    className={`size-[18px] text-neutral-500 transform transition-transform duration-300
                    ${isOpen ? "rotate-45" : "rotate-0"}`}
                />
            </button>

            <div
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
                className={`grid transition-[grid-template-rows] duration-300 ease-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
            >
                <div className="overflow-hidden">
                    <div className="bg-black/5 px-2 pb-6 text-[16px] leading-[170%] text-neutral-600">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}


export const Accordion = {
    FAQ: AccordionItemFAQ,
    service: AccordionItemService
} as const;
