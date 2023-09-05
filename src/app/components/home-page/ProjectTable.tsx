"use client"
import Link from "next/link";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { headingStyle, subHeadingStyle } from "@/utils/utils"
import { Tooltip } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';


export default function ProjectsTable({ projects }: any) {
    return (
        <TableContainer component={Paper} className="dark:bg-black bg-zinc-50">
            <Table>
                <TableBody>
                    {projects.map((proj: any, i: number) => (
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
                                        <h1 className="dark:text-white text-black">{proj.title}</h1 >
                                    </Tooltip>
                                </Link>
                            </TableCell>
                            <TableCell align="right" className="dark:text-zinc-200 text-black">{proj.lang}</TableCell>
                            <TableCell align="right" className="dark:text-zinc-200 text-black">{proj.description}</TableCell>
                            <TableCell align="right">
                                <Link href={proj.link} target={'_blank'} className="dark:text-zinc-200 text-black">
                                    <Tooltip title="View repo">
                                        <GitHubIcon />
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