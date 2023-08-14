"use client"
import { motion } from "framer-motion";
import React, { useEffect, useState } from 'react'
import { skills } from '../utils/utils.js'


export default function Hero() {
    const [hovered, setHovered] = useState(null);
    const handleMouseEnter = (skill: any) => {
        setHovered(skill)
    }

    const SkillIcons = () => {
        return skills.map(skill => (
            <div onMouseEnter={() => handleMouseEnter(skill)} className="w-40 h-40 bg-white rounded-md flex flex-col justify-center items-center text-center transition-transform transform hover:shadow-md" id={skill.title}>
                <img src={skill.source} alt="skill-icon" className="w-20" />
                {skill.title}
            </div>
        ))
    }

    const BlankDivs = () => {
        const total = [];
        for (let i = 0; i < 100; i++) {
            total.push(
                <div className="bg-red-400 w-60 h-60">
                    <h1>hey</h1>
                </div>
            )
        }
        return total;
    }

    return (
        <section className="relative h-screen w-screen flex items-center justify-center">
            <div className="relative">
                <div class="grid grid-cols-3 gap-4 bg-slate-100">
                    <SkillIcons />
                </div>
                <div className="absolute bottom-0 right-0 w-20 h-20 bg-slate-400">
                    <p>About me</p>
                    {hovered.title}
                </div>
            </div>
            <div className="absolute top-0 w-screen h-screen">
                <BlankDivs />
            </div>



        </section >
    )
}