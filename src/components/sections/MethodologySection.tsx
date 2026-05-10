import React from "react";
import { Shield, FileText, Users, Award, ArrowRight } from "lucide-react";
import { motion } from "motion/react";

export default function MethodologySection() {
  const pillars = [
    {
      title: "Conformité & Sécurité",
      icon: <Shield className="w-6 h-6 text-pin" />,
      bg: "bg-pin/10",
      description: "RGPD, hébergement France, instances privées, suivi des accès. Vos données restent vos données.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Cartographie avant tout",
      icon: <FileText className="w-6 h-6 text-blue" />,
      bg: "bg-blue/10",
      description: "Avant de déployer, on cartographie. Processus métier, cas d'usage ROI, roadmap 12 mois validée.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Formation intégrée",
      icon: <Users className="w-6 h-6 text-terre" />,
      bg: "bg-terre/10",
      description: "Vos équipes ne subissent pas l'outil. Elles le maîtrisent. Charte d usage, prompts validés.",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <section className="py-20 bg-bg-secondary">
      <div className="max-w-[1200px] mx-auto px-6 md:px-32">
        <div className="text-xs uppercase tracking-wider text-text-tertiary mb-2">
          Notre approche · Structurée & Sécurisée
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
          Une méthodologie qui rassure autant qu'elle transforme.
        </h2>
        <p className="text-text-secondary mb-12 max-w-3xl leading-relaxed">
          L'IA en PME, ce n'est pas un chatbot bricolé. C'est une infrastructure qui respecte vos contraintes réglementaires, sécurise vos données, et s'intégre à votre existant sans casser ce qui fonctionne.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
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
              <h3 className="text-lg font-bold text-navy mb-3">{pillar.title}</h3>
              <p className="text-sm text-text-secondary leading-relaxed mb-4">
                {pillar.description}
              </p>
              {/* Screenshot exemple fictif avec image unplash */}
              <div className="aspect-video bg-bg-tertiary rounded-lg overflow-hidden border border-border-subtle">
                <img 
                  src={pillar.image} 
                  alt={pillar.title}
                  className="w-full h-full object-cover"
                />
              </div>
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
                <a href="#" className="text-pin font-bold hover:underline inline-flex items-center gap-1">
                  Vérifier mon éligibilité <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
