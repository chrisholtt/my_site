"use client"
import CommitIcon from '@mui/icons-material/Commit';
import Link from 'next/link';

interface GithubCommitsProps {
    commits: number;
    repo: string;
}

function DarkModeCommitIcon() {
    return <CommitIcon style={{ color: 'white' }} />;
}

function LightModeCommitIcon() {
    return <CommitIcon style={{ color: 'black' }} />;
}

export default function GithubCommits({ commits, repo }: GithubCommitsProps) {
    return (
        <>
            <CommitIcon className='dark:text-white text-black' />
            <Link href={`https://github.com/chrisholtt/${repo}/commits`} target="_blank">
                <span><h1 className='hover:underline dark:text-white'>{commits} commits</h1></span>
            </Link>
        </>
    )
}


