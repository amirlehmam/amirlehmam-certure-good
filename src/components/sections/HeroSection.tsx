import React from "react";
import { motion } from "motion/react";
import { Button } from "../ui/Button";

export default function HeroSection() {
  const logos = [
    {
      name: "L'Oréal",
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/L%27Or%C3%A9al_logo.svg/1280px-L%27Or%C3%A9al_logo.svg.png"
    },
    {
      name: "Engie",
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Logo-engie.svg/3840px-Logo-engie.svg.png"
    },
    {
      name: "Carrefour",
      src: "https://upload.wikimedia.org/wikipedia/fr/thumb/3/3b/Logo_Carrefour.svg/3840px-Logo_Carrefour.svg.png"
    },
    {
      name: "Nestlé",
      src: "https://upload.wikimedia.org/wikipedia/fr/thumb/8/8a/Logo_Nestle.svg/3840px-Logo_Nestle.svg.png"
    },
    {
      name: "Fnac Darty",
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Logo_Fnac_Darty.svg/1280px-Logo_Fnac_Darty.svg.png"
    },
    {
      name: "France Travail",
      src: "https://upload.wikimedia.org/wikipedia/fr/thumb/8/8d/France-travail-2023.svg/1280px-France-travail-2023.svg.png"
    }
  ];

  return (
    <section className="relative overflow-hidden pt-40 pb-40 bg-gradient-to-br from-blue/5 via-highlight-accent/10 to-pin/5">
      {/* Pattern grid subtil */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e8e6dd_1px,transparent_1px),linear-gradient(to_bottom,#e8e6dd_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-[0.25]"></div>
      
      {/* Gradient orbs décoratifs */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-highlight-accent/10 rounded-full blur-3xl"></div>
      
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
              className="absolute bottom-2 left-0 h-4 bg-highlight-accent/60 -z-0"
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
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a href="#diagnostic" className="relative bg-blue text-white px-6 py-3 rounded-lg font-semibold text-base hover:bg-navy transition-all shadow-md hover:shadow-lg inline-flex items-center gap-2 group">
            <span className="absolute -top-2 -right-2 bg-highlight-accent text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-md">
              NOUVEAU
            </span>
            Obtenir mon diagnostic gratuit →
          </a>
          <a href="#offres" className="bg-white border-2 border-border-strong text-navy px-6 py-3 rounded-lg font-semibold text-base hover:bg-bg-secondary transition-all shadow-sm">
            Voir nos offres
          </a>
        </motion.div>
      </div>
    </section>
  );
}
