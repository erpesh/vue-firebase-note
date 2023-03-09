import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import dotenv from 'dotenv';
dotenv.config();

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
  authDomain: "todo-vue-a564f.firebaseapp.com",
  projectId: "todo-vue-a564f",
  storageBucket: "todo-vue-a564f.appspot.com",
  messagingSenderId: "165061987031",
  appId: "1:165061987031:web:190d3f90c296e1e86cbe92"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;