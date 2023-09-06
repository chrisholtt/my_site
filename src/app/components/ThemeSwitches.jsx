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
        <div className="ease-in duration-100 relative w-[65px] h-[30px] flex flex-row items-center justify-center dark:bg-gradient-to-l dark:from-zinc-800 dark:to-black dark:border dark:border-l-0 dark:border-zinc-800 bg-gradient-to-l from-white to-zinc-200 border-r-0 border-l-2 border-zinc-300 p-1 space-x-2 rounded-full ">
            <button className="cursor-pointer" onClick={() => setTheme("dark")} >
                <Tooltip title={'Dark Mode'}>
                    <DarkModeIcon />
                </Tooltip>
            </button>
            <button className="cursor-pointer" onClick={() => setTheme("light")}>
                <Tooltip title={'Light Mode'}>
                    <LightModeIcon />
                </Tooltip>
            </button>
        </div>

    );
};