import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "project-chat-app-19b37.firebaseapp.com",
  projectId: "project-chat-app-19b37",
  storageBucket: "project-chat-app-19b37.appspot.com",
  messagingSenderId: "950764959608",
  appId: "1:950764959608:web:24ecb4368d1f90a067ba8d"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();