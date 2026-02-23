"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
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
                className="mb-6 inline-block text-sm text-muted-foreground hover:text-foreground"
            >
                ← Back
            </Link>
            <Card className="w-full bg-background/80 backdrop-blur-md border border-border shadow-xl">
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
                        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />
                    </div>
                </CardHeader>
                <CardContent className="px-6 pt-6 pb-4 space-y-2">
                    <h1 className={`text-4xl font-bold`}>
                        {blog.title}
                    </h1>
                    <time className="text-sm text-muted-foreground">{blog.date}</time>
                </CardContent>
                <CardContent className="px-6 pt-0 pb-4 space-y-4 text-muted-foreground leading-relaxed">
                    {blog.content.map((paragraph: string, index: number) => (
                        <p key={index}>{paragraph}</p>
                    ))}
                </CardContent>
                {blog.techStack && blog.techStack.length > 0 && (
                    <CardContent className="px-6 pt-0 pb-4">
                        <h2 className="text-lg font-semibold mb-3">Tech stack</h2>
                        <ul className="flex flex-wrap gap-2">
                            {blog.techStack.map((tech: string) => (
                                <li
                                    key={tech}
                                    className="px-3 py-1 rounded-full bg-muted text-muted-foreground text-sm"
                                >
                                    {tech}
                                </li>
                            ))}
                        </ul>
                    </CardContent>
                )}
                {blog.link && (
                    <CardFooter className="px-6 pt-0 pb-4 flex gap-2">
                        <Button asChild variant="link" className="p-0 h-auto w-fit">
                            <a href={blog.link.href} target="_blank" rel="noopener noreferrer">
                                {blog.link.label}
                            </a>
                        </Button>
                    </CardFooter>
                )}
            </Card>
        </motion.div>
    );
}
