"use client"
import React, { useEffect, useState } from 'react';
import { Tooltip } from '@mui/material';
import Rating from '@mui/material/Rating';
import { useSession, signIn, signOut } from "next-auth/react"
import Link from 'next/link';
import { RatingReq } from '../../types/types'
import { userAgent } from 'next/server';

export default function RatingComponent({ rating, projectId, numberOfVotes, votersObj }: any) {
    const [isLoading, setIsLoading] = useState(false);

    const { data: session } = useSession();

    async function createRating(score: number) {

        const ratingReq: RatingReq = {
            rating: score,
            projectId: projectId,
            user: session?.user?.email ?? ''
        }
        try {
            setIsLoading(true)
            const res = await fetch("/api/createRating", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(ratingReq),
            });
            if (res.ok) {
                const req = await res.json();
            }
        } catch (error) {
            console.error('An error occurred:', error);
        }
    }

    async function updateRating(score: number) {
        console.log("user has voted")
    }

    // Need to fix voters object and handling of rating updates

    function handleRating(score: number) {
        if (votersObj[session?.user?.email]) {
            updateRating(score)
        } else {
            createRating(score);
        }
    }


    if (session && session.user) {

        return (
            <>
                <Tooltip className="cursor-pointer" title={"Leave a rating"}>
                    <div className='flex flex-row'>
                        <Rating name="half-rating" value={(rating / numberOfVotes) ?? 0} precision={0.5} onChange={(e, i) => handleRating(i ?? 3)} disabled={(!session || isLoading)} />
                    </div>
                </Tooltip>
                <h1 className='dark:text-white'>{`(${numberOfVotes ?? 0}) votes`}</h1>
            </>
        )
    } else {
        return (
            <>
                <Tooltip className="cursor-pointer" title={session && session.user ? "Leave a rating" : "Sign in to leave a rating"}>
                    <div className='flex flex-row'>
                        <Link href="/api/auth/signin">
                            <Rating name="half-rating" value={(rating / numberOfVotes) ?? 0} precision={0.5} onClick={() => signIn()} disabled={true} />
                        </Link>
                    </div>
                </Tooltip>
                <h1 className='dark:text-white'>{`(${numberOfVotes ?? 0}) votes`}</h1>
            </>
        )
    }

}
