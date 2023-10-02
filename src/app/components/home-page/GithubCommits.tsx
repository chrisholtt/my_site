"use client"
import CommitIcon from '@mui/icons-material/Commit';
import Link from 'next/link';

interface GithubCommitsProps {
    commits: number;
    repo: string;
}

export default function GithubCommits({ commits, repo }: GithubCommitsProps) {
    return (
        <>
            <CommitIcon />
            <Link href={`https://github.com/chrisholtt/${repo}/commits`} target="_blank">
                <span><h1 className='hover:underline'>{commits} commits</h1></span>
            </Link>
        </>
    )
}


