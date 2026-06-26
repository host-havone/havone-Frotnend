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
        {/* Hero Section — Full viewport with background image */}
        <section
          ref={heroRef}
          className="relative w-full h-[calc(100dvh-100px)] flex items-center overflow-hidden"
        >
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img
              src="/images/solutions-hero.png"
              alt="Fleet operations control room"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/60 to-slate-950/30" />
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-transparent to-slate-950/60" />
          </div>

          {/* Content */}
          <div className="relative z-10 w-full px-6 sm:px-10 md:px-16 lg:px-20 xl:px-24">
            <motion.div
              className="max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <motion.span
                className="font-label-tech text-label-tech text-secondary tracking-[0.2em] uppercase mb-4 block"
                initial={{ opacity: 0, x: -20 }}
                animate={isHeroInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                For Fleet Operators
              </motion.span>
              <motion.h1
                className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-white leading-tight mb-5"
                initial={{ opacity: 0, y: 20 }}
                animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.7, delay: 0.3 }}
              >
                Your Fleet. Fully Visible.<br />
                <span className="text-secondary">Fully Controlled.</span>
              </motion.h1>
              <motion.p
                className="text-base md:text-lg text-slate-200 leading-relaxed max-w-xl mb-8"
                initial={{ opacity: 0 }}
                animate={isHeroInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.7, delay: 0.5 }}
              >
                HAVONE gives fleet operators complete situational awareness — live video, real-time location, AI safety alerts, and actionable insights. One device, one subscription, total control.
              </motion.p>
              <motion.div
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 16 }}
                animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <a
                  href="/contact"
                  className="px-7 py-3.5 bg-secondary text-white font-medium text-sm rounded-lg hover:bg-secondary/80 transition-colors shadow-lg shadow-secondary/30"
                >
                  Apply for Free Pilot
                </a>
                <a
                  href="/contact"
                  className="px-7 py-3.5 bg-white/10 backdrop-blur-sm text-white font-medium text-sm rounded-lg border border-white/30 hover:bg-white/20 transition-all"
                >
                  Talk to Our Team
                </a>
              </motion.div>
            </motion.div>
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
