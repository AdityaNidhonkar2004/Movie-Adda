// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB5A2_zne_l3zokt-vPYjJobRwpk5TF2cg",
  authDomain: "movie-adda-ad644.firebaseapp.com",
  projectId: "movie-adda-ad644",
  storageBucket: "movie-adda-ad644.appspot.com",
  messagingSenderId: "153088106332",
  appId: "1:153088106332:web:df270f3785144e5f3cab99",
  measurementId: "G-522K99J0NW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
