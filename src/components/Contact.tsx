"use client"
import { motion } from "framer-motion";
import React, { useEffect, useState } from 'react'
import { skills, headingStyle, subHeadingStyle } from "@/utils/utils";
import Tooltip from '@mui/material/Tooltip';
import Image from "next/image";
import { Container } from "@mui/material";



export default function Contact() {

    return (
        <section className="relative h-screen w-screen flex flex-col items-center justify-center bg-zinc-50 border-t border-b border-zinc-200 dark:bg-stone-950 dark:border-zinc-800" style={{ height: '75vh' }}>
            <Container style={{ textAlign: 'center' }}>
                <div className="flex flex-col justify-between items-center space-y-6">
                    <h1>CONTACT</h1>
                    <h1 className={headingStyle}>Get in touch</h1>
                    <h1 className={subHeadingStyle}>Need Assistance on a Project? Interested in Tech Talk? Feel free to complete the form below, and I&apos;ll be in touch shortly.</h1>
                </div>
                <div className="w-full h-60 bg-white border rounded-md border-zinc-200 dark:bg-black dark:border-zinc-800 overflow-hidden shadow-md dark:shadow-zinc-950">
                </div>
            </Container>
        </section >
    )
}