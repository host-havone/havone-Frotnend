import FocusCard from "@/components/ui/FocusCard";

const focusAreas = [
  {
    icon: "sensors",
    title: "Edge Sensing",
    description:
      "Hyper-accurate spatial awareness using high-fidelity sensor suites that process 2.5 million points per second.",
    progress: 80,
  },
  {
    icon: "psychology",
    title: "Neural Predict",
    description:
      "Deep learning models that anticipate human behavior with sub-millisecond latency for proactive safety maneuvers.",
    progress: 66,
  },
  {
    icon: "energy_savings_leaf",
    title: "Eco-Dynamics",
    description:
      "Precision aerodynamics and kinetic energy recovery systems that maximize range and minimize grid impact.",
    progress: 100,
  },
];

export default function RDSection() {
  return (
    <section className="py-xl px-margin bg-surface-container-low">
      <div className="max-w-[1440px] mx-auto">
        <div className="mb-xl text-center max-w-2xl mx-auto">
          <span className="font-display text-label-tech text-secondary uppercase font-bold tracking-widest mb-base block">
            Core Focus
          </span>
          <h2 className="text-primary">Engineering for the 0.01% Exception</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {focusAreas.map((area, index) => (
            <FocusCard key={index} {...area} />
          ))}
        </div>
      </div>
    </section>
  );
}
