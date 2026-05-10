import React from "react";
import { motion } from "motion/react";

export default function StatsSection() {
  const stats = [
    {
      value: "×3,7",
      label: "ROI MOYEN À 12 MOIS",
      desc: "Pour 1 € investi dans un projet IA bien cadré, nos clients génèrent en moyenne 3,70 € de valeur mesurable.",
      source: "Source : Suivi interne Certure · 50+ entreprises · 24 mois",
      color: "text-pin"
    },
    {
      value: "4–6 h",
      label: "PAR SEMAINE",
      desc: "Temps récupéré par collaborateur sur les tâches à faible valeur ajoutée.",
      source: "Source : Mesures post-déploiement Certure 2024-2025",
      color: "text-blue"
    },
    {
      value: "6 mois",
      label: "RENTABILITÉ",
      desc: "De l'audit aux premiers gains mesurables. Pas de tunnel de 18 mois.",
      source: "Source : Méthodologie Certure · Suivi clients 2024-2025",
      color: "text-terre"
    }
  ];

  return (
    <section className="py-24 bg-white border-y border-border-subtle">
      <div className="max-w-[1000px] mx-auto px-6 md:px-12 text-center">
        <div className="text-xs uppercase tracking-wider text-text-tertiary mb-3">
          Résultats mesurés · Suivi 24 mois
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-navy mb-16 tracking-tight">
          Ce que nos clients obtiennent en moyenne.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12 text-center">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center"
            >
              <div className="mb-6">
                <div className="text-6xl md:text-7xl font-heavy text-navy mb-4 tracking-tighter">
                  {stat.value}
                </div>
                <div className={`text-xs font-bold ${stat.color} uppercase tracking-widest`}>
                  {stat.label}
                </div>
              </div>
              <p className="text-sm text-text-secondary leading-relaxed mb-4 max-w-[280px] mx-auto">
                {stat.desc}
              </p>
              <div className="text-[10px] text-text-tertiary italic">
                {stat.source}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
