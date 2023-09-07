import { NextResponse, NextRequest } from 'next/server';
import { initializeApp } from "firebase/app";
import { getFirestore, Firestore, doc, getDoc, getDocs, collection } from "firebase/firestore";

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

export async function GET(req: NextRequest, res: NextResponse) {
    const { url } = req
    const urlTemp = new URL(url);
    const id = urlTemp.searchParams.get("id");
    try {
        const docRef = doc(db, "Projects", String(id));
        const docSnap = await getDoc(docRef);
        const data = docSnap.data();
        return NextResponse.json(data)
    } catch (err) {
        return NextResponse.json({ message: 'Internal server error' })
    }
}