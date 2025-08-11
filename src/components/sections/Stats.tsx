import { StatsProps } from "@/utils/interfaces";

const StatsSection: React.FC<StatsProps> = ({ stats }) => {

    return (
        <section className="max-w-[1440px] xxxl:mx-auto w-full min-w-[375px] mx-auto px-[40px] xxl:px-[80px]  pt-[120px] bg-white text-black" >
            <div className="grid grid-cols-1 lg2:grid-cols-2 xxl:grid-cols-4 gap-[8px] ">
                {stats.map((stat, index) => (
                    <div key={index} className="text-left mb-[120px]">
                        <h3 className="text-[72px] font-[300]">{stat.title.split(" ")[0]}</h3>
                        <h3 className="text-[20px] font-[600] mb-[8px]">{stat.title.split(" ").slice(1).join(" ")}</h3>
                        <p className="lg2:whitespace-nowrap xxl:whitespace-normal text-[16px] max-w-64 w-full font-[400]">{stat.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default StatsSection;