// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDx6O3e9QQ3Mk1j0RJPRwM3BlOWMT7M7Sw",
  authDomain: "my-kitchen-cb67a.firebaseapp.com",
  projectId: "my-kitchen-cb67a",
  storageBucket: "my-kitchen-cb67a.appspot.com",
  messagingSenderId: "181688386059",
  appId: "1:181688386059:web:bb09f5c5c6dc5a0ce8fd0e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Auth
export const auth = getAuth(app)
