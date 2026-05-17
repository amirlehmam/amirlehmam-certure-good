import React from "react";
import { Compass, Lock, Settings, Zap, TrendingUp, ArrowRight } from "lucide-react";
import { motion } from "motion/react";

export default function DiagnosticSection() {
  const cases = [
    {
      id: 1,
      title: "Rien en place encore",
      status: "DÉMARRAGE",
      desc: "Audit Flash 30 min → 3 quick wins → déploiement 1er cas en 3 semaines.",
      tag: "GAINS RAPIDES",
      color: "border-pin",
      iconBg: "bg-pin/10",
      iconColor: "text-pin",
      badgeColor: "bg-pin",
      icon: <Compass className="w-4 h-4" />
    },
    {
      id: 2,
      title: "Shadow IA à cadrer",
      status: "SÉCURISATION",
      desc: "Cartographie usages existants → sécurisation RGPD → charte d'usage.",
      tag: "CONFORMITÉ",
      color: "border-blue",
      iconBg: "bg-blue/10",
      iconColor: "text-blue",
      badgeColor: "bg-blue",
      icon: <Lock className="w-4 h-4" />
    },
    {
      id: 3,
      title: "Outils isolés",
      status: "OPTIMISATION",
      desc: "Audit stack → consolidation → intégration métier réelle.",
      tag: "EFFICACITÉ",
      color: "border-terre",
      iconBg: "bg-terre/10",
      iconColor: "text-terre",
      badgeColor: "bg-terre",
      icon: <Settings className="w-4 h-4" />
    },
    {
      id: 4,
      title: "Bloqués à l'acte",
      status: "DÉBLOCAGE",
      desc: "POC rapide 2 semaines → validation ROI → déploiement.",
      tag: "VALIDATION",
      color: "border-highlight-accent",
      iconBg: "bg-highlight-accent/10",
      iconColor: "text-highlight-accent",
      badgeColor: "bg-highlight-accent",
      icon: <Zap className="w-4 h-4" />
    },
    {
      id: 5,
      title: "Avancés, ROI faible",
      status: "SCALE-UP",
      desc: "Scaling + mesure impact → industrialisation cas d'usage.",
      tag: "CROISSANCE",
      color: "border-navy",
      iconBg: "bg-navy/10",
      iconColor: "text-navy",
      badgeColor: "bg-navy",
      icon: <TrendingUp className="w-4 h-4" />
    }
  ];

  return (
    <section id="diagnostic" className="py-24 bg-bg-secondary border-b border-border">
      <div className="max-w-[1200px] mx-auto px-4 md:px-12">
        <div className="mb-16">
          <div className="section-label mb-4">Diagnostic gratuit</div>
          <h2 className="text-[32px] md:text-[52px] font-bold text-text-primary tracking-tight leading-[1.1] max-w-3xl">
            Identifiez votre point de départ. <br /> Adaptons la stratégie à votre maturité.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {cases.map((item, i) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="apple-card p-8 flex flex-col items-start shadow-apple h-full hover:bg-white/80 transition-colors"
            >
              <div className="text-[48px] font-bold text-blue opacity-5 mb-4 leading-none">
                0{item.id}
              </div>
              <div className="section-label mb-4 text-[10px] text-blue font-bold">
                {item.status}
              </div>
              <h3 className="text-[19px] font-bold text-text-primary mb-3 leading-snug">
                {item.title}
              </h3>
              <p className="text-[14px] text-text-secondary leading-relaxed font-light mb-6 flex-1">
                {item.desc}
              </p>
              <div className="w-full pt-6 border-t border-border">
                <span className="text-[11px] font-bold uppercase tracking-widest text-text-tertiary">
                  {item.tag}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
