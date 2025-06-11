"use client";

import { title } from "@/components/primitives";
import { Card, CardBody } from "@heroui/card";
import { Avatar } from "@heroui/avatar";

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto p-6 flex flex-col items-center gap-8">
      <h1 className={`${title()} text-5xl`}>About</h1>

      <Card radius="lg" className="w-full shadow-lg">
        <CardBody className="flex flex-col sm:flex-row items-center justify-start gap-6 p-8">
          <Avatar
            src="/avatar.png" // replace with your avatar image path
            alt="Chris Holt"
            size="md"
            radius="full"
            className="flex-shrink-0"
          />
          <div className="text-center sm:text-left">
            <p className="text-lg text-gray-700 leading-relaxed max-w-xl">
              Hi, I’m Chris Holt, a passionate software engineer based in Edinburgh, Scotland.
              I specialize in crafting elegant, performant web and Web3 applications
              with a focus on front-end and great user experience.
            </p>
            <p className="mt-4 text-gray-600 max-w-xl">
              When I’m not coding, I enjoy exploring new technologies, hiking, and
              creating digital art.
            </p>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
