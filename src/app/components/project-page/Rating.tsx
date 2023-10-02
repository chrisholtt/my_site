"use client"
import React, { useEffect, useState } from 'react';
import { Tooltip } from '@mui/material';
import Rating from '@mui/material/Rating';
import { useSession, signIn, signOut } from "next-auth/react"
import Link from 'next/link';


interface RatingReq {
    rating: number;
    projectId: string;
}

export default function RatingComponent({ rating, projectId, numberOfVotes }: any) {
    const { data: session } = useSession();

    async function createRating(score: number) {
        const ratingReq: RatingReq = {
            rating: score,
            projectId: projectId,
        }
        try {
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


    if (session && session.user) {
        return (
            <>
                <Tooltip className="cursor-pointer" title={session && session.user ? "Leave a rating" : "Sign in to leave a rating"}>
                    <div className='flex flex-row'>
                        <Rating name="half-rating" value={(rating / numberOfVotes) ?? 0} precision={0.5} onChange={(e, i) => createRating(i ?? 3)} disabled={(!session)} />
                    </div>
                </Tooltip>
                <h1>{`(${numberOfVotes ?? 0}) votes`}</h1>
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
                <h1>{`(${numberOfVotes ?? 0}) votes`}</h1>
            </>
        )
    }

}
