// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCIwuDt5bWYBBRPZf4bvfaC7oLMiJBRoZY",
  authDomain: "infinite-amusements.firebaseapp.com",
  projectId: "infinite-amusements",
  storageBucket: "infinite-amusements.appspot.com",
  messagingSenderId: "456500342608",
  appId: "1:456500342608:web:d42322e5ea6869b61a4655",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export { app };
