"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const features = [
  {
    icon: "location_on",
    title: "Live Fleet Tracking",
    description: "Real-time GPS tracking with 10-second refresh. Monitor every vehicle's position, speed, and route on a single dashboard.",
    stats: "10s Refresh",
    link: "/solutions"
  },
  {
    icon: "videocam",
    title: "HD Live Streaming",
    description: "Watch any vehicle live from your phone. Dual cameras capture road and cabin views simultaneously with cloud recording.",
    stats: "1080p Dual Cam",
    link: "/technology"
  },
  {
    icon: "warning",
    title: "AI Safety Alerts",
    description: "Instant detection of harsh braking, lane departure, drowsiness, and over-speeding. Push notifications to operators and drivers.",
    stats: "< 100ms Alert",
    link: "/technology"
  },
  {
    icon: "analytics",
    title: "Data & Analytics",
    description: "Trip reports, fuel efficiency, driver scorecards, and predictive maintenance — powered by machine learning on real driving data.",
    stats: "30+ Points/Sec",
    link: "/solutions"
  },
];

export default function FeaturesGrid() {
  const imageRef = useRef(null);
  const cardsRef = useRef(null);
  const isImageInView = useInView(imageRef, { once: true, margin: "-80px" });
  const isCardsInView = useInView(cardsRef, { once: true, margin: "-80px" });

  return (
    <>
      {/* Viewport 1: Heading + Product Showcase — single cohesive composition */}
      <section
        ref={imageRef}
        className="h-[100dvh] w-full flex flex-col items-center justify-center bg-white px-6 sm:px-10 md:px-16 lg:px-20"
      >
        {/* Text Block — tight vertical rhythm */}
        <motion.div
          className="text-center mb-[3vh] md:mb-[4vh]"
          initial={{ opacity: 0, y: 20 }}
          animate={isImageInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <span className="font-label-tech text-label-tech text-secondary uppercase tracking-[0.2em] block mb-2">
            Platform Features
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-3 md:mb-4">
            One Platform. Complete Fleet Intelligence.
          </h2>
          <p className="text-base md:text-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
            Everything fleet operators need to run smarter, safer operations — from real-time tracking to AI-powered safety.
          </p>
        </motion.div>

        {/* Product Image — viewport-relative sizing, never pushes below fold */}
        <motion.div
          className="w-full max-w-5xl rounded-2xl overflow-hidden border border-outline-variant/15 shadow-[0_20px_60px_-12px_rgba(0,0,0,0.15)]"
          style={{ height: '55vh', maxHeight: '600px' }}
          initial={{ opacity: 0, y: 24 }}
          animate={isImageInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <div className="relative w-full h-full">
            <Image
              src="/images/home-features-dashboard.png"
              alt="Fleet management dashboard showing map, live video, and safety alerts"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 85vw, 1024px"
              priority
            />
          </div>
        </motion.div>
      </section>

      {/* Viewport 2: Feature Cards — Dark premium theme */}
      <section ref={cardsRef} className="min-h-screen w-full flex flex-col justify-center bg-primary py-16 md:py-20 relative overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(rgba(141,195,19,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(141,195,19,0.3) 1px, transparent 1px)`,
              backgroundSize: '60px 60px',
            }}
          />
        </div>
        {/* Ambient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-secondary/[0.03] rounded-full blur-[150px] pointer-events-none" />

        <div className="w-full px-6 sm:px-10 md:px-16 lg:px-20 relative z-10">
          {/* Section Header */}
          <motion.div
            className="text-center mb-12 md:mb-14"
            initial={{ opacity: 0, y: 20 }}
            animate={isCardsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              What You Get
            </h3>
            <p className="text-slate-400 mt-3 text-base md:text-lg">Four core capabilities in one subscription.</p>
          </motion.div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 max-w-[1440px] mx-auto">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={isCardsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <Link href={feature.link}>
                  <motion.div
                    className="h-full bg-white/[0.04] backdrop-blur-sm border border-white/[0.08] rounded-2xl p-7 md:p-8 hover:border-secondary/40 hover:bg-white/[0.07] transition-all duration-300 group cursor-pointer shadow-[0_4px_24px_rgba(0,0,0,0.3)]"
                    whileHover={{ y: -6, boxShadow: '0 12px 40px rgba(141,195,19,0.1), 0 4px 24px rgba(0,0,0,0.4)' }}
                  >
                    {/* Icon */}
                    <div className="w-14 h-14 bg-secondary/[0.12] border border-secondary/20 rounded-xl flex items-center justify-center mb-5 group-hover:bg-secondary/20 group-hover:shadow-[0_0_20px_rgba(141,195,19,0.15)] transition-all duration-300">
                      <span className="material-symbols-outlined text-secondary text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                        {feature.icon}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg md:text-xl font-semibold text-white mb-3 group-hover:text-secondary transition-colors duration-200">
                      {feature.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm md:text-base text-slate-400 mb-5 leading-relaxed">
                      {feature.description}
                    </p>

                    {/* Bottom metric badge */}
                    <div className="border-t border-white/[0.06] pt-4 flex items-center justify-between">
                      <span className="inline-flex items-center gap-1.5 bg-secondary/[0.1] border border-secondary/20 rounded-full px-3 py-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                        <span className="text-[10px] md:text-[11px] text-secondary uppercase font-bold tracking-wider">
                          {feature.stats}
                        </span>
                      </span>
                      <span className="material-symbols-outlined text-slate-500 group-hover:text-secondary group-hover:translate-x-1 transition-all duration-200 text-xl">
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
    </>
  );
}
