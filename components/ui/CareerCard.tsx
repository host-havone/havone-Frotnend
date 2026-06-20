interface CareerCardProps {
  title: string;
  location: string;
}

export default function CareerCard({ title, location }: CareerCardProps) {
  return (
    <div className="group p-md bg-white border border-outline-variant/30 rounded-lg flex justify-between items-center hover:bg-secondary transition-all duration-300 cursor-pointer shadow-sm hover:shadow-md">
      <div>
        <h4 className="text-h3 text-primary group-hover:text-on-secondary-fixed">
          {title}
        </h4>
        <p className="text-body-md text-on-surface-variant group-hover:text-on-secondary-fixed/80">
          {location}
        </p>
      </div>
      <svg
        className="w-6 h-6 text-primary group-hover:text-on-secondary-fixed group-hover:translate-x-2 transition-transform"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
      </svg>
    </div>
  );
}
