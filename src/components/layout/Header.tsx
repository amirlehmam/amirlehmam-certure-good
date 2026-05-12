import React, { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "motion/react";
import { Wordmark } from "../ui/Wordmark";
import { Button } from "../ui/Button";

export default function Header() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-[70] bg-navy text-white py-2 px-6 md:px-12 flex items-center justify-between text-xs md:text-sm shrink-0">
        <div className="flex items-center gap-6 overflow-hidden">
          <span className="font-semibold whitespace-nowrap">🎯 Événement IA · 18 mai · CCI Versailles</span>
          <span className="text-white/70 hidden lg:inline truncate">TPE & PME - Repartez avec les étapes pour lancer votre projet IA</span>
        </div>
        <a href="/event" className="text-white font-medium hover:underline whitespace-nowrap ml-4">Je réserve ma place →</a>
      </div>

      <motion.div
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="fixed top-[32px] md:top-[40px] left-0 right-0 z-[60]"
      >
        <header className="bg-white/90 backdrop-blur-md border-b border-border-subtle shadow-sm">
          <div className="max-w-[1120px] mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <a href="/" className="flex items-center hover:opacity-80 transition-opacity">
                <Wordmark />
              </a>
            </div>
            
            <nav className="hidden lg:flex items-center gap-10">
              <a href="/event" className="text-sm font-semibold text-blue hover:text-blue-hover transition-colors">Événement · 18 mai</a>
              <a href="#offres" className="text-sm font-medium text-text-secondary hover:text-blue transition-colors">Nos offres</a>
              <a href="#equipe" className="text-sm font-medium text-text-secondary hover:text-blue transition-colors">Notre équipe</a>
              <a href="#etudes-de-cas" className="text-sm font-medium text-text-secondary hover:text-blue transition-colors">Études de cas</a>
              <a href="/blog" className="text-sm font-medium text-text-secondary hover:text-blue transition-colors">Blog</a>
              <Button variant="primary" className="text-sm px-4 py-2" href="#diagnostic">
                Diagnostic gratuit
              </Button>
            </nav>
            
            <button className="lg:hidden p-2 text-text-title">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </header>
      </motion.div>
    </>
  );
}
