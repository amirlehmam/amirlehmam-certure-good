import React from "react";
import { Users, GraduationCap, Mic, ArrowRight } from "lucide-react";
import { motion } from "motion/react";

export default function EventGallerySection() {
  const events = [
    {
      title: "L'IA au service des PME",
      subtitle: "Masterclass · CCI Versailles",
      stats: "90 minutes · 200 dirigeants",
      icon: <Users className="w-4 h-4" />,
      tag: "📅 18 MAI 2026",
      tagColor: "bg-blue",
      image: "https://i.ibb.co/mCghzGzk/PHOTO-2026-03-20-10-49-41-2.jpg"
    },
    {
      title: "8 sessions collectives",
      subtitle: "Journées de formation · Boost Camp IA",
      stats: "CCI Versailles · En présentiel",
      icon: <GraduationCap className="w-4 h-4" />,
      tag: "✓ AVR–JUIN 2026",
      tagColor: "bg-pin",
      image: "https://i.ibb.co/fV3wHRBF/PHOTO-2026-03-20-10-49-41.jpg"
    },
    {
      title: "Retours d'expérience dirigeants",
      subtitle: "Podcast · IA & PME",
      stats: "15–20 min par épisode",
      icon: <Mic className="w-4 h-4" />,
      tag: "🎙️ MENSUEL",
      tagColor: "bg-terre",
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
          Nous construisons l'écosystème IA des PME, concrètement.
        </h2>
        <p className="text-text-secondary mb-12 max-w-3xl leading-relaxed">
          Nous intervenons en présentiel pour structurer l'écosystème IA des PME françaises. Masterclass, formations collectives, contenus experts — tout ce qui aide les dirigeants à passer à l'acte.
        </p>

        {/* Grid 3 colonnes photos événements */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
                <div className={`absolute top-3 left-3 ${event.tagColor} text-white px-3 py-1 rounded-full text-xs font-semibold`}>
                  {event.tag}
                </div>
              </div>
              <div className="p-5">
                <div className="text-xs uppercase tracking-wide text-text-tertiary mb-2">
                  {event.subtitle}
                </div>
                <h3 className="font-bold text-navy mb-2">{event.title}</h3>
                <div className="flex items-center gap-2 text-xs text-text-secondary">
                  {event.icon}
                  <span>{event.stats}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
