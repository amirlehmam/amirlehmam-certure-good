import React from "react";
import { motion } from "motion/react";
import { Button } from "../ui/Button";

export default function HeroSection() {
  const logos = [
    {
      name: "L'Oréal",
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/L%27Oreal_logo.svg/512px-L%27Oreal_logo.svg.png"
    },
    {
      name: "Carrefour",
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Carrefour_logo.svg/512px-Carrefour_logo.svg.png"
    },
    {
      name: "Nestlé",
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Nestle_logo_2015.svg/512px-Nestle_logo_2015.svg.png"
    },
    {
      name: "SNCF",
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/SNCF_logo.svg/512px-SNCF_logo.svg.png"
    },
    {
      name: "Fnac Darty",
      src: "https://upload.wikimedia.org/wikipedia/fr/thumb/b/bc/Fnac_Darty_logo_2016.svg/512px-Fnac_Darty_logo_2016.svg.png"
    },
    {
      name: "Engie",
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Engie_logo.svg/512px-Engie_logo.svg.png"
    }
  ];

  return (
    <section className="relative overflow-hidden pt-24 pb-24 bg-gradient-to-br from-blue/5 via-coral-highlight/10 to-pin/5">
      {/* Pattern grid subtil */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e8e6dd_1px,transparent_1px),linear-gradient(to_bottom,#e8e6dd_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-[0.25]"></div>
      
      {/* Gradient orbs décoratifs */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-coral-highlight/10 rounded-full blur-3xl"></div>
      
      {/* Container CENTRÉ */}
      <div className="relative max-w-5xl mx-auto px-8 text-center pt-20 md:pt-24">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl font-heavy tracking-tight leading-[1.3] text-navy mb-8 max-w-4xl mx-auto text-center"
        >
          L'IA <span className="relative inline-block">
            <span className="relative z-10 font-bold italic">est déjà</span>
            <motion.span 
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
              className="absolute bottom-2 left-0 h-4 bg-coral-highlight/60 -z-0"
            ></motion.span>
          </span> dans votre PME.
        </motion.h1>
         
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl text-text-secondary mb-10 max-w-3xl mx-auto leading-relaxed text-center"
        >
          Nous la diagnostiquons, la structurons, la déployons.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-10"
        >
          <a href="#diagnostic" className="relative bg-blue text-white px-6 py-3 rounded-lg font-semibold text-base hover:bg-navy transition-all shadow-md hover:shadow-lg inline-flex items-center gap-2 group">
            <span className="absolute -top-2 -right-2 bg-coral-highlight text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-md">
              NOUVEAU
            </span>
            Obtenir mon diagnostic gratuit →
          </a>
          <a href="#offres" className="bg-white border-2 border-border-strong text-navy px-6 py-3 rounded-lg font-semibold text-base hover:bg-bg-secondary transition-all shadow-sm">
            Voir nos offres
          </a>
        </motion.div>

        {/* MINI-BANDEAU PARTENAIRES INSTITUTIONNELS */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-wrap justify-center items-center gap-6 md:gap-12 mb-16 opacity-60 grayscale hover:grayscale-0 transition-all"
        >
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Logo_Bpifrance.svg/200px-Logo_Bpifrance.svg.png" alt="Bpifrance" className="h-6 object-contain" />
          <img src="https://upload.wikimedia.org/wikipedia/fr/thumb/5/52/Logo_CCI_Versailles-Yvelines.svg/200px-Logo_CCI_Versailles-Yvelines.svg.png" alt="CCI Versailles" className="h-6 object-contain" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Logo_MEDEF.svg/200px-Logo_MEDEF.svg.png" alt="MEDEF" className="h-6 object-contain" />
          <img src="https://upload.wikimedia.org/wikipedia/fr/thumb/b/b3/France_Travail_Logo.svg/200px-France_Travail_Logo.svg.png" alt="France Travail" className="h-6 object-contain" />
        </motion.div>

        {/* LOGOS CLIENTS — INTÉGRÉS DANS LA HERO */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="pt-16 mt-8"
        >
          <div className="text-center text-xs uppercase tracking-wider text-text-tertiary mb-6 font-medium">
            Ils nous font confiance
          </div>
          
          <div className="relative flex overflow-hidden group/logos">
            <div className="flex gap-20 items-center animate-scroll-logos whitespace-nowrap py-4">
              {/* Logos x3 pour scroll infini */}
              {[...logos, ...logos, ...logos].map((logo, i) => (
                <div key={i} className="flex-shrink-0 px-4">
                  <img 
                    src={logo.src} 
                    alt={logo.name}
                    referrerPolicy="no-referrer"
                    className="h-10 md:h-12 w-auto object-contain opacity-50 hover:opacity-100 transition-all filter grayscale hover:grayscale-0 active:scale-95"
                  />
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
