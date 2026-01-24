type Tech =
    | "TypeScript"
    | "Next.js"
    | "PostgreSQL"
    | "React"
    | "Node.js"
    | "Solidity"
    | "WebSockets"
    | "Prisma"
    | "GraphQL"
    | "Tailwind CSS"
    | "Docker"
    | "AWS"
    | "Firebase"
    | "Azure"
    | "Cosmos DB"
    | "Bubble"
    | "Infobip"
    | "Figma"
    | "Stripe"
    | "WebFlow"
    | "Move"
    | "Veriff";

interface Blog {
    id: string;
    title: string;
    imageSrc: string;
    excerpt: string;
    date: string;
    content: string[];
    techStack?: Tech[];
}

export const blogs: Blog[] = [
    {
        id: "1",
        title: "Hive",
        imageSrc: "/images/hive.png",
        excerpt:
            "A scalable CRM for VetsNow with automation and secure role-based access.",
        date: "Jan 22, 2026",
        content: [
            "Hive is a purpose-built CRM engineered for VetsNow’s internal operations, combining powerful automation with an intuitive user experience.",
            "The system allows teams to manage patient records, track workflows, and trigger automated actions — all while enforcing strict access controls based on roles.",
            "Built for scale, Hive uses modern architecture and Azure hosting to support growing data volumes and expanding user demands without sacrificing performance or reliability."
        ],
        techStack: ["TypeScript", "Next.js", "Prisma", "Azure"]
    },
    {
        id: "2",
        title: "Bulk RCS",
        imageSrc: "/images/message-hub.png",
        excerpt:
            "Enterprise-grade RCS messaging built to scale to millions of messages.",
        date: "Sep 18, 2025",
        content: [
            "Bulk RCS is a scalable mass messaging platform built to support enterprise-grade campaigns across millions of recipients while maintaining high performance and data integrity.",
            "The platform enables configurable merge fields, advanced targeting logic, and flexible campaign rules, empowering teams to run multiple campaigns simultaneously with minimal overhead.",
            "Built with self-maintaining data pipelines, Bulk RCS includes automated data cleanup and integrity checks to prevent bloat and ensure consistent performance over time."
        ],
        techStack: ["TypeScript", "Azure", "Cosmos DB", "Node.js", "Infobip"]
    },
    {
        id: "3",
        title: "Memba",
        imageSrc: "/images/memba.png",
        excerpt:
            "An all-in-one membership CRM and community platform.",
        date: "Jul 22, 2025",
        content: [
            "Memba is a complete membership CRM and website platform designed to help creators and communities grow without needing multiple tools.",
            "It offers seamless member management, content delivery, community engagement, and billing — all in one place.",
            "With flexible pricing plans and extensible add-ons, Memba adapts to different business models while keeping complexity low and value high."
        ],
        techStack: ["Bubble", "Figma", "Stripe"]
    },
    {
        id: "4",
        title: "0xtra",
        imageSrc: "/images/0xtra.png",
        excerpt:
            "Web3 creator platform for minting and managing NFTs.",
        date: "Feb 19, 2025",
        content: [
            "0xtra is a Web3 creator platform designed to simplify the NFT lifecycle from minting to distribution.",
            "Creators can mint digital assets, manage ownership, and track engagement through a sleek, modern UI.",
            "Built on a secure blockchain stack, 0xtra ensures fast transactions, transparent ownership, and a smooth user experience across devices."
        ],
        techStack: ["TypeScript", "Next.js", "Solidity", "GraphQL", "Tailwind CSS", "Veriff"]
    },
    {
        id: "5",
        title: "Wildheart Organics",
        imageSrc: "/images/wildheart.png",
        excerpt:
            "A premium aromatherapy marketplace with seamless shopping.",
        date: "Feb 18, 2025",
        content: [
            "Wildheart Organics is a curated marketplace offering premium aromatherapy and wellness products.",
            "The platform focuses on seamless shopping and transparent product discovery, built to highlight product quality and brand trust.",
            "With integrated Stripe payments and a responsive Webflow design, the marketplace delivers a modern, frictionless customer experience."
        ],
        techStack: ["WebFlow", "Stripe"]
    },
    {
        id: "6",
        title: "Crazy Beanz",
        imageSrc: "/images/crazy-beanz.png",
        excerpt:
            "Hand-drawn digital art series built for modern collectors.",
        date: "Jan 7, 2025",
        content: [
            "Crazy Beanz is a creative art project featuring unique hand-drawn coffee bean characters, designed as a modern digital collectible series.",
            "The project blends traditional illustration with modern web technologies to create an engaging, interactive user experience.",
            "Built with a scalable database architecture and modern frontend tooling, Crazy Beanz showcases both design creativity and robust technical execution."
        ],
        techStack: ["TypeScript", "Next.js", "PostgreSQL", "Tailwind CSS", "Move"]
    }
];
