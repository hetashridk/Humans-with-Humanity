// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import firebase from 'firebase/compat/app';
import "firebase/storage";
import "firebase/firestore";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZBn9jtkxSM0LBQFuFVmxR9JzTz69La2A",
  authDomain: "humanswithhumanity-b482a.firebaseapp.com",
  projectId: "humanswithhumanity-b482a",
  storageBucket: "humanswithhumanity-b482a.appspot.com",
  messagingSenderId: "517215809081",
  appId: "1:517215809081:web:572084c0cb34faa211a7e8",
  measurementId: "G-PR78YFN614"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

if (!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
  }
  const firestoreNamespace = firebase.firestore;
  export const auth = getAuth(app);
  const db = getFirestore(app);
  export const storage = getStorage(app);
  export { db };
  export {firebase, firestoreNamespace};