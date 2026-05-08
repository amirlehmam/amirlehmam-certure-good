import React from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import HeroSection from "../components/sections/HeroSection";
import KeyMetricsSection from "../components/sections/KeyMetricsSection";
import StatsSection from "../components/sections/StatsSection";
import DiagnosticSection from "../components/sections/DiagnosticSection";
import TimelineSection from "../components/sections/TimelineSection";
import CaseStudiesSection from "../components/sections/CaseStudiesSection";
import RoadmapSection from "../components/sections/RoadmapSection";
import OffersSection from "../components/sections/OffersSection";
import TerrainSection from "../components/sections/TerrainSection";
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
        <DiagnosticSection />
        <StatsSection />
        <TimelineSection />
        <RoadmapSection />
        <CaseStudiesSection />
        <OffersSection />
        <KeyMetricsSection />
        <TeamSection />
        <EventSection />
        <TerrainSection />
        <FAQSection />
        <CTAFinalSection />
      </main>
      
      <Footer />
    </div>
  );
}
