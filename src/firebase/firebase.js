import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBwV_ZEGoGdyfK7dytfKxWmqSly89-xVE0",
  authDomain: "cini-bite.firebaseapp.com",
  projectId: "cini-bite",
  storageBucket: "cini-bite.firebasestorage.app",
  messagingSenderId: "469448729909",
  appId: "1:469448729909:web:69799e2a73237b9eb9d87c",
  measurementId: "G-0BQ5D75L3B",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const analytics = getAnalytics(app);
