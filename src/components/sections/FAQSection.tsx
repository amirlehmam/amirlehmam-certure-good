import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  const faqs = [
    { 
      q: "Est-ce que l'IA est vraiment utile pour les TPE et PME ?", 
      a: "Les chiffres parlent seuls. 3,7x de ROI en moyenne selon Microsoft, 30% du temps des dirigeants passé sur des tâches automatisables selon Bpifrance, et jusqu'à 31% de réduction des coûts opérationnels. Dans une TPE ou PME où chaque heure compte, l'IA devient un véritable levier de performance." 
    },
    { 
      q: "Puis-je échanger avec vos équipes si je ne sais pas par où commencer ?", 
      a: "Oui, et c'est même recommandé. La plupart des dirigeants qu'on accompagne ne savent pas par où commencer au départ. Nous avons sensibilisé plus de 600 personnes dans des TPE et PME. Prenez rendez-vous, on repart de zéro avec vous." 
    },
    { 
      q: "Est-ce que l'IA va remplacer mes collaborateurs ?", 
      a: "Non. L'IA prend en charge les tâches répétitives pour libérer vos équipes sur ce qui a vraiment de la valeur. Les entreprises qui l'ont déployé n'ont pas réduit leurs effectifs, elles ont recentré leurs collaborateurs sur des missions à plus fort impact." 
    },
    { 
      q: "Mes données sont-elles en sécurité ?", 
      a: "C'est la question que nous posent presque tous nos clients, en particulier ceux issus de la défense et des secteurs sensibles avec qui nous avons travaillé. La sécurité des données est non négociable. Nous avons un consultant dédié à la conformité réglementaire qui cadre chaque mission dès le départ." 
    },
    { 
      q: "L'IA est-elle réservée aux entreprises technologiques ?", 
      a: "Pas du tout. Nos clients viennent de l'industrie, de l'agroalimentaire, de la défense, des cabinets juridiques… L'IA est un outil et doit s'adapter à votre secteur, pas l'inverse." 
    },
    { 
      q: "Comment puis-je financer mon projet IA ?", 
      a: "Plusieurs dispositifs existent. Les formations et coachings sont finançables via votre OPCO ou l'AGEFICE. Des subventions et aides complémentaires peuvent s'appliquer selon votre situation. Contactez nos experts pour être accompagné dans vos projets de formation." 
    },
    { 
      q: "On n'a pas les compétences en interne pour gérer ça.", 
      a: "C'est exactement pour ça que vous faites appel à nous. Notre rôle c'est de tout cadrer, déployer et former vos équipes pour que ça tourne sans dépendre d'un profil technique en interne." 
    },
    { 
      q: "Est-ce qu'on peut commencer petit sans tout transformer d'un coup ?", 
      a: "C'est même comme ça qu'on recommande de démarrer. On identifie les actions à fort impact et faible complexité, et on commence par là. D'expérience, les PME qui voient un ROI positif sur leur premier déploiement décident rapidement d'aller plus loin." 
    }
  ];

  return (
    <section className="py-20 md:py-24 bg-white border-b border-border">
      <div className="max-w-[1200px] mx-auto px-4 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20">
          <div>
            <div className="section-label mb-6 md:mb-8">FAQ</div>
            <h2 className="text-[32px] md:text-[52px] font-bold text-text-primary tracking-tight leading-[1.1] mb-8">
               Questions <br className="hidden md:block" />
               <span className="editorial-title text-text-secondary">fréquentes.</span>
            </h2>
            
            <div className="relative group">
              <div className="absolute inset-0 bg-blue/5 -translate-x-4 translate-y-4 -z-10 transition-transform group-hover:-translate-x-6 group-hover:translate-y-6"></div>
              <img 
                src="https://i.ibb.co/p6cyDTwg/image.png" 
                alt="Restitution d'audit d'intelligence artificielle en entreprise" 
                className="w-full h-auto object-cover shadow-premium border border-border"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <p className="mt-8 text-[20px] font-medium text-text-secondary leading-relaxed">
                Restitution d'un Audit IA devant les collaborateurs d'une PME industrielle
              </p>
            </div>
          </div>

          <div className="lg:pt-24 pt-8">
            <div className="divide-y divide-border">
              {faqs.map((faq, i) => (
                <div key={i} className="py-2 first:pt-0">
                  <button 
                    onClick={() => setOpen(open === i ? null : i)}
                    className="w-full py-6 md:py-8 flex justify-between items-center text-left group"
                  >
                    <h3 className="text-[17px] md:text-[19px] font-medium text-text-primary pr-8 group-hover:text-blue transition-colors">
                      {faq.q}
                    </h3>
                    <div className={`p-1.5 rounded-full bg-bg-secondary text-text-tertiary transition-transform duration-300 ${open === i ? 'rotate-180 text-blue' : ''}`}>
                      <ChevronDown size={18} />
                    </div>
                  </button>
                  {open === i && (
                    <div className="pb-8 text-[15px] md:text-[16px] text-text-secondary leading-relaxed font-light">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
