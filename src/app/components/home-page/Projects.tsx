import { headingStyle, subHeadingStyle } from "@/utils/utils"
import { Container } from "@mui/material";
import ProjectsTable from "./ProjectTable"


async function getProjects() {
    const urlPrefix = process.env.NEXT_PUBLIC_LOCALHOST_URL
    const req = await fetch(urlPrefix + `/api/firebase`);
    const res = await req.json();
    return res;
}


export default async function Projects() {
    const projects = await getProjects();

    return (
        <section className="relative h-screen w-screen flex flex-col items-center justify-center">
            <Container style={{ textAlign: 'center' }}>
                <div className="flex flex-col justify-between items-center space-y-6">
                    <h1>WORK</h1>
                    <h1 className={headingStyle}>Projects I&apos;ve made</h1>
                    <h1 className={subHeadingStyle}>A list of some of my favourite works using various technologies. Click into one and have a look on how it was made or clone it from GitHub.</h1>
                    <div className="p-10 bg-zinc-50 border-t border-b w-full rounded-md border-zinc-200 dark:bg-stone-950 dark:border-zinc-800 overflow-hidden" >
                        <ProjectsTable projects={projects} />
                    </div>
                </div>

            </Container>
        </section >
    )
}
