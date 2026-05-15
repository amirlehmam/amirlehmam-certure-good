import React from "react";
import { Shield, Map, Users, Award, GraduationCap } from "lucide-react";
import { motion } from "motion/react";

export default function MethodologySection() {
  const pillars = [
    {
      title: "Co-conception et déploiement avec la PME",
      icon: <Users className="w-6 h-6 text-blue" />,
      bg: "bg-blue/10",
      description: "Ateliers terrain, itération, adoption progressive. Nous déployons avec vous, pas à votre place."
    },
    {
      title: "Cartographie",
      icon: <Map className="w-6 h-6 text-terre" />,
      bg: "bg-terre/10",
      description: "Processus métier, flux de données, cas d'usage à ROI mesurable. Une roadmap 12 mois validée avec vous avant le premier euro dépensé."
    },
    {
      title: "On forme vos équipes",
      icon: <GraduationCap className="w-6 h-6 text-[#F59E0B]" />,
      bg: "bg-[#F59E0B]/10",
      description: "Charte d'usage, bibliothèque de prompts, sessions pratiques. Vos collaborateurs maîtrisent l'outil dès la 3ᵉ semaine. Pas de dépendance au prestataire."
    },
    {
      title: "On déploie en conformité et sécurité",
      icon: <Shield className="w-6 h-6 text-pin" />,
      bg: "bg-pin/10",
      description: "RGPD by design, logs d'accès.... Audit de conformité inclus. Vos données restent vos données."
    }
  ];

  return (
    <section className="py-20 bg-bg-secondary">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <div className="text-xs uppercase tracking-wider text-text-tertiary mb-2">
          Notre approche · Structurée & Sécurisée
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
          Une méthodologie structurée. De l'audit au déploiement.
        </h2>
        <p className="text-text-secondary mb-12 max-w-3xl leading-relaxed">
          Nous n'imposons pas d'outil. Nous cartographions vos processus, identifions les cas d'usage à ROI rapide, formons vos équipes et déployons en conformité totale. Chaque étape est documentée, mesurable, sécurisée.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {pillars.map((pillar, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-sm border border-border-subtle"
            >
              <div className={`w-12 h-12 ${pillar.bg} rounded-lg flex items-center justify-center mb-4`}>
                {pillar.icon}
              </div>
              <h3 className="text-lg font-bold text-navy mb-3 leading-snug">{pillar.title}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Certification banner */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-pin-soft/30 border-l-4 border-pin rounded-r-lg p-6"
        >
          <div className="flex items-start gap-4">
            <Award className="w-6 h-6 text-pin flex-shrink-0 mt-0.5" />
            <div>
              <div className="font-bold text-navy mb-1 tracking-tight">Certification Qualiopi · Financement OPCO</div>
              <div className="text-sm text-text-secondary leading-relaxed">
                Nos formations sont finançables à 100%. Vous réduisez votre investissement dès le premier euro.{" "}
                <a 
                  href="https://quel-est-mon-opco.francecompetences.fr/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-pin font-bold hover:underline inline-flex items-center gap-1"
                >
                  Vérifier mon éligibilité →
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
