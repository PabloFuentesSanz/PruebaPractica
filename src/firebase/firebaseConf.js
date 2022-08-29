// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD3mOEXFgjmfajmGH2Uvy4ehdmFwSLNOj0",
  authDomain: "pruebapractica-f4708.firebaseapp.com",
  projectId: "pruebapractica-f4708",
  storageBucket: "pruebapractica-f4708.appspot.com",
  messagingSenderId: "183472637210",
  appId: "1:183472637210:web:f7e45c4281a56e7cbc98a3",
  measurementId: "G-EZHK149KY5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

//LOGIN AND REGISTER METHODS
//Register with mail
export const registerWithEmail = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

//Login with mail
export const loginWithEmail = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

//Logout
export const logout = () => {
  signOut(auth);
};
