"use client";

import { motion } from "framer-motion";
import { Link } from "@heroui/react";
import { title, subtitle } from "@/components/primitives";
import { GradientBackground } from "@/components/GradientBackground";
import { pageTransition } from "@/lib/animations";
import { Snippet } from "@heroui/snippet";
import { Code } from "@heroui/code";


export default function Home() {
  return (
    <motion.section
      variants={pageTransition}
      initial="hidden"
      animate="show"
      className="flex flex-col items-center justify-center gap-6 py-12 md:py-20"
    >
      <GradientBackground variant="home" />
      <div className="text-center max-w-2xl">
        <h1>
          <span className={title()}>Hi, I’m&nbsp;</span>
          <span className={title({ color: "gradient" })}>Chris Holt</span>
          <br />
          <span className={title()}>
            I design & build production-grade software systems.
          </span>
        </h1>
        <p className={subtitle({ class: "mt-8" })}>
          Experienced full-stack engineer specialising in internal tools, platforms,
          and real-world systems that teams rely on. I focus on scalability,
          clarity, and long-term maintainability
        </p>
      </div>
      <div className="flex flex-wrap gap-3 justify-center mt-4">
        <Link
          href="/blog"
        >
          View Case Studies
        </Link>
      </div>
      <div className="mt-10">
        <Snippet hideCopyButton hideSymbol variant="bordered">
          <span>
            Working w/&nbsp;
            <Code color="primary">VetsNow</Code>
          </span>
        </Snippet>
      </div>
    </motion.section>
  );
}
