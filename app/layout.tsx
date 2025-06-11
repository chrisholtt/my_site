import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { Link } from "@heroui/link";
import clsx from "clsx";
import { Providers } from "./providers";
import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";

export const metadata: Metadata = {
  title: "Chris Holt | Software Engineer & Web3 Developer",
  description: "Chris Holt — Creative software engineer based in Edinburgh, Scotland. Specializing in Web3, full-stack development, and innovative digital solutions.",
  icons: {
    icon: "/favicon.ico",
  },
};


export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen text-foreground bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="relative flex flex-col min-h-screen">
            <Navbar />
            <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
              {children}
            </main>
            <footer className="w-full flex items-center justify-center py-3">
              <Link
                isExternal
                className="flex items-center gap-1 text-current"
                href="mailto:chrisphilholt@gmail.com"
                title="Email Chris Holt"
              >
                <span className="text-default-600">Get in</span>
                <p className="text-primary underline cursor-pointer">touch</p>
              </Link>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
