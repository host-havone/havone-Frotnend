"use client";

import Image from "next/image";
import CareerCard from "@/components/ui/CareerCard";

const benefits = [
  "Your code runs at 100km/h on real roads",
  "Hardware + software — build the full stack",
  "India-first problem, global ambition",
  "Early-stage equity + competitive pay",
  "Talk to founders every day",
];

const positions = [
  {
    title: "Embedded Systems Engineer",
    location: "India — Firmware, C/C++, RTOS, sensors",
  },
  {
    title: "Full-Stack Engineer",
    location: "India — React, Node.js, real-time dashboards",
  },
  {
    title: "ML Engineer (Computer Vision)",
    location: "India — Object detection, event classification",
  },
  {
    title: "Hardware Design Engineer",
    location: "India — PCB, enclosures, thermal",
  },
];

export default function CareersSection() {
  return (
    <section
      className="py-xl px-margin bg-white border-y border-outline-variant/10"
      id="careers"
    >
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-xl items-start">
        <div className="md:col-span-5">
          <span className="font-display text-label-tech text-secondary font-bold uppercase tracking-widest mb-base block">
            Join Us
          </span>
          <h2 className="text-primary mb-md">Build the Future of Indian Mobility</h2>
          <p className="text-body-lg text-on-surface-variant mb-md">
            We&apos;re a small, intense team obsessed with making Indian roads
            safer. Hardware meets AI meets real-world impact. If that excites
            you, we should talk.
          </p>
          <div className="rounded-lg overflow-hidden border border-outline-variant/20">
            <Image
              src="/images/about-careers.png"
              alt="Engineers working with IoT prototypes and PCB boards"
              width={1536}
              height={1024}
              className="w-full h-auto"
            />
          </div>
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
