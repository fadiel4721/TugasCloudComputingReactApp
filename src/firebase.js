import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Konfigurasi Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAzY9Moq4wf1du_V9Ewdv6iQmkz_AqN0ps",
  authDomain: "myreactappfadiel.firebaseapp.com",
  projectId: "myreactappfadiel",
  storageBucket: "myreactappfadiel.firebasestorage.app",
  messagingSenderId: "343440888592",
  appId: "1:343440888592:web:16fad6d5a79d43b078cb95",
};

// Inisialisasi Firebase
const app = initializeApp(firebaseConfig);

// Inisialisasi Auth dan Firestore
const auth = getAuth(app);
const db = getFirestore(app);

// Ekspor modul
export { auth, db };
