"use client"
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Link from 'next/link';
import { Tooltip } from '@mui/material';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import app from "../../../Firestore";

const handleSignIn = () => {
    const auth = getAuth();
    const app1 = app;
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential?.accessToken;
            // The signed-in user info.
            const user = result.user;
            // IdP data available using getAdditionalUserInfo(result)
            // ...
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
        });
}

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
                <li>
                    <button onClick={handleSignIn}>
                        sign in
                    </button>
                </li>
            </ul>
        </nav>
    )
}