import { Bath, Building2, Hammer, Home, Trees, UtensilsCrossed } from "lucide-react";

export const FAQ = {
    eyebrow: "FAQs",
    heading: "Answering Your Questions",
    subheading: "Got more questions? Send us your enquiry below",
    cta: { label: "Get in touch" },
    items: [
        {
            question: "What area are you based in?",
            answer:
                "We cover most nearby districts. For projects farther out, we’re happy to chat and see what’s possible.",
        },
        {
            question: "How long does a typical project take?",
            answer:
                "Minor works: 1–2 weeks. Full renovations: 6–12+ weeks, depending on scope, materials, and permissions.",
        },
        {
            question: "Do you offer free quotes?",
            answer:
                "Yes—send your brief, we’ll review, arrange a visit if needed, and provide an itemised quote.",
        },
        {
            question: "Will I need planning permission for my project?",
            answer:
                "Some projects fall under permitted development. We’ll advise and handle any applications if required.",
        },
        {
            question: "Can I stay in my home while the work is being done?",
            answer:
                "Often yes for small works. For larger jobs, we’ll phase tasks to reduce disruption where possible.",
        },
        {
            question: "How do I get started on a project?",
            answer:
                "Book a consultation, share your goals and budget, and we’ll outline the plan and timeline.",
        },
    ],
    defaultOpen: -1,
}

export const FEATURED = {
    eyebrow: "Our work",
    heading: "Get inspired by our work",
    subheading: "See how we’ve transformed homes with our expert craftsmanship and attention to detail.",
    data: [
        {
            image: {
                src: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?q=80&w=1400&auto=format&fit=crop",
                alt: "Modern kitchen with island and warm lighting",
            },
            title: "Modern kitchen refit",
            description:
                "This kitchen transformation brought sleek, modern design and enhanced functionality to our client’s home. We installed custom cabinetry, high-quality worktops, and state-of-the-art appliances, creating a stylish yet practical space perfect for cooking and entertaining. With attention to every detail, we delivered a kitchen that balances aesthetics and usability.",
            tags: ["Kitchen", "4 weeks"],
            testimonial: {
                quote:
                    "LifetimeArt completely transformed our kitchen, making it both beautiful and highly functional. The craftsmanship was outstanding, and the team was professional and communicative throughout. We couldn’t be happier with the result!",
                author: "Rachel Morgan",
                avatar:
                    "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=256&auto=format&fit=crop",
            },
        },
        {
            image: {
                src: "https://images.unsplash.com/photo-1508609349937-5ec4ae374ebf?q=80&w=1400&auto=format&fit=crop",
                alt: "Beautiful garden path with flowers",
            },
            title: "External garden path build",
            description:
                "Our team designed and installed a stunning garden path using natural stone, integrating seamlessly into the client’s existing landscape. The path adds both beauty and functionality, making the garden more accessible while enhancing its overall charm.",
            tags: ["Garden", "2 weeks"],
            testimonial: {
                quote:
                    "LifetimeArt delivered a garden path that exceeded our expectations. It’s functional, beautiful, and perfectly complements our outdoor space.",
                author: "Michael Turner",
                avatar:
                    "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?q=80&w=256&auto=format&fit=crop",
            },
        },
        {
            image: {
                src: "https://images.unsplash.com/photo-1615874959474-d609969a20ed?q=80&w=1400&auto=format&fit=crop",
                alt: "Luxury bathroom interior",
            },
            title: "Bathroom renovation",
            description:
                "We transformed this bathroom into a spa-like retreat, complete with modern fixtures, premium tiling, and improved lighting. The design maximizes comfort and style, creating a relaxing and functional space.",
            tags: ["Bathroom", "3 weeks"],
            testimonial: {
                quote:
                    "LifetimeArt completely revamped our bathroom and it feels like a luxury hotel now. The attention to detail is unmatched!",
                author: "Sophie Morgan",
                avatar:
                    "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=256&auto=format&fit=crop",
            },
        },
    ],
}

export const STATS = [
    { title: '8 Years experience', description: 'Improving homes with expert craftsmanship for years' },
    { title: '26 Projects completed', description: 'Over 250 successful projects delivered with quality and care' },
    { title: '30 Skilled Tradespeople', description: 'Our team of 30 experts ensures top-quality results' },
    { title: '100% Client satisfaction', description: 'All of our clients are satisfied with our work and service' },
];

export const SERVICES = {
    eyebrow: "Services",
    heading: "What we do",
    subheading: "Find out which one of our services fit the needs of your project",
    image: {
        src: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1600&auto=format&fit=crop",
        alt: "Warm kitchen interior with island and wooden stools",
    },
    data: [
        {
            icon: UtensilsCrossed,
            title: "Kitchens",
            description:
                "At LifetimeArt, we design and build stunning kitchens tailored to your style and needs. Whether you’re after a sleek modern space or a classic, timeless look, our expert team delivers high-quality craftsmanship, functionality, and attention to detail to create the heart of your home.",
        },
        {
            icon: Building2,
            title: "Loft Conversions",
            description:
                "Transform unused attic space into bright, practical rooms—from home offices to extra bedrooms—handled end-to-end, planning to finish.",
        },
        {
            icon: Bath,
            title: "Bathrooms",
            description:
                "Spa-like makeovers or compact refreshes with durable fixtures and water-wise solutions.",
        },
        {
            icon: Home,
            title: "Extensions",
            description:
                "Add light-filled living areas or kitchen diners with seamless ties to your existing architecture.",
        },
        {
            icon: Hammer,
            title: "Restorations",
            description:
                "Careful restorations that respect original character while upgrading comfort and performance.",
        },
        {
            icon: Trees,
            title: "External Works",
            description:
                "Landscaping, patios, and outdoor structures built to last and to complement your home.",
        },
    ],
}

export const CONTACTS = {
    eyebrow: "Contact",
    title: "Get in touch",
    blurb: `For any inquiries or to explore your vision further, we invite you to contact our professional team using the details provided below.`,
    officeAddress: "150 Old Park Ln, London W1K 1QZ",
    email: "hello@refit.com",
    phone: "07716 534984",
}

export const NAV_LINKS = [
    { href: "#", label: "About" },
    { href: "#", label: "Services" },
    { href: "#", label: "Our work" },
    { href: "#", label: "FAQs" },
    { href: "#", label: "Contact" },
];

export const IMAGES = [
    { src: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1974&auto=format&fit=crop", alt: "Warm minimalist dining room with wood table and framed art" },
    { src: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1974&auto=format&fit=crop", alt: "Cozy living room with sunlit sofa and plants" },
    { src: "https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=1974&auto=format&fit=crop", alt: "Modern cabin with large windows in a lush forest" },
    { src: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1974&auto=format&fit=crop", alt: "Minimal living space with neutral palette" },
];

export const TESTIMONIALS = {
    eyebrow: "Testimonials",
    heading: "Hear from our clients",
    subheading:
        "Hear from our happy clients about their experience working with Refit and the quality of our craftsmanship.",
    testimonial: [
        {
            rating: 5,
            content:
                "Refit did an incredible job on our kitchen. The craftsmanship was top-notch, and the team was professional from start to finish. Highly recommend!",
            author: "Emily Carter",
            avatar:
                "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&w=256&auto=format&fit=crop",
        },
        {
            rating: 5,
            content:
                "Refit turned our cramped kitchen into a bright, functional space. On time and spotless!",
            author: "Drew Carter",
            avatar:
                "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=256&auto=format&fit=crop",
        },
        {
            rating: 5,
            content:
                "Flawless bathroom remodel. Clear updates, careful crew, and beautiful results.",
            author: "Sofia Park",
            avatar:
                "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=256&auto=format&fit=crop",
        },
        {
            rating: 4,
            content:
                "Living room built-ins look custom-made (because they are). Great attention to detail.",
            author: "Eric Dunn",
            avatar:
                "https://images.unsplash.com/photo-1541534401786-2077eed87a74?q=80&w=256&auto=format&fit=crop",
        },
        {
            rating: 5,
            content:
                "They handled permits and kept us stress-free. Quality craft from start to finish.",
            author: "Nadia Russo",
            avatar:
                "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=256&auto=format&fit=crop",
        },
        {
            rating: 5,
            content:
                "Deck refresh looks brand new. Pricing was transparent and fair. Highly recommend.",
            author: "Sam Keller",
            avatar:
                "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=256&auto=format&fit=crop",
        },
        {
            rating: 4,
            content:
                "Small fixes, big difference. They noticed things I hadn’t—super thorough team.",
            author: "Irene Zhao",
            avatar:
                "https://images.unsplash.com/photo-1544006659-f0b21884ce1d?q=80&w=256&auto=format&fit=crop",
        },
    ],
}