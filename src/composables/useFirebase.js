// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDhSgjk1_LhjgOyHnk5aZPQKBTlDqzPXwQ",
  authDomain: "homework5-e69a8.firebaseapp.com",
  projectId: "homework5-e69a8",
  storageBucket: "homework5-e69a8.firebasestorage.app",
  messagingSenderId: "858908248975",
  appId: "1:858908248975:web:3d2d37576e4bed723019fa",
  measurementId: "G-SFQ4KGSKC3"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
// export const analytics = getAnalytics(app);