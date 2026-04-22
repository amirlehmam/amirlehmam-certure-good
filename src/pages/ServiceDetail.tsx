import React, { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { 
  ArrowLeft, 
  CheckCircle2, 
  ArrowRight, 
  Target, 
  TrendingUp, 
  Users, 
  Zap,
  ShieldCheck,
  Search,
  Settings,
  GraduationCap,
  BarChart3,
  Calendar
} from "lucide-react";
import { motion } from "motion/react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const serviceData: any = {
  "formation-ia": {
    number: "01",
    title: "Formation IA",
    subtitle: "Acculturation & Montée en compétences",
    description: "Comprendre et maîtriser l'IA générative pour l'utiliser à son plein potentiel. Nous formons vos collaborateurs avec des cas d'usage tirés de leur quotidien professionnel.",
    fullContent: "Notre programme de formation est conçu pour lever les barrières techniques et transformer l'IA en un allié quotidien. Plus qu'une simple démonstration d'outils, nous enseignons une méthodologie de réflexion : comment décomposer un problème pour le soumettre efficacement à une IA.",
    points: [
      "Prompt Engineering avancé : maîtriser l'art de l'instruction pour des résultats précis.",
      "Ateliers pratiques par métier : marketing, RH, finance, vente, tech.",
      "Automatisation & agents IA : créer ses propres workflows intelligents sans code.",
      "Certification Certure : valider les acquis et rassurer sur la maîtrise des outils."
    ],
    price: "3 500 EUR",
    pricingLabel: "Par session / Éligible OPCO 100%",
    benefits: [
      { title: "Gain de temps", desc: "Économisez jusqu'à 8h par semaine sur les tâches répétitives.", icon: <Zap /> },
      { title: "Qualité", desc: "Améliorez la production de contenus et l'analyse de données.", icon: <Target /> },
      { title: "Évolution", desc: "Préparez vos équipes aux métiers de demain dès aujourd'hui.", icon: <TrendingUp /> }
    ],
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop"
  },
  "audit-ia": {
    number: "02",
    title: "Audit IA",
    subtitle: "Diagnostic & Plan d'actions",
    description: "Nous identifions les cas d'usage IA qui auront un impact réel : temps gagné, coûts réduits, productivité augmentée. Vous repartez avec un plan d'actions clair.",
    fullContent: "L'erreur la plus commune est de vouloir 'faire de l'IA' sans objectif précis. Notre audit permet de filtrer le gadget pour ne garder que la valeur. Nous analysons vos flux de travail, vos outils et vos données pour cartographier les gains de ROI les plus rapides.",
    points: [
      "Analyse des processus métiers : immersion dans vos départements clés.",
      "Identification des cas d'usage prioritaires : scoring par impact et faisabilité.",
      "Roadmap de transformation IA : planification sur 6 à 18 mois.",
      "Quick wins immédiats : des solutions activables en moins de 15 jours."
    ],
    price: "Dès 6 000 EUR",
    pricingLabel: "Financement Bpifrance possible (42%)",
    benefits: [
      { title: "Stratégie", desc: "Évitez les investissements inutiles et focalisez vos ressources.", icon: <Target /> },
      { title: "Visibilité", desc: "Comprenez enfin ce que l'IA peut réellement faire pour VOUS.", icon: <Search /> },
      { title: "Performance", desc: "Priorisez les projets qui génèrent le plus de rentabilité.", icon: <BarChart3 /> }
    ],
    image: "https://images.unsplash.com/photo-1551288049-bbdac8a28a1e?q=80&w=2070&auto=format&fit=crop"
  },
  "prestations-sur-mesure": {
    number: "03",
    title: "Prestations sur-mesure",
    subtitle: "Développement & Intégration",
    description: "Les solutions du marché ne sont pas adaptées à vos spécificités ? Nous développons des agents IA et des outils sur mesure pour vos cas d'usage métier.",
    fullContent: "Parfois, ChatGPT ne suffit pas. Pour des besoins de sécurité, de confidentialité ou de complexité métier, nous construisons des solutions propriétaires. Nous intégrons l'intelligence artificielle directement dans vos logiciels existants pour un flux de travail transparent.",
    points: [
      "Agents IA conversationnels : experts de votre documentation interne.",
      "Automatisation de workflows : faire communiquer vos outils via l'IA.",
      "Intégration à vos systèmes : APIs, CRM, ERP, outils de production.",
      "Support & maintenance : évolution constante de vos solutions IA."
    ],
    price: "Sur devis",
    pricingLabel: "Adapté à vos besoins et budget",
    benefits: [
      { title: "Sur-mesure", desc: "Une solution qui colle à 100% à vos processus internes.", icon: <Settings /> },
      { title: "Sécurité", desc: "Protection de vos données sensibles et hébergement dédié.", icon: <ShieldCheck /> },
      { title: "Innovation", desc: "Prenez une longueur d'avance technologique sur vos concurrents.", icon: <Zap /> }
    ],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop"
  },
  "coaching-dirigeant": {
    number: "04",
    title: "Coaching Dirigeant",
    subtitle: "Vision Stratégique & Décision",
    description: "Un accompagnement 1-to-1 pour transformer l'IA en levier de croissance. Développez une vision à 360° des impacts de l'IA générative sur votre organisation.",
    fullContent: "En tant que dirigeant, vous devez comprendre l'IA pour décider, pas pour coder. Ce coaching est confidentiel et personnalisé. Nous abordons la stratégie, la gestion du changement, l'éthique et le recrutement à l'ère de l'IA.",
    points: [
      "Fondamentaux & Vision Stratégique : comprendre les enjeux court et long terme.",
      "Mise en pratique Dirigeant : vos propres outils d'aide à la décision.",
      "Gouvernance & Sécurité : protéger l'entreprise et ses actifs immatériels.",
      "Roadmap stratégique : piloter la transformation de vos départements."
    ],
    price: "5 000 EUR HT",
    pricingLabel: "5 sessions de 1h30 sur 5 mois",
    benefits: [
      { title: "Gouvernance", desc: "Prenez des décisions éclairées sur vos futurs recrutements.", icon: <Users /> },
      { title: "Leadership", desc: "Incarnez la transformation technologique auprès de vos équipes.", icon: <TrendingUp /> },
      { title: "Vision", desc: "Anticipez les futurs bouleversements de votre marché.", icon: <Target /> }
    ],
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
  }
};

const ServiceDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const service = slug ? serviceData[slug] : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!service) {
    return (
      <div className="min-h-screen bg-[#0a0a0b] text-white flex flex-col items-center justify-center p-6">
        <h1 className="text-4xl font-black mb-8">Service non trouvé</h1>
        <Link to="/services" className="text-blue-500 flex items-center gap-2 hover:gap-4 transition-all">
          <ArrowLeft className="w-5 h-5" /> Retour aux services
        </Link>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex flex-col pt-8 md:pt-12 px-4 md:px-8 bg-[#0a0a0b] text-white overflow-hidden rounded-b-[3rem] md:rounded-b-[5rem]">
        <div className="absolute inset-0 z-0">
          <img 
            src={service.image} 
            alt={service.title} 
            className="w-full h-full object-cover opacity-30 mix-blend-overlay"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/40 via-transparent to-[#0a0a0b]"></div>
        </div>
        
        <Header variant="light" />

        <div className="max-w-6xl mx-auto w-full relative z-10 mt-auto pb-16 md:pb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <Link to="/services" className="inline-flex items-center gap-2 text-blue-500 font-bold hover:text-blue-400 transition-colors mb-4 group">
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Retour aux services
            </Link>
            <div className="flex items-center gap-4">
              <span className="text-5xl md:text-8xl font-black opacity-20 font-jakarta tracking-tighter">{service.number}</span>
              <div className="px-4 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-500 text-xs font-black uppercase tracking-widest">
                {service.subtitle}
              </div>
            </div>
            <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.9] text-white max-w-4xl">
              {service.title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 max-w-2xl font-medium leading-relaxed italic">
              "{service.description}"
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-32">
            {/* Left: Philosophy & Details */}
            <div className="space-y-12">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tighter">Notre approche.</h2>
                <p className="text-xl text-gray-600 leading-relaxed font-medium">
                  {service.fullContent}
                </p>
              </div>

              <div className="space-y-6">
                <h3 className="text-xl font-black text-blue-600 uppercase tracking-widest italic">Ce que vous obtenez :</h3>
                <div className="space-y-6">
                  {service.points.map((point: string, i: number) => {
                    const [bold, rest] = point.split(':');
                    return (
                      <div key={i} className="flex items-start gap-4 p-4 rounded-2xl bg-gray-50 border border-gray-100">
                        <CheckCircle2 className="w-6 h-6 text-blue-600 shrink-0 mt-0.5" />
                        <p className="text-gray-900 leading-relaxed">
                          <span className="font-black">{bold}:</span> {rest}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right: Benefits & Pricing */}
            <div className="space-y-12">
              <div className="bg-gray-900 rounded-[3rem] p-8 md:p-12 text-white shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full blur-[80px] -mr-32 -mt-32"></div>
                
                <h3 className="text-2xl font-black mb-10 relative z-10 tracking-tight">Pourquoi nous choisir ?</h3>
                <div className="space-y-8 relative z-10">
                  {service.benefits.map((benefit: any, i: number) => (
                    <div key={i} className="flex items-start gap-5 group">
                      <div className="w-12 h-12 rounded-2xl bg-blue-600 flex items-center justify-center shrink-0 shadow-lg shadow-blue-600/20 group-hover:scale-110 transition-transform">
                        {React.cloneElement(benefit.icon, { className: "w-6 h-6 text-white" })}
                      </div>
                      <div className="space-y-1">
                        <p className="text-lg font-black text-white leading-none">{benefit.title}</p>
                        <p className="text-sm text-gray-400 font-medium">{benefit.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-16 pt-8 border-t border-white/10 relative z-10">
                  <p className="text-gray-500 font-black uppercase tracking-widest text-[10px] mb-2">{service.pricingLabel}</p>
                  <div className="flex items-baseline gap-2 mb-8">
                    <span className="text-4xl md:text-5xl font-black text-white tracking-tighter">{service.price}</span>
                  </div>
                  <a 
                    href="https://calendly.com/whondydrouode/30min" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full py-5 text-lg font-black transition-all hover:shadow-[0_0_40px_rgba(37,99,235,0.4)]"
                  >
                    Réserver un appel découverte
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Bonus Info */}
              <div className="p-8 rounded-3xl border border-dashed border-gray-200 flex items-center gap-6">
                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-6 h-6 text-blue-600" />
                </div>
                <p className="text-sm text-gray-500 font-medium">
                  Toutes nos prestations sont <span className="font-bold text-gray-900 tracking-tight">garanties 100% satisfaites ou ajustées</span> jusqu'à obtention des résultats prévus.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cross Navigation */}
      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-2 text-center md:text-left">
              <h2 className="text-3xl font-black text-gray-900 italic">Prêt à transformer votre entreprise ?</h2>
              <p className="text-gray-500 font-medium">L'IA n'est plus une option, c'est un avantage compétitif immédiat.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/evenement"
                className="inline-flex items-center gap-2 bg-gray-900 hover:bg-black text-white px-8 py-4 rounded-full font-black transition-all"
              >
                Voir le prochain evènement
                <Calendar className="w-4 h-4" />
              </Link>
              <button 
                onClick={() => navigate('/services')}
                className="inline-flex items-center gap-2 bg-white border border-gray-200 hover:border-gray-300 text-gray-900 px-8 py-4 rounded-full font-black transition-all"
              >
                Toutes nos offres
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default ServiceDetail;
