"use client";

import { useState } from "react";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { pageTransition } from "@/lib/animations";
import { blogs } from "@/lib/blogs";
import { Button } from "@/components/ui/button";

const PAGE_SIZE = 6;

export default function BlogPage() {
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const visibleBlogs = blogs.slice(0, visibleCount);
  const hasMore = visibleCount < blogs.length;

  return (
    <motion.div
      variants={pageTransition}
      initial="hidden"
      animate="show"
      className="space-y-12 max-w-7xl mx-auto"
    >
      {/* Header */}
      <div className="text-center space-y-4 max-w-xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">Blog</h1>
        <p className="text-sm sm:text-base text-muted-foreground">
          Notes on systems, engineering decisions, and things I’m building or
          learning along the way.
        </p>
      </div>
      <motion.div
        variants={pageTransition}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {/* Animated Grid */}
        {visibleBlogs.map((blog) => (
          <motion.div key={blog.id} className="h-full">
            <Link href={`/blog/${blog.id}`} className="block h-full">
              <Card className="w-full h-full flex flex-col group border border-border bg-background/80 shadow-xl hover:shadow-2xl transition-shadow">
                <CardHeader className="p-0">
                  <div className="relative w-full h-48 overflow-hidden rounded-t-2xl">
                    {blog.imageSrc && (
                      <Image
                        src={blog.imageSrc}
                        alt={blog.title}
                        fill
                        priority={blog.id === "1"}
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover"
                      />
                    )}
                    <div className="absolute inset-0 bg-linear-to-tr from-black/60 via-transparent to-white/10" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.25),transparent_60%)]" />
                  </div>
                </CardHeader>
                <CardContent className="space-y-3 flex-1 mt-2">
                  <h3 className="text-lg font-semibold leading-snug">
                    {blog.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {blog.excerpt}
                  </p>
                </CardContent>
                <CardFooter className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>{blog.date}</span>
                  <span className="text-primary font-medium group-hover:underline">
                    Read more →
                  </span>
                </CardFooter>
              </Card>
            </Link>
          </motion.div>
        ))}
      </motion.div>
      {/* Load more */}
      {hasMore && (
        <div className="flex justify-center">
          <Button
            onClick={() => setVisibleCount((v) => v + 3)}
            variant="outline"
            className="rounded-full px-6 py-2 text-base font-semibold"
          >
            Load more
          </Button>
        </div>
      )}
    </motion.div>
  );
}
