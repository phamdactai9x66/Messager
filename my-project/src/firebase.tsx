// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCMb0GZJ4eKqHZCPiSeu4vIQw460nRyOAw",
    authDomain: "test12-873e4.firebaseapp.com",
    projectId: "test12-873e4",
    storageBucket: "test12-873e4.appspot.com",
    messagingSenderId: "141332525524",
    appId: "1:141332525524:web:98baa52a51251b225ae641"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore()