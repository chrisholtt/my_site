"use client"
import Link from 'next/link'
import Nav from './components/Nav'
import Hero from './components/Hero'


async function serverTest() {
    const req = await fetch(`http:/localhost:3000/api/hello`);
    const res = await req.json();
}

export default async function Page() {
    // await new Promise((resolve) => setTimeout(resolve, 2000));

    // const getText = await serverTest();

    return (
        <>
            <Nav />
            <Hero />
        </>
    )
}