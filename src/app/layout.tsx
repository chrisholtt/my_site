"use client"
import './globals.css'
import ThemeProvider from "./theme-provider";
import { Analytics } from '@vercel/analytics/react';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCKO0W5gzyxVhst4GSoHEchbUMeASSPx-E",
  authDomain: "portfolio-2bb4a.firebaseapp.com",
  projectId: "portfolio-2bb4a",
  storageBucket: "portfolio-2bb4a.appspot.com",
  messagingSenderId: "109746109965",
  appId: "1:109746109965:web:5b6bd3a8be2bfa697ddf44",
  measurementId: "G-NPRX2MT446"
};

// Initialize Firebase
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // const app = initializeApp(firebaseConfig);

  return (
    <html lang="en" >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;1,100;1,300&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@500&family=Roboto:ital,wght@0,400;1,100;1,300&display=swap" rel="stylesheet" />

      </head>


      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <body className="bg-white dark:bg-black">
          {children}
          <Analytics />
        </body>
      </ThemeProvider>

    </html>
  )
}
