import './App.css';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Routes, Route } from 'react-router-dom';
import Home from '../src/Pages/home/Home'
import ContactUs from './Pages/Contact-us';
import VolunteerForm1 from './Pages/Volunteer-Form1';
import VolunteerForm2 from './Pages/Volunteer-Form2';
import VolunteerForm3 from './Pages/Volunteer-Form3';
import Events from './Pages/events/Events';
import About from './Pages/about/About';
import Donate from './Pages/donate/Donate';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events/>} />
        <Route path="/about" element={<About />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/Contact-us" element={<ContactUs />} />
        <Route path="/VolunteerForm1" element={<VolunteerForm1/>} />
        <Route path="/VolunteerForm2" element={<VolunteerForm2/>} />
        <Route path="/VolunteerForm3" element={<VolunteerForm3/>} />
        
      </Routes>
    </Router>
      
    
  );
}

export default App;
