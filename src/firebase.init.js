// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBBG5SA9Tu3LLOMWspckjhKMH4RGQrPp6U",
  authDomain: "cloth-donation-auth.firebaseapp.com",
  projectId: "cloth-donation-auth",
  storageBucket: "cloth-donation-auth.firebasestorage.app",
  messagingSenderId: "389870309000",
  appId: "1:389870309000:web:0b271d870cedcf006fd93d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
