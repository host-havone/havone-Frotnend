import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | HAVONE MOBILITY",
  description: "Get in touch with HAVONE MOBILITY. Schedule a demo, partner with us, or reach our engineering team for autonomous mobility solutions.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
