"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Speedometer from "@/components/Speedometer";

// Particle landscape background component
function ParticleLandscape() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Particle system
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      life: number;
      maxLife: number;
      size: number;
    }> = [];

    // Initialize particles from horizon
    function initializeParticles() {
      const particleCount = Math.floor(canvas.width / 8);
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: canvas.height * 0.75 + Math.random() * 20,
          vx: (Math.random() - 0.5) * 0.3,
          vy: -Math.random() * 0.8,
          life: Math.random() * 0.5,
          maxLife: 0.5 + Math.random() * 1,
          size: Math.random() * 1.5,
        });
      }
    }

    initializeParticles();

    let animationId: number;

    function animate() {
      // Clear with fade effect
      ctx.fillStyle = "rgba(10, 10, 10, 0.15)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw horizon line
      ctx.strokeStyle = "rgba(141, 195, 19, 0.4)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(0, canvas.height * 0.77);
      ctx.lineTo(canvas.width, canvas.height * 0.77);
      ctx.stroke();

      // Draw volumetric light from horizon
      const gradient = ctx.createLinearGradient(0, canvas.height * 0.77, 0, canvas.height * 0.2);
      gradient.addColorStop(0, "rgba(141, 195, 19, 0.08)");
      gradient.addColorStop(0.5, "rgba(141, 195, 19, 0.03)");
      gradient.addColorStop(1, "rgba(141, 195, 19, 0)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, canvas.height * 0.2, canvas.width, canvas.height * 0.57);

      // Update and draw particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];

        p.life += 0.01;
        p.x += p.vx;
        p.y += p.vy;
        p.vy -= 0.002; // Subtle upward drift

        const lifeRatio = Math.min(p.life / p.maxLife, 1);
        const opacity = Math.sin(lifeRatio * Math.PI) * 0.6;

        ctx.fillStyle = `rgba(141, 195, 19, ${opacity * 0.4})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * (1 - lifeRatio * 0.5), 0, Math.PI * 2);
        ctx.fill();

        // Add glow
        ctx.strokeStyle = `rgba(141, 195, 19, ${opacity * 0.2})`;
        ctx.lineWidth = 0.5;
        ctx.stroke();

        // Remove dead particles and spawn new ones
        if (p.life > p.maxLife) {
          particles.splice(i, 1);
          particles.push({
            x: Math.random() * canvas.width,
            y: canvas.height * 0.75 + Math.random() * 20,
            vx: (Math.random() - 0.5) * 0.3,
            vy: -Math.random() * 0.8,
            life: 0,
            maxLife: 0.5 + Math.random() * 1,
            size: Math.random() * 1.5,
          });
        }
      }

      animationId = requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0 pointer-events-none"
      style={{ mixBlendMode: "screen" }}
    />
  );
}

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
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      setMousePosition({
        x: (clientX - centerX) * 0.02,
        y: (clientY - centerY) * 0.02,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      <Speedometer />
      <Header />
      <main className="pt-xl">
        {/* Ultra-Minimal Premium Hero Section */}
        <section ref={heroRef} className="h-[100dvh] w-full flex items-center justify-center relative overflow-hidden border-b border-slate-200 bg-slate-50">
          {/* Minimalist, interactive-ready architectural background */}
          <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
            style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, black 1px, transparent 0)', backgroundSize: '24px 24px' }} />

          {/* Light-theme optimized particle or abstract line network */}
          <ParticleLandscape />

          {/* Subtle vignette to focus eyes toward the center */}
          <div className="absolute inset-0 z-2 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_40%,rgba(255,255,255,0.6)_100%)]" />

          {/* Content container - Perfectly Centered & Balanced */}
          <div className="relative z-20 w-full max-w-4xl mx-auto px-6 flex flex-col items-center justify-center text-center space-y-6 md:space-y-8">

            {/* Main Headline - Bold, Solid Charcoal for ultra-premium readability */}
            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.1]"
              initial={{ opacity: 0, y: 30 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              See Everything. <br />
              <span className="text-secondary">Miss Nothing.</span>
            </motion.h1>

            {/* Supporting Description - Balanced slate tones */}
            <motion.p
              className="text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl font-normal"
              initial={{ opacity: 0, y: 15 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
              transition={{ delay: 0.4, duration: 0.7 }}
            >
              Edge AI, multi-sensor fusion, and cloud intelligence. Fleet operators see every moment, autonomous systems learn from every mile.
            </motion.p>

            {/* Technology Metrics - Cleaned up borders and high-contrast labels */}
            <motion.div
              className="flex flex-wrap justify-center items-center gap-6 md:gap-12 pt-4"
              initial={{ opacity: 0, y: 15 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
              transition={{ delay: 0.6, duration: 0.7 }}
            >
              <div className="flex items-center gap-3 bg-white px-4 py-2 rounded-xl shadow-sm border border-slate-100">
                <span className="material-symbols-outlined text-emerald-600 text-[24px]">memory</span>
                <div className="text-left">
                  <span className="font-mono text-slate-400 block text-[10px] uppercase tracking-wider font-semibold">Edge AI</span>
                  <span className="text-slate-800 font-bold text-sm md:text-base">40 TOPS</span>
                </div>
              </div>

              <div className="hidden md:block w-px h-8 bg-slate-200" />

              <div className="flex items-center gap-3 bg-white px-4 py-2 rounded-xl shadow-sm border border-slate-100">
                <span className="material-symbols-outlined text-emerald-600 text-[24px]">timer</span>
                <div className="text-left">
                  <span className="font-mono text-slate-400 block text-[10px] uppercase tracking-wider font-semibold">Latency</span>
                  <span className="text-slate-800 font-bold text-sm md:text-base">&lt;100ms</span>
                </div>
              </div>

              <div className="hidden md:block w-px h-8 bg-slate-200" />

              <div className="flex items-center gap-3 bg-white px-4 py-2 rounded-xl shadow-sm border border-slate-100">
                <span className="material-symbols-outlined text-emerald-600 text-[24px]">cloud_sync</span>
                <div className="text-left">
                  <span className="font-mono text-slate-400 block text-[10px] uppercase tracking-wider font-semibold">Cloud Sync</span>
                  <span className="text-slate-800 font-bold text-sm md:text-base">24/7</span>
                </div>
              </div>
            </motion.div>

            {/* CTA Button - Solid Premium Dark Accent with Green glow hover state */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
              transition={{ delay: 0.8, duration: 0.7 }}
              className="pt-4"
            >
              <button className="px-8 py-3.5 bg-slate-900 text-white font-semibold text-xs md:text-sm uppercase tracking-widest rounded-xl hover:bg-emerald-600 hover:shadow-lg hover:shadow-emerald-600/20 transition-all duration-300 transform hover:-y-0.5">
                Explore Platform
              </button>
            </motion.div>
          </div>
        </section>

        {/* Hardware Evolution Section */}
        <section className="bg-surface-container-low py-xl px-margin border-y border-outline-variant/20">
          <AnimatedSection>
            <div className="max-w-[1440px] mx-auto">
              <div className="mb-lg">
                <span className="font-label-tech text-label-tech text-secondary uppercase">Hardware Lineage</span>
                <h2 className="font-h2 text-h2 text-primary mt-xs">Version Evolution</h2>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-lg items-start">
                {/* Left: Cards */}
                <motion.div
                  className="grid grid-cols-1 gap-md"
                  variants={staggerContainer}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                >
                  <motion.div
                    variants={fadeInUp}
                    className="bg-surface-container-lowest border border-outline-variant/20 p-md rounded-xl transition-all hover:shadow-xl"
                    whileHover={{ y: -3 }}
                  >
                    <h3 className="font-h3 text-h3 text-primary mb-xs">V1.0 — Prototype</h3>
                    <p className="text-on-surface-variant text-[11px] mb-2">2023</p>
                    <p className="text-on-surface-variant text-xs">
                      Single camera, GPS, basic OBD-II. Manual SD card data upload. Proof of concept.
                    </p>
                  </motion.div>

                  <motion.div
                    variants={fadeInUp}
                    className="bg-surface-container-lowest border border-outline-variant/20 p-md rounded-xl transition-all hover:shadow-xl"
                    whileHover={{ y: -3 }}
                  >
                    <h3 className="font-h3 text-h3 text-primary mb-xs">V2.0 — Production</h3>
                    <p className="text-on-surface-variant text-[11px] mb-2">2024</p>
                    <p className="text-on-surface-variant text-xs">
                      Dual camera (road + cabin), 4G connectivity, edge AI for event detection, OTA updates.
                    </p>
                  </motion.div>

                  <motion.div
                    variants={fadeInUp}
                    className="bg-surface-container-lowest border border-outline-variant/20 p-md rounded-xl transition-all hover:shadow-xl"
                    whileHover={{ y: -3 }}
                  >
                    <h3 className="font-h3 text-h3 text-primary mb-xs">V3.0 — Current</h3>
                    <p className="text-on-surface-variant text-[11px] mb-2">2025+</p>
                    <p className="text-on-surface-variant text-xs">
                      Multi-sensor array, 4 TOPS neural processor, 256GB smart cache, 5G-ready architecture.
                    </p>
                  </motion.div>
                </motion.div>

                {/* Right: Image */}
                <motion.div
                  className="rounded-xl overflow-hidden border border-outline-variant/20 shadow-xl h-fit sticky top-24"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <Image
                    src="/images/tech-hardware-evolution.png"
                    alt="Hardware evolution from prototype to current production device"
                    width={1536}
                    height={1024}
                    className="w-full h-auto max-h-[400px] object-cover"
                  />
                </motion.div>
              </div>
            </div>
          </AnimatedSection>
        </section>

        {/* Interface Experience Section */}
        <section className="py-md px-margin bg-primary">
          <AnimatedSection>
            <div className="max-w-[1440px] mx-auto space-y-md">
              {/* Section Header */}
              <div className="text-center">
                <motion.span
                  className="font-label-tech text-label-tech text-secondary uppercase"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  Interface Experience
                </motion.span>
                <motion.h2
                  className="font-h2 text-h2 text-white"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  The Operator Dashboard
                </motion.h2>
                <motion.p
                  className="text-slate-300 mt-sm max-w-2xl mx-auto text-sm"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  A unified command center for fleet operators. Monitor vehicles, watch live streams, receive AI alerts, and access analytics — all from one screen. Web, iOS, and Android.
                </motion.p>
              </div>

              {/* 35% / 65% Split Layout — Full Viewport (Reversed Order) */}
              <div className="grid grid-cols-1 lg:grid-cols-[1.85fr_1fr] gap-lg items-center min-h-[calc(100vh-320px)]">
                {/* Left Column (65%) — Dashboard Showcase */}
                <motion.div
                  className="rounded-2xl overflow-hidden border border-slate-700/50 shadow-2xl bg-gradient-to-br from-slate-900 to-slate-950 h-full flex items-center justify-center"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <Image
                    src="/images/tech-dashboard-ui.png"
                    alt="Fleet management dashboard with map, vehicle tracking, live video, and analytics"
                    width={1536}
                    height={1024}
                    className="w-full h-auto object-contain"
                  />
                </motion.div>

                {/* Right Column (35%) — Live Alerts Feed */}
                <motion.div
                  className="flex flex-col h-full"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  {/* Alerts Header */}
                  <h3 className="font-label-tech text-label-tech text-secondary uppercase tracking-wide mb-md text-xs">
                    Live Alerts
                  </h3>

                  {/* Alert Notifications Stack */}
                  <div className="space-y-2 flex-1 overflow-y-auto pr-2">
                    {[
                      {
                        icon: "fence",
                        title: "Geofence Exit",
                        desc: "Vehicle #42 departed route boundary",
                        time: "5m ago",
                        color: "secondary"
                      },
                      {
                        icon: "settings",
                        title: "Maintenance Due",
                        desc: "Vehicle #17 — 50K km service scheduled",
                        time: "12m ago",
                        color: "secondary"
                      },
                      {
                        icon: "warning",
                        title: "Hard Braking Detected",
                        desc: "Vehicle #8 — sudden deceleration event",
                        time: "23m ago",
                        color: "secondary"
                      },
                      {
                        icon: "speed",
                        title: "Speed Limit Violation",
                        desc: "Vehicle #33 exceeded limit by 15 km/h",
                        time: "34m ago",
                        color: "secondary"
                      },
                      {
                        icon: "auto_awesome",
                        title: "AI Safety Alert",
                        desc: "Vehicle #5 — risky lane change detected",
                        time: "1h ago",
                        color: "secondary"
                      },
                    ].map((alert, i) => (
                      <motion.div
                        key={i}
                        className="bg-white/[0.08] backdrop-blur-lg border border-white/20 rounded-xl p-3 hover:border-secondary/60 hover:bg-white/[0.12] transition-all duration-300 cursor-pointer group flex-shrink-0 shadow-lg"
                        initial={{ opacity: 0, y: 20, x: -20 }}
                        whileInView={{ opacity: 1, y: 0, x: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          delay: i * 0.15,
                          duration: 0.5,
                          ease: "easeOut"
                        }}
                        whileHover={{ y: -4, boxShadow: "0 12px 32px rgba(141, 195, 19, 0.15)" }}
                      >
                        <div className="flex items-start gap-3">
                          {/* Feature Icon */}
                          <div className="w-10 h-10 rounded-lg bg-secondary/15 flex items-center justify-center flex-shrink-0 group-hover:bg-secondary/20 transition-colors">
                            <span className="material-symbols-outlined text-secondary text-lg">
                              {alert.icon}
                            </span>
                          </div>

                          {/* Alert Content */}
                          <div className="flex-1 min-w-0">
                            <h4 className="font-label-tech text-label-tech text-white uppercase text-[10px] tracking-wide mb-0.5">
                              {alert.title}
                            </h4>
                            <p className="text-slate-300 text-xs leading-tight mb-1 line-clamp-2">
                              {alert.desc}
                            </p>
                            <span className="text-[9px] text-slate-400 font-normal">
                              {alert.time}
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* View All Action */}
                  <motion.button
                    className="w-full px-3 py-2.5 border border-white/20 text-white font-label-tech text-label-tech uppercase text-xs tracking-wide rounded-lg bg-white/[0.08] backdrop-blur-lg hover:bg-white/[0.12] hover:border-secondary/60 transition-all duration-300 mt-md flex-shrink-0 shadow-lg"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    View All Alerts
                  </motion.button>
                </motion.div>
              </div>
            </div>
          </AnimatedSection>
        </section>

        {/* Sensor Architecture Section */}
        <section className="py-lg px-margin bg-surface-container-high border-t border-outline-variant/30">
          <AnimatedSection>
            <div className="max-w-[1440px] mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1.8fr] gap-lg items-stretch">
                {/* Left: Text and Sensors */}
                <motion.div
                  className="space-y-sm flex flex-col"
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <div>
                    <h2 className="font-h2 text-h2 text-primary mb-sm">Sensor Architecture</h2>
                    <p className="text-on-surface-variant text-sm">
                      One sensor isn&apos;t enough. HAVONE combines camera vision, IMU data, GPS, vehicle diagnostics, and connectivity into a redundant, intelligent system that understands every driving moment.
                    </p>
                  </div>

                  <div className="space-y-xs flex-1">
                    {[
                      { title: "DUAL CAMERA (ROAD + CABIN)", width: "95%", desc: "1080p, 30fps, IR night vision" },
                      { title: "9-AXIS IMU", width: "88%", desc: "Accelerometer, gyroscope, magnetometer" },
                      { title: "GNSS (GPS + GLONASS)", width: "90%", desc: "2m accuracy, 10Hz refresh" },
                      { title: "OBD-II / CAN BUS", width: "85%", desc: "Speed, RPM, fuel, engine codes" },
                      { title: "4G LTE + WIFI", width: "80%", desc: "Always-on with offline buffer" }
                    ].map((sensor, i) => (
                      <motion.div
                        key={i}
                        className="bg-surface-container-lowest p-sm border border-outline-variant/30 rounded-lg"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.08 }}
                        whileHover={{ scale: 1.02 }}
                      >
                        <h4 className="font-label-tech text-label-tech text-primary mb-xs uppercase text-[9px]">{sensor.title}</h4>
                        <div className="w-full bg-surface-container h-1 rounded-full overflow-hidden">
                          <motion.div
                            className="bg-secondary-fixed h-full"
                            initial={{ width: "0%" }}
                            whileInView={{ width: sensor.width }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.5 + i * 0.08 }}
                          />
                        </div>
                        <p className="text-[11px] text-on-surface-variant mt-xs">{sensor.desc}</p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Right: Image - Full Display */}
                <motion.div
                  className="rounded-xl overflow-hidden border border-outline-variant/20 h-full min-h-[500px] flex items-center justify-center"
                  style={{
                    background: "linear-gradient(135deg, rgba(39, 39, 42, 0.95) 0%, rgba(24, 24, 27, 0.98) 100%)"
                  }}
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <Image
                    src="/images/tech-sensor-exploded.png"
                    alt="Exploded view of HAVONE IoT device showing camera modules, PCB, antenna, and sensors"
                    width={1024}
                    height={1024}
                    className="w-auto h-auto max-w-full max-h-full object-contain p-4"
                  />
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
