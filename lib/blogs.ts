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
    | "Veriff"
    | "PowerApps"
    | "Shopify"
    | "React Native"
    | "Expo"
    | "Supabase";

export interface Blog {
    id: string;
    title: string;
    imageSrc: string;
    excerpt: string;
    date: string;
    content: string[];
    techStack?: Tech[];
    link?: {
        href: string;
        label: string;
    }
}

export const blogs: Blog[] = [
    // {
    //     id: "arbor-finance",
    //     title: "Arbor Finance",
    //     imageSrc: "/images/hive.png",
    //     excerpt:
    //         "A modern mobile finance app built with Expo and secure Supabase backend.",
    //     date: "March 06, 2026",
    //     content: [
    //         "Arbor Finance is a modern mobile application built with native Expo for seamless cross-platform performance on iOS and Android.",
    //         "The app features a secure Supabase backend with PostgreSQL for reliable data storage and real-time synchronization.",
    //         "Built with a focus on performance, security, and user experience to make personal finance management simple and intuitive."
    //     ],
    //     techStack: ["React Native", "Expo", "Supabase", "PostgreSQL", "TypeScript"],
    // },
    {
        id: "hive-crm",
        title: "Hive",
        imageSrc: "/images/hive.png",
        excerpt:
            "A scalable CRM for VetsNow with automation and secure role-based access.",
        date: "Jan 22, 2026",
        content: [
            "Hive is a custom CRM I built for VetsNow to make their internal operations easier and more scalable.",
            "Teams can manage practice records, track audit history, and control access with role-based permissions.",
            "It’s built to handle growth — modern architecture, Azure hosting, and strong performance under load."
        ],
        techStack: ["TypeScript", "Next.js", "Prisma", "Azure"],
    },
    {
        id: "bulk-rcs",
        title: "Bulk RCS",
        imageSrc: "/images/message-hub.png",
        excerpt:
            "Enterprise-grade RCS messaging built to scale to millions of messages.",
        date: "Sep 18, 2025",
        content: [
            "Bulk RCS is a mass messaging platform I built to handle enterprise campaigns at scale — millions of recipients without breaking a sweat.",
            "It supports merge fields, advanced targeting, and flexible campaign rules, so teams can run multiple campaigns at once.",
            "The system maintains performance over time thanks to automated data cleanup and integrity checks."
        ],
        techStack: ["TypeScript", "Azure", "Cosmos DB", "Node.js", "Infobip"]
    },
    {
        id: "stock-take",
        title: "Stock Take",
        imageSrc: "/images/stock-take.png",
        excerpt:
            "A stock taking app for veterinary practices to manage inventory efficiently.",
        date: "Sep 18, 2025",
        content: [
            "I built a stock take app to help vet practices manage inventory quickly and accurately. It took about 4 weeks from idea to launch.",
            "It has a clean, easy-to-use interface, configurable access controls, and exportable reports to support compliance.",
            "It also includes an AI chatbot (powered by Jotform AI) to guide users through the stock-taking process and answer common questions."
        ],
        techStack: ["TypeScript", "Azure", "Cosmos DB", "Node.js", "Infobip"]
    },
    {
        id: "my-memba",
        title: "Memba",
        imageSrc: "/images/memba.png",
        excerpt:
            "An all-in-one membership CRM and community platform.",
        date: "Jul 22, 2025",
        content: [
            "Memba is a membership CRM + website platform built for charities and communities that don’t want to manage multiple tools.",
            "It handles member management, content delivery, community engagement, and billing — all in one place.",
            "The platform is flexible, with pricing plans and add-ons that adapt to different needs without adding complexity."
        ],
        techStack: ["Bubble", "Figma", "Stripe"],
        link: {
            href: "https://www.mymemba.io/",
            label: "mymemba.io"
        }
    },
    {
        id: "0xtra-nft-platform",
        title: "0xtra",
        imageSrc: "/images/0xtra.png",
        excerpt:
            "Web3 creator platform for minting and managing NFTs.",
        date: "Feb 19, 2025",
        content: [
            "0xtra is a Web3 creator platform designed to make NFT minting and management simple.",
            "Creators can mint digital assets, manage ownership, and track engagement through a clean, modern interface.",
            "It’s built on a secure blockchain stack for fast transactions and transparent ownership."
        ],
        techStack: ["TypeScript", "Next.js", "Solidity", "Tailwind CSS", "Veriff"]
    },
    {
        id: "wildheart-organics",
        title: "Wildheart Organics",
        imageSrc: "/images/wildheart.png",
        excerpt:
            "A premium aromatherapy marketplace with seamless shopping.",
        date: "Feb 18, 2025",
        content: [
            "Wildheart Organics is a curated marketplace for premium aromatherapy and wellness products.",
            "The focus is on clean product discovery and a seamless shopping experience.",
            "This site was built with Shopify to keep the experience smooth across devices."
        ],
        techStack: ["Shopify", "Stripe"],
        link: {
            href: "https://wildheartorganics.co.uk/",
            label: "wildheartorganics.co.uk"
        }
    },
    {
        id: "crazy-beanz",
        title: "Crazy Beanz",
        imageSrc: "/images/crazy-beanz.png",
        excerpt:
            "Hand-drawn digital art series built for modern collectors.",
        date: "Jan 7, 2025",
        content: [
            "Crazy Beanz is a creative art project featuring hand-drawn coffee bean characters as digital collectibles.",
            "It blends traditional illustration with modern web tech to create an interactive experience.",
            "The project is built on scalable architecture and modern frontend tooling, showing both design and technical execution."
        ],
        techStack: ["TypeScript", "Next.js", "PostgreSQL", "Tailwind CSS", "Move"],
        link: {
            href: "https://crazybeanz.com",
            label: "crazybeanz.com"
        }
    },
    // {
    //     id: "desk-booking",
    //     title: "Desk Booking System",
    //     imageSrc: "/images/desk-booking.png",
    //     excerpt:
    //         "Internal desk booking system for hybrid work environments.",
    //     date: "Jan 7, 2025",
    //     content: [
    //         "A desk booking system built for hybrid teams, letting employees see office availability in real time and reserve desks.",
    //         "The interface makes it easy to browse desks, book time slots, and manage reservations.",
    //         "Built with PowerApps and Azure to integrate smoothly with corporate systems and scale as teams grow."
    //     ],
    //     techStack: ["PowerApps", "Azure"]
    // }
];
