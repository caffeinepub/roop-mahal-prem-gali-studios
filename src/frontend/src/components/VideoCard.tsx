import { Instagram, Play } from "lucide-react";

export interface Project {
  id: string;
  type: "youtube" | "instagram" | "vimeo";
  url: string;
}

const ACCENT_RED = "oklch(0.52 0.13 22)";

function VimeoIcon({
  size = 24,
  className = "",
}: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M23.977 6.416c-.105 2.338-1.739 5.543-4.894 9.609-3.268 4.247-6.026 6.37-8.29 6.37-1.409 0-2.578-1.294-3.553-3.881L5.322 11.4C4.603 8.816 3.834 7.522 3.01 7.522c-.179 0-.806.378-1.881 1.132L0 7.197a315.065 315.065 0 0 0 3.501-3.125c1.579-1.368 2.765-2.085 3.558-2.149 1.867-.18 3.016 1.1 3.447 3.838.465 2.953.789 4.789.971 5.507.539 2.45 1.131 3.674 1.776 3.674.502 0 1.256-.796 2.265-2.385 1.004-1.589 1.54-2.797 1.612-3.628.144-1.371-.395-2.061-1.614-2.061-.574 0-1.167.121-1.777.391 1.186-3.868 3.434-5.757 6.762-5.637 2.473.06 3.628 1.664 3.476 4.79z" />
    </svg>
  );
}

export function VideoCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block relative overflow-hidden cursor-pointer"
      data-ocid={`work.item.${index + 1}`}
    >
      <div className="relative aspect-video overflow-hidden bg-bg-mid">
        {project.type === "youtube" ? (
          <img
            src={`https://img.youtube.com/vi/${project.id}/hqdefault.jpg`}
            alt=""
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
        ) : project.type === "vimeo" ? (
          <div
            className="w-full h-full flex items-center justify-center"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.14 0.018 250) 0%, oklch(0.09 0.012 240) 100%)",
            }}
          >
            <VimeoIcon size={40} className="text-white/70" />
          </div>
        ) : (
          <div className="w-full h-full bg-bg-dark flex items-center justify-center">
            <Instagram size={36} style={{ color: ACCENT_RED }} />
          </div>
        )}

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

        {/* Red bottom accent — reveals on hover */}
        <div
          className="absolute bottom-0 left-0 right-0 h-[2px] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
          style={{ backgroundColor: ACCENT_RED }}
        />

        {/* Play button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-12 h-12 border border-white/40 rounded-full flex items-center justify-center bg-black/40 backdrop-blur-sm transition-all duration-300 group-hover:border-white/80 group-hover:bg-black/60 group-hover:scale-110">
            {project.type === "instagram" ? (
              <Instagram
                size={18}
                className="text-white/80 group-hover:text-white transition-colors"
              />
            ) : project.type === "vimeo" ? (
              <VimeoIcon
                size={16}
                className="text-white/80 group-hover:text-white transition-colors"
              />
            ) : (
              <Play size={16} fill="white" className="text-white ml-0.5" />
            )}
          </div>
        </div>
      </div>
    </a>
  );
}
