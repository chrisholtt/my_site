"use client"
import { titleStyle, subHeadingStyle } from '@/utils/utils';
import Image from 'next/image';
import { useSpring, animated } from 'react-spring';
import Scene from '../components/Scene'
import Chip from '@mui/material/Chip';
import GitHub from '@mui/icons-material/GitHub';

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

export default function Hero() {

    return (
        <section className="px-10 relative h-screen w-screen flex flex-row items-center justify-center">


            <animated.div style={FadeInProps(10)} className="flex w-1/2 mb-[10%] flex-col justify-between items-start space-y-6">
                <h2 className="text-lg text-greenCode font-helvetica font-bold tracking-tighter dark:text-greenCode">Hi, I&apos;m Chris.</h2>
                <h1 className="text-6xl lg:text-8xl xl:text-8xl font-sans font-semibold tracking-tighter dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-b dark:from-white dark:to-gray-300 bg-clip-text text-transparent bg-gradient-to-b from-slate-600 to-slate-900 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">Creative Develope<span className="bg-transparent animate-pulse">r</span></h1>
                <h2 className={`${subHeadingStyle} `}>I like building things on the web and experimenting with new tech.</h2>
                <Chip icon={<GitHub className="dark:text-white" />} className="dark:text-white dark:bg-stone-900 bg-zinc-50" label="Github" component="a" href="https://github.com/chrisholtt" target="_blank" clickable />
            </animated.div>
            <div className="w-1/2 h-full">
                <Scene />
            </div>


        </section>
    )
}