import { NextResponse } from 'next/server';
import { initializeApp } from "firebase/app";
import { collection, getDocs, getFirestore, Firestore } from "firebase/firestore";
import { createContext, useContext } from 'react';
import { RatingReq } from '../../types/types'

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
const db: Firestore = getFirestore(app);

export async function GET(req: Request, res: Response) {

    try {
        const snapshot = await getDocs(collection(db, "Ratings"));
        const data: RatingReq[] = snapshot.docs.map((doc) => doc.data() as RatingReq);

        const generateCountMap = () => {
            const mapping: Record<string, number> = {};
            const voters: Record<string, boolean> = {};
            data.forEach(ratingObj => {
                const { projectId, rating, user } = ratingObj
                voters[user] = true;
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
            return [mapping, projectToVotesObj, voters]
        }
        const countMaps = generateCountMap()
        return NextResponse.json(countMaps)

    } catch (err) {
        return NextResponse.json({ message: 'Internal server error' })
    }
}