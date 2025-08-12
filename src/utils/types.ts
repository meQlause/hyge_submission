export type FAQItemType = { question: string; answer: string }[];

export type NavItem = { href: string; label: string };

export type FeaturedItemType = {
    image: { src: string; alt: string };
    title: string;
    description: string;
    tags?: string[];
    testimonial?: {
        quote: string;
        author: string;
        avatar?: string;
    };
};


export type PagerType = {
    total: number;
    current: number;
};

export type ServiceItemType = {
    icon: string;
    title: string;
    description: string;
};

export type StatsType = {
    title: string;
    description: string
}[]

export type DataType = {
    image: { src: string; alt: string };
    title: string;
    description: string;
    tags: string[];
    testimonial: { quote: string; author: string; avatar: string };
}[]

export type TestimonialType = {
    rating: number;
    content: string;
    author: string;
    avatar: string;
}