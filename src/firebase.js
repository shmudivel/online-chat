// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBecdX8Bzc-XJHxr4sVw4Ve0kgf-FGgGAE",
  authDomain: "online-chat-app-9ea69.firebaseapp.com",
  projectId: "online-chat-app-9ea69",
  storageBucket: "online-chat-app-9ea69.appspot.com",
  messagingSenderId: "954504202867",
  appId: "1:954504202867:web:75bf2d6dc3135635e63806"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)