import React from "react";

export default function TeamSection() {
  const members = [
    {
      name: "Amir Lehmann",
      role: "Stratégie IA & Transformation",
      desc: "Accompagne les dirigeants à structurer leur stratégie IA et à aligner leurs équipes sur des objectifs business concrets.",
      image: "https://i.imgur.com/jctvwLR.jpeg"
    },
    {
      name: "Rudy Timothée",
      role: "Développement & Intégration IA",
      desc: "Ingénieur IA spécialisé en automatisation. Conçoit et déploie des agents métier connectés à vos outils — opérationnels en quelques semaines.",
      image: "https://i.imgur.com/HVIPOER.jpeg"
    }
  ];

  return (
    <section id="equipe" className="py-24 bg-white border-t border-border-default">
      <div className="max-w-[1120px] mx-auto px-6 md:px-12">
        <div className="mb-20">
          <div className="text-xs font-bold uppercase tracking-widest text-text-tertiary mb-3">
             L'ÉQUIPE
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-text-title tracking-snug mb-6">
             Des experts à vos côtés. Pas des commerciaux.
          </h2>
          <p className="text-md text-text-secondary leading-relaxed max-w-[800px]">
             Tous nos consultants ont exercé en entreprise. Ils comprennent les contraintes réelles d'une PME — budget serré, équipes peu techniques, urgences opérationnelles.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16">
          {members.map((member, i) => (
            <div key={i} className="flex flex-col md:flex-row gap-8 items-start bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all group">
              <div className="flex-shrink-0 mx-auto md:mx-0">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-32 h-32 md:w-40 md:h-40 rounded-xl object-cover ring-4 ring-blue/5 grayscale group-hover:grayscale-0 transition-all duration-base" 
                  referrerPolicy="no-referrer" 
                />
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold text-navy mb-1">{member.name}</h3>
                <div className="text-sm font-semibold text-blue mb-4 uppercase tracking-widest">
                  {member.role}
                </div>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {member.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
