// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import 'firebase/firestore';
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBOB8DQjEVwAlwyZJmhX5naHFTuLSVxJNg",
  authDomain: "react-hooks-blog-c0415.firebaseapp.com",
  projectId: "react-hooks-blog-c0415",
  storageBucket: "react-hooks-blog-c0415.appspot.com",
  messagingSenderId: "1057624192098",
  appId: "1:1057624192098:web:ae2dae392fcf66ac438d3b",
  measurementId: "G-253YEGT0QR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const firestore = firebase.firestore();