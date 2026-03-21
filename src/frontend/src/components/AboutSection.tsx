import { useInView } from "../hooks/useInView";

export default function AboutSection() {
  const { ref, isVisible } = useInView();

  return (
    <section
      id="about"
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-28 bg-bg-deepest fade-in-section ${isVisible ? "is-visible" : ""}`}
    >
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs uppercase tracking-cinematic text-gold mb-4">
              About Us
            </p>
            <h2 className="text-4xl sm:text-5xl font-black uppercase leading-tight text-foreground mb-8">
              End-to-End.
              <br />
              No Compromises.
            </h2>
            <div className="w-12 h-px bg-gold mb-8" />
          </div>
          <div className="space-y-5">
            <p className="text-sm text-muted-foreground leading-relaxed">
              We are a full-service production house delivering end-to-end
              solutions across digital, television, and theatrical campaigns.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              We shape and execute brand narratives through high-impact films
              and advertising. Our approach is precise, intentional, and built
              for performance — every frame serves the story.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Our work has collectively garnered millions of views and
              interactions. We are everything a brand needs — from concept to
              final output.
            </p>
            <div className="pt-4">
              <a
                href="#contact"
                className="text-xs font-semibold uppercase tracking-widest text-gold border-b border-gold/40 pb-1 hover:border-gold transition-colors"
                data-ocid="about.primary_button"
              >
                Work With Us →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
