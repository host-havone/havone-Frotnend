"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Technology", href: "/technology" },
  { label: "Solutions", href: "/solutions" },
  { label: "NewsRoom", href: "/newsroom" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mobileMenuOpen) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [mobileMenuOpen]);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Skip to content link — only visible on keyboard focus */}
      <a
        href="#main-content"
        className="fixed -translate-y-full left-4 z-[200] bg-primary text-on-primary px-4 py-2 rounded font-label-tech text-label-tech uppercase tracking-widest opacity-0 pointer-events-none focus:translate-y-4 focus:opacity-100 focus:pointer-events-auto"
        tabIndex={0}
      >
        Skip to content
      </a>

      <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-4 xs:px-6 sm-mobile:px-8 md-tablet:px-12 lg-tablet:px-16 xl-desktop:px-margin py-6 min-[784px]:py-6 bg-surface/90 backdrop-blur-md border-b border-outline-variant/20">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center flex-shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-secondary rounded-sm"
        >
          <Image
            src="/logo.svg"
            alt="HAVONE MOBILITY - Home"
            width={160}
            height={43}
            className="h-8 min-[784px]:h-10 lg-tablet:h-11 md:h-12 w-auto"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav aria-label="Main navigation" className="hidden min-[784px]:flex items-center gap-2 md-tablet:gap-3 lg-tablet:gap-4 xl-desktop:gap-5 lg:gap-md flex-1 justify-center">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={`font-display text-[10px] md-tablet:text-[11px] lg-tablet:text-[12px] xl-desktop:text-[13px] lg:text-label-tech uppercase tracking-widest transition-colors duration-300 whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-secondary rounded-sm ${
                  isActive
                    ? "text-secondary border-b-2 border-secondary pb-1"
                    : "text-on-surface-variant hover:text-secondary"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Menu Button */}
        <button
          ref={menuButtonRef}
          className="min-[784px]:hidden text-on-surface flex-shrink-0 ml-auto p-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary rounded-sm"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            {mobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Desktop CTA Button */}
        <Link
          href="/contact"
          className="hidden min-[784px]:block bg-primary text-on-primary px-3 md-tablet:px-3 lg-tablet:px-4 xl-desktop:px-5 lg:px-md py-2 md-tablet:py-2 lg-tablet:py-2.5 xl-desktop:py-sm font-display text-[10px] md-tablet:text-[11px] lg-tablet:text-[12px] xl-desktop:text-[13px] lg:text-label-tech uppercase tracking-widest hover:bg-secondary-fixed hover:text-on-secondary-fixed transition-all border-b-2 border-transparent hover:border-black text-center whitespace-nowrap flex-shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-secondary rounded-sm"
        >
          Contact Us
        </Link>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div
            ref={menuRef}
            id="mobile-menu"
            role="menu"
            aria-label="Main navigation"
            className="min-[784px]:hidden absolute top-full left-0 w-full bg-surface border-b border-outline-variant/20 py-4 px-6 flex flex-col gap-4 shadow-lg animate-in fade-in slide-in-from-top-2 duration-200"
          >
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  role="menuitem"
                  aria-current={isActive ? "page" : undefined}
                  className={`font-display text-sm uppercase tracking-widest py-2 block border-b border-outline-variant/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary rounded-sm ${
                    isActive ? "text-secondary font-semibold" : "text-on-surface-variant"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link
              href="/contact"
              role="menuitem"
              className="bg-primary text-on-primary px-4 py-3 font-display text-sm uppercase tracking-widest mt-2 text-center block rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        )}
      </header>
    </>
  );
}
