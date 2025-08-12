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
                src: "/featured1.png",
                alt: "Modern kitchen with island and warm lighting",
            },
            title: "Modern kitchen refit",
            description:
                "This kitchen transformation brought sleek, modern design and enhanced  functionality to our client’s home. We installed custom cabinetry, high-quality worktops, and state-of-the-art appliances, creating a stylish yet practical space perfect for cooking and entertaining. With attention to every detail, we delivered a kitchen that balances aesthetics and usability.",
            tags: ["Kitchen", "4 weeks"],
            testimonial: {
                quote:
                    "LifetimeArt completely transformed our kitchen, making it both beautiful and highly functional. The craftsmanship was outstanding, and the team was professional and communicative throughout. We couldn’t be happier with the result!",
                author: "Rachel Morgan",
                avatar:
                    "/featured-avatar1.png",
            },
        },
        {
            image: {
                src: "/featured2.png",
                alt: "Beautiful garden path with flowers",
            },
            title: "External garden path build",
            description:
                "Our team designed and installed a stunning garden path using natural stone, integrating seamlessly into the client’s existing landscape. The path adds both beauty and functionality, making the garden more accessible while enhancing its overall charm.",
            tags: ["External Works", "6 weeks"],
            testimonial: {
                quote:
                    "The team at LifetimeArt did an amazing job on our garden path. It’s sturdy, looks fantastic, and has completely transformed our outdoor space. They listened to our vision and delivered exactly what we wanted—highly recommended!.",
                author: "Michael Turner",
                avatar:
                    "/featured-avatar2.png",
            },
        },
        {
            image: {
                src: "/featured3.png",
                alt: "Luxury bathroom interior",
            },
            title: "Bathroom renovation",
            description:
                "We revitalized this bathroom with a fresh, modern design, incorporating high-end tiling, sleek fixtures, and efficient lighting. The layout was optimized to maximize space, creating a luxurious and relaxing atmosphere. The final result is a beautifully crafted bathroom that enhances both comfort and functionality.",
            tags: ["Kitchen", "3 weeks"],
            testimonial: {
                quote:
                    "LifetimeArt completely transformed our kitchen, making it both beautiful and highly functional. The craftsmanship was outstanding, and the team was professional and communicative throughout. We couldn’t be happier with the result!",
                author: "Sophie Morgan",
                avatar:
                    "/featured-avatar3.png",
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
        src: "/service.jpg",
        alt: "Warm kitchen interior with island and wooden stools",
    },
    data: [
        {
            icon: UtensilsCrossed,
            title: "Kitchens",
            description:
                "At LifetimeArt, we design and build stunning kitchens tailored to your style and needs. Whether you prefer sleek modern lines or a timeless, classic look, our team delivers premium craftsmanship, functional layouts, and meticulous attention to detail—creating a kitchen you’ll love to cook and gather in.",
        },
        {
            icon: Building2,
            title: "Loft Conversions",
            description:
                "Transform unused loft space into a beautiful, practical part of your home. From cozy bedrooms to bright home offices, we handle everything from structural adjustments to finishing touches, ensuring your new space is safe, stylish, and seamlessly integrated with your existing home.",
        },
        {
            icon: Bath,
            title: "Bathrooms",
            description:
                "We create bathrooms that balance relaxation and practicality, with designs ranging from spa-inspired retreats to minimalist, functional spaces. Our team sources high-quality fixtures and finishes, ensuring durability, elegance, and comfort for years to come.",
        },
        {
            icon: Home,
            title: "Extensions",
            description:
                "Expand your living space without compromising on style. Whether it’s a kitchen extension, a new family room, or an entire additional floor, we work closely with you to design and build an extension that complements your home and adds value.",
        },
        {
            icon: Hammer,
            title: "Restorations",
            description:
                "Preserve the charm of your property while upgrading it for modern living. Our restoration work combines traditional craftsmanship with modern techniques to breathe new life into historic or worn-down spaces.",
        },
        {
            icon: Trees,
            title: "External Works",
            description:
                "Enhance the beauty and functionality of your outdoor areas. From garden landscaping to patios, pathways, and exterior lighting, we create inviting spaces that connect your home to nature.",
        },
    ],
};

export const CONTACTS = {
    eyebrow: "Contact",
    title: "Get in touch",
    blurb: `For any inquiries or to explore your vision further, we invite you to contact our professional team using the details provided below.`,
    officeAddress: "150 Old Park Ln, London W1K 1QZ",
    email: "hello@refit.com",
    phone: "07716 534984",
}

export const NAV_LINKS = [
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#our-work", label: "Our work" },
    { href: "#faqs", label: "FAQs" },
    { href: "#contact", label: "Contact" },
];

export const IMAGES = [
    { src: "/1.png", alt: "Warm minimalist dining room with wood table and framed art" },
    { src: "/2.png", alt: "Cozy living room with sunlit sofa and plants" },
    { src: "/3.png", alt: "Modern cabin with large windows in a lush forest" },
    { src: "/4.png", alt: "Minimal living space with neutral palette" },
    { src: "/5.png", alt: "Minimal living space with neutral palette" },
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
                "I couldn’t be happier with my loft conversion.The attention to detail and quality of work were outstanding.Refit made the whole process smooth and stress-free!",
            author: "Emily Carter",
            avatar:
                "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&w=256&auto=format&fit=crop",
        },
        {
            rating: 5,
            content:
                "Refit transformed our outdoor space with a beautiful garden path. The work was completed on time, and the finish is excellent. A great team to work with!",
            author: "Emily Carter",
            avatar:
                "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=256&auto=format&fit=crop",
        }
    ],
}