"use client"
import React, { useState } from 'react'
import { projects } from '@/utils/utils'
import Nav from '@/components/Nav'
import Link from 'next/link';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Tooltip } from '@mui/material';
import LaunchIcon from '@mui/icons-material/Launch';
import RefreshIcon from '@mui/icons-material/Refresh';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Image from 'next/image';
import { Container } from '@mui/material';
import { useSpring, animated } from 'react-spring';


const Details = ({ params }: any) => {
    const [project, setProject] = useState(projects.find(proj => proj.id == params.id));

    const fadeInProps = useSpring({
        from: { transform: 'translateY(0px)' },
        to: { transform: 'translateY(-10px)' },
        config: { tension: 100, friction: 8 },
    });

    const BrowserWindow = () => {

        return (
            <animated.div style={fadeInProps} className="relative flex flex-col light:bg-white border dark:border-zinc-800 light:border-zinc-200 rounded-lg shadow-md dark:shadow-zinc-900">
                <div className='relative h-8 w-full border-b border-zinc-200 dark:border-zinc-800 flex justify-center items-center'>
                    <div className="absolute left-2 h-full  flex flex-row justify-center items-center space-x-1">
                        <div className="w-3 h-3 bg-red-500 rounded-full cursor-pointer"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full cursor-pointer"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full cursor-pointer"></div>
                    </div>
                    <div className="relative w-1/2 h-3/5 dark:bg-stone-800 bg-stone-100 flex justify-center items-center rounded-sm">
                        <h1 className='text-xs'>{project?.displayDomain}</h1>
                        <RefreshIcon className="absolute right-1 cursor-pointer" style={{ width: '15px' }} />
                    </div>
                </div>
                <div className='h-full p-4 flex flex-row justify-between items-center'>
                    <KeyboardArrowLeftIcon />
                    <Image className='rounded-md shadow-sm' src={'/projects/calorie1.png'} alt="project image" width={200} height={150} />
                    <KeyboardArrowRightIcon />
                </div>
            </animated.div>
        )
    }

    const Technologies = () => {
        return (
            <div className="flex space-x-2">
                {project?.technologies.map(technology => (
                    <animated.div style={fadeInProps} className="w-min p-2 rounded-sm shadow-sm border light:border-zinc-200 dark:border-zinc-800 dark:shadow-zinc-900 h-min dark:bg-stone-black light:bg-zinc-50" key={technology}>
                        {technology}
                    </animated.div>
                ))}
            </div>
        );
    };


    return (
        <section className="h-screen" style={{ height: '150vh' }}>
            <Nav />
            <div className='relative flex flex-col justify-center  h-1/6 bg-white border-zinc-200 dark:bg-black dark:border-zinc-800'>
                <h1 className=' absolute text-4xl px-4'>Project</h1>
            </div>


            <div className="relative h-screen flex flex-col items-center justify-center text-center bg-zinc-50 border-t border-b border-zinc-200 dark:bg-stone-950 dark:border-zinc-800">
                <div className='absolute -top-12 flex flex-col justify-center items-center border dark:bg-gradient-to-b dark:from-black dark:to-stone-950 dark:border-zinc-800 bg-gradient-to-b from-white to-zinc-50 border-zinc-200 first-letter:rounded-lg' style={{ width: '80%', height: '80%' }}>
                    <h1 className='text-2xl'>{project?.title}</h1>
                    <BrowserWindow />
                    <div className='w-full h-1/2 border-t dark:border-stone-800 light:border-zinc-200'>
                        <h1>Details</h1>
                        <h1>Check out the GitHub repo <span className="underline">here</span></h1>
                        <h1 className='text-2xl'>{project?.description}</h1>
                        <Technologies />
                    </div>
                </div>
            </div >


        </section>
    )
}

export default Details;