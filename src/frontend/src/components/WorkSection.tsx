import { ChevronDown, ChevronUp } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { useInView } from "../hooks/useInView";
import { VideoCard } from "./VideoCard";
import type { Project } from "./VideoCard";

const ACCENT_BLUE = "oklch(0.55 0.13 215)";

const projects: Project[] = [
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
    id: "UKAaCOAlWhM",
    type: "youtube",
    url: "https://www.youtube.com/watch?v=UKAaCOAlWhM",
  },
  {
    id: "XJQj2dUNY2A",
    type: "youtube",
    url: "https://www.youtube.com/watch?v=XJQj2dUNY2A",
  },
  {
    id: "ZiQ-hKNHs9g",
    type: "youtube",
    url: "https://www.youtube.com/watch?v=ZiQ-hKNHs9g",
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
    id: "e8kfXO31IqI",
    type: "youtube",
    url: "https://youtu.be/e8kfXO31IqI?feature=shared",
  },
  {
    id: "instagram",
    type: "instagram",
    url: "https://www.instagram.com/reel/C5YFbaosEK_/?igsh=MWp5OTZhejkzYmtneA==",
  },
];

export default function WorkSection() {
  const { ref, isVisible } = useInView();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section
      id="work"
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-28 bg-bg-mid fade-in-section ${isVisible ? "is-visible" : ""}`}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header — always visible */}
        <div className="text-center">
          <p
            className="text-xs uppercase tracking-cinematic mb-3"
            style={{ color: ACCENT_BLUE }}
          >
            Portfolio
          </p>
          <h2 className="text-4xl sm:text-5xl font-black uppercase text-foreground tracking-tight">
            Featured Work
          </h2>
          <div
            className="w-12 h-px mx-auto mt-6"
            style={{ backgroundColor: ACCENT_BLUE }}
          />
          <p
            className="mt-5 text-sm tracking-wider"
            style={{ color: "oklch(0.52 0.01 60)" }}
          >
            12 selected projects
          </p>

          {/* CTA — visible only when collapsed */}
          <AnimatePresence mode="wait">
            {!isOpen && (
              <motion.div
                key="explore-cta"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="mt-10"
              >
                <button
                  type="button"
                  onClick={() => setIsOpen(true)}
                  className="group inline-flex items-center gap-3 px-8 py-3.5 text-xs font-semibold uppercase tracking-widest border border-blue-muted text-blue-muted hover:bg-blue-muted hover:text-bg-dark transition-all duration-300"
                  data-ocid="work.primary_button"
                >
                  Explore Work
                  <ChevronDown
                    size={14}
                    className="transition-transform duration-300 group-hover:translate-y-0.5"
                  />
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Expandable grid */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              key="work-grid"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{
                height: { duration: 0.85, ease: [0.22, 1, 0.36, 1] },
                opacity: { duration: 0.45, ease: "easeOut" },
              }}
              className="overflow-hidden"
            >
              <div className="pt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {projects.map((project, index) => (
                  <VideoCard key={project.id} project={project} index={index} />
                ))}
              </div>

              {/* Collapse button */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.55, duration: 0.4 }}
                className="flex justify-center mt-14 pb-2"
              >
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-medium text-muted-foreground hover:text-foreground transition-colors duration-300"
                  data-ocid="work.secondary_button"
                >
                  <ChevronUp size={14} />
                  Collapse
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
