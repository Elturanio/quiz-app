// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
   apiKey: "AIzaSyAUn-e0XHlfpNP3_uWEbyJ_d-NKAV400mQ",
   authDomain: "quiz-app-back.firebaseapp.com",
   projectId: "quiz-app-back",
   storageBucket: "quiz-app-back.appspot.com",
   messagingSenderId: "560650156712",
   appId: "1:560650156712:web:720c18a269d15f4391e09d",
   measurementId: "G-Z846P9CLCF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);