"use client"
import { useState } from 'react';
import { titleStyle, subHeadingStyle } from '@/utils/utils';
import { Container } from '@mui/material';
import Image from 'next/image';
import { useSpring, animated } from 'react-spring';


const FadeInProps = (delay: number) => {
    return useSpring({
        from: {
            transform: 'translateY(-40px) rotate(0deg)',
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

const Star = () => {
    return (
        <>
            <Image src={`/images/star_white.svg`} alt="star" className={`absolute mix-blend-difference star_secondary left-0 right-0 bottom-0 top-0`} width={200} height={200}></Image>
            <Image src={`/images/star_white.svg`} alt="star" className={`absolute mix-blend-difference star left-0 right-0 bottom-0 top-1`} width={80} height={80}></Image>
            <Image src={`/images/star_white.svg`} alt="star" className={`absolute mix-blend-difference star left-0 right-0 ml-auto mr-auto`} width={600} height={600}></Image>
        </>
    )
}

export default function Hero() {

    return (
        <section className="relative h-screen w-screen flex items-center justify-center">
            <div className="flex flex-col justify-between w-auto items-center text-center space-y-6 px-10">
                <h1 className={`${titleStyle} drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]`}>Creative Develope<span className="bg-transparent animate-pulse">r</span></h1>
                <h2 className={`${subHeadingStyle} `}>Software developer from Edinburgh, Scotland. I like to make cool things and experiment with new technologies. Feel free to scroll down and discover more about me and my work.</h2>
            </div>
            {/* <Star /> */}
        </section>
    )
}