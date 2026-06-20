"use client";

import CareerCard from "@/components/ui/CareerCard";

const benefits = [
  "Equity in a high-growth sector",
  "Direct impact on climate sustainability",
  "Flexible-first remote & hub hybrid model",
];

const positions = [
  {
    title: "Lead Perception Engineer",
    location: "Palo Alto, CA / Remote",
  },
  {
    title: "Safety Systems Architect",
    location: "London, UK / Hybrid",
  },
  {
    title: "Fleet Operations Director",
    location: "Singapore / Hub",
  },
  {
    title: "Backend Infrastructure Lead",
    location: "Remote (Global)",
  },
];

export default function CareersSection() {
  const scrollToCareers = () => {
    const careersElement = document.getElementById("careers");
    careersElement?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="py-xl px-margin bg-white border-y border-outline-variant/10"
      id="careers"
    >
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-xl items-start">
        <div className="md:col-span-5">
          <span className="font-display text-label-tech text-secondary font-bold uppercase tracking-widest mb-base block">
            Careers
          </span>
          <h2 className="text-primary mb-md">Build the Future of Motion</h2>
          <p className="text-body-lg text-on-surface-variant mb-md">
            Join a team of visionaries pushing the boundaries of autonomous
            intelligence. At Havone, you&apos;ll work on world-changing tech in a
            culture of radical transparency and precision.
          </p>
          <div className="p-lg bg-surface-container-lowest rounded-xl border border-secondary/20 mb-md shadow-sm">
            <h4 className="text-h3 text-primary mb-sm text-[20px]">
              Why Havone?
            </h4>
            <ul className="space-y-sm text-body-md text-on-surface-variant">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-sm">
                  <svg
                    className="w-6 h-6 text-secondary flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
          <button
            onClick={scrollToCareers}
            className="inline-flex items-center gap-sm font-display text-label-tech text-primary font-bold uppercase tracking-widest hover:text-secondary transition-colors group"
          >
            Explore Our Full Careers Portal
            <svg
              className="w-5 h-5 group-hover:translate-x-1 transition-transform"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
            </svg>
          </button>
        </div>
        <div className="md:col-span-7 flex flex-col gap-sm">
          {positions.map((position, index) => (
            <CareerCard key={index} {...position} />
          ))}
        </div>
      </div>
    </section>
  );
}
