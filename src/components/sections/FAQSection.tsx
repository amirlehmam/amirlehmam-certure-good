import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  const faqs = [
    { 
      q: "Est-ce que l'IA est vraiment utile pour les TPE et PME ?", 
      a: "Les chiffres parlent seuls. 3,7x de ROI en moyenne selon Microsoft, 30% du temps des dirigeants passé sur des tâches automatisables selon Bpifrance, et jusqu'à 31% de réduction des coûts opérationnels. Dans une TPE ou PME où chaque heure compte, l'IA devient un véritable levier de performance." 
    },
    { 
      q: "Comment se passe le développement d'un outil IA sur-mesure ?", 
      a: "Nous commençons par analyser votre besoin précis et concevoir une maquette. Ensuite, nos ingénieurs développent la solution et l'intègrent directement sur vos outils existants (ERP, CRM, messageries). Enfin, nous formons vos collaborateurs pour garantir une adoption immédiate." 
    },
    { 
      q: "Est-ce que l'IA va remplacer mes collaborateurs ?", 
      a: "Non. L'IA prend en charge les tâches répétitives pour libérer vos équipes sur ce qui a vraiment de la valeur. Les entreprises qui ont déployé nos outils recentrent leurs collaborateurs sur des missions clés et à plus fort impact." 
    },
    { 
      q: "Mes données sont-elles sécurisées lors de l'utilisation de vos outils ?", 
      a: "Absolument. La sécurité des données est non négociable. Nous utilisons des environnements cloisonnés et respectant les meilleures pratiques de sécurité. De plus, vos données de PME restent entièrement privées et ne sont jamais utilisées pour entraîner des modèles IA publics." 
    },
    { 
      q: "Combien de temps faut-il pour déployer un outil IA personnalisé ?", 
      a: "La plupart de nos projets d'intégration et de développement d'outils personnalisés sont déployés et opérationnels en 4 à 8 semaines. Nous livrons des versions incrémentales pour vous permettre de bénéficier de gains de temps dès les premières étapes." 
    },
    { 
      q: "Comment puis-je financer mon projet de développement IA ?", 
      a: "Plusieurs dispositifs d'aide, subventions régionales, ou prises en charge OPCO (pour la partie accompagnement au changement / prise en main) peuvent être mobilisés. Nos experts vous guident dans l'analyse de votre éligibilité pour maximiser votre financement." 
    },
    { 
      q: "Qui s'occupe de la maintenance et du suivi de notre outil ?", 
      a: "Nous prenons en charge l'hébergement, la surveillance en temps réel, l'adaptation aux évolutions des modèles d'IA, et la maintenance corrective de votre logiciel. Votre outil reste ainsi toujours performant au fil des mois." 
    },
    { 
      q: "Est-ce qu'on peut commencer petit sans tout transformer d'un coup ?", 
      a: "C'est même ce que nous conseillons. Nous ciblons un premier projet d'outil simple avec un ROI mesurable en quelques semaines. Une fois que vos équipes l'ont adopté et en apprécient les bénéfices, nous pouvons passer à l'étape suivante." 
    }
  ];

  return (
    <section className="py-20 md:py-24 bg-white border-b border-border">
      <div className="max-w-[1200px] mx-auto px-4 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20">
          <div>
            <div className="section-label mb-6 md:mb-8">FAQ</div>
            <h2 className="text-[32px] md:text-[52px] font-bold text-text-primary tracking-tight leading-[1.1] mb-8">
               Questions <br className="hidden md:block" />
               <span className="editorial-title text-text-secondary">fréquentes.</span>
            </h2>
            
            <div className="relative group">
              <div className="absolute inset-0 bg-blue/5 -translate-x-4 translate-y-4 -z-10 transition-transform group-hover:-translate-x-6 group-hover:translate-y-6"></div>
              <img 
                src="https://i.ibb.co/p6cyDTwg/image.png" 
                alt="Restitution d'audit d'intelligence artificielle en entreprise" 
                className="w-full h-auto object-cover shadow-premium border border-border"
                loading="lazy"
              />
              <p className="mt-8 text-[20px] font-medium text-text-secondary leading-relaxed">
                Livraison d'un outil IA devant les collaborateurs d'une PME industrielle
              </p>
            </div>
          </div>

          <div className="lg:pt-24 pt-8">
            <div className="divide-y divide-border">
              {faqs.map((faq, i) => (
                <div key={i} className="py-2 first:pt-0">
                  <button 
                    onClick={() => setOpen(open === i ? null : i)}
                    className="w-full py-6 md:py-8 flex justify-between items-center text-left group"
                  >
                    <h3 className="text-[17px] md:text-[19px] font-medium text-text-primary pr-8 group-hover:text-blue transition-colors">
                      {faq.q}
                    </h3>
                    <div className={`p-1.5 rounded-full bg-bg-secondary text-text-tertiary transition-transform duration-300 ${open === i ? 'rotate-180 text-blue' : ''}`}>
                      <ChevronDown size={18} />
                    </div>
                  </button>
                  {open === i && (
                    <div className="pb-8 text-[15px] md:text-[16px] text-text-secondary leading-relaxed font-light">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
