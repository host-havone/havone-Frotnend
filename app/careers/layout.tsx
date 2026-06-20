import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers | HAVONE MOBILITY",
  description: "Join HAVONE MOBILITY and build the future of autonomous transportation. Explore open positions in engineering, research, operations, and more.",
};

export default function CareersLayout({ children }: { children: React.ReactNode }) {
  return children;
}
