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
        {/* Hero Section — Split Interactive Design */}
        <section
          ref={heroRef}
          className="relative w-full h-[calc(100dvh-100px)] flex items-stretch overflow-hidden"
        >
          {/* Mobile animated wave background */}
          <div className="absolute inset-0 lg:hidden z-0 bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950">
            {/* Animated flowing wave orbs for mobile */}
            <motion.div
              className="absolute inset-0 opacity-50"
            >
              {/* Large flowing wave orb 1 */}
              <motion.div
                className="absolute top-[-15%] left-[-10%] w-[500px] h-[500px] bg-gradient-to-br from-secondary/20 to-secondary/5 rounded-full blur-[100px]"
                animate={{
                  y: [0, 80, 0],
                  x: [0, 40, 0],
                  scale: [1, 1.3, 1],
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              />
              {/* Wave orb 2 */}
              <motion.div
                className="absolute top-[30%] right-[-15%] w-[450px] h-[450px] bg-gradient-to-bl from-secondary/15 to-transparent rounded-full blur-[80px]"
                animate={{
                  y: [0, -70, 0],
                  x: [0, -50, 0],
                  scale: [1, 1.2, 1],
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              />
              {/* Wave orb 3 - bottom */}
              <motion.div
                className="absolute bottom-[-5%] left-[15%] w-[380px] h-[380px] bg-gradient-to-tr from-secondary/10 to-transparent rounded-full blur-[80px]"
                animate={{
                  y: [0, -50, 0],
                  x: [0, 50, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              />
              {/* Wave orb 4 - accent */}
              <motion.div
                className="absolute top-[50%] left-[5%] w-[280px] h-[280px] bg-gradient-to-br from-secondary/8 to-transparent rounded-full blur-[60px]"
                animate={{
                  y: [0, 35, 0],
                  x: [0, -45, 0],
                  scale: [1, 1.15, 1],
                }}
                transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
              />
            </motion.div>
          </div>

          {/* Left Side — Clean dark content */}
          <div className="w-full lg:w-1/2 bg-zinc-950 flex items-center justify-center relative overflow-hidden z-10">

            <div className="relative z-10 px-6 sm:px-10 md:px-12 py-12 md:py-16 text-center lg:text-left max-w-xl mx-auto lg:mx-0">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                transition={{ duration: 0.6 }}
                className="flex items-center justify-center lg:justify-start gap-2 mb-4 md:mb-6"
              >
                <div className="w-8 h-px bg-secondary" />
                <span className="font-label-tech text-secondary uppercase text-xs md:text-sm tracking-widest">Solutions</span>
              </motion.div>

              <motion.h1
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.2] mb-4 md:mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ delay: 0.1, duration: 0.7 }}
              >
                Control Your Fleet
                <br />
                <span className="text-secondary">With Intelligence</span>
              </motion.h1>

              <motion.p
                className="text-base md:text-lg text-slate-300 leading-[1.7] mb-8 md:mb-10"
                initial={{ opacity: 0, y: 20 }}
                animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                Live visibility, real-time alerts, and actionable insights—all in one platform.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
                initial={{ opacity: 0, y: 20 }}
                animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <motion.a
                  href="/contact"
                  className="px-7 py-3 bg-secondary text-primary font-semibold text-sm uppercase tracking-wider rounded-lg hover:bg-secondary/90 transition-all shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Start Free Pilot
                </motion.a>
                <motion.a
                  href="/contact"
                  className="px-7 py-3 bg-white/10 backdrop-blur-sm text-white font-semibold text-sm uppercase tracking-wider rounded-lg border border-white/30 hover:bg-white/20 transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Demo
                </motion.a>
              </motion.div>
            </div>
          </div>

          {/* Right Side — Image with interactive feature cards - Desktop only */}
          <div className="hidden lg:flex w-1/2 items-center justify-center relative overflow-hidden z-10">
            <motion.div
              className="absolute inset-0"
              initial={{ opacity: 0, scale: 1.05 }}
              animate={isHeroInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="/images/solutions-hero.png"
                alt="Fleet operations control room"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-slate-950/80 via-slate-950/40 to-transparent" />
            </motion.div>

            {/* Feature Cards - Floating */}
            <div className="absolute inset-0 flex flex-col justify-center items-end pr-12 gap-4 z-20">
              {[
                { icon: 'videocam', label: 'Live Video', desc: 'Real-time feeds' },
                { icon: 'location_on', label: 'GPS Tracking', desc: 'Precise locations' },
                { icon: 'shield', label: 'Safety AI', desc: 'Event detection' }
              ].map((feature, idx) => (
                <motion.div
                  key={idx}
                  className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg px-4 py-3 flex items-center gap-3"
                  initial={{ opacity: 0, x: 40 }}
                  animate={isHeroInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
                  transition={{ delay: 0.4 + idx * 0.15, duration: 0.6 }}
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: 'rgba(141, 195, 19, 0.1)',
                    borderColor: 'rgba(141, 195, 19, 0.3)'
                  }}
                >
                  <div className="w-10 h-10 bg-secondary/30 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-secondary text-[18px]">
                      {feature.icon}
                    </span>
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">{feature.label}</div>
                    <div className="text-slate-400 text-xs">{feature.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Solutions Grid / Use Cases — Image + Cards together */}
        <section className="w-full py-lg px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 bg-white">
          <div className="w-full max-w-[1440px] mx-auto">
            {/* Section Header */}
            <motion.div
              className="text-center mb-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5 }}
            >
              <span className="font-label-tech text-label-tech text-secondary uppercase tracking-[0.2em] block mb-2">
                Use Cases
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary">
                Built for Every Fleet
              </h2>
            </motion.div>

            {/* Image */}
            <motion.div
              className="w-full rounded-2xl overflow-hidden border border-outline-variant/20 shadow-lg mb-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <img
                src="/images/solutions-grid.png"
                alt="Four fleet scenarios: long-haul trucks, delivery vans, school buses, insurance"
                className="w-full h-auto max-h-[350px] object-cover"
              />
            </motion.div>

            {/* Solution Cards Grid */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-5"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-80px" }}
            >
              {/* Card 1: Long-Haul Fleets */}
              <motion.div
                variants={fadeInUp}
                className="group bg-white border border-outline-variant/20 rounded-xl p-4 md:p-5 hover:border-secondary/50 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-9 h-9 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-secondary text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>local_shipping</span>
                  </div>
                  <span className="font-label-tech text-[8px] text-on-surface-variant uppercase tracking-wider">Highway Operations</span>
                </div>
                <h3 className="text-base font-semibold text-primary mb-2 group-hover:text-secondary transition-colors">
                  Own the Highway
                </h3>
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  Track trucks across national highways in real-time. Instant alerts on diversions, unauthorized stops, and driver fatigue.
                </p>
              </motion.div>

              {/* Card 2: Last-Mile Delivery */}
              <motion.div
                variants={fadeInUp}
                className="group bg-white border border-outline-variant/20 rounded-xl p-4 md:p-5 hover:border-secondary/50 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-9 h-9 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-secondary text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>delivery_dining</span>
                  </div>
                  <span className="font-label-tech text-[8px] text-on-surface-variant uppercase tracking-wider">Urban Logistics</span>
                </div>
                <h3 className="text-base font-semibold text-primary mb-2 group-hover:text-secondary transition-colors">
                  Every Delivery, Visible
                </h3>
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  Monitor delivery fleets in congested cities. Optimize routes, track completions, and ensure driver safety.
                </p>
              </motion.div>

              {/* Card 3: Passenger Transport */}
              <motion.div
                variants={fadeInUp}
                className="group bg-white border border-outline-variant/20 rounded-xl p-4 md:p-5 hover:border-secondary/50 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-9 h-9 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-secondary text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>directions_bus</span>
                  </div>
                  <span className="font-label-tech text-[8px] text-on-surface-variant uppercase tracking-wider">Safety First</span>
                </div>
                <h3 className="text-base font-semibold text-primary mb-2 group-hover:text-secondary transition-colors">
                  Passenger Safety, Guaranteed
                </h3>
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  Live tracking and AI-monitored driving for school buses, corporate shuttles, and ride services. Real-time peace of mind.
                </p>
              </motion.div>

              {/* Card 4: Insurance & Compliance */}
              <motion.div
                variants={fadeInUp}
                className="group bg-white border border-outline-variant/20 rounded-xl p-4 md:p-5 hover:border-secondary/50 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-9 h-9 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-secondary text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>shield</span>
                  </div>
                  <span className="font-label-tech text-[8px] text-on-surface-variant uppercase tracking-wider">Data-Driven Risk</span>
                </div>
                <h3 className="text-base font-semibold text-primary mb-2 group-hover:text-secondary transition-colors">
                  Underwrite with Certainty
                </h3>
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  Driving data for usage-based insurance, claims verification, and compliance. Video evidence for every incident.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Integration / API Section */}
        <section className="w-full py-xl px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 bg-primary border-y border-slate-700/50">
          <div className="w-full max-w-[1440px] mx-auto">
            <motion.div
              className="text-center mb-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5 }}
            >
              <span className="font-label-tech text-label-tech text-secondary uppercase tracking-[0.2em] block mb-2">
                Seamless Integration
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-md">
                Built for Integration
              </h2>
              <p className="text-lg text-slate-300 max-w-3xl mx-auto">
                Open REST API and webhooks to plug HAVONE into your existing TMS, ERP, or custom tools. Real-time streams, historical data, and analytics — all programmable.
              </p>
            </motion.div>

            {/* Features Grid */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-md md:gap-lg"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-80px" }}
            >
              {[
                { icon: "api", title: "REST API", desc: "99.9% uptime SLA" },
                { icon: "electric_bolt", title: "WebSocket", desc: "Real-time event streams" },
                { icon: "webhook", title: "Webhooks", desc: "Configurable alert notifications" },
                { icon: "phones", title: "SDKs", desc: "iOS, Android, Web" },
                { icon: "security", title: "Access Control", desc: "SSO + role-based permissions" },
              ].map((feature, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  className="bg-white/[0.08] backdrop-blur-lg rounded-xl p-md border border-white/20 hover:border-secondary/60 hover:bg-white/[0.12] hover:shadow-lg shadow-md transition-all text-center group"
                >
                  <div className="w-12 h-12 bg-secondary/15 rounded-lg flex items-center justify-center mx-auto mb-md group-hover:bg-secondary/20 transition-colors">
                    <span className="material-symbols-outlined text-secondary text-2xl">{feature.icon}</span>
                  </div>
                  <h3 className="font-h3 text-h3 text-white mb-xs">{feature.title}</h3>
                  <p className="text-sm text-slate-300">{feature.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-xl px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 bg-white">
          <div className="w-full max-w-[1440px] mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-primary">
                Start Your Pilot in <span className="text-secondary">7 Days</span>
              </h2>
              <p className="text-lg md:text-xl text-primary/80 max-w-2xl mx-auto mb-10">
                No upfront hardware cost. No long-term lock-in. Deploy on 10 vehicles free. See the difference in week one.
              </p>
              <motion.a
                href="/contact"
                className="inline-block px-10 py-4 bg-secondary text-primary font-semibold text-base uppercase tracking-wide rounded-lg hover:bg-secondary/90 transition-all shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Apply for Free Pilot
              </motion.a>
            </motion.div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
