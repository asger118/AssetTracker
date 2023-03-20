import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCznq2gtgw5bgxLl9F9bpY4YlENYSJJZOg",
  authDomain: "assettracker-c6157.firebaseapp.com",
  projectId: "assettracker-c6157",
  storageBucket: "assettracker-c6157.appspot.com",
  messagingSenderId: "65944738864",
  appId: "1:65944738864:web:852df6e2f4f2cc1391e1f5",
  measurementId: "G-4DVVG0ZLZ2"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const db = getFirestore(app);