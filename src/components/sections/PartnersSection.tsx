import React from "react";
import { Award, Shield, CheckCircle } from "lucide-react";
import { motion } from "motion/react";

export default function PartnersSection() {
  const partners = [
    {
      name: "Bpifrance",
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Logo_Bpifrance.svg/512px-Logo_Bpifrance.svg.png",
      role: "Partenaire financement"
    },
    {
      name: "CCI Versailles",
      src: "https://upload.wikimedia.org/wikipedia/fr/thumb/5/52/Logo_CCI_Versailles-Yvelines.svg/512px-Logo_CCI_Versailles-Yvelines.svg.png",
      role: "Événements & formation"
    },
    {
      name: "MEDEF 78",
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Logo_MEDEF.svg/512px-Logo_MEDEF.svg.png",
      role: "Réseau dirigeants"
    },
    {
      name: "France Travail",
      src: "https://upload.wikimedia.org/wikipedia/fr/thumb/b/b3/France_Travail_Logo.svg/512px-France_Travail_Logo.svg.png",
      role: "Formation collective (POEI)"
    }
  ];

  return (
    <section className="py-16 bg-white border-y border-border-subtle">
      <div className="max-w-[1200px] mx-auto px-6 md:px-32">
        <div className="text-xs uppercase tracking-wider text-text-tertiary mb-2 text-center">
          Partenaires institutionnels
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-navy mb-12 text-center">
          Nous intervenons avec les acteurs qui structurent l'écosystème PME.
        </h2>
        
        {/* Grid 4 colonnes avec logos GROS + description */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {partners.map((partner, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="h-20 flex items-center justify-center mb-3 grayscale hover:grayscale-0 transition-all">
                <img 
                  src={partner.src} 
                  alt={partner.name} 
                  className="h-12 md:h-16 w-auto object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="text-xs text-text-secondary font-medium">
                {partner.role}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Badges certification en dessous */}
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 pt-8 border-t border-border-subtle">
          <div className="flex items-center gap-2 bg-bg-secondary px-4 py-2 rounded-lg border border-border-default">
            <Award className="w-5 h-5 text-blue" />
            <span className="text-sm font-semibold text-navy">Certifié Qualiopi</span>
          </div>
          <div className="flex items-center gap-2 bg-bg-secondary px-4 py-2 rounded-lg border border-border-default">
            <Shield className="w-5 h-5 text-pin" />
            <span className="text-sm font-semibold text-navy">RGPD · Hébergement France</span>
          </div>
          <div className="flex items-center gap-2 bg-bg-secondary px-4 py-2 rounded-lg border border-border-default">
            <CheckCircle className="w-5 h-5 text-terre" />
            <span className="text-sm font-semibold text-navy">Financements OPCO</span>
          </div>
        </div>
      </div>
    </section>
  );
}
