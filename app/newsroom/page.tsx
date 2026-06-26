"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Speedometer from "@/components/Speedometer";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.3 }
};

function AnimatedSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.3 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function NewsletterPage() {
  const [email, setEmail] = useState("");
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Newsletter signup:", email);
  };

  return (
    <>
      <Speedometer />
      <Header />
      <main className="mt-[100px]">
        {/* Hero Section — Full viewport single screen */}
        <section ref={heroRef} className="h-[calc(100dvh-100px)] w-full flex items-center justify-center bg-gradient-to-br from-slate-50 to-white relative overflow-hidden px-margin">
          {/* Decorative background elements */}
          <div className="absolute inset-0 z-0 opacity-40">
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/3 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
          </div>

          {/* Content */}
          <motion.div
            className="relative z-10 text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
          >
            {/* Label */}
            <motion.span
              className="font-label-tech text-label-tech text-secondary uppercase tracking-[0.2em] block mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isHeroInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ delay: 0.2 }}
            >
              News & Updates
            </motion.span>

            {/* Headline */}
            <motion.h1
              className="text-5xl sm:text-6xl md:text-7xl font-bold text-primary leading-[1.1] tracking-[-0.02em] mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.3, duration: 0.7 }}
            >
              News & <span className="text-secondary">Updates</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              className="text-lg md:text-xl text-on-surface-variant leading-[1.8] max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={isHeroInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.4 }}
            >
              Product launches, partnerships, and milestones on our road to autonomous mobility.
            </motion.p>
          </motion.div>
        </section>

        {/* Press Releases */}
        <AnimatedSection>
          <section className="mb-xl">
            <div className="flex justify-between items-end mb-lg">
              <div>
                <h2 className="font-h2 text-h2 uppercase tracking-tight">Press Releases</h2>
                <p className="font-label-tech text-label-tech text-on-surface-variant mt-xs">
                  Official statements & strategic updates
                </p>
              </div>
              <motion.button
                className="font-label-tech text-label-tech text-primary border-b-2 border-primary pb-1 hover:text-secondary-fixed transition-colors"
                whileHover={{ x: 5 }}
              >
                View Archive
              </motion.button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
              {[
                {
                  date: "Nov 24, 2024",
                  title: "HAVONE MOBILITY achieves Level 4 Autonomy in dense urban environments.",
                  desc: "The proprietary Ocular-X sensor suite demonstrates unprecedented reliability in rainfall and heavy occlusion scenarios during Berlin pilot trials."
                },
                {
                  date: "Nov 18, 2024",
                  title: "Strategic Partnership: Integration with Neo-Grid Infrastructure.",
                  desc: "Collaborating with municipal energy providers to implement induction-based charging while vehicles wait at intersections."
                },
                {
                  date: "Nov 05, 2024",
                  title: "Expansion Announcement: North American HQ opens in Austin.",
                  desc: "A 50,000 sq ft facility dedicated to R&D and specialized AI training for diverse edge-case scenarios."
                }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="bg-white border border-outline-variant/20 p-md flex flex-col justify-between group hover:border-secondary transition-all"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
                >
                  <div>
                    <span className="font-label-tech text-[10px] text-on-surface-variant uppercase mb-md block">
                      {item.date}
                    </span>
                    <h3 className="font-h3 text-h3 mb-sm group-hover:text-secondary transition-colors">
                      {item.title}
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant line-clamp-3">
                      {item.desc}
                    </p>
                  </div>
                  <motion.div
                    className="mt-lg flex items-center justify-between"
                    whileHover={{ x: 5 }}
                  >
                    <span className="font-label-tech text-label-tech text-primary uppercase font-bold">
                      Read Full Release
                    </span>
                    <span className="material-symbols-outlined text-secondary">arrow_forward_ios</span>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </section>
        </AnimatedSection>

        {/* Blog & Insights */}
        <AnimatedSection>
          <section className="mb-xl">
            <h2 className="font-h2 text-h2 uppercase tracking-tight mb-lg">Blog & Insights</h2>
            <div className="grid grid-cols-12 gap-gutter">
              {/* Featured Post */}
              <motion.article
                className="col-span-12 lg:col-span-8 bg-white border border-outline-variant/20 overflow-hidden group"
                whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="relative h-64 md:h-full overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-primary/20"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.5 }}
                    />
                    <div className="absolute top-md left-md">
                      <span className="bg-primary text-white font-label-tech text-[10px] px-sm py-1 uppercase tracking-widest">
                        Technical Deep-Dive
                      </span>
                    </div>
                  </div>
                  <div className="p-lg flex flex-col justify-center">
                    <span className="font-label-tech text-[10px] text-on-surface-variant uppercase mb-sm">
                      AI Architecture
                    </span>
                    <h3 className="font-h2 text-h2 mb-md leading-tight">
                      Beyond LIDAR: The fusion of multi-spectral neural networks.
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant mb-lg">
                      How HAVONE MOBILITY&apos;s latest update reduces compute latency by 40% while increasing object classification accuracy in extreme weather conditions.
                    </p>
                    <motion.button
                      className="bg-primary text-on-primary w-fit px-md py-xs font-label-tech text-label-tech uppercase group-hover:bg-secondary-fixed-dim transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Read Article
                    </motion.button>
                  </div>
                </div>
              </motion.article>

              {/* Small Cards */}
              {[
                {
                  tag: "SAFETY REPORT",
                  title: "Ethics of autonomy: Navigating the 'Social Contract'.",
                  desc: "A discussion on how AI decision frameworks are calibrated for human safety priorities.",
                  time: "6 min read"
                },
                {
                  tag: "INTERVIEW",
                  title: "Dr. Elena Thorne on the Future of V2X.",
                  desc: "Our Chief Science Officer explores why vehicles need to talk to more than just each other.",
                  time: "12 min read"
                }
              ].map((item, i) => (
                <motion.article
                  key={i}
                  className="col-span-12 md:col-span-6 lg:col-span-4 bg-white border border-outline-variant/20 p-md group"
                  whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="flex flex-col h-full">
                    <div className="mb-md">
                      <span className={`font-label-tech text-[10px] uppercase font-bold tracking-tighter ${
                        i === 0 ? "text-secondary" : "text-on-surface-variant"
                      }`}>
                        {item.tag}
                      </span>
                    </div>
                    <h3 className="font-h3 text-h3 mb-sm">{item.title}</h3>
                    <p className="font-body-md text-body-md text-on-surface-variant mb-lg">{item.desc}</p>
                    <div className="mt-auto pt-md border-t border-outline-variant/10">
                      <span className="font-label-tech text-label-tech text-on-surface-variant">{item.time}</span>
                    </div>
                  </div>
                </motion.article>
              ))}

              {/* Newsletter Signup Card */}
              <motion.article
                className="col-span-12 lg:col-span-4 bg-primary text-on-primary p-md relative overflow-hidden group"
                whileHover={{ scale: 1.02 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="absolute -right-12 -bottom-12 opacity-10 group-hover:opacity-20 transition-opacity"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <span className="material-symbols-outlined text-[200px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                    sensors
                  </span>
                </motion.div>
                <div className="relative z-10">
                  <span className="font-label-tech text-[10px] text-secondary-fixed uppercase font-bold mb-md block">
                    Newsletter
                  </span>
                  <h3 className="font-h3 text-h3 mb-md">Stay synchronized with the future.</h3>
                  <p className="font-body-md text-body-md text-primary-fixed mb-lg">
                    Weekly technical digests, safety reports, and innovation alerts delivered to your encrypted inbox.
                  </p>
                  <form onSubmit={handleSubmit} className="flex gap-xs">
                    <input
                      className="bg-transparent border border-outline-variant/30 text-white font-label-tech text-label-tech flex-1 focus:ring-secondary focus:border-secondary px-sm py-sm rounded"
                      placeholder="email@address.com"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    <motion.button
                      className="bg-secondary-fixed text-on-secondary-fixed px-md py-sm font-label-tech text-label-tech uppercase font-bold hover:bg-white transition-colors rounded"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      type="submit"
                    >
                      Join
                    </motion.button>
                  </form>
                </div>
              </motion.article>
            </div>
          </section>
        </AnimatedSection>

        {/* Upcoming Events */}
        <AnimatedSection>
          <section className="mb-xl">
            <h2 className="font-h2 text-h2 uppercase tracking-tight mb-lg">Upcoming Events</h2>
            <div className="space-y-base">
              {[
                {
                  date: "Jan 12-15",
                  year: "2025",
                  title: "Global Autonomy Summit",
                  desc: "Las Vegas, NV — Main Stage Keynote: \"The Post-Driving Era\"",
                  button: "RSVP / DETAILS"
                },
                {
                  date: "Feb 02",
                  year: "2025",
                  title: "Investor Webcast: Q4 Earnings",
                  desc: "Virtual Event — Technical roadmap review and hardware scalability report.",
                  button: "REGISTER"
                },
                {
                  date: "Mar 19",
                  year: "2025",
                  title: "Safety & Ethics Workshop",
                  desc: "London, UK — Collaborative session with EU mobility regulators.",
                  button: "DETAILS"
                }
              ].map((event, i) => (
                <motion.div
                  key={i}
                  className="bg-white border border-outline-variant/20 flex flex-col md:flex-row items-center hover:bg-surface-container-low transition-colors"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ x: 5 }}
                >
                  <div className="p-md md:w-48 text-center border-b md:border-b-0 md:border-r border-outline-variant/20">
                    <span className="font-label-tech text-label-tech text-on-surface-variant block uppercase">
                      {event.date}
                    </span>
                    <span className="font-h3 text-h3">{event.year}</span>
                  </div>
                  <div className="p-md flex-1">
                    <h4 className="font-h3 text-h3">{event.title}</h4>
                    <p className="font-body-md text-body-md text-on-surface-variant">{event.desc}</p>
                  </div>
                  <div className="p-md">
                    <motion.button
                      className="border border-primary px-md py-xs font-label-tech text-label-tech uppercase hover:bg-primary hover:text-white transition-all"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {event.button}
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        </AnimatedSection>
      </main>
      <Footer />
    </>
  );
}
