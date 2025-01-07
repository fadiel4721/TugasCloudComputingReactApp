import React, { useState } from "react";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = ({ onRegisterClick }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validation, setValidation] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const mapErrorMessage = (code) => {
    switch (code) {
      case "auth/user-not-found":
        return "Email tidak terdaftar.";
      case "auth/wrong-password":
        return "Password salah.";
      case "auth/invalid-email":
        return "Format email tidak valid.";
      default:
        return "Terjadi kesalahan. Silakan coba lagi.";
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log("Login berhasil:", userCredential.user);
      setIsLoading(false);
    } catch (error) {
      setValidation({ message: mapErrorMessage(error.code) });
      setIsLoading(false);
    }
  };

  return (
    <div className="container" style={{ marginTop: "-25px", padding: "0 330px" }}>
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
              <h4 className="fw-bold text-white text-center">LOGIN</h4>
              <hr />
              {validation.message && <div className="alert alert-danger">{validation.message}</div>}
              <form onSubmit={handleLogin}>
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
                  <button type="submit" className="btn btn-primary" disabled={isLoading}>
                    {isLoading ? "Loading..." : "LOGIN"}
                  </button>
                </div>
              </form>
              <hr />
              <div className="text-center">
                <span className="text-white">Belum punya akun? </span>
                <button onClick={onRegisterClick} className="btn btn-link p-0 text-white">
                  Daftar Sekarang
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
