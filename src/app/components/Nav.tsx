import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import Link from 'next/link';

const hoverEffect = "border-b-2 border-lime-300"

export default function Nav() {
    return (
        <nav className='flex flex-row justify-between'>
            <ul className="flex flex-row items-center">
                <li className="p-1 cursor-pointer font-roboto text-primary text-3xl align-middle justify-center border-b-2 border-lime-300">
                    CH
                </li>
                <li className="p-1 cursor-pointer text-secondary-100">
                    About
                </li>
                <li className="p-1 cursor-pointer text-secondary-100">
                    Projects
                </li>
                <li className="p-1 cursor-pointer text-secondary-100">
                    Contact
                </li>
            </ul>
            <ul className='flex flex-row items-center'>
                <li className="p-1">
                    <Link href="https://github.com/chrisholtt" target="_blank">
                        <GitHubIcon />
                    </Link>

                </li>
                <li className="p-1">
                    <Link href="https://www.linkedin.com/in/chrisphilholt/" target="_blank">
                        <LinkedInIcon />
                    </Link>

                </li>
                <li className="p-1">
                    <Link href="https://github.com/chrisholtt" target="_blank">
                        <EmailIcon />
                    </Link>
                </li>
            </ul>
        </nav>
    )
}