"use client"
import { useState, useEffect } from 'react';
import { titleStyle, subHeadingStyle } from '@/utils/utils';
import { Container } from '@mui/material';
import Image from 'next/image';
import Nav from '@/app/components/common/Nav';

export default function Loading() {
    return (
        <>
            <Nav />
            <section className="z-10 h-screen w-screen flex items-center justify-center">
                <div className="absolute flex flex-col justify-center items-center text-center mb-32 ml-12 z-[-1]">
                    <Image src="/loaders/giphy.gif" alt="gameboy" width={500} height={500} style={{ opacity: 0.2 }} />
                </div>
                <Container style={{ textAlign: 'center' }}>
                    <div className="flex flex-col justify-between items-center space-y-6">
                        <h1 className={titleStyle}>Creative Develope<span className="bg-transparent animate-pulse">r</span></h1>
                        <p className={subHeadingStyle}>Full-stack engineer with experience in front-end and back-end development, I enjoy refining existing code and streamlining processes.</p>
                    </div>
                </Container>
            </section>
        </>
    )
}