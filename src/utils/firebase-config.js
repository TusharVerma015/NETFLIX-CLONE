import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'; 
const firebaseConfig = {
  apiKey: "AIzaSyC18ljBTH59oxnCEzCD6C_l9_6ShVJ4TWE",
  authDomain: "react-netflix-clone-9b81d.firebaseapp.com",
  projectId: "react-netflix-clone-9b81d",
  storageBucket: "react-netflix-clone-9b81d.appspot.com",
  messagingSenderId: "110426047628",
  appId: "1:110426047628:web:3d28166786c0c9f31c67a9",
  measurementId: "G-T4Y9MB0RKR"
};
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);