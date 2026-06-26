"use client";

import { useState } from "react";

interface CareerCardProps {
  title: string;
  location: string;
}

export default function CareerCard({ title, location }: CareerCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`p-md rounded-lg flex justify-between items-center cursor-pointer transition-all duration-350 border ${
        isHovered
          ? "bg-primary border-secondary/30 shadow-lg"
          : "bg-white border-outline-variant/30 shadow-sm"
      }`}
      style={{
        boxShadow: isHovered
          ? "0 0 20px rgba(141, 195, 19, 0.15), 0 4px 12px rgba(0, 0, 0, 0.3)"
          : "0 1px 3px rgba(0, 0, 0, 0.1)",
        transition: "all 350ms cubic-bezier(0.4, 0, 0.2, 1)",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div>
        <h4
          className={`text-h3 transition-colors duration-350 ${
            isHovered ? "text-secondary" : "text-primary"
          }`}
        >
          {title}
        </h4>
        <p
          className={`text-body-md transition-colors duration-350 ${
            isHovered ? "text-white" : "text-on-surface-variant"
          }`}
        >
          {location}
        </p>
      </div>
      <svg
        className={`w-6 h-6 transition-all duration-350 ${
          isHovered ? "text-secondary" : "text-primary"
        }`}
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
      </svg>
    </div>
  );
}
