"use client"
import { motion } from "framer-motion";
import React, { useEffect, useState } from 'react'
import { skills, headingStyle, subHeadingStyle } from "@/utils/utils";
import Tooltip from '@mui/material/Tooltip';



export default function Hero() {


    const SkillIcons = () => {
        return skills.map(skill => (
            <Tooltip title={skill.title}>
                <div className="w-40 h-40 bg-white bg-opacity-70 rounded-md flex flex-col justify-center items-center text-center transition-transform transform hover:shadow-md cursor-pointer" id={skill.title}>
                    <img src={skill.source} alt="skill-icon" className="w-20" />
                </div>
            </Tooltip>
        ))
    }

    const NewSkills = () => {
        return (
            <div className="flex flex-col justify-center">
                <div className='flex flex-row'>
                    <img src={skills[0].source} alt="" className="w-20 h-20 max-w-20 max-h-20" />
                    <img src={skills[1].source} alt="" className="w-20 h-20 max-w-20 max-h-20" />
                    <img src={skills[2].source} alt="" className="w-20 h-20 max-w-20 max-h-20" />
                    <img src={skills[3].source} alt="" className="w-20 h-20 max-w-20 max-h-20" />
                    <img src={skills[4].source} alt="" className="w-20 h-20 max-w-20 max-h-20" />
                </div>
                <div className='flex flex-row'>
                    <img src={skills[5].source} alt="" className="w-20 h-20 max-w-20 max-h-20" />
                    <img src={skills[6].source} alt="" className="w-20 h-20 max-w-20 max-h-20" />
                    <img src={skills[7].source} alt="" className="w-20 h-20 max-w-20 max-h-20" />
                    <img src={skills[8].source} alt="" className="w-20 h-20 max-w-20 max-h-20" />
                </div>
            </div>
        )
    }

    return (
        <section className="relative h-screen w-screen flex flex-col items-center justify-center">
            <div className="flex flex-col justify-between items-center space-y-6">
                <h1>ABOUT</h1>
                <h1 className={headingStyle}>Technologies I like</h1>
                <h1 className={subHeadingStyle}>A collection of some cool cool technologies I like experimenting with.</h1>
            </div>
            <div className="relative">
                <div className="grid grid-cols-3 gap-4 bg-slate-100 bg-opacity-20">
                    <SkillIcons />
                </div>
                <div className="absolute bottom-0 right-0 w-20 h-20 bg-slate-400">
                    <p>About me</p>
                </div>
            </div>
        </section >
    )
}