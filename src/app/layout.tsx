"use client"
import './globals.css'
import { Inter } from 'next/font/google';
import { Html } from "@react-three/drei"

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" >

      <body className="bg-bg">{children}</body>
    </html>
  )
}
