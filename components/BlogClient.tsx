"use client";

import { useSpring, useTrail, animated } from "@react-spring/web";
import Link from "next/link";
import Image from "next/image";
import { Blog } from "@/lib/blogs";
import { AnimatedSection } from "@/components/AnimatedSection";

interface BlogClientProps {
    blog: Blog;
}

export default function BlogClient({ blog }: BlogClientProps) {
    // Back button and sidebar animation
    const sidebarSpring = useSpring({
        from: { opacity: 0, transform: "translateX(-30px)" },
        to: { opacity: 1, transform: "translateX(0px)" },
        config: { tension: 280, friction: 60 },
    });

    // Title animation
    const titleSpring = useSpring({
        from: { opacity: 0, transform: "translateY(-20px)" },
        to: { opacity: 1, transform: "translateY(0px)" },
        config: { tension: 280, friction: 60 },
        delay: 100,
    });

    // Tech stack trail animation
    const techTrail = useTrail(blog.techStack?.length || 0, {
        from: { opacity: 0, transform: "scale(0.8)" },
        to: { opacity: 1, transform: "scale(1)" },
        config: { tension: 280, friction: 60 },
        delay: 200,
    });

    // Content paragraphs trail
    const contentTrail = useTrail(blog.content.length, {
        from: { opacity: 0, transform: "translateY(20px)" },
        to: { opacity: 1, transform: "translateY(0px)" },
        config: { tension: 280, friction: 60 },
        delay: 300,
    });

    return (
        <div className="lg:flex lg:justify-between lg:gap-4 max-w-7xl mx-auto px-10 py-12 md:py-20 lg:px-0 lg:py-0">
            {/* Left Column - Sticky */}
            <aside className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24 lg:pl-10 lg:overflow-hidden">
                <div>
                    <animated.div style={sidebarSpring}>
                        <Link
                            href="/"
                            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-violet-300 transition-colors cursor-pointer mb-8"
                        >
                            <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            Back to Projects
                        </Link>
                    </animated.div>

                    <animated.div style={titleSpring}>
                        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
                            {blog.title}
                        </h1>
                        
                        <time className="text-sm text-muted-foreground block mb-8">{blog.date}</time>

                        {blog.imageSrc && (
                            <div className="mb-8">
                                <Image
                                    src={blog.imageSrc}
                                    alt={blog.title}
                                    width={400}
                                    height={200}
                                    className="rounded-lg border border-muted/40"
                                />
                            </div>
                        )}
                    </animated.div>

                    {blog.techStack && blog.techStack.length > 0 && (
                        <div className="mb-8">
                            <h3 className="text-xs font-bold uppercase tracking-widest mb-3">Tech Stack</h3>
                            <div className="flex flex-wrap gap-2">
                                {techTrail.map((style, index) => (
                                    <animated.div
                                        key={blog.techStack![index]}
                                        style={style}
                                        className="flex items-center rounded-full bg-violet-400/10 px-3 py-1 text-xs font-medium leading-5 text-violet-300"
                                    >
                                        {blog.techStack![index]}
                                    </animated.div>
                                ))}
                            </div>
                        </div>
                    )}

                    {blog.link && (
                        <a
                            href={blog.link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-violet-300 transition-colors cursor-pointer"
                        >
                            {blog.link.label}
                            <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </a>
                    )}
                </div>
            </aside>

            {/* Right Column - Content */}
            <main className="lg:w-1/2 lg:py-24 lg:pr-10 mt-12 lg:mt-0">
                <article className="prose prose-neutral dark:prose-invert max-w-none">
                    <div className="space-y-4 text-muted-foreground leading-relaxed">
                        {contentTrail.map((style, index) => (
                            <animated.p key={index} style={style}>
                                {blog.content[index]}
                            </animated.p>
                        ))}
                    </div>
                </article>
            </main>
        </div>
    );
}
