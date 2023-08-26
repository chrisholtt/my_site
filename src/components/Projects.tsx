import { headingStyle, projects, subHeadingStyle } from "@/utils/utils"
import { Tooltip } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import Link from "next/link";

const ProjectComponents = () => {
    return projects.map((project) => {
        return (
            <div key={project.title} className="h-14 flex flex-row justify-between items-center border-b border-zinc-200 dark:border-zinc-700 px-4">
                <Link href={'/project/' + project.id}>
                    <Tooltip title="View project">
                        <h1>{project.title}</h1>
                    </Tooltip>
                </Link>
                <h1>{project.lang}</h1>
                <h1>{project.description}</h1>
                <Link href={project.link} target={'_blank'}>
                    <Tooltip title="View repo">
                        <GitHubIcon />
                    </Tooltip>
                </Link>
            </div>
        )
    })
}

export default function Projects() {
    return (
        <section className="relative h-screen w-screen flex flex-col items-center justify-center">
            <h1>WORK</h1>
            <h1 className={headingStyle}>Projects I&apos;ve made</h1>
            <h1 className={subHeadingStyle}>A list of some of my favourite works using various technologies. Click into one and have a look on how it was made or clone it from GitHub.</h1>
            <div className="w-3/4 h-1/2 bg-zinc-50 border rounded-md border-zinc-200 dark:bg-stone-900 dark:border-zinc-700 overflow-hidden shadow-lg">
                <ProjectComponents />
            </div>
        </section >
    )
}
