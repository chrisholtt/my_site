"use client"
import { titleStyle, subHeadingStyle } from '@/utils/utils';
import Image from 'next/image';
import { useSpring, animated } from 'react-spring';
import Scene from '../components/Scene'
import Chip from '@mui/material/Chip';
import GitHub from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
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

const Icon = () => {
    return (
        <Image
            className='ml-2'
            src="/images/logo-white-0xtra.svg"
            alt="0xtra logo"
            width={20}
            height={20} />
    )
}

export default function Hero() {

    return (
        <section className="px-10 pt-20 md:pt-0 relative h-screen w-screen flex flex-col md:flex-row items-center justify-center">
            <animated.div style={FadeInProps(10)} className="flex md:w-1/2 w-full mb-[10%] flex-col justify-between items-start space-y-6">
                <h2 className="text-lg text-greenCode font-helvetica font-bold tracking-tighter dark:text-greenCode">Hi, I&apos;m Chris.</h2>
                <h1 className="text-6xl lg:text-8xl xl:text-8xl font-sans font-semibold tracking-tighter dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-b dark:from-white dark:to-gray-300 bg-clip-text text-transparent bg-gradient-to-b from-slate-600 to-slate-900 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">Creative Develope<span className="bg-transparent animate-pulse">r</span></h1>
                <h2 className={`${subHeadingStyle}`}>
                    I love crafting innovative web experiences and pushing the boundaries of new technology.
                    I&apos;m also the founder of <strong>0xtra</strong>, a platform that helps creators earn more.
                </h2>

                <div className="flex flex-row gap-2 items-center justify-center">
                    <Chip icon={<GitHub className="dark:text-white" />} className="dark:text-white dark:bg-stone-900 bg-zinc-50" label="Github" component="a" href="https://github.com/chrisholtt" target="_blank" clickable />
                    <Chip icon={<LinkedInIcon className="dark:text-white" />} className="dark:text-white dark:bg-stone-900 bg-zinc-50" label="LinkedIn" component="a" href="https://www.linkedin.com/in/chrisphilholt/" target="_blank" clickable />
                    <Chip icon={<Icon />} className="dark:text-white dark:bg-stone-900 bg-zinc-50" label="0xtra" component="a" href="https://www.0xtra.com" target="_blank" clickable />
                    <Chip icon={<AccountCircleIcon className="dark:text-white dark:bg-stone-900 bg-zinc-50" />} className="dark:text-white dark:bg-stone-900 bg-zinc-50" label="CV" component="a" href="/misc/ChrisHoltCV.pdf" target="_blank" clickable rel="noopener noreferrer" />

                </div>
            </animated.div>

            <div className="w-1/2 md:h-full h-[40vh]">
                <Scene />
            </div>
        </section>
    )
}