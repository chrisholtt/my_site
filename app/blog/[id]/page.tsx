import { notFound } from "next/navigation";
import { blogs } from "@/lib/blogs";
import BlogClient from "@/components/BlogClient";

export const revalidate = 60 * 60;

export async function generateStaticParams() {
    return blogs.map((blog) => ({
        id: blog.id,
    }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;

    const blog = blogs.find((b) => b.id === id);
    if (!blog) return {};

    return {
        title: blog.title,
        description: blog.excerpt,
        openGraph: {
            title: blog.title,
            description: blog.excerpt,
            images: [blog.imageSrc],
            type: "article",
        },
    };
}

export default async function BlogSlugPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;

    const blog = blogs.find((b) => b.id === id);
    if (!blog) return notFound();

    return <BlogClient blog={blog} />;
}
