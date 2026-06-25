// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCvdHeSGvK-K5J2Lb0ZzebJT45YUwCMnbM",
  authDomain: "auth-17-07-07.firebaseapp.com",
  projectId: "auth-17-07-07",
  storageBucket: "auth-17-07-07.firebasestorage.app",
  messagingSenderId: "623886652256",
  appId: "1:623886652256:web:c163445e6e201e742b4405",
  measurementId: "G-L4NK2M0G9Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export default app;