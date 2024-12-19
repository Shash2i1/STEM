// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCYbCbM76_hDTaO7PPrmwnGtOvm6m9h6as",
  authDomain: "stem-c67ce.firebaseapp.com",
  projectId: "stem-c67ce",
  storageBucket: "stem-c67ce.firebasestorage.app",
  messagingSenderId: "555968166581",
  appId: "1:555968166581:web:5d8f5dc4076eaaa0eddcfc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth()


export default app;