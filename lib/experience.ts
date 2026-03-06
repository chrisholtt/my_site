export interface Experience {
  id: string;
  title: string;
  company?: string;
  period: string;
  description: string;
  link?: {
    href: string;
    label: string;
  };
  techStack?: string[];
}

export const experiences: Experience[] = [
  {
    id: "software-engineer",
    title: "Software Engineer · VetsNow",
    period: "2022 — Present",
    description:
      "Build and maintain critical components and internal tools. Work closely with cross-functional teams to implement best practices in web development and system architecture.",
    techStack: ["React", "TypeScript", ".NET", "Next.js", "Tailwind CSS", "Azure"],
  },
  {
    id: "lead-developer",
    title: "Lead Developer · 0xtra",
    period: "2024 — 2025",
    description:
      "Co-founded 0xtra as a side project with fellow software engineers — a web3 creator platform exploring blockchain technology for content monetization and audience engagement.",
    techStack: ["Next.js", "Tailwind", "Solidity", "KYC/AML APIs"],
  },
  {
    id: "full-stack-developer",
    title: "Full Stack Developer · MyMemba",
    period: "2021 — 2022",
    description:
      "Developed CRM platform for charities, enabling efficient donor management and fundraising campaigns. Implemented scalable solutions for real-time data processing and user management.",
    techStack: ["Bubble", "CSS", "Stripe", "Zapier"],
  },
  {
    id: "full-stack-developer",
    title: "Contracted Developer · Wildheart",
    period: "2019 — 2020",
    description:
      "Contracted to design and develop a custom Shopify storefront. Built custom themes, configured integrations, and implemented tailored features to meet specific business requirements.",
    techStack: ["Shopify", "Liquid", "CSS", "JavaScript"],
  },
];
