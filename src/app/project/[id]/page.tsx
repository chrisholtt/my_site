import React from 'react'
import Link from 'next/link';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import LaunchIcon from '@mui/icons-material/Launch';
import BrowserWindow from '@/app/components/project-page/BrowserWindow';
import Detail from '@/app/components/project-page/Detail';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Rating from "../../components/project-page/Rating"
import ProjectSidebar from "../../components/project-page/ProjectSidebar"
import Nav from '../../components/common/Nav'
import Footer from '../../components/common/Footer'

async function getRatings(id: number) {
    const urlPrefix = process.env.NEXT_PUBLIC_LOCALHOST_URL
    const res = await fetch(urlPrefix + "/api/getRatings");
    const req = await res.json();
    return req;
}

async function getProject(id: number) {
    const urlPrefix = process.env.NEXT_PUBLIC_LOCALHOST_URL
    const res = await fetch(urlPrefix + `/api/getProject?id=${id}`);
    const req = await res.json();
    return req;
}

async function getProjects() {
    const urlPrefix = process.env.NEXT_PUBLIC_LOCALHOST_URL
    try {
        const res = await fetch(urlPrefix + `/api/firebase`);
        const data = await res.json();
        return data;
    } catch (e) {
        console.log(e)
    }
}

export default async function Page({ params }: any) {
    const { id } = params;
    const projectData = await getProject(id);
    const ratingData = await getRatings(id);
    const projects = await getProjects();
    const [ratingsMap, numberOfVotesMap] = ratingData;



    const Technologies = () => {
        const projectsArr: String[] = projectData.technologies;
        return (
            <div className="flex flex-row justify-around items-center">
                {!!projectsArr.length && projectsArr.map((technology, i) => (

                    <div className="w-auto py-2 px-4 mx-2 rounded-sm shadow-sm border light:border-zinc-200 dark:border-zinc-800 dark:shadow-zinc-900 h-min dark:bg-stone-950 bg-white" key={i}>
                        <h1 className="dark:text-zinc-200">{technology}</h1>
                    </div>
                ))}
            </div>
        );
    };

    return (
        <section className="h-screen" >
            <Nav />
            <div className='relative flex flex-row justify-start items-center h-1/4 bg-white border-zinc-200 dark:bg-black dark:border-zinc-800'>
                <Link href="/"><ArrowBackIcon /></Link>
                <h1 className='text-4xl px-4'>Project</h1>
            </div>

            <div className="relative h-3/4 flex flex-col items-center justify-center text-center bg-zinc-50 border-t border-b border-zinc-200 dark:bg-stone-950 dark:border-zinc-800">

                <div className="absolute -top-14 flex flex-row gap-3">
                    <div className='w-[300px] h-[600px] border border-zinc-200 dark:border-stone-800 overflow-scroll rounded-lg shadow-md bg-green-300' style={{ direction: 'rtl' }}>
                        <div className="sticky top-0 h-14 px-4 bg-white dark:bg-black border-b border-zinc-200 flex flex-col items-end justify-center" >
                            <h1 className='text-2xl'>Projects</h1>
                        </div>
                        <ProjectSidebar projects={projects} />
                    </div>

                    <div className='w-[800px] h-[600px] rounded-lg overflow-hidden bg-yellow-300 shadow-md border dark:border-stone-800'>
                        <div className="w-full h-auto flex flex-col items-center justify-center bg-white dark:bg-black space-y-4">
                            <h1 className='text-2xl'>{projectData.title}</h1>
                            <BrowserWindow displayLink={projectData.displayLink} />
                            <h1 className="text-md dark:text-zinc-200">{projectData.description}</h1>
                        </div>
                        <div className="w-full flex flex-col items-center justify-around border-t dark:border-zinc-800 border-zinc-200 bg-zinc-50 dark:bg-stone-950">
                            <div className='w-full px-10 flex flex-row justify-between items-start'>
                                <div className='text-start'>
                                    <h1 className='text-xl'>Details</h1>
                                    <h1 className='text-md dark:text-zinc-200'>Check out the GitHub repo <span className="underline"><Link href={projectData.link} target="_blank">here{<LaunchIcon className='text-xs' />}</Link></span></h1>
                                </div>
                                <Technologies />
                            </div>
                            <div className='grid grid-cols-3 gap-x-3'>
                                <Detail element={<h1 className="dark:text-zinc-200">{projectData.description}</h1>} delay={100} />
                                <Detail element={projectData.description} delay={200} />
                                <Detail element={<Rating rating={ratingsMap[id]} numberOfVotes={numberOfVotesMap[id]} projectId={id} />} delay={300} />
                            </div>
                        </div>
                    </div>


                </div>




            </div >
            <Footer />
        </section>
    )
}

