"use client";

import { motion } from "framer-motion";
import clsx from "clsx";
import { usePathname } from "next/navigation";

type Variant = "about" | "default" | "home";

export function GradientBackground({
    variant = "default",
    className,
}: {
    variant?: Variant;
    className?: string;
}) {
    const pathname = usePathname();

    return (
        <motion.div
            key={pathname}
            aria-hidden
            className={clsx(
                "pointer-events-none fixed inset-0 -z-50 overflow-hidden",
                className
            )}
            initial={{ opacity: 0.25, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0.25, scale: 1.02 }}
            transition={{ duration: 2, ease: "easeOut" }}
        >
            {variant === "home" && (
                <>
                    <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-indigo-600/10 blur-[120px]" />
                    <div className="absolute top-1/3 -right-40 h-[600px] w-[600px] rounded-full bg-purple-600/10 blur-[140px]" />
                    <div className="absolute bottom-0 left-1/3 h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-[120px]" />
                </>
            )}


            {variant === "default" && (
                <>
                    {/* Soft gradient base */}
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900" />

                    {/* Very subtle color wash */}
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/6 via-sky-400/4 to-rose-500/4" />

                    {/* Soft blurred orbs */}
                    <div className="absolute -top-44 -left-44 h-[560px] w-[560px] rounded-full bg-indigo-500/20 blur-[200px]" />
                    <div className="absolute -bottom-64 right-[-140px] h-[680px] w-[680px] rounded-full bg-rose-500/20 blur-[220px]" />
                    <div className="absolute top-[25%] left-[50%] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-sky-400/20 blur-[200px]" />

                    {/* Ultra subtle noise */}
                </>
            )}


            {variant === "about" && (
                <>
                    <div className="absolute top-0 left-0 h-[600px] w-[600px] rounded-full bg-lime-500/10 blur-[160px]" />
                    <div className="absolute bottom-0 right-0 h-[700px] w-[700px] rounded-full bg-emerald-500/10 blur-[180px]" />
                </>
            )}

        </motion.div>
    );
}
