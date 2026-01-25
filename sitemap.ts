import { blogs } from "@/lib/blogs";

export default function sitemap() {
    return blogs.map((blog) => ({
        url: `https://chrisholt.dev/blog/${blog.id}`,
        lastModified: blog.date,
    }));
}
