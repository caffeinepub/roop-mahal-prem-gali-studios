import { Loader2, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { useInView } from "../hooks/useInView";
import { useSubmitContact } from "../hooks/useQueries";

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
            style={{ color: "oklch(var(--gold))" }}
          >
            Let's Create Together
          </p>
          <h2 className="text-4xl sm:text-5xl font-black uppercase text-foreground tracking-tight">
            Contact
          </h2>
          <div className="w-12 h-px bg-gold mx-auto mt-6" />
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
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">
            Follow Our Work
          </p>
          <a
            href="https://www.instagram.com/reel/C5YFbaosEK/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-gold hover:text-foreground transition-colors text-sm font-medium"
            data-ocid="contact.link"
          >
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
            Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
