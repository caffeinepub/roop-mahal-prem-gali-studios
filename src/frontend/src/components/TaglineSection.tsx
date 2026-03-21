import { motion } from "motion/react";
import { useInView } from "../hooks/useInView";

export default function TaglineSection() {
  const { ref, isVisible } = useInView();

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="py-24 bg-bg-deepest flex flex-col items-center justify-center"
    >
      <div className="w-full max-w-3xl mx-auto px-6 text-center">
        {/* Top rule */}
        <div className="w-full h-px bg-white/5 mb-12 mx-auto" />

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight leading-none"
          style={{ color: "oklch(0.52 0.18 22)" }}
        >
          Crafting Cinematic Excellence
        </motion.h2>

        {/* Bottom rule */}
        <div className="w-full h-px bg-white/5 mt-12 mx-auto" />
      </div>
    </section>
  );
}
