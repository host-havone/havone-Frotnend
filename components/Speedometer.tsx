"use client";

import { useEffect, useRef, useState, useMemo } from "react";
import { motion } from "framer-motion";

export default function Speedometer() {
  const [speed, setSpeed] = useState(0);
  const lastScrollY = useRef(0);
  const lastTime = useRef(Date.now());
  const rafRef = useRef<number | undefined>(undefined);
  const isScrolling = useRef(false);
  const scrollTimeout = useRef<NodeJS.Timeout | undefined>(undefined);

  useEffect(() => {
    const handleScroll = () => {
      isScrolling.current = true;

      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
      scrollTimeout.current = setTimeout(() => {
        isScrolling.current = false;
        setSpeed(0);
      }, 150);

      if (!rafRef.current) {
        const update = () => {
          const currentScrollY = window.scrollY;
          const currentTime = Date.now();
          const distance = Math.abs(currentScrollY - lastScrollY.current);
          const timeDiff = currentTime - lastTime.current;

          if (timeDiff > 0) {
            const calculatedSpeed = distance / (timeDiff / 16);
            const displaySpeed = Math.min(Math.round(calculatedSpeed), 99);
            setSpeed(displaySpeed);
          }

          lastScrollY.current = currentScrollY;
          lastTime.current = currentTime;

          if (isScrolling.current) {
            rafRef.current = requestAnimationFrame(update);
          } else {
            rafRef.current = undefined;
          }
        };
        rafRef.current = requestAnimationFrame(update);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    };
  }, []);

  const { ticks, labels } = useMemo(() => {
    const ticks = [];
    const labels = [];
    const maxSpeed = 100;
    const totalMarks = 21;

    for (let i = 0; i <= totalMarks; i++) {
      const speedValue = (i * maxSpeed) / totalMarks;
      const angle = -135 + (i * 270) / totalMarks;
      const isMainTick = speedValue % 10 === 0;
      const isMinorTick = speedValue % 5 === 0 && !isMainTick;

      if (isMainTick || isMinorTick) {
        const tickLength = isMainTick ? 10 : 6;
        const tickWidth = isMainTick ? 2 : 1;
        const tickColor = isMainTick ? "#8DC313" : "rgba(141, 195, 19, 0.4)";

        ticks.push(
          <line
            key={`tick-${i}`}
            x1="50"
            y1="10"
            x2="50"
            y2={10 + tickLength}
            stroke={tickColor}
            strokeWidth={tickWidth}
            transform={`rotate(${angle} 50 50)`}
            strokeLinecap="round"
          />
        );

        if (speedValue % 5 === 0) {
          const labelRadius = 30;
          const angleRad = (angle * Math.PI) / 180;
          const labelX = 50 + labelRadius * Math.sin(angleRad);
          const labelY = 50 - labelRadius * Math.cos(angleRad);

          labels.push(
            <text
              key={`label-${i}`}
              x={labelX}
              y={labelY}
              fill={isMainTick ? "#8DC313" : "rgba(141, 195, 19, 0.6)"}
              fontSize={isMainTick ? "5" : "4"}
              fontWeight={isMainTick ? "bold" : "normal"}
              textAnchor="middle"
              dominantBaseline="middle"
              style={{ fontFamily: "Arial, sans-serif" }}
            >
              {Math.round(speedValue)}
            </text>
          );
        }
      }
    }
    return { ticks, labels };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 0.7, scale: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="fixed bottom-4 left-4 sm:bottom-8 sm:left-8 z-[60] bg-[#0c100b]/85 backdrop-blur-xl p-3 sm:p-4 rounded-full border border-[#8DC313]/20 shadow-2xl flex flex-col items-center pointer-events-none overflow-visible w-28 sm:w-26 "
      style={{
        boxShadow: "0 0 30px rgba(141, 195, 19, 0.05), 0 15px 30px rgba(0, 0, 0, 0.5), inset 0 1px 1px rgba(255,255,255,0.1)"
      }}
    >
      <div className="relative w-full aspect-square flex items-center justify-center">
        <svg className="w-full h-full drop-shadow-[0_0_12px_rgba(141,195,19,0.15)]" viewBox="0 0 100 100">
          <defs>
            <linearGradient id="gaugeGlow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8DC313" stopOpacity="1" />
              <stop offset="100%" stopColor="#6FA00F" stopOpacity="1" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>

          <circle cx="20" cy="20" r="25" fill="none" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="0.2" />

          <path
            d="M 20.4 79.6 A 42 42 0 1 1 79.6 79.6"
            fill="none"
            stroke="rgba(255, 255, 255, 0.08)"
            strokeWidth="6"
            strokeLinecap="round"
          />

          <motion.path
            d="M 20.4 79.6 A 42 42 0 1 1 79.6 79.6"
            fill="none"
            stroke="url(#gaugeGlow)"
            strokeWidth="6"
            strokeLinecap="round"
            strokeDasharray="198"
            filter="url(#glow)"
            initial={{ strokeDashoffset: 198 }}
            animate={{ strokeDashoffset: 198 - (Math.min(speed, 100) / 100) * 198 }}
            transition={{ duration: 0.2, ease: "linear" }}
          />

          <g>{ticks}</g>
          <g>{labels}</g>

          <circle cx="50" cy="50" r="18" fill="rgba(0, 0, 0, 0.6)" stroke="#8DC313" strokeWidth="1" />

          <text
            x="50"
            y="48"
            fill="#8DC313"
            fontSize="16"
            fontWeight="bold"
            textAnchor="middle"
            dominantBaseline="middle"
            style={{ fontFamily: "Arial, sans-serif", filter: "drop-shadow(0 0 4px #8DC313)" }}
          >
            {speed}
          </text>

          <text
            x="50"
            y="58"
            fill="rgba(141, 195, 19, 0.7)"
            fontSize="4"
            fontWeight="normal"
            textAnchor="middle"
            dominantBaseline="middle"
            style={{ fontFamily: "Arial, sans-serif", letterSpacing: "0.5px" }}
          >
            KM/H
          </text>

          <circle
            cx="50"
            cy="50"
            r="15"
            fill="none"
            stroke="#8DC313"
            strokeWidth="0.5"
            opacity="0.1"
            style={{ transformOrigin: "50px 50px" }}
          />
        </svg>
      </div>
    </motion.div>
  );
}
