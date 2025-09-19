import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmZ_Q-WY5BhLXMFqFGLWIp7g0rJ-XeYIc",
  authDomain: "fit5032-week7-taowan.firebaseapp.com",
  projectId: "fit5032-week7-taowan",
  storageBucket: "fit5032-week7-taowan.firebasestorage.app",
  messagingSenderId: "203680051695",
  appId: "1:203680051695:web:1bd3a131a0ac4b99d5c61a"
};

// Initialize Firebase
initializeApp(firebaseConfig)
const db = getFirestore()
export default db;
