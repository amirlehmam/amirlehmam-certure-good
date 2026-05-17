import React from "react";
import { X, Check } from "lucide-react";

export default function TimelineSection() {
  const moments = [
    {
      time: "Lundi · 8h47",
      avant: "Vous compilez à la main les chiffres de la semaine pour la réunion de 9h.",
      apres: "Le dashboard direction est à jour. Vous arrivez préparé en 5 min de lecture."
    },
    {
      time: "Mardi · 14h22",
      avant: "Une commerciale colle des données client dans ChatGPT, sans cadre.",
      apres: "Vos équipes utilisent une charte, des prompts validés, des outils sécurisés."
    },
    {
      time: "Mercredi · 10h08",
      avant: "Un fournisseur a oublié sa relance. Personne ne l'a vu.",
      apres: "L'agent IA détecte le retard et alerte automatiquement."
    },
    {
      time: "Vendredi · 17h00",
      avant: "Bilan de semaine au feeling, KPI flous, décisions remises à lundi.",
      apres: "Indicateurs en temps réel. Bilan factuel. Décisions prises."
    }
  ];

  return (
    <section className="py-24 bg-white border-b border-border">
      <div className="max-w-[1200px] mx-auto px-4 md:px-12">
        <div className="mb-16">
          <div className="section-label mb-4">Impact concret</div>
          <h2 className="text-[32px] md:text-[52px] font-bold text-text-primary tracking-tight leading-[1.1]">
            Hier vs Aujourd'hui.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* AVANT */}
          <div className="apple-card bg-bg-secondary border-none shadow-none p-10">
            <h3 className="section-label mb-10 text-text-tertiary flex items-center gap-2">
              <X size={14} />
              Aujourd'hui — Flux désordonnés
            </h3>
            <div className="space-y-10">
              {moments.map(m => (
                <div key={m.time} className="group">
                  <div className="text-[11px] font-bold text-text-tertiary mb-2 uppercase tracking-widest leading-none">{m.time}</div>
                  <p className="text-[15px] text-text-secondary leading-relaxed font-light">{m.avant}</p>
                </div>
              ))}
            </div>
          </div>

          {/* APRÈS */}
          <div className="apple-card border-blue/20 p-10 ring-1 ring-blue/5">
            <h3 className="section-label mb-10 text-blue flex items-center gap-2 selection:bg-blue/20">
              <Check size={14} />
              Avec notre accompagnement
            </h3>
            <div className="space-y-10">
              {moments.map(m => (
                <div key={m.time}>
                  <div className="text-[11px] font-bold text-blue/40 mb-2 uppercase tracking-widest leading-none">{m.time}</div>
                  <p className="text-[17px] font-bold text-text-primary leading-tight">{m.apres}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
