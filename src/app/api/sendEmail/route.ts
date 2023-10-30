import { NextResponse } from 'next/server';
import emailjs from '@emailjs/browser'


export async function POST(req: Request, res: Response) {
    const data = await req.json()
    const { name, email, message, subject } = data;
    console.log(name, email, message, subject)
    try {
        const emailData = {
            name: name,
            email: email,
            message: message,
            subject: subject
        }
        emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_ID);
        const resEmail = await emailjs.sendForm(process.env.NEXT_PUBLIC_EMAILJS_SERVICE, emailData, process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE)
            .then((result) => {
                console.log("result text: " + result.text);
            }, (error) => {
                console.log(error.text);
            });
        console.log(resEmail)
        return NextResponse.json(resEmail)

    } catch (err) {
        return NextResponse.json({ message: 'Internal server error' })
    }
}