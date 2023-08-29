import { headingStyle, projects, subHeadingStyle } from "@/utils/utils"
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

const ProjectsTable = () => {
    const { theme, setTheme } = useTheme();


    return (
        <TableContainer component={Paper} style={{
            backgroundColor: theme === 'light' ? 'white' : 'black',
        }} >
            <Table>
                <TableBody>
                    {projects.map((proj, i) => (
                        <TableRow
                            // key={proj.title}
                            sx={{
                                '&:last-child td, &:last-child th': { border: 0 },
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


export default function Projects() {
    return (
        <section className="relative h-screen w-screen flex flex-col items-center justify-center">
            <Container style={{ textAlign: 'center' }}>
                <div className="flex flex-col justify-between items-center space-y-6">
                    <h1>WORK</h1>
                    <h1 className={headingStyle}>Projects I&apos;ve made</h1>
                    <h1 className={subHeadingStyle}>A list of some of my favourite works using various technologies. Click into one and have a look on how it was made or clone it from GitHub.</h1>
                    <div className="bg-zinc-50 border w-full rounded-md border-zinc-200 dark:bg-stone-900 dark:border-zinc-700 overflow-hidden shadow-lg">
                        <ProjectsTable />
                    </div>
                </div>

            </Container>
        </section >
    )
}
