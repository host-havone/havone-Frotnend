"use client";

const partners = [
  { name: "Tesla", logo: "T" },
  { name: "Mercedes-Benz", logo: "MB" },
  { name: "Waymo", logo: "W" },
  { name: "NVIDIA", logo: "NVIDIA" },
  { name: "Intel", logo: "INTEL" },
  { name: "Amazon", logo: "amazon" },
  { name: "FedEx", logo: "FedEx" },
  { name: "DHL", logo: "DHL" },
  { name: "Uber Freight", logo: "UBER" },
  { name: "Volvo", logo: "VOLVO" },
  { name: "Ford", logo: "FORD" },
  { name: "Bosch", logo: "BOSCH" },
];

export default function TrustBar() {
  return (
    <section className="py-12 bg-white border-y border-outline-variant/20 overflow-hidden relative" aria-label="Partner companies">
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <p className="text-center mb-8 font-label-tech text-label-tech text-on-surface-variant uppercase tracking-widest">
          Trusted By Industry Leaders
        </p>

        {/* Accessible list of partners (hidden visually, read by screen readers) */}
        <ul className="sr-only">
          {partners.map((partner) => (
            <li key={partner.name}>{partner.name}</li>
          ))}
        </ul>

        {/* Scrolling Container (decorative, hidden from AT) */}
        <div className="relative" aria-hidden="true">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          <div className="flex gap-16 items-center animate-[scroll_30s_linear_infinite] motion-reduce:animate-none motion-reduce:flex-wrap motion-reduce:justify-center motion-reduce:gap-6">
            {[...partners, ...partners].map((partner, index) => (
              <div key={`${partner.name}-${index}`} className="flex-shrink-0 group">
                <div className="w-40 h-20 flex items-center justify-center bg-surface-container-low/50 border border-outline-variant/20 rounded-lg hover:border-secondary/50 transition-all hover:shadow-lg group-hover:scale-105 duration-300">
                  <span className="font-h3 text-h3 text-on-surface-variant group-hover:text-secondary transition-colors font-bold tracking-tight">
                    {partner.logo}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Stats */}
        <dl className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-outline-variant/10">
          <div className="text-center">
            <dd className="font-h2 text-h2 text-secondary mb-2">50+</dd>
            <dt className="font-label-tech text-label-tech text-on-surface-variant uppercase">
              Global Partners
            </dt>
          </div>
          <div className="text-center">
            <dd className="font-h2 text-h2 text-secondary mb-2">15+</dd>
            <dt className="font-label-tech text-label-tech text-on-surface-variant uppercase">
              Countries
            </dt>
          </div>
          <div className="text-center">
            <dd className="font-h2 text-h2 text-secondary mb-2">$2.5B+</dd>
            <dt className="font-label-tech text-label-tech text-on-surface-variant uppercase">
              Partnerships Value
            </dt>
          </div>
        </dl>
      </div>
    </section>
  );
}
