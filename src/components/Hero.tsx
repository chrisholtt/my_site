"use client"
import { useState } from 'react';
import { titleStyle, subHeadingStyle } from '@/utils/utils';
import { Container } from '@mui/material';


export default function Hero() {
    return (
        <section className="z-10 h-screen w-screen flex items-center justify-center">
            <Container style={{ textAlign: 'center' }}>
                <div className="flex flex-col justify-between items-center space-y-6">
                    <h1 className={titleStyle}>Creative Develope<span className="bg-transparent animate-pulse">r</span></h1>
                    <p className={subHeadingStyle}>Full-stack engineer with experience in front-end and back-end development, I enjoy refining existing code and streamlining processes.</p>
                    <div className="flex justify-center items-center space-x-2">
                        <button className="font-sans bg-primary text-white rounded-md px-4 py-2 duration-300 ease-in-out transition-transform transform hover:scale-105">View CV</button>
                        <button className="font-sans bg-primary text-white rounded-md px-4 py-2 duration-300 ease-in-out transition-transform transform hover:scale-105">Contact me</button>
                    </div>
                </div>
            </Container>
        </section>
    )
}