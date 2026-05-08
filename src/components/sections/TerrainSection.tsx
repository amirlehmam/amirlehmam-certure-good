import React from "react";

export default function TerrainSection() {
  const events = [
    { title: "Conférence CCI Versailles", detail: "(prise de parole)" },
    { title: "Événement Bpifrance", detail: "(salle pleine)" },
    { title: "POEI France Travail", detail: "(animation atelier)" },
    { title: "Boost Camp IA", detail: "(formation collective)" }
  ];

  const partners = [
    { name: "Bpifrance", label: "Le Lab", logo: "https://i.ibb.co/69zLcNH/Capture-d-e-cran-2026-05-04-a-17-50-58.png" },
    { name: "CCI Versailles", label: "Partenaire", logo: "https://i.imgur.com/SFJ8DSP.png" },
    { name: "MEDEF 78", label: "Intervenant", logo: "https://i.ibb.co/KjVHCQbs/MEDEF-Yvelines-LOGO-RVB-1.png" },
    { name: "France Travail", label: "POEI IA", logo: "https://i.imgur.com/omWFpUf.png" } // France Travail logo placeholder
  ];

  return (
    <section className="py-24 bg-white border-t border-border-default">
      <div className="max-w-[1120px] mx-auto px-6 md:px-12">
        <div className="mb-20">
          <div className="text-xs font-bold uppercase tracking-widest text-text-tertiary mb-3">
             SUR LE TERRAIN · INSTITUTIONS ET ÉVÉNEMENTS
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-text-title tracking-snug mb-6">
             Là où on intervient. Avec qui on travaille.
          </h2>
          <p className="text-md text-text-secondary leading-relaxed max-w-[800px]">
             Bpifrance, CCI Versailles, MEDEF 78, France Travail. Pas un cabinet de conseil parmi d'autres — un partenaire des institutions qui font bouger l'écosystème PME.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {events.map((event, i) => (
            <div key={i} className="aspect-[4/3] bg-bg-tertiary rounded-lg p-8 flex flex-col justify-end border border-border-default hover:border-blue transition-colors">
              <h4 className="text-sm font-bold text-text-title leading-tight">{event.title}</h4>
              <p className="text-xs text-text-tertiary mt-1">{event.detail}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 items-center opacity-70">
          {partners.map((partner, i) => (
            <div key={i} className="text-center space-y-4">
              <img 
                src={partner.logo} 
                alt={partner.name} 
                className="h-10 md:h-12 w-auto object-contain mx-auto brightness-0" 
                referrerPolicy="no-referrer" 
              />
              <div className="text-[10px] uppercase tracking-widest text-text-tertiary font-bold">{partner.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
