"use client"
import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"


const SignInButton = () => {
    const { data: session } = useSession();

    if (session && session.user) {
        return (
            <button onClick={() => signOut()}>sign out</button>
        )
    }

    return (
        <button onClick={() => signIn()}>sign in</button>
    )
}

export default SignInButton