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
      placeholder: "Photo client / dirigeant ou capture d'écran agent IA"
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
      placeholder: "Photo équipe commerciale ou interface CRM + agent"
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
      placeholder: "Photo atelier / dashboard de production temps réel"
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
          <p className="text-md text-text-secondary leading-relaxed">
             Pas de promesse. Trois cas, trois secteurs, trois résultats.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {cases.map((item, i) => (
            <div key={i} className="flex flex-col h-full bg-bg-secondary rounded-lg overflow-hidden group">
              <div className="aspect-video bg-bg-tertiary flex items-center justify-center text-xs text-text-tertiary">
                Photo client / dirigeant
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="text-xs uppercase tracking-wide text-text-tertiary mb-2">{item.sector}</div>
                <h3 className="text-xl font-bold text-text-title mb-3">{item.title}</h3>
                <p className="text-sm text-text-secondary mb-4 leading-relaxed">
                  {item.desc}
                </p>
                <div className="flex gap-2 mb-4">
                  {item.stats.map((stat, j) => (
                    <span key={j} className="bg-pin-soft text-pin text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                      {stat.label}
                    </span>
                  ))}
                </div>
                <div className="mt-auto">
                  <p className="font-serif italic text-text-secondary text-sm leading-relaxed tracking-wide">
                    {item.quote}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="secondary" href="/blog">
            Voir toutes nos études de cas →
          </Button>
        </div>
      </div>
    </section>
  );
}
