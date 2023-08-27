"use client"
import Nav from '../components/Nav'
import Hero from '../components/Hero'
import Skills from '../components/Skills';
import Scene from '../components/Scene'
import Projects from '../components/Projects';
import React, { useEffect, useState, Suspense } from 'react';
import Contact from '../components/Contact'
import LoadingIcons from 'react-loading-icons'
import Image from 'next/image';

async function serverTest() {
    const req = await fetch(`http:/localhost:3000/api/hello`);
    const res = await req.json();
}

export default function Page() {
    return (
        <>
            <Nav />
            <Suspense fallback={<div className='w-screen h-screen flex justify-center items-center'><Image src="/loaders/giphy.gif" width={100} height={100} alt="game console loader" className='z-2' /></div>}>
                <Scene />
            </Suspense>
            <Hero />
            <Skills />
            <Projects />
            <Contact />
        </>
    )
}