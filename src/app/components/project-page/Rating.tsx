"use client"
import React, { useEffect, useState } from 'react';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import { useSpring, animated } from 'react-spring';
import { Tooltip } from '@mui/material';

interface RatingReq {
    rating: number;
    projectId: string;
}

export default function Rating({ rating, projectId, numberOfVotes }: any) {

    const FadeInProps = (delay: number, i: number) => {
        return useSpring({
            from: {
                transform: `translateY(-14px) rotate(0deg)`,
                opacity: 0,
            },
            to: {
                transform: 'translateY(0px) rotate(0deg)',
                opacity: 1,
            },
            config: { tension: 62, friction: 16 },
            delay: delay,
        });
    };


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
            } else {
                console.error('Failed to fetch data from the API');
            }
        } catch (error) {
            console.error('An error occurred:', error);
        }
    }



    const Stars = () => {
        const initialDelay = 300;
        const stars = [];
        for (let i = 0; i < 5; i++) {
            if (i < rating) {
                stars.push(<animated.div style={FadeInProps(initialDelay + (i * 75), i)}><StarIcon key={i} onClick={() => createRating(i + 1)} /></animated.div>);
            } else if (i === Math.ceil(rating) - 1 && rating % 1 !== 0) {
                stars.push(<animated.div style={FadeInProps(initialDelay + (i * 75), i)}><StarHalfIcon key={i} onClick={() => createRating(i + 1)} /></animated.div>);
            } else {
                stars.push(<animated.div style={FadeInProps(initialDelay + (i * 75), i)}><StarBorderIcon key={i} onClick={() => createRating(i + 1)} /></animated.div>);
            }
        }
        return stars
    }



    return (
        <>
            <Tooltip className="cursor-pointer" title={"Leave a rating"}>
                <div className='flex flex-row'>
                    <Stars />
                </div>
            </Tooltip>
            <h1>{`(${numberOfVotes}) votes`}</h1>

        </>
    )
}
