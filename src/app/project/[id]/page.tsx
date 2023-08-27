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

const Details = ({ params }: any) => {
    const [project, setProject] = useState(projects.find(proj => proj.id == params.id));

    const BrowserWindow = () => {
        return (
            <div className="relative flex flex-col h-full w-full dark:bg-stone-950 light:bg-white border dark:border-zinc-700 light:border-zinc-200 rounded-lg shadow-xl">
                <div className='relative h-8 w-full border-b border-zinc-200 dark:border-zinc-700 flex justify-center items-center'>
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
                <div className='h-full flex flex-row justify-between items-center'>
                    <KeyboardArrowLeftIcon />
                    <Image className='rounded-md shadow-sm' src={project?.images[0]} width={300} height={200} />
                    <KeyboardArrowRightIcon />
                </div>
            </div>
        )
    }

    const Technologies = () => {
        return (
            <div className="flex space-x-2">
                {project?.technologies.map(technology => (
                    <div className="w-min p-2 rounded-sm shadow-sm h-min dark:bg-stone-950 light:bg-white" key={technology}>
                        {technology}
                    </div>
                ))}
            </div>
        );
    };


    return (
        <section className="h-screen" style={{ height: '150vh' }}>
            <Nav />
            <div className='h-24 py-20'>
                <div className='flex items-center'>
                    <Link href='/'>
                        <Tooltip title="Back">
                            <ArrowBackIcon />
                        </Tooltip>
                    </Link>
                    <h1 className='text-4xl'>{project?.title}</h1>
                </div>
            </div>
            <div className="relative p-4 h-1/2 w-screen flex flex-col items-center justify-around bg-zinc-50 border-t border-b border-zinc-200 dark:bg-stone-900 dark:border-zinc-700">
                <div className='w-full'>
                    <h1 className='text-2xl'>{project?.description} </h1>
                    <h1 className='text-xl'>{project?.subtitle}</h1>
                </div>
                <div className='w-full h-1/2 flex flex-row justify-center items-center bg-zinc-50 border rounded-md border-zinc-200 dark:bg-stone-900 dark:border-zinc-700 overflow-hidden p-4'>
                    <div className='w-1/3 h-full p-4 flex flex-col items-center justify-center'>
                        <BrowserWindow />
                    </div>
                    <div className='w-2/3 h-full'>
                        <div className="p-2 flex flex-col">
                            <h1 className='text-zinc-300 font-thin'>Deployment</h1>
                            <h1>{project?.deployment}<span><LaunchIcon /></span></h1>
                        </div>
                        <div className="p-2">
                            <h1 className='text-zinc-300 font-thin'>Domains</h1>
                            <h1>Stuff here</h1>
                        </div>
                        <div className="flex p-2">
                            <div className=''>
                                <h1 className='text-zinc-300 font-thin'>Repo</h1>
                                <Link href={project?.link} target={'_blank'}><h1 className="underline">github</h1></Link>
                            </div>
                            <div className='px-2'>
                                <h1 className='text-zinc-300 font-thin'>Created</h1>
                                <h1>Stuff here</h1>
                            </div>
                        </div>
                        <div>
                            <h1 className='text-zinc-300 font-thin'>Repo</h1>
                            <Technologies />
                        </div>
                    </div>
                </div>
                <div className='w-full h-24 flex flex-row justify-between items-center bg-zinc-50 border rounded-md border-zinc-200 dark:bg-stone-900 dark:border-zinc-700'>
                    <Link href={'/'} >
                        <Tooltip title="Prev project">
                            <KeyboardArrowLeftIcon className='text-4xl' />
                        </Tooltip>
                    </Link>
                    <h1 className='text-2xl'>Subtitle </h1>
                    <h1 className='text-2xl'>Subtitle 2</h1>
                    <Link href={'/'}>
                        <Tooltip title="Next project">
                            <KeyboardArrowRightIcon className='text-4xl' />
                        </Tooltip>
                    </Link>
                </div>
            </div >
        </section>
    )
}

export default Details;