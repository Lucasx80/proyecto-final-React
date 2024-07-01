import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB78or0AMBx29nzzdRM5ppSZnIYxpk1yPE",
  authDomain: "coderhouse-proyectofinal-ea63f.firebaseapp.com",
  projectId: "coderhouse-proyectofinal-ea63f",
  storageBucket: "coderhouse-proyectofinal-ea63f.appspot.com",
  messagingSenderId: "710072691345",
  appId: "1:710072691345:web:aaaafdb0d576258cca2d30"
};



// Initialize Firebase
const app=initializeApp(firebaseConfig);
export const db = getFirestore(app)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
