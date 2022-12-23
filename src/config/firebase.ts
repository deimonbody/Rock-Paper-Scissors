import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCTm784xoUyYForelcga-P_30C0tyurhcM",
  authDomain: "rock-paper-scissors-c74f9.firebaseapp.com",
  projectId: "rock-paper-scissors-c74f9",
  storageBucket: "rock-paper-scissors-c74f9.appspot.com",
  messagingSenderId: "386384777615",
  appId: "1:386384777615:web:4392ea93e8cd4c3892bbfa",
};

export const fbApp = initializeApp(firebaseConfig);
export const fbAuth = getAuth(fbApp);
export const db = getFirestore(fbApp);
