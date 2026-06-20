import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Technology | HAVONE MOBILITY",
  description: "Explore HAVONE MOBILITY's cutting-edge autonomous driving technology — neural architecture, sensor fusion, V2X connectivity, and safety systems.",
};

export default function TechnologyLayout({ children }: { children: React.ReactNode }) {
  return children;
}
