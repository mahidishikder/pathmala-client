import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyAmHc2C1zyNADwURQ9o3UOQMMbItVda5sA",
  authDomain: "pathmala.firebaseapp.com",
  projectId: "pathmala",
  storageBucket: "pathmala.firebasestorage.app",
  messagingSenderId: "787423952349",
  appId: "1:787423952349:web:53cb6a137156762e0a4a34"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);