import React from "react";
import { Button } from "../ui/Button";

export default function CTAFinalSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1120px] mx-auto px-6 md:px-12">
        <div className="bg-bg-tertiary rounded-[2rem] p-12 md:p-24 text-center border border-border-default relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-heavy text-text-title tracking-tight leading-tight mb-8">
               Votre PME laisse-t-elle de l'argent sur la table ?
            </h2>
            <p className="text-lg md:text-xl text-text-secondary leading-relaxed max-w-[700px] mx-auto mb-12">
               En 30 minutes, nos experts identifient les 3 leviers IA les plus rentables pour votre activité. Sans engagement. Sans jargon. Juste des résultats concrets.
            </p>
            <div className="flex flex-col items-center gap-8">
              <Button variant="primary" className="text-lg px-8 py-4" href="#contact">
                Prendre rendez-vous gratuitement →
              </Button>
              <div className="text-[11px] uppercase tracking-widest text-text-tertiary font-bold flex flex-wrap justify-center gap-x-8 gap-y-4">
                 <span>Certifié Qualiopi</span>
                 <span>Formations éligibles OPCO</span>
                 <span>50+ PME accompagnées</span>
                 <span>97 % de satisfaction</span>
              </div>
            </div>
          </div>
          
          <div className="absolute top-0 left-0 w-64 h-64 bg-blue/5 rounded-full blur-[80px] -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue/5 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2"></div>
        </div>
      </div>
    </section>
  );
}
