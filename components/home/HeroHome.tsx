"use client";

import { motion, useInView, useMotionValue, useTransform, animate, useScroll, useSpring } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Link from "next/link";

// Isolated Stat Counter Component to maximize performance and prevent full-page repaints
function StatCounter({ target, duration = 2, decimals = 0, suffix = "" }: { target: number; duration?: number; decimals?: number; suffix?: string }) {
  const countRef = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);

  useEffect(() => {
    const controls = animate(motionValue, target, {
      duration: duration,
      ease: "easeOut",
    });

    const unsubscribe = motionValue.on("change", (latest) => {
      if (countRef.current) {
        countRef.current.textContent = latest.toFixed(decimals) + suffix;
      }
    });

    return () => {
      controls.stop();
      unsubscribe();
    };
  }, [target, motionValue, duration, decimals, suffix]);

  return <span ref={countRef}>0{suffix}</span>;
}

export default function HeroHome() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [mounted, setMounted] = useState(false);

  // Parallax scroll effect with spring physics for smooth animation
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Apply spring physics for buttery smooth parallax
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const y = useTransform(smoothProgress, [0, 1], ["0%", "-20%"]);
  const opacity = useTransform(smoothProgress, [0, 0.5, 1], [1, 0.9, 0.6]);
  const scale = useTransform(smoothProgress, [0, 1], [1, 0.95]);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden text-white selection:bg-emerald-500/30 mt-[5px]"
    >
      {/* Autonomous Vehicle Dashboard Background - Driver's Perspective */}
      <div className="absolute inset-0 z-0">
        {/* Background Image Layer - Full dashboard view */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url('/images/truck-dashboard.png')`,
            backgroundPosition: 'center center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
        />

        {/* Strategic Gradient Overlays for Text Readability */}
        {/* Left side - Dark overlay for main content */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 from-0% via-slate-950/60 via-40% to-transparent to-70%" />

        {/* Top fade for header breathing room */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 from-0% via-transparent via-30% to-transparent" />

        {/* Bottom anchor for footer transition */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 from-0% via-slate-950/40 via-20% to-transparent to-50%" />

        {/* Subtle vignette to focus attention */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_30%_50%,transparent_0%,rgba(15,23,42,0.3)_100%)]" />

        {/* Ambient glow effects for depth */}
        <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute bottom-1/4 left-1/3 w-[500px] h-[500px] bg-blue-500/4 rounded-full blur-[130px] pointer-events-none" />
      </div>

      <motion.div
        style={{ y, opacity, scale }}
        className="relative z-10 w-full max-w-7xl mx-auto px-4 xs:px-5 sm-mobile:px-6 sm:px-8 md-tablet:px-10 lg:px-12 pt-24 xs:pt-28 sm-mobile:pt-32 pb-16 xs:pb-20 sm-mobile:pb-24"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 xs:gap-14 sm-mobile:gap-16 lg:gap-8 items-center">

          {/* Left Side: Left Content */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-5 xs:space-y-6 sm-mobile:space-y-7 md-tablet:space-y-8 text-left">

            {/* Main Editorial Headline */}
            <div className="space-y-3 xs:space-y-4 max-w-2xl">
              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="text-3xl xs:text-[2.2rem] sm-mobile:text-4xl sm:text-5xl md-tablet:text-[3.5rem] lg-tablet:text-[3.8rem] md:text-6xl font-sans font-semibold tracking-tight text-white leading-[1.1]"
                style={{ textShadow: '0 2px 20px rgba(0,0,0,0.8), 0 0 40px rgba(0,0,0,0.5)' }}
              >
                The Future of <br />
                <span className="text-secondary" style={{ textShadow: '0 2px 20px rgba(16,185,129,0.4), 0 0 40px rgba(0,0,0,0.6)' }}>
                  Autonomous Mobility
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="text-[13px] xs:text-[14px] sm-mobile:text-[15px] sm:text-base md-tablet:text-[17px] lg-tablet:text-lg text-slate-200 leading-relaxed font-normal"
                style={{ textShadow: '0 1px 10px rgba(0,0,0,0.7), 0 2px 20px rgba(0,0,0,0.5)' }}
              >
                Engineering tomorrow&apos;s transportation infrastructure today. Precision-driven corporate autonomous operating ecosystems engineered to optimize safety, logistics margins, and carbon efficiency.
              </motion.p>
            </div>

            {/* Interactive Clean Call to Actions */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap gap-3 xs:gap-4 w-full sm:w-auto"
            >
              <Link href="/contact" className="w-full sm-mobile:w-auto px-5 xs:px-6 sm-mobile:px-7 md-tablet:px-8 py-2.5 xs:py-3 sm-mobile:py-3.5 bg-secondary font-sans font-medium text-[11px] xs:text-[12px] sm-mobile:text-[13px] md-tablet:text-sm text-white rounded-md xs:rounded-lg hover:bg-secondary/80 transition-colors duration-200 shadow-lg shadow-secondary/30 text-center focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
                <span className="hidden sm-mobile:inline">Schedule Enterprise Demo</span>
                <span className="sm-mobile:hidden" aria-hidden="true">Book Demo</span>
                <span className="sr-only sm-mobile:hidden">Schedule Enterprise Demo</span>
              </Link>
              <Link href="/solutions" className="w-full sm-mobile:w-auto px-5 xs:px-6 sm-mobile:px-7 md-tablet:px-8 py-2.5 xs:py-3 sm-mobile:py-3.5 bg-white/10 backdrop-blur-sm font-sans font-medium text-[11px] xs:text-[12px] sm-mobile:text-[13px] md-tablet:text-sm text-white rounded-md xs:rounded-lg border border-white/30 hover:bg-white/20 hover:border-white/50 transition-all duration-200 shadow-lg shadow-black/20 text-center focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
                Explore Solutions
              </Link>
            </motion.div>

            {/* Structured Executive Metadata Divider */}
            <div className="w-full border-t border-white/20 pt-5 xs:pt-6 sm-mobile:pt-7 md-tablet:pt-8" />

            {/* Performance Stats Section */}
            <motion.dl
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-3 gap-4 xs:gap-5 sm-mobile:gap-6 sm:gap-8 md-tablet:gap-10 lg-tablet:gap-12 w-full max-w-xl"
            >
              <div className="space-y-1">
                <dd className="text-xl xs:text-[1.6rem] sm-mobile:text-2xl sm:text-3xl font-semibold tracking-tight text-white font-mono" style={{ textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}>
                  {mounted && <StatCounter target={2400} suffix="+" />}
                </dd>
                <dt className="text-[9px] xs:text-[10px] sm-mobile:text-[11px] font-mono font-medium tracking-wider text-slate-300 uppercase" style={{ textShadow: '0 1px 5px rgba(0,0,0,0.5)' }}>Active Units</dt>
              </div>
              <div className="space-y-1">
                <dd className="text-xl xs:text-[1.6rem] sm-mobile:text-2xl sm:text-3xl font-semibold tracking-tight text-white font-mono" style={{ textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}>
                  {mounted && <StatCounter target={150} suffix="M+" />}
                </dd>
                <dt className="text-[9px] xs:text-[10px] sm-mobile:text-[11px] font-mono font-medium tracking-wider text-slate-300 uppercase" style={{ textShadow: '0 1px 5px rgba(0,0,0,0.5)' }}>Safe Miles</dt>
              </div>
              <div className="space-y-1">
                <dd className="text-xl xs:text-[1.6rem] sm-mobile:text-2xl sm:text-3xl font-semibold tracking-tight text-white font-mono" style={{ textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}>
                  {mounted && <StatCounter target={99.9} decimals={1} suffix="%" />}
                </dd>
                <dt className="text-[9px] xs:text-[10px] sm-mobile:text-[11px] font-mono font-medium tracking-wider text-slate-300 uppercase" style={{ textShadow: '0 1px 5px rgba(0,0,0,0.5)' }}>System Uptime</dt>
              </div>
            </motion.dl>
          </div>


        </div>
      </motion.div>
    </section>
  );
}