import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="py-xl px-margin bg-white">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row gap-lg items-end mb-xl">
          <div className="flex-1">
            <span className="font-display text-label-tech text-secondary font-bold uppercase tracking-widest mb-base block">
              Our Mission
            </span>
            <h1 className="text-primary mb-md">
              Redefining Autonomy with Machine Precision.
            </h1>
          </div>
          <div className="flex-1 pb-base">
            <p className="text-body-lg text-on-surface-variant">
              We are engineering the future of global logistics through
              uncompromising safety standards and advanced AI integration,
              ensuring that every kilometer driven is a step toward a more
              sustainable and efficient world.
            </p>
          </div>
        </div>
        <div className="w-full h-[540px] bg-surface-container-highest rounded-lg overflow-hidden border border-outline-variant/30 shadow-sm">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCpGQOsFG40MIjS3UEKSklId80B-pGnBAMWOfuM95ZRQQ5E-ccRKihlL4hl8ru1br0XEuK16wK134KQmMIPfF4Ch72UYm8PIFLJbb6hzyBn33XI0I519jNL4MTsxkCblalueYwBLvmnVN8Ay3BofrJnIj7Pd_s8dG_-cLqglGvJMTv-ADgPv5GVlETMT_TVoDBP3gkp4GsIooVSqT90BNC7cUTmbISGoBN0PRLxOo-Celqb61tIFxrG5BkCmf2hjS-O3ONwQHpmHAMB"
            alt="Autonomous fleet"
            width={1440}
            height={540}
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
          />
        </div>
      </div>
    </section>
  );
}
