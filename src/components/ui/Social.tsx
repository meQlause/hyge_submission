import { SocialProps } from "@/utils/interfaces";

export const Social: React.FC<SocialProps> = ({
    href,
    label,
    children,
}) => {
    return (
        <a
            href={href}
            aria-label={label}
            className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-neutral-800 text-neutral-200 hover:bg-neutral-700"
        >
            {children}
        </a>
    );
}