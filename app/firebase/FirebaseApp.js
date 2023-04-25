// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCFT_kGpNdLSs_pCnPBFN-enEPfrgY2U38",
  authDomain: "prompts-portal.firebaseapp.com",
  projectId: "prompts-portal",
  storageBucket: "prompts-portal.appspot.com",
  messagingSenderId: "687424865620",
  appId: "1:687424865620:web:d7bbc54befe77ab51ab4c1",
  measurementId: "G-GZ4BTEXSG3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const initFirebase = () => {
  return app;
}
// const analytics = getAnalytics(app);