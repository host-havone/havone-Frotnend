interface FocusCardProps {
  icon: string;
  title: string;
  description: string;
  progress: number;
}

export default function FocusCard({
  icon,
  title,
  description,
  progress,
}: FocusCardProps) {
  return (
    <div className="p-lg bg-white border border-outline-variant/20 rounded-xl flex flex-col items-start gap-md shadow-sm hover:shadow-md transition-shadow">
      <span className="material-symbols-outlined text-secondary text-[48px]">
        {icon}
      </span>
      <h3 className="text-primary">{title}</h3>
      <p className="text-body-md text-on-surface-variant">{description}</p>
      <div className="w-full bg-surface-container mt-auto h-1.5 rounded-full overflow-hidden">
        <div
          className="bg-secondary h-full rounded-full transition-all duration-500"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
}
