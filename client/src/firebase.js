// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-2ddf7.firebaseapp.com",
  projectId: "mern-estate-2ddf7",
  storageBucket: "mern-estate-2ddf7.appspot.com",
  messagingSenderId: "44897238236",
  appId: "1:44897238236:web:919ee3d2940195dc6b0819"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);