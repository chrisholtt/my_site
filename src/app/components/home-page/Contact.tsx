"use client"
import React, { useEffect, useState } from 'react'
import { headingStyle, subHeadingStyle } from "@/utils/utils";
import { Container, Tooltip } from "@mui/material";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';


export default function Contact() {
    const myEmailAddress = "chrisphilholt@gmail.com";
    const [copied, setCopied] = useState(false);

    const handleEmail = () => {
        console.log("fired")
        setCopied(true)
        navigator.clipboard.writeText(myEmailAddress)
    }



    return (
        <section className="relative h-screen w-screen flex flex-col items-center justify-center bg-zinc-50 border-t border-b border-zinc-200 dark:bg-stone-950 dark:border-zinc-800" style={{ height: '75vh' }}>
            <Container>
                <div className="flex flex-col justify-between items-center space-y-6">
                    <h1>CONTACT</h1>
                    <h1 className={headingStyle}>Get in touch</h1>
                    <h1 className={subHeadingStyle}>If you have any enquiries or collaboration opportunities, submit the form below and I&apos;ll get back to you soon. Or you can email me <Tooltip title={copied ? "✔️ Copied" : "Copy email"} onClick={handleEmail} onMouseLeave={() => setTimeout(() => setCopied(false), 300)}><span className='underline cursor-pointer'>here</span></Tooltip></h1>
                    <Box className=" grid grid-cols-2 gap-4 p-4 w-auto h-auto bg-white border rounded-md border-zinc-200 dark:bg-black dark:border-zinc-800 shadow-md dark:shadow-zinc-950">
                        <TextField id="outlined-basic" label="Name" variant="outlined" />
                        <TextField id="outlined-basic" label="E-mail" variant="outlined" />
                        <TextField className="col-span-2" fullWidth id="outlined-basic" label="Subject" variant="outlined" />
                        <TextField className="col-span-2" fullWidth multiline id="outlined-basic" label="Message" variant="outlined" />
                        <Button className="col-span-2" variant="contained" endIcon={<SendIcon />}>Send</Button>
                    </Box>
                </div>
            </Container>
        </section >
    )
}


