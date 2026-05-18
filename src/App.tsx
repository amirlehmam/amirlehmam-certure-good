import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import Trainings from "./pages/Trainings";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen relative bg-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/formations" element={<Trainings />} />
        </Routes>
      </div>
    </Router>
  );
}
