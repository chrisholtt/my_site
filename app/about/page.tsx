"use client";

import { motion } from "framer-motion";
import { pageTransition } from "@/lib/animations";
import { title } from "@/components/primitives";
import { Card, CardHeader, CardBody, CardFooter } from "@heroui/card";
import { Divider } from "@heroui/divider";
import { Link } from "@heroui/link";
import { Avatar } from "@heroui/avatar";

export default function AboutPage() {
  return (
    <motion.div
      variants={pageTransition}
      initial="hidden"
      animate="show"
      className="mx-auto max-w-3xl flex flex-col items-center gap-10"
    >
      <h1 className={`${title()} text-5xl font-bold text-center`}>
        About Me
      </h1>

      <Card isBlurred className="w-full">
        <CardHeader className="flex items-center gap-4 p-6">
          <Avatar src="/avatar.png" alt="Chris Holt" size="lg" radius="full" />
          <div className="flex flex-col">
            <p className="text-lg font-semibold text-foreground">Chris Holt</p>
            <p className="text-sm text-default-500">
              Software Engineer · Web Architecture & Performance
            </p>
          </div>
        </CardHeader>

        <Divider />

        <CardBody className="p-6 space-y-4">
          <p className="text-lg text-default-700 leading-relaxed">
            I build high-performance web apps and products with a focus on UX,
            scalability, and clean architecture. I ship end-to-end solutions
            that feel effortless for users and maintainable for teams.
          </p>

          <p className="text-base text-default-600 leading-relaxed">
            My work spans modern frontend, real-time systems, multiplayer
            experiences, and decentralized integrations. I’m passionate about
            building products that solve real problems and scale without
            compromising quality.
          </p>

          <p className="text-base text-default-600 leading-relaxed">
            Right now I’m leveling up by building scalable game systems,
            refining backend architecture, and exploring advanced performance
            patterns in TypeScript and React.
          </p>
        </CardBody>

        <Divider />

        <CardFooter className="p-6">
          <div className="flex flex-col gap-2">
            <p className="text-sm text-default-500">
              Outside of code, I’m into hiking, digital art, and building things
              that push my limits.
            </p>

            <Link isExternal showAnchorIcon href="mailto:chris@example.com">
              Let’s build something ambitious.
            </Link>
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
