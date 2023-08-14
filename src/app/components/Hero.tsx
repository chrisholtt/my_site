"use client"
import gsap from "gsap"
import { use, useState } from 'react';



export default function Hero() {
    return (
        <section className="h-screen w-screen flex items-center justify-center">
            <div className="absolute">
                <h1 style={{ lineHeight: 0 }} className="text-8xl mix-blend-multiply">Creative Developer</h1>
            </div>
        </section >
    )
}