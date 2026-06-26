import FocusCard from "@/components/ui/FocusCard";

const focusAreas = [
  {
    icon: "sensors",
    title: "Sensor Intelligence",
    description:
      "We design IoT devices that see, hear, and measure everything a vehicle encounters — road surface, weather, traffic patterns, and driver behavior.",
    progress: 80,
  },
  {
    icon: "psychology",
    title: "AI & Machine Learning",
    description:
      "Our models learn from real driving events to predict hazards, optimize routes, and score driver safety — all in real-time.",
    progress: 66,
  },
  {
    icon: "database",
    title: "Data-First Autonomy",
    description:
      "Every deployed device is a data collection node. We're building the largest labeled driving dataset from Indian roads — the most challenging driving environment on earth.",
    progress: 100,
  },
];

export default function RDSection() {
  return (
    <section className="py-xl px-margin bg-primary relative overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[400px] bg-secondary/[0.03] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[300px] bg-secondary/[0.02] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto relative z-10">
        <div className="mb-lg text-center max-w-2xl mx-auto">
          <span className="font-display text-label-tech text-secondary uppercase font-bold tracking-widest mb-base block">
            Core Focus
          </span>
          <h2 className="text-white">Three Pillars of Innovation</h2>
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
