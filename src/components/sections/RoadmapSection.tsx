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
    <section ref={ref} className="py-24 bg-white border-b border-border overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 md:px-12">
        <div className="mb-20">
          <div className="section-label mb-4">Le déroulé</div>
          <h2 className="text-[32px] md:text-[52px] font-bold text-text-primary tracking-tight leading-[1.1] max-w-3xl">
            De l'audit au ROI mesuré, étape par étape.
          </h2>
        </div>

        <div className="relative pt-12">
          {/* Ligne de connexion grise */}
          <div className="absolute top-[60px] left-8 right-8 h-[2px] bg-bg-secondary hidden md:block"></div>
          
          {/* Ligne progressive */}
          <div 
            className="absolute top-[60px] left-8 h-[2px] bg-blue transition-all duration-700 hidden md:block" 
            style={{ width: `calc(${progress}% - 64px)` }}
          ></div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
            {steps.map((step, i) => {
              const stepActive = i <= activeStep || (i === 0 && progress > 5);
              return (
                <div key={i} className={`flex flex-col transition-all duration-700 ${stepActive ? 'opacity-100 translate-y-0' : 'opacity-20 translate-y-4'}`}>
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 mb-8 border-[4px] border-white shadow-apple ${
                    stepActive ? 'bg-blue scale-110' : 'bg-bg-secondary scale-100'
                  }`}>
                    {stepActive && <div className="w-2.5 h-2.5 bg-white rounded-full animate-pulse" />}
                  </div>
                  <div className={`text-[12px] font-bold mb-3 uppercase tracking-widest transition-colors ${stepActive ? 'text-blue' : 'text-text-tertiary'}`}>
                    {step.period}
                  </div>
                  <h3 className={`text-[18px] font-bold leading-tight transition-colors ${stepActive ? 'text-text-primary' : 'text-text-secondary'}`}>
                    {step.title}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
