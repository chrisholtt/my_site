import { headingStyle } from "@/utils/utils"

export default function Projects() {
    return (
        <section className="relative h-screen w-screen flex flex-col items-center justify-center">
            <h1>WORK</h1>
            <h1 className={headingStyle}>Projects I've made</h1>
            <div className="w-3/4 h-1/2 bg-black"></div>
        </section >
    )
}
