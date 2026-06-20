import Image from "next/image";

interface LeaderCardProps {
  name: string;
  role: string;
  description: string;
  image: string;
  featured?: boolean;
}

export default function LeaderCard({
  name,
  role,
  description,
  image,
  featured = false,
}: LeaderCardProps) {
  if (featured) {
    return (
      <div className="md:col-span-2 group relative bg-primary rounded-xl overflow-hidden aspect-[16/10] shadow-xl">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover opacity-80 grayscale group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute bottom-0 left-0 w-full p-lg bg-gradient-to-t from-primary via-primary/80 to-transparent">
          <span className="font-display text-label-tech text-secondary uppercase mb-xs block font-bold">
            {role}
          </span>
          <h3 className="text-white">{name}</h3>
          <p className="text-body-md text-on-primary-container mt-sm">
            {description}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white border border-outline-variant/30 rounded-xl p-md flex flex-col hover:shadow-lg transition-all hover:border-secondary/30">
      <div className="aspect-square bg-surface-container-low rounded-lg mb-md overflow-hidden border border-outline-variant/10 relative">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
        />
      </div>
      <span className="font-display text-label-tech text-secondary font-bold uppercase block mb-xs">
        {role}
      </span>
      <h4 className="text-body-md text-primary font-semibold">{name}</h4>
      <p className="text-body-md text-on-surface-variant text-[14px]">
        {description}
      </p>
    </div>
  );
}
