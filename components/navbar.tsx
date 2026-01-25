"use client";

import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
  Link
} from "@heroui/react";
import NextLink from "next/link";
import clsx from "clsx";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import { GithubIcon, Logo } from "@/components/icons";

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
    <HeroUINavbar
      position="sticky"
      maxWidth="full"
      isBlurred={false}
      disableAnimation
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className={clsx(
        "h-16 transition-all duration-300",
        hasBackground
          ? "backdrop-blur-xl backdrop-saturate-150 supports-backdrop-filter:bg-white/80 dark:supports-backdrop-filter:bg-black/80"
          : "bg-transparent"
      )}
    >
      {/* RIGHT-ALIGNED CONTENT */}
      <NavbarContent className="h-16 flex items-center gap-6" justify="end">
        {/* Brand */}
        <NavbarBrand>
          <NextLink
            href="/"
            onClick={closeMenu}
            className="flex items-center gap-2 font-semibold"
          >
            <Logo />
            <span>Chris Holt</span>
          </NextLink>
        </NavbarBrand>
        <ul className="hidden lg:flex items-center gap-6">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                href={item.href}
                className={clsx(
                  "text-sm color-foreground"
                )}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
        </ul>
        <Link
          isExternal
          aria-label="Github"
          href={siteConfig.links.github}
          className="p-1 border border-divider rounded-full text-default-600 hover:text-foreground transition-colors"
        >
          <GithubIcon />
        </Link>
        <ThemeSwitch />
        <NavbarMenuToggle className="lg:hidden" />
      </NavbarContent>
      <NavbarMenu className="top-16 backdrop-blur-xl backdrop-saturate-150 supports-backdrop-filter:bg-white/80 dark:supports-backdrop-filter:bg-black/80">
        <div className="mx-4 mt-6 flex flex-col gap-4">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item.label}-${index}`}>
              <NextLink
                href={item.href}
                onClick={closeMenu}
                className={clsx(
                  "text-lg transition-colors"
                )}
              >
                {item.label}
              </NextLink>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu >
    </HeroUINavbar >
  );
};
