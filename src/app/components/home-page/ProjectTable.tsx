"use client"
import Link from "next/link";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Tooltip } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';


export default function ProjectsTable({ projects }: any) {
    return (
        <TableContainer component={Paper} className="dark:bg-black bg-zinc-50">
            <Table>
                <TableBody>
                    {!!projects && projects.map((proj: any, i: number) => (
                        <TableRow
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
                                        <Button variant="text" className=" text-black dark:text-white dark:hover:bg-stone-800 hover:bg-white cursor-pointer">{proj.title}</Button>
                                    </Tooltip>
                                </Link>
                            </TableCell>
                            <TableCell align="right" className="dark:text-zinc-200 text-black">
                                <Tooltip title="Language">
                                    <Chip label={proj.lang} component="a" className="bg-white dark:bg-stone-800 text-black dark:text-white cursor-default" />
                                </Tooltip>
                            </TableCell>
                            <TableCell align="right">
                                <div className="hidden sm:block dark:hidden dark:sm:block dark:text-zinc-200 text-black">
                                    {proj.description}
                                </div>
                            </TableCell>                            <TableCell align="right" className="">
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

