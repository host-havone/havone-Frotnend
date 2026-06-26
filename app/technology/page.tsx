"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
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

export default function TechnologyPage() {
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });

  return (
    <>
      <Speedometer />
      <Header />
      <main className="pt-xl">
        {/* Hero Section: Centered Interactive */}
        <section ref={heroRef} className="h-[100dvh] w-full flex items-center justify-center relative overflow-hidden border-b border-outline-variant/10">
          {/* Background with gradient overlay */}
          <div className="absolute inset-0 z-0 bg-gradient-to-br from-primary via-primary to-primary/95" />

          {/* Background image with parallax effect */}
          <motion.div
            className="absolute inset-0 z-0 opacity-30"
            initial={{ opacity: 0 }}
            animate={isHeroInView ? { opacity: 0.3 } : { opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="/images/tech-hero-device.png"
              alt="AI-powered fleet network visualization"
              fill
              className="object-cover"
              priority
            />
          </motion.div>

          {/* Centered content - Interactive structure */}
          <div className="relative z-10 w-full h-full flex flex-col items-center justify-center px-margin py-xl text-center">
            <motion.div
              className="space-y-4 md:space-y-6 max-w-3xl"
              initial={{ opacity: 0, y: -40 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -40 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              {/* Eyebrow - Centered */}
              <motion.div
                className="flex items-center justify-center gap-2"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isHeroInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ delay: 0.1, duration: 0.5 }}
              >
                <div className="w-6 h-px bg-secondary" />
                <span className="font-label-tech text-label-tech text-secondary uppercase text-xs md:text-sm tracking-widest">The Platform</span>
                <div className="w-6 h-px bg-secondary" />
              </motion.div>

              {/* Main Headline - Bold and centered */}
              <motion.h1
                className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.15] tracking-[-0.02em]"
                initial={{ opacity: 0, y: 30 }}
                animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ delay: 0.2, duration: 0.7 }}
              >
                See Everything.
                <br />
                <span className="text-secondary">
                  Miss Nothing.
                </span>
              </motion.h1>

              {/* Subheading - Minimal and refined */}
              <motion.p
                className="text-base md:text-lg text-slate-300 leading-[1.7] max-w-2xl mx-auto font-light"
                initial={{ opacity: 0, y: 20 }}
                animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                Edge AI meets cloud intelligence. Real-time vision from every angle.
              </motion.p>

              {/* Three Key Features - Minimal centered layout */}
              <motion.div
                className="grid grid-cols-3 gap-4 md:gap-6 pt-6 md:pt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <motion.div
                  className="flex flex-col items-center gap-2"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="w-12 h-12 md:w-14 md:h-14 bg-secondary/20 rounded-full flex items-center justify-center"
                    whileHover={{ scale: 1.1, backgroundColor: "rgba(141, 195, 19, 0.3)" }}
                  >
                    <span className="material-symbols-outlined text-secondary text-[24px] md:text-[28px]">memory</span>
                  </motion.div>
                  <span className="font-label-tech text-secondary uppercase text-[10px] md:text-xs tracking-wider">40 TOPS</span>
                  <span className="text-slate-400 text-[10px] md:text-xs">Edge AI</span>
                </motion.div>

                <motion.div
                  className="flex flex-col items-center gap-2"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="w-12 h-12 md:w-14 md:h-14 bg-secondary/20 rounded-full flex items-center justify-center"
                    whileHover={{ scale: 1.1, backgroundColor: "rgba(141, 195, 19, 0.3)" }}
                  >
                    <span className="material-symbols-outlined text-secondary text-[24px] md:text-[28px]">timer</span>
                  </motion.div>
                  <span className="font-label-tech text-secondary uppercase text-[10px] md:text-xs tracking-wider">&lt;100ms</span>
                  <span className="text-slate-400 text-[10px] md:text-xs">Latency</span>
                </motion.div>

                <motion.div
                  className="flex flex-col items-center gap-2"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="w-12 h-12 md:w-14 md:h-14 bg-secondary/20 rounded-full flex items-center justify-center"
                    whileHover={{ scale: 1.1, backgroundColor: "rgba(141, 195, 19, 0.3)" }}
                  >
                    <span className="material-symbols-outlined text-secondary text-[24px] md:text-[28px]">cloud_sync</span>
                  </motion.div>
                  <span className="font-label-tech text-secondary uppercase text-[10px] md:text-xs tracking-wider">24/7</span>
                  <span className="text-slate-400 text-[10px] md:text-xs">Cloud Sync</span>
                </motion.div>
              </motion.div>

              {/* CTA Button - Centered */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="pt-2 md:pt-4"
              >
                <motion.button
                  className="px-6 md:px-10 py-2.5 md:py-3 bg-secondary text-primary font-semibold text-xs md:text-sm uppercase tracking-widest rounded-lg hover:bg-secondary/90 transition-all duration-300 shadow-lg hover:shadow-xl"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Explore Platform
                </motion.button>
              </motion.div>
            </motion.div>
          </div>

          {/* Scroll indicator at bottom */}
          <motion.div
            className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="flex flex-col items-center gap-2">
              <span className="text-secondary text-xs uppercase tracking-widest font-label-tech">Scroll</span>
              <span className="material-symbols-outlined text-secondary text-[20px]">expand_more</span>
            </div>
          </motion.div>
        </section>

        {/* Version Evolution Section */}
        <section className="bg-surface-container-low py-xl px-margin border-y border-outline-variant/20">
          <AnimatedSection>
            <div className="max-w-[1440px] mx-auto py-lg">
              <div className="flex flex-col md:flex-row justify-between items-end mb-xl border-b border-outline-variant/30 pb-md">
                <div>
                  <span className="font-label-tech text-label-tech text-secondary uppercase">Hardware Lineage</span>
                  <h2 className="font-h2 text-h2 text-primary mt-xs">Version Evolution</h2>
                </div>
                <div className="flex gap-lg mt-md md:mt-0">
                  {["V1.0 Legacy", "V2.0 Core", "V3.0 Apex"].map((version, i) => (
                    <motion.button
                      key={version}
                      className={`font-label-tech text-label-tech uppercase tracking-widest pb-base ${
                        i === 2
                          ? "text-secondary-fixed border-b-2 border-secondary-fixed"
                          : "text-on-surface-variant hover:text-primary"
                      }`}
                      whileHover={{ y: -2 }}
                    >
                      {version}
                    </motion.button>
                  ))}
                </div>
              </div>

              <motion.div
                className="grid grid-cols-1 md:grid-cols-3 gap-gutter"
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                <motion.div
                  variants={fadeInUp}
                  className="bg-surface-container-lowest border border-outline-variant/20 p-lg rounded-xl transition-all hover:shadow-xl group"
                  whileHover={{ y: -5 }}
                >
                  <motion.div
                    className="w-12 h-12 bg-primary rounded flex items-center justify-center mb-md group-hover:bg-secondary transition-colors"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <span className="material-symbols-outlined text-surface" style={{ fontVariationSettings: "'FILL' 1" }}>
                      memory
                    </span>
                  </motion.div>
                  <h3 className="font-h3 text-h3 text-primary mb-sm">Neural Core V3</h3>
                  <p className="text-on-surface-variant mb-md">
                    Our custom silicon architecture optimized for real-time spatial reasoning and object prediction.
                  </p>
                  <ul className="space-y-sm">
                    {["800 TOPS PROCESSING", "LIQUID-COOLED THERMALS"].map((feature, i) => (
                      <motion.li
                        key={i}
                        className="flex items-center gap-sm font-label-tech text-label-tech text-primary"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                      >
                        <span className="material-symbols-outlined text-secondary text-[18px]">check_circle</span>
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>

                <motion.div
                  variants={fadeInUp}
                  className="md:col-span-2 bg-primary p-lg rounded-xl relative overflow-hidden flex items-center justify-center min-h-[400px]"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-transparent"
                    animate={{
                      opacity: [0.3, 0.6, 0.3]
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <div className="relative z-10 text-center">
                    <motion.div
                      className="bg-secondary text-primary font-label-tech text-label-tech px-md py-xs inline-block rounded mb-md uppercase tracking-tighter"
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      Current Production State
                    </motion.div>
                    <motion.h2
                      className="font-h1 text-h1 text-surface-bright mb-md"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.7 }}
                    >
                      Apex Hardware V3.0
                    </motion.h2>
                    <motion.button
                      className="bg-surface text-primary px-xl py-md font-label-tech uppercase tracking-widest hover:bg-secondary-fixed transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      View Full Datasheet
                    </motion.button>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </AnimatedSection>
        </section>

        {/* Digital Cockpit UI Simulator */}
        <section className="py-xl px-margin bg-surface-container-lowest">
          <AnimatedSection>
            <div className="max-w-[1440px] mx-auto py-lg">
              <div className="text-center mb-xl">
                <motion.span
                  className="font-label-tech text-label-tech text-secondary uppercase"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  Interface Experience
                </motion.span>
                <motion.h2
                  className="font-h2 text-h2 text-primary"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  The Digital Cockpit
                </motion.h2>
              </div>

              <motion.div
                className="relative w-full max-w-5xl mx-auto aspect-[21/9] bg-inverse-surface rounded-[40px] border-[12px] border-primary-container shadow-2xl overflow-hidden group"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-transparent to-primary/10" />

                <div className="absolute inset-0 p-lg flex flex-col justify-between">
                  <motion.div
                    className="flex justify-between items-start"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <div className="bg-white/70 backdrop-blur-md px-md py-sm rounded-lg border border-outline-variant/30">
                      <span className="font-label-tech text-label-tech text-primary block">DESTINATION</span>
                      <span className="font-h3 text-h3 text-primary">Innovation Hub P4</span>
                    </div>
                    <div className="flex gap-sm">
                      <motion.div
                        className="bg-white/70 backdrop-blur-md w-12 h-12 rounded-lg flex items-center justify-center border border-outline-variant/30"
                        whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.9)" }}
                      >
                        <span className="material-symbols-outlined text-primary">wifi</span>
                      </motion.div>
                      <motion.div
                        className="bg-white/70 backdrop-blur-md w-12 h-12 rounded-lg flex items-center justify-center border border-outline-variant/30"
                        whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.9)" }}
                      >
                        <span className="material-symbols-outlined text-secondary">security</span>
                      </motion.div>
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex justify-center"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.7, type: "spring", stiffness: 200 }}
                  >
                    <div className="relative w-48 h-48">
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
                      <motion.div
                        className="absolute inset-3 bg-primary/90 text-surface rounded-full shadow-2xl flex flex-col items-center justify-center backdrop-blur-xl"
                        style={{ boxShadow: "0 0 60px rgba(141, 195, 19, 0.4)" }}
                      >
                        <span className="font-label-tech text-label-tech text-secondary-fixed uppercase tracking-widest mb-xs">
                          SPEED
                        </span>
                        <motion.span
                          className="font-h1 text-[64px] leading-none font-black"
                          animate={{ scale: [1, 1.05, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          64
                        </motion.span>
                        <span className="font-label-tech text-label-tech text-secondary-fixed uppercase tracking-widest mt-xs">
                          KM/H
                        </span>
                      </motion.div>
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex justify-between items-end"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 }}
                  >
                    <div className="flex gap-md">
                      <motion.div
                        className="bg-white/70 backdrop-blur-md px-md py-sm rounded-lg flex items-center gap-md border border-outline-variant/30"
                        whileHover={{ scale: 1.05 }}
                      >
                        <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>
                          battery_charging_80
                        </span>
                        <div>
                          <span className="font-label-tech text-[10px] text-on-surface-variant block uppercase">Range</span>
                          <span className="font-h3 text-h3 text-primary leading-none">420km</span>
                        </div>
                      </motion.div>
                      <motion.div
                        className="bg-white/70 backdrop-blur-md px-md py-sm rounded-lg flex items-center gap-md border border-outline-variant/30"
                        whileHover={{ scale: 1.05 }}
                      >
                        <span className="material-symbols-outlined text-primary">thermostat</span>
                        <div>
                          <span className="font-label-tech text-[10px] text-on-surface-variant block uppercase">Cabin</span>
                          <span className="font-h3 text-h3 text-primary leading-none">21°C</span>
                        </div>
                      </motion.div>
                    </div>
                    <motion.button
                      className="bg-secondary text-primary px-xl py-md rounded-xl font-label-tech uppercase tracking-widest shadow-lg flex items-center gap-md"
                      whileHover={{ scale: 1.05, boxShadow: "0 15px 40px rgba(141, 195, 19, 0.4)" }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className="material-symbols-outlined">play_arrow</span>
                      Engage Pilot
                    </motion.button>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </AnimatedSection>
        </section>

        {/* Sensor Fusion Section */}
        <section className="py-xl px-margin bg-surface-container-high border-t border-outline-variant/30">
          <AnimatedSection>
            <div className="max-w-[1440px] mx-auto py-lg">
              <div className="grid grid-cols-12 gap-gutter">
                <motion.div
                  className="col-span-12 md:col-span-4 space-y-md"
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <h2 className="font-h2 text-h2 text-primary">Sensor Fusion Topology</h2>
                  <p className="text-on-surface-variant">
                    The Vision Suite doesn&apos;t just see—it understands. By layering multiple sensor types, we create a redundant digital twin of the environment.
                  </p>
                  <div className="space-y-base">
                    {[
                      { title: "12X ULTRA-HD CAMERAS", width: "95%", desc: "Visual recognition & color depth for signs and signals." },
                      { title: "5X LONG-RANGE RADAR", width: "88%", desc: "Penetrates fog, rain, and snow at up to 300 meters." },
                      { title: "HIGH-RES LIDAR", width: "99%", desc: "Real-time 3D mapping with millimetric precision." }
                    ].map((sensor, i) => (
                      <motion.div
                        key={i}
                        className="bg-surface-container-lowest p-md border border-outline-variant/30 rounded-lg"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        whileHover={{ scale: 1.02, boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
                      >
                        <h4 className="font-label-tech text-label-tech text-primary mb-xs uppercase">{sensor.title}</h4>
                        <div className="w-full bg-surface-container h-1 rounded-full overflow-hidden">
                          <motion.div
                            className="bg-secondary-fixed h-full"
                            initial={{ width: "0%" }}
                            whileInView={{ width: sensor.width }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.5 + i * 0.1 }}
                          />
                        </div>
                        <p className="text-[12px] text-on-surface-variant mt-xs">{sensor.desc}</p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  className="col-span-12 md:col-span-8"
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <motion.div
                    className="bg-primary rounded-xl p-md h-full flex items-center justify-center relative group overflow-hidden min-h-[400px]"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-transparent"
                      animate={{ opacity: [0.2, 0.4, 0.2] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    />
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center"
                      whileHover={{ scale: 1.1 }}
                    >
                      <motion.button
                        className="bg-surface-bright/20 backdrop-blur-md border border-surface-bright/30 p-lg rounded-full text-surface-bright hover:bg-secondary hover:text-primary transition-all"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <span className="material-symbols-outlined text-[48px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                          play_circle
                        </span>
                      </motion.button>
                    </motion.div>
                    <motion.div
                      className="absolute bottom-md left-md bg-secondary px-sm py-xs font-label-tech text-[10px] text-primary uppercase font-bold"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1 }}
                    >
                      Live Point Cloud Stream v3.0
                    </motion.div>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </AnimatedSection>
        </section>
      </main>
      <Footer />
    </>
  );
}
