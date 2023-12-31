"use client"
import './globals.css'
import ThemeProvider from "./theme-provider";
import { Analytics } from '@vercel/analytics/react';
import Providers from "../app/components/common/Providers"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;1,100;1,300&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@500&family=Roboto:ital,wght@0,400;1,100;1,300&display=swap" rel="stylesheet" />
        <title>Software Developer - Edinburgh, Scotland</title>
        <meta name="Chris Holt" content="Software Developer" />
      </head>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <body className="bg-white dark:bg-black">
          <Providers>
            {children}
          </Providers>
          <Analytics />
        </body>
      </ThemeProvider>
    </html>
  )
}
