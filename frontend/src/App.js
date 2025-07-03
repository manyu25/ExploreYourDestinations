import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import AboutUs from "./Components/AboutUs";
import Contact from "./Components/Contact";
import OurPackages from "./Components/OurPackages";
import PackageDetails from "./Components/PackageDetails";
import Footer from "./Components/Footer";
import Testimonials from "./Components/Testimonials";
import DestinationsSection from "./Components/Destinations";

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Hero />
        <AboutUs />
        <DestinationsSection />
        <Routes>
          <Route path="/" element={<OurPackages />} />
          <Route path="/packages/:id" element={<PackageDetails />} />
        </Routes>
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
