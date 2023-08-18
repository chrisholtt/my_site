"use client"
import { useState } from 'react';



export default function Hero() {
    return (
        <section className=" absolute z-10 h-screen w-screen flex items-center justify-center">
            <main className="flex flex-col items-center justify-center w-3/5 space-y-4">
                <h1 className="text-8xl font-sans font-semibold tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-200">Creative Developer</h1>
                <p className="text-lg text-primary font-sans font-semibold tracking-tighter">Vercel's frontend cloud gives developers the frameworks, workflows, and infrastructure to build a faster, more personalized Web.</p>
                <div className="flex space-x-2">
                    <button className="font-sans bg-slate-100 rounded-md px-4 py-2 hover:bg-slate-200 transition-colors duration-300 ease-in-out">Contact Me</button>
                    <button className="font-sans bg-primary text-white rounded-md px-4 py-2 hover:bg-slate-200 transition-colors duration-300 ease-in-out">Something else</button>
                </div>
            </main>
        </section>
    )
}