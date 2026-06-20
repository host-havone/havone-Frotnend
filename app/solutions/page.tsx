"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Speedometer from "@/components/Speedometer";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.3, ease: "easeOut" }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.05
    }
  }
};

function AnimatedSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial="initial"
      animate={isInView ? "animate" : "initial"}
      variants={fadeInUp}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function SolutionsPage() {
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });

  return (
    <>
      <Speedometer />
      <Header />
      <main className="pt-[100px]">
        {/* Hero Section */}
        <section ref={heroRef} className="px-margin mb-xl py-lg">
          <motion.div
            className="max-w-[800px]"
            initial={{ opacity: 0, y: 20 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <motion.span
              className="font-label-tech text-label-tech text-secondary tracking-widest uppercase mb-base block"
              initial={{ opacity: 0, x: -20 }}
              animate={isHeroInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Operational Excellence
            </motion.span>
            <motion.h1
              className="font-h1 text-h1 text-primary mb-md"
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              Future-Proof Solutions for Global Logistics
            </motion.h1>
            <motion.p
              className="font-body-lg text-body-lg text-on-surface-variant"
              initial={{ opacity: 0 }}
              animate={isHeroInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              HAVONE MOBILITY integrates autonomous intelligence across the mobility spectrum, optimizing fleet performance through machine precision and human-centric safety protocols.
            </motion.p>
          </motion.div>
        </section>

        {/* Solutions Bento Grid */}
        <section className="px-margin py-xl bg-surface-container-low border-y border-outline-variant/10">
          <motion.div
            className="grid grid-cols-12 gap-gutter"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Fleet Managers Card */}
            <AnimatedSection className="col-span-12 lg:col-span-7">
              <motion.div
                className="group relative overflow-hidden bg-white border border-outline-variant/30 rounded-lg p-lg flex flex-col justify-between min-h-[500px] shadow-sm"
                whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative z-10">
                  <div className="flex items-center gap-xs mb-md">
                    <span className="material-symbols-outlined text-secondary">hub</span>
                    <span className="font-label-tech text-label-tech uppercase tracking-wider text-on-surface-variant">
                      Enterprise Solution
                    </span>
                  </div>
                  <h2 className="font-h2 text-h2 text-primary mb-md">For Fleet Managers</h2>
                  <p className="font-body-md text-body-md text-on-surface-variant max-w-[400px] mb-lg">
                    Centralize command, minimize downtime, and maximize asset utilization with real-time autonomous oversight.
                  </p>
                  <motion.div
                    className="grid grid-cols-2 gap-md"
                    variants={staggerContainer}
                  >
                    <motion.div variants={fadeInUp} className="border-l-2 border-secondary pl-md">
                      <p className="font-h3 text-h3 text-primary">32%</p>
                      <p className="font-label-tech text-label-tech text-on-surface-variant uppercase">Opex Reduction</p>
                    </motion.div>
                    <motion.div variants={fadeInUp} className="border-l-2 border-secondary pl-md">
                      <p className="font-h3 text-h3 text-primary">99.9%</p>
                      <p className="font-label-tech text-label-tech text-on-surface-variant uppercase">Safety Uptime</p>
                    </motion.div>
                  </motion.div>
                </div>
                <div className="absolute inset-0 z-0">
                  <motion.div
                    className="w-full h-full bg-gradient-to-br from-secondary/5 to-transparent"
                    initial={{ opacity: 0.1 }}
                    whileHover={{ opacity: 0.2 }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
                <motion.button
                  className="relative z-10 self-start mt-lg flex items-center gap-base font-label-tech text-label-tech uppercase border-b border-primary pb-xs hover:text-secondary hover:border-secondary transition-all"
                  whileHover={{ x: 5 }}
                >
                  Explore Platform <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </motion.button>
              </motion.div>
            </AnimatedSection>

            {/* Speedometer Telemetry Card */}
            <AnimatedSection className="col-span-12 lg:col-span-5">
              <motion.div
                className="bg-primary rounded-lg p-lg flex flex-col justify-center items-center text-center overflow-hidden relative shadow-xl min-h-[500px]"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative z-10">
                  <div className="mb-lg relative w-48 h-48 mx-auto">
                    {/* Rotating border circles */}
                    <motion.div
                      className="absolute inset-0 rounded-full border-4 border-transparent"
                      style={{
                        borderTopColor: "#8DC313",
                        borderRightColor: "#8DC313",
                        borderBottomColor: "transparent",
                        borderLeftColor: "transparent",
                      }}
                      animate={{ rotate: 360 }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    />
                    <motion.div
                      className="absolute inset-2 rounded-full border-2 border-transparent"
                      style={{
                        borderTopColor: "transparent",
                        borderRightColor: "transparent",
                        borderBottomColor: "rgba(141, 195, 19, 0.5)",
                        borderLeftColor: "rgba(141, 195, 19, 0.5)",
                      }}
                      animate={{ rotate: -360 }}
                      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    />

                    {/* Main content circle */}
                    <div className="absolute inset-3 rounded-full flex items-center justify-center"
                         style={{ boxShadow: "0 0 40px rgba(141, 195, 19, 0.3)" }}>
                      <div className="text-center">
                        <motion.p
                          className="font-h1 text-h1 text-secondary-fixed-dim leading-none"
                          animate={{ scale: [1, 1.05, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          88
                        </motion.p>
                        <p className="font-label-tech text-label-tech text-secondary-fixed-dim uppercase tracking-widest mt-xs">
                          KM/H
                        </p>
                      </div>
                    </div>
                  </div>
                  <h3 className="font-h3 text-h3 text-white mb-base">Real-Time Telemetry</h3>
                  <div className="flex gap-sm justify-center">
                    <motion.div
                      className="bg-white/10 px-sm py-xs rounded flex items-center gap-xs"
                      whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.15)" }}
                    >
                      <motion.span
                        className="w-2 h-2 rounded-full bg-secondary-fixed-dim"
                        animate={{ opacity: [1, 0.3, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      />
                      <span className="font-label-tech text-label-tech text-white uppercase text-[10px]">Lidar: Active</span>
                    </motion.div>
                    <motion.div
                      className="bg-white/10 px-sm py-xs rounded flex items-center gap-xs"
                      whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.15)" }}
                    >
                      <motion.span
                        className="w-2 h-2 rounded-full bg-secondary-fixed-dim"
                        animate={{ opacity: [1, 0.3, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
                      />
                      <span className="font-label-tech text-label-tech text-white uppercase text-[10px]">Signal: 5G</span>
                    </motion.div>
                  </div>
                </div>
                <div
                  className="absolute inset-0 opacity-20 pointer-events-none"
                  style={{ backgroundImage: "radial-gradient(circle at 2px 2px, #8DC313 1px, transparent 0)", backgroundSize: "24px 24px" }}
                />
              </motion.div>
            </AnimatedSection>

            {/* Long-Haul Logistics */}
            <AnimatedSection className="col-span-12 lg:col-span-6">
              <motion.div
                className="group bg-white border border-outline-variant/30 rounded-lg p-lg flex flex-col justify-between shadow-sm"
                whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                transition={{ duration: 0.3 }}
              >
                <div>
                  <div className="flex items-center gap-xs mb-md">
                    <span className="material-symbols-outlined text-secondary">local_shipping</span>
                    <span className="font-label-tech text-label-tech uppercase tracking-wider text-on-surface-variant">
                      Cross-Continental
                    </span>
                  </div>
                  <h2 className="font-h2 text-h2 text-primary mb-md">For Long-Haul Logistics</h2>
                  <p className="font-body-md text-body-md text-on-surface-variant mb-lg">
                    Eliminate fatigue and optimize fuel efficiency on transcontinental routes through Level 4 autonomous trucking.
                  </p>
                  <div className="flex items-center gap-lg mb-lg">
                    <div>
                      <p className="font-h3 text-h3 text-primary">2.4x</p>
                      <p className="font-label-tech text-label-tech text-on-surface-variant uppercase">Route Density</p>
                    </div>
                    <div>
                      <p className="font-h3 text-h3 text-primary">-18%</p>
                      <p className="font-label-tech text-label-tech text-on-surface-variant uppercase">Fuel Consumption</p>
                    </div>
                  </div>
                </div>
                <div className="h-64 w-full rounded overflow-hidden bg-surface-container">
                  <motion.div
                    className="w-full h-full bg-gradient-to-br from-primary/10 to-secondary/10"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              </motion.div>
            </AnimatedSection>

            {/* Urban Transit */}
            <AnimatedSection className="col-span-12 lg:col-span-6">
              <motion.div
                className="group bg-white border border-outline-variant/30 rounded-lg p-lg flex flex-col justify-between shadow-sm"
                whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                transition={{ duration: 0.3 }}
              >
                <div>
                  <div className="flex items-center gap-xs mb-md">
                    <span className="material-symbols-outlined text-secondary">location_city</span>
                    <span className="font-label-tech text-label-tech uppercase tracking-wider text-on-surface-variant">
                      Smart City Integration
                    </span>
                  </div>
                  <h2 className="font-h2 text-h2 text-primary mb-md">For Urban Transit</h2>
                  <p className="font-body-md text-body-md text-on-surface-variant mb-lg">
                    Seamlessly integrated shuttles that solve the &apos;last-mile&apos; challenge while reducing city-wide congestion.
                  </p>
                  <div className="flex items-center gap-lg mb-lg">
                    <div>
                      <p className="font-h3 text-h3 text-primary">0</p>
                      <p className="font-label-tech text-label-tech text-on-surface-variant uppercase">Direct Emissions</p>
                    </div>
                    <div>
                      <p className="font-h3 text-h3 text-primary">4.2min</p>
                      <p className="font-label-tech text-label-tech text-on-surface-variant uppercase">Avg Wait Time</p>
                    </div>
                  </div>
                </div>
                <div className="h-64 w-full rounded overflow-hidden bg-surface-container">
                  <motion.div
                    className="w-full h-full bg-gradient-to-br from-secondary/10 to-primary/10"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              </motion.div>
            </AnimatedSection>
          </motion.div>
        </section>

        {/* Technical Specification Section */}
        <AnimatedSection>
          <section className="px-margin py-xl bg-white">
            <div className="max-w-[1440px] mx-auto">
              <div className="flex flex-col md:flex-row justify-between items-end gap-md mb-lg">
                <div className="max-w-[600px]">
                  <span className="font-label-tech text-label-tech text-secondary tracking-widest uppercase mb-base block">
                    Precision Engine
                  </span>
                  <h2 className="font-h2 text-h2 text-primary">The HAVONE Core API</h2>
                </div>
                <motion.button
                  className="bg-primary text-on-primary px-lg py-md rounded-none font-label-tech text-label-tech uppercase tracking-widest hover:border-b-4 hover:border-secondary transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Download Safety Report
                </motion.button>
              </div>
              <motion.div
                className="overflow-x-auto border border-outline-variant/20 rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-surface-container-low border-b border-primary/10">
                      <th className="px-md py-md font-label-tech text-label-tech text-on-surface-variant uppercase">Parameter</th>
                      <th className="px-md py-md font-label-tech text-label-tech text-on-surface-variant uppercase">Performance Metric</th>
                      <th className="px-md py-md font-label-tech text-label-tech text-on-surface-variant uppercase">Status</th>
                    </tr>
                  </thead>
                  <tbody className="font-body-md text-primary">
                    {[
                      { param: "LIDAR Precision Range", metric: "300m @ 0.05° resolution" },
                      { param: "Latency (E2E)", metric: "< 15ms across 5G slicing" },
                      { param: "Collision Mitigation", metric: "360° coverage with redundant AI layers" }
                    ].map((row, i) => (
                      <motion.tr
                        key={i}
                        className="border-b border-primary/5 hover:bg-surface-container transition-colors"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                      >
                        <td className="px-md py-md font-bold">{row.param}</td>
                        <td className="px-md py-md">
                          {row.metric.split("@").map((part, idx) =>
                            idx === 1 ? <span key={idx} className="text-secondary">@{part}</span> : part
                          )}
                        </td>
                        <td className="px-md py-md flex items-center gap-xs">
                          <motion.span
                            className="w-2 h-2 bg-secondary rounded-full"
                            animate={{ opacity: [1, 0.5, 1] }}
                            transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                          />
                          NOMINAL
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </motion.div>
            </div>
          </section>
        </AnimatedSection>

        {/* CTA Section */}
        <AnimatedSection>
          <section className="px-margin py-xl text-center bg-surface-container-low border-t border-outline-variant/10">
            <motion.h2
              className="font-h1 text-h1 text-primary mb-md"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              Ready to deploy the future?
            </motion.h2>
            <motion.p
              className="font-body-lg text-body-lg text-on-surface-variant max-w-[600px] mx-auto mb-lg"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Join the world&apos;s leading logistics providers in transitioning to fully autonomous operations with HAVONE MOBILITY.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-md justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <motion.button
                className="bg-secondary text-on-primary font-label-tech text-label-tech uppercase px-xl py-md tracking-widest font-bold transition-transform shadow-lg shadow-secondary/20"
                whileHover={{ scale: 1.05, boxShadow: "0 15px 40px rgba(141, 195, 19, 0.3)" }}
                whileTap={{ scale: 0.95 }}
              >
                Schedule A Pilot
              </motion.button>
              <motion.button
                className="border-2 border-primary text-primary font-label-tech text-label-tech uppercase px-xl py-md tracking-widest hover:bg-primary hover:text-white transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Talk To An Expert
              </motion.button>
            </motion.div>
          </section>
        </AnimatedSection>
      </main>
      <Footer />
    </>
  );
}
