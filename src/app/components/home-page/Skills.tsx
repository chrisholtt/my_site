"use client"
import React, { useEffect, useState } from 'react'
import { skills, headingStyle, subHeadingStyle } from "@/utils/utils";
import Tooltip from '@mui/material/Tooltip';
import Image from "next/image";
import Link from "next/link";
import { Container } from "@mui/material";
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';



export default function Hero() {
    const Skillsr = () => {
        const skillsEls = skills.map((skill, i) => (
            <div key={i} className='flex flex-row items-center justify-between p-2 bg-white dark:bg-black shadow w-[300px] h-[50px]'>
                <Tooltip title={skill.title}>
                    <Avatar className="bg-stone-100 dark:bg-stone-600">
                        <Image src={skill.source} alt="" width={25} height={25} />
                    </Avatar>
                </Tooltip>
                <h1>{skill.title}</h1>
            </div>
        ))
        return skillsEls;
    }



    const SkillsNew = () => {
        return (
            skills.map(skill => {
                return (
                    <Chip key={skill} label={skill.title} icon={<AutoAwesomeIcon />} className="dark:bg-black bg-white shadow dark:text-white w-[100px] flex justify-between" />
                )
            })
        )
    }



    return (
        <section className="relative h-screen w-screen flex flex-col items-center justify-center bg-zinc-50 border-t border-zinc-200 dark:bg-stone-950 dark:border-zinc-800">
            <Container style={{ textAlign: 'center' }}>
                <div className="flex flex-col justify-between items-center text-center space-y-6">
                    <h1>SKILLS</h1>
                    <h1 className={headingStyle}>Technologies I like</h1>
                    <h1 className={subHeadingStyle}>An assortment of intriguing technologies that I enjoy exploring. With experience in both front-end and back-end development, I enjoy refining code and streamlining processes. For a full list of everything I&apos;ve experimented with click <span className='underline'><Link href='/skills-full'>here</Link></span></h1>
                    <div className='flex space-x-2 flex-wrap'>
                        <SkillsNew />
                    </div>
                </div>
            </Container>
        </section >
    )
}