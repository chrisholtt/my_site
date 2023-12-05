"use client"
import React, { FC } from 'react';
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
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import Button from '@mui/material/Button';
import { Project } from "../../types/types";


export default function ProjectsTable({ projects }: any) {

    interface SpecialLinkProps {
        project: Project;
    }

    const SpecialLink: FC<SpecialLinkProps> = ({ project }) => {
        if (project.hasOwnProperty("link")) {
            return (
                <Link href={project.link} target={'_blank'} className="dark:text-zinc-200 text-black">
                    <Tooltip title="View project">
                        <AutoAwesomeIcon />
                    </Tooltip>
                </Link>
            )
        } else {
            return <></>
        }
    }

    return (
        <TableContainer component={Paper} className="dark:bg-black bg-zinc-50">
            <Table>
                <TableBody>
                    {!!projects && projects.map((proj: Project, i: number) => (
                        <TableRow
                            sx={{
                                '&:last-child td, &:last-child th': { border: 0 },
                                '*': { borderColor: '#5b5b5b' }
                            }}
                            key={i}
                        >
                            <TableCell component="th" scope="row">
                                <Link href={{
                                    pathname: '/project/' + proj.id,
                                }}
                                >
                                    <Tooltip title="View project">
                                        <Button variant="text" className="text-sm text-black dark:text-white dark:hover:bg-stone-800 hover:bg-white cursor-pointer">{proj.title}</Button>
                                    </Tooltip>
                                </Link>
                            </TableCell>
                            <TableCell align="right" className="dark:text-zinc-200 text-black">
                                <Tooltip title="Language">
                                    <Chip label={proj.lang} component="a" className="bg-white dark:bg-stone-900 text-black dark:text-white cursor-default" />
                                </Tooltip>
                            </TableCell>
                            <TableCell align="right">
                                <div className="hidden sm:block dark:hidden dark:sm:block dark:text-zinc-200 text-black">
                                    {proj.description}
                                </div>
                            </TableCell>
                            <TableCell align="right" className="">
                                <SpecialLink project={proj} />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer >
    );
}

