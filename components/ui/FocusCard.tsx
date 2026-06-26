"use client";

import { useState } from "react";
import Image from "next/image";

interface FocusCardProps {
  icon: string;
  title: string;
  description: string;
  progress: number;
}

const cardImages: Record<string, string> = {
  "Sensor Intelligence": "/images/focus-sensor-intelligence.png",
  "AI & Machine Learning": "/images/focus-ai-ml.png",
  "Data-First Autonomy": "/images/focus-autonomy-data.png",
};

export default function FocusCard({
  icon,
  title,
  description,
  progress,
}: FocusCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const backgroundImage = cardImages[title] || "";

  return (
    <div
      className="relative h-[400px] rounded-xl overflow-hidden border border-white/10 shadow-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Layer 1: Background Image - Always Sharp */}
      <div className="absolute inset-0 z-0">
        {backgroundImage && (
          <Image
            src={backgroundImage}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{
              transform: isHovered ? "scale(1.03)" : "scale(1)",
              transition: "transform 650ms cubic-bezier(0.22, 1, 0.36, 1)",
            }}
          />
        )}
      </div>

      {/* Layer 2: Content Panel - Shutter Effect */}
      <div
        className="absolute inset-0 z-10 flex flex-col p-lg"
        style={{
          background: "linear-gradient(to bottom, rgba(39, 39, 42, 0.85), rgba(24, 24, 27, 0.92))",
          transform: isHovered ? "translateY(-100%)" : "translateY(0)",
          height: isHovered ? "0%" : "100%",
          transition: "all 650ms cubic-bezier(0.22, 1, 0.36, 1)",
          clipPath: isHovered ? "inset(0 0 0 0)" : "inset(0)",
        }}
      >
        {/* Icon & Title */}
        <div className="mb-md">
          <span className="material-symbols-outlined text-secondary text-[48px] drop-shadow-lg block mb-3">
            {icon}
          </span>
          <h3 className="text-white font-h3 text-h3 drop-shadow-md">{title}</h3>
        </div>

        {/* Description & Progress */}
        <div className="flex-1">
          <p className="text-body-md text-slate-200 leading-relaxed drop-shadow-sm max-w-xs mb-3">
            {description}
          </p>
          <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
            <div
              className="bg-secondary h-full rounded-full"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Bottom Accent Line */}
        <div className="h-1 w-8 bg-secondary rounded-full drop-shadow-lg" />
      </div>
    </div>
  );
}
