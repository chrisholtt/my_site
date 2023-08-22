"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

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
        <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
            {theme === "light" ? <DarkModeIcon /> : <LightModeIcon />}
        </button>
    );
};