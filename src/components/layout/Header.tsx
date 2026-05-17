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
      <motion.div
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="fixed top-0 left-0 right-0 z-[60]"
      >
        <header className="glass">
          <div className="max-w-[1200px] mx-auto px-4 md:px-12 py-3 flex items-center justify-between">
            <div className="flex items-center">
              <a href="/" className="flex items-center hover:opacity-80 transition-opacity">
                <Wordmark />
              </a>
            </div>
            
            <nav className="hidden lg:flex items-center gap-12">
              <a href="#offres" className="text-[13px] font-semibold text-text-secondary hover:text-text-primary transition-colors tracking-widest uppercase">Offres</a>
              <a href="#equipe" className="text-[13px] font-semibold text-text-secondary hover:text-text-primary transition-colors tracking-widest uppercase">Équipe</a>
              <Button variant="primary" className="text-[11px] px-6 py-2" href="https://calendly.com/whondydrouode/30min">
                Diagnostic Gratuit
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
