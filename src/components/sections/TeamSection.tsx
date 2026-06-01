import React from "react";

export default function TeamSection() {
  const members = [
    {
      name: "Rudy Thimothée",
      role: "Directeur IA HumanSkills",
      image: "https://i.ibb.co/mCp1t3mg/image.png"
    },
    {
      name: "Amir Lehmann",
      role: "Consultant IA & Industrie",
      image: "https://i.ibb.co/JwS906jt/image.png"
    }
  ];

  return (
    <section id="equipe" className="py-16 md:py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 md:px-12">
        <div className="flex flex-col lg:flex-row gap-12 md:gap-16">
          <div className="lg:w-1/3">
            <div className="section-label mb-6 md:mb-8">L'Expertise</div>
            <h2 className="text-[32px] md:text-[52px] font-bold text-text-primary tracking-tight leading-[1.1] mb-8">
              +20 experts IA qui vont vous accompagner <span className="editorial-title text-text-secondary">de A à Z.</span>
            </h2>
            <p className="text-[18px] text-text-secondary font-light leading-relaxed mb-4">
              Chaque expert est sélectionné selon la typologie et l’industrie des TPE et PME qu’il a accompagné.
            </p>
            <p className="text-[18px] text-text-secondary font-light leading-relaxed">
              Vous aurez un interlocuteur qui parle votre langage et qui vous accompagne durant et apres toute la durée de la mission.
            </p>
          </div>

          <div className="lg:w-2/3">
            <div className="text-[12px] font-bold uppercase tracking-widest text-blue mb-8">+20 experts dont :</div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {members.map((member, i) => (
                <div key={i} className="bg-white p-8 group border border-border shadow-soft transition-all hover:shadow-premium">
                  <div className="mb-8 relative overflow-hidden transition-all duration-1000 max-w-[280px] mx-auto">
                    <img 
                      src={member.image} 
                      alt={`Expert IA : ${member.name}`} 
                      className="w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-[1.05]" 
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-blue-soft/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                  <h3 className="text-[22px] font-bold text-text-primary mb-1">{member.name}</h3>
                  <div className="text-[15px] font-black uppercase tracking-[0.2em] text-blue">
                    {member.role}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
