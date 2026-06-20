import JourneyCard from "@/components/ui/JourneyCard";

const journeyMilestones = [
  {
    year: "2019 — THE PROTOTYPE",
    title: "Accuracy Milestone",
    description:
      "Achieved 99.9% sensor fusion accuracy in adverse weather conditions, setting a new industry benchmark for LiDAR-camera synchronization.",
    highlight: false,
  },
  {
    year: "2021 — SUSTAINABILITY PUSH",
    title: "Net Zero Logistics",
    description:
      "Launched the first fully electric autonomous corridor, reducing carbon emissions by 40% compared to traditional freight methods.",
    highlight: false,
  },
  {
    year: "TODAY — SCALE & INNOVATION",
    title: "The Global Grid",
    description:
      "Deploying the world's most advanced autonomous fleet management system, powered by real-time neural network training.",
    highlight: true,
  },
];

export default function JourneySection() {
  return (
    <section className="py-xl px-margin bg-surface-container-lowest border-y border-outline-variant/10">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-xl items-start">
        <div className="md:col-span-4 md:sticky md:top-32">
          <h2 className="text-primary mb-md">Our Journey</h2>
          <p className="text-body-md text-on-surface-variant mb-md">
            Since our inception, we&apos;ve been dedicated to closing the gap between
            human intuition and machine reliability.
          </p>
          <div className="flex items-center gap-sm">
            <div className="w-12 h-1 bg-secondary"></div>
            <span className="font-display text-label-tech uppercase text-primary font-bold">
              Established 2018
            </span>
          </div>
        </div>
        <div className="md:col-span-8 flex flex-col gap-lg">
          {journeyMilestones.map((milestone, index) => (
            <JourneyCard key={index} {...milestone} />
          ))}
        </div>
      </div>
    </section>
  );
}
