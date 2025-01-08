import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection, getDocs } from "firebase/firestore";

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
console.log("Firebase berhasil diinisialisasi");

// Inisialisasi Auth dan Firestore
const auth = getAuth(app);
const db = getFirestore(app);

// Tes koneksi Firestore
async function testFirestoreConnection() {
  try {
    const querySnapshot = await getDocs(collection(db, "users")); // Ganti "testCollection" dengan nama koleksi yang ada di Firestore Anda
    if (querySnapshot.empty) {
      console.log("Terhubung ke Firestore, tetapi koleksi kosong.");
    } else {
      console.log("Terhubung ke Firestore. Data koleksi:");
      querySnapshot.forEach((doc) => {
        console.log(`${doc.id} =>`, doc.data());
      });
    }
  } catch (error) {
    console.error("Gagal terhubung ke Firestore:", error);
  }
}

// Panggil fungsi tes koneksi Firestore
testFirestoreConnection();

// Ekspor modul
export { auth, db };
