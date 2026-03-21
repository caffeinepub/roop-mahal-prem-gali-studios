import { Play } from "lucide-react";
import { useInView } from "../hooks/useInView";

const BLUE = "oklch(0.55 0.13 215)";

const btsVideos = [
  {
    id: "0mA5KNKKiVM",
    title: "Behind the Madness",
    url: "https://youtu.be/0mA5KNKKiVM",
  },
  {
    id: "iaBt8zsro5s",
    title: "Lights, Camera, Energy",
    url: "https://youtu.be/iaBt8zsro5s",
  },
];

export default function BTSSection() {
  const { ref, isVisible } = useInView();

  return (
    <section
      id="bts"
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-28 bg-bg-deepest fade-in-section ${isVisible ? "is-visible" : ""}`}
    >
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <p
            className="text-xs uppercase tracking-cinematic mb-3"
            style={{ color: BLUE }}
          >
            Behind The Scenes
          </p>
          <h2 className="text-4xl sm:text-5xl font-black uppercase text-foreground tracking-tight">
            A Glimpse Into the
            <br />
            <span style={{ color: BLUE }}>Energy on Set</span>
          </h2>
          <div
            className="w-12 h-px mx-auto mt-6"
            style={{ backgroundColor: BLUE }}
          />
          <p className="text-sm text-muted-foreground mt-6 max-w-lg mx-auto">
            Every great film starts with great energy. Here's a look at the
            moments that make it all happen.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {btsVideos.map((video, index) => (
            <a
              key={video.id}
              href={video.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block relative overflow-hidden bg-bg-mid cursor-pointer"
              data-ocid={`bts.item.${index + 1}`}
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                  alt={video.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 border-2 border-white/50 rounded-full flex items-center justify-center bg-black/30 backdrop-blur-sm transition-all duration-300">
                    <Play
                      size={22}
                      fill="white"
                      className="text-white ml-1 transition-colors"
                    />
                  </div>
                </div>
              </div>
              <div className="px-5 py-4 border-t border-white/5">
                <p
                  className="text-xs uppercase tracking-widest mb-1"
                  style={{ color: BLUE }}
                >
                  BTS
                </p>
                <p className="text-base font-semibold uppercase tracking-wide text-foreground">
                  {video.title}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
