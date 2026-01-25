"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button, Divider, Link } from "@heroui/react";
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Code,
} from "@heroui/react";

import { title } from "@/components/primitives";
import { pageTransition } from "@/lib/animations";
import { Blog } from "@/lib/blogs";

interface BlogClientProps {
    blog: Blog;
}

export default function BlogClient({ blog }: BlogClientProps) {
    return (
        <motion.div
            variants={pageTransition}
            initial="hidden"
            animate="show"
            className="mx-auto max-w-3xl"
        >
            <Link
                href="/blog"
                className="mb-6 inline-block text-sm text-default-500 hover:text-default-700"
            >
                ← Back to Blog
            </Link>

            <Card isBlurred className="w-full">
                {/* Hero */}
                <CardHeader className="p-0">
                    <div className="relative h-72 w-full overflow-hidden rounded-t-2xl">
                        <Image
                            src={blog.imageSrc}
                            alt={blog.title}
                            fill
                            priority
                            sizes="(max-width: 768px) 100vw, 60vw"
                            className="object-cover"
                        />

                        {/* Nice overlay like your example */}
                        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />
                    </div>
                </CardHeader>

                {/* Title */}
                <CardBody className="px-6 pt-6 pb-4 space-y-2">
                    <h1 className={`${title()} text-4xl font-bold`}>
                        {blog.title}
                    </h1>
                    <time className="text-sm text-default-500">{blog.date}</time>
                </CardBody>

                {/* Content */}
                <CardBody className="px-6 pt-0 pb-4 space-y-4 text-default-600 leading-relaxed">
                    {blog.content.map((paragraph: string, index: number) => (
                        <p key={index}>{paragraph}</p>
                    ))}
                </CardBody>

                {/* Tech stack */}
                {blog.techStack && blog.techStack.length > 0 && (
                    <CardBody className="px-6 pt-0 pb-4">
                        <h2 className="text-lg font-semibold mb-3">Tech stack</h2>
                        <ul className="flex flex-wrap gap-2">
                            {blog.techStack.map((tech: string) => (
                                <li
                                    key={tech}
                                    className="px-3 py-1 rounded-full bg-default-100 text-default-600 text-small"
                                >
                                    {tech}
                                </li>
                            ))}
                        </ul>
                    </CardBody>
                )}

                {/* Optional CTA Footer */}
                {blog.link && (
                    <>
                        <Divider />
                        <CardFooter className="justify-between gap-3  px-6 py-4">
                            <p className="text-small text-default-500">
                                {blog.link.label ?? "Related link"}
                            </p>

                            <Button
                                as="a"
                                href={blog.link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                color="default"
                                radius="lg"
                                size="sm"
                                variant="flat"
                            >
                                Visit →
                            </Button>
                        </CardFooter>
                    </>
                )}
            </Card>
        </motion.div>
    );
}
