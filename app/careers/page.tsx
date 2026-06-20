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

const departments = ["All", "Engineering", "Research", "Operations", "Product", "Design"];

const jobListings = [
  {
    id: 1,
    title: "Senior Autonomous Systems Engineer",
    department: "Engineering",
    location: "San Francisco, CA",
    type: "Full-time",
    description: "Lead the development of perception and planning systems for our autonomous vehicle platform. Work with cutting-edge sensor fusion and AI technologies.",
    skills: ["C++", "Python", "ROS", "Computer Vision", "LIDAR"],
    featured: true
  },
  {
    id: 2,
    title: "Machine Learning Research Scientist",
    department: "Research",
    location: "Boston, MA",
    type: "Full-time",
    description: "Develop and optimize neural network architectures for real-time autonomous driving applications. Publish research and advance the state of the art.",
    skills: ["PyTorch", "TensorFlow", "Deep Learning", "Computer Vision", "PhD preferred"],
    featured: true
  },
  {
    id: 3,
    title: "Fleet Operations Manager",
    department: "Operations",
    location: "Austin, TX",
    type: "Full-time",
    description: "Oversee day-to-day operations of our autonomous vehicle fleet. Ensure optimal performance, safety, and efficiency across all deployments.",
    skills: ["Fleet Management", "Logistics", "Data Analysis", "Leadership"],
    featured: false
  },
  {
    id: 4,
    title: "Robotics Software Engineer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    description: "Build robust software for vehicle control systems, sensor integration, and autonomous navigation. Work on real-world robotics challenges.",
    skills: ["C++", "Python", "ROS2", "Linux", "Real-time Systems"],
    featured: false
  },
  {
    id: 5,
    title: "Safety & Validation Engineer",
    department: "Engineering",
    location: "San Francisco, CA",
    type: "Full-time",
    description: "Develop and execute safety validation protocols for autonomous systems. Ensure compliance with industry standards and regulations.",
    skills: ["ISO 26262", "FMEA", "Testing", "Systems Engineering"],
    featured: false
  },
  {
    id: 6,
    title: "Product Manager - Autonomous Platforms",
    department: "Product",
    location: "San Francisco, CA",
    type: "Full-time",
    description: "Define product strategy and roadmap for our autonomous vehicle platform. Work cross-functionally to deliver innovative solutions.",
    skills: ["Product Strategy", "Agile", "Stakeholder Management", "Technical Background"],
    featured: false
  },
  {
    id: 7,
    title: "UX/UI Designer - Fleet Interface",
    department: "Design",
    location: "Remote",
    type: "Full-time",
    description: "Design intuitive interfaces for fleet management and vehicle monitoring systems. Create seamless user experiences for complex autonomous systems.",
    skills: ["Figma", "UI/UX Design", "Prototyping", "User Research"],
    featured: false
  },
  {
    id: 8,
    title: "Computer Vision Engineer",
    department: "Research",
    location: "Boston, MA",
    type: "Full-time",
    description: "Develop advanced computer vision algorithms for object detection, tracking, and scene understanding in autonomous driving scenarios.",
    skills: ["Python", "OpenCV", "Deep Learning", "3D Vision", "SLAM"],
    featured: false
  }
];

const benefits = [
  {
    icon: "health_and_safety",
    title: "Health & Wellness",
    description: "Comprehensive medical, dental, and vision insurance for you and your family"
  },
  {
    icon: "savings",
    title: "Competitive Compensation",
    description: "Industry-leading salary, equity packages, and performance bonuses"
  },
  {
    icon: "calendar_month",
    title: "Flexible Time Off",
    description: "Unlimited PTO policy and company-wide shutdown during holidays"
  },
  {
    icon: "school",
    title: "Learning & Development",
    description: "Annual learning budget and access to conferences, courses, and workshops"
  },
  {
    icon: "home",
    title: "Remote Work",
    description: "Flexible work arrangements with option for fully remote or hybrid"
  },
  {
    icon: "restaurant",
    title: "Meals & Snacks",
    description: "Catered lunches, fully stocked kitchens, and premium coffee"
  }
];

const values = [
  {
    title: "Innovation First",
    description: "We push boundaries and embrace cutting-edge technologies to solve impossible problems."
  },
  {
    title: "Safety Always",
    description: "Safety is non-negotiable. Every decision prioritizes the well-being of people and communities."
  },
  {
    title: "Collaborative Excellence",
    description: "We achieve more together. Cross-functional collaboration drives our best work."
  },
  {
    title: "Continuous Learning",
    description: "We're students of the future. Curiosity and growth mindset define our culture."
  }
];

export default function CareersPage() {
  const [selectedDepartment, setSelectedDepartment] = useState("All");
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });

  const filteredJobs = selectedDepartment === "All"
    ? jobListings
    : jobListings.filter(job => job.department === selectedDepartment);

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
                Join Our Team
              </span>
              <div className="h-[1px] w-12 bg-outline-variant"></div>
            </motion.div>
            <motion.h1
              className="font-h1 text-h1 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.3 }}
            >
              BUILD THE <span className="text-secondary">FUTURE OF MOBILITY</span>
            </motion.h1>
            <motion.p
              className="font-body-lg text-body-lg text-on-surface-variant max-w-xl"
              initial={{ opacity: 0 }}
              animate={isHeroInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.5 }}
            >
              Join a world-class team of engineers, researchers, and innovators working to transform transportation through autonomous technology. Shape the future with HAVONE MOBILITY.
            </motion.p>
          </motion.div>
        </section>

        {/* Company Values */}
        <AnimatedSection>
          <section className="mb-20">
            <h2 className="font-h2 text-h2 uppercase tracking-tight mb-8 text-center">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {values.map((value, i) => (
                <motion.div
                  key={i}
                  className="bg-white border border-outline-variant/20 p-8 hover:border-secondary transition-all"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
                >
                  <h3 className="font-h3 text-h3 text-primary mb-4">{value.title}</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </section>
        </AnimatedSection>

        {/* Benefits */}
        <AnimatedSection>
          <section className="mb-20 bg-surface-container-low py-16 px-8 rounded-2xl">
            <h2 className="font-h2 text-h2 uppercase tracking-tight mb-8 text-center">Benefits & Perks</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, i) => (
                <motion.div
                  key={i}
                  className="bg-white border border-outline-variant/20 p-6 rounded-xl"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                    <span className="material-symbols-outlined text-secondary text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                      {benefit.icon}
                    </span>
                  </div>
                  <h3 className="font-h3 text-h3 text-primary mb-3">{benefit.title}</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </section>
        </AnimatedSection>

        {/* Department Filter */}
        <AnimatedSection>
          <div className="mb-16">
            <h2 className="font-h2 text-h2 uppercase tracking-tight mb-8 text-center">Open Positions</h2>
            <div className="flex flex-wrap gap-3 justify-center" role="group" aria-label="Filter by department">
              {departments.map((dept) => (
                <motion.button
                  key={dept}
                  onClick={() => setSelectedDepartment(dept)}
                  aria-pressed={selectedDepartment === dept}
                  className={`px-6 py-3 font-label-tech text-label-tech uppercase tracking-widest transition-all border-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary ${
                    selectedDepartment === dept
                      ? "bg-primary text-on-primary border-primary"
                      : "bg-white text-on-surface border-outline-variant/20 hover:border-primary"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {dept}
                </motion.button>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Job Listings */}
        <AnimatedSection>
          <section className="mb-20" aria-live="polite">
            <p className="sr-only">Showing {filteredJobs.length} position{filteredJobs.length !== 1 ? "s" : ""}</p>
            <div className="space-y-6">
              {filteredJobs.map((job, i) => (
                <motion.div
                  key={job.id}
                  className={`bg-white border-2 p-8 hover:border-secondary transition-all group ${
                    job.featured ? "border-secondary/30" : "border-outline-variant/20"
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
                >
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-4">
                        {job.featured && (
                          <span className="bg-secondary text-primary px-3 py-1 font-label-tech text-label-tech uppercase tracking-widest">
                            Featured
                          </span>
                        )}
                        <span className="font-label-tech text-label-tech text-secondary uppercase font-bold">
                          {job.department}
                        </span>
                      </div>
                      <h3 className="font-h2 text-h2 text-primary mb-4 group-hover:text-secondary transition-colors">
                        {job.title}
                      </h3>
                      <p className="font-body-md text-body-md text-on-surface-variant mb-6">
                        {job.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {job.skills.map((skill, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-surface-container-low text-on-surface-variant font-label-tech text-label-tech uppercase border border-outline-variant/20"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center gap-6 text-on-surface-variant">
                        <div className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-lg" aria-hidden="true">location_on</span>
                          <span className="font-body-md text-body-md">{job.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-lg" aria-hidden="true">schedule</span>
                          <span className="font-body-md text-body-md">{job.type}</span>
                        </div>
                      </div>
                    </div>
                    <div className="lg:pt-0">
                      <motion.button
                        className="bg-primary text-white px-8 py-3 font-label-tech text-label-tech uppercase tracking-widest hover:bg-secondary hover:text-primary transition-all border-2 border-primary hover:border-secondary w-full lg:w-auto"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Apply Now
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        </AnimatedSection>

        {/* CTA Section */}
        <AnimatedSection>
          <section className="bg-primary text-white p-16 rounded-2xl text-center relative overflow-hidden">
            <motion.div
              className="absolute -right-20 -top-20 opacity-10"
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            >
              <span className="material-symbols-outlined text-[400px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                rocket_launch
              </span>
            </motion.div>
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="font-h2 text-h2 mb-6">Don&apos;t See Your Role?</h2>
              <p className="font-body-lg text-body-lg text-primary-fixed mb-8">
                We&apos;re always looking for exceptional talent. Send us your resume and let us know how you can contribute to the future of autonomous mobility.
              </p>
              <motion.button
                className="bg-secondary text-primary px-12 py-4 font-label-tech text-label-tech uppercase font-bold hover:bg-white transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Submit General Application
              </motion.button>
            </div>
          </section>
        </AnimatedSection>
      </main>
      <Footer />
    </>
  );
}
