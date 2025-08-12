import { DataType, FAQItemType, FeaturedItemType, NavItem, PagerType, ServiceItemType, StatsType, TestimonialType } from "./types";

export interface StatsProps {
    stats: StatsType;
}

export interface TestimonialCarouselProps {
    className?: string;
    testimonials: TestimonialType[];
};

export interface FeaturedCarouselProps {
    className?: string;
    featured: FeaturedItemType[];
    startIndex?: number;
    onChange?: (index: number) => void;
};

export interface FAQSectionProps {
    eyebrow: string;
    heading: string;
    subheading: string;
    cta: { label: string; onClick?: () => void } | null;
    items: FAQItemType;
    defaultOpen: number;
};

export interface FeaturedProjectProps {
    eyebrow: string;
    heading: string;
    subheading: string;
    data: DataType;
    pager?: PagerType;
};

export interface ServiceSectionProps {
    eyebrow: string;
    heading: string;
    subheading: string;
    image: { src: string; alt: string };
    data: ServiceItemType[];
};

export interface AccordionItemProps {
    index: number;
    isOpen: boolean;
    onToggle: (i: number) => void;
    icon?: React.ElementType;
    title: string;
    children: React.ReactNode;
}

export interface FooterLinkProps {
    href: string;
    children: React.ReactNode;
}

export interface ContactSectionProps {
    eyebrow: string;
    title: string;
    blurb: string;
    officeAddress: string;
    email: string;
    phone: string;
    onSubmit?: (data: {
        name: string;
        email: string;
        phone?: string;
        message: string;
    }) => Promise<void> | void;
};

export interface TestimonialsProps {
    eyebrow: string;
    heading: string;
    subheading: string;
    testimonial: TestimonialType[];
    pager?: PagerType;
};

export interface SocialProps {
    href: string;
    label: string;
    children: React.ReactNode;
}

export interface DetailRowProps {
    label: string;
    value: string;
    href?: string;
}

export interface CarouselProps {
    className?: string;
    images: { src: string; alt: string }[];
};

export interface FieldAreaProps {
    label: string;
    required?: boolean;
    placeholder?: string;
    value: string;
    onChange: (v: string) => void;
}

export interface UseCarouselDragOptionsProps {
    length: number;
    startIndex: number;
    onChange?: (index: number) => void;
};

export interface FieldProps {
    label: string;
    required?: boolean;
    placeholder?: string;
    value: string;
    type?: string;
    onChange: (v: string) => void;
}

export interface NavbarProps {
    links: NavItem[];
    logo?: string;
    brand?: string;
    isHeader: boolean
}