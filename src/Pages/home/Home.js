import React from "react";
import Slider from "../../components/slider/Slider";
import Footer from "../../components/footer/Footer";
import HomeAbout from "./homeAbout/HomeAbout";
import HomeActivity from "./homeActivity/HomeActivity";
import Navbar from "../../components/navbar/Navbar";

const Home = () => {
  return (
    <>
    <Navbar />
      <Slider/>
      <HomeAbout/>
      <HomeActivity/>
      <Footer/>
    </>
  );
};

export default Home;