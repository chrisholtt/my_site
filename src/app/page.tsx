"use client"
import Nav from './components/Nav';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Scene from './components/Scene';
import Projects from './components/Projects';
import React, { useEffect, useState } from 'react';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Page() {

    return (
        <>
            <Nav />
            <Scene />
            <Hero />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
        </>
    );
}
