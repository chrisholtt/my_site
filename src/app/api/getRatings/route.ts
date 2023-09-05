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

export async function GET(req: Request) {
    try {
        const snapshot = await getDocs(collection(db, "Ratings"));
        const data = snapshot.docs.map((doc) => doc.data());
        // Get list of doc ID's
        const iDs = [];
        snapshot.forEach(doc => iDs.push({ [doc.id]: "hey" }))

        const generateCountMap = () => {
            const ratingsObj = {};
            const projectToVotesObj = {};
            const realRating = {};
            data.forEach(doc => {
                ratingsObj[doc.projectId] = 0
                projectToVotesObj[doc.projectId] = 0
                realRating[doc.projectId] = 0
            });

            data.forEach(doc => {
                const { projectId, rating } = doc
                ratingsObj[projectId] += rating
                projectToVotesObj[projectId] += 1
            })

            const keys = Object.keys(ratingsObj)
            keys.forEach(key => {
                ratingsObj[key] = ratingsObj[key] / projectToVotesObj[key]
            })
            return [ratingsObj, projectToVotesObj]
        }
        const countMap = generateCountMap()
        return NextResponse.json(countMap)

    } catch (err) {
        return NextResponse.json({ message: 'Internal server error' })
    }
}