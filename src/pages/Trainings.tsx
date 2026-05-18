import React, { useEffect } from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { Button } from "../components/ui/Button";
import { motion } from "motion/react";

const trainings = [
  {
    title: "Growth Hacking",
    link: "https://drive.google.com/file/d/1wxErel4AECXLwGC0alQbNGruk2Kzotsm/view?usp=sharing"
  },
  {
    title: "Maîtriser l’IA pour optimiser la gestion d’un camping",
    link: "https://drive.google.com/file/d/1qn7z5FlN5NY4FzpJSf5p--rr2a1An0sS/view?usp=sharing"
  },
  {
    title: "Introduction à l'IA",
    link: "https://drive.google.com/file/d/1ZwV91N-hV_7aA802eA9W__Df70l5b0KU/view?usp=sharing"
  },
  {
    title: "Maîtriser l’IA pour optimiser la gestion d’une agence de voyages",
    link: "https://drive.google.com/file/d/1xHphpPC-VW0SwHGv6XAExsWDlau4v7ac/view?usp=sharing"
  },
  {
    title: "Formation IA & Identification des Cas d’Usage",
    link: "https://drive.google.com/file/d/1f0xq9QVDU0wNQh9gaPwG4sAqzQHht9vp/view?usp=sharing"
  },
  {
    title: "Maîtriser l’IA pour optimiser la prospection immobilière et le suivi des mandats",
    link: "https://drive.google.com/file/d/1VTdwN4atbYQnfrmWMjVQxviyJC9yjTjU/view?usp=sharing"
  }
];

export default function Trainings() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-white selection:bg-blue/10 selection:text-blue overflow-x-hidden">
      <Header />
      
      <main className="flex-grow pt-40 pb-32">
        <div className="max-w-[1200px] mx-auto px-4 md:px-12">
          <div className="mb-20">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="section-label mb-8"
            >
              Nos formations
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.8 }}
              className="text-[42px] md:text-[64px] font-bold text-text-primary leading-[1.1] tracking-tight max-w-3xl"
            >
              Développez vos compétences <span className="source-serif italic text-blue">avec nos 6 formations</span>
            </motion.h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trainings.map((training, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
                className="bg-[#F9FAFB] p-10 border border-border flex flex-col justify-between hover:border-blue transition-all duration-500 group relative"
              >
                <div className="space-y-6">
                  <div className="h-0.5 w-8 bg-blue transition-all duration-500 group-hover:w-16"></div>
                  <h3 className="text-[22px] font-semibold text-text-primary leading-snug group-hover:text-blue transition-colors">
                    {training.title}
                  </h3>
                </div>
                
                <div className="mt-16">
                  <Button 
                    href={training.link} 
                    variant="secondary" 
                    className="w-full text-[11px] font-bold uppercase tracking-widest py-5 group-hover:bg-blue group-hover:text-white group-hover:border-blue transition-all"
                  >
                    Consulter le programme
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
