import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Achievements", href: "#achievements" },
  { label: "BTS", href: "#bts" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const closeMobileMenu = () => setMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-bg-dark/95 backdrop-blur-md border-b border-white/5 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          className="flex items-center gap-3 group"
          data-ocid="nav.link"
        >
          <img
            src="/assets/uploads/IMG-20250224-WA0039-1--1.jpg"
            alt="Roop Mahal Prem Gali Studios"
            className="w-10 h-10 object-contain"
          />
          <div className="hidden sm:block">
            <p className="text-xs font-semibold tracking-cinematic uppercase text-foreground leading-tight">
              Roop Mahal
            </p>
            <p className="text-[9px] tracking-wider uppercase text-muted-foreground leading-tight">
              Prem Gali Studios
            </p>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nav-link"
              data-ocid="nav.link"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="#contact"
          className="hidden md:inline-flex items-center px-5 py-2 text-xs font-semibold uppercase tracking-widest border border-gold text-gold hover:bg-gold hover:text-bg-dark transition-all duration-200"
          data-ocid="nav.primary_button"
        >
          Get In Touch
        </a>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          className="md:hidden text-foreground p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          data-ocid="nav.toggle"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <div className="md:hidden bg-bg-dark/98 border-t border-white/5 px-6 py-6 flex flex-col gap-5">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nav-link text-sm"
              onClick={closeMobileMenu}
              data-ocid="nav.link"
            >
              {link.label}
            </a>
          ))}
          <button
            type="button"
            className="inline-flex items-center justify-center px-5 py-3 text-xs font-semibold uppercase tracking-widest border border-gold text-gold hover:bg-gold hover:text-bg-dark transition-all duration-200"
            onClick={() => {
              closeMobileMenu();
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            data-ocid="nav.primary_button"
          >
            Get In Touch
          </button>
        </div>
      )}
    </header>
  );
}
