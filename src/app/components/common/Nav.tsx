"use client"
import Link from 'next/link';
import SignInButton from './SignInButton';
import Image from 'next/image';
import { useTheme } from "next-themes";
import clsx from "clsx";
import React, { useEffect, useState } from 'react';

export default function Nav() {
    const { theme, setTheme } = useTheme();
    const [imageSrc, setImageSrc] = useState<string>('/images/logo_white.svg')

    useEffect(() => {
        setImageSrc(theme === 'dark' ? '/images/logo_white.svg' : '/images/logo_black.svg')
    }, [theme])




    return (
        <nav className='fixed frosted w-screen flex flex-row justify-between px-2 border-b border dark:border-stone-800 light:border-zinc-200' style={{ zIndex: 10 }}>
            <ul className="flex flex-row items-center">
                <li className="p-1 hover:bg-neutral-600 hover:bg-opacity-30 transition rounded-full">
                    <Link href='/'>
                        <Image src={imageSrc} width={30} height={30} priority alt="star" />
                    </Link>
                </li>
            </ul>
            <ul className='flex flex-row items-center gap-2'>
                <li>
                    <SignInButton />
                </li>
            </ul>
        </nav>
    )
}