import { Instagram, Play } from "lucide-react";
import { useInView } from "../hooks/useInView";

const BLUE = "oklch(0.55 0.13 215)";

const projects = [
  {
    id: "_JyDIkSe814",
    type: "youtube",
    url: "https://youtu.be/_JyDIkSe814?si=FYk5u0EH08eeBlZg",
  },
  {
    id: "TuSrJZilMEg",
    type: "youtube",
    url: "https://youtu.be/TuSrJZilMEg?si=0zmgHhufanrwRRFB",
  },
  {
    id: "h3psWXt7VEc",
    type: "youtube",
    url: "https://youtu.be/h3psWXt7VEc?si=DCKVk1Vb70YS2Mdo",
  },
  {
    id: "DTeiFj8rIY0",
    type: "youtube",
    url: "https://youtu.be/DTeiFj8rIY0?si=KLy4vlAppocraNu6",
  },
  {
    id: "VqvHjxYrW0E",
    type: "youtube",
    url: "https://youtu.be/VqvHjxYrW0E?si=vYAtfd9dm9NCDiGK",
  },
  {
    id: "0ECwq5R5Fzo",
    type: "youtube",
    url: "https://youtu.be/0ECwq5R5Fzo?si=T9HMYb2cy2wAkBFb",
  },
  {
    id: "RlqAR8_iDfI",
    type: "youtube",
    url: "https://youtu.be/RlqAR8_iDfI?si=UpypFfXxt2-9PM9M",
  },
  {
    id: "instagram",
    type: "instagram",
    url: "https://www.instagram.com/reel/C5YFbaosEK_/?igsh=MWp5OTZhejkzYmtneA==",
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
            alt=""
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full bg-bg-light flex items-center justify-center">
            <Instagram size={36} style={{ color: BLUE }} />
          </div>
        )}

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

        {/* Play button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className="w-14 h-14 border-2 border-white/50 rounded-full flex items-center justify-center bg-black/30 backdrop-blur-sm transition-all duration-300"
            style={
              {
                // CSS hover handled via group classes + inline on hover would need JS; use group-hover via data attributes approach
              }
            }
          >
            {project.type === "instagram" ? (
              <Instagram
                size={20}
                className="text-white transition-colors group-hover:text-[oklch(0.55_0.13_215)]"
              />
            ) : (
              <Play
                size={20}
                fill="white"
                className="text-white ml-1 transition-colors"
              />
            )}
          </div>
        </div>
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
          <p
            className="text-xs uppercase tracking-cinematic mb-3"
            style={{ color: BLUE }}
          >
            Portfolio
          </p>
          <h2 className="text-4xl sm:text-5xl font-black uppercase text-foreground tracking-tight">
            Featured Work
          </h2>
          <div
            className="w-12 h-px mx-auto mt-6"
            style={{ backgroundColor: BLUE }}
          />
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
