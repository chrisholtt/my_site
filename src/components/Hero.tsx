"use client"
import { useState } from 'react';
import { titleStyle, subHeadingStyle } from '@/utils/utils';



export default function Hero() {
    return (
        <section className="z-10 h-screen w-screen flex items-center justify-center">
            <main className="flex flex-col items-center justify-center w-3/5 space-y-4">
                <h1 className={titleStyle}>Creative Develope<span className="bg-transparent animate-pulse">r</span></h1>
                <p className={subHeadingStyle}>Full-stack engineer with experience in front-end and back-end development, I enjoy refining existing code and streamlining processes.</p>
                <div className="flex space-x-2">
                    <button className="font-sans bg-primary text-white rounded-md px-4 py-2 duration-300 ease-in-out transition-transform transform hover:scale-105">View CV</button>
                    <button className="font-sans bg-primary text-white rounded-md px-4 py-2 duration-300 ease-in-out transition-transform transform hover:scale-105">Contact me</button>
                </div>
            </main>
        </section>
    )
}