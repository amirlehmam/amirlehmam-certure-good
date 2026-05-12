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
    <section id="diagnostic" className="py-20 bg-bg-secondary">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <div className="text-xs uppercase tracking-wider text-text-tertiary mb-2">
          Points d'entrée · Selon votre maturité
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
          Identifiez votre point de départ.
        </h2>
        <p className="text-text-secondary mb-12 max-w-3xl leading-relaxed">
          Selon votre niveau de maturité IA, le levier le plus rentable n'est pas le même. Voici comment nous adaptons notre approche à votre réalité terrain.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {cases.map((item, i) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`group relative bg-white border-l-4 ${item.color} p-6 rounded-r-xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300`}
            >
              <div className={`absolute -top-3 -left-3 w-8 h-8 ${item.badgeColor} text-white rounded-full flex items-center justify-center font-bold text-sm shadow-md z-10`}>
                {item.id}
              </div>
              
              <div className="flex items-center gap-2 mb-4">
                <div className={`w-8 h-8 ${item.iconBg} rounded-lg flex items-center justify-center`}>
                  <div className={item.iconColor}>{item.icon}</div>
                </div>
                <span className={`text-[10px] font-bold uppercase tracking-widest ${item.iconColor}`}>{item.status}</span>
              </div>
              
              <h3 className="text-base font-bold text-navy mb-3 leading-tight">{item.title}</h3>
              <p className="text-xs text-text-secondary mb-4 leading-relaxed">
                {item.desc}
              </p>
              
              <div className={`inline-block ${item.iconBg} ${item.iconColor} text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-tight`}>
                {item.tag}
              </div>
              
              <button className={`mt-4 w-full ${item.iconBg} ${item.iconColor} px-3 py-2.5 rounded-lg font-bold text-[10px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all flex items-center justify-center gap-2`}>
                Voir le parcours
                <ArrowRight className="w-3 h-3" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
