import { Instagram, Play } from "lucide-react";
import { useInView } from "../hooks/useInView";

const projects = [
  {
    id: "RlqAR8_iDfI",
    title: "Campaign Film",
    year: "2024",
    type: "youtube",
    url: "https://youtu.be/RlqAR8_iDfI",
  },
  {
    id: "JyDIkSe814",
    title: "Music Video",
    year: "2024",
    type: "youtube",
    url: "https://youtu.be/JyDIkSe814",
  },
  {
    id: "TuSrJZilMEg",
    title: "Brand Film",
    year: "2024",
    type: "youtube",
    url: "https://youtu.be/TuSrJZilMEg",
  },
  {
    id: "h3psWXt7VEc",
    title: "Automobile Film",
    year: "2024",
    type: "youtube",
    url: "https://youtu.be/h3psWXt7VEc",
  },
  {
    id: "DTeiFj8rIY0",
    title: "Corporate Film",
    year: "2024",
    type: "youtube",
    url: "https://youtu.be/DTeiFj8rIY0",
  },
  {
    id: "VqvHjxYrW0E",
    title: "Testimonial Shoot",
    year: "2024",
    type: "youtube",
    url: "https://youtu.be/VqvHjxYrW0E",
  },
  {
    id: "0ECwq5R5Fzo",
    title: "Campaign Reel",
    year: "2024",
    type: "youtube",
    url: "https://youtu.be/0ECwq5R5Fzo",
  },
  {
    id: "instagram",
    title: "Social Campaign",
    year: "2024",
    type: "instagram",
    url: "https://www.instagram.com/reel/C5YFbaosEK/",
  },
];

function VideoCard({
  project,
  index,
}: { project: (typeof projects)[0]; index: number }) {
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block relative overflow-hidden bg-bg-mid cursor-pointer"
      style={{ animationDelay: `${index * 80}ms` }}
      data-ocid={`work.item.${index + 1}`}
    >
      {/* Thumbnail */}
      <div className="relative aspect-video overflow-hidden">
        {project.type === "youtube" ? (
          <img
            src={`https://img.youtube.com/vi/${project.id}/hqdefault.jpg`}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full bg-bg-light flex items-center justify-center">
            <div className="flex flex-col items-center gap-3">
              <Instagram size={36} className="text-gold" />
              <span className="text-xs uppercase tracking-widest text-muted-foreground">
                Instagram Reel
              </span>
            </div>
          </div>
        )}

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

        {/* Play button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-14 h-14 border-2 border-white/50 rounded-full flex items-center justify-center bg-black/30 backdrop-blur-sm group-hover:border-gold group-hover:bg-gold/20 transition-all duration-300">
            {project.type === "instagram" ? (
              <Instagram
                size={20}
                className="text-white group-hover:text-gold transition-colors"
              />
            ) : (
              <Play
                size={20}
                fill="white"
                className="text-white ml-1 group-hover:fill-gold group-hover:text-gold transition-colors"
              />
            )}
          </div>
        </div>
      </div>

      {/* Metadata */}
      <div className="px-4 py-3 border-t border-white/5">
        <p className="text-sm font-semibold uppercase tracking-wide text-foreground">
          {project.title}
        </p>
        <p className="text-xs text-muted-foreground mt-0.5">{project.year}</p>
      </div>
    </a>
  );
}

export default function WorkSection() {
  const { ref, isVisible } = useInView();

  return (
    <section
      id="work"
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-28 bg-bg-mid fade-in-section ${isVisible ? "is-visible" : ""}`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-cinematic text-gold mb-3">
            Portfolio
          </p>
          <h2 className="text-4xl sm:text-5xl font-black uppercase text-foreground tracking-tight">
            Featured Work
          </h2>
          <div className="w-12 h-px bg-gold mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {projects.map((project, index) => (
            <VideoCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
