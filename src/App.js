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
    <Router>
      <Header />
      <div className="App">
        <Routes>
          <Route path="/portfolio" element={<Home />} />
          <Route path="/portfolio/Education" element={<Education />} />
          <Route path="/portfolio/Portfolio1" element={<Portfolio1 />} />
          <Route path="/portfolio/Skills" element={<Skill />} />
          <Route path="/portfolio/Contact" element={<Contact />} />
          <Route path="/portfolio/About" element={<About />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
