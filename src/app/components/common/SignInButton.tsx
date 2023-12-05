"use client"
import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Avatar from '@mui/material/Avatar';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import Image from 'next/image';
import { Button } from '@mui/material';

const SignInButton = () => {
    const { data: session } = useSession();
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };


    const CvDownload = () => {
        return (
            <Button className='dark:border-stone-800 border-zinc-200 text-black dark:text-stone-300 hover:border-zinc-400 dark:hover:border-stone-600' variant="outlined">
                <a href="/misc/ChrisHoltCV.pdf" download="Chris-Holts-CV.pdf" className='flex' target="_blank" rel="noopener noreferrer">
                    <h1>DOWNLOAD CV</h1>
                </a>
            </Button>
        )
    }



    if (session && session.user) {
        return (
            <>
                <div >
                    <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleMenu}
                        color="inherit"
                    >
                        <Avatar alt="User image" src={session?.user.image ?? ''} sx={{ width: 30, height: 30 }} />
                    </IconButton>
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorEl}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <MenuItem >
                            <a href="/misc/ChrisHoltCV.pdf" download="Chris-Holts-CV.pdf" className='flex' target="_blank" rel="noopener noreferrer">
                                <h1>Download CV</h1>
                            </a>
                        </MenuItem>
                        <MenuItem onClick={() => signOut()}>{`Sign Out (${session?.user?.email?.substring(0, 5)}...)`}</MenuItem>
                    </Menu>
                </div>
            </>
        )
    }

    return (
        <div>
            <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
            >
                <Image src='/icons/avatar_blank.svg' width={30} height={30} className="rounded-full" alt="blank_avatar" />
            </IconButton>
            <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={() => signIn()}>Sign in</MenuItem>
            </Menu>
        </div>
    )
}

export default SignInButton