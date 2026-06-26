"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const techCategories = [
  { id: "sensors", label: "Sensors", icon: "sensors" },
  { id: "edgeai", label: "Edge AI", icon: "memory" },
  { id: "connectivity", label: "Connectivity", icon: "cell_tower" },
  { id: "datacollection", label: "Data Collection", icon: "database" },
];

const techContent = {
  sensors: {
    title: "Multi-Sensor Intelligence",
    description: "Our device combines cameras, GPS, accelerometer, gyroscope, and OBD-II to build a complete digital twin of every journey.",
    specs: [
      { label: "Camera", value: "1080p", icon: "photo_camera" },
      { label: "GPS Accuracy", value: "2m", icon: "gps_fixed" },
      { label: "Refresh Rate", value: "30 FPS", icon: "speed" },
    ]
  },
  edgeai: {
    title: "On-Device Processing",
    description: "Edge AI processes video and sensor data locally — detecting events in real-time without depending on network. Critical for India's patchy connectivity.",
    specs: [
      { label: "Processing", value: "4 TOPS", icon: "memory" },
      { label: "Latency", value: "< 100ms", icon: "bolt" },
      { label: "Storage", value: "256GB", icon: "storage" },
    ]
  },
  connectivity: {
    title: "Always Connected",
    description: "4G LTE with auto-fallback to 2G. Data syncs automatically when connection restores — works across highways, rural stretches, and dead zones.",
    specs: [
      { label: "Primary", value: "4G LTE", icon: "signal_cellular_alt" },
      { label: "Fallback", value: "2G/3G", icon: "network_cell" },
      { label: "Sync", value: "Auto-resume", icon: "sync" },
    ]
  },
  datacollection: {
    title: "Safety Data Harvesting",
    description: "Every trip generates labeled data — road quality, traffic density, sign detection, pedestrian behavior, weather. This trains our autonomous driving AI.",
    specs: [
      { label: "Data Rate", value: "30+ pts/sec", icon: "timeline" },
      { label: "Storage", value: "Cloud + Edge", icon: "cloud_upload" },
      { label: "Labels", value: "Auto-generated", icon: "label" },
    ]
  },
};

export default function TechShowcase() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeTab, setActiveTab] = useState("sensors");

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
            Technology That Sees Everything
          </h2>
        </motion.div>

        {/* IoT Device Image */}
        <motion.div
          className="mb-12 flex justify-center"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden shadow-xl border border-outline-variant/20">
            <Image
              src="/images/home-iot-device.png"
              alt="HAVONE IoT device — close-up product shot with green LED ring"
              width={1024}
              height={1024}
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Categories and Content */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-5 md:gap-6 lg:gap-7 items-stretch"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.2 }}
        >
          {/* Left - Categories */}
          <div className="flex flex-col gap-3">
            {techCategories.map((category, i) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`w-full flex items-center gap-4 px-5 md:px-6 py-4 md:py-5 rounded-xl font-label-tech text-label-tech uppercase tracking-widest transition-all border-2 flex-1 ${
                  activeTab === category.id
                    ? "bg-primary text-white border-secondary shadow-lg"
                    : "bg-white text-on-surface border-outline-variant/30 hover:border-secondary/50"
                }`}
                whileHover={{ scale: 1.02, x: 5 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ delay: 0.3 + i * 0.08 }}
              >
                <div className={`w-11 h-11 md:w-12 md:h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${
                  activeTab === category.id ? "bg-secondary" : "bg-secondary/10"
                }`}>
                  <span
                    className={`material-symbols-outlined text-xl md:text-2xl ${
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
            className="bg-white border-2 border-outline-variant/30 rounded-2xl p-6 md:p-7 lg:p-8 shadow-xl flex flex-col"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Header */}
            <motion.div
              className="mb-5 pb-5 border-b-2 border-secondary"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex items-center gap-3 mb-3">
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
              className="font-body-lg text-body-lg text-on-surface-variant mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {techContent[activeTab as keyof typeof techContent].description}
            </motion.p>

            {/* Specs */}
            <div className="space-y-3 mb-6 flex-1">
              {techContent[activeTab as keyof typeof techContent].specs.map((spec, i) => (
                <motion.div
                  key={i}
                  className="flex items-center justify-between p-3.5 md:p-4 bg-surface-container-low rounded-lg border border-outline-variant/20 hover:border-secondary/30 transition-all"
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
