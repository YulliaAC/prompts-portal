// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBlD6jDQY0wDRzAxFgkDUaLc_yx_hbzBlw",
  authDomain: "prompt-portal.firebaseapp.com",
  projectId: "prompt-portal",
  storageBucket: "prompt-portal.appspot.com",
  messagingSenderId: "622546542474",
  appId: "1:622546542474:web:5c3032fae89c150a067273",
  measurementId: "G-LKLG0MG6XD"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const initFirebase = () => {
    return app;
}