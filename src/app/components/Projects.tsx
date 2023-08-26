import { headingStyle, projects } from "@/utils/utils"

const ProjectComponents = () => {
    return projects.map((project) => {
        return (
            <h1>{project.title}</h1>
        )
    })
}

export default function Projects() {
    return (
        <section className="relative h-screen w-screen flex flex-col items-center justify-center">
            <h1>WORK</h1>
            <h1 className={headingStyle}>Projects I&apos;ve made</h1>
            <div className="w-3/4 h-1/2 bg-zinc-50 border rounded-md border-zinc-200 dark:bg-stone-900 dark:border-zinc-700">
                <ProjectComponents />
            </div>
        </section >
    )
}
