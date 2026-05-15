import React from "react";
import { Award, Clock, Zap } from 'lucide-react';
import { motion } from "motion/react";

export default function StatsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 lg:px-32">
        <div className="text-xs uppercase tracking-wider text-text-tertiary mb-2 text-center">
          Résultats mesurés · Suivi 24 mois
        </div>
        <h2 className="text-3xl font-bold text-navy mb-12 text-center">
          Ce que nos clients obtiennent en moyenne.
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* CARD HERO - X3,7 prend toute la hauteur gauche */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-pin to-pin/80 rounded-3xl p-12 text-white relative overflow-hidden flex flex-col justify-center h-full"
          >
            {/* Pattern décoratif en arrière-plan */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-10 right-10 w-32 h-32 border-2 border-white rounded-full"></div>
              <div className="absolute bottom-10 left-10 w-24 h-24 border-2 border-white rounded-full"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 border border-white/30 rounded-full"></div>
            </div>
            
            <div className="relative z-10">
              {/* Badge label */}
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-8">
                <Award className="w-4 h-4" />
                <span className="text-sm font-semibold">ROI MOYEN À 12 MOIS</span>
              </div>
              
              {/* Chiffre principal */}
              <div className="text-8xl font-heavy mb-6 leading-none">×3,7</div>
              
              {/* Description */}
              <p className="text-lg leading-relaxed mb-6 text-white/90">
                Pour 1 € investi dans un projet IA bien cadré, nos clients génèrent en moyenne 3,70 € de valeur mesurable.
              </p>
              
              {/* Source */}
              <div className="text-sm text-white/70 italic">
                Source : Suivi interne Certure · 50+ entreprises · 24 mois
              </div>
            </div>
          </motion.div>

          {/* STACK DROITE - 2 cards empilées */}
          <div className="flex flex-col gap-8">
            {/* Card 4-6h */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-bg-secondary rounded-2xl p-8 border border-border-default hover:shadow-lg hover:border-blue/30 transition-all group"
            >
              <div className="flex items-center gap-4 mb-4">
                {/* Icône */}
                <div className="w-12 h-12 bg-blue/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-blue/20 transition-colors">
                  <Clock className="w-6 h-6 text-blue" />
                </div>
                {/* Chiffre + label */}
                <div>
                  <div className="text-5xl font-heavy text-navy leading-none mb-1">4–6 h</div>
                  <div className="text-xs font-bold text-blue uppercase tracking-wide">PAR SEMAINE</div>
                </div>
              </div>
              
              {/* Description */}
              <p className="text-sm text-text-secondary leading-relaxed mb-3">
                Temps récupéré par collaborateur sur les tâches à faible valeur ajoutée.
              </p>
              
              {/* Source */}
              <div className="text-xs text-text-tertiary italic">
                Source : Mesures post-déploiement Certure 2024-2025
              </div>
            </motion.div>

            {/* Card 6 mois */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-bg-secondary rounded-2xl p-8 border border-border-default hover:shadow-lg hover:border-[#F59E0B]/30 transition-all group"
            >
              <div className="flex items-center gap-4 mb-4">
                {/* Icône */}
                <div className="w-12 h-12 bg-[#F59E0B]/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#F59E0B]/20 transition-colors">
                  <Zap className="w-6 h-6 text-[#F59E0B]" />
                </div>
                {/* Chiffre + label */}
                <div>
                  <div className="text-5xl font-heavy text-navy leading-none mb-1">6 mois</div>
                  <div className="text-xs font-bold text-[#F59E0B] uppercase tracking-wide">RENTABILITÉ</div>
                </div>
              </div>
              
              {/* Description */}
              <p className="text-sm text-text-secondary leading-relaxed mb-3">
                De l'audit aux premiers gains mesurables. Pas de tunnel de 18 mois.
              </p>
              
              {/* Source */}
              <div className="text-xs text-text-tertiary italic">
                Source : Méthodologie Certure · Suivi clients 2024-2025
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
