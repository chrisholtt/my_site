import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";
import { createContext, useContext } from 'react';


const firebaseConfig = {
    apiKey: "AIzaSyCKO0W5gzyxVhst4GSoHEchbUMeASSPx-E",
    authDomain: "portfolio-2bb4a.firebaseapp.com",
    projectId: "portfolio-2bb4a",
    storageBucket: "portfolio-2bb4a.appspot.com",
    messagingSenderId: "109746109965",
    appId: "1:109746109965:web:5b6bd3a8be2bfa697ddf44",
    measurementId: "G-NPRX2MT446"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);



export const querySnapshot = async () => {
    const snapshot = await getDocs(collection(db, "Projects"));
    snapshot.docs.forEach((doc) => {
        console.log(doc.data())
    })
}

querySnapshot();
