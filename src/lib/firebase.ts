import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyChldIrwZsLAmPJwvdbJd9QxdWCvtZtYPc",
  authDomain: "comboni-summer-camp.firebaseapp.com",
  projectId: "comboni-summer-camp",
  storageBucket: "comboni-summer-camp.firebasestorage.app",
  messagingSenderId: "148360216305",
  appId: "1:148360216305:web:4c5af835c4d8fdfaac3350"
};

// Initialize Firebase (using getApps to prevent double-initialization errors)
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

// Export these so your Astro pages can use them
export const db = getFirestore(app);
export const auth = getAuth(app);