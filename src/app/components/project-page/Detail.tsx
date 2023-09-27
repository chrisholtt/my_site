"use client"
import { useSpring, animated } from 'react-spring';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';


export default function Detail({ element, delay }: any) {
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
            config: { tension: 50, friction: 10 },
            delay: delay,
        });
    };
    return (
        <animated.div style={FadeInProps(delay)}>
            <Card variant="outlined" className="h-40 w-40 bg-white dark:bg-black flex flex-col justify-center items-center">
                <CardContent>
                    {element}
                </CardContent>
            </Card>
        </animated.div>

    )
}