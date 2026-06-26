"use client";

const partners = [
  { name: "IIT Research Partner", logo: "IIT" },
  { name: "AWS Activate", logo: "AWS" },
  { name: "NVIDIA Inception", logo: "NVIDIA" },
  { name: "Made in India", logo: "🇮🇳" },
];

export default function TrustBar() {
  return (
    <section className="w-full py-14 bg-surface-container-lowest border-y border-outline-variant/20" aria-label="Partner companies">
      <div className="w-full px-6 sm:px-10 md:px-16 lg:px-20">
        <p className="text-center mb-10 font-label-tech text-label-tech text-on-surface-variant uppercase tracking-[0.2em]">
          Backed By Vision. Built for India.
        </p>

        <ul className="sr-only">
          {partners.map((partner) => (
            <li key={partner.name}>{partner.name}</li>
          ))}
        </ul>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 w-full" aria-hidden="true">
          {partners.map((partner) => (
            <div key={partner.name} className="group">
              <div className="w-full h-24 flex items-center justify-center bg-white border border-outline-variant/20 rounded-xl hover:border-secondary/50 transition-all hover:shadow-md group-hover:scale-[1.02] duration-300">
                <span className="text-xl md:text-2xl text-on-surface-variant group-hover:text-secondary transition-colors font-bold tracking-tight">
                  {partner.logo}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-base md:text-lg text-on-surface-variant">
            Launching Soon — Join Our Early Fleet Partner Program
          </p>
        </div>
      </div>
    </section>
  );
}
