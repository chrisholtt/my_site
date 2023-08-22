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
            <div className="flex flex-col justify-center items-center">
                <div className='flex flex-row space-x-1'>
                    <Tooltip title={skills[0].title}>
                        <img src={skills[0].source} alt="" className="w-20 h-20 max-w-20 max-h-20" />
                    </Tooltip>
                    <Tooltip title={skills[1].title}>
                        <img src={skills[1].source} alt="" className="w-20 h-20 max-w-20 max-h-20" />
                    </Tooltip>
                    <Tooltip title={skills[2].title}>
                        <img src={skills[2].source} alt="" className="w-20 h-20 max-w-20 max-h-20" />
                    </Tooltip>
                    <Tooltip title={skills[3].title}>
                        <img src={skills[3].source} alt="" className="w-20 h-20 max-w-20 max-h-20" />
                    </Tooltip>
                    <Tooltip title={skills[4].title}>
                        <img src={skills[4].source} alt="" className="w-20 h-20 max-w-20 max-h-20" />
                    </Tooltip>

                </div>
                <div className='flex flex-row space-x-1'>
                    <Tooltip title={skills[5].title}>
                        <img src={skills[5].source} alt="" className="w-20 h-20 max-w-20 max-h-20" />
                    </Tooltip>
                    <Tooltip title={skills[6].title}>
                        <img src={skills[6].source} alt="" className="w-20 h-20 max-w-20 max-h-20" />
                    </Tooltip>
                    <Tooltip title={skills[7].title}>
                        <img src={skills[7].source} alt="" className="w-20 h-20 max-w-20 max-h-20" />
                    </Tooltip>
                    <Tooltip title={skills[8].title}>
                        <img src={skills[8].source} alt="" className="w-20 h-20 max-w-20 max-h-20" />
                    </Tooltip>
                </div>
            </div>
        )
    }

    return (
        <section className="relative h-screen w-screen flex flex-col items-center justify-center">
            <div className="w-1 h-20 bg-gradient-to-b rounded-sm from-lime-200 to-lime-500"></div>
            <div className="flex flex-col justify-between items-center space-y-6">
                <h1>ABOUT</h1>
                <h1 className={headingStyle}>Technologies I like</h1>
                <h1 className={subHeadingStyle}>A collection of some cool cool technologies I like experimenting with.</h1>
            </div>
            <div className="relative">
                <NewSkills />
            </div>
        </section >
    )
}