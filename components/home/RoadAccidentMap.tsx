"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const stateData = [
  { name: "Uttar Pradesh", accidents: 42867, deaths: 18614, severity: "critical", color: "#DC2626" },
  { name: "Tamil Nadu", accidents: 64131, deaths: 13568, severity: "critical", color: "#DC2626" },
  { name: "Maharashtra", accidents: 40675, deaths: 11883, severity: "critical", color: "#DC2626" },
  { name: "Karnataka", accidents: 41939, deaths: 11361, severity: "critical", color: "#DC2626" },
  { name: "Madhya Pradesh", accidents: 51372, deaths: 11031, severity: "critical", color: "#DC2626" },
  { name: "Rajasthan", accidents: 25905, deaths: 9761, severity: "high", color: "#EA580C" },
  { name: "West Bengal", accidents: 12402, deaths: 7026, severity: "high", color: "#EA580C" },
  { name: "Andhra Pradesh", accidents: 24256, deaths: 6914, severity: "high", color: "#EA580C" },
  { name: "Gujarat", accidents: 19256, deaths: 6897, severity: "high", color: "#EA580C" },
  { name: "Bihar", accidents: 11037, deaths: 5183, severity: "medium", color: "#F59E0B" },
  { name: "Telangana", accidents: 18671, deaths: 4891, severity: "medium", color: "#F59E0B" },
  { name: "Punjab", accidents: 5895, deaths: 3252, severity: "medium", color: "#F59E0B" },
  { name: "Haryana", accidents: 9664, deaths: 3509, severity: "medium", color: "#F59E0B" },
  { name: "Odisha", accidents: 11322, deaths: 4440, severity: "medium", color: "#F59E0B" },
  { name: "Kerala", accidents: 42276, deaths: 3516, severity: "low", color: "#10B981" },
];

export default function RoadAccidentMap() {
  const [activeStateIndex, setActiveStateIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const isVisible = useInView(sectionRef, { margin: "0px" });

  useEffect(() => {
    if (!isVisible || isPaused) return;
    const interval = setInterval(() => {
      setActiveStateIndex((prev) => (prev + 1) % stateData.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [isVisible, isPaused]);

  const activeState = stateData[activeStateIndex];

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen w-full flex flex-col justify-center overflow-hidden bg-primary"
    >
      {/* Full-width background map image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/home-accident-map.png"
          alt="India data visualization map showing accident hotspots and fleet routes"
          fill
          className="object-cover object-center opacity-40"
          priority={false}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/70 to-slate-950/50" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-transparent to-slate-950/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-6 sm:px-10 md:px-16 lg:px-20 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-[1440px] mx-auto">

          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
          >
            <motion.span
              className="font-label-tech text-label-tech text-secondary tracking-[0.2em] uppercase block mb-4"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.2 }}
            >
              The Problem We&apos;re Solving
            </motion.span>

            <motion.h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.3 }}
            >
              1.7 Lakh Lives Lost<br />
              <span className="text-secondary">Every Year</span>
            </motion.h2>

            <motion.p
              className="text-base md:text-lg text-slate-300 leading-relaxed max-w-xl mb-8"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.4 }}
            >
              Over 90% of road accidents in India are caused by human error. Every kilometer driven with HAVONE captures critical safety data — near-misses, harsh braking, blind-spot incidents, and road conditions. This data powers real-time alerts today and trains autonomous AI tomorrow.
            </motion.p>

            {/* Key Stats */}
            <motion.div
              className="grid grid-cols-3 gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.5 }}
            >
              <div className="border border-white/10 rounded-lg p-4 bg-white/5 backdrop-blur-sm">
                <span className="text-2xl md:text-3xl font-bold text-secondary block">90%</span>
                <span className="text-[11px] text-slate-400 uppercase tracking-wide">Human Error</span>
              </div>
              <div className="border border-white/10 rounded-lg p-4 bg-white/5 backdrop-blur-sm">
                <span className="text-2xl md:text-3xl font-bold text-white block">1.7L</span>
                <span className="text-[11px] text-slate-400 uppercase tracking-wide">Annual Deaths</span>
              </div>
              <div className="border border-white/10 rounded-lg p-4 bg-white/5 backdrop-blur-sm">
                <span className="text-2xl md:text-3xl font-bold text-white block">15</span>
                <span className="text-[11px] text-slate-400 uppercase tracking-wide">States Tracked</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Live State Data Panel */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <motion.div
              key={activeStateIndex}
              className="bg-white/[0.08] backdrop-blur-lg text-white rounded-2xl p-8 md:p-10 border border-white/20 shadow-2xl relative overflow-hidden"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              aria-live="polite"
              aria-atomic="true"
            >
              {/* Background accent */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-secondary/10 rounded-full blur-[80px] pointer-events-none" />

              <div className="relative z-10">
                {/* State Name */}
                <div className="mb-8 pb-4 border-b border-white/10">
                  <span className="text-[11px] text-secondary uppercase tracking-widest block mb-2">
                    Current State
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold text-white">
                    {activeState.name}
                  </h3>
                </div>

                {/* Statistics */}
                <div className="space-y-6">
                  <motion.div
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <span className="text-[11px] text-slate-400 uppercase tracking-wide block mb-1">
                      Annual Accidents
                    </span>
                    <motion.span
                      className="text-4xl md:text-5xl font-black text-secondary leading-none"
                      initial={{ scale: 0.8 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200, delay: 0.4 }}
                    >
                      {activeState.accidents.toLocaleString()}
                    </motion.span>
                  </motion.div>

                  <motion.div
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    <span className="text-[11px] text-slate-400 uppercase tracking-wide block mb-1">
                      Fatalities
                    </span>
                    <div className="flex items-baseline gap-3">
                      <motion.span
                        className="text-3xl md:text-4xl font-black text-white leading-none"
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 200, delay: 0.5 }}
                      >
                        {activeState.deaths.toLocaleString()}
                      </motion.span>
                      <span className="text-sm text-slate-500 uppercase">
                        lives lost
                      </span>
                    </div>
                  </motion.div>

                  {/* Severity */}
                  <motion.div
                    className="flex items-center justify-between bg-white/5 rounded-xl p-4 border border-white/10"
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6 }}
                  >
                    <span className="text-sm text-slate-300">Severity</span>
                    <div className="flex items-center gap-2">
                      <div
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: activeState.color }}
                      />
                      <span className="text-sm text-white font-semibold capitalize">
                        {activeState.severity}
                      </span>
                    </div>
                  </motion.div>
                </div>

                {/* Auto-cycling indicator */}
                <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-2 justify-center">
                  <motion.div
                    className="w-2 h-2 rounded-full bg-secondary"
                    animate={{ opacity: [1, 0.3, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                  <span className="text-[11px] text-slate-500 uppercase tracking-widest">
                    Auto-cycling • 3s
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Navigation Dots */}
            <div className="flex items-center justify-center gap-1.5 mt-5" role="tablist" aria-label="State statistics navigation">
              {stateData.map((state, index) => (
                <button
                  key={index}
                  role="tab"
                  aria-selected={activeStateIndex === index}
                  aria-label={`View ${state.name} statistics`}
                  onClick={() => {
                    setActiveStateIndex(index);
                    setIsPaused(true);
                  }}
                  className={`h-2 rounded-full transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary ${
                    activeStateIndex === index
                      ? "bg-secondary w-7"
                      : "bg-white/20 w-2 hover:bg-secondary/50"
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Legend overlay - bottom left */}
      <div className="absolute bottom-6 left-6 sm:left-10 md:left-16 lg:left-20 z-10">
        <div className="bg-slate-900/80 backdrop-blur-sm rounded-lg px-4 py-3 border border-white/10">
          <div className="flex items-center gap-4">
            {[
              { label: "Critical", color: "#DC2626" },
              { label: "High", color: "#EA580C" },
              { label: "Medium", color: "#F59E0B" },
              { label: "Low", color: "#10B981" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: item.color }} />
                <span className="text-[10px] text-slate-400 uppercase">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
