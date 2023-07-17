import { NextResponse } from "next/server";

// export default function handler(req: any, res: any) {
//     // API logic goes here
//     res.status(200).json({ message: 'Hello from the API' });
// }

export async function GET() {

    return NextResponse.json({ "message": "hey" })
}