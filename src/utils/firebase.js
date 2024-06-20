// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth'; // Add this import statement for getAuth
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDPb4Ug6eLBbU02N_K44nVeJYOOdHVb-EA",
  authDomain: "netflixauth-8dfe4.firebaseapp.com",
  projectId: "netflixauth-8dfe4",
  storageBucket: "netflixauth-8dfe4.appspot.com",
  messagingSenderId: "331877849589",
  appId: "1:331877849589:web:cf0c3cdfff11991a12e8bc",
  measurementId: "G-RRS1V9VR9Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(); // Call getAuth to get the Auth service instance

