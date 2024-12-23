// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBwKgg-t4WULJavonzNh6PbhirWVa3bg90",
  authDomain: "cineflix-gpt-444500.firebaseapp.com",
  projectId: "cineflix-gpt-444500",
  storageBucket: "cineflix-gpt-444500.firebasestorage.app",
  messagingSenderId: "907867069636",
  appId: "1:907867069636:web:f2a6dde78b630580623d91",
  measurementId: "G-ZRGF30NZK6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();