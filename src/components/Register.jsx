import React, { useState } from "react";
import { auth, db } from "../firebase"; // Pastikan path sesuai
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

const Register = ({ onLoginClick }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validation, setValidation] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      // Buat akun menggunakan email dan password
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Simpan nama dan email ke Firestore di koleksi 'users'
      await setDoc(doc(db, "users", user.uid), {
        name: name,
        email: email,
      });

      console.log("Registrasi berhasil dan data disimpan di Firestore:", user);
      setIsLoading(false);
    } catch (error) {
      console.error("Error registrasi:", error.message);
      setValidation({ message: "Terjadi kesalahan, coba lagi." });
      setIsLoading(false);
    }
  };

  return (
    <div className="container" style={{ marginTop: "-25px", padding: "0 340px" }}>
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-6">
          <div
            className="card border-0 rounded shadow-sm"
            style={{
              backgroundColor: "#4e73df",
              color: "#fff",
              maxWidth: "800px",
              minWidth: "400px",
              margin: "0 auto",
            }}
          >
            <div className="card-body">
              <h4 className="fw-bold text-white text-center">REGISTRASI</h4>
              <hr />
              {validation.message && <div className="alert alert-danger">{validation.message}</div>}
              <form onSubmit={handleRegister}>
                <div className="mb-3">
                  <label className="form-label text-white">NAMA LENGKAP</label>
                  <input
                    type="text"
                    className="form-control"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Masukkan Nama Lengkap"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label text-white">ALAMAT EMAIL</label>
                  <input
                    type="email"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Masukkan Alamat Email"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label text-white">PASSWORD</label>
                  <input
                    type="password"
                    className="form-control"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Masukkan Password"
                    required
                  />
                </div>
                <div className="d-grid gap-2">
                  <button type="submit" className="btn btn-success" disabled={isLoading}>
                    {isLoading ? "Loading..." : "DAFTAR"}
                  </button>
                </div>
              </form>
              <hr />
              <div className="text-center">
                <span className="text-white">Sudah punya akun? </span>
                <button onClick={onLoginClick} className="btn btn-link p-0 text-white">
                  Login di sini
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
