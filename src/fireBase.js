// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyC8NQhzhP27YQgRYllF-GPzxpIrJb_L4aU",
  authDomain: "my-portfolio-mustafa.firebaseapp.com",
  projectId: "my-portfolio-mustafa",
  storageBucket: "my-portfolio-mustafa.appspot.com",
  messagingSenderId: "707429970568",
  appId: "1:707429970568:web:7370a90af2a5702500e53d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db=getFirestore();