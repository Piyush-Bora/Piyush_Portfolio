import "./App.css";
import Navbar from "./components/Navbar";
import React from "react";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import About from "./components/About";
import Experiences from "./components/Experiences";
import Contactme from "./components/Contactme";
import { useState, useEffect } from "react";
import HashLoader from "react-spinners/HashLoader";
import ScrollToTop from "./components/ScrollToTop";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { particlesOptions } from "./components/particlesConfig";

function App(props) {
  const [loading, setLoading] = useState(false);

  const particlesInit = (engine) => {
    loadFull(engine);
  };

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div className="mainApp flex flex-col h-screen overflow-x-hidden">
      {loading ? (
        <div className="min-w-full min-h-full flex justify-center items-center">
          <HashLoader
            color={"#36A6D6"}
            loading={loading}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <BrowserRouter>
        <Particles init={particlesInit} options={particlesOptions} />
        <ScrollToTop />
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/experiences" element={<Experiences />} />
            <Route exact path="/contact" element={<Contactme />} />
            {/* <Route index element={<Home />} /> */}
            {/* <Route path="blogs" element={<Blogs />} /> */}
            {/* <Route path="contact" element={<Contact />} /> */}
            {/* <Route path="*" element={<NoPage />} /> */}
          </Routes>
          <Footer />
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
