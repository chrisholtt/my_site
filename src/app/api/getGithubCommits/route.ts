import { NextResponse, NextRequest } from 'next/server';

export async function GET(req: NextRequest, res: NextResponse) {
    const { url } = req
    const urlTemp = new URL(url);
    const repo = urlTemp.searchParams.get("repo");
    console.log("hey from server");
    console.log(repo);

    const resCommit = await fetch(`https://api.github.com/repos/chrisholtt/${repo}/commits`);
    const resData = await resCommit.json();
    console.log(resData)
    const numberOfCommits = resData.length;
    try {
        return NextResponse.json(numberOfCommits);
    } catch (err) {
        return NextResponse.json({ message: 'Internal server error' })
    }
}