import { X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { useInView } from "../hooks/useInView";
import { VideoCard } from "./VideoCard";
import type { Project } from "./VideoCard";

const ACCENT_RED = "oklch(0.52 0.13 22)";
const GOLD = "oklch(0.7 0.14 82)";

const omkarProjects: Project[] = [
  {
    id: "W5ZINnGg8j4",
    type: "youtube",
    url: "https://youtu.be/W5ZINnGg8j4?si=OTg3iBMYkO8xOZ8H",
  },
  {
    id: "wFJ4QFtHRyg",
    type: "youtube",
    url: "https://youtu.be/wFJ4QFtHRyg?si=AFL05FJqFfF_PaUM",
  },
  {
    id: "xhur4ucj_Vk",
    type: "youtube",
    url: "https://youtu.be/xhur4ucj_Vk?si=4teAvnWtQW4MiRuC",
  },
  { id: "iBO16V77F0M", type: "youtube", url: "https://youtu.be/iBO16V77F0M" },
  {
    id: "CV6dIFQJJZU",
    type: "youtube",
    url: "https://youtu.be/CV6dIFQJJZU?si=VhZS3v-CHI8SXjqv",
  },
  {
    id: "1NEUQLRCsmU",
    type: "youtube",
    url: "https://youtu.be/1NEUQLRCsmU?si=sM_1AD9mt29VeWrw",
  },
  {
    id: "0wFElgsRD3E",
    type: "youtube",
    url: "https://youtu.be/0wFElgsRD3E?si=H4QPDTqBicNPiqfp",
  },
  {
    id: "hutqYMwHEq0",
    type: "youtube",
    url: "https://youtu.be/hutqYMwHEq0?si=sFSW7L4p1SDxwPim",
  },
  {
    id: "8dIQIO6QWSQ",
    type: "youtube",
    url: "https://youtu.be/8dIQIO6QWSQ?si=nHH94dTfL4xzS0Uh",
  },
  { id: "9tUszpVFRYw", type: "youtube", url: "https://youtu.be/9tUszpVFRYw" },
  { id: "1Qza81y3gDg", type: "youtube", url: "https://youtu.be/1Qza81y3gDg" },
  { id: "9MVWdCiFpWI", type: "youtube", url: "https://youtu.be/9MVWdCiFpWI" },
];

const niteeshProjects: Project[] = [
  {
    id: "5Lgg3-K0uTw",
    type: "youtube",
    url: "https://youtu.be/5Lgg3-K0uTw?si=57RVhHd-CD4g_QEP",
  },
  {
    id: "Iowb-ynCjZw",
    type: "youtube",
    url: "https://youtu.be/Iowb-ynCjZw?si=BBuUhWF4N04qoIZT",
  },
  { id: "856023549", type: "vimeo", url: "https://vimeo.com/856023549" },
  {
    id: "3LQb79atLcQ",
    type: "youtube",
    url: "https://youtu.be/3LQb79atLcQ?si=fnTDUSgabDhGZ1AX",
  },
  {
    id: "VUHy_FbAltY",
    type: "youtube",
    url: "https://youtu.be/VUHy_FbAltY?si=9jNMbjSUL1MI1dSS",
  },
  {
    id: "UP92PnLZZb0",
    type: "youtube",
    url: "https://youtu.be/UP92PnLZZb0?si=tkq5DLTIWLJE2yZI",
  },
  {
    id: "SZMIRe3NM6U",
    type: "youtube",
    url: "https://youtu.be/SZMIRe3NM6U?si=THXNUM73VlZCWuIY",
  },
  { id: "777370445", type: "vimeo", url: "https://vimeo.com/777370445" },
  {
    id: "Ge9L52SiNoQ",
    type: "youtube",
    url: "https://youtu.be/Ge9L52SiNoQ?si=MWZAioOVxpgsCcHN",
  },
  {
    id: "UeJfy1OZEdI",
    type: "youtube",
    url: "https://youtu.be/UeJfy1OZEdI?si=7hsMg6Qim5VB0Z_r",
  },
];

interface CrewMember {
  id: string;
  name: string;
  title: string;
  bio: string;
  photo?: string;
  objectPosition?: string;
  projects?: Project[];
}

const crewMembers: CrewMember[] = [
  {
    id: "omkar",
    name: "Omkar Potdar",
    title: "Founder & Director",
    bio: "A seasoned filmmaker known for crafting compelling narratives across music videos and lifestyle campaigns. With a Master's in Audio Visual Communication from Symbiosis Institute of Media & Communication, he brings a refined storytelling approach as a director and founder of Roop Mahal Prem Gali Studios.",
    photo: "/assets/generated/omkar-potdar-cinematic.dim_800x800.jpg",
    projects: omkarProjects,
  },
  {
    id: "niteesh",
    name: "Niteesh Jangid",
    title: "Director & Cinematographer",
    bio: "A highly focused filmmaker with a Master's in Audio Visual Communication from Symbiosis Institute of Media & Communication. With a sharp visual instinct, he shoots, directs, and edits his own work—bringing a cohesive, elevated vision to every frame.",
    photo: "/assets/generated/niteesh-jangid-cinematic.dim_800x800.jpg",
    projects: niteeshProjects,
  },
  {
    id: "shantanu",
    name: "Shantanu Kardile",
    title: "Producer",
    bio: "A filmmaker and problem-solver focused on stories that deliver. He creates films that balance strong ideas with sharp execution — from music videos to brand campaigns. At Roop Mahal Prem Gali Studios, he works across projects end-to-end, ensuring every piece is clear, engaging, and built to perform. He continues to explore new formats and technologies to keep the work relevant and future-ready.",
    photo: "/assets/generated/shantanu-kardile-cinematic.dim_800x1000.jpg",
    objectPosition: "center 18%",
  },
];

function CrewModal({
  member,
  onClose,
}: {
  member: CrewMember;
  onClose: () => void;
}) {
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);

    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", handleKey);
    };
  }, [onClose]);

  return (
    <motion.div
      key="backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto"
      style={{ backgroundColor: "oklch(0.04 0.008 30 / 0.97)" }}
      onClick={onClose}
      data-ocid="directors.modal"
    >
      <div className="flex items-center justify-center min-h-full w-full p-0 md:p-8">
        <motion.div
          key="panel"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full md:max-w-[1100px] bg-bg-deepest"
          style={{ minHeight: "50vh" }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Modal header */}
          <div
            className="sticky top-0 z-10 flex items-center justify-between px-6 py-5 border-b border-white/5"
            style={{ backgroundColor: "oklch(0.10 0.015 40)" }}
          >
            <div>
              <p
                className="text-[10px] uppercase tracking-cinematic mb-1"
                style={{ color: ACCENT_RED }}
              >
                Selected Work
              </p>
              <h3 className="text-xl font-black uppercase tracking-tight text-foreground">
                {member.name}
              </h3>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="w-10 h-10 flex items-center justify-center border border-white/10 hover:border-white/30 text-muted-foreground hover:text-foreground transition-all duration-200"
              data-ocid="directors.close_button"
            >
              <X size={18} />
            </button>
          </div>

          {/* Videos grid */}
          <div className="p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {(member.projects ?? []).map((project, index) => (
                <VideoCard key={project.id} project={project} index={index} />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

function CrewCard({
  member,
  index,
  onOpenModal,
}: {
  member: CrewMember;
  index: number;
  onOpenModal: () => void;
}) {
  const hasWork = member.projects && member.projects.length > 0;

  return (
    <div
      className="flex flex-col gap-6"
      data-ocid={`directors.item.${index + 1}`}
    >
      {/* Photo */}
      <div
        className="relative w-full overflow-hidden"
        style={{ aspectRatio: "4 / 5" }}
      >
        {/* Grain overlay */}
        <div
          className="absolute inset-0 z-10 pointer-events-none"
          style={{
            opacity: 0.06,
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
          }}
        />

        {member.photo ? (
          <>
            <img
              src={member.photo}
              alt={member.name}
              className="absolute inset-0 w-full h-full object-cover"
              style={{
                objectPosition: member.objectPosition ?? "top center",
                filter: "saturate(0.75) contrast(1.05) brightness(0.88)",
              }}
            />
            <div
              className="absolute inset-0 z-[5]"
              style={{
                background:
                  "radial-gradient(ellipse 90% 95% at 50% 40%, transparent 35%, oklch(0.05 0.008 35 / 0.65) 100%)",
              }}
            />
            <div
              className="absolute bottom-0 left-0 right-0 h-24 z-[5]"
              style={{
                background:
                  "linear-gradient(to top, oklch(0.08 0.012 35) 0%, transparent 100%)",
              }}
            />
          </>
        ) : (
          <>
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(165deg, oklch(0.14 0.018 40) 0%, oklch(0.10 0.015 40) 55%, oklch(0.08 0.012 35) 100%)",
              }}
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse 80% 90% at 50% 40%, transparent 30%, oklch(0.05 0.008 35 / 0.7) 100%)",
              }}
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
              <div
                className="w-8 h-px"
                style={{ backgroundColor: ACCENT_RED, opacity: 0.4 }}
              />
              <p
                className="text-[10px] uppercase tracking-[0.35em]"
                style={{ color: "oklch(0.38 0.01 60)" }}
              >
                Photo Coming Soon
              </p>
              <div
                className="w-8 h-px"
                style={{ backgroundColor: ACCENT_RED, opacity: 0.4 }}
              />
            </div>
          </>
        )}

        {/* Red left accent border */}
        <div
          className="absolute left-0 top-0 bottom-0 w-[3px] z-20"
          style={{ backgroundColor: ACCENT_RED }}
        />
      </div>

      {/* Crew info */}
      <div className="flex flex-col gap-4 pl-1">
        <div>
          <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-foreground leading-none">
            {member.name}
          </h3>
          <p
            className="text-xs uppercase tracking-widest mt-2 font-medium"
            style={{ color: GOLD }}
          >
            {member.title}
          </p>
        </div>

        <div className="w-10 h-px" style={{ backgroundColor: ACCENT_RED }} />

        {member.bio && (
          <p
            className="text-sm leading-relaxed"
            style={{ color: "oklch(0.62 0.012 60)" }}
          >
            {member.bio}
          </p>
        )}

        {hasWork && (
          <button
            type="button"
            onClick={onOpenModal}
            className="group inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold transition-all duration-300 w-fit"
            style={{ color: ACCENT_RED }}
            data-ocid={`directors.open_modal_button.${index + 1}`}
          >
            View Work
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </button>
        )}
      </div>
    </div>
  );
}

export default function DirectorsSection() {
  const { ref, isVisible } = useInView();
  const [openMemberId, setOpenMemberId] = useState<string | null>(null);
  const openMember = crewMembers.find((m) => m.id === openMemberId) ?? null;

  return (
    <>
      <section
        id="directors"
        ref={ref as React.RefObject<HTMLElement>}
        className={`py-28 bg-bg-deepest fade-in-section ${isVisible ? "is-visible" : ""}`}
      >
        <div className="max-w-7xl mx-auto px-6">
          {/* Section header */}
          <div className="text-center mb-20">
            <p
              className="text-xs uppercase tracking-cinematic mb-3"
              style={{ color: ACCENT_RED }}
            >
              The People
            </p>
            <h2 className="text-4xl sm:text-5xl font-black uppercase text-foreground tracking-tight">
              Meet the Crew
            </h2>
            <div
              className="w-12 h-px mx-auto mt-6"
              style={{ backgroundColor: ACCENT_RED }}
            />
          </div>

          {/* Crew cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 lg:gap-12">
            {crewMembers.map((member, index) => (
              <CrewCard
                key={member.id}
                member={member}
                index={index}
                onOpenModal={() => setOpenMemberId(member.id)}
              />
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {openMember?.projects && openMember.projects.length > 0 && (
          <CrewModal
            member={openMember}
            onClose={() => setOpenMemberId(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
