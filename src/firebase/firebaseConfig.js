// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "YOUR API KEY",
  authDomain: "YOUR AUTH DOMAIN",
  projectId: "PROJECT ID ",
  storageBucket: "YOUR RECIPE SOTRAGE",
  messagingSenderId: "SENDER ID",
  appId: "API ID",
  measurementId: "MEASURMENT ID"
};
//YOU CAN GET THIS ALL IN MAKING THE PROJECT IN FIREBASE

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Ensure auth is properly initialized before exporting
auth.useDeviceLanguage();

export { auth };
