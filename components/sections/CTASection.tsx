"use client";

export default function CTASection() {
  const scrollToCareers = () => {
    const careersElement = document.getElementById("careers");
    careersElement?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-[120px] px-margin bg-white">
      <div className="max-w-[1440px] mx-auto p-xl bg-primary rounded-3xl text-center relative overflow-hidden shadow-2xl">
        <div className="relative z-10">
          <h2 className="text-white mb-md">Join the Autonomous Revolution.</h2>
          <p className="text-body-lg text-on-primary-container mb-lg max-w-2xl mx-auto opacity-90">
            We are always looking for the brightest minds in machine learning
            and precision engineering.
          </p>
          <button
            onClick={scrollToCareers}
            className="bg-secondary-fixed text-on-secondary-fixed px-xl py-md font-display text-label-tech uppercase tracking-widest font-bold hover:scale-105 active:scale-95 transition-all shadow-lg hover:shadow-secondary/20"
          >
            View Open Positions
          </button>
        </div>
        <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-secondary opacity-20 rounded-full blur-[100px]"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_transparent_0%,_#000_100%)] opacity-40"></div>
      </div>
    </section>
  );
}
