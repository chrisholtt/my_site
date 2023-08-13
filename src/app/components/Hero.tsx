"use client"
import gsap from "gsap"
import { use, useState } from 'react';



export default function Hero() {
    const [title, setTitle] = useState("CREATIVE DEVELOPER");
    const originalTitle = "CREATIVE DEVELOPER"
    const letters = ["0", "x", "7", "a", "i", "z", "k", "l", "5", "e", "r", "o", "y", "n", "s", "0", "x", "7", "a", "i", "z", "k", "l", "5", "e", "r", "o", "y", "n", "s"]

    const handleMouseOver = () => {

        let iterations = 0;
        const interval = setInterval(() => {
            setTitle(title.split("")
                .map((letter, index) => {
                    if (index < iterations) {
                        return letter
                    }
                    letters[Math.floor(Math.random() * 26)]
                })
                .join(""))
            if (iterations >= 10) clearInterval(interval)
            iterations++;
        }, 40)


    }

    return (
        <section className="h-screen w-screen flex items-center justify-center">
            <div className="absolute" onMouseOver={handleMouseOver}>
                <h1 style={{ lineHeight: 0 }} className="text-8xl mix-blend-multiply">{title}</h1>
            </div>
        </section >
    )
}