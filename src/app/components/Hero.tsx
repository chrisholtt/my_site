"use client"
import App from "./App"


export default function Hero() {

    return (
        <section className="h-screen w-screen flex items-center justify-center">
            <App />
            <div className="absolute">
                <h1 style={{ lineHeight: 0 }} className="text-8xl mix-blend-multiply">CREATIVE DEVELOPER</h1>
                <h1 style={{ lineHeight: 0 }} className="text-8xl mix-blend-multiply">UI/UX DESIGNER</h1>
                <h1 style={{ lineHeight: 0 }} className="text-8xl mix-blend-multiply">FULL STACK DEVELOPER</h1>
                <h1 style={{ lineHeight: 0 }} className="text-8xl mix-blend-multiply">BACK-END DEVELOPER</h1>
            </div>
        </section >
    )
}