import React from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import HeroSection from "../components/sections/HeroSection";
import PartnersSection from "../components/sections/PartnersSection";
import EventGallerySection from "../components/sections/EventGallerySection";
import StatsSection from "../components/sections/StatsSection";
import MethodologySection from "../components/sections/MethodologySection";
import DiagnosticSection from "../components/sections/DiagnosticSection";
import TimelineSection from "../components/sections/TimelineSection";
import CaseStudiesSection from "../components/sections/CaseStudiesSection";
import RoadmapSection from "../components/sections/RoadmapSection";
import OffersSection from "../components/sections/OffersSection";
import TeamSection from "../components/sections/TeamSection";
import EventSection from "../components/sections/EventSection";
import FAQSection from "../components/sections/FAQSection";
import CTAFinalSection from "../components/sections/CTAFinalSection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white selection:bg-blue/10 selection:text-blue">
      {/* Scroll Progress Bar could go here but following user request for sobriety */}
      <Header />
      
      <main>
        <HeroSection />
        <PartnersSection />
        <EventGallerySection />
        <StatsSection />
        <MethodologySection />
        <DiagnosticSection />
        <TimelineSection />
        <CaseStudiesSection />
        <RoadmapSection />
        <OffersSection />
        <TeamSection />
        <EventSection />
        <FAQSection />
        <CTAFinalSection />
      </main>
      
      <Footer />
    </div>
  );
}
