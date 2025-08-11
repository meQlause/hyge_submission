import { DetailRowProps } from "@/utils/interfaces";

export const DetailRow: React.FC<DetailRowProps> = ({
    label,
    value,
    href,
}) => {
    const content = (
        <div className="flex-1">
            <p className="text-[18px] font-[600] uppercase tracking-wide text-neutral-100">
                {label}
            </p>
            <p className="text-[18px] text-neutral-300 font-[400]">{value}</p>
        </div>
    );

    return (
        <div className="flex items-start gap-3">
            {href ? (
                <a
                    href={href}
                    className="flex-1 hover:underline underline-offset-4 decoration-neutral-500"
                >
                    {content}
                </a>
            ) : (
                content
            )}
        </div>
    );
}
