import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDGZGVRSs6y641HbREoabLpBXrogeMeu-g",
  authDomain: "homework-2-87d12.firebaseapp.com",
  projectId: "homework-2-87d12",
  storageBucket: "homework-2-87d12.appspot.com",
  messagingSenderId: "675536512564",
  appId: "1:675536512564:web:89c21ec289d231df524c61"
};

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);