"use client"
import Nav from '../components/Nav';
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import Scene from '../components/Scene';
import Projects from '../components/Projects';
import React, { useEffect, useState } from 'react';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Page() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const req = await fetch(`/api/firebase`);
                if (req.ok) {
                    const res = await req.json();
                    setProjects(res);
                } else {
                    console.error('Failed to fetch data from the API');
                }
            } catch (error) {
                console.error('An error occurred:', error);
            }
        }
        fetchData();
    }, []);

    return (
        <>
            <Nav />
            <Scene />
            <Hero />
            <Skills />
            <Projects projects={projects} /> {/* Pass projects as a prop */}
            <Contact />
            <Footer />
        </>
    );
}
