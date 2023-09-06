import { NextResponse } from 'next/server';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";
import { createContext, useContext } from 'react';

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

type Rating = {
    projectId: string,
    rating: number,
    ratedBy: string
}

export async function GET(req: Request, res: Response) {

    try {
        const snapshot = await getDocs(collection(db, "Ratings"));
        const data: Rating[] = snapshot.docs.map((doc) => doc.data() as Rating);

        const generateCountMap = () => {
            const mapping: Record<string, number> = {};
            data.forEach(ratingObj => {
                const { projectId, rating } = ratingObj
                if (projectId in mapping) {
                    mapping[projectId] += rating
                } else {
                    mapping[projectId] = rating
                }
            })

            const projectToVotesObj: Record<string, number> = {};
            data.forEach(ratingObj => {
                const { projectId } = ratingObj
                if (projectId in projectToVotesObj) {
                    projectToVotesObj[projectId] += 1
                } else {
                    projectToVotesObj[projectId] = 1
                }
            })
            console.log("---------")
            console.log("---------")
            console.log("---------")
            console.log(mapping)
            console.log(projectToVotesObj)
            console.log("---------")
            console.log("---------")
            console.log("---------")
            return [mapping, projectToVotesObj]
        }
        const countMap = generateCountMap()
        return NextResponse.json(countMap)

    } catch (err) {
        return NextResponse.json({ message: 'Internal server error' })
    }
}