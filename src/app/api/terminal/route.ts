import { log } from "console";
import { NextResponse } from "next/server";

export async function GET(req: any, res: any) {
    const { cmdLets } = res.body
    console.log(cmdLets);

    return NextResponse.json({ "message": "hey" })
}