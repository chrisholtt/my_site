"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { Tooltip } from "@mui/material";

export default function ThemeSwitcher() {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();


    useEffect(() => {
        setMounted(true);
    }, []);


    if (!mounted) {
        return null;
    }



    return (
        <div className="relative w-[65px] h-[30px] flex flex-row items-center justify-center dark:bg-gradient-to-b dark:from-zinc-900 dark:to-zinc-950 dark:border dark:border-zinc-700 bg-gradient-to-b from-zinc-100 to-zinc-200 border border-zinc-200 p-1 space-x-2 rounded-full">
            <button onClick={() => setTheme("dark")} className="">
                <Tooltip title={'Dark Mode'}>
                    <DarkModeIcon className="dark:shadow-sm dark:shadow-zinc-200 dark:h-full dark:rounded-full" />
                </Tooltip>
            </button>
            <button onClick={() => setTheme("light")} className="">
                <Tooltip title={'Light Mode'}>
                    <LightModeIcon />
                </Tooltip>
            </button>
        </div>

    );
};