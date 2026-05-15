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
      name: "Rudy Thimothée",
      role: "Directeur IA HumanSkills",
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
             Des experts à vos côtés.
          </h2>
          <p className="text-md text-text-secondary leading-relaxed max-w-[800px]">
             Tous nos consultants ont exercé en entreprise. Ils comprennent les contraintes réelles d'une PME — budget serré, équipes peu techniques, urgences opérationnelles.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {members.map((member, i) => (
            <div key={i} className="flex flex-col md:flex-row gap-6 items-center md:items-start bg-[#212E55] rounded-2xl p-6 shadow-sm hover:shadow-md transition-all group">
              <div className="flex-shrink-0">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-24 h-24 md:w-32 md:h-32 rounded-xl object-cover ring-4 ring-white/10 transition-all duration-500" 
                  referrerPolicy="no-referrer" 
                />
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-lg font-bold text-white mb-0.5">{member.name}</h3>
                <div className="text-[11px] font-semibold text-[#F59E0B] mb-3 uppercase tracking-[0.15em]">
                  {member.role}
                </div>
                <p className="text-xs text-white/80 leading-relaxed font-light">
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
