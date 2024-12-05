// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: "helpstudent-250e9.firebaseapp.com",
    databaseURL: "https://helpstudent-250e9-default-rtdb.firebaseio.com",
    projectId: "helpstudent-250e9",
    storageBucket: "helpstudent-250e9.appspot.com",
    messagingSenderId: "327723862976",
    appId: "1:327723862976:web:5d387c3c8af7849de49625",
    measurementId: "G-VJ107DGTWR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);