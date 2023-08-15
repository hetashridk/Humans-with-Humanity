import React from "react";
import "./homeAbout.css";
import HomeAboutUS from "../../../assests/home-aboutus.png"

function HomeAbout() {
  return (
    <div className="about-container">
      <div className="about-image-container">
        <img
          className="about-img"
          src={HomeAboutUS}
          alt="Home-About"
        />
      </div>
      <div className="about-content-container">
        <h2>About Us</h2>
        <p>
        Humans with Humanity (HWH) is an animal welfare foundation managed by a group of young and enthusiastic people who share the desire to help and aid animals. This foundation was established in 2011 and we are currently celebrating the journey into its 13th year. HWH got registered as a non-profit company under section 8 in 2020. We aim to create a society where coexistence with nature and animals is a benediction. The Director and Founder of the HWH Foundation is <strong><i>Ms Bhargsetu Sharma</i></strong>. We have been active on Facebook, Instagram, YouTube and Twitter.
        </p>
      </div>
    </div>
  );
}

export default HomeAbout;