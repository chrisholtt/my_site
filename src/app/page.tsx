"use client"
import Nav from './components/Nav'
import Hero from './components/Hero'
import Skills from './components/Skills';
import Scene from './components/Scene'
import Projects from './components/Projects';
import React, { useEffect } from 'react';

async function serverTest() {
    const req = await fetch(`http:/localhost:3000/api/hello`);
    const res = await req.json();
}

export default function Page() {
    // await new Promise((resolve) => setTimeout(resolve, 2000));
    // const getText = await serverTest();
    return (
        <>
            <Nav />
            <Scene />
            <Hero />
            <Skills />
            <Projects />
        </>
    )
}