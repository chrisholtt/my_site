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
    images: string[];
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
        title: "Hive 🐝",
        images: ["/images/hive.png", "/images/message-hub.png", "/images/hive.png"],
        excerpt:
            "A scalable practice and contact CRM for VetsNow with automation and secure role-based access.",
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
        title: "Bulk RCS 🤙",
        images: ["/images/message-hub.png"],
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
        title: "Stock Take 📦",
        images: ["/images/stock-take.png"],
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
        title: "Memba 🎗️",
        images: ["/images/memba.png"],
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
        title: "0xtra 💖",
        images: ["/images/0xtra.png"],
        excerpt:
            "Web3 creator platform for minting and managing NFTs.",
        date: "Feb 19, 2025",
        content: [
            "0xtra was my first attempt at a tech startup. I spent 1.5 years working on this project with a group of friends. It never survived, but I hold it very close to my heart.",
            "What we built really impressed me, but sadly due to lack of time and high running costs, we had no option but to shut down the project.",
            "I think at the peak we had about ~100 MAU.",
            "0xtra was a SocialFi project that used EVM-compatible chains like POL, AVAX, FTM, and BSC.",
            "Creators had to KYC to start uploading content. We integrated with Veriff as our KYC/AML provider. This prevented spam and ensured everyone was authentic.",
            "Creators could set their price in USD, and buyers could then pay with whatever currency they liked. After successful payment, the content was then available.",
            "We then expanded and built a minting platform where users could launch collections themselves for free. The contract was only deployed when the first purchase was made.",
            "I wish this project was still going, but sometimes it's best to move on. I learnt a lot from 0xtra and I'll never forget the journey we all had. LONG LIVE 0xtra!"
        ],
        techStack: ["TypeScript", "Next.js", "Solidity", "Tailwind CSS", "Veriff"]
    },
    {
        id: "wildheart-organics",
        title: "Wildheart Organics 🕯️",
        images: ["/images/wildheart.png"],
        excerpt:
            "A premium aromatherapy marketplace with seamless shopping.",
        date: "Feb 18, 2025",
        content: [
            "Wildheart was my first proper tech gig as a Web Developer. I got lucky with this one as it was a family friend (nepotism scores!)",
            "The client wanted a custom Shopify store using their brand palette. I spent about 2 months building this out from scratch. I learned Figma, Liquid, and Stripe to make the idea come to life.",
            "Fast forward to today and Wildheart is still using the website — you go Wildheart!"
        ],
        techStack: ["Shopify", "Stripe"],
        link: {
            href: "https://wildheartorganics.co.uk/",
            label: "wildheartorganics.co.uk"
        }
    },
    {
        id: "crazy-beanz",
        title: "Crazy Beanz 🍋",
        images: ["/images/crazy-beanz.png"],
        excerpt:
            "Hand-drawn gamified art series built for collectors.",
        date: "Jan 7, 2025",
        content: [
            "Crazy Beanz was the first tech project I ever built - it's what got me interested in software development in the first place.",
            "The idea was conceived during the crypto boom of 2021. I really liked the idea of digital collectibles and wanted to create some myself.",
            "I spent 6 months drawing the Beanz on Illustrator. I had to draw individual layers like faces, hats, skins, clothes, backgrounds, and so on. I then used some JavaScript to mash up all the images, layer them, and output a PNG file with the corresponding metadata.",
            "The images and metadata were then uploaded to IPFS. A smart contract was also created and deployed to the Ethereum network. I think I spent something like £800 to get my contract deployed (crazy, I know!) - a testament to my determination for the Beanz.",
            "The Beanz launched and the mints started coming in. Beanz were a hit (or so I thought). The market tanked and suddenly, no one cared for Crazy Beanz or NFTs for that matter.",
            "I used all of the mint funds to enroll myself in a professional software development course called CodeClan, and so my software journey began."
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
