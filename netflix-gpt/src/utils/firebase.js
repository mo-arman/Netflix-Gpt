// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCTkyj8JH5aPr3OeEDTTSqXjqyS01KH3ac",
  authDomain: "netflixgpt-a1e92.firebaseapp.com",
  projectId: "netflixgpt-a1e92",
  storageBucket: "netflixgpt-a1e92.appspot.com",
  messagingSenderId: "126391821829",
  appId: "1:126391821829:web:4691c3cf6b7432844e9e6c",
  measurementId: "G-9KH135D8NS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();