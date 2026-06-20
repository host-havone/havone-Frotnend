import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Newsroom | HAVONE MOBILITY",
  description: "Latest news, press releases, and insights from HAVONE MOBILITY. Stay updated on autonomous mobility breakthroughs and industry developments.",
};

export default function NewsroomLayout({ children }: { children: React.ReactNode }) {
  return children;
}
