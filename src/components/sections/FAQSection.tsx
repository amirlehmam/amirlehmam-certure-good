import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  const faqs = [
    { 
      q: "Par où commencer si on n'a encore rien mis en place ?", 
      a: "Par un diagnostic Flash de 30 minutes. C'est le point de départ pour identifier les gisements de productivité immédiats sans s'engager dans un projet complexe." 
    },
    { 
      q: "Est-ce que c'est vraiment accessible pour une PME de 20 personnes ?", 
      a: "Absolument. Nos solutions sont dimensionnées pour les PME. L'IA générative permet justement aux 'petits' d'avoir les outils des 'grands' avec des budgets maîtrisés." 
    },
    { 
      q: "Combien de temps avant de voir des résultats concrets ?", 
      a: "En moyenne, les premiers indicateurs de performance s'améliorent dès la 6ème semaine après le début de l'implémentation." 
    },
    { 
      q: "Nos données sont-elles en sécurité ?", 
      a: "C'est notre priorité absolue. Nous mettons en place des instances privées et sécurisées. Vos données ne servent jamais à l'entraînement des modèles publics." 
    },
    { 
      q: "On a déjà essayé des outils IA. Pourquoi serait-ce différent ?", 
      a: "Parce que l'outil ne résout rien seul. Nous structurons vos processus et formons vos équipes. C'est l'encadrement qui crée le ROI, pas le chatbot." 
    },
    { 
      q: "Peut-on commencer par une seule offre et élargir ensuite ?", 
      a: "Oui, c'est même ce que nous recommandons. Commencez par un Audit ou une Formation pour tester l'impact réel avant de déployer à grande échelle." 
    }
  ];

  return (
    <section className="py-24 bg-bg-secondary/20 border-t border-border-default">
      <div className="max-w-[1120px] mx-auto px-6 md:px-12">
        <div className="mb-20">
          <div className="text-xs font-bold uppercase tracking-widest text-text-tertiary mb-3">
             FAQ
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-text-title tracking-snug mb-6">
             Les questions qu'on nous pose souvent.
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-border-default">
              <button 
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full py-6 flex justify-between items-center text-left group"
              >
                <h3 className="text-lg font-semibold text-text-title pr-8 group-hover:text-blue transition-colors">{faq.q}</h3>
                <ChevronDown className={`w-5 h-5 text-text-tertiary transition-transform duration-300 ${open === i ? 'rotate-180' : ''}`} />
              </button>
              {open === i && (
                <div className="pb-6 text-sm text-text-secondary animate-in fade-in slide-in-from-top-2 duration-300">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
