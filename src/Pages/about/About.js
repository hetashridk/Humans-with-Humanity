import React from "react";
import "./about.css";
import { Link } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import AboutContent from "./aboutContent/AboutContent";
import AboutTeam from "./aboutTeam/AboutTeam";
import Navbar from "../../components/navbar/Navbar";

function About() {
  return (
    <>
    <Navbar />
      <div className="aboutus-container">
        <div className="aboutus-header">
          <div className="about-title">
            <h2>About Us</h2>
          </div>
          <div className="aboutus-tags">
            <Link to="/" className="home-link">
              Home
            </Link>
            <p>/</p>
            <li>About</li>
          </div>
        </div>
      </div>
      <AboutContent />
      <AboutTeam/>
      <Footer />
    </>
  );
}

export default About;