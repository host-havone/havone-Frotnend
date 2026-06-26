import Image from "next/image";
import JourneyCard from "@/components/ui/JourneyCard";

const journeyMilestones = [
  {
    year: "2023 — THE SPARK",
    title: "The Beginning",
    description:
      "Founded with one question: \"What if every truck on Indian roads could see and learn?\" First IoT prototype built in a garage.",
    highlight: false,
  },
  {
    year: "2024 — BUILDING",
    title: "Product Development",
    description:
      "Hardware refined. Software platform built. First conversations with fleet operators. Product-market fit discovered.",
    highlight: false,
  },
  {
    year: "2025 — LAUNCH",
    title: "Going Live",
    description:
      "First devices deployed on real vehicles. Platform goes live. Early fleet partners onboarded. The data starts flowing.",
    highlight: true,
  },
  {
    year: "THE FUTURE — AUTONOMY",
    title: "The Vision",
    description:
      "Billions of kilometers of labeled Indian driving data. The world's most robust autonomous driving AI — born from the world's most complex roads.",
    highlight: false,
  },
];

export default function JourneySection() {
  return (
    <section className="py-12 md:py-14 lg:py-16 px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 bg-surface-container-lowest border-y border-outline-variant/10">
      <div className="w-full max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-6 lg:gap-8 xl:gap-10 items-start">
        {/* Left Column — sticky sidebar */}
        <div className="md:sticky md:top-24">
          <h2 className="text-primary mb-3">Our Journey</h2>
          <p className="text-body-md text-on-surface-variant mb-4">
            From a garage prototype to real devices on Indian roads — every step
            brings us closer to autonomous mobility.
          </p>
          <div className="flex items-center gap-sm mb-4">
            <div className="w-10 h-1 bg-secondary"></div>
            <span className="font-display text-label-tech uppercase text-primary font-bold">
              Founded 2023
            </span>
          </div>
          <div className="rounded-xl overflow-hidden border border-outline-variant/20 shadow-sm">
            <Image
              src="/images/about-journey-timeline.png"
              alt="HAVONE journey from prototype to autonomous truck"
              width={1536}
              height={1024}
              className="w-full h-auto"
            />
          </div>
          {/* Image caption labels */}
          <div className="grid grid-cols-3 gap-2 mt-1.5">
            <div className="text-center">
              <span className="text-[12px] font-bold text-primary uppercase tracking-wide block">Prototype</span>
              <span className="text-[11px] text-on-surface-variant">2023</span>
            </div>
            <div className="text-center">
              <span className="text-[12px] font-bold text-secondary uppercase tracking-wide block">Device</span>
              <span className="text-[11px] text-on-surface-variant">2024</span>
            </div>
            <div className="text-center">
              <span className="text-[12px] font-bold text-primary uppercase tracking-wide block">Impact</span>
              <span className="text-[11px] text-on-surface-variant">2025+</span>
            </div>
          </div>
        </div>

        {/* Right Column — milestone cards */}
        <div className="flex flex-col gap-3 md:pt-1">
          {journeyMilestones.map((milestone, index) => (
            <JourneyCard key={index} {...milestone} />
          ))}
        </div>
      </div>
    </section>
  );
}
