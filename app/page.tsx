"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Speedometer from "@/components/Speedometer";
import HeroHome from "@/components/home/HeroHome";
import TrustBar from "@/components/home/TrustBar";
import RoadAccidentMap from "@/components/home/RoadAccidentMap";
import FeaturesGrid from "@/components/home/FeaturesGrid";
import TechShowcase from "@/components/home/TechShowcase";
import StatsSection from "@/components/home/StatsSection";
import CTAHome from "@/components/home/CTAHome";

export default function HomePage() {
  return (
    <div className="relative">
      <Speedometer />
      <Header />
      <main id="main-content" className="relative w-full overflow-x-hidden">
        <HeroHome />
        <TrustBar />
        <RoadAccidentMap />
        <FeaturesGrid />
        <TechShowcase />
        <StatsSection />
        <CTAHome />
      </main>
      <Footer />
    </div>
  );
}
