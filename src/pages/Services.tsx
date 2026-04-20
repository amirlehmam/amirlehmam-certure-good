import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "motion/react";
import { 
  ArrowUpRight, 
  CheckCircle2, 
  Cpu, 
  Target, 
  TrendingUp, 
  Users, 
  Zap, 
  ShieldCheck,
  Search,
  Settings,
  Headphones,
  GraduationCap,
  Briefcase,
  BarChart3
} from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const ServiceCard = ({ number, title, subtitle, description, points, price, footer, id, slug }: any) => (
  <Link 
    to={`/services/${slug}`}
    id={id} 
    className="group rounded-[2.5rem] p-8 lg:p-12 flex flex-col h-full transition-all duration-500 hover:scale-[1.01] bg-white border border-gray-100 text-gray-900 shadow-sm hover:shadow-2xl hover:shadow-blue-600/5 hover:border-blue-200 scroll-mt-24 cursor-pointer overflow-hidden relative"
  >
    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-blue-600/10 transition-colors"></div>
    
    <div className="flex justify-between items-start mb-12">
      <span className="text-6xl font-black font-jakarta tracking-tighter opacity-10 text-gray-900 group-hover:opacity-20 transition-opacity">{number}</span>
      <div className="px-4 py-1 rounded-full text-badge bg-blue-50 text-blue-600 group-hover:bg-blue-100 transition-colors">
        {subtitle}
      </div>
    </div>
    <h3 className="text-gray-900 mb-6 group-hover:text-blue-600 transition-colors">{title}</h3>
    <p className="text-body text-gray-500 mb-10">{description}</p>
    
    <div className="space-y-4 mb-12 flex-1">
      {points.map((point: string, i: number) => (
        <div key={i} className="flex items-center gap-3">
          <CheckCircle2 className="w-5 h-5 flex-shrink-0 text-blue-600" />
          <span className="text-body-sm">{point}</span>
        </div>
      ))}
    </div>

    <div className="pt-8 border-t border-gray-100 mt-auto">
      <div className="flex items-end justify-between">
        <div>
          <p className="text-badge text-gray-400 mb-2">{footer}</p>
          <p className="text-3xl font-bold font-jakarta tracking-tighter">{price}</p>
        </div>
        <div className="w-12 h-12 rounded-full flex items-center justify-center transition-all bg-gray-900 text-white group-hover:bg-blue-600 group-hover:scale-110">
          <ArrowUpRight className="w-6 h-6" />
        </div>
      </div>
    </div>
  </Link>
);

const Services = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  const offers = [
    {
      number: "01",
      id: "service-1",
      slug: "formation-ia",
      title: "Formation IA",
      subtitle: "Acculturation & Montée en compétences",
      description: "Comprendre et maîtriser l'IA générative pour l'utiliser à son plein potentiel. Nous formons vos collaborateurs avec des cas d'usage tirés de leur quotidien professionnel.",
      points: [
        "Prompt Engineering avancé",
        "Ateliers pratiques par métier",
        "Automatisation & agents IA",
        "Certification Certure"
      ],
      price: "3 500 EUR",
      footer: "Par session / Éligible OPCO 100%",
      dark: false
    },
    {
      number: "02",
      id: "service-2",
      slug: "audit-ia",
      title: "Audit IA",
      subtitle: "Diagnostic & Plan d'actions",
      description: "Nous identifions les cas d'usage IA qui auront un impact réel : temps gagné, coûts réduits, productivité augmentée. Vous repartez avec un plan d'actions clair.",
      points: [
        "Analyse des processus métiers",
        "Identification des cas d'usage prioritaires",
        "Roadmap de transformation IA",
        "Quick wins immédiats"
      ],
      price: "Dès 6 000 EUR",
      footer: "Financement Bpifrance possible (42%)",
      dark: true
    },
    {
      number: "03",
      id: "service-3",
      slug: "prestations-sur-mesure",
      title: "Prestations sur-mesure",
      subtitle: "Développement & Intégration",
      description: "Les solutions du marché ne sont pas adaptées à vos spécificités ? Nous développons des agents IA et des outils sur mesure pour vos cas d'usage métier.",
      points: [
        "Agents IA conversationnels",
        "Automatisation de workflows",
        "Intégration à vos systèmes",
        "Support & maintenance"
      ],
      price: "Sur devis",
      footer: "Adapté à vos besoins et budget",
      dark: false
    },
    {
      number: "04",
      id: "service-4",
      slug: "coaching-dirigeant",
      title: "Coaching Dirigeant",
      subtitle: "Vision Stratégique & Décision",
      description: "Un accompagnement 1-to-1 pour transformer l'IA en levier de croissance. Développez une vision à 360° des impacts de l'IA générative sur votre organisation.",
      points: [
        "Fondamentaux & Vision Stratégique",
        "Mise en pratique Dirigeant",
        "Gouvernance & Sécurité des données",
        "Roadmap stratégique 18 mois"
      ],
      price: "5 000 EUR HT",
      footer: "5 sessions de 1h30 sur 5 mois",
      dark: true
    }
  ];

  return (
    <main className="md:p-6 lg:p-8 z-10 p-4 relative space-y-12">
      <section className="overflow-hidden min-h-[650px] flex flex-col lg:p-12 p-8 shadow-gray-200 text-white bg-[#0f1115] w-full rounded-[2.5rem] relative shadow-2xl justify-between">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
        <Header variant="light" />
        <div className="mt-auto pt-32 pb-12 max-w-4xl relative z-10">
          <h1 className="text-white mb-8">
            Quatre offres pour <br />
            <span className="text-gray-400 italic">transformer votre entreprise.</span>
          </h1>
          <p className="text-body-lg text-gray-400 max-w-2xl">
            De l'audit stratégique à la formation de vos équipes, en passant par le développement sur-mesure : nous rendons l'IA simple, concrète et rentable.
          </p>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2 mt-8 text-[11px] uppercase tracking-[0.2em] text-gray-500 font-medium">
            <span>Formation</span>
            <div className="w-1 h-1 rounded-full bg-blue-500"></div>
            <span>Audit</span>
            <div className="w-1 h-1 rounded-full bg-blue-500"></div>
            <span>Prestations sur-mesure</span>
            <div className="w-1 h-1 rounded-full bg-blue-500"></div>
            <span>Coaching dirigeant</span>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {offers.map((offer, i) => (
          <ServiceCard key={i} {...offer} />
        ))}
      </section>

      <section className="py-24 p-8 lg:p-24">
        <div className="text-center mb-20">
          <div className="inline-flex items-center rounded-full border border-gray-200 bg-white/80 backdrop-blur-sm px-3 py-1 text-badge text-gray-500 mb-6 shadow-sm">Méthodologie</div>
          <h2 className="text-gray-900 mb-6">Notre méthodologie en 5 étapes.</h2>
          <p className="text-subtitle text-gray-500">De l'analyse au résultat, un parcours structuré pour garantir votre ROI.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative">
          <div className="absolute top-1/2 left-0 w-full h-px bg-gray-100 hidden md:block -translate-y-1/2"></div>
          {[
            { step: "01", title: "Audit", desc: "Analyse des processus et gisements.", icon: <Search className="w-5 h-5" /> },
            { step: "02", title: "Stratégie", desc: "Roadmap et cas d'usage prioritaires.", icon: <Target className="w-5 h-5" /> },
            { step: "03", title: "Formation", desc: "Montée en compétences des équipes.", icon: <GraduationCap className="w-5 h-5" /> },
            { step: "04", title: "Déploiement", desc: "Mise en place des solutions.", icon: <Settings className="w-5 h-5" /> },
            { step: "05", title: "Mesure", desc: "Validation des gains et passage à l'échelle.", icon: <BarChart3 className="w-5 h-5" /> }
          ].map((item, i) => (
            <div key={i} className="relative z-10 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-white border border-gray-100 shadow-sm flex items-center justify-center mb-6 text-blue-600">
                {item.icon}
              </div>
              <h4 className="text-gray-900 mb-2">{item.step}. {item.title}</h4>
              <p className="text-caption text-gray-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-blue-600 rounded-[2.5rem] p-8 lg:p-24 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,transparent_70%)]"></div>
        <div className="relative z-10">
          <h2 className="text-white mb-8">Prêt à passer à l'action ?</h2>
          <p className="text-subtitle text-blue-100 mb-12 max-w-2xl mx-auto">
            Formation finançable jusqu'à 100% via OPCO. Audit finançable à 42% par Bpifrance. Notre équipe gère l'intégralité des démarches administratives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://calendly.com/whondydrouode/30min" target="_blank" rel="noopener noreferrer" className="bg-white text-blue-600 px-8 py-4 rounded-full btn-lg hover:bg-blue-50 transition-all">
              Réserver un diagnostic
            </a>
            <Link to="/evenement" className="bg-blue-700 text-white px-8 py-4 rounded-full btn-lg hover:bg-blue-800 transition-all border border-blue-500">
              S'inscrire à l'événement IA
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Services;
