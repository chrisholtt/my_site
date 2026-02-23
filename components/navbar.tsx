"use client";

import Link from "next/link";
import clsx from "clsx";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const pathname = usePathname();

  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const hasBackground = isScrolled || isMenuOpen;

  return (
    <nav
      className={clsx(
        "h-16 w-full sticky top-0 z-50 flex items-center gap-6 px-4 md:px-8 transition-all duration-300",
        hasBackground
          ? "backdrop-blur-xl backdrop-saturate-150 supports-backdrop-filter:bg-white/90 dark:supports-backdrop-filter:bg-black/90"
          : "bg-transparent"
      )}
    >
      <div className="flex items-center gap-2 font-semibold text-lg">
        <Link href="/" onClick={closeMenu} className="flex items-center gap-2">
          $CH
        </Link>
        <span>/</span>
        {pathname &&
          pathname
            .split("/")
            .filter(Boolean)
            .map((segment, index, arr) => {
              const href = "/" + arr.slice(0, index + 1).join("/");
              const isLast = index === arr.length - 1;
              const label = segment
                .replace(/[-_]/g, " ")
                .replace(/\b\w/g, (c) => c.toUpperCase());

              return (
                <span key={href} className="flex items-center gap-2 text-sm">
                  <Link
                    href={href}
                    onClick={closeMenu}
                    className={clsx(
                      "transition-colors",
                      isLast
                        ? "text-primary font-semibold"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {label}
                  </Link>

                  {!isLast && <span>/</span>}
                </span>
              );
            })}
      </div>
      <div className="ml-auto flex items-center gap-4">
        <ThemeSwitch />
      </div>
    </nav>
  );
};
