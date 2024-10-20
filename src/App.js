import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Contact from "./Contact";
import Navigation from "./Navigation";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";


const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Navigation />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Skills" element={<Skills />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;
