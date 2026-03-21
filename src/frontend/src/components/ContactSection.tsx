import { Loader2, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { useInView } from "../hooks/useInView";
import { useSubmitContact } from "../hooks/useQueries";

const InstagramIcon = () => (
  <svg
    role="img"
    aria-label="Instagram"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-5 h-5"
  >
    <title>Instagram</title>
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg role="img" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <title>WhatsApp</title>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export default function ContactSection() {
  const { ref, isVisible } = useInView();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const { mutate, isPending, isSuccess } = useSubmitContact();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in all fields.");
      return;
    }
    mutate(form, {
      onSuccess: () => {
        toast.success("Message sent. We'll be in touch.");
        setForm({ name: "", email: "", message: "" });
      },
      onError: () => {
        toast.error("Something went wrong. Please try again.");
      },
    });
  };

  return (
    <section
      id="contact"
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-28 bg-bg-deepest fade-in-section ${isVisible ? "is-visible" : ""}`}
    >
      <div className="max-w-2xl mx-auto px-6">
        <div className="text-center mb-16">
          <p
            className="text-xs uppercase tracking-cinematic mb-3"
            style={{ color: "oklch(0.73 0.09 75)" }}
          >
            Let's Create Together
          </p>
          <h2 className="text-4xl sm:text-5xl font-black uppercase text-foreground tracking-tight">
            Contact
          </h2>
          <div className="w-12 h-px bg-gold mx-auto mt-6" />
        </div>

        {/* WhatsApp numbers */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a
            href="https://wa.me/917276334069"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-5 py-3 border border-white/10 hover:border-gold transition-colors group"
            data-ocid="contact.phone"
          >
            <span className="text-gold">
              <WhatsAppIcon />
            </span>
            <span className="text-sm text-foreground group-hover:text-gold transition-colors">
              +91 72763 34069
            </span>
          </a>
          <a
            href="https://wa.me/919822657967"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-5 py-3 border border-white/10 hover:border-gold transition-colors group"
            data-ocid="contact.phone"
          >
            <span className="text-gold">
              <WhatsAppIcon />
            </span>
            <span className="text-sm text-foreground group-hover:text-gold transition-colors">
              +91 9822657967
            </span>
          </a>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
          data-ocid="contact.panel"
        >
          <div>
            <label
              htmlFor="contact-name"
              className="block text-xs uppercase tracking-widest text-muted-foreground mb-2"
            >
              Name
            </label>
            <input
              id="contact-name"
              type="text"
              placeholder="Your name"
              value={form.name}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, name: e.target.value }))
              }
              className="w-full bg-bg-mid border border-white/10 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold transition-colors"
              data-ocid="contact.input"
              autoComplete="name"
            />
          </div>

          <div>
            <label
              htmlFor="contact-email"
              className="block text-xs uppercase tracking-widest text-muted-foreground mb-2"
            >
              Email
            </label>
            <input
              id="contact-email"
              type="email"
              placeholder="your@email.com"
              value={form.email}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, email: e.target.value }))
              }
              className="w-full bg-bg-mid border border-white/10 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold transition-colors"
              data-ocid="contact.input"
              autoComplete="email"
            />
          </div>

          <div>
            <label
              htmlFor="contact-message"
              className="block text-xs uppercase tracking-widest text-muted-foreground mb-2"
            >
              Message
            </label>
            <textarea
              id="contact-message"
              placeholder="Tell us about your project..."
              value={form.message}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, message: e.target.value }))
              }
              rows={5}
              className="w-full bg-bg-mid border border-white/10 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold transition-colors resize-none"
              data-ocid="contact.textarea"
            />
          </div>

          <button
            type="submit"
            disabled={isPending || isSuccess}
            className="w-full flex items-center justify-center gap-2 py-4 text-xs font-bold uppercase tracking-widest bg-gold text-bg-dark hover:bg-gold-muted transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
            data-ocid="contact.submit_button"
          >
            {isPending ? (
              <>
                <Loader2 size={14} className="animate-spin" />
                Sending...
              </>
            ) : (
              <>
                <Send size={14} />
                Send Message
              </>
            )}
          </button>
        </form>

        {/* Social */}
        <div className="mt-12 text-center">
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-6">
            Follow Our Work
          </p>
          <div className="flex justify-center">
            <a
              href="https://www.instagram.com/roopmahalpremgalistudios?igsh=MTV2eDNzNWlsOHl2Mw=="
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gold hover:text-foreground transition-colors text-sm font-medium"
              data-ocid="contact.link"
            >
              <InstagramIcon />
              @roopmahalpremgalistudios
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
