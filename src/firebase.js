// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
import 'firebase/compat/firestore';

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
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
