"use client"
import Link from 'next/link'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Skills from './components/Skills';
import Scene from './components/Scene'
import React, { useEffect } from 'react';

async function serverTest() {
    const req = await fetch(`http:/localhost:3000/api/hello`);
    const res = await req.json();
}

export default function Page() {
    // await new Promise((resolve) => setTimeout(resolve, 2000));
    // const getText = await serverTest();

    useEffect(() => {
        console.log(window.scrollY)
    }, [])

    return (
        <>
            <Nav />
            <Scene />
            <Hero />
        </>
    )
}