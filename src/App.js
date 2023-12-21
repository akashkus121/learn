import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min';
import About from "./About";
import Home from "./Home";
import Service from "./Service";
import Contact from "./Contact";
import Navbar from "./Navbar";
import "./index.css";
import { BrowserRouter as   Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
     
    <Router>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
    </>
    
  );
};
export default App;
