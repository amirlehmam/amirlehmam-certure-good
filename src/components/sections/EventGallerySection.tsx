import React from "react";
import { Users, GraduationCap, Mic, ArrowRight } from "lucide-react";
import { motion } from "motion/react";

export default function EventGallerySection() {
  const events = [
    {
      title: "Co-conception du bootcamp IA à destination des TPE avec la CCI Versailles",
      subtitle: "CCI VERSAILLES",
      stats: "90 minutes · 200 dirigeants",
      icon: <Users className="w-4 h-4" />,
      tag: "Bootcamp IA",
      image: "https://i.ibb.co/B5CCRdPh/1776344589748.jpg"
    },
    {
      title: "Organisation d’un événement IA pour les PME en partenariat avec le MEDEF 78, la CCI et Bpifrance",
      subtitle: "MEDEF 78 & BPIFRANCE",
      stats: "Journée de Masterclass",
      icon: <GraduationCap className="w-4 h-4" />,
      tag: "PME & IA Event",
      image: "https://i.ibb.co/Kz8npB0H/Capture-d-e-cran-2026-05-19-a-11-13-24.png"
    },
    {
      title: "Formation de 21 conseillers Business France accompagnant les TPE et PME dans leur développement à l’international",
      subtitle: "BUSINESS FRANCE",
      stats: "Formation stratégique",
      icon: <Mic className="w-4 h-4" />,
      tag: "International Strategy",
      image: "https://i.ibb.co/6Jwm1Z53/PHOTO-2026-03-20-10-49-41-2.jpg"
    }
  ];

  return (
    <section className="pt-12 pb-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 md:px-12">
        <div className="mb-12">
          <h2 className="text-[32px] md:text-[52px] font-bold text-text-primary tracking-tight leading-[1.1] max-w-4xl mb-6">
            +600 dirigeants de TPE et PME formés et acculturés à l’IA
          </h2>
          <p className="text-[18px] md:text-[24px] text-text-secondary leading-relaxed font-light max-w-3xl italic">
            Nous collaborons avec les acteurs au plus près des enjeux des TPE et PME pour les transformer grâce à l’IA.
          </p>
        </div>

        {/* Grid Photos with captions below */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {events.map((event, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <div className="relative aspect-[4/5] bg-bg-secondary overflow-hidden mb-8 shadow-premium">
                <img 
                  src={event.image} 
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-1000"
                  loading="lazy"
                />
              </div>
              <div className="space-y-4">
                <div className="text-[10px] font-black uppercase tracking-[0.2em] text-blue">
                  {event.subtitle}
                </div>
                <h3 className="text-[18px] font-bold leading-tight text-text-primary group-hover:text-blue transition-colors">
                  {event.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
