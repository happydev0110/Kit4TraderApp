
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  // Firebase configuration object
  apiKey: "AIzaSyDW-6VTb8PWXJUBjMtm0vA9IGjXFJLHS1I",
  authDomain: "kit4trader-3e0cd.firebaseapp.com",
  projectId: "kit4trader-3e0cd",
  storageBucket: "kit4trader-3e0cd.appspot.com",
  messagingSenderId: "661521442521",
  appId: "1:661521442521:android:fe9d3730ad595e35bb00c8"
};

const app = initializeApp(firebaseConfig);
export const authConfig = getAuth(app);