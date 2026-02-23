"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { GradientBackground } from "@/components/GradientBackground";
import { pageTransition } from "@/lib/animations";


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
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          <span className="block">Hi, I’m&nbsp;
            <span className="gradient-text">Chris Holt</span>
          </span>
          <span className="block text-2xl md:text-3xl">
            I design & build production-grade software systems.
          </span>
        </h1>
        <p className="mt-8 text-lg md:text-xl text-muted-foreground font-normal">
          Experienced full-stack engineer specialising in internal tools, platforms,
          and real-world systems that teams rely on. I focus on scalability,
          clarity, and long-term maintainability
        </p>
      </div>
      <div className="flex flex-wrap gap-3 justify-center mt-4">
        <Button asChild variant="default" className="px-6 py-2 text-base font-semibold">
          <a href="/blog">View Case Studies</a>
        </Button>
      </div>
    </motion.section>
  );
}
