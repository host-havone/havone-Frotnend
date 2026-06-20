"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

// State data with road accident statistics (sample data - replace with real data)
const stateData = [
  {
    name: "Uttar Pradesh",
    accidents: 42867,
    deaths: 18614,
    severity: "critical", // critical, high, medium, low
    color: "#DC2626", // red-600
    path: "M 420 180 L 440 175 L 460 180 L 475 190 L 480 210 L 470 230 L 450 240 L 430 235 L 415 220 L 410 200 Z"
  },
  {
    name: "Tamil Nadu",
    accidents: 64131,
    deaths: 13568,
    severity: "critical",
    color: "#DC2626",
    path: "M 340 430 L 360 420 L 380 430 L 390 450 L 385 470 L 365 480 L 345 475 L 335 455 Z"
  },
  {
    name: "Maharashtra",
    accidents: 40675,
    deaths: 11883,
    severity: "critical",
    color: "#DC2626",
    path: "M 280 300 L 310 290 L 340 300 L 350 320 L 340 345 L 310 355 L 285 345 L 275 320 Z"
  },
  {
    name: "Karnataka",
    accidents: 41939,
    deaths: 11361,
    severity: "critical",
    color: "#DC2626",
    path: "M 300 360 L 330 355 L 350 370 L 355 395 L 340 415 L 310 420 L 295 405 L 290 380 Z"
  },
  {
    name: "Madhya Pradesh",
    accidents: 51372,
    deaths: 11031,
    severity: "critical",
    color: "#DC2626",
    path: "M 330 220 L 365 210 L 395 220 L 405 245 L 390 270 L 360 280 L 330 270 L 320 245 Z"
  },
  {
    name: "Rajasthan",
    accidents: 25905,
    deaths: 9761,
    severity: "high",
    color: "#EA580C", // orange-600
    path: "M 250 150 L 290 140 L 325 150 L 340 180 L 330 210 L 300 220 L 260 210 L 245 180 Z"
  },
  {
    name: "West Bengal",
    accidents: 12402,
    deaths: 7026,
    severity: "high",
    color: "#EA580C",
    path: "M 520 240 L 545 235 L 560 250 L 555 275 L 535 285 L 515 275 L 510 255 Z"
  },
  {
    name: "Andhra Pradesh",
    accidents: 24256,
    deaths: 6914,
    severity: "high",
    color: "#EA580C",
    path: "M 360 360 L 390 355 L 410 370 L 415 395 L 400 415 L 375 420 L 360 405 L 355 380 Z"
  },
  {
    name: "Gujarat",
    accidents: 19256,
    deaths: 6897,
    severity: "high",
    color: "#EA580C",
    path: "M 180 210 L 220 200 L 250 215 L 255 245 L 235 265 L 200 270 L 175 250 L 170 230 Z"
  },
  {
    name: "Bihar",
    accidents: 11037,
    deaths: 5183,
    severity: "medium",
    color: "#F59E0B", // amber-500
    path: "M 480 215 L 510 210 L 530 225 L 525 245 L 505 255 L 480 250 L 475 230 Z"
  },
  {
    name: "Telangana",
    accidents: 18671,
    deaths: 4891,
    severity: "medium",
    color: "#F59E0B",
    path: "M 360 320 L 385 315 L 405 330 L 410 350 L 395 365 L 370 370 L 355 355 L 350 335 Z"
  },
  {
    name: "Punjab",
    accidents: 5895,
    deaths: 3252,
    severity: "medium",
    color: "#F59E0B",
    path: "M 285 100 L 310 95 L 330 105 L 335 125 L 320 140 L 295 145 L 280 130 L 275 115 Z"
  },
  {
    name: "Haryana",
    accidents: 9664,
    deaths: 3509,
    severity: "medium",
    color: "#F59E0B",
    path: "M 310 120 L 335 115 L 355 125 L 360 145 L 345 160 L 320 165 L 305 150 L 300 135 Z"
  },
  {
    name: "Odisha",
    accidents: 11322,
    deaths: 4440,
    severity: "medium",
    color: "#F59E0B",
    path: "M 460 300 L 485 295 L 505 310 L 510 335 L 495 350 L 470 355 L 455 340 L 450 320 Z"
  },
  {
    name: "Kerala",
    accidents: 42276,
    deaths: 3516,
    severity: "low",
    color: "#10B981", // green-500
    path: "M 310 440 L 330 435 L 345 450 L 348 475 L 335 490 L 315 495 L 305 480 L 300 460 Z"
  }
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
      className="relative py-xl bg-gradient-to-b from-surface to-surface-container-low overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(0deg, #8DC313 0px, #8DC313 1px, transparent 1px, transparent 40px),
                             repeating-linear-gradient(90deg, #8DC313 0px, #8DC313 1px, transparent 1px, transparent 40px)`,
          }}
        />
      </div>

      <div className="max-w-[1440px] mx-auto px-margin relative z-10">
        {/* Section Header */}
        <motion.div
          className="mb-xl"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className="font-label-tech text-label-tech text-secondary tracking-[0.2em] uppercase block mb-xs"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.2 }}
          >
            The Real Problem
          </motion.span>
          <motion.h2
            className="font-h1 text-h1 uppercase text-primary"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.3 }}
          >
            Road Safety Crisis in India
          </motion.h2>
          <motion.p
            className="text-body-lg text-on-surface-variant mt-md max-w-3xl"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.4 }}
          >
            Every year, thousands of lives are lost on Indian roads. Our autonomous technology aims to
            dramatically reduce these numbers by eliminating human error.
          </motion.p>
        </motion.div>

        {/* Map and Data Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr,0.7fr] gap-lg items-start">
          {/* Indian Map */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <div className="bg-white border border-outline-variant/20 rounded-xl p-sm shadow-lg relative overflow-hidden">
              <Image
                src="/images/india-map.svg"
                alt="India Map with Road Accident Statistics"
                width={700}
                height={800}
                className="w-full h-auto"
                style={{ filter: "drop-shadow(0 2px 10px rgba(0,0,0,0.05))" }}
                priority={false}
              />

              {/* Overlay Legend */}
              <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg p-sm border border-outline-variant/20 shadow-md">
                <p className="font-label-tech text-[9px] uppercase text-outline mb-xs font-bold">
                  Severity Level
                </p>
                <div className="space-y-xs">
                  {[
                    { label: "Critical", color: "#DC2626" },
                    { label: "High", color: "#EA580C" },
                    { label: "Medium", color: "#F59E0B" },
                    { label: "Low", color: "#10B981" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center gap-xs">
                      <div
                        className="w-3 h-3 rounded-sm"
                        style={{ backgroundColor: item.color }}
                      />
                      <span className="font-label-tech text-[8px] text-outline">
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Map Info */}
            <div className="mt-sm flex items-center justify-center gap-xs">
              <span className="material-symbols-outlined text-secondary text-[16px]">
                location_on
              </span>
              <span className="font-label-tech text-[10px] uppercase text-outline">
                {stateData.length} Major States Tracked
              </span>
            </div>
          </motion.div>

          {/* State Data Panel - Compact */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <motion.div
              key={activeStateIndex}
              className="bg-primary text-on-primary rounded-xl p-md border-2 border-secondary shadow-xl relative overflow-hidden"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              aria-live="polite"
              aria-atomic="true"
            >
              {/* Background Pattern */}
              <div
                className="absolute inset-0 opacity-5"
                style={{
                  backgroundImage: `linear-gradient(rgba(141, 195, 19, 0.1) 1px, transparent 1px),
                                   linear-gradient(90deg, rgba(141, 195, 19, 0.1) 1px, transparent 1px)`,
                  backgroundSize: "20px 20px",
                }}
              />

              <div className="relative z-10">
                {/* State Name - Compact */}
                <motion.div
                  className="mb-md pb-sm border-b border-secondary/30"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <span className="font-label-tech text-[8px] text-secondary/70 uppercase tracking-widest block mb-1">
                    Current State
                  </span>
                  <h3 className="font-h3 text-h3 uppercase text-white leading-tight">
                    {activeState.name}
                  </h3>
                </motion.div>

                {/* Statistics - Compact */}
                <div className="space-y-md">
                  {/* Total Accidents */}
                  <motion.div
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <span className="font-label-tech text-[8px] text-secondary/70 uppercase tracking-wide block mb-1">
                      Annual Accidents
                    </span>
                    <div className="flex items-baseline gap-xs">
                      <motion.span
                        className="font-h2 text-[36px] font-black leading-none text-secondary"
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 200, delay: 0.4 }}
                      >
                        {activeState.accidents.toLocaleString()}
                      </motion.span>
                    </div>
                  </motion.div>

                  {/* Deaths */}
                  <motion.div
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    <span className="font-label-tech text-[8px] text-secondary/70 uppercase tracking-wide block mb-1">
                      Fatalities
                    </span>
                    <div className="flex items-baseline gap-xs">
                      <motion.span
                        className="font-h2 text-[32px] font-black leading-none text-white"
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 200, delay: 0.5 }}
                      >
                        {activeState.deaths.toLocaleString()}
                      </motion.span>
                      <span className="font-label-tech text-[9px] text-white/60 uppercase">
                        Lives Lost
                      </span>
                    </div>
                  </motion.div>

                  {/* Severity Indicator - Compact */}
                  <motion.div
                    className="flex items-center justify-between bg-white/5 rounded-lg p-sm border border-secondary/20"
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6 }}
                  >
                    <span className="font-label-tech text-[9px] text-secondary uppercase">
                      Severity
                    </span>
                    <div className="flex items-center gap-xs">
                      <div
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: activeState.color }}
                      />
                      <span className="font-label-tech text-[9px] text-white uppercase font-bold">
                        {activeState.severity}
                      </span>
                    </div>
                  </motion.div>
                </div>

                {/* Auto-cycling indicator - Compact */}
                <motion.div
                  className="mt-md pt-sm border-t border-secondary/20 flex items-center gap-xs justify-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                >
                  <motion.div
                    className="w-1.5 h-1.5 rounded-full bg-secondary"
                    animate={{ opacity: [1, 0.3, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                  <span className="font-label-tech text-[7px] text-secondary/60 uppercase tracking-widest">
                    Auto-cycling • 3s
                  </span>
                </motion.div>
              </div>
            </motion.div>

            {/* Navigation Dots - Compact */}
            <div className="flex items-center justify-center gap-1 mt-sm" role="tablist" aria-label="State statistics navigation">
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
                  className={`h-1.5 rounded-full transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary ${
                    activeStateIndex === index
                      ? "bg-secondary w-6"
                      : "bg-outline-variant w-1.5 hover:bg-secondary/50"
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
