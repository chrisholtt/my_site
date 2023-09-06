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
        const snapshot = await getDocs(collection(db, "Projects"));
        const data = snapshot.docs.map((doc) => doc.data());
        // Get list of doc ID's
        const iDs: String[] = [];
        snapshot.forEach(doc => iDs.push(doc.id))
        const docsWithIds = data.map((doc, i) => ({ ...doc, id: iDs[i] }));
        return NextResponse.json(docsWithIds)

    } catch (err) {
        return NextResponse.json({ message: 'Internal server error' })
    }
}