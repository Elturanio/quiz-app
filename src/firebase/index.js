// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, } from "firebase/firestore";
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
export const db = getFirestore(app);
const analytics = getAnalytics(app);


// const newPath = doc(firestore, "getting/started")

// const pushData = () => {
//    const docData = {
//       description: "Its my first time...",
//       price: "1.5$",
//       lovelyFood: "beef"
//    };
//    setDoc(newPath, docData);
// }
// pushData()

// async function myData() {
//    const snapshot = await getDoc(newPath)
//    if (snapshot.exists()) {
//       console.log(snapshot.data())
//    } else console.log("something is incorrect in your query")

// }
// myData()