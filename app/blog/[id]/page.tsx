"use client";

import { use } from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";

import { title } from "@/components/primitives";
import { Card, CardHeader, CardBody, CardFooter } from "@heroui/react";
import { Link } from "@heroui/react";
import { pageTransition } from "@/lib/animations";
import { blogs } from "@/lib/blogs";

function getBlog(id: string) {
    return blogs.find((b) => b.id === id);
}

export default function BlogSlugPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = use(params);
    const blog = getBlog(id);

    if (!blog) return notFound();

    return (
        <motion.div
            variants={pageTransition}
            initial="hidden"
            animate="show"
            className="mx-auto max-w-3xl"
        >
            {/* Back link */}
            <Link
                href="/blog"
                className="mb-6 inline-block text-sm text-default-500 hover:text-default-700"
            >
                ← Back to Work
            </Link>

            <Card isBlurred className="w-full">
                {/* Hero */}
                <CardHeader className="p-0">
                    <div className="relative w-full h-72 overflow-hidden rounded-t-2xl">
                        <Image
                            src={blog.imageSrc}
                            alt={blog.title}
                            fill
                            priority
                            sizes="(max-width: 768px) 100vw, 60vw"
                            className="object-cover"
                        />

                        <div className="absolute inset-0 bg-gradient-to-tr from-black/50 via-transparent to-white/10" />
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.25),transparent_60%)]" />
                    </div>
                </CardHeader>

                {/* Title + meta */}
                <CardBody className="px-8 pt-6 space-y-2">
                    <h1 className={`${title()} text-4xl font-bold`}>
                        {blog.title}
                    </h1>
                    <p className="text-sm text-default-500">
                        {blog.date}
                    </p>
                </CardBody>

                {/* Content */}
                <CardBody className="px-8 space-y-4 text-default-600 leading-relaxed">
                    {blog.content.map((paragraph, i) => (
                        <p key={i}>{paragraph}</p>
                    ))}
                </CardBody>

                {/* Tech stack */}
                {blog.techStack && blog.techStack.length > 0 && (
                    <CardBody className="px-8 pt-2 space-y-4">
                        <h2 className="text-lg font-semibold text-default-800">
                            Tech stack
                        </h2>

                        <ul className="space-y-3 text-default-600">
                            {blog.techStack.map((tech) => (
                                <li key={tech} className="flex gap-3">
                                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-default-400" />
                                    <span>{tech}</span>
                                </li>
                            ))}
                        </ul>
                    </CardBody>
                )}

                {/* Footer */}
                <CardFooter className="px-8 pb-8">
                    <p className="text-sm text-default-500">
                        {blog.excerpt}
                    </p>
                </CardFooter>
            </Card>
        </motion.div>
    );
}
