import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solutions | HAVONE MOBILITY",
  description: "Autonomous fleet solutions for logistics, urban transit, and enterprise operations. Discover how HAVONE MOBILITY transforms transportation.",
};

export default function SolutionsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
