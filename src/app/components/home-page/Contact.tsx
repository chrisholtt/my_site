"use client"
import React, { useEffect, useState } from 'react'
import { headingStyle, subHeadingStyle } from "@/utils/utils";
import { Container, formControlClasses, Tooltip } from "@mui/material";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useSession, signIn, signOut } from "next-auth/react"
import AutoFixOffIcon from '@mui/icons-material/AutoFixOff';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import emailjs from '@emailjs/browser'

export default function Contact() {
    const myEmailAddress = "chrisphilholt@gmail.com";
    const [copied, setCopied] = useState(false);
    const [formInputs, setFormInputs] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    })

    const handleEmail = () => {
        setCopied(true)
        navigator.clipboard.writeText(myEmailAddress)
    }

    const placeholderStyle = {
        color: '#707070'
    };

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormInputs((prev) => ({
            ...prev,
            [name]: value
        }));
    }

    const sendEmail = async () => {
        // const urlPrefix = process.env.NEXT_PUBLIC_LOCALHOST_URL
        const res = await fetch("/api/sendEmail", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formInputs),
        });
        console.log(res)
        setFormInputs({
            name: "",
            message: "",
            subject: "",
            email: "",
        })
        alert("Thanks for getting in touch, I'll get back to you soon.")

    }




    const SendButton = () => {
        if (!formInputs.email || !formInputs.message || !formInputs.subject || !formInputs.name) {
            return < Button onClick={sendEmail} className="col-span-2 dark:hover:bg-stone-800 hover:bg-zinc-50 dark:text-white text-black" variant="contained" endIcon={< AutoFixHighIcon />}>Complete form</ Button>
        }
        else {
            return <Button onClick={sendEmail} className="col-span-2 dark:hover:bg-stone-800 hover:bg-zinc-50 dark:text-white text-black" variant="contained" endIcon={< AutoFixHighIcon />}> Send</ Button >
        }
    }

    const DullButton = () => {
        return (
            <Button type="submit" onClick={() => signIn()} className="col-span-2 dark:hover:bg-stone-800 hover:bg-zinc-50 dark:text-white text-black" variant="contained" endIcon={<AutoFixOffIcon />}>Sign In</Button>
        )
    }

    const { data: session } = useSession();
    return (
        <section className="relative h-[65vh] w-screen flex flex-col items-center justify-center bg-zinc-50 border-t border-b border-zinc-200 dark:bg-stone-950 dark:border-zinc-800">
            <Container>
                <div className="flex flex-col justify-between items-center space-y-6">
                    <h1>CONTACT</h1>
                    <h1 className={headingStyle}>Get in touch</h1>
                    <h1 className={subHeadingStyle}>If you have any enquiries or collaboration opportunities, submit the form below and I&apos;ll get back to you soon. Or you can email me <Tooltip title={copied ? "✔️ E-mail copied" : "Copy email"} onClick={handleEmail} onMouseLeave={() => setTimeout(() => setCopied(false), 300)}><span className='underline cursor-pointer'>here</span></Tooltip></h1>

                    <form>
                        <Box className="grid grid-cols-2 gap-4 p-4 w-full h-auto bg-white border rounded-md border-zinc-200 dark:bg-black dark:border-zinc-800 shadow-md dark:shadow-zinc-950">
                            <TextField disabled={!session} required key={"name"} onChange={(e) => handleChange(e)} value={formInputs.name} className="dark:bg-stone-950" id="outlined-basic" name="name" label="Name" InputProps={{ placeholder: "", style: placeholderStyle }} InputLabelProps={{ style: placeholderStyle }} variant="outlined" />
                            <TextField disabled={!session} required key={"email"} onChange={(e) => handleChange(e)} value={formInputs.email} className='dark:bg-stone-950' id="outlined-basic" label="E-mail" name="email" variant="outlined" InputProps={{ placeholder: "", style: placeholderStyle }} InputLabelProps={{ style: placeholderStyle }} />
                            <TextField disabled={!session} required key={"subject"} onChange={(e) => handleChange(e)} value={formInputs.subject} className="col-span-2 dark:bg-stone-950" fullWidth id="outlined-basic" label="Subject" name="subject" variant="outlined" InputProps={{ placeholder: "", style: placeholderStyle }} InputLabelProps={{ style: placeholderStyle }} />
                            <TextField disabled={!session} required key={"message"} onChange={(e) => handleChange(e)} value={formInputs.message} className="col-span-2 dark:bg-stone-950" fullWidth multiline id="outlined-basic" name="message" label="Message" variant="outlined" InputProps={{ placeholder: "", style: placeholderStyle }} InputLabelProps={{ style: placeholderStyle }} />
                            {
                                session && session.user ? <SendButton /> : <DullButton />
                            }
                        </Box>
                    </form>
                </div>
            </Container>
        </section >
    )
}