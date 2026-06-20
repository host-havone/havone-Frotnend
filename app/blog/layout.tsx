import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | HAVONE MOBILITY",
  description: "Daily insights, technical deep-dives, and industry perspectives on the future of autonomous mobility from HAVONE MOBILITY's engineering team.",
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children;
}
