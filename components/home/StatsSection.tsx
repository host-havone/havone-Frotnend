"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  {
    value: "30+",
    label: "Data Points Per Second",
    description: "Captured from every journey",
    icon: "timeline"
  },
  {
    value: "4G + 2G",
    label: "Always Connected",
    description: "Even in rural India",
    icon: "cell_tower"
  },
  {
    value: "< 100ms",
    label: "Edge AI Response",
    description: "Real-time safety detection",
    icon: "bolt"
  },
  {
    value: "24/7",
    label: "Live Monitoring",
    description: "Your fleet never sleeps",
    icon: "visibility"
  },
];

export default function StatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 px-8 bg-primary text-white relative overflow-hidden">
      {/* Background Pattern - uses CSS animation for GPU compositing */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0 animate-[drift_20s_linear_infinite]"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #8DC313 1px, transparent 0)`,
            backgroundSize: "40px 40px"
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-label-tech text-label-tech text-secondary uppercase tracking-widest">
            Built for Indian Roads
          </span>
          <h2 className="font-h1 text-h1 mt-4">
            Device Capabilities
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              className="relative group"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
            >
              <motion.div
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:bg-white/10 transition-all h-full"
                whileHover={{ y: -8, borderColor: "rgba(141, 195, 19, 0.5)" }}
              >
                <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-secondary/30 transition-colors">
                  <span className="material-symbols-outlined text-secondary text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                    {stat.icon}
                  </span>
                </div>

                <h3 className="font-h1 text-5xl leading-none text-secondary mb-4">
                  {stat.value}
                </h3>

                <p className="font-h3 text-h3 text-white mb-2">
                  {stat.label}
                </p>

                <p className="font-label-tech text-label-tech text-white/60 uppercase">
                  {stat.description}
                </p>

                <motion.div
                  className="absolute bottom-0 left-0 h-1 bg-secondary"
                  initial={{ width: "0%" }}
                  animate={isInView ? { width: "100%" } : { width: "0%" }}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.8 }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.5 }}
        >
          <p className="font-body-lg text-body-lg text-white/80 mb-6">
            No fake stats. Just real device capabilities, ready for Indian roads.
          </p>
          <motion.a
            href="/contact"
            className="inline-flex items-center gap-3 font-label-tech text-label-tech uppercase tracking-widest text-secondary border-b-2 border-secondary pb-1 hover:text-white hover:border-white transition-all"
            whileHover={{ x: 5 }}
          >
            Partner With Us
            <span className="material-symbols-outlined">arrow_forward</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
