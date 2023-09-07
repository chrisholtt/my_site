"use client"
import Link from "next/link";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Tooltip } from '@mui/material';
import { useSpring, animated } from 'react-spring';


const FadeInProps = (i: number) => {
    return useSpring({
        from: {
            transform: `translateY(0px) rotate(0deg)`,
            opacity: 0,
        },
        to: {
            transform: 'translateY(0px) rotate(0deg)',
            opacity: 1,
        },
        config: { tension: 62, friction: 16 },
        delay: 75 * i,
    });
};

export default function ProjectsSidebar({ projects }: any) {
    return (
        <TableContainer component={Paper} className="dark:bg-black bg-white">
            <Table>
                <TableBody>
                    {!!projects && projects.map((proj: any, i: number) => (
                        <TableRow
                            // key={proj.title}
                            sx={{
                                '&:last-child td, &:last-child th': { border: 0 }
                            }}
                            key={i}
                        >
                            <TableCell component="th" scope="row">
                                <Link href={{
                                    pathname: '/project/' + proj.id,
                                }}
                                >
                                    <Tooltip title="View project">
                                        <animated.h1 style={FadeInProps(i)} className="dark:text-white text-black">{proj.title}</animated.h1 >
                                    </Tooltip>
                                </Link>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer >
    );
}