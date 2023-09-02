import React from 'react';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import { useSpring, animated } from 'react-spring';
import { Tooltip } from '@mui/material';

export default function Rating({ rating }: any) {
    const FadeInProps = (delay: number) => {
        return useSpring({
            from: {
                transform: 'translateY(-20px) rotate(0deg)',
                opacity: 0,
            },
            to: {
                transform: 'translateY(0px) rotate(0deg)',
                opacity: 1,
            },
            config: { tension: 28, friction: 12 },
            delay: delay,
        });
    };

    const stars = [];
    const initialDelay = 300;


    for (let i = 0; i < 5; i++) {
        console.log(i);
        if (i < rating) {
            stars.push(<animated.div style={FadeInProps(initialDelay + (i * 50))}><StarIcon key={i} /></animated.div>);
        } else if (i === Math.ceil(rating) - 1 && rating % 1 !== 0) {
            stars.push(<animated.div style={FadeInProps(initialDelay + (i * 50))}><StarHalfIcon key={i} /></animated.div>);
        } else {
            stars.push(<animated.div style={FadeInProps(initialDelay + (i * 50))}><StarBorderIcon key={i} /></animated.div>);
        }
    }

    return (
        <>
            <Tooltip className="cursor-pointer" title={"Leave a rating"}>
                <div className='flex flex-row'>
                    {stars}
                </div>
            </Tooltip>
            <h1>110 votes</h1>

        </>
    )
}
