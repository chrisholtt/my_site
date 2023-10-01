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
import Chip from '@mui/material/Chip';
import { Tooltip } from '@mui/material';
import { getAllCommits } from '../../../utils/octokit'
import GithubCommits from '@/app/components/home-page/GithubCommits';

const urlPrefix = process.env.NEXT_PUBLIC_LOCALHOST_URL

async function getRatings(id: string) {
    const res = await fetch(urlPrefix + "/api/getRatings");
    const req = await res.json();
    return req;
}

async function getProject(id: string) {
    const res = await fetch(urlPrefix + `/api/getProject?id=${id}`);
    const req = await res.json();
    return req;
}

async function getProjects() {
    try {
        const res = await fetch(urlPrefix + `/api/firebase`);
        const data = await res.json();
        return data;
    } catch (e) {
        console.log(e)
    }
}


async function getGitCommits(repo: string) {
    console.log("fired get commits");
    const res = await fetch(urlPrefix + `/api/getGithubCommits?repo=${repo}`);
    const data = await res.json();
    return data;
}




export default async function Page({ params }: any) {
    const { id } = params;
    const projectData = await getProject(id);
    const ratingData = await getRatings(id);
    const projects = await getProjects();
    const commits = await getGitCommits(projectData.repo);
    const [ratingsMap, numberOfVotesMap] = ratingData;



    const Technologies = () => {
        const projectsArr: String[] = projectData.technologies;
        return (
            <div className="flex flex-row justify-around items-center gap-2">
                {!!projectsArr.length && projectsArr.map((technology, i) => (
                    <Tooltip title="Technology used" key={i}>
                        <Chip label={technology} component="a" className="bg-white dark:bg-stone-800 text-black dark:text-white shadow-sm cursor-default" />
                    </Tooltip>
                ))}
            </div>
        );
    };

    return (
        <section className="h-screen">
            <Nav />

            <div className='pl-4 pt-[50px] relative flex flex-row justify-start items-center h-1/6 bg-white border-zinc-200 dark:bg-black dark:border-zinc-800'>
                <Tooltip title="Go back">
                    <Chip icon={<ArrowBackIcon />} className="bg-white" label="Projects" component="a" href="/" clickable />
                </Tooltip>
            </div>

            <div className="relative h-5/6 flex flex-col items-center justify-center text-center bg-zinc-50 border-t border-b border-zinc-200 dark:bg-stone-950 dark:border-zinc-800">
                <div className="-top-14 flex flex-row gap-3">
                    <div className='w-[300px] h-[600px] border border-zinc-200 dark:border-stone-800 overflow-scroll rounded-lg shadow-md bg-white' style={{ direction: 'rtl' }}>
                        <ProjectSidebar projects={projects} />
                    </div>

                    <div className='w-[800px] h-[600px] rounded-lg overflow-hidden bg-yellow-300 shadow-md border dark:border-stone-800'>
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
                            <div className='grid grid-cols-3 gap-x-3'>
                                <Detail element={<h1 className="dark:text-zinc-200">{projectData.description}</h1>} delay={100} />
                                <Detail element={<GithubCommits commits={commits} />} delay={200} />
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

