import { useInView } from "../hooks/useInView";

const achievements = [
  {
    stat: "VH1",
    label: "Global Top 50",
    description:
      "First produced music video ranked in VH1 Global Top 50 (2024)",
  },
  {
    stat: "✦",
    label: "National Telecast",
    description: "Broadcast milestone — featured on VH1 India",
  },
  {
    stat: "M+",
    label: "Views & Interactions",
    description: "Millions of views across all campaigns and platforms",
  },
  {
    stat: "360°",
    label: "Full-Service",
    description: "End-to-end production house — concept to final frame",
  },
];

export default function AchievementsSection() {
  const { ref, isVisible } = useInView();

  return (
    <section
      id="achievements"
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-28 bg-bg-dark fade-in-section ${isVisible ? "is-visible" : ""}`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-cinematic text-gold mb-3">
            Milestones
          </p>
          <h2 className="text-4xl sm:text-5xl font-black uppercase text-foreground tracking-tight">
            Achievements
          </h2>
          <div className="w-12 h-px bg-gold mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5">
          {achievements.map((item, index) => (
            <div
              key={item.label}
              className="bg-bg-dark p-8 text-center group hover:bg-bg-mid transition-colors duration-300"
              data-ocid={`achievements.item.${index + 1}`}
            >
              <div
                className="text-4xl sm:text-5xl font-black mb-3 leading-none"
                style={{ color: "oklch(var(--gold))" }}
              >
                {item.stat}
              </div>
              <div className="text-sm font-bold uppercase tracking-wide text-foreground mb-3">
                {item.label}
              </div>
              <div className="w-6 h-px bg-gold/40 mx-auto mb-3" />
              <p className="text-xs text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
