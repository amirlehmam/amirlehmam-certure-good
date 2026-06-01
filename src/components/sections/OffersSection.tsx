import React from "react";
import { Clock, Search, GraduationCap, Users, Code, MapPin, MessageCircleMore, Smartphone, Cpu } from "lucide-react";
import { Button } from "../ui/Button";
import { motion } from "motion/react";

export default function OffersSection() {
  const offers = [
    {
      title: "Outils IA",
      price: "SUR DEVIS",
      desc: "Nous développons la solution adaptée à votre entreprise, à vos données et à vos process, pour faire de l'IA un avantage concurrentiel.",
      details: [
        { text: "Logiciels métier sur mesure", icon: <Code className="w-5 h-5" /> },
        { text: "Applications mobiles et SaaS", icon: <Smartphone className="w-5 h-5" /> },
        { text: "Outils Gen AI", icon: <Cpu className="w-5 h-5" /> }
      ]
    }
  ];

  return (
    <section id="offres" className="py-20 md:py-32 bg-bg-secondary border-b border-border">
      <div className="max-w-[1200px] mx-auto px-4 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-12 md:mb-20">
          <div className="max-w-3xl">
            <h2 className="text-[32px] md:text-[52px] font-bold text-text-primary tracking-tight leading-[1.1] mb-8">
              Les outils IA sont co-construits <br className="hidden md:block" />
              avec des TPE et PME, <span className="editorial-title text-text-secondary">parce que personne ne connaît mieux leur réalité qu'eux.</span>
            </h2>
            <p className="text-[18px] text-text-secondary font-light max-w-2xl leading-relaxed">
              Quelle que soit votre maturité en IA, vos objectifs et vos préoccupations, nos solutions IA sont adaptées à vos besoins.
            </p>
          </div>
        </div>

        <div className="max-w-[1250px] mx-auto mt-12 md:mt-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white shadow-premium border border-border overflow-hidden grid grid-cols-1 lg:grid-cols-12"
          >
            {/* Left Column: Title, pricing & Description */}
            <div className="lg:col-span-7 p-8 md:p-12 lg:p-16 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-border">
              <div>
                <span className="text-[13px] text-blue font-bold uppercase tracking-[0.2em] block mb-4 bg-blue/5 py-1.5 px-3 rounded-full w-max">
                  {offers[0].price}
                </span>
                <h3 className="text-[32px] md:text-[44px] font-bold text-text-primary leading-[1.15] mb-6">
                  {offers[0].title}
                </h3>
                <p className="text-[16px] md:text-[18px] text-text-secondary leading-relaxed font-light">
                  {offers[0].desc}
                </p>
              </div>
              <div className="hidden lg:block pt-8 border-t border-border mt-12">
                <Button 
                  variant="secondary" 
                  className="w-full text-[11px] py-4" 
                  href="https://calendly.com/whondydrouode/30min"
                >
                  CONTACTEZ NOTRE ÉQUIPE
                </Button>
              </div>
            </div>

            {/* Right Column: Key services list with beautiful icons and details */}
            <div className="lg:col-span-5 p-8 md:p-12 lg:p-16 bg-bg-secondary hover:bg-white transition-colors duration-500 flex flex-col justify-between">
              <div>
                <h4 className="text-[11px] uppercase tracking-[0.2em] text-text-secondary font-bold mb-8">
                  Ce que nous concevons :
                </h4>
                <div className="flex flex-col gap-8">
                  {offers[0].details.map((detail, j) => (
                    <div key={j} className="flex items-center gap-5 group">
                      <div className="text-white bg-blue p-3.5 rounded-xl shadow-sm transition-transform group-hover:scale-105 flex-shrink-0">
                        {detail.icon}
                      </div>
                      <div>
                        <span className="text-[16px] md:text-[18px] font-semibold text-text-primary block">
                          {detail.text}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:hidden mt-10">
                <Button 
                  variant="secondary" 
                  className="w-full text-[11px] py-4" 
                  href="https://calendly.com/whondydrouode/30min"
                >
                  CONTACTEZ NOTRE ÉQUIPE
                </Button>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-12 p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8 bg-bg-secondary border border-border shadow-premium w-full">
          <div className="flex-1">
            <div className="section-label mb-2 text-[10px]">Certification Qualiopi</div>
            <p className="text-[18px] text-text-secondary leading-relaxed font-light">
              Vous souhaitez former vos collaborateurs à utiliser des outils IA ? Nos formations sont finançables via votre OPCO ou l’Agefice. Échangez avec nos experts pour vous accompagner dans votre projet.
            </p>
          </div>
          <Button 
            variant="secondary" 
            href="https://calendly.com/whondydrouode/30min"
            className="px-8 text-[11px] whitespace-nowrap"
          >
            Échangez avec un conseiller
          </Button>
        </div>
      </div>
    </section>
  );
}

