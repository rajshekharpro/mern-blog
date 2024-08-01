// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-d31ab.firebaseapp.com",
  projectId: "mern-blog-d31ab",
  storageBucket: "mern-blog-d31ab.appspot.com",
  messagingSenderId: "1040105603267",
  appId: "1:1040105603267:web:d13e9dcab7ce48ec96a276"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);