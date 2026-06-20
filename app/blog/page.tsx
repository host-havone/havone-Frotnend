"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Speedometer from "@/components/Speedometer";

function AnimatedSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const categories = ["All", "Technology", "Safety", "Innovation", "AI & ML", "Industry"];

const blogPosts = [
  {
    id: 1,
    date: "Jun 16, 2026",
    category: "Technology",
    title: "The Evolution of Autonomous Vehicle Perception Systems",
    excerpt: "Exploring the latest advancements in multi-sensor fusion and how HAVONE MOBILITY is pushing the boundaries of environmental understanding.",
    author: "Dr. Sarah Chen",
    readTime: "8 min read",
    featured: true
  },
  {
    id: 2,
    date: "Jun 15, 2026",
    category: "Safety",
    title: "Real-World Testing: 10 Million Miles of Autonomous Driving Data",
    excerpt: "Key insights and safety metrics from our extensive real-world testing program across diverse conditions and environments.",
    author: "Michael Rodriguez",
    readTime: "6 min read",
    featured: false
  },
  {
    id: 3,
    date: "Jun 14, 2026",
    category: "Innovation",
    title: "Vehicle-to-Everything (V2X): Building Smarter Cities",
    excerpt: "How connected infrastructure and autonomous vehicles work together to create safer, more efficient urban mobility ecosystems.",
    author: "Emma Thompson",
    readTime: "10 min read",
    featured: false
  },
  {
    id: 4,
    date: "Jun 13, 2026",
    category: "AI & ML",
    title: "Neural Network Optimization for Edge Computing in AVs",
    excerpt: "Deep dive into how we optimize machine learning models to run efficiently on vehicle hardware without compromising performance.",
    author: "Dr. James Park",
    readTime: "12 min read",
    featured: false
  },
  {
    id: 5,
    date: "Jun 12, 2026",
    category: "Industry",
    title: "The Future of Freight: Autonomous Trucking Economics",
    excerpt: "Analyzing the economic impact and potential of autonomous trucking on the logistics industry and supply chain efficiency.",
    author: "Lisa Anderson",
    readTime: "7 min read",
    featured: false
  },
  {
    id: 6,
    date: "Jun 11, 2026",
    category: "Technology",
    title: "LiDAR vs. Camera: The Great Sensor Debate",
    excerpt: "A technical comparison of sensor technologies and why multi-modal approaches are essential for robust autonomous driving.",
    author: "Dr. Sarah Chen",
    readTime: "9 min read",
    featured: false
  },
  {
    id: 7,
    date: "Jun 10, 2026",
    category: "Safety",
    title: "Redundancy by Design: Fail-Safe Systems in Autonomous Vehicles",
    excerpt: "How we engineer multiple layers of safety into every autonomous vehicle system to ensure reliability even when components fail.",
    author: "Michael Rodriguez",
    readTime: "11 min read",
    featured: false
  },
  {
    id: 8,
    date: "Jun 09, 2026",
    category: "Innovation",
    title: "5G Networks and the Next Generation of Vehicle Connectivity",
    excerpt: "Exploring how ultra-low latency 5G networks enable new capabilities for autonomous vehicles and fleet coordination.",
    author: "Emma Thompson",
    readTime: "8 min read",
    featured: false
  }
];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [email, setEmail] = useState("");
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });

  const filteredPosts = selectedCategory === "All"
    ? blogPosts
    : blogPosts.filter(post => post.category === selectedCategory);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Newsletter signup:", email);
  };

  return (
    <>
      <Speedometer />
      <Header />
      <main className="mt-[100px] mb-20 px-8 max-w-[1440px] mx-auto">
        {/* Hero Section */}
        <section ref={heroRef} className="py-20 border-b border-outline-variant/20 mb-20">
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, x: -40 }}
            animate={isHeroInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="flex items-center gap-3 mb-6"
              initial={{ opacity: 0 }}
              animate={isHeroInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="bg-secondary-fixed text-on-secondary-fixed px-3 py-1 rounded font-label-tech text-label-tech tracking-widest uppercase">
                Daily Updates
              </span>
              <div className="h-[1px] w-12 bg-outline-variant"></div>
            </motion.div>
            <motion.h1
              className="font-h1 text-h1 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.3 }}
            >
              HAVONE <span className="text-secondary">BLOG</span>
            </motion.h1>
            <motion.p
              className="font-body-lg text-body-lg text-on-surface-variant max-w-xl"
              initial={{ opacity: 0 }}
              animate={isHeroInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.5 }}
            >
              Daily insights, technical deep-dives, and industry perspectives on the future of autonomous mobility. Stay informed with the latest from our engineering and research teams.
            </motion.p>
          </motion.div>
        </section>

        {/* Category Filter */}
        <AnimatedSection>
          <div className="mb-16">
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              {categories.map((category) => (
                <motion.button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 font-label-tech text-label-tech uppercase tracking-widest transition-all border-2 ${
                    selectedCategory === category
                      ? "bg-primary text-on-primary border-primary"
                      : "bg-white text-on-surface border-outline-variant/20 hover:border-primary"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Featured Post */}
        {selectedCategory === "All" && (
          <AnimatedSection>
            <section className="mb-20">
              <h2 className="font-h2 text-h2 uppercase tracking-tight mb-8">Featured Today</h2>
              <motion.article
                className="bg-white border border-outline-variant/20 overflow-hidden group"
                whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="relative h-64 md:h-96 overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-primary/20"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.5 }}
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="opacity-20"
                      >
                        <span className="material-symbols-outlined text-[200px] text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>
                          hub
                        </span>
                      </motion.div>
                    </div>
                    <div className="absolute top-6 left-6">
                      <span className="bg-primary text-white font-label-tech text-label-tech px-3 py-1 uppercase tracking-widest">
                        Featured
                      </span>
                    </div>
                  </div>
                  <div className="p-12 flex flex-col justify-center">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="font-label-tech text-label-tech text-secondary uppercase font-bold">
                        {blogPosts[0].category}
                      </span>
                      <span className="text-on-surface-variant">•</span>
                      <span className="font-label-tech text-label-tech text-on-surface-variant">
                        {blogPosts[0].date}
                      </span>
                    </div>
                    <h3 className="font-h2 text-h2 mb-6 leading-tight">
                      {blogPosts[0].title}
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant mb-8">
                      {blogPosts[0].excerpt}
                    </p>
                    <div className="flex items-center justify-between mb-8">
                      <span className="font-body-md text-body-md text-on-surface-variant">
                        By {blogPosts[0].author}
                      </span>
                      <span className="font-label-tech text-label-tech text-on-surface-variant">
                        {blogPosts[0].readTime}
                      </span>
                    </div>
                    <motion.button
                      className="bg-primary text-on-primary w-fit px-8 py-3 font-label-tech text-label-tech uppercase group-hover:bg-secondary-fixed-dim transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Read Article
                    </motion.button>
                  </div>
                </div>
              </motion.article>
            </section>
          </AnimatedSection>
        )}

        {/* All Blog Posts */}
        <AnimatedSection>
          <section className="mb-20">
            <h2 className="font-h2 text-h2 uppercase tracking-tight mb-8">
              {selectedCategory === "All" ? "Latest Articles" : `${selectedCategory} Articles`}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPosts.slice(selectedCategory === "All" ? 1 : 0).map((post, i) => (
                <motion.article
                  key={post.id}
                  className="bg-white border border-outline-variant/20 p-8 group hover:border-secondary transition-all flex flex-col"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
                >
                  <div className="flex items-center gap-2 mb-4">
                    <span className="font-label-tech text-label-tech text-secondary uppercase font-bold">
                      {post.category}
                    </span>
                    <span className="text-on-surface-variant">•</span>
                    <span className="font-label-tech text-label-tech text-on-surface-variant">
                      {post.date}
                    </span>
                  </div>
                  <h3 className="font-h3 text-h3 mb-4 group-hover:text-secondary transition-colors">
                    {post.title}
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant mb-6 line-clamp-3 flex-grow">
                    {post.excerpt}
                  </p>
                  <div className="mt-auto pt-6 border-t border-outline-variant/10">
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-body-md text-body-md text-on-surface-variant">
                        {post.author}
                      </span>
                      <span className="font-label-tech text-label-tech text-on-surface-variant">
                        {post.readTime}
                      </span>
                    </div>
                    <motion.div className="flex items-center justify-between group-hover:translate-x-1 transition-transform">
                      <span className="font-label-tech text-label-tech text-primary uppercase font-bold">
                        Read More
                      </span>
                      <span className="material-symbols-outlined text-secondary">arrow_forward</span>
                    </motion.div>
                  </div>
                </motion.article>
              ))}
            </div>
          </section>
        </AnimatedSection>

        {/* Newsletter Signup */}
        <AnimatedSection>
          <section className="mb-20">
            <motion.div
              className="bg-primary text-on-primary p-16 relative overflow-hidden"
              whileHover={{ scale: 1.01 }}
            >
              <motion.div
                className="absolute -right-12 -bottom-12 opacity-10"
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              >
                <span className="material-symbols-outlined text-[300px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                  rss_feed
                </span>
              </motion.div>
              <div className="relative z-10 max-w-3xl">
                <span className="font-label-tech text-label-tech text-secondary-fixed uppercase font-bold mb-4 block">
                  Daily Digest
                </span>
                <h2 className="font-h2 text-h2 mb-6">Never Miss an Update</h2>
                <p className="font-body-lg text-body-lg text-primary-fixed mb-8">
                  Subscribe to our daily blog digest and get the latest articles, technical insights, and industry news delivered directly to your inbox every morning.
                </p>
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-2xl">
                  <input
                    className="bg-transparent border border-outline-variant/30 text-white font-label-tech text-label-tech flex-1 focus:ring-secondary focus:border-secondary px-6 py-4 rounded placeholder:text-white/50"
                    placeholder="your.email@company.com"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <motion.button
                    className="bg-secondary-fixed text-on-secondary-fixed px-12 py-4 font-label-tech text-label-tech uppercase font-bold hover:bg-white hover:text-primary transition-colors rounded"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                  >
                    Subscribe
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </section>
        </AnimatedSection>

        {/* Archives */}
        <AnimatedSection>
          <section className="mb-20">
            <div className="flex justify-between items-center mb-8">
              <h2 className="font-h2 text-h2 uppercase tracking-tight">Explore More</h2>
              <motion.button
                className="font-label-tech text-label-tech text-primary border-b-2 border-primary pb-1 hover:text-secondary-fixed transition-colors"
                whileHover={{ x: 5 }}
              >
                View Full Archive
              </motion.button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { label: "Technology", count: 84 },
                { label: "Safety", count: 63 },
                { label: "Innovation", count: 52 },
                { label: "AI & ML", count: 48 }
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  className="bg-white border border-outline-variant/20 p-8 text-center hover:border-primary transition-colors cursor-pointer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <span className="font-h2 text-h2 text-secondary block mb-2">{item.count}</span>
                  <span className="font-label-tech text-label-tech text-on-surface-variant uppercase">
                    {item.label}
                  </span>
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
