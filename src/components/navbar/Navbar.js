import React, { useState } from "react";
import "./navbar.css";
import Logo from "../../assests/hwh-logo.webp"
import { Link } from "react-router-dom";

function Navbar() {

  const [colorChange, setColorchange] = useState(false);
  const scrollPage = () => {
    if (window.scrollY > 80) {
      setColorchange(true)
    } else {
      setColorchange(false)
    }
  };
  window.addEventListener("scroll", scrollPage);
  return (
    <>
      <div className={colorChange ? `nav nav-scroll` : `nav`}>
        <div className="logo"><Link to="/"><img src={Logo} alt="" /></Link></div>
        <div className="linkers">
          <ul className="list-items">
            <li><Link to="/" className="contact">Home</Link></li>
            <li><Link to="/about" className="contact">About</Link></li>
            <li><Link to="/events" className="contact">Events</Link></li>
            <li><Link to="/VolunteerForm1" className="contact">Volunteer Form</Link></li>
            <li><Link to="/contact-us" className="contact">Contact</Link></li>
          </ul>
        </div>
        <div className="donate">
          <p><Link to="/donate" className="link">Donate</Link></p>
        </div>
      </div>
    </>
  );
}

export default Navbar;