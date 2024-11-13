// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyCfYsdEgyJe_7bXtxvbBHRKBFvuTQEfwF4",
  authDomain: "the-book-nook-bfa58.firebaseapp.com",
  projectId: "the-book-nook-bfa58",
  storageBucket: "the-book-nook-bfa58.firebasestorage.app",
  messagingSenderId: "660682688855",
  appId: "1:660682688855:web:0b5e3cb73fdf24a52f5612"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)