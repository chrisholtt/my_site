"use client"
import React, { useEffect, useState } from 'react'
import { skills, headingStyle, subHeadingStyle } from "@/utils/utils";
import { Container } from "@mui/material";
import Chip from '@mui/material/Chip';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';



export default function Hero() {

    const Skills = () => (
        skills.map(({ title }) => (
            <Chip
                key={title}
                label={title}
                icon={<AutoAwesomeIcon className="text-red-400" />}
                className="dark:bg-black bg-white shadow dark:text-white w-[100px] flex justify-between"
            />
        ))
    );




    return (
        <section className="relative h-screen w-screen flex flex-col items-center justify-center bg-zinc-50 border-t border-zinc-200 dark:bg-stone-950 dark:border-zinc-800">
            <Container style={{ textAlign: 'center' }}>
                <div className="flex flex-col justify-between items-center text-center space-y-6">
                    <h1 className='text-lg text-greenCode font-helvetica font-bold tracking-tighter dark:text-greenCode'>SKILLS</h1>
                    <h1 className={headingStyle}>Technologies I like</h1>
                    <h1 className={subHeadingStyle}>A collection of intriguing technologies I find myself using on a daily basis. </h1>
                    <div className='flex space-x-2 space-y-2 flex-wrap justify-center items-center'>
                        <Skills />
                    </div>
                </div>
            </Container>
        </section >
    )
}