"use client"
import React, { useEffect, useState } from 'react'
import { skills, headingStyle, subHeadingStyle } from "@/utils/utils";
import Tooltip from '@mui/material/Tooltip';
import Image from "next/image";
import Link from "next/link";
import { Container } from "@mui/material";


export default function Hero() {

    const NewSkills = () => {
        return (
            <div className="flex flex-col justify-center items-center">
                <div className='flex flex-row space-x-1'>
                    <Tooltip title={skills[0].title}>
                        <Image src={skills[0].source} alt="" width={60} height={60} />
                    </Tooltip>
                    <Tooltip title={skills[1].title}>
                        <Image src={skills[1].source} alt="" width={60} height={60} />
                    </Tooltip>
                    <Tooltip title={skills[2].title}>
                        <Image src={skills[2].source} alt="" width={60} height={60} />
                    </Tooltip>
                    <Tooltip title={skills[3].title}>
                        <Image src={skills[3].source} alt="" width={60} height={60} />
                    </Tooltip>
                    <Tooltip title={skills[4].title}>
                        <Image src={skills[4].source} alt="" width={60} height={60} />
                    </Tooltip>

                </div>
                <div className='flex flex-row space-x-1'>
                    <Tooltip title={skills[5].title}>
                        <Image src={skills[5].source} alt="" width={60} height={60} />
                    </Tooltip>
                    <Tooltip title={skills[6].title}>
                        <Image src={skills[6].source} alt="" width={60} height={60} />
                    </Tooltip>
                    <Tooltip title={skills[7].title}>
                        <Image src={skills[7].source} alt="" width={60} height={60} />
                    </Tooltip>
                    <Tooltip title={skills[8].title}>
                        <Image src={skills[8].source} alt="" width={60} height={60} />
                    </Tooltip>
                </div>
            </div>
        )
    }

    return (
        <section className="relative h-screen w-screen flex flex-col items-center justify-center bg-zinc-50 border-t border-b border-zinc-200 dark:bg-stone-900 dark:border-zinc-700">
            <Container style={{ textAlign: 'center' }}>
                <div className="w-1 h-6 bg-gradient-to-b from-transparent to-white"></div>
                <div className="flex flex-col justify-between items-center text-center space-y-6">
                    <h1>SKILLS</h1>
                    <h1 className={headingStyle}>Technologies I like</h1>
                    <h1 className={subHeadingStyle}>An assortment of intriguing technologies that I enjoy exploring. With experience in both front-end and back-end development, I enjoy refining existing code and streamlining processes, making it my forte. For a full list of everything I've experimented with click <span className='underline'><Link href='/skills-full'>here</Link></span></h1>
                </div>
                <div className="relative">
                    <NewSkills />
                </div>
            </Container>
        </section >
    )
}