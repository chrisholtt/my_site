"use client"
import { useState } from 'react';
import { titleStyle, subHeadingStyle } from '@/utils/utils';
import { Container } from '@mui/material';


export default function Hero() {
    return (
        <section className="z-10 h-screen w-screen flex items-center justify-center">
            <Container style={{ textAlign: 'center' }}>
                <div className="flex flex-col justify-between items-center space-y-6 ">
                    <h1 className={`${titleStyle} drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]`}>Creative Develope<span className="bg-transparent animate-pulse">r</span></h1>
                    <p className={subHeadingStyle}>Full-stack engineer with experience in front-end and back-end development, I enjoy experimenting with new technologies and optimising operational efficiency.</p>
                    <div className="flex justify-center items-center space-x-2">
                        <button className="font-sans text-zinc-200 dark:text-zinc-800 border bg-stone-900 dark:bg-zinc-50 rounded-md px-4 py-2 duration-300 ease-in-out transition-transform transform hover:scale-105">Contact me</button>
                        <button className="font-sans light:text-zinc-800 dark:text-zinc-50 border bg-zinc-50 dark:bg-stone-800 rounded-md px-4 py-2 duration-300 ease-in-out transition-transform transform hover:scale-105">Contact me</button>
                    </div>
                </div>
            </Container>
        </section>
    )
}