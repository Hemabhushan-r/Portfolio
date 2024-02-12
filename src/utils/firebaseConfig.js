// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCU-VMuyd7XwLQY_0499D8Sk22_fMcxVxg",
  authDomain: "portfoliowebsite-fde63.firebaseapp.com",
  projectId: "portfoliowebsite-fde63",
  storageBucket: "portfoliowebsite-fde63.appspot.com",
  messagingSenderId: "667837319284",
  appId: "1:667837319284:web:61c6836bf56c0f42a82921",
  measurementId: "G-20FWXNTXWV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getDatabase(app);
