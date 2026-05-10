import React from "react";
import { Users, Building2, GraduationCap, Calendar, ArrowRight } from "lucide-react";
import { motion } from "motion/react";

export default function EventGallerySection() {
  const events = [
    {
      title: "L'IA au service des PME",
      stats: "~200 dirigeants attendus",
      icon: <Users className="w-4 h-4" />,
      color: "bg-blue",
      image: "https://i.ibb.co/mCghzGzk/PHOTO-2026-03-20-10-49-41-2.jpg"
    },
    {
      title: "Diagnostics Flash collectifs",
      stats: "12 PME · 3h d'atelier",
      icon: <Building2 className="w-4 h-4" />,
      color: "bg-pin",
      image: "https://i.ibb.co/fV3wHRBF/PHOTO-2026-03-20-10-49-41.jpg"
    },
    {
      title: "POEI IA · Versailles",
      stats: "15 collaborateurs formés",
      icon: <GraduationCap className="w-4 h-4" />,
      color: "bg-terre",
      image: "https://i.ibb.co/QvF2TQtd/PHOTO-2026-03-20-10-56-36.jpg"
    }
  ];

  return (
    <section className="py-20 bg-bg-secondary">
      <div className="max-w-[1200px] mx-auto px-6 md:px-32">
        <div className="text-xs uppercase tracking-wider text-text-tertiary mb-2">
          Sur le terrain · Derniers 6 mois
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
          Nous construisons l'écosystème IA des PME. Concrètement.
        </h2>
        <p className="text-text-secondary mb-12 max-w-3xl leading-relaxed">
          Chaque mois, nous organisons ou co-animons des événements avec nos partenaires institutionnels. Pas de webinaire — du présentiel, des ateliers, des diagnostics Flash en direct.
        </p>

        {/* Grid 3 colonnes photos événements */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {events.map((event, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-xl overflow-hidden hover:shadow-lg transition-all group border border-border-subtle"
            >
              <div className="aspect-video bg-bg-tertiary relative overflow-hidden">
                <img 
                  src={event.image} 
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-5">
                <h3 className="font-bold text-navy mb-2">{event.title}</h3>
                <div className="flex items-center gap-2 text-xs text-text-secondary">
                  {event.icon}
                  <span>{event.stats}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Timeline événements à venir */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-xl p-6 border-l-4 border-blue shadow-sm"
        >
          <div className="flex items-center gap-3 mb-6">
            <Calendar className="w-5 h-5 text-blue" />
            <h3 className="font-bold text-navy uppercase tracking-widest text-sm">Prochains événements ouverts</h3>
          </div>
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-border-subtle">
              <div>
                <div className="text-sm font-semibold text-navy">L'IA pour les PME · CCI Versailles</div>
                <div className="text-xs text-text-tertiary">18 mai 2026 · 200 places</div>
              </div>
              <a href="/event" className="text-sm font-bold text-blue hover:underline flex items-center gap-1 group">
                Réserver <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <div className="text-sm font-semibold text-navy">Atelier Diagnostic Flash · MEDEF 78</div>
                <div className="text-xs text-text-tertiary">4 juin 2026 · 30 places</div>
              </div>
              <a href="#" className="text-sm font-bold text-blue hover:underline flex items-center gap-1 group">
                Réserver <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
