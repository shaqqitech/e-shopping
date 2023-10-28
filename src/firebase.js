// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD75mHO4EhV_RQfmJ5qB_Q58XEqc5_Pe-U",
  authDomain: "e-shopping-132d7.firebaseapp.com",
  projectId: "e-shopping-132d7",
  storageBucket: "e-shopping-132d7.appspot.com",
  messagingSenderId: "12304430336",
  appId: "1:12304430336:web:1e5efe04a85162d78b6fe5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)