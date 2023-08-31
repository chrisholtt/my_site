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


const Page = ({ params }: any) => {
    const [project, setProject] = useState(projects.find(proj => proj.id == params.id));


    const fadeInProps = (delay: number) => {
        return useSpring({
            from: {
                transform: 'translateY(-10px)',
                opacity: 0,
            },
            to: {
                transform: 'translateY(0px)',
                opacity: 1,
            },
            config: { tension: 100, friction: 8 },
            delay: delay,
        });
    };


    const BrowserWindow = () => {
        return (
            <animated.div style={fadeInProps(0)} className="w-[400px] h-[250px] relative flex flex-col light:bg-white border dark:border-zinc-800 light:border-zinc-200 rounded-lg shadow-md dark:shadow-zinc-900">
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
            <div className="h-full w-full flex flex-col justify-around items-center">
                {project?.technologies.map(technology => (
                    <div className="w-min p-2 rounded-sm shadow-sm border light:border-zinc-200 dark:border-zinc-800 dark:shadow-zinc-900 h-min dark:bg-stone-950 light:bg-zinc-50" key={technology}>
                        <h1 className="dark:text-zinc-200">{technology}</h1>
                    </div>
                ))}
            </div>
        );
    };

    const Details = ({ element, delay }: any) => {
        return (
            <animated.div style={fadeInProps(delay)} className='w-48 h-48 flex flex-col justify-center items-center border bg-white border-zinc-200 dark:bg-black rounded dark:border-stone-800 shadow-sm dark:shadow-zinc-900'>
                {element}
            </animated.div>
        )
    }


    return (
        <section className="h-screen" >
            <Nav />
            <div className='relative flex flex-col justify-center  h-1/4 bg-white border-zinc-200 dark:bg-black dark:border-zinc-800'>
                <h1 className='absolute text-4xl px-4'>Project</h1>
            </div>


            <div className="relative h-screen flex flex-col items-center justify-center text-center bg-zinc-50 border-t border-b border-zinc-200 dark:bg-stone-950 dark:border-zinc-800">

                <div className='absolute -top-12 flex flex-col justify-center items-center border rounded dark:bg-gradient-to-b dark:from-black dark:to-stone-950 dark:border-zinc-800 bg-gradient-to-b from-white to-zinc-50 border-zinc-200 shadow-xl dark:shadow-zinc-900' style={{ width: '80%', height: '80%' }}>
                    <div className="w-full pt-4 h-1/2 flex flex-col items-center bg-white dark:bg-black">
                        <h1 className='text-2xl p-2'>{project?.title}</h1>
                        <BrowserWindow />
                    </div>
                    <div className="w-full h-1/2 flex flex-col items-center justify-around bg-zinc-50 dark:bg-stone-900">
                        <div className='w-full pl-4 flex flex-col justify-start items-start border-t border-zinc-200 dark:border-zinc-900'>
                            <h1 className='text-xl'>Details</h1>
                            <h1 className='text-md dark:text-zinc-200'>Check out the GitHub repo <span className="underline">here{<LaunchIcon />}</span></h1>
                        </div>
                        <div className='grid grid-cols-3 gap-3'>
                            <Details element={<h1 className="dark:text-zinc-200">{project?.description}</h1>} delay={100} />
                            <Details element={project?.description} delay={200} />
                            <Details element={<Technologies />} delay={300} />
                        </div>
                    </div>


                </div>
            </div >


        </section>
    )
}

export default Page;