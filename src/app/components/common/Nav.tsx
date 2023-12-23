"use client"
import Link from 'next/link';
import SignInButton from './SignInButton';
import Image from 'next/image';
import { useTheme } from "next-themes";
import clsx from "clsx";


export default function Nav() {
    const { theme, setTheme } = useTheme();

    const imageSrc = clsx(
        theme == 'dark' ? '/images/logo_black.svg' : '/images/logo_white.svg'
    )


    return (
        <nav className='fixed frosted w-screen flex flex-row justify-between px-2 border-b border dark:border-stone-800 light:border-zinc-200' style={{ zIndex: 10 }}>
            <ul className="flex flex-row items-center">
                <li className="p-1 cursor-pointer font-roboto text-3xl align-middle justify-center">
                    <Link href='/' className='flex flex-row'>
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