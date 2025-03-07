import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBY93Bsk3d-aoHpbdiYfUN5nBgByOOhg94",
  authDomain: "cinibite-13c8e.firebaseapp.com",
  projectId: "cinibite-13c8e",
  storageBucket: "cinibite-13c8e.firebasestorage.app",
  messagingSenderId: "1082386859069",
  appId: "1:1082386859069:web:3f0fc91fb648f2253fd654",
  measurementId: "G-VXKXSVDT3Q",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const analytics = getAnalytics(app);
