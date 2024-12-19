// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Education from "./components/Education";
import Contact from "./components/Contact";
import About from "./components/About";
import Portfolio1 from "./components/Portfolio1";
import Skill from "./components/Skills";

function App() {
  return (
    <Router basename="/portfolio">
      <Header />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Education" element={<Education />} />
          <Route path="/Portfolio1" element={<Portfolio1 />} />
          <Route path="/Skills" element={<Skill />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
