export default function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";

  return (
    <footer className="bg-bg-deepest border-t border-white/5 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 border border-gold/60 flex items-center justify-center">
                <span className="text-gold font-bold text-lg tracking-tight">
                  RM
                </span>
              </div>
              <div>
                <p className="text-xs font-semibold tracking-cinematic uppercase text-foreground leading-tight">
                  Roop Mahal
                </p>
                <p className="text-[9px] tracking-wider uppercase text-muted-foreground leading-tight">
                  Prem Gali Studios
                </p>
              </div>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed max-w-xs">
              A full-service production house crafting cinematic narratives that
              connect, perform, and endure.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-foreground mb-5">
              Contact
            </h4>
            <div className="space-y-2">
              <p className="text-xs text-muted-foreground">India</p>
              <a
                href="#contact"
                className="block text-xs text-muted-foreground hover:text-gold transition-colors"
                data-ocid="footer.link"
              >
                Get in touch →
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-foreground mb-5">
              Studio
            </h4>
            <div className="space-y-2">
              {["About", "Work", "Services", "Achievements", "Contact"].map(
                (item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="block text-xs text-muted-foreground hover:text-gold transition-colors"
                    data-ocid="footer.link"
                  >
                    {item}
                  </a>
                ),
              )}
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {year} Roop Mahal Prem Gali Studios. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Built with ❤️ using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:text-foreground transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
