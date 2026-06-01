import React, { useState } from "react";
import { ChevronDown, ChevronUp, Target, Map, BookOpen, Users, Code, Plus } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "../ui/Button";

export default function MethodologySection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const pillars = [
    {
      title: "Cadrage",
      icon: <Target className="w-5 h-5" />,
      description: "Nous démarrons par des échanges avec vous pour comprendre votre maturité IA, vos enjeux, vos freins et les problématiques métiers de votre industrie."
    },
    {
      title: "Proposition",
      icon: <Map className="w-5 h-5" />,
      description: "On imagine ensemble les outils IA qui répondent à vos problématiques, avec le coût et leur gain pour votre activité. On affine jusqu'à trouver l’outil que vous aimerez utiliser au quotidien."
    },
    {
      title: "Développement",
      icon: <Code className="w-5 h-5" />,
      description: "Nous donnons vie à l’outil IA que nous avons imaginé ensemble, adaptée à votre PME, à vos données et à vos process et prêt à être utilisé quotidiennement et à accélérer votre activité."
    },
    {
      title: "Suivi",
      icon: <Users className="w-5 h-5" />,
      description: "Pour que vous gardiez l'esprit tranquille et restiez concentré sur votre métier, on s'occupe de la maintenance, du suivi de votre outil et de l'accompagnement à sa prise en main."
    }
  ];

  return (
    <section className="pt-12 pb-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 md:px-12">
        <div className="mb-12">
          <div className="section-label mb-8">La Méthodologie</div>
          <h2 className="text-[32px] md:text-[52px] font-bold text-text-primary tracking-tight leading-[1.1] max-w-4xl">
            Une méthodologie construite avec des dirigeants de TPE et PME <span className="editorial-title text-text-tertiary">pour des TPE et PME.</span>
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-20 items-start">
          {/* Photo à gauche */}
          <div className="lg:w-5/12 w-full">
            <div className="relative group">
              <div className="absolute inset-0 bg-blue/5 -translate-x-4 translate-y-4 -z-10 transition-transform group-hover:-translate-x-6 group-hover:translate-y-6"></div>
              <img 
                src="https://i.ibb.co/zHrLTQzH/Design-sans-titre-2026-05-17-T231556-666.png" 
                alt="Audit IA Terrain dans une PME française" 
                className="w-full aspect-[4/5] md:h-[600px] object-cover shadow-premium"
                loading="lazy"
              />
            </div>
          </div>

          {/* Accordion à droite */}
          <div className="lg:w-7/12 w-full space-y-px bg-border ring-1 ring-border">
            {pillars.map((pillar, i) => (
              <div key={i} className="bg-white overflow-hidden">
                <button 
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full p-6 md:p-8 flex items-center justify-between text-left hover:bg-bg-secondary transition-colors group"
                >
                  <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-8">
                    <span className="text-[11px] font-black text-blue/30 tracking-widest uppercase">Phase 0{i + 1}</span>
                    <h3 className="text-[20px] font-bold text-text-primary group-hover:text-blue transition-colors">{pillar.title}</h3>
                  </div>
                  <Plus className={`w-5 h-5 transition-transform duration-500 ${openIndex === i ? 'rotate-45 text-blue' : 'text-text-tertiary'}`} />
                </button>
                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                      <div className="px-8 pb-12 pt-0 flex gap-8">
                        <div className="w-[66px] flex-shrink-0 flex justify-center">
                           <div className="w-12 h-12 bg-blue-soft text-blue flex items-center justify-center">
                             {pillar.icon}
                           </div>
                        </div>
                        <p className="body-text text-[16px] leading-[1.8] font-light max-w-xl">
                          {pillar.description}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>

        {/* Mid-CTA section added here */}
        <div className="mt-20 md:mt-32 p-8 md:p-16 bg-bg-secondary border border-border flex flex-col md:flex-row items-center justify-between gap-12 group">
          <div className="max-w-xl">
            <h3 className="text-[28px] md:text-[32px] font-bold text-text-primary leading-tight mb-4 transition-colors group-hover:text-blue">
              Vous ne savez pas par où commencer ?
            </h3>
            <p className="text-[18px] text-text-secondary font-light">
              Nous sommes là pour vous aider à y voir clair et définir comment l'IA peut vous être utile.
            </p>
          </div>
          <div className="flex flex-col gap-4 min-w-[300px]">
             <div className="text-[11px] font-black uppercase tracking-[0.2em] text-text-tertiary mb-2">Échangez rapidement avec nos experts</div>
             <Button variant="primary" className="py-5" href="https://calendly.com/whondydrouode/30min">
               Réserver un créneau
             </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

