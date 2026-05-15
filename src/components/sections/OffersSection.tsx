import React from "react";
import { Clock } from "lucide-react";
import { Button } from "../ui/Button";

export default function OffersSection() {
  const offers = [
    {
      title: "Audit IA",
      price: "à partir de 6 000 €",
      desc: "En 10 jours, vous savez exactement où l'IA crée de la valeur — et par où commencer. Cartographie, cas d'usage ROI, feuille de route 12 mois.",
      details: "10 jours · sur site + distanciel",
      tag: "Point d'entrée recommandé",
      variant: "soft" as const
    },
    {
      title: "Formation équipes",
      price: "3 500 €",
      desc: "Une journée dans vos locaux. Vos collaborateurs repartent avec des agents IA opérationnels, une bibliothèque de prompts métier et une charte d'usage.",
      details: "1 jour · max 15 pers. · sur mesure"
    },
    {
      title: "Coaching dirigeant",
      price: "4 500 €",
      desc: "5 sessions 1-to-1 de 1h30 pour structurer votre stratégie IA, arbitrer vos décisions et ne plus être seul face aux choix technologiques.",
      details: "5 × 1h30 · présentiel ou distanciel"
    },
    {
      title: "Développement IA",
      price: "sur devis",
      desc: "Nous construisons vos agents IA métier sur mesure, connectés à vos outils existants (CRM, ERP, suite bureautique) — prêts à l'emploi.",
      details: "intégration complète · suivi inclus"
    }
  ];

  return (
    <section id="offres" className="py-24 bg-[#212E55]">
      <div className="max-w-[1120px] mx-auto px-6 md:px-12">
        <div className="mb-20">
          <div className="text-xs font-bold uppercase tracking-widest text-white/60 mb-3">
             NOS OFFRES
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-snug mb-6">
             Quatre offres pour transformer votre entreprise.
          </h2>
          <p className="text-md text-white/80 leading-relaxed max-w-[800px]">
             On ne vend pas des outils. On génère du ROI avec l'IA — de l'audit jusqu'au déploiement complet.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {offers.map((offer, i) => (
            <div 
              key={i} 
              className={`relative rounded-2xl p-8 md:p-10 transition-all duration-300 group flex flex-col ${
                offer.title === "Audit IA" 
                ? 'bg-white/5 border-2 border-[#F59E0B] shadow-lg hover:shadow-xl' 
                : 'bg-white border border-border-default hover:border-blue/50'
              }`}
            >
              {offer.title === "Audit IA" && (
                <div className="absolute -top-4 left-8 bg-[#F59E0B] text-white px-4 py-1.5 rounded-full text-[10px] font-heavy tracking-widest uppercase shadow-md">
                  ⭐ POINT D'ENTRÉE RECOMMANDÉ
                </div>
              )}
              
              <div className="flex justify-between items-start mb-8">
                <div>
                  <h3 className={`text-3xl font-heavy mb-1 ${offer.title === "Audit IA" ? 'text-white' : 'text-navy'}`}>
                    {offer.title}
                  </h3>
                  <p className={`text-sm font-medium ${offer.title === "Audit IA" ? 'text-white/70' : 'text-text-tertiary'}`}>
                    {offer.title === "Audit IA" ? "Le diagnostic complet" : (offer.title === "Formation équipes" ? "Acculturation & outils" : (offer.title === "Coaching dirigeant" ? "Accompagnement stratégique" : "Solutions sur mesure"))}
                  </p>
                </div>
                <div className="text-right">
                  {offer.title === "Audit IA" && (
                    <div className="text-[10px] text-white/70 font-bold uppercase tracking-widest mb-1">à partir de</div>
                  )}
                  <div className={`text-3xl font-heavy tabular-nums ${offer.title === "Audit IA" ? 'text-white' : 'text-navy'}`}>
                    {offer.title === "Audit IA" ? "6 000 €" : offer.price}
                  </div>
                </div>
              </div>

              <p className={`text-sm mb-8 leading-relaxed flex-1 ${offer.title === "Audit IA" ? 'text-white/90' : 'text-text-secondary'}`}>
                {offer.desc}
              </p>
              
              <div className={`flex items-center gap-2 text-xs mb-8 font-medium ${offer.title === "Audit IA" ? 'text-white/60' : 'text-text-tertiary'}`}>
                <Clock className="w-4 h-4 opacity-50" />
                <span>{offer.details}</span>
              </div>

              <Button 
                variant={offer.title === "Audit IA" ? "primary" : "secondary"} 
                href="https://calendly.com/whondydrouode/30min"
                className={`w-full text-sm font-bold uppercase tracking-widest py-4 ${
                  offer.title === "Audit IA" ? '!bg-[#F59E0B] !text-white border-none hover:!bg-[#D97706]' : '!bg-[#212E55] !text-white border-none hover:!bg-[#2d3e75]'
                }`}
              >
                {offer.price === "sur devis" ? "Demander un devis" : "En savoir plus"} →
              </Button>
            </div>
          ))}
        </div>

        <div className="bg-bg-tertiary rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8 border border-border-default shadow-sm text-center md:text-left">
          <p className="text-sm md:text-base text-text-secondary leading-relaxed">
             <span className="font-bold text-text-title uppercase tracking-widest text-xs inline-block mb-2 md:mb-0 md:mr-3">Certification Qualiopi</span>
             Vos formations sont finançables via votre OPCO. Réduisez votre investissement dès le premier euro.
          </p>
          <Button 
            variant="secondary" 
            href="https://quel-est-mon-opco.francecompetences.fr/"
            className="whitespace-nowrap bg-white text-xs font-heavy tracking-widest uppercase px-8"
          >
            Vérifier mon éligibilité →
          </Button>
        </div>
      </div>
    </section>
  );
}
