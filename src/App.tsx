import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Event from "./pages/Event";
import ServiceDetail from "./pages/ServiceDetail";
import Confirmation from "./pages/Confirmation";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen relative bg-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/evenement" element={<Event />} />
          <Route path="/event" element={<Event />} />
          <Route path="/certure/evenement/confirmation" element={<Confirmation />} />
        </Routes>
      </div>
    </Router>
  );
}
