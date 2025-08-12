"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { StatsProps } from "@/utils/interfaces";

function StatItem({
    title,
    description,
    index,
}: {
    title: string;
    description: string;
    index: number;
}) {
    const ref = useRef<HTMLDivElement | null>(null);
    const inView = useInView(ref, { once: true, amount: 0.35 });

    return (
        <motion.div
            ref={ref}
            className="text-left mb-[120px]"
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{
                duration: 0.3,
                ease: "easeOut",
                delay: Math.min(0.36, index * 0.08),
            }}
        >
            <h3 className="text-[72px] font-[300]">{title.split(" ")[0]}</h3>
            <h3 className="text-[20px] font-[600] mb-[8px]">
                {title.split(" ").slice(1).join(" ")}
            </h3>
            <p className="lg2:whitespace-nowrap xxl:whitespace-normal text-[16px] max-w-64 w-full font-[400]">
                {description}
            </p>
        </motion.div>
    );
}

const StatsSection: React.FC<StatsProps> = ({ stats }) => {
    return (
        <section className="max-w-[1440px] xxxl:mx-auto w-full min-w-[375px] mx-auto px-[40px] xxl:px-[80px] pt-[120px] bg-white text-black">
            <div className="grid grid-cols-1 lg2:grid-cols-2 xxl:grid-cols-4 gap-[8px]">
                {stats.map((stat, i) => (
                    <StatItem
                        key={i}
                        title={stat.title}
                        description={stat.description}
                        index={i}
                    />
                ))}
            </div>
        </section>
    );
};

export default StatsSection;
