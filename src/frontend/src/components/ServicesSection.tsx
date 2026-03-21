import { Building2, Car, Cpu, Film, Music2, Users } from "lucide-react";
import { useInView } from "../hooks/useInView";

const services = [
  {
    icon: Film,
    title: "Campaign Films",
    description:
      "End-to-end production for digital, TV, and theatrical campaigns—built to scale and deliver.",
  },
  {
    icon: Music2,
    title: "Music Videos",
    description:
      "A core strength. Our first produced music video ranked in the VH1 Global Top 50 in 2024 and was broadcast on the channel.",
  },
  {
    icon: Car,
    title: "Automobile Films",
    description:
      "Specialized execution backed by a team with deep expertise in the automotive space.",
  },
  {
    icon: Users,
    title: "Testimonial Shoots",
    description: "Real stories, captured with authenticity and clarity.",
  },
  {
    icon: Building2,
    title: "Corporate Films",
    description:
      "Structured storytelling designed for brand communication and internal alignment.",
  },
  {
    icon: Cpu,
    title: "AI-Driven Content",
    description:
      "We actively integrate AI into our creative and production workflows—enhancing ideation, visualization, and execution.",
  },
];

export default function ServicesSection() {
  const { ref, isVisible } = useInView();

  return (
    <section
      id="services"
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-28 bg-bg-light fade-in-section ${isVisible ? "is-visible" : ""}`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-cinematic text-gold mb-3">
            What We Do
          </p>
          <h2 className="text-4xl sm:text-5xl font-black uppercase text-foreground tracking-tight">
            Services
          </h2>
          <div className="w-12 h-px bg-gold mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="bg-bg-light p-8 group hover:bg-bg-mid transition-colors duration-300"
                data-ocid={`services.item.${index + 1}`}
              >
                <Icon
                  size={24}
                  className="text-gold mb-6 group-hover:scale-110 transition-transform duration-300"
                />
                <h3 className="text-sm font-bold uppercase tracking-wide text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
