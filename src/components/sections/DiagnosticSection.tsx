import React from "react";
import { Button } from "../ui/Button";
import { AlertTriangle, ArrowRight, HelpCircle, Shield, Wrench, Zap, TrendingDown } from "lucide-react";

export default function DiagnosticSection() {
  const cases = [
    { 
      id: 1, 
      subtitle: "\"On n'y connaît rien\"", 
      desc: "Vos concurrents automatisent déjà.", 
      tag: "RETARD",
      icon: HelpCircle
    },
    { 
      id: 2, 
      subtitle: "Shadow IA", 
      desc: "ChatGPT en solo, données dangereuses.", 
      tag: "RISQUE",
      icon: Shield
    },
    { 
      id: 3, 
      subtitle: "Mauvais outils", 
      desc: "Isolés et gains anecdotiques.", 
      tag: "GASPILLAGE",
      icon: Wrench
    },
    { 
      id: 4, 
      subtitle: "Bloqués au passage", 
      desc: "Bonnes bases, exécution fragile.", 
      tag: "PERTE",
      icon: Zap
    },
    { 
      id: 5, 
      subtitle: "Usage inefficace", 
      desc: "Outils là, mais ROI invisible.", 
      tag: "STAGNATION",
      icon: TrendingDown
    }
  ];

  return (
    <section id="diagnostic" className="py-24 bg-bg-secondary">
      <div className="max-w-[1120px] mx-auto px-6 md:px-12">
        <div className="bg-bg-dark rounded-[2rem] p-8 md:p-12 mb-24 flex flex-col md:flex-row items-center justify-between gap-8 text-white relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-xl md:text-2xl font-bold mb-2">Vous êtes dans les 89 % qui ne mesurent pas leur ROI ?</h3>
            <p className="text-sm text-white/70">En 30 minutes, on identifie où vous en êtes — et ce que ça vous coûte réellement.</p>
          </div>
          <Button variant="on-dark" className="relative z-10" href="#contact">
            Diagnostic gratuit →
          </Button>
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue/10 rounded-full blur-[60px] -translate-y-1/2 translate-x-1/2"></div>
        </div>

        <div className="mb-16">
          <div className="text-xs font-bold uppercase tracking-widest text-text-tertiary mb-3">
             DIAGNOSTIC · OÙ EN EST VOTRE ENTREPRISE ?
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-text-title tracking-snug mb-6">
            Votre PME est probablement dans l'un de ces 5 cas.
          </h2>
          <p className="text-md text-text-secondary leading-relaxed max-w-[800px]">
             Dans 4 cas sur 5, vous perdez de l'argent sans le savoir. On intervient pour transformer ces risques en actifs.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {cases.map((item) => (
            <div key={item.id} className="group relative bg-gradient-to-br from-white to-bg-secondary border-l-4 border-terre p-5 rounded-r-xl hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <div className="absolute -top-3 -left-3 w-8 h-8 bg-terre text-white rounded-full flex items-center justify-center font-bold text-sm shadow-md">
                {item.id}
              </div>
              
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 bg-terre/10 rounded-lg flex items-center justify-center">
                  <item.icon className="w-4 h-4 text-terre" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wide text-terre">Cas {item.id}</span>
              </div>
              
              <h3 className="text-sm font-bold text-navy mb-2 leading-tight">{item.subtitle}</h3>
              <p className="text-xs text-text-secondary mb-4 leading-normal">{item.desc}</p>
              
              <div className="mt-auto">
                <div className="inline-block bg-terre/10 text-terre text-[10px] font-bold px-2 py-1 rounded-full uppercase">
                  {item.tag}
                </div>
              </div>
              
              <button className="mt-4 w-full bg-terre/10 text-terre px-3 py-2 rounded-lg font-medium text-xs opacity-0 group-hover:opacity-100 transition-all flex items-center justify-center gap-1">
                Diagnostiquer
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
