import { NextResponse, NextRequest } from 'next/server';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, getDocs, doc, setDoc, addDoc, Firestore } from "firebase/firestore";

interface RatingEntry {
    projectId: string;
    ratedBy: string;
    rating: number
}


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


export async function POST(req: Request, res: Response) {
    const data = await req.json()
    const { rating, projectId } = data;
    try {
        if (req.method == "POST") {
            console.log("--POST request received--");
            const newRating: RatingEntry = {
                projectId: projectId,
                ratedBy: "Chris",
                rating: rating
            }
            const docRef = await addDoc(collection(db, "Ratings"), newRating);
            return NextResponse.json(`Document Created: ${docRef.id}`);

        } else if (req.method == "UPDATE") {
            console.log("--UPDATE request received--");
        }
    } catch (e) {
        console.log(e)
        return NextResponse.json("Server Error")
    }




    try {
        const snapshot = await getDocs(collection(db, "Projects"));
        const data = snapshot.docs.map((doc) => doc.data());
        return NextResponse.json(data)

    } catch (err) {
        return NextResponse.json({ message: 'Internal server error' })
    }
}