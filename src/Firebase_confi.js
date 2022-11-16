// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyANHMy6xGklNs3qew54-Km4-k2e75oq9IY",
  authDomain: "loginform-f4ece.firebaseapp.com",
  projectId: "loginform-f4ece",
  storageBucket: "loginform-f4ece.appspot.com",
  messagingSenderId: "450459245083",
  appId: "1:450459245083:web:486f8f5c6ef537396136be"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);