import React from "react";
import { Award, Shield, CheckCircle } from "lucide-react";
import { motion } from "motion/react";

export default function PartnersSection() {
  const partners = [
    {
      name: "Bpifrance",
      src: "https://i.ibb.co/jqxsx3R/Logo-Bpifrance-2.jpg"
    },
    {
      name: "CCI Versailles",
      src: "https://www.entreprises.cci-paris-idf.fr/sites/default/files/inline-images/CCI%20versailles%20yvelines_0.png"
    },
    {
      name: "MEDEF 78",
      src: "https://medefyvelines.com/wp-content/uploads/2024/11/MEDEF_Yvelines_LOGO_RVB-1.png"
    },
    {
      name: "Business France",
      src: "https://i.ibb.co/pr0Fz0Fk/BF-Logo-2lignes-RVB.png"
    }
  ];

  return (
    <section className="py-8 bg-white border-b border-border">
      <div className="max-w-[1200px] mx-auto px-4 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center">
          {partners.map((partner, i) => (
            <div key={i} className="flex items-center justify-center">
              <img 
                src={partner.src} 
                alt={partner.name} 
                className="h-7 md:h-10 w-auto object-contain"
                loading="eager"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
