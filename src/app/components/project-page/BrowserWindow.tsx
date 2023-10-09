"use client"
import { useSpring, animated } from 'react-spring';
import RefreshIcon from '@mui/icons-material/Refresh';
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';

export default function BrowserWindow({ displayLink, images }: any) {
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



    const Images = () => {
        return (
            <div>
                <Carousel showThumbs={false} autoPlay className='w-[300px]'>
                    {images.map((image, index) => (
                        <Image key={index} src={image} alt="project image" width={300} height={200} />
                    ))}
                </Carousel>
            </div>
        );
    };

    return (
        <animated.div style={FadeInProps(0)} className="w-[400px] h-[250px] relative flex flex-col light:bg-white border dark:border-zinc-800 light:border-zinc-200 rounded-lg shadow-md dark:shadow-zinc-900">
            <div className='relative h-8 w-full border-b border-zinc-200 dark:border-zinc-800 flex justify-center items-center'>
                <div className="absolute left-2 h-full  flex flex-row justify-center items-center space-x-1">
                    <div className="w-3 h-3 bg-red-500 rounded-full cursor-pointer"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full cursor-pointer"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full cursor-pointer"></div>
                </div>
                <div className="relative w-1/2 h-3/5 dark:bg-stone-900 bg-stone-100 flex justify-center items-center rounded-sm">
                    <h1 className='text-xs'>{displayLink}</h1>
                    <RefreshIcon className="absolute right-1 cursor-pointer" style={{ width: '15px' }} />
                </div>
            </div>
            <div className='flex flex-col h-full justify-center items-center'>
                <Images />
            </div>
        </animated.div>
    )
}