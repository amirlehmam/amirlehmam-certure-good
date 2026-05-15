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
    <section className="py-24 bg-white border-t border-border-subtle">
      <div className="max-w-[1120px] mx-auto px-6 md:px-12">
        <div className="mb-12">
          <div className="text-xs font-bold uppercase tracking-widest text-text-tertiary mb-3">
             L'IMPACT CONCRET SUR VOTRE SEMAINE
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* AVANT - avec stroke terracotta */}
          <div className="bg-bg-tertiary border-2 border-terre rounded-xl p-8 md:p-10 relative">
            {/* Badge terracotta en haut */}
            <div className="absolute -top-4 left-8 bg-terre text-white px-4 py-1 rounded-full text-xs font-semibold shadow-sm">
              ⚠️ SANS CADRE
            </div>
            
            <h3 className="text-sm font-bold uppercase tracking-widest text-terre mb-8 flex items-center gap-2">
              <X className="w-4 h-4" />
              Aujourd'hui — Sans cadre IA
            </h3>
            <div className="space-y-8">
              {moments.map(m => (
                <div key={m.time}>
                  <div className="text-[10px] font-mono font-bold text-[#000000]/60 mb-1 uppercase tracking-tight">{m.time}</div>
                  <p className="text-sm text-[#000000] leading-relaxed">{m.avant}</p>
                </div>
              ))}
            </div>
          </div>

          {/* APRÈS - fond vert léger */}
          <div className="bg-pin-soft/30 border-2 border-pin rounded-xl p-8 md:p-10 relative">
            {/* Badge "Avec Certure" */}
            <div className="absolute -top-4 left-8 bg-pin text-white px-4 py-1.5 rounded-full text-[10px] font-heavy tracking-widest uppercase shadow-sm">
              ✓ AVEC CERTURE
            </div>
            
            <h3 className="text-sm font-bold uppercase tracking-widest text-pin mb-8 flex items-center gap-2">
              <Check className="w-4 h-4" />
              IA structurée & ROI mesuré
            </h3>
            <div className="space-y-8">
              {moments.map(m => (
                <div key={m.time}>
                  <div className="text-[10px] font-mono font-bold text-pin/70 mb-1 uppercase tracking-tight">{m.time}</div>
                  <p className="text-md font-bold text-text-title leading-snug">{m.apres}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
