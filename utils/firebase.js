// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGOl2hKPBDyRLHDgUnOPt-JDs1KrXMPWc",
  authDomain: "pintrest-6c323.firebaseapp.com",
  projectId: "pintrest-6c323",
  storageBucket: "pintrest-6c323.appspot.com",
  messagingSenderId: "187767114340",
  appId: "1:187767114340:web:fec0dd85df82717f7ded71"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;