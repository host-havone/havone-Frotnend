"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

const features = [
  {
    icon: "hub",
    title: "Fleet Management",
    description: "Centralized command and control for autonomous vehicle fleets across global operations",
    stats: "2,400+ Units",
    link: "/solutions"
  },
  {
    icon: "visibility",
    title: "Advanced Sensors",
    description: "360° perception with LIDAR, radar, and camera fusion for unmatched situational awareness",
    stats: "0.03mm Precision",
    link: "/technology"
  },
  {
    icon: "psychology",
    title: "AI Intelligence",
    description: "Neural networks processing 1.2 petabytes per second for real-time decision making",
    stats: "< 2ms Latency",
    link: "/technology"
  },
  {
    icon: "security",
    title: "Safety First",
    description: "Multi-layer redundancy systems ensuring 99.9% uptime with zero-compromise protocols",
    stats: "150M+ Safe Miles",
    link: "/about"
  },
];

export default function FeaturesGrid() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-label-tech text-label-tech text-secondary uppercase tracking-widest">
            Core Capabilities
          </span>
          <h2 className="font-h1 text-h1 text-primary mt-4 mb-6">
            Precision Engineering Meets Machine Intelligence
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl mx-auto">
            Our autonomous systems combine cutting-edge hardware with advanced AI to deliver
            unparalleled performance and safety in real-world conditions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
            >
              <Link href={feature.link}>
                <motion.div
                  className="h-full bg-white border border-outline-variant/20 rounded-xl p-8 hover:border-secondary/50 hover:shadow-xl transition-all duration-300 group cursor-pointer"
                  whileHover={{ y: -8 }}
                >
                  <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-secondary/20 transition-colors">
                    <span className="material-symbols-outlined text-secondary text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                      {feature.icon}
                    </span>
                  </div>

                  <h3 className="font-h3 text-h3 text-primary mb-4 group-hover:text-secondary transition-colors">
                    {feature.title}
                  </h3>

                  <p className="font-body-md text-body-md text-on-surface-variant mb-6 leading-relaxed">
                    {feature.description}
                  </p>

                  <div className="border-t border-outline-variant/20 pt-4 flex items-center justify-between">
                    <span className="font-label-tech text-label-tech text-secondary uppercase font-bold">
                      {feature.stats}
                    </span>
                    <span className="material-symbols-outlined text-primary group-hover:text-secondary group-hover:translate-x-1 transition-transform">
                      arrow_forward
                    </span>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
