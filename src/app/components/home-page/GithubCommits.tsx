"use client"
import CommitIcon from '@mui/icons-material/Commit';

interface GithubCommitsProps {
    commits: number;
}

export default function GithubCommits({ commits }: GithubCommitsProps) {
    return (
        <>
            <CommitIcon />
            <span><h1>{commits} commits</h1></span>
        </>
    )
}


