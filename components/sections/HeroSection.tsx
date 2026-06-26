import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative h-[100dvh] w-full overflow-hidden bg-slate-950">
      {/* Full-width background image with parallax */}
      <div className="absolute inset-0 z-0" style={{ transform: `translateY(${scrollY * 0.5}px)` }}>
        <Image
          src="/images/about-hero-team.png"
          alt="HAVONE engineering team in startup office"
          width={1536}
          height={1024}
          className="w-full h-full object-cover"
          priority
        />
        {/* Black gradient on left for heading visibility + cinematic overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-slate-950/70 to-slate-950/20" />
      </div>

      {/* Content — left side only */}
      <div className="relative z-10 h-full w-full flex items-center px-5 sm:px-10 md:px-16 lg:px-20 xl:px-24">
        <div className="max-w-[1440px] mx-auto w-full">
          <div className="max-w-xl">
            {/* Label */}
            <div className="mb-8 md:mb-10">
              <span className="inline-flex items-center gap-2 font-display text-[10px] md:text-[11px] text-secondary font-bold uppercase tracking-[0.3em]">
                <span className="w-6 h-[1.5px] bg-secondary" />
                Our Story
              </span>
            </div>

            {/* Narrative - 3 lines */}
            <div className="mb-8 md:mb-12 space-y-3">
              <p className="text-base md:text-lg text-slate-200 leading-relaxed font-normal">
                Every journey generates thousands of driving decisions.
              </p>
              <p className="text-base md:text-lg text-slate-200 leading-relaxed font-normal">
                Most disappear forever.
              </p>
              <p className="text-base md:text-lg text-slate-200 leading-relaxed font-normal">
                We&apos;re building the intelligence that ensures they don&apos;t.
              </p>
            </div>

            {/* Headline - oversized with accent */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] tracking-[-0.02em] mb-10 md:mb-12">
              Making Indian Roads the{" "}
              <span className="text-secondary">Safest</span> in the World.
            </h1>

            {/* CTA - outlined button */}
            <div>
              <Link href="/contact">
                <button className="px-8 md:px-10 py-4 md:py-5 border-2 border-secondary text-secondary font-semibold text-sm md:text-base uppercase tracking-wide rounded-lg hover:bg-secondary hover:text-slate-950 transition-all duration-300">
                  Join Our Mission
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
