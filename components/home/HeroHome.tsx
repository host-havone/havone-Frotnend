"use client";

import { motion, useInView, useTransform, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

export default function HeroHome() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const y = useTransform(smoothProgress, [0, 1], ["0%", "-20%"]);
  const opacity = useTransform(smoothProgress, [0, 0.5, 1], [1, 0.9, 0.6]);
  const scale = useTransform(smoothProgress, [0, 1], [1, 0.95]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden text-white selection:bg-emerald-500/30 mt-[5px]"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url('/images/home-hero.png')`,
            backgroundPosition: 'center center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
        />

        {/* Localized dark overlay behind content area */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/75 from-0% via-slate-950/40 via-40% to-slate-950/15 to-75%" />

        {/* Top fade */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 from-0% via-transparent via-20% to-transparent" />

        {/* Bottom anchor */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 from-0% via-slate-950/20 via-12% to-transparent to-35%" />

        {/* Ambient glow for depth */}
        <div className="absolute top-1/3 left-[15%] w-[500px] h-[500px] bg-emerald-500/4 rounded-full blur-[120px] pointer-events-none" />
      </div>

      {/* Vehicle Detection Overlays — contextual floating cards */}
      <div className="absolute inset-0 z-[5] hidden lg:block pointer-events-none">
      </div>

      <motion.div
        style={{ y, opacity, scale }}
        className="relative z-10 w-full max-w-7xl mx-auto px-4 xs:px-5 sm-mobile:px-6 sm:px-8 md-tablet:px-10 lg:px-12 pt-32 xs:pt-36 sm-mobile:pt-40 md-tablet:pt-44 pb-24 xs:pb-28 sm-mobile:pb-32"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Content */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6 sm-mobile:space-y-7 md-tablet:space-y-8 text-left">

            {/* Headline */}
            <div className="space-y-5 max-w-2xl">
              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="text-3xl xs:text-[2.2rem] sm-mobile:text-4xl sm:text-5xl md-tablet:text-[3.5rem] lg-tablet:text-[3.8rem] md:text-6xl font-sans font-bold tracking-tight text-white leading-[1.08]"
                style={{ textShadow: '0 4px 30px rgba(0,0,0,0.9), 0 1px 3px rgba(0,0,0,0.8)' }}
              >
                The Road to <br />
                <span
                  className="text-secondary font-extrabold"
                  style={{
                    textShadow: '0 4px 30px rgba(141,195,19,0.5), 0 1px 3px rgba(0,0,0,0.7)',
                    letterSpacing: '-0.02em',
                  }}
                >
                  Autonomy Starts With Data
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="text-[13px] xs:text-[14px] sm-mobile:text-[15px] sm:text-base md-tablet:text-[17px] lg-tablet:text-lg text-slate-100 leading-relaxed font-normal max-w-xl"
                style={{ textShadow: '0 2px 12px rgba(0,0,0,0.8)' }}
              >
                India&apos;s first fleet intelligence platform that captures real-world driving data today to power autonomous vehicles tomorrow.
              </motion.p>
            </div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap gap-3 xs:gap-4 w-full sm:w-auto"
            >
              <Link href="/contact" className="w-full sm-mobile:w-auto px-5 xs:px-6 sm-mobile:px-7 md-tablet:px-8 py-2.5 xs:py-3 sm-mobile:py-3.5 bg-secondary font-sans font-medium text-[11px] xs:text-[12px] sm-mobile:text-[13px] md-tablet:text-sm text-white rounded-md xs:rounded-lg hover:bg-secondary/80 transition-colors duration-200 shadow-lg shadow-secondary/30 text-center focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
                <span className="hidden sm-mobile:inline">Get Early Access</span>
                <span className="sm-mobile:hidden" aria-hidden="true">Early Access</span>
                <span className="sr-only sm-mobile:hidden">Get Early Access</span>
              </Link>
              <Link href="/technology" className="w-full sm-mobile:w-auto px-5 xs:px-6 sm-mobile:px-7 md-tablet:px-8 py-2.5 xs:py-3 sm-mobile:py-3.5 bg-white/10 backdrop-blur-sm font-sans font-medium text-[11px] xs:text-[12px] sm-mobile:text-[13px] md-tablet:text-sm text-white rounded-md xs:rounded-lg border border-white/25 hover:bg-white/20 hover:border-white/50 transition-all duration-200 shadow-lg shadow-black/20 text-center focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
                See How It Works
              </Link>
            </motion.div>
          </div>

        </div>
      </motion.div>
    </section>
  );
}
