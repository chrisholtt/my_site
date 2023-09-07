"use client"
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Link from 'next/link';
import ThemeSwitches from "../ThemeSwitches"
import { Tooltip } from '@mui/material';


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
            <ul className='flex flex-row items-center'>
                <li className="p-1">
                    <Link href="https://github.com/chrisholtt" target="_blank">
                        <Tooltip title="GitHub">
                            <GitHubIcon />
                        </Tooltip>
                    </Link>

                </li>
                <li className="p-1">
                    <Link href="https://www.linkedin.com/in/chrisphilholt/" target="_blank">
                        <Tooltip title="LinkedIn">
                            <LinkedInIcon />
                        </Tooltip>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}