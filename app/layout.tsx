import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";
import { Providers } from "./providers";
import { fontSans } from "@/config/fonts";
import { CursorGlow } from "@/components/CursorGlow";

export const metadata: Metadata = {
  title: "Chris Holt | Full Stack Engineer",
  description: "Frontend Software Engineer building accessible, pixel-perfect digital experiences for the web.",
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "black" },
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
          "min-h-screen text-foreground font-sans antialiased bg-background",
          fontSans.variable,
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark", forcedTheme: "dark" }}>
          <div className="relative flex flex-col min-h-screen">
            <CursorGlow />
            <main className="grow">
              {children}
            </main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
