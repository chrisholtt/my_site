"use client"
import React, { useEffect, useState } from 'react'
import { headingStyle, subHeadingStyle } from "@/utils/utils";
import { Container } from "@mui/material";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';

const Inputs = () => {
    return (
        <Box className="flex flex-wrap gap-4 p-4">
            <TextField id="outlined-basic" label="Name" variant="outlined" />
            <TextField id="outlined-basic" label="E-mail" variant="outlined" />
            <TextField fullWidth id="outlined-basic" label="Subject" variant="outlined" />
            <TextField fullWidth multiline id="outlined-basic" label="Message" variant="outlined" />
            <div className="w-full relative">
                <Button className="absolute right-0" variant="contained" endIcon={<SendIcon />}>Send</Button>
            </div>
        </Box>
    );
}

export default function Contact() {
    return (
        <section className="relative h-screen w-screen flex flex-col items-center justify-center bg-zinc-50 border-t border-b border-zinc-200 dark:bg-stone-950 dark:border-zinc-800" style={{ height: '75vh' }}>
            <Container style={{ textAlign: 'center' }}>
                <div className="flex flex-col justify-between items-center space-y-6">
                    <h1>CONTACT</h1>
                    <h1 className={headingStyle}>Get in touch</h1>
                    <h1 className={subHeadingStyle}>If you have any enquires, fill in this form and I&apos;ll be get back to you soon.</h1>
                </div>
                <div className="w-full h-auto bg-white border rounded-md border-zinc-200 dark:bg-black dark:border-zinc-800 shadow-md dark:shadow-zinc-950">
                    <Inputs />
                </div>
            </Container>
        </section >
    )
}