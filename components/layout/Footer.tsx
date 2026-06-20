import Image from "next/image";
import Link from "next/link";

const footerLinks = {
  company: [
    { label: "About Us", href: "/about" },
    { label: "Careers", href: "/careers" },
    { label: "Technology", href: "/technology" },
    { label: "Solutions", href: "/solutions" },
    { label: "Blog", href: "/blog" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Safety Report", href: "/safety" },
    { label: "Ethics", href: "/ethics" },
    { label: "Terms", href: "/terms" },
  ],
  contact: [
    { label: "Contact Us", href: "/contact" },
    { label: "Newsletter", href: "/newsletter" },
    { label: "Support", href: "/support" },
  ],
};

export default function Footer() {
  return (
    <footer className="relative w-full bg-[#0a0c0b] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 py-12 sm:py-16">
        
        {/* Main Footer Content Grid */}
        {/* Adjusted to stack on mobile, 2 columns on small/tablet screens, and 4 clean columns on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-12">
          
          {/* Brand Section */}
          <div className="col-span-1 flex flex-col gap-4">
            <Link href="/" className="inline-block w-fit">
              <Image
                src="/logo.svg"
                alt="HAVONE MOBILITY Logo"
                width={180}
                height={48}
                className="h-9 w-auto"
              />
            </Link>
            <p className="text-sm text-white/60 leading-relaxed max-w-xs">
              Leading the future of autonomous mobility with cutting-edge technology and innovation.
            </p>
            <div className="flex gap-4 mt-2">
              {/* LinkedIn */}
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#00CC6A] flex items-center justify-center transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              {/* Twitter */}
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#00CC6A] flex items-center justify-center transition-colors duration-300"
                aria-label="Twitter"
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                </svg>
              </a>
              {/* GitHub */}
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#00CC6A] flex items-center justify-center transition-colors duration-300"
                aria-label="GitHub"
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-[#00CC6A] transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Legal
            </h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-[#00CC6A] transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Links */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Get in Touch
            </h3>
            <ul className="space-y-3">
              {footerLinks.contact.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-[#00CC6A] transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar Container */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-white/50 text-center md:text-left order-2 md:order-1">
              &copy; {new Date().getFullYear()} HAVONE MOBILITY. All rights reserved. All systems autonomous.
            </p>
            <div className="flex gap-6 order-1 md:order-2">
              <Link
                href="/privacy"
                className="text-xs text-white/50 hover:text-white transition-colors duration-300"
              >
                Privacy
              </Link>
              <Link
                href="/terms"
                className="text-xs text-white/50 hover:text-white transition-colors duration-300"
              >
                Terms
              </Link>
              <Link
                href="/cookies"
                className="text-xs text-white/50 hover:text-white transition-colors duration-300"
              >
                Cookies
              </Link>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}