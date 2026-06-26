interface JourneyCardProps {
  year: string;
  title: string;
  description: string;
  highlight?: boolean;
}

export default function JourneyCard({
  year,
  title,
  description,
  highlight = false,
}: JourneyCardProps) {
  if (highlight) {
    return (
      <div className="px-5 py-4 bg-primary text-on-primary rounded-lg shadow-xl relative overflow-hidden group">
        <div className="absolute inset-0 bg-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
        <span className="font-display text-label-tech text-secondary mb-1 block font-bold">
          {year}
        </span>
        <h3 className="text-white text-base font-semibold mb-1">{title}</h3>
        <p className="text-sm text-on-primary-container leading-relaxed">{description}</p>
      </div>
    );
  }

  return (
    <div className="px-5 py-4 bg-white border border-outline-variant/30 rounded-lg shadow-sm hover:border-secondary transition-colors duration-300">
      <span className="font-display text-label-tech text-secondary mb-1 block font-bold">
        {year}
      </span>
      <h3 className="text-primary text-base font-semibold mb-1">{title}</h3>
      <p className="text-sm text-on-surface-variant leading-relaxed">{description}</p>
    </div>
  );
}
