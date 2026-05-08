import { useState, useEffect, useRef } from "react";

export default function RoadmapSection() {
  const [progress, setProgress] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate progress based on vertical position in viewport
      // Starts when top enters viewport, finishes when top is halfway up
      const start = windowHeight * 0.8;
      const end = windowHeight * 0.2;
      
      const current = rect.top;
      const scrollProgress = Math.min(100, Math.max(0, ((start - current) / (start - end)) * 100));
      
      setProgress(scrollProgress);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const steps = [
    {
      period: "Semaine 1–2",
      title: "Audit & cartographie des processus métier",
    },
    {
      period: "Semaine 3–6",
      title: "Premiers gains visibles — +30 % d'efficacité",
    },
    {
      period: "Mois 3–6",
      title: "Rentabilité atteinte, équipes autonomes",
    },
    {
      period: "Mois 12",
      title: "ROI mesuré · avantage concurrentiel durable",
    }
  ];

  const activeStep = Math.floor((progress / 100) * steps.length);

  return (
    <section ref={ref} className="py-24 border-t border-border-default">
      <div className="max-w-[1120px] mx-auto px-6 md:px-12">
        <div className="mb-20">
          <div className="text-xs font-bold uppercase tracking-widest text-text-tertiary mb-3">
             LE DÉROULÉ
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-text-title tracking-snug mb-6">
            De l'audit au ROI mesuré, étape par étape.
          </h2>
          <p className="text-md text-text-secondary leading-relaxed max-w-[700px]">
            Pas de tunnel de 18 mois. Vos premiers gains visibles dès la 6ᵉ semaine grâce à notre méthodologie structurée.
          </p>
        </div>

        <div className="flex items-start justify-between relative pt-8 pb-12 overflow-x-auto no-scrollbar md:overflow-visible">
          {/* Ligne de connexion grise */}
          <div className="absolute top-12 left-0 right-0 h-0.5 bg-border-default md:block hidden"></div>
          
          {/* Ligne progressive */}
          <div 
            className="absolute top-12 left-0 h-0.5 bg-blue transition-all duration-300 md:block hidden" 
            style={{ width: `${progress}%` }}
          ></div>
          
          {steps.map((step, i) => {
            const stepActive = i <= activeStep || (i === 0 && progress > 0);
            return (
              <div key={i} className={`relative z-10 flex-1 min-w-[200px] text-center transition-all duration-500 ${stepActive ? 'opacity-100' : 'opacity-30'}`}>
                <div className={`w-10 h-10 mx-auto mb-6 rounded-full flex items-center justify-center transition-all duration-500 border-4 border-white shadow-sm ${
                  stepActive ? (i === 3 ? 'bg-pin' : 'bg-blue') : 'bg-border-default'
                } ${stepActive ? 'scale-110' : 'scale-90'}`}>
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                <div className={`text-sm font-bold mb-2 uppercase tracking-wide transition-colors ${stepActive ? 'text-navy' : 'text-text-tertiary'}`}>{step.period}</div>
                <p className={`text-sm font-medium max-w-[160px] mx-auto leading-snug transition-colors ${stepActive ? 'text-text-title' : 'text-text-secondary'}`}>{step.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
