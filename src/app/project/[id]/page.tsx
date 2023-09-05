import React from 'react'
import Link from 'next/link';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import LaunchIcon from '@mui/icons-material/Launch';
import BrowserWindow from '@/app/components/project-page/BrowserWindow';
import Detail from '@/app/components/project-page/Detail';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Rating from "../../components/project-page/Rating"

async function getRatings(id: number) {
    const urlPrefix = "http://localhost:3000"
    const res = await fetch(urlPrefix + "/api/getRatings");
    const req = await res.json();
    return req;
}

async function getProject(id: number) {
    const urlPrefix = "http://localhost:3000"
    const res = await fetch(urlPrefix + `/api/getProject?id=${id}`);
    const req = await res.json();
    return req;
}

export default async function Page({ params }: any) {
    const { id } = params;
    const projectData = await getProject(id);
    const ratingData = await getRatings(id);
    const [ratingsMap, numberOfVotesMap] = ratingData;


    const Technologies = () => {
        return (
            <div className="flex flex-row justify-around items-center">
                {projectData?.technologies.map(technology => (
                    <div className="w-min py-2 px-4 mx-2 rounded-sm shadow-sm border light:border-zinc-200 dark:border-zinc-800 dark:shadow-zinc-900 h-min dark:bg-stone-950 bg-white" key={technology}>
                        <h1 className="dark:text-zinc-200">{technology}</h1>
                    </div>
                ))}
            </div>
        );
    };

    return (
        <>
            <section className="h-screen" >
                <div className='relative flex flex-row justify-start items-center  h-1/4 bg-white border-zinc-200 dark:bg-black dark:border-zinc-800'>
                    <Link href="/"><ArrowBackIcon /></Link>
                    <h1 className='text-4xl px-4'>Project</h1>
                </div>
                <div className="relative h-screen flex flex-col items-center justify-center text-center bg-zinc-50 border-t border-b border-zinc-200 dark:bg-stone-950 dark:border-zinc-800">
                    <div className='absolute -top-12 flex flex-col justify-center items-center border rounded dark:bg-gradient-to-b dark:from-black dark:to-stone-950 dark:border-zinc-800 bg-gradient-to-b from-white to-zinc-50 border-zinc-200 shadow-md dark:shadow-black' style={{ width: '80%', height: '80%' }}>
                        <div className="w-full h-1/2 flex flex-col items-center justify-center bg-white dark:bg-black space-y-4">
                            <h1 className='text-2xl'>{projectData.title}</h1>
                            <BrowserWindow displayLink={projectData.displayLink} />
                            <h1 className="text-md dark:text-zinc-200">{projectData.description}</h1>
                        </div>
                        <div className="w-full h-1/2 flex flex-col items-center justify-around border-t dark:border-zinc-800 border-zinc-200 bg-zinc-50 dark:bg-stone-950">
                            <div className='w-full px-10 flex flex-row justify-between items-start'>
                                <div className='text-start'>
                                    <h1 className='text-xl'>Details</h1>
                                    <h1 className='text-md dark:text-zinc-200'>Check out the GitHub repo <span className="underline"><Link href={projectData.link} target="_blank">here{<LaunchIcon className='text-xs' />}</Link></span></h1>
                                </div>
                                <Technologies />
                            </div>
                            <div className='grid grid-cols-3 gap-6'>
                                <Detail element={<h1 className="dark:text-zinc-200">{projectData.description}</h1>} delay={100} />
                                <Detail element={projectData.description} delay={200} />
                                <Detail element={<Rating rating={ratingsMap[id]} numberOfVotes={numberOfVotesMap[id]} projectId={projectData.id} />} delay={300} />
                            </div>
                        </div>
                    </div>
                </div >
            </section>
        </>
    )
}

