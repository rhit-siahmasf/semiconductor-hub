// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAqZXnFu72l1qnme9N7TnmbMsZKlbZxLtY",
  authDomain: "semiconductor-hub-ce0cd.firebaseapp.com",
  databaseURL: "https://semiconductor-hub-ce0cd-default-rtdb.firebaseio.com",
  projectId: "semiconductor-hub-ce0cd",
  storageBucket: "semiconductor-hub-ce0cd.appspot.com",
  messagingSenderId: "633395400763",
  appId: "1:633395400763:web:33e21995843d3b21fdcc1e",
  measurementId: "G-JGFZPNLNJV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);