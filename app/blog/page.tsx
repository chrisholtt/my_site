"use client";

import { useState } from "react";
import { title } from "@/components/primitives";
import { Card, CardHeader, CardBody, CardFooter } from "@heroui/card";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { pageTransition } from "@/lib/animations";
import { blogs } from "@/lib/blogs";
import { Button } from "@heroui/button";

const PAGE_SIZE = 6;

export default function BlogPage() {
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const visibleBlogs = blogs.slice(0, visibleCount);
  const hasMore = visibleCount < blogs.length;

  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="text-center space-y-2">
        <h1 className={title()}>Blog</h1>
      </div>

      {/* Animated Grid */}
      <motion.div
        variants={pageTransition}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {visibleBlogs.map((blog) => (
          <motion.div key={blog.id} className="h-full">
            <Link href={`/blog/${blog.id}`} className="block h-full">
              <Card
                isHoverable
                isPressable
                disableRipple
                isBlurred
                className="
                  w-full h-full flex flex-col group
                  border border-slate-200/40
                  dark:border-white/10
                  hover:shadow-slate-400/10
                  dark:hover:shadow-blue-500/20
                "
              >
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

                    <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-transparent to-white/10" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.25),transparent_60%)]" />
                  </div>
                </CardHeader>

                <CardBody className="space-y-3 flex-1">
                  <h3 className="text-xl font-semibold">{blog.title}</h3>
                  <p className="text-sm text-default-400">{blog.excerpt}</p>
                </CardBody>

                <CardFooter className="flex items-center justify-between text-sm text-default-500">
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
            onPress={() => setVisibleCount((v) => v + 3)}
            variant="bordered"
            disableRipple
            radius="full"
          >
            Load more
          </Button>
        </div>
      )}
    </div>
  );
}
