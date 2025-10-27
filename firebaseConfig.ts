// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAAiYJ_GmtDZKCGmz__5l_qzSHWGpud_MM",
  authDomain: "cooking-app-api-bf44e.firebaseapp.com",
  projectId: "cooking-app-api-bf44e",
  storageBucket: "cooking-app-api-bf44e.firebasestorage.app",
  messagingSenderId: "1097652825744",
  appId: "1:1097652825744:web:2c0cc82f668f948f987215",
  measurementId: "G-YCC39C9JNZ",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// const analytics = getAnalytics(app);
