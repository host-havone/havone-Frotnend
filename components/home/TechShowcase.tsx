"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Link from "next/link";

const techCategories = [
  { id: "perception", label: "Perception", icon: "visibility" },
  { id: "processing", label: "Processing", icon: "memory" },
  { id: "connectivity", label: "Connectivity", icon: "cell_tower" },
  { id: "safety", label: "Safety", icon: "shield" },
];

const techContent = {
  perception: {
    title: "360° Environmental Awareness",
    description: "Multi-sensor fusion combining LIDAR, radar, and cameras for complete situational understanding in all conditions",
    specs: [
      { label: "LIDAR Range", value: "300m", icon: "radar" },
      { label: "Camera Resolution", value: "12x Ultra-HD", icon: "photo_camera" },
      { label: "Update Rate", value: "60Hz", icon: "speed" },
    ]
  },
  processing: {
    title: "Neural Core V3 Architecture",
    description: "Custom silicon delivering 800 TOPS of AI processing power with liquid-cooled thermal management",
    specs: [
      { label: "Processing Power", value: "800 TOPS", icon: "memory" },
      { label: "Latency", value: "< 2ms", icon: "bolt" },
      { label: "Energy Efficiency", value: "95%", icon: "battery_charging_full" },
    ]
  },
  connectivity: {
    title: "5G Slicing & V2X Protocol",
    description: "Ultra-low latency communication networks enabling vehicle-to-everything interaction",
    specs: [
      { label: "Network Latency", value: "< 15ms", icon: "network_ping" },
      { label: "Bandwidth", value: "10 Gbps", icon: "speed" },
      { label: "Range", value: "5km V2V", icon: "cell_tower" },
    ]
  },
  safety: {
    title: "Redundant Safety Systems",
    description: "Multi-layer fail-safe architecture with 360° collision avoidance and real-time monitoring",
    specs: [
      { label: "System Uptime", value: "99.9%", icon: "check_circle" },
      { label: "Safe Miles", value: "150M+", icon: "route" },
      { label: "Incidents", value: "Zero", icon: "shield" },
    ]
  },
};

export default function TechShowcase() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeTab, setActiveTab] = useState("perception");

  return (
    <section ref={ref} className="py-20 px-8 bg-surface-container-low">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-label-tech text-label-tech text-secondary uppercase tracking-widest">
            Technology Deep Dive
          </span>
          <h2 className="font-h1 text-h1 text-primary mt-4">
            ENGINEERING THE AUTONOMOUS FUTURE
          </h2>
        </motion.div>

        {/* Categories and Content */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-12 gap-8"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.2 }}
        >
          {/* Left - Categories */}
          <div className="lg:col-span-4 space-y-4">
            {techCategories.map((category, i) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`w-full flex items-center gap-4 px-6 py-4 rounded-xl font-label-tech text-label-tech uppercase tracking-widest transition-all border-2 ${
                  activeTab === category.id
                    ? "bg-primary text-white border-secondary shadow-lg"
                    : "bg-white text-on-surface border-outline-variant/30 hover:border-secondary/50"
                }`}
                whileHover={{ scale: 1.02, x: 5 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ delay: 0.3 + i * 0.1 }}
              >
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                  activeTab === category.id ? "bg-secondary" : "bg-secondary/10"
                }`}>
                  <span
                    className={`material-symbols-outlined text-2xl ${
                      activeTab === category.id ? "text-primary" : "text-secondary"
                    }`}
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    {category.icon}
                  </span>
                </div>
                <span className="flex-1 text-left">{category.label}</span>
                {activeTab === category.id && (
                  <motion.span
                    className="material-symbols-outlined text-secondary"
                    initial={{ x: -10, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                  >
                    chevron_right
                  </motion.span>
                )}
              </motion.button>
            ))}
          </div>

          {/* Right - Content */}
          <motion.div
            key={activeTab}
            className="lg:col-span-8 bg-white border-2 border-outline-variant/30 rounded-2xl p-8 shadow-xl"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Header */}
            <motion.div
              className="mb-6 pb-6 border-b-2 border-secondary"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-secondary/10 border-2 border-secondary/20 flex items-center justify-center">
                  <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>
                    {techCategories.find(c => c.id === activeTab)?.icon}
                  </span>
                </div>
                <span className="font-label-tech text-label-tech text-on-surface-variant uppercase">
                  Technology Module
                </span>
              </div>
              <h3 className="font-h2 text-h2 text-primary uppercase">
                {techContent[activeTab as keyof typeof techContent].title}
              </h3>
            </motion.div>

            {/* Description */}
            <motion.p
              className="font-body-lg text-body-lg text-on-surface-variant mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {techContent[activeTab as keyof typeof techContent].description}
            </motion.p>

            {/* Specs */}
            <div className="space-y-4 mb-8">
              {techContent[activeTab as keyof typeof techContent].specs.map((spec, i) => (
                <motion.div
                  key={i}
                  className="flex items-center justify-between p-4 bg-surface-container-low rounded-lg border border-outline-variant/20 hover:border-secondary/30 transition-all"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  whileHover={{ x: 5 }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-secondary/10 border border-secondary/20 flex items-center justify-center">
                      <span className="material-symbols-outlined text-secondary text-lg">
                        {spec.icon}
                      </span>
                    </div>
                    <span className="font-label-tech text-label-tech text-on-surface-variant uppercase">
                      {spec.label}
                    </span>
                  </div>
                  <span className="font-h3 text-h3 text-secondary font-bold">
                    {spec.value}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <Link href="/technology">
              <motion.button
                className="w-full bg-primary text-white px-8 py-4 font-label-tech text-label-tech uppercase tracking-widest hover:bg-secondary hover:text-primary transition-all flex items-center justify-center gap-3 rounded-lg border-2 border-primary hover:border-secondary"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                Explore Full Technology Stack
                <motion.span className="material-symbols-outlined" whileHover={{ x: 5 }}>
                  arrow_forward
                </motion.span>
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
