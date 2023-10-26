"use client"
import React, { useState, useLayoutEffect, useEffect } from 'react'
import Nav from '@/app/components/common/Nav'
import Link from 'next/link';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import RefreshIcon from '@mui/icons-material/Refresh';
import Footer from '@/app/components/common/Footer';
import { Chip } from '@mui/material';
import ProjectSidebar from '@/app/components/project-page/ProjectSidebar';
import LaunchIcon from '@mui/icons-material/Launch';


export default function Page({ params }: any) {

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    }, [])


    const loadingProjects = [
        {
            title: "",
            id: "/"
        },
        {
            title: "",
            id: "/"
        },
        {
            title: "",
            id: "/"
        },
        {
            title: "",
            id: "/"
        },
        {
            title: "",
            id: "/"
        },
        {
            title: "",
            id: "/"
        },
    ]

    const BrowserWindow = () => {
        return (
            <div className=" w-[400px] h-[250px] relative flex flex-col light:bg-white border dark:border-zinc-800 light:border-zinc-200 rounded-lg shadow-md dark:shadow-zinc-900">
                <div className='relative h-8 w-full border-b border-zinc-200 dark:border-zinc-800 flex justify-center items-center'>
                    <div className="absolute left-2 h-full  flex flex-row justify-center items-center space-x-1">
                        <div className="w-3 h-3 bg-red-500 rounded-full cursor-pointer"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full cursor-pointer"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full cursor-pointer"></div>
                    </div>
                    <div className="relative w-1/2 h-3/5 dark:bg-stone-900 bg-stone-100 flex justify-center items-center rounded-sm">
                        <RefreshIcon className="absolute right-1 cursor-pointer" style={{ width: '15px' }} />
                    </div>
                </div>
                <div className='blinking-background flex flex-col justify-center items-center h-full before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r before:from-transparent dark:before:via-stone-800 before:via-zinc-100 hover:shadow-lg before:animate-[shimmer_1.5s_infinite]'>
                </div>
            </div>
        )
    }

    const Technologies = () => {
        return (
            <div className="flex flex-row justify-around items-center">
                {[1, 2, 3].map(technology => (
                    <Chip label={null} key={technology} component="a" className="bg-white dark:bg-stone-800 text-black dark:text-white shadow-sm cursor-default before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r before:from-transparent dark:before:via-stone-800 before:via-zinc-100 hover:shadow-lg before:animate-[shimmer_1.5s_infinite]" />
                ))}
            </div>
        );
    };

    const Details = ({ element, delay }: any) => {
        return (
            <div className='w-48 h-48 flex flex-col justify-center items-center border bg-white border-zinc-200 dark:bg-black rounded dark:border-stone-800 shadow-sm dark:shadow-zinc-900 relative space-y-3 overflow-hidden p-3 before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r before:from-transparent dark:before:via-stone-800 before:via-zinc-100 hover:shadow-lg before:animate-[shimmer_1.5s_infinite]'>
                {element}
            </div>
        )
    }

    return (
        <>
            <section className="h-screen">
                <Nav />

                <div className='pl-4 pt-[50px] relative flex flex-row justify-start items-center h-1/6 bg-white border-zinc-200 dark:bg-black dark:border-zinc-800'>
                    <Chip icon={<ArrowBackIcon className="dark:text-white" />} className="dark:text-white dark:bg-stone-900 bg-zinc-50" label="Projects" component="a" href="/" clickable />
                </div>

                <div className="relative h-5/6 flex flex-col items-center justify-center text-center bg-zinc-50 border-t border-b border-zinc-200 dark:bg-stone-950 dark:border-zinc-800">
                    <div className="-top-14 flex flex-row gap-3">
                        <div className='w-[300px] h-[600px] border border-zinc-200 dark:border-stone-800 overflow-scroll rounded-lg shadow-md dark:bg-black bg-white' style={{ direction: 'rtl' }}>
                            <ProjectSidebar projects={loadingProjects} />
                        </div>

                        <div className='w-[800px] h-[600px] rounded-lg overflow-hidden bg-yellow-300 shadow-md border dark:border-stone-800'>
                            <div className="w-full h-1/2 flex flex-col items-center justify-center bg-white dark:bg-black space-y-4">
                                <h1 className='text-2xl'></h1>
                                <BrowserWindow />
                                <h1 className="text-md dark:text-zinc-200"></h1>
                            </div>
                            <div className="w-full h-1/2 flex flex-col items-center justify-around border-t dark:border-zinc-800 border-zinc-200 bg-zinc-50 dark:bg-stone-950">
                                <div className='w-full px-10 flex flex-row justify-between items-start'>
                                    <div className='text-start'>
                                        <h1 className='text-xl'>Details</h1>
                                        <h1 className='text-md dark:text-zinc-200'>Check out the GitHub repo <span className="underline"><Link href={'/'} target="_blank">here{<LaunchIcon className='text-xs' />}</Link></span></h1>
                                    </div>
                                    {/* <Technologies /> */}
                                </div>
                                <div className='grid grid-cols-3 gap-x-3'>
                                    <Details element="" />
                                    <Details element="" />
                                    <Details element="" />
                                </div>
                            </div>
                        </div>


                    </div>




                </div >
                <Footer />
            </section>
        </>

    )
}

