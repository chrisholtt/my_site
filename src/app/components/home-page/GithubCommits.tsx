"use client"
import CommitIcon from '@mui/icons-material/Commit';
import Link from 'next/link';

interface GithubCommitsProps {
    commits: number;
    repo: string;
}


export default function GithubCommits({ commits, repo }: GithubCommitsProps) {
    const CommitsText = () => {
        return (
            <Link href={`https://github.com/chrisholtt/${repo}/commits`} target="_blank">
                <span><h1 className='hover:underline dark:text-white'>{commits} commits</h1></span>
            </Link>
        )
    }

    const NoRepoText = () => {
        return (
            <h1 className='dark:text-white text-black'>Repo unavailable</h1>
        )
    }
    return (
        <>
            <CommitIcon className='dark:text-white text-black' />

            {repo ? <CommitsText /> : <NoRepoText />}

        </>
    )
}


