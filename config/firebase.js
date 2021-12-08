import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyAA99piJ4TaHvCQptglxfDaNyZQR7WUOt0",
  authDomain: "soriham-d71eb.firebaseapp.com",
  projectId: "soriham-d71eb",
  storageBucket: "soriham-d71eb.appspot.com",
  messagingSenderId: "10456115863",
  appId: "1:10456115863:web:3f4dd575db6b889f7ad7d2",
  measurementId: "${config.measurementId}"
};

// initialize firebase
initializeApp(firebaseConfig);

export const auth = getAuth();
export const database = getFirestore();

