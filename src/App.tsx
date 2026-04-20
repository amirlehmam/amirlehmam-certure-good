import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { motion, useScroll, useSpring } from "motion/react";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Event from "./pages/Event";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen relative bg-[#0a0a0b]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/evenement" element={<Event />} />
        </Routes>
      </div>
    </Router>
  );
}
