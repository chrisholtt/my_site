"use client"
import { useState } from 'react';
import { titleStyle, subHeadingStyle } from '@/utils/utils';



export default function Hero() {
    return (
        <section className="z-10 h-screen w-screen flex items-center justify-center">
            <main className="flex flex-col items-center justify-center w-3/5 space-y-4">
                <h1 className={titleStyle}>Creative Develope<span className="bg-transparent animate-pulse">r</span></h1>
                <p className={subHeadingStyle}>Vercel's frontend cloud gives developers the frameworks, workflows, and infrastructure to build a faster, more personalized Web.</p>
                <div className="flex space-x-2">
                    <button className="font-sans bg-slate-100 rounded-md px-4 py-2 hover:bg-slate-200 transition-colors duration-300 ease-in-out">Contact Me</button>
                    <button className="font-sans bg-primary text-white rounded-md px-4 py-2 hover:bg-slate-200 transition-colors duration-300 ease-in-out">Something else</button>
                </div>
            </main>
        </section>
    )
}