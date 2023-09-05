"use client"
import React, { useState, useLayoutEffect, useEffect } from 'react'
import Nav from '@/app/components/Nav'
import Link from 'next/link';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import LaunchIcon from '@mui/icons-material/Launch';
import RefreshIcon from '@mui/icons-material/Refresh';
import { useSpring, animated } from 'react-spring';
import Footer from '@/app/components/Footer';
import Rating from '@/app/components/Rating';
import { useProjectContext } from '@/app/contexts/ProjectContext';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';



export default function Page({ params }: any) {

    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, []);




    const FadeInProps = (delay: number) => {
        return useSpring({
            from: {
                transform: 'translateY(-20px) rotate(0deg)',
                opacity: 0,
            },
            to: {
                transform: 'translateY(0px) rotate(0deg)',
                opacity: 1,
            },
            config: { tension: 50, friction: 10 },
            delay: delay,
        });
    };



    const BrowserWindow = () => {
        return (
            <animated.div style={FadeInProps(0)} className="w-[400px] h-[250px] relative flex flex-col light:bg-white border dark:border-zinc-800 light:border-zinc-200 rounded-lg shadow-md dark:shadow-zinc-900">
                <div className='relative h-8 w-full border-b border-zinc-200 dark:border-zinc-800 flex justify-center items-center'>
                    <div className="absolute left-2 h-full  flex flex-row justify-center items-center space-x-1">
                        <div className="w-3 h-3 bg-red-500 rounded-full cursor-pointer"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full cursor-pointer"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full cursor-pointer"></div>
                    </div>
                    <div className="relative w-1/2 h-3/5 dark:bg-stone-900 bg-stone-100 flex justify-center items-center rounded-sm">
                        <h1 className='text-xs'>Loading</h1>
                        <RefreshIcon className="absolute right-1 cursor-pointer" style={{ width: '15px' }} />
                    </div>
                </div>
                <div className='flex flex-col h-full justify-center items-center'>
                </div>
            </animated.div>
        )
    }

    const Technologies = () => {
        return (
            <div className="flex flex-row justify-around items-center">
                {[1, 2, 3].map(technology => (
                    <div className="w-min py-2 px-4 mx-2 rounded-sm shadow-sm border light:border-zinc-200 dark:border-zinc-800 dark:shadow-zinc-900 h-min dark:bg-stone-950 bg-white" key={technology}>
                        <h1 className="dark:text-zinc-200">{technology}</h1>
                    </div>
                ))}
            </div>
        );
    };

    const Details = ({ element, delay }: any) => {
        return (
            <animated.div style={FadeInProps(delay)} className='w-48 h-48 flex flex-col justify-center items-center border bg-white border-zinc-200 dark:bg-black rounded dark:border-stone-800 shadow-sm dark:shadow-zinc-900'>
                {element}
            </animated.div>
        )
    }


    return (
        <>
            <Nav />
            <section className="h-screen" >
                <div className='relative flex flex-row justify-start items-center  h-1/4 bg-white border-zinc-200 dark:bg-black dark:border-zinc-800'>
                    <Link href="/"><ArrowBackIcon /></Link>
                    <h1 className='text-4xl px-4'>Project</h1>
                </div>
                <div className=" relative h-screen flex flex-col items-center justify-center text-center bg-zinc-50 border-t border-b border-zinc-200 dark:bg-stone-950 dark:border-zinc-800">
                    <div className='absolute -top-12 flex flex-col justify-center items-center border rounded dark:bg-gradient-to-b dark:from-black dark:to-stone-950 dark:border-zinc-800 bg-gradient-to-b from-white to-zinc-50 border-zinc-200 shadow-md dark:shadow-black' style={{ width: '80%', height: '80%' }}>
                        <div className="w-full h-1/2 flex flex-col items-center justify-center bg-white dark:bg-black space-y-4">
                            <h1 className='text-2xl'>Loading</h1>
                            <BrowserWindow />
                            <h1 className="text-md dark:text-zinc-200">Loading</h1>
                        </div>
                        <div className="w-full h-1/2 flex flex-col items-center justify-around border-t dark:border-zinc-800 border-zinc-200 bg-zinc-50 dark:bg-stone-950">
                            <div className='w-full px-10 flex flex-row justify-between items-start'>
                                <div className='text-start'>
                                    <h1 className='text-xl'>Details</h1>
                                    <h1 className='text-md dark:text-zinc-200'>Check out the GitHub repo <span className="underline"></span></h1>
                                </div>
                                <Technologies />
                            </div>
                            <div className='grid grid-cols-3 gap-6'>
                                <Details element="Loain" />
                                <Details element="Loain" />
                                <Details element="Loain" />
                            </div>
                        </div>
                    </div>
                </div >
                <Footer />
            </section>
        </>
    )
}

