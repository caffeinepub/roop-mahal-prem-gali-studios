import { motion } from "motion/react";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Deep cinematic background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(160deg, oklch(0.06 0.012 40) 0%, oklch(0.04 0.008 30) 50%, oklch(0.07 0.015 22) 100%)",
        }}
      />
      {/* Vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 70% at 50% 40%, transparent 40%, oklch(0.03 0.005 30 / 0.85) 100%)",
        }}
      />
      {/* Grain texture */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Subtle horizontal light streak */}
      <div
        className="absolute"
        style={{
          top: "42%",
          left: "5%",
          right: "5%",
          height: "1px",
          background:
            "linear-gradient(to right, transparent, oklch(0.52 0.13 22 / 0.15) 30%, oklch(0.52 0.13 22 / 0.15) 70%, transparent)",
        }}
      />

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full px-4">
        {/* Logo — fills the section horizontally */}
        <motion.div
          initial={{ opacity: 0, y: 18, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="w-full flex items-center justify-center"
        >
          <img
            src="/assets/uploads/1-019d282c-23bc-7129-8792-1a3f53ff0243-1.png"
            alt="Roop Mahal Prem Gali Studios"
            className="w-[90vw] max-w-4xl object-contain"
            style={{
              filter:
                "drop-shadow(0 0 60px oklch(0.52 0.13 22 / 0.25)) drop-shadow(0 8px 40px oklch(0 0 0 / 0.8)) brightness(1.05) contrast(1.08)",
            }}
          />
        </motion.div>

        {/* Tagline — merged directly below the logo */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center mt-6"
        >
          <p
            className="uppercase tracking-[0.15em] font-semibold"
            style={{
              color: "oklch(0.52 0.13 22 / 0.9)",
              fontSize: "clamp(1.1rem, 3.5vw, 2.8rem)",
            }}
          >
            One Studio. Every Screen.
          </p>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span
          className="uppercase tracking-[0.3em] text-[10px]"
          style={{ color: "oklch(0.55 0.01 60 / 0.5)" }}
        >
          Scroll
        </span>
        <div
          className="w-px h-8"
          style={{
            background:
              "linear-gradient(to bottom, oklch(0.55 0.01 60 / 0.4), transparent)",
          }}
        />
      </motion.div>
    </section>
  );
}
