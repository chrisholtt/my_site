import '../style/globals.css'
import React, { useEffect, useState } from 'react';
import Link from 'next/link';



const getServer = async () => {
    const req = await fetch("/api/handler")
    const res = await req.json();
    console.log(res)
}

export default function Page() {

    useEffect(() => {
        getServer()
    }, [])

    return (
        <div className="flex items-center justify-center">
            <h1 className="text-1 text-primary font-bold bubblegum">hey</h1>
            <Link href='/about'>a</Link>
        </div>

    )
}