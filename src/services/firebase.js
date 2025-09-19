import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCc3zVL-_RKbMLpXjVEi0WJS1L4t2Fkl-U",
  authDomain: "hee-coex.firebaseapp.com",
  projectId: "hee-coex",
  storageBucket: "hee-coex.firebasestorage.app",
  messagingSenderId: "438208560681",
  appId: "1:438208560681:web:1d101de2f5683d7257e638",
  measurementId: "G-B4SCJXY6PX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);