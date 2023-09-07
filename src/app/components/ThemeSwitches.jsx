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
        <div className="ease-in duration-100 relative w-[65px] h-[30px] flex flex-row items-center justify-center border dark:border-stone-800 p-1 space-x-2 rounded-full ">
            <button className="cursor-pointer rounded-full dark:bg-stone-600" onClick={() => setTheme("dark")} >
                <Tooltip title={'Dark Mode'}>
                    <DarkModeIcon />
                </Tooltip>
            </button>
            <button className="cursor-pointer rounded-full bg-stone-200 dark:bg-stone-950" onClick={() => setTheme("light")}>
                <Tooltip title={'Light Mode'}>
                    <LightModeIcon />
                </Tooltip>
            </button>
        </div>

    );
};