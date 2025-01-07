import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import profileImage from "../assets/images/profile.jpg";
import project1Image from "../assets/images/project1.png";
import project2Image from "../assets/images/project2.png";
import project3Image from "../assets/images/project3.jpg";
import "../styles/Homepage.css";

const Homepage = () => {
  const handleLogout = async () => {
    try {
      await signOut(auth);
      console.log("Berhasil logout");
    } catch (error) {
      console.error("Error saat logout:", error.message);
    }
  };

  return (
    <div className="container-fluid px-0">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark custom-navbar fixed-top">
        <a className="navbar-brand" href="#">My Portfolio</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projects">Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">Contact</a>
            </li>
            <li className="nav-item">
              <button onClick={handleLogout} className="btn btn-danger btn-sm">
                Logout
              </button>
            </li>
          </ul>
        </div>
      </nav>

      {/* Main Content */}
      <div className="content">
        {/* Hero Section */}
        <section className="py-5 bg-primary text-white text-center">
          <div className="container">
            <h1 className="display-4">Welcome to My Portfolio</h1>
            <p className="lead">Explore my work and projects!</p>
            <a href="#about" className="btn btn-light btn-lg">Learn More</a>
          </div>
        </section>

        {/* About Me */}
        <section id="about" className="py-5">
          <div className="container">
            <h2 className="text-center mb-4">About Me</h2>
            <div className="row text-center">
              <div className="col-md-12">
                <img
                  src={profileImage}
                  alt="Profile"
                  className="img-fluid rounded-circle mb-3 profile-image"
                />
                <p className="lead">
                  Halo! Saya adalah pengembang web yang antusias dengan teknologi modern dan selalu bersemangat untuk belajar dan mengembangkan aplikasi yang bermanfaat.
                </p>
                <p>
                  Saya telah bekerja dengan berbagai teknologi, termasuk React, Firebase, Laravel, dan lainnya. Tujuan saya adalah untuk menciptakan aplikasi yang user-friendly dan efektif.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="py-5 bg-light">
          <div className="container">
            <h2 className="text-center mb-4">My Projects</h2>
            <div className="row">
              {[
                {
                  image: project1Image,
                  title: "Buku Tamu PT Minori",
                  description: "Aplikasi untuk mengelola inventaris dengan fitur penambahan, penghapusan, dan pemantauan barang.",
                },
                {
                  image: project2Image,
                  title: "Aplikasi Catatan Keuangan",
                  description: "Aplikasi untuk memantau dan mengelola pengeluaran dan pemasukan secara efektif.",
                },
                {
                  image: project3Image,
                  title: "Website Portofolio",
                  description: "Website portofolio saya untuk menampilkan proyek-proyek yang telah saya kerjakan.",
                },
              ].map((project, index) => (
                <div className="col-md-4 mb-4" key={index}>
                  <div className="card">
                    <img
                      src={project.image}
                      className="card-img-top project-image"
                      alt={project.title}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{project.title}</h5>
                      <p className="card-text">{project.description}</p>
                      <a href="#" className="btn btn-primary">View Project</a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-dark text-white py-4">
        <div className="container text-center">
          <p>&copy; 2025 Fadiel Muhammad. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;
