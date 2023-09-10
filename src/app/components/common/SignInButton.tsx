"use client"
import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import Image from 'next/image';

const SignInButton = () => {
    const { data: session } = useSession();


    if (session && session.user) {
        return (
            <>
                <button onClick={() => signOut()}>sign out</button>
                <h1>{session?.user?.email}</h1>
                <Image src={session?.user?.image} width={100} height={100} className="rounded-full" />
            </>
        )
    }

    return (
        <button onClick={() => signIn()}>sign in</button>
    )
}

export default SignInButton