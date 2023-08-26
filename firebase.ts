// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJNK32boUV7G1zqn1n4s84DvXtPnKD4YE",
  authDomain: "aic-auth.firebaseapp.com",
  projectId: "aic-auth",
  storageBucket: "aic-auth.appspot.com",
  messagingSenderId: "803840414028",
  appId: "1:803840414028:web:b24fe942a45ef482497fe9",
  measurementId: "G-09W2EWEXLS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);  

export const auth = getAuth(app);