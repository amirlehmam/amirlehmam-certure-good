import React from "react";
import { Play } from "lucide-react";
import { motion } from "motion/react";

export default function VideoTestimonialsSection() {
  const testimonials = [
    {
      role: "Commerce · 35 personnes",
      quote: '"On a récupéré une journée par semaine"',
      desc: "Automatisation des commandes fournisseurs avec agents IA.",
      duration: "1:45",
      image: "https://images.unsplash.com/photo-1556740734-75474a7a2fa9?auto=format&fit=crop&q=80&w=800"
    },
    {
      role: "Services · 18 personnes",
      quote: '"Notre taux de transformation a explosé"',
      desc: "Agent CRM qui produit des propositions personnalisées en 8 min.",
      duration: "2:10",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800"
    },
    {
      role: "Industrie · 52 personnes",
      quote: '"On pilote à la donnée, enfin"',
      desc: "Dashboard IA connecté à l'ERP. Le dirigeant anticipe les ruptures.",
      duration: "1:30",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 md:px-12">
        <div className="section-label mb-4 mx-auto w-fit">Ils témoignent</div>
        <h2 className="text-[32px] md:text-[52px] font-bold text-text-primary mb-12 text-center tracking-tight leading-[1.1]">
          La parole aux dirigeants qui sont passés à l'acte.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-bg-secondary rounded-xl overflow-hidden hover:shadow-lg transition-all group border border-border-subtle"
            >
              <div className="aspect-video bg-navy relative overflow-hidden cursor-pointer">
                <img 
                  src={t.image} 
                  alt={`Témoignage dirigeant : ${t.role}`}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-xl">
                    <Play className="w-8 h-8 text-navy ml-1 fill-navy" />
                  </div>
                </div>
                <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-sm text-white px-3 py-1 rounded text-[10px] font-bold">
                  {t.duration}
                </div>
              </div>
              <div className="p-6">
                <div className="text-[10px] font-bold uppercase tracking-widest text-text-tertiary mb-2">
                  {t.role}
                </div>
                <h3 className="font-bold text-navy mb-2 text-lg leading-tight">
                  {t.quote}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {t.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
