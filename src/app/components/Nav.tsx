import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import Link from 'next/link';


export default function Nav() {
    return (
        <nav className="absolute flex justify-between align-middle z-10 bg-white w-screen h-auto">
            <ul className="flex flex-row">
                <li className="p-1 font-roboto text-primary text-3xl align-middle justify-center">
                    CH
                </li>
                <li className="p-1 text-secondary-100">
                    About
                </li>
                <li className="p-1 text-secondary-100">
                    Projects
                </li>
                <li className="p-1 text-secondary-100">
                    Contact
                </li>
            </ul>
            <ul className='flex flex-row'>
                <li>
                    <Link href="/page-n">
                        <GitHubIcon />
                    </Link>

                </li>
                <li>
                    <LinkedInIcon />
                </li>
                <li>
                    <EmailIcon />
                </li>
            </ul>
        </nav>
    )
}