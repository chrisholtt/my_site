"use client"
import { useSpring, animated } from 'react-spring';

export default function Detail({ element, delay }: any) {
    const FadeInProps = (delay: number) => {
        return useSpring({
            from: {
                transform: 'translateY(-20px) rotate(0deg)',
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
    return (
        <animated.div style={FadeInProps(delay)} className='w-48 h-48 flex flex-col justify-center items-center border bg-white border-zinc-200 dark:bg-black rounded dark:border-stone-800 shadow-sm dark:shadow-zinc-900'>
            {element}
        </animated.div>
    )
}