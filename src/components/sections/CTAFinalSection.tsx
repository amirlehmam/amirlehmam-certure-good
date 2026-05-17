import React from "react";
import { Button } from "../ui/Button";

export default function CTAFinalSection() {
  return (
    <section className="py-24 bg-bg-secondary">
      <div className="max-w-[1200px] mx-auto px-4 md:px-12 text-center">
        <div className="bg-white rounded-[24px] p-8 md:p-24 border border-border shadow-apple relative overflow-hidden">
          <div className="relative z-10 max-w-3xl mx-auto">
            <div className="section-label mb-6">Prêt à commencer ?</div>
            <h2 className="text-[32px] md:text-[52px] font-bold text-text-primary tracking-tight leading-tight mb-8">
               Que vous soyez perdu avec l’IA ou prêt à commencer, nous sommes là pour vous
            </h2>
            <p className="text-[18px] md:text-[20px] text-text-secondary leading-relaxed mb-12 font-light">
               En 30 minutes, nos experts vous accompagnent pour définir un plan de transformation de votre TPE ou PME.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="primary" className="px-10 py-4 text-base" href="https://calendly.com/whondydrouode/30min">
                Réserver mon diagnostic
              </Button>
              <Button variant="secondary" className="px-10 py-4 text-base" href="#offres">
                Voir toutes les offres
              </Button>
            </div>
            
            </div>
          </div>
        </div>
      </section>
  );
}

