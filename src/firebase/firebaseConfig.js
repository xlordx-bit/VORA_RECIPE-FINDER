// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC4woKhgkGx8roIx1Js16CmkqNxD4IzLaU",
  authDomain: "recipe-project-219b4.firebaseapp.com",
  projectId: "recipe-project-219b4",
  storageBucket: "recipe-project-219b4.appspot.com",
  messagingSenderId: "705027782204",
  appId: "1:705027782204:web:ac996f6f5cf81153343539",
  measurementId: "G-92BH9Z0F3G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Ensure auth is properly initialized before exporting
auth.useDeviceLanguage();

export { auth };