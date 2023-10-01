import { NextResponse, NextRequest } from 'next/server';

export async function GET(req: NextRequest, res: NextResponse) {
    const { url } = req
    const urlTemp = new URL(url);
    const id = urlTemp.searchParams.get("id");
    console.log("hey from server");
    console.log(id);

    const resCommit = await fetch('https://api.github.com/repos/chrisholtt/toastyswap/commits');
    const resData = await resCommit.json();
    const numberOfCommits = resData.length;
    try {
        return NextResponse.json(numberOfCommits);
    } catch (err) {
        return NextResponse.json({ message: 'Internal server error' })
    }
}