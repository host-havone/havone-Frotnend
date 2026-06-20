import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://havone.com"),
  title: {
    default: "HAVONE MOBILITY | Autonomous Mobility Solutions",
    template: "%s | HAVONE MOBILITY",
  },
  description:
    "Redefining Autonomy with Machine Precision. Engineering the future of global logistics through uncompromising safety standards and advanced AI integration.",
  keywords: [
    "autonomous vehicles",
    "self-driving",
    "fleet management",
    "AI mobility",
    "autonomous trucking",
    "logistics automation",
    "HAVONE MOBILITY",
  ],
  authors: [{ name: "HAVONE MOBILITY" }],
  creator: "HAVONE MOBILITY",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://havone.com",
    siteName: "HAVONE MOBILITY",
    title: "HAVONE MOBILITY | Autonomous Mobility Solutions",
    description:
      "Redefining Autonomy with Machine Precision. Engineering the future of global logistics through uncompromising safety standards and advanced AI integration.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "HAVONE MOBILITY - Autonomous Mobility Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HAVONE MOBILITY | Autonomous Mobility Solutions",
    description:
      "Redefining Autonomy with Machine Precision. Engineering the future of global logistics.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "32x32" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0..1,0&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} bg-background text-on-background font-sans antialiased selection:bg-secondary-fixed selection:text-on-secondary-fixed`}
      >
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
