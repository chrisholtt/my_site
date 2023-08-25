import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import Link from 'next/link';
import ThemeSwitches from "./ThemeSwitches"
import { Tooltip } from '@mui/material';

const hoverEffect = "border-b-2 border-lime-300"

export default function Nav() {
    return (
        <nav className='flex flex-row justify-between'>
            <ul className="flex flex-row items-center">
                <li className="p-1 cursor-pointer font-roboto text-3xl align-middle justify-center border-b-2 dark:border-lime-300 border-slate-500">
                    CH
                </li>
                <li className="p-1 cursor-pointer">
                    About
                </li>
                <li className="p-1 cursor-pointer">
                    Projects
                </li>
                <li className="p-1 cursor-pointer">
                    Contact
                </li>
            </ul>
            <ul className='flex flex-row items-center'>
                <li className="p-1">
                    <Link href="https://github.com/chrisholtt" target="_blank">
                        <Tooltip title="github">
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
                <li>
                    <ThemeSwitches />
                </li>
            </ul>
        </nav>
    )
}