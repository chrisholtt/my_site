"use client"
import Link from 'next/link';
import { Tooltip } from '@mui/material';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import app from "../../../Firestore";
import SignInButton from './SignInButton';

export default function Nav() {
    return (
        <nav className='fixed dark:bg-black bg-zinc-50 w-screen flex flex-row justify-between px-2 border-b border dark:border-stone-800 light:border-zinc-200' style={{ zIndex: 10 }}>
            <ul className="flex flex-row items-center">
                <li className="p-1 cursor-pointer font-roboto text-3xl align-middle justify-center border-b-2 dark:border-lime-300 border-slate-500">
                    <Link href='/'>
                        <h1>CH</h1>
                    </Link>
                </li>
            </ul>
            <ul className='flex flex-row items-center gap-2'>
                <li >
                    <SignInButton />
                </li>
            </ul>
        </nav>
    )
}