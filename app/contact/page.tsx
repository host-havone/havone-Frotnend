"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Speedometer from "@/components/Speedometer";

function AnimatedSection({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.3, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "PARTNERSHIP_PROPOSAL",
    message: "",
    terms: false,
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSuccess(true);
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        subject: "PARTNERSHIP_PROPOSAL",
        message: "",
        terms: false,
      });
    }, 2000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  return (
    <>
      <Speedometer />
      <Header />

      {/* Success Modal */}
      {showSuccess && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-primary/80 backdrop-blur-sm p-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-primary border-2 border-secondary-fixed max-w-md w-full p-lg rounded-xl shadow-[0_0_50px_rgba(141,195,19,0.4)] flex flex-col items-center text-center"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <motion.div
              className="w-16 h-16 rounded-full bg-secondary-fixed/10 border border-secondary-fixed flex items-center justify-center mb-md"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <span className="material-symbols-outlined text-secondary-fixed text-4xl">task_alt</span>
            </motion.div>
            <h3 className="font-h3 text-secondary-fixed uppercase tracking-widest mb-sm">Transmission Confirmed</h3>
            <p className="font-label-tech text-surface-container-highest text-sm mb-lg">
              Your message has been received. You will be contacted within 48 hours.
            </p>
            <motion.button
              className="bg-secondary-fixed text-primary px-xl py-xs font-label-tech uppercase tracking-tighter text-label-tech rounded-lg transition-all hover:brightness-110"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowSuccess(false)}
            >
              Close Terminal
            </motion.button>
          </motion.div>
        </motion.div>
      )}

      <main className="pt-xl pb-xl">
        {/* Hero Section */}
        <section ref={heroRef} className="max-w-[1440px] mx-auto px-margin mt-xl mb-xl">
          <motion.div
            className="flex flex-col md:flex-row justify-between items-end gap-md border-l-4 border-secondary pl-md"
            initial={{ opacity: 0, x: -40 }}
            animate={isHeroInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.8 }}
          >
            <div>
              <motion.span
                className="font-label-tech text-label-tech text-secondary tracking-[0.2em] uppercase"
                initial={{ opacity: 0 }}
                animate={isHeroInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.2 }}
              >
                Communication Uplink
              </motion.span>
              <motion.h1
                className="font-h1 text-h1 uppercase mt-xs"
                initial={{ opacity: 0, y: 20 }}
                animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.3 }}
              >
                Mission Control
              </motion.h1>
            </div>
            <motion.div
              className="hidden md:block text-right"
              initial={{ opacity: 0, x: 20 }}
              animate={isHeroInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ delay: 0.5 }}
            >
              <p className="font-label-tech text-label-tech text-outline">LAT: 37.7749° N</p>
              <p className="font-label-tech text-label-tech text-outline">LONG: 122.4194° W</p>
            </motion.div>
          </motion.div>
        </section>

        <div className="max-w-[1440px] mx-auto flex flex-col gap-xl">
          {/* Map & Telemetry Section */}
          <section className="bg-surface-container-low/50 py-xl px-margin border-y border-outline-variant/20">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
              {/* Interactive Map */}
              <AnimatedSection className="md:col-span-8">
                <motion.div
                  className="bg-surface-container-lowest border border-outline-variant/40 rounded-xl overflow-hidden relative group shadow-sm"
                  whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="absolute top-md left-md z-10 flex flex-col gap-xs">
                    <motion.div
                      className="bg-primary text-on-primary px-sm py-xs flex items-center gap-xs rounded-lg"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 }}
                    >
                      <span className="material-symbols-outlined text-[18px] text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>
                        location_on
                      </span>
                      <span className="font-label-tech text-label-tech uppercase">Global Node: San Francisco</span>
                    </motion.div>
                    <motion.div
                      className="bg-white/80 backdrop-blur-sm p-sm rounded-lg border border-outline-variant/20 shadow-sm"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 }}
                    >
                      <span className="font-label-tech text-label-tech block text-outline uppercase text-[10px]">Active Nodes</span>
                      <div className="flex gap-xs mt-xs">
                        <motion.span
                          className="w-2 h-2 rounded-full bg-secondary"
                          animate={{ opacity: [1, 0.3, 1] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        />
                        <motion.span
                          className="w-2 h-2 rounded-full bg-secondary"
                          animate={{ opacity: [1, 0.3, 1] }}
                          transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
                        />
                        <span className="w-2 h-2 rounded-full bg-outline-variant"></span>
                      </div>
                    </motion.div>
                  </div>
                  <div className="w-full h-[500px] bg-surface-dim relative overflow-hidden">
                    <Image
                      src="/images/map-image.png"
                      alt="Navigation Map with Route"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="p-md flex justify-between items-center border-t border-outline-variant/20 bg-white">
                    <div className="flex gap-lg">
                      <div>
                        <p className="font-label-tech text-label-tech text-outline uppercase text-[10px]">Signal Strength</p>
                        <p className="font-h3 text-h3 font-black">99.8%</p>
                      </div>
                      <div>
                        <p className="font-label-tech text-label-tech text-outline uppercase text-[10px]">Ping</p>
                        <p className="font-h3 text-h3 font-black">12ms</p>
                      </div>
                    </div>
                    <motion.button
                      className="flex items-center gap-xs font-label-tech text-label-tech uppercase hover:text-secondary transition-colors font-bold"
                      whileHover={{ x: 5 }}
                    >
                      Switch Node <span className="material-symbols-outlined">chevron_right</span>
                    </motion.button>
                  </div>
                </motion.div>
              </AnimatedSection>

              {/* Telemetry Module */}
              <div className="md:col-span-4 flex flex-col gap-gutter">
                <AnimatedSection delay={0.2}>
                  <motion.div
                    className="bg-primary text-on-primary p-md rounded-xl flex flex-col justify-between h-full min-h-[240px] relative overflow-hidden shadow-lg"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="relative z-10">
                      <span className="font-label-tech text-label-tech text-secondary uppercase tracking-widest font-bold">
                        System Velocity
                      </span>
                      <div className="flex items-baseline gap-xs mt-md">
                        <motion.span
                          className="font-h1 text-[64px] font-black leading-none"
                          animate={{ scale: [1, 1.05, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          128
                        </motion.span>
                        <span className="font-label-tech text-label-tech opacity-60">TB/S</span>
                      </div>
                    </div>
                    <div className="relative z-10 flex flex-col gap-xs">
                      <div className="h-1 bg-on-primary/10 w-full rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-secondary"
                          initial={{ width: "0%" }}
                          animate={{ width: "85%" }}
                          transition={{ duration: 1.5, delay: 0.5 }}
                        />
                      </div>
                      <p className="font-label-tech text-label-tech uppercase text-[10px] opacity-60">Inquiry Processing Load</p>
                    </div>
                    <motion.svg
                      className="absolute -right-10 -bottom-10 opacity-20 w-48 h-48 text-secondary"
                      viewBox="0 0 100 100"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    >
                      <circle cx="50" cy="50" fill="none" r="45" stroke="currentColor" strokeDasharray="283" strokeDashoffset="70" strokeWidth="2" />
                      <path d="M 50 50 L 80 20" stroke="currentColor" strokeLinecap="round" strokeWidth="4" />
                    </motion.svg>
                  </motion.div>
                </AnimatedSection>

                <AnimatedSection delay={0.3}>
                  <div className="bg-surface-container-high border border-outline-variant/30 p-md rounded-xl shadow-inner">
                    <span className="font-label-tech text-label-tech text-outline uppercase block mb-md font-bold">
                      Telemetry Status
                    </span>
                    <div className="grid grid-cols-2 gap-sm">
                      {[
                        { label: "Lidar", value: "ACTIVE", color: "secondary" },
                        { label: "Fleet", value: "2.4k UNITS", color: "on-surface" },
                        { label: "Safety", value: "OPTIMAL", color: "secondary" },
                        { label: "Response", value: "< 2 MIN", color: "on-surface" }
                      ].map((item, i) => (
                        <motion.div
                          key={i}
                          className="bg-surface-container-lowest p-sm border border-outline-variant/20 rounded-lg shadow-sm"
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.1 }}
                          whileHover={{ scale: 1.05 }}
                        >
                          <p className="font-label-tech text-[10px] uppercase text-outline">{item.label}</p>
                          <p className={`font-label-tech text-${item.color} font-bold`}>{item.value}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </section>

          {/* Contact Form Section */}
          <AnimatedSection>
            <section className="py-xl px-margin">
              <motion.div
                className="bg-white border border-outline-variant/50 rounded-2xl p-lg grid grid-cols-1 md:grid-cols-2 gap-xl relative overflow-hidden shadow-xl"
                whileHover={{ boxShadow: "0 25px 50px rgba(0,0,0,0.15)" }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="absolute top-0 right-0 p-md pointer-events-none"
                  animate={{ opacity: [0.05, 0.1, 0.05] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <span className="material-symbols-outlined text-outline-variant text-[160px]" style={{ fontVariationSettings: "'wght' 100" }}>
                    terminal
                  </span>
                </motion.div>

                <div>
                  <motion.h2
                    className="font-h2 text-h2 uppercase mb-md border-b-2 border-secondary inline-block pb-1"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                  >
                    Initialize Inquiry
                  </motion.h2>
                  <motion.p
                    className="text-on-surface-variant max-w-md mb-lg"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                  >
                    Submit your technical specifications or partnership request. Our autonomous triage system will route your inquiry to
                    the appropriate department within 128 milliseconds.
                  </motion.p>

                  {/* Digital Envelope */}
                  <motion.div
                    className="relative bg-primary rounded-xl p-lg border border-secondary/30 overflow-hidden mb-lg shadow-2xl"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    style={{
                      backgroundImage: "linear-gradient(rgba(141, 195, 19, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(141, 195, 19, 0.05) 1px, transparent 1px)",
                      backgroundSize: "20px 20px"
                    }}
                  >
                    <div className="absolute top-0 right-0 border-l border-b border-secondary/30 p-xs bg-secondary/5">
                      <span className="font-label-tech text-[10px] text-secondary tracking-tighter uppercase opacity-50">
                        Secure Transmission v.2.4
                      </span>
                    </div>
                    <div className="space-y-md relative z-10">
                      <div className="border-l-2 border-secondary pl-md">
                        <p className="font-label-tech text-secondary/60 text-[9px] uppercase tracking-widest mb-xs">
                          Originating Node // Sender
                        </p>
                        <p className="font-body-md font-bold text-white uppercase tracking-tight">HAVONE MOBILITY Global Node</p>
                        <p className="font-label-tech text-secondary text-[12px] uppercase">San Francisco, CA 94103</p>
                      </div>
                      <div className="flex items-center gap-xs opacity-30">
                        <div className="h-[1px] flex-grow bg-secondary"></div>
                        <span className="material-symbols-outlined text-secondary text-xs">alternate_email</span>
                        <div className="h-[1px] flex-grow bg-secondary"></div>
                      </div>
                      <div className="border-l-2 border-secondary/30 pl-md">
                        <p className="font-label-tech text-secondary/60 text-[9px] uppercase tracking-widest mb-xs">
                          Destination Point // Recipient
                        </p>
                        <div className="min-h-[20px]">
                          <p className="font-body-md font-bold text-secondary uppercase tracking-tight">
                            {formData.name || "UNDEFINED_IDENTITY"}
                          </p>
                        </div>
                        <div className="min-h-[16px]">
                          <p className="font-label-tech text-white text-[12px] uppercase opacity-70">
                            {formData.email || "ENDPOINT_NOT_SECURED"}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  <div className="space-y-md">
                    {[
                      { icon: "mail", label: "Email Uplink", value: "ops@havone.ai" },
                      { icon: "call", label: "Secure Line", value: "+1 (800) HAVONE" }
                    ].map((item, i) => (
                      <motion.div
                        key={i}
                        className="flex items-center gap-md"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 + i * 0.1 }}
                      >
                        <div className="w-10 h-10 rounded-full bg-secondary/10 border border-secondary/20 flex items-center justify-center">
                          <span className="material-symbols-outlined text-secondary">{item.icon}</span>
                        </div>
                        <div>
                          <p className="font-label-tech text-label-tech text-outline uppercase text-[10px]">{item.label}</p>
                          <p className="font-body-md font-bold">{item.value}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <motion.form
                  className="space-y-md relative z-10 bg-surface-container-low/30 p-md rounded-xl border border-outline-variant/20"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                >
                  <div className="grid grid-cols-2 gap-md">
                    <div className="flex flex-col gap-xs">
                      <label htmlFor="contact-name" className="font-label-tech text-label-tech uppercase text-[10px] text-outline font-bold">
                        Protocol / Name <span className="text-secondary" aria-hidden="true">*</span>
                      </label>
                      <input
                        id="contact-name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="bg-white border border-outline-variant px-md py-sm rounded-lg focus:ring-2 focus:ring-secondary focus:border-secondary focus:outline-none transition-all placeholder:opacity-30"
                        placeholder="IDENTITY"
                        type="text"
                        required
                        aria-required="true"
                      />
                    </div>
                    <div className="flex flex-col gap-xs">
                      <label htmlFor="contact-email" className="font-label-tech text-label-tech uppercase text-[10px] text-outline font-bold">
                        Frequency / Email <span className="text-secondary" aria-hidden="true">*</span>
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="bg-white border border-outline-variant px-md py-sm rounded-lg focus:ring-2 focus:ring-secondary focus:border-secondary focus:outline-none transition-all placeholder:opacity-30"
                        placeholder="ENDPOINT"
                        type="email"
                        required
                        aria-required="true"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-xs">
                    <label htmlFor="contact-subject" className="font-label-tech text-label-tech uppercase text-[10px] text-outline font-bold">Inquiry Vector</label>
                    <select
                      id="contact-subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="bg-white border border-outline-variant px-md py-sm rounded-lg focus:ring-2 focus:ring-secondary focus:border-secondary focus:outline-none transition-all appearance-none cursor-pointer"
                    >
                      <option value="PARTNERSHIP_PROPOSAL">PARTNERSHIP_PROPOSAL</option>
                      <option value="TECHNICAL_SUPPORT">TECHNICAL_SUPPORT</option>
                      <option value="MEDIA_ENQUIRY">MEDIA_ENQUIRY</option>
                      <option value="FLEET_EXPANSION">FLEET_EXPANSION</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-xs">
                    <label htmlFor="contact-message" className="font-label-tech text-label-tech uppercase text-[10px] text-outline font-bold">
                      Data Payload / Message <span className="text-secondary" aria-hidden="true">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="bg-white border border-outline-variant px-md py-sm rounded-lg focus:ring-2 focus:ring-secondary focus:border-secondary focus:outline-none transition-all placeholder:opacity-30 resize-none"
                      placeholder="TRANSMIT MESSAGE CONTENT..."
                      required
                      aria-required="true"
                      rows={4}
                    />
                  </div>
                  <div className="flex items-center gap-sm mt-md">
                    <input
                      id="contact-terms"
                      name="terms"
                      checked={formData.terms}
                      onChange={handleInputChange}
                      className="w-4 h-4 rounded border-outline-variant text-secondary focus:ring-secondary"
                      type="checkbox"
                      required
                      aria-required="true"
                    />
                    <label htmlFor="contact-terms" className="font-label-tech text-[10px] uppercase text-outline">
                      I authorize the transmission of this data via secure nodes. <span className="text-secondary" aria-hidden="true">*</span>
                    </label>
                  </div>
                  <motion.button
                    className="w-full bg-primary text-on-primary p-md rounded-lg font-label-tech uppercase tracking-widest text-label-tech flex items-center justify-center gap-md group shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
                    type="submit"
                    whileHover={{ scale: 1.02, backgroundColor: "#8DC313" }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="material-symbols-outlined text-secondary group-hover:text-primary" aria-hidden="true">
                      bolt
                    </span>
                    Transmit Data
                  </motion.button>
                </motion.form>
              </motion.div>
            </section>
          </AnimatedSection>
        </div>
      </main>
      <Footer />
    </>
  );
}
