"use client";

import { subtitle, title } from "@/components/primitives";
import { Button } from "@heroui/button";
import { Card, CardFooter } from "@heroui/card";
import Image from "next/image";
import { Chip } from "@heroui/chip";
import Link from "next/link";

const projects = [
  {
    title: "0xtra.com",
    description: "Web3 creator platform.",
    image:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-2bb4a.appspot.com/o/Screenshot%202025-06-11%20at%2014.38.44.png?alt=media&token=3f14a44a-adcc-49ff-9ece-e77b2fc2fa9a",
    href: "https://0xtra.com",
  },
  {
    title: "crazybeanz.xyz",
    description: "Art community project on SUI.",
    image:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-2bb4a.appspot.com/o/Screenshot%202025-06-11%20at%2014.41.20.png?alt=media&token=31a3da1e-ab2d-4081-accc-d8054526467b",
    href: "https://crazybeanz.xyz",
  },
  {
    title: "Wildheart",
    description: "Aromatherapy marketplace.",
    image:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-2bb4a.appspot.com/o/Screenshot%202025-06-11%20at%2014.58.31.png?alt=media&token=1b9af97d-4563-43ea-8ed2-b39bf3046db2",
    href: "https://wildheartorganics.co.uk/collections/aromatherapy-candles",
  },
  {
    title: "Memba CRM",
    description: "All in one membership CRM & website",
    image: "https://firebasestorage.googleapis.com/v0/b/portfolio-2bb4a.appspot.com/o/Screenshot%202025-06-11%20at%2015.29.28.png?alt=media&token=f1c1cb8d-c392-4134-a183-06328dd08c04",
    href: "https://www.mymemba.io/",
  },
  {
    title: "Portfolio 1.0",
    description: "3D portfolio site",
    image: "https://firebasestorage.googleapis.com/v0/b/portfolio-2bb4a.appspot.com/o/Screenshot%202025-06-11%20at%2015.03.17.png?alt=media&token=b7912820-7b0e-42ae-a57d-66e93ecbc352",
    href: "https://chrisholt.netlify.app/",
  },
];

export default function ProjectsPage() {
  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className={`${title()} text-4xl mb-10 text-center`}>Projects</h1>
      <h6 className={`${subtitle()} text-4xl mb-10 text-left`}>
        A Curated Collection of Projects
      </h6>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <Card
            key={idx}
            isFooterBlurred
            className="group relative h-[300px] overflow-hidden"
            radius="lg"
          >
            {/* Chip stays above the image */}
            <Chip className="absolute top-3 left-3 z-20" variant="solid" color="danger">
              {project.title}
            </Chip>

            {/* Image wrapper with lower z-index */}
            <div className="w-full h-full overflow-hidden z-10">
              <Image
                alt={project.title}
                src={project.image}
                width={400}
                height={300}
                className="object-cover w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-105"
              />
            </div>

            {/* Footer stays above as well */}
            <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-2 w-[calc(100%_-_8px)] shadow-small ml-1 z-20">
              <p className="text-tiny text-white/80">{project.description}</p>
              <Link href={project.href} target="_blank">
                <Button
                  className="text-tiny text-white bg-black/20"
                  color="default"
                  radius="lg"
                  size="sm"
                  variant="flat"
                >
                  Visit
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
