import React from "react";
import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";

export default function CaseStudiesSection() {
  const cases = [
    {
      sector: "Commerce · 35 personnes",
      title: "Automatisation des commandes fournisseurs",
      desc: "Agent IA qui traite les bons de commande, relance les retards, alerte le dirigeant.",
      stats: [
        { label: "−60 % temps admin", color: "pin" as const },
        { label: "ROI 4 mois", color: "pin" as const }
      ],
      quote: "« On a récupéré une journée complète par semaine. »",
      placeholder: "Photo client / dirigeant ou capture d'écran agent IA",
      image: "https://i.imgur.com/LUrL1zQ.jpeg"
    },
    {
      sector: "Services · 18 personnes",
      title: "Génération de propositions commerciales",
      desc: "Agent connecté au CRM qui produit des propositions personnalisées en 8 min au lieu de 2 h.",
      stats: [
        { label: "+40 % propositions", color: "pin" as const },
        { label: "15 min / propal", color: "pin" as const }
      ],
      quote: "« Notre taux de transformation a explosé. »",
      placeholder: "Photo équipe commerciale ou interface CRM + agent",
      image: "https://i.imgur.com/HQ6EGwA.jpeg"
    },
    {
      sector: "Industrie · 52 personnes",
      title: "Pilotage de la production en temps réel",
      desc: "Dashboard IA connecté à l'ERP. Le dirigeant anticipe les ruptures et décide sur la donnée.",
      stats: [
        { label: "+18 % productivité", color: "pin" as const },
        { label: "−35 % erreurs", color: "pin" as const }
      ],
      quote: "« On pilote à la donnée, plus au feeling. »",
      placeholder: "Photo atelier / dashboard de production temps réel",
      image: "https://i.imgur.com/GDuQDVT.jpeg"
    }
  ];

  return (
    <section id="etudes-de-cas" className="py-24 bg-bg-tertiary/50">
      <div className="max-w-[1120px] mx-auto px-6 md:px-12">
        <div className="mb-20">
          <div className="text-xs font-bold uppercase tracking-widest text-text-tertiary mb-3">
             ÉTUDES DE CAS · RÉSULTATS MESURÉS
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-text-title tracking-snug mb-6">
             Ce que ça donne en vrai, dans des PME comme la vôtre.
          </h2>

        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {cases.map((item, i) => (
            <div key={i} className="flex flex-col h-full bg-white rounded-xl overflow-hidden border border-border-subtle shadow-sm hover:shadow-md transition-all group">
              <div className="aspect-video bg-bg-tertiary flex items-center justify-center overflow-hidden border-b border-border-subtle">
                {item.image ? (
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <div className="text-xs text-text-tertiary px-8 text-center">{item.placeholder}</div>
                )}
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-text-tertiary mb-3 opacity-70">
                  {item.sector}
                </div>
                <h3 className="text-lg font-bold text-navy mb-3 leading-snug group-hover:text-blue transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-text-secondary mb-6 leading-relaxed flex-1 font-light">
                  {item.desc}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {item.stats.map((stat, j) => (
                    <span key={j} className="bg-pin-soft/50 text-pin text-[9px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider border border-pin/10 whitespace-nowrap">
                      {stat.label}
                    </span>
                  ))}
                </div>
                <div className="mt-auto pt-6 border-t border-border-subtle/50">
                  <p className="italic text-text-tertiary text-sm leading-relaxed">
                    {item.quote}
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
