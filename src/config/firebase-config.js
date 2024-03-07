// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAsNoOO4cFq0qlHqXgTo3yBLEeeEYCO6Ek",
  authDomain: "expense-tracker-bfe50.firebaseapp.com",
  projectId: "expense-tracker-bfe50",
  storageBucket: "expense-tracker-bfe50.appspot.com",
  messagingSenderId: "56951197937",
  appId: "1:56951197937:web:71d31f3dc22a23ac8f1950",
  measurementId: "G-TJX3E0E8W8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

//firebase
//firebase init
//firebase deploy
