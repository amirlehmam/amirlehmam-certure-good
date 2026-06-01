import React from "react";
import { Award, Clock, Zap } from 'lucide-react';
import { motion } from "motion/react";

export default function StatsSection() {
  return (
    <section className="pt-12 pb-24 bg-white border-b border-border">
      <div className="max-w-[1200px] mx-auto px-4 md:px-12">
        <div className="mb-12 text-center">
          <div className="section-label mb-4 mx-auto w-fit">Impact de l'IA</div>
          <h2 className="text-[32px] md:text-[52px] font-bold text-text-primary tracking-tight leading-tight max-w-4xl mx-auto">
            Équipez vous d'outils IA pour réduire vos coûts, <span className="editorial-title text-text-secondary font-bold">augmenter vos revenus et gagner du temps.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-border ring-1 ring-border shadow-premium overflow-hidden">
          {/* Card Microsoft */}
          <div className="bg-white p-12 flex flex-col justify-between group">
            <div>
              <div className="text-[48px] md:text-[64px] font-bold text-blue mb-6 tracking-tight italic leading-none">×3,7</div>
              <p className="text-[17px] text-text-secondary leading-relaxed font-light mb-8 italic">
                "Chaque euro investi dans l’IA génère un retour moyen de 3,7 fois la mise."
              </p>
            </div>
            <div className="pt-8 border-t border-border flex items-center justify-between">
              <a href="https://blogs.microsoft.com/blog/2024/11/12/idcs-2024-ai-opportunity-study-top-five-ai-trends-to-watch/" target="_blank" className="text-[10px] font-bold uppercase tracking-widest text-blue hover:underline">Source : Microsoft</a>
              <img src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" className="h-5 md:h-6 opacity-80" alt="Logo Microsoft - Source impact IA" loading="lazy" />
            </div>
          </div>
 
          {/* Card Bpifrance */}
          <div className="bg-white p-12 flex flex-col justify-between group">
            <div>
              <div className="text-[48px] md:text-[64px] font-bold text-text-primary mb-6 tracking-tight leading-none">30%</div>
              <p className="text-[17px] text-text-secondary leading-relaxed font-light mb-8 italic">
                "Les dirigeants de PME consacrent en moyenne 30 % de leur semaine à des tâches administratives répétitives."
              </p>
            </div>
            <div className="pt-8 border-t border-border flex items-center justify-between">
              <a href="https://drive.google.com/file/d/1iWqPtc2OObzAxJ6jBghtQ9ya277VbQnt/view?usp=sharing" target="_blank" className="text-[10px] font-bold uppercase tracking-widest text-blue hover:underline">Source : Bpifrance Le Lab</a>
              <img src="https://i.ibb.co/jqxsx3R/Logo-Bpifrance-2.jpg" className="h-6 opacity-80" alt="Logo Bpifrance - Source impact IA" loading="lazy" />
            </div>
          </div>
 
          {/* Card Capgemini */}
          <div className="bg-white p-12 flex flex-col justify-between group">
            <div>
              <div className="text-[48px] md:text-[64px] font-bold text-text-primary mb-6 tracking-tight leading-none">26-31%</div>
              <p className="text-[17px] text-text-secondary leading-relaxed font-light mb-8 italic">
                "Réduction des coûts sur la finance, les achats, les RH et le service client grâce à l'IA générative."
              </p>
            </div>
            <div className="pt-8 border-t border-border flex items-center justify-between">
              <a href="https://www.capgemini.com/in-en/insights/research-library/ai-and-gen-ai-in-business-operations/" target="_blank" className="text-[10px] font-bold uppercase tracking-widest text-blue hover:underline">Source : Capgemini</a>
              <img src="https://i.ibb.co/dJmNp21d/image.png" className="h-3 opacity-70" alt="Logo Capgemini - Source impact IA" loading="lazy" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

