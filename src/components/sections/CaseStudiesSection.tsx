import React from "react";
import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";

export default function CaseStudiesSection() {
  const cases = [
    {
      sector: "PME COMMERCE (77) : 17 PERSONNES",
      title: "Objectif : Automatiser des commandes fournisseurs",
      solution: "Solution : Agent IA qui traite les bons de commande, relance les paiements en retard et alerte le dirigeant.",
      result: "- 45 % de temps administratif",
      image: "https://i.ibb.co/m5TMKL0R/LUr-L1z-Q.jpg"
    },
    {
      sector: "DRH externalisé (92) : 1 personne",
      title: "Objectif : gagner du temps dans le suivi de ses dossiers RH",
      solution: "Solution : assistant personnel connecté à votre messagerie, agenda et autres outils internes",
      result: "+10h par semaine économisées",
      image: "https://i.ibb.co/93Hz34JW/Capture-d-e-cran-2026-06-01-a-14-23-44.png"
    },
    {
      sector: "PME INDUSTRIE (78) · 52 PERSONNES",
      title: "Objectif : Piloter la production en temps réel",
      solution: "Solution : Dashboard IA connecté à l'ERP. Le dirigeant anticipe les ruptures et decides sur la donnée.",
      result: "35 % d'erreurs en moins",
      image: "https://i.ibb.co/Pz91q9pt/GDu-QDVT.jpg"
    }
  ];

  return (
    <section id="etudes-de-cas" className="py-20 md:py-32 bg-bg-secondary border-b border-border">
      <div className="max-w-[1200px] mx-auto px-4 md:px-12">
        <div className="flex flex-col md:flex-row items-end justify-between mb-12 md:mb-24 gap-8">
          <div className="max-w-2xl">
            <div className="section-label mb-6">ÉTUDES DE CAS</div>
            <h2 className="text-[32px] md:text-[52px] font-bold text-text-primary tracking-tight leading-[1.1]">
              Des exemples de réalisations <span className="editorial-title text-text-secondary">chez nos clients.</span>
            </h2>
          </div>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cases.map((item, i) => (
            <div key={i} className="bg-white group overflow-hidden flex flex-col h-full shadow-premium border border-border">
              <div className="aspect-[16/11] bg-bg-secondary relative overflow-hidden transition-all duration-700">
                <img 
                   src={item.image} 
                   alt={item.title} 
                   className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-[1.03]"
                   loading="lazy"
                />
                <div className="absolute inset-0 bg-blue/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <div className="p-6 md:p-10 flex-1 flex flex-col">
                <div className="text-[10px] font-bold text-blue uppercase tracking-[0.2em] mb-4">
                  {item.sector}
                </div>
                <h3 className="text-[22px] font-bold text-text-primary mb-6 leading-tight">
                  {item.title}
                </h3>
                <p className="text-[16px] text-text-secondary leading-relaxed font-light mb-6">
                  {item.solution}
                </p>
                <div className="pt-6 border-t border-border mt-6">
                   <div className="text-[10px] font-black uppercase tracking-widest text-blue mb-2">Résultats</div>
                   <p className="text-[17px] font-bold text-text-primary leading-snug">
                     {item.result}
                   </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
