import React from "react";
import "./aboutTeam.css";
import Bhargsetu from "../../../assests/bhargsetu.webp";

function AboutTeam() {
  return (
    <>
      <div className="aboutTeam-container">
        <div className="team-heading">
          <h1>Our Founder</h1>
        </div>
        <div className="team-members">
          <div className="bhargsetu member">
            <img src={Bhargsetu} alt="Bhargsetu Sharma" />
            <h2>Ms. Bhargsetu Sharma</h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutTeam;