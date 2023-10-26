"use client"
import { useState } from 'react';
import { titleStyle, subHeadingStyle } from '@/utils/utils';
import { Container } from '@mui/material';


export default function Hero() {
    return (
        <section className="z-10 h-screen w-screen flex items-center justify-center">
            <div className="flex flex-col justify-between w-auto items-center text-center space-y-6 px-10">
                <h1 className={`${titleStyle} drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]`}>Creative Develope<span className="bg-transparent animate-pulse">r</span></h1>
                <p className={`${subHeadingStyle} `}>An Edinburgh-based software developer with a passion for creating innovative solutions and refining code. Feel free to scroll down and discover more about me and my work.</p>
            </div>
        </section>
    )
}