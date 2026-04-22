import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { motion, useScroll, useSpring } from "motion/react";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Event from "./pages/Event";
import ServiceDetail from "./pages/ServiceDetail";
import Confirmation from "./pages/Confirmation";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen relative bg-[#0a0a0b]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/evenement" element={<Event />} />
          <Route path="/certure/evenement/confirmation" element={<Confirmation />} />
        </Routes>
      </div>
    </Router>
  );
}
