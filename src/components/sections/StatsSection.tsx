import React from "react";
import { RingStat } from "../ui/RingStat";
import { motion } from "motion/react";

export default function StatsSection() {
  return (
    <section className="py-24 border-t border-border-subtle bg-white">
      <div className="max-w-[1120px] mx-auto px-6 md:px-12">
        <div className="mb-12">
          <div className="text-xs font-bold uppercase tracking-widest text-text-tertiary mb-3">
             LA RÉALITÉ DU TERRAIN · BPIFRANCE · FRANCE NUM · INSEE
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-text-title tracking-snug mb-6">
            Les chiffres que vos concurrents regardent déjà.
          </h2>
          <p className="text-md text-text-secondary leading-relaxed max-w-[800px]">
             L'IA n'est pas une mode. C'est une course. Pendant que vous lisez ces lignes, l'écart se creuse.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <RingStat 
            percentage={26}
            label="Adoption en France"
            color="blue"
            description="des PME françaises utilisent l'IA en 2025. L'adoption a doublé en 12 mois."
          />
          <RingStat 
            percentage={11}
            label="Usage avancé"
            color="terre"
            description="seulement en tirent vraiment parti. Les 89 % restants tournent en roue libre."
          />
          <div className="bg-bg-secondary rounded-lg p-8 flex flex-col items-center text-center h-full">
            <div className="text-sm font-semibold tracking-wide text-text-title mb-6 uppercase">ROI bien intégré</div>
            
            <div className="relative flex justify-center items-center py-4 mb-6">
              <div className="relative w-[140px] h-[140px] flex items-center justify-center">
                <svg viewBox="0 0 140 140" width="140" height="140">
                  <circle cx="70" cy="70" r="58" fill="none" stroke="rgba(33,46,85,0.08)" strokeWidth="9"/>
                  <motion.circle 
                    cx="70" cy="70" r="58" 
                    fill="none" 
                    strokeWidth="9" 
                    strokeLinecap="round"
                    initial={{ pathLength: 0, stroke: "#EAB308" }}
                    whileInView={{ pathLength: 1, stroke: "#0E6245" }}
                    viewport={{ once: true }}
                    transition={{ duration: 2.0, ease: "easeInOut" }}
                    transform="rotate(-90 70 70)"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-4xl font-heavy text-navy tracking-tighter">×3,7</span>
                </div>
              </div>
            </div>
            
            <div className="text-sm font-medium text-text-secondary leading-relaxed max-w-[200px]">
              retour pour 1 € investi. ROI moyen d'un projet IA bien intégré.
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-xs text-text-tertiary">
            Sources : Bpifrance Le Lab · Baromètre France Num 2025 · Insee Première 2024
          </p>
        </div>
      </div>
    </section>
  );
}
