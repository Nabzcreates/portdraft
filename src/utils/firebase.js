import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDub3TrpU2s1ht_vFUvYvmvGLeE9TiZb1g",
  authDomain: "portfolio-ef684.firebaseapp.com",
  projectId: "portfolio-ef684",
  storageBucket: "portfolio-ef684.appspot.com",
  messagingSenderId: "747475744582",
  appId: "1:747475744582:web:50f36932747b8b3b0f5747",
  measurementId: "G-XVXFXYL2TE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);