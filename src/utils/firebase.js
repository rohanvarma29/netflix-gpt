// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCnDtrpy30cns153eSGy6DhCf5ndUWFb94",
  authDomain: "netflixgpt-7ef4b.firebaseapp.com",
  projectId: "netflixgpt-7ef4b",
  storageBucket: "netflixgpt-7ef4b.appspot.com",
  messagingSenderId: "574859250644",
  appId: "1:574859250644:web:a3111b81f0684ce423e441",
  measurementId: "G-M7W88MTQHY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();