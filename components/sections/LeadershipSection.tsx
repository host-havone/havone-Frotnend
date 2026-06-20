import LeaderCard from "@/components/ui/LeaderCard";

const leaders = [
  {
    name: "Dr. Elias Vance",
    role: "Founder & CEO",
    description: "Visionary in AI and Robotics. Former Lead at MIT Autonomy Lab.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDZLhCfkYOxBJA_Od80wzcVkTb8P9odDyDIgluaIl4Gp3TFIWqRNA12ziV7DjWayVVGZbAXDcwTquP0hJlUeudVtzbzc_sVj8XMKY_0UcgY0EWD0Gs-VVhDum_RSirNEBuywlVjtcp7VdSYdR7DUngW2l6hPU1mo3WLqgVT7S9lzgyFeztui1d34ZOBRTWLNhFKytX-VWbKO10Yq680SbuIBkdGBLByHSBtejPIyUz1RW6smbx9iBIPdGm0X0N4KTzPXbBNUDrPPV-G",
    featured: true,
  },
  {
    name: "Sarah Chen",
    role: "CSO",
    description: "Expert in Neural Systems Architecture.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD2fdF8fFj9hGC1PjaTbgx1IV7hKLLLI91ESLr6DF0FmztWsJauynuMQaSitGnHXheNMLsxdrhgobLvomuGXBKIDQj48TDKHrvyMil6oeXjNenHSf4TC4RhRxe1xgYV4SMI8k4bNAY0s98ryLCO8bn0kbDvb-wGhoj4vd2Pm-Deco2U7dyTF8arKPnbIPzih7tyNjWQFhZdqxlp5f_oBuFFYH8EMF631EFx_JgxHonphUj-AmZDHbzf1e7FvRUnV6d_IaHFWSfbjNUC",
    featured: false,
  },
  {
    name: "Marcus Thorne",
    role: "Head of Ops",
    description: "Logistics Scale & Global Infrastructure.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCaYYd4xRwu4BZn4v8qLda4XOZ6V0CYkDgoVLYucDlmMcg2clndLS-8CbYTXEG0H8TmGen3Jv6K2IyUl4AAgQNeDF0MDR9j09qRCVdX6n3xi0RZ3GHZOfxGzyryOv3zmA64dzCNGpbjY5FkRlW0NlDBpD59zh4J6B0-XJfpSk8_9-XZI9Ek75oSiTxcZNXmsDKsno9XbsCcO7bdDpozy8G_34NVkvs78d-sKeixGr73daqtqBeEebG1kxDD9-qTsDGQf5eR3GJ1AmpL",
    featured: false,
  },
];

export default function LeadershipSection() {
  return (
    <section className="py-xl px-margin bg-surface-container-high" id="leadership">
      <div className="max-w-[1440px] mx-auto">
        <div className="mb-xl">
          <span className="font-display text-label-tech text-secondary font-bold uppercase tracking-widest mb-base block">
            Our Leadership
          </span>
          <h2 className="text-primary">The Visionaries</h2>
          <p className="text-body-lg text-on-surface-variant max-w-xl">
            Led by pioneers in robotics, logistics, and climate science, our
            team is committed to safe machine intelligence.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter">
          {leaders.map((leader, index) => (
            <LeaderCard key={index} {...leader} />
          ))}
        </div>
      </div>
    </section>
  );
}
