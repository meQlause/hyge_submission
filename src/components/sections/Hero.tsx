import {
    ArrowRight
} from "lucide-react";
import Image from 'next/image';

export default function Hero() {
    return (
        <section className="relative mx-auto w-full min-w-[375px] bg-[#101014] xxl:h-[900px] h-[834px] overflow-hidden text-white">
            <div className="absolute xxl:hidden inset-0 h-[695px] mx-[20px] mt-[113px] ">
                <Image
                    src="/bg.png"
                    alt="Interior background"
                    layout="fill"
                    objectFit="cover"
                    className="z-0 rounded-[12px]"
                    priority
                />
                <div className="absolute inset-0 bg-[#101014CC]/80  z-10 w-full" />
            </div>

            <div className="relative max-w-[1440px] xxl:px-[80px] flex flex-col mx-auto z-20 xxl:flex-row xxl:justify-between xxl:items-center xxl:gap-[80px] items-start justify-end h-full  text-center">
                <div className="not-xxl:px-[40px]">
                    <div className="mb-[12px]">
                        <div className="px-[12px] max-w-[210px] flex-row gap-2 justify-center items-center py-[6px] rounded-full bg-[#28282C] bg-opacity-10 backdrop-blur-md text-[10px] font-medium uppercase tracking-[1px] flex ">
                            <div className="flex justify-center items-center bg-white/70 size-[18px] rounded-full">
                                <div className="bg-white size-[8px] rounded-full" />
                            </div>
                            <span className="font-thin text-[14px]">Available for work</span>
                        </div>
                    </div>

                    <h1 className="text-[40px] xl2:max-w-[900px] lg2:text-[56px] text-left font-[500] -tracking-[1px] leading-[120%] mb-[10px] w-full min-w-[292px]">
                        Your trusted partner for quality home improvement
                    </h1>

                    <p className="text-[16px] lg2:text-[20px] text-[#D0D1DB] font-[400] leading-[170%] -tracking-[0.3px] mb-[20px] w-full text-left min-w-[292px] max-w-[300px] lg2:max-w-[450px] xxl:max-w-[470px]">
                        LifetimeArt delivers expert home improvements, creating beautiful and functional spaces with quality craftsmanship.
                    </p>


                    <button className="flex mb-[60px] mt-[56px] items-center bg-white/10 bg-opacity-10 backdrop-blur-md px-[20px]  rounded-full">
                        <span className="whitespace-nowrap text-[16px]">Work with us</span>
                        <div className="bg-white rounded-full p-1.5 size-[40px] flex ml-[24px] my-[10px] justify-center items-center">
                            <ArrowRight className="text-black size-[20px] -rotate-45 " />
                        </div>
                    </button>
                </div>
                <div className="hidden xxl:flex xxl:justify-end xxl:items-end h-[845px] relative overflow-hidden w-[1000px] rounded-[12px] ">
                    <Image
                        src="/bg.png"
                        alt="Interior background"
                        fill
                        sizes="1000px"
                        className="z-0 rounded-[12px] object-cover"
                        priority
                    />
                    <div className="hidden xxl:block xxxl:hidden h-[181px] w-[240px] p-[24px] z-40 mr-[20px] mb-[20px] bg-transparent backdrop-blur-lg overflow-hidden rounded-[12px]">
                        <div className="flex gap-1">
                            <span key={1} aria-hidden className="text-white text-lg">
                                ★
                            </span>
                            <span key={2} aria-hidden className="text-white text-lg">
                                ★
                            </span>
                            <span key={3} aria-hidden className="text-white text-lg">
                                ★
                            </span>
                            <span key={4} aria-hidden className="text-white text-lg">
                                ★
                            </span>
                            <span key={5} aria-hidden className="text-white text-lg">
                                ★
                            </span>
                            <span key={6} aria-hidden className="text-white text-lg">
                                ★
                            </span>
                        </div>
                        <span className="text-[14px] font-[400] text-left flex">
                            &quot;LifetimeArt has been a game-
                            changer for my home. Their
                            ability to blend functionality
                            with exquisite design is
                            unparalleled.&quot;
                        </span>
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/0 z-10" />
                </div>
            </div>
        </section>
    );
}