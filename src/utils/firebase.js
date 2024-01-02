// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB1u1_SgjAGPNEJUJJEeVcwOI-lEYhizxw",
  authDomain: "netflix-gpt-7ed88.firebaseapp.com",
  projectId: "netflix-gpt-7ed88",
  storageBucket: "netflix-gpt-7ed88.appspot.com",
  messagingSenderId: "176558278279",
  appId: "1:176558278279:web:7a90b5164a746cea229a22",
  measurementId: "G-P7GD8R05DM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();