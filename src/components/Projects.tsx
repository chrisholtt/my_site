import { headingStyle, subHeadingStyle } from "@/utils/utils"
import { Tooltip } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import Link from "next/link";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Container } from "@mui/material";
import { useTheme } from "next-themes";




export default function Projects({ projects }: any) {
    console.log(projects)
    const ProjectsTable = () => {
        const { theme, setTheme } = useTheme();
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
                                    <Link href={'/project/' + proj.id} >
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


    return (
        <section className="relative h-screen w-screen flex flex-col items-center justify-center">
            <Container style={{ textAlign: 'center' }}>
                <div className="flex flex-col justify-between items-center space-y-6">
                    <h1>WORK</h1>
                    <h1 className={headingStyle}>Projects I&apos;ve made</h1>
                    <h1 className={subHeadingStyle}>A list of some of my favourite works using various technologies. Click into one and have a look on how it was made or clone it from GitHub.</h1>
                    <div className="p-10 bg-zinc-50 border-t border-b w-full rounded-md border-zinc-200 dark:bg-stone-950 dark:border-zinc-800 overflow-hidden" >
                        <ProjectsTable />
                    </div>
                </div>

            </Container>
        </section >
    )
}
