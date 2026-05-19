import React from "react";
import { motion } from "motion/react";
import { Button } from "../ui/Button";
import { CheckCircle, Shield, Award } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative pt-20 md:pt-32 pb-12 bg-bg-secondary overflow-hidden text-center">
      <div className="relative max-w-[1200px] mx-auto px-4 md:px-12">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="section-label mt-6 md:mt-0 mb-4 md:mb-8 mx-auto"
          >
            Collectif IA pour les TPE et PME
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-[36px] md:text-[64px] font-bold text-text-primary tracking-tight leading-[1.1] mb-6"
          >
            L’IA pensée pour les TPE et PME, <span className="editorial-title text-blue">au service de votre croissance.</span>
          </motion.h1>
           
          <motion.div 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 0.4 }}
             className="flex flex-col items-center gap-6"
          >
            <p className="text-[20px] font-light text-text-secondary leading-[1.6] max-w-2xl">
              Nous aidons les TPE et PME à intégrer les outils d'IA dans leur quotidien professionnel, à travers des formations, audit et construction d’outils sur-mesure.
            </p>
            
            <div className="flex flex-col items-center gap-4">
              <div className="flex flex-col items-center gap-6">
                <Button 
                  variant="primary" 
                  href="https://calendly.com/whondydrouode/30min"
                  className="px-12 py-6 text-[16px]"
                >
                  Diagnostic gratuit
                </Button>
                <div className="flex flex-wrap justify-center gap-x-6 gap-y-1.5 px-4">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle size={12} className="text-blue" />
                    <span className="text-[10px] font-bold uppercase tracking-wider text-text-secondary">Financements OPCO & Agefice</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle size={12} className="text-blue" />
                    <span className="text-[10px] font-bold uppercase tracking-wider text-text-secondary">70+ TPE & PME accompagnées</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle size={12} className="text-blue" />
                    <span className="text-[10px] font-bold uppercase tracking-wider text-text-secondary">Certificat Qualiopi</span>
                  </div>
                </div>
              </div>

              <div className="max-w-[140px] hover:opacity-100 transition-opacity mt-2">
                <a 
                  href="https://drive.google.com/file/d/1AbYNyA39ifObir4XwD66UXTkzK_4SUHZ/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img 
                    src="https://franchise.tempeos.com/wp-content/uploads/sites/3/2023/06/qualiopi-tempeos_logo.png" 
                    alt="Certification Qualiopi" 
                    className="w-full h-auto"
                    referrerPolicy="no-referrer"
                    loading="eager"
                  />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

