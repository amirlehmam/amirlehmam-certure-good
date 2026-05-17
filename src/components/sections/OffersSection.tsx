import React from "react";
import { Clock, Search, GraduationCap, Users, Code, MapPin, MessageCircleMore } from "lucide-react";
import { Button } from "../ui/Button";
import { motion } from "motion/react";

export default function OffersSection() {
  const offers = [
    {
      title: "Audit IA",
      price: "À partir de 6 000€",
      desc: "On audite vos équipes et vos process pour identifier où l'IA crée de la valeur. Vous repartez avec une feuille de route avec des projets à ROI positifs à déployer tout de suite et les chantiers qui transformeront votre entreprise.",
      details: [
        { text: "10 jours", icon: <Clock className="w-4 h-4" /> }
      ]
    },
    {
      title: "Formation sur-mesure",
      price: "3 500 €",
      desc: "Nous formons vos collaborateurs pour qu’ils arrêtent de perdre du temps sur leurs tâches répétitives, utilisent l'IA en toute sécurité et travaillent plus efficacement au quotidien.",
      details: [
        { text: "1 jour", icon: <Clock className="w-4 h-4" /> },
        { text: "Jusqu'à 15 collaborateurs", icon: <Users className="w-4 h-4" /> },
        { text: "Dans vos locaux", icon: <MapPin className="w-4 h-4" /> }
      ]
    },
    {
      title: "Coaching dirigeant",
      price: "4 500 €",
      desc: "Coaching individuel pour maîtriser l’IA et ses outils, identifier les opportunités pour votre TPE/ PME et encadrer les usages pour limiter les risques",
      details: [
        { text: "5 sessions 1 to 1 de 1h30", icon: <Clock className="w-4 h-4" /> },
        { text: "Présentiel ou distanciel", icon: <MapPin className="w-4 h-4" /> },
        { text: "Suivi individuel sur Whatsapp", icon: <MessageCircleMore className="w-4 h-4" /> }
      ]
    },
    {
      title: "Déploiement",
      price: "SUR DEVIS",
      desc: "Nous développons la solution adaptée à votre PME, à vos données et à vos process, pour transformer un projet IA en avantage concurrentiel.",
      details: [],
      icon: <Code className="w-5 h-5" />
    }
  ];

  return (
    <section id="offres" className="py-20 md:py-32 bg-bg-secondary border-b border-border">
      <div className="max-w-[1200px] mx-auto px-4 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-12 md:mb-24">
          <div className="max-w-3xl">
            <div className="section-label mb-6">NOS OFFRES</div>
            <h2 className="text-[32px] md:text-[52px] font-bold text-text-primary tracking-tight leading-[1.1] mb-8">
              Des services co-construits <br className="hidden md:block" />
              avec des TPE et PME, <span className="editorial-title text-text-secondary">parce que personne ne connaît mieux leur réalité qu'eux.</span>
            </h2>
            <p className="text-[18px] text-text-secondary font-light max-w-2xl leading-relaxed">
              Quelle que soit votre maturité en IA, vos objectifs et vos préoccupations, nous proposons des services adaptés à vos besoins.
            </p>
          </div>
          <div className="md:pt-12">
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {offers.map((offer, i) => (
            <motion.div 
              key={i}
              className="bg-white p-8 md:p-12 hover:bg-bg-secondary transition-colors duration-500 flex flex-col group h-full shadow-premium border border-border"
            >
              <div className="mb-6 md:mb-8">
                 <h3 className="text-[28px] md:text-[32px] font-bold text-text-primary leading-tight mb-2">{offer.title}</h3>
                 <div className="text-[16px] md:text-[18px] text-blue font-bold uppercase tracking-[0.2em]">{offer.price}</div>
              </div>

              <p className="body-text text-[15px] md:text-[16px] leading-[1.8] font-light mb-8 md:mb-10 flex-1">
                {offer.desc}
              </p>

              {offer.details && offer.details.length > 0 && (
                <div className="flex flex-col gap-3 text-[12px] text-text-secondary font-semibold uppercase tracking-widest mb-8 md:mb-10 group-hover:text-blue transition-colors">
                  {offer.details.map((detail, j) => (
                    <div key={j} className="flex items-center gap-4">
                      <div className="opacity-50 group-hover:opacity-100 transition-opacity">
                        {typeof detail === 'string' ? offer.icon : detail.icon}
                      </div>
                      <span>{typeof detail === 'string' ? detail : detail.text}</span>
                    </div>
                  ))}
                </div>
              )}

              {offer.title === "Déploiement" && (
                 <div className="flex flex-col gap-3 text-[12px] text-text-secondary font-semibold uppercase tracking-widest mb-10 group-hover:text-blue transition-colors">
                    <div className="flex items-center gap-4">
                       <div className="opacity-50 group-hover:opacity-100 transition-opacity"><Code className="w-4 h-4" /></div>
                       <span>Sur-mesure</span>
                    </div>
                 </div>
              )}

              <div className="pt-8 border-t border-border mt-auto">
                <Button 
                  variant="secondary" 
                  className="w-full text-[11px] py-4" 
                  href="https://calendly.com/whondydrouode/30min"
                >
                  EN SAVOIR PLUS
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8 bg-bg-secondary border border-border shadow-premium">
          <div className="flex-1">
            <div className="section-label mb-2 text-[10px]">Certification Qualiopi</div>
            <p className="text-[18px] text-text-secondary leading-relaxed font-light">
              Vos formations et coaching sont finançables via votre OPCO ou l’Agefice. Échangez avec nos experts pour vous accompagner dans votre projet de formation.
            </p>
          </div>
          <Button 
            variant="secondary" 
            href="https://calendly.com/whondydrouode/30min"
            className="px-8 text-[11px]"
          >
            Échangez avec un conseiller
          </Button>
        </div>
      </div>
    </section>
  );
}

