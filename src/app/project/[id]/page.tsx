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
import GithubCommits from '@/app/components/home-page/GithubCommits';
import Image from 'next/image';
import { Project } from "../../types/types";

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
        const res = await fetch(urlPrefix + `/api/getProjects`);
        const data = await res.json();
        return data;
    } catch (e) {
        console.log(e)
    }
}

async function getGitCommits(repo: string) {
    const res = await fetch(urlPrefix + `/api/getGithubCommits?repo=${repo}`);
    const data = await res.json();
    return data;
}

export default async function Page({ params }: any) {
    const { id } = params;
    const projectData: Project = await getProject(id);
    const ratingData = await getRatings(id);
    const projects = await getProjects();
    const repo: string = projectData.repo;
    const commits = repo ? await getGitCommits(repo) : null;
    const [ratingsMap, numberOfVotesMap, votersObj] = ratingData;


    const Technologies = () => {
        const projectsArr: String[] = projectData.technologies;
        return (
            <div className="flex flex-row justify-around items-center gap-2">
                {!!projectsArr?.length && projectsArr.map((technology, i) => (
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

            <div className='mx-4 pt-[50px] relative flex flex-row justify-start items-center h-1/6 bg-white border-zinc-200 dark:bg-black dark:border-zinc-800'>
                <Tooltip title="Go back">
                    <Chip icon={<ArrowBackIcon className="dark:text-white" />} className="dark:text-white dark:bg-stone-900 bg-zinc-50" label="Home" component="a" href="/" clickable />
                </Tooltip>
                <Image src={`/images/star_white.svg`} alt="star" className={`absolute mix-blend-difference star bottom-50 right-0`} width={50} height={50}></Image>
                <Image src={`/images/star_white.svg`} alt="star" className={`absolute mix-blend-difference star_secondary bottom-10 right-7`} width={30} height={30}></Image>

            </div>

            <div className="relative h-5/6 flex flex-col items-center justify-center text-center bg-zinc-50 border-t border-b border-zinc-200 dark:bg-stone-950 dark:border-zinc-800">
                <div className="-top-14 lg:w-3/5 sm:w-4/5 flex xl:flex-row sm:flex-col flex-col gap-3">
                    <ProjectSidebar projects={projects} />

                    <div className='relative w-full h-[600px] rounded-lg  bg-yellow-300 shadow-md border dark:border-stone-800'>
                        <div className="p-4 w-full h-1/2 flex flex-col items-center justify-around bg-white dark:bg-black">
                            <h1 className='text-2xl'>{projectData.title}</h1>
                            <BrowserWindow displayLink={projectData.displayLink} images={projectData.images} />
                        </div>
                        <div className="w-full h-1/2 flex flex-col items-center justify-around border-t dark:border-zinc-800 border-zinc-200 bg-zinc-50 dark:bg-stone-950">
                            <div className='w-full px-10 flex xl:flex-row sm:flex-col justify-between items-start'>
                                <div className='text-start'>
                                    <h1 className='text-xl'>Details</h1>
                                    <h1 className='text-md dark:text-zinc-200'>View on GitHub <span className="underline"><Link href={projectData.GitHubRepoLink} target="_blank">here{<LaunchIcon className='text-xs' />}</Link></span></h1>
                                </div>
                                <Technologies />
                            </div>
                            <div className='grid grid-cols-3 gap-x-3 p-2'>
                                <Detail element={<h1 className="dark:text-zinc-200">{projectData.description}</h1>} delay={100} />
                                <Detail element={<GithubCommits commits={commits} repo={repo} />} delay={200} />
                                <Detail element={<Rating rating={ratingsMap[id]} numberOfVotes={numberOfVotesMap[id]} projectId={id} votersObj={votersObj} />} delay={300} />
                            </div>
                        </div>
                    </div>


                </div>
            </div >
            <Footer />
        </section>
    )
}

