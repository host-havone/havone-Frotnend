import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | HAVONE MOBILITY",
  description: "Learn about HAVONE MOBILITY's mission to transform transportation through autonomous technology, our journey, leadership, and values.",
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
