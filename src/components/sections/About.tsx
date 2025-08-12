"use client";

import { motion } from "framer-motion";

const ImprovementSpecialists = () => {
    return (
        <section id="about" className="max-w-[1440px] mx-auto flex flex-col lg2:flex-row lg2:gap-[300px] w-full min-w-[375px] px-[40px] xxl:px-[80px] text-black bg-white my-[120px] justify-between">
            <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className="flex flex-col gap-[4px]"
            >
                <div className="bg-[#28282C] rounded-4xl px-[12px] py-[8px] w-fit text-white text-[12px]">
                    <span className="text-[16px] font-[600]">About us</span>
                </div>
                <h2 className="text-[40px] xxl:text-[48px] xxl:max-w-[300px] font-[500] mb-[80px]">
                    Home Improvement Specialists
                </h2>
            </motion.div>

            <motion.p
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.12 }}
                className="w-full lg2:max-w-[432px] xxl:text-[20px] xxl:max-w-[600px] text-[20px] font-[400] leading-[170%] -tracking-[0.3px] text-[#3D3D47]"
            >
                Welcome to LifetimeArt, your trusted home improvement experts, dedicated to transforming homes with precision and care. With years of experience in building kitchens, bathrooms, garages, and more, we take pride in delivering top-quality craftsmanship and a seamless customer experience. Our mission is to bring your vision to life while ensuring clear communication and expert guidance at every step. Let’s create a home you’ll love!
            </motion.p>
        </section>
    );
};

export default ImprovementSpecialists;
