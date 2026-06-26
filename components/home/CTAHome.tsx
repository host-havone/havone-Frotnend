"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

export default function CTAHome() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 px-8 bg-surface relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-secondary to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-secondary to-transparent" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          className="bg-white border-2 border-secondary/30 rounded-3xl p-16 shadow-2xl text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="font-h1 text-5xl md:text-6xl text-primary mb-6">
              Ready to See Your Fleet
              <br />
              <span className="text-secondary">Like Never Before?</span>
            </h2>

            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-12">
              Be among the first fleet operators in India to deploy HAVONE. Limited early-access slots available — no upfront hardware cost.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link href="/contact">
                <motion.button
                  className="bg-secondary text-primary px-12 py-4 font-label-tech text-label-tech uppercase tracking-widest font-bold shadow-lg"
                  whileHover={{ scale: 1.05, boxShadow: "0 25px 50px rgba(141, 195, 19, 0.4)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  Apply for Early Access
                </motion.button>
              </Link>

              <Link href="/contact">
                <motion.button
                  className="border-2 border-primary text-primary px-12 py-4 font-label-tech text-label-tech uppercase tracking-widest hover:bg-primary hover:text-white transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Talk to Our Team
                </motion.button>
              </Link>
            </div>

            {/* Trust Indicators */}
            <motion.div
              className="grid grid-cols-3 gap-8 mt-12 pt-12 border-t border-outline-variant/20"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.4 }}
            >
              {[
                { icon: "verified_user", label: "Data Security Certified" },
                { icon: "flag", label: "Made in India" },
                { icon: "support_agent", label: "24/7 Support" }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="flex flex-col items-center"
                  whileHover={{ y: -5 }}
                >
                  <span className="material-symbols-outlined text-secondary text-4xl mb-2" style={{ fontVariationSettings: "'FILL' 1" }}>
                    {item.icon}
                  </span>
                  <span className="font-label-tech text-label-tech text-on-surface-variant uppercase text-center">
                    {item.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
