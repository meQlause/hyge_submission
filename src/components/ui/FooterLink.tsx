import { FooterLinkProps } from "@/utils/interfaces";
import Link from "next/link";
import React from "react";

export const FooterLink: React.FC<FooterLinkProps> = ({
    href,
    children,
}) => {
    return (
        <Link
            href={href}
            className="hover:text-white transition-colors duration-200"
        >
            <span className="text-[18px] font-[400]">
                {children}
            </span>
        </Link>
    );
}
