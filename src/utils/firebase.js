// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBlBHYoyNgfv3dXjNhh_ACvoyLrMKhHGNg",
  authDomain: "netflix-cd81a.firebaseapp.com",
  projectId: "netflix-cd81a",
  storageBucket: "netflix-cd81a.appspot.com",
  messagingSenderId: "744808319836",
  appId: "1:744808319836:web:d1fd4fea02a6710b108f99",
  measurementId: "G-2SGMVBMDS9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
