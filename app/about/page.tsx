"use client";

import { motion } from "framer-motion";
import { pageTransition } from "@/lib/animations";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { GradientBackground } from "@/components/GradientBackground";

export default function AboutPage() {
  return (
    <motion.div
      variants={pageTransition}
      initial="hidden"
      animate="show"
      className="mx-auto max-w-3xl flex flex-col items-center gap-10"
    >
      <GradientBackground variant="about" />
      <h1 className={`text-5xl font-bold text-center`}>
        About Me
      </h1>

      <Card className="w-full bg-background/80 backdrop-blur-md border border-border shadow-xl">
        <CardHeader className="flex flex-row items-center gap-4 p-6">
          <Avatar className="h-16 w-16">
            <AvatarImage src="/avatar.png" alt="Chris Holt" />
            <AvatarFallback>CH</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <p className="text-lg font-semibold text-foreground">Chris Holt</p>
            <p className="text-sm text-muted-foreground">
              Software Engineer · Web Architecture & Performance
            </p>
          </div>
        </CardHeader>

        <Separator />

        <CardContent className="p-6 space-y-4">
          <p className="text-lg text-foreground leading-relaxed">
            I build high-performance web apps and products with a focus on UX,
            scalability, and clean architecture. I ship end-to-end solutions
            that feel effortless for users and maintainable for teams.
          </p>

          <p className="text-base text-muted-foreground leading-relaxed">
            My work spans modern frontend, real-time systems, multiplayer
            experiences, and decentralized integrations. I’m passionate about
            building products that solve real problems and scale without
            compromising quality.
          </p>

          <p className="text-base text-muted-foreground leading-relaxed">
            Right now I’m leveling up by building scalable game systems,
            refining backend architecture, and exploring advanced performance
            patterns in TypeScript and React.
          </p>
        </CardContent>

        <Separator />

        <CardFooter className="p-6">
          <div className="flex flex-col gap-2">
            <p className="text-sm text-muted-foreground">
              Outside of code, I’m into hiking, digital art, and building things
              that push my limits.
            </p>
            <Button asChild variant="link" className="p-0 h-auto w-fit text-base">
              <a href="mailto:chrisphilholt@gmail.com" target="_blank" rel="noopener noreferrer">
                Let’s work.
              </a>
            </Button>
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
