"use client"
import Link from 'next/link';
import SignInButton from './SignInButton';
import { Button } from '@mui/material';
import Image from 'next/image';


export default function Nav() {
    const CvDownload = () => {
        return (
            <Button className='dark:border-stone-800 border-zinc-200 text-black dark:text-stone-300 hover:border-zinc-400 dark:hover:border-stone-600' variant="outlined">
                <a href="/misc/ChrisHoltCV.pdf" download="Chris-Holts-CV.pdf" className='flex'>
                    <h1>RESUME</h1>
                </a>
            </Button>
        )
    }

    return (
        <nav className='fixed dark:bg-black bg-zinc-50 w-screen flex flex-row justify-between px-2 border-b border dark:border-stone-800 light:border-zinc-200' style={{ zIndex: 10 }}>
            <ul className="flex flex-row items-center">
                <li>
                    <Image src="/images/logo.svg" className='mix-blend-difference' width={40} height={40} alt="star" />
                </li>
                <li className="p-1 cursor-pointer font-roboto text-3xl align-middle justify-center">
                    <Link href='/'>
                        <h1>CH</h1>
                    </Link>
                </li>
            </ul>
            <ul className='flex flex-row items-center gap-2'>
                <li>
                    <CvDownload />
                </li>
                <li >
                    <SignInButton />
                </li>
            </ul>
        </nav>
    )
}