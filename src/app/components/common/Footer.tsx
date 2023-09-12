"use client"
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Link from 'next/link';
import ThemeSwitches from "../ThemeSwitches"
import { Tooltip } from '@mui/material';
import { Container } from "@mui/material";



export default function Footer() {
    return (
        <nav className='h-24 dark:bg-black bg-zinc-50 w-screen flex flex-row justify-between px-6 border-b dark:border-stone-800 light:border-zinc-200' style={{ zIndex: 10 }}>
            <ul className="flex flex-row items-center">
                <li className="p-1 text-zinc-400 font-roboto text-sm align-middle justify-center">
                    <h1>Chris Holt</h1>
                </li>
                <li>
                    <Link href="https://github.com/chrisholtt" target="_blank">
                        <Tooltip title="GitHub">
                            <GitHubIcon />
                        </Tooltip>
                    </Link>
                </li>
                <li>
                    <Link href="https://www.linkedin.com/in/chrisphilholt/" target="_blank">
                        <Tooltip title="LinkedIn">
                            <LinkedInIcon />
                        </Tooltip>
                    </Link>
                </li>
            </ul>
            <ul className='flex flex-row items-center'>
                <li className="p-1 text-zinc-400 font-roboto text-sm align-middle justify-center">
                    <h1>Built with Next.js</h1>
                </li>
                <li>
                    <ThemeSwitches />
                </li>
            </ul>
        </nav>
    )
}