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
  Settings,
  Calendar
} from "lucide-react";
import { motion } from "motion/react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const serviceData: any = {
  "audit-ia": {
    number: "01",
    title: "Audit d'Impact IA",
    subtitle: "Révélez votre potentiel opérationnel",
    description: "Cessez de subir le bruit médiatique autour de l'IA. Notre audit décrypte vos processus pour isoler les gisements de productivité réels. Nous ne cherchons pas à 'ajouter de l'IA', mais à supprimer les frictions qui freinent vos équipes.",
    fullContent: "L'audit Certure est une immersion tactique. Nous ne nous contentons pas d'analyser vos outils : nous observons la circulation de la donnée et la charge cognitive de vos collaborateurs. L'objectif est de définir une trajectoire technologique qui sert votre rentabilité, pas la tendance.",
    points: [
      "Diagnostic de Maturité Digitale: audit de votre stack actuelle et de vos flux de données.",
      "Immersion Métier Terrain: entretiens ciblés pour capturer les 'points de douleur' réels.",
      "Cartographie des Frictions: identification des zones de perte de temps automatisables.",
      "Plan Directeur IA: une stratégie de déploiement phasée par priorité de ROI."
    ],
    price: "Dès 6 000 EUR",
    pricingLabel: "Accompagnement Expert · Financement Bpifrance (42%)",
    benefits: [
      { title: "Clarté Stratégique", desc: "Transformez l'incertitude technologique en un plan d'investissement précis.", icon: <Target /> },
      { title: "Efficience Immédiate", desc: "Ciblez les 'Quick Wins' générant des retours en moins de 30 jours.", icon: <Zap /> },
      { title: "Maîtrise du Risque", desc: "Sécurisez vos données et encadrez l'usage de l'IA dans vos services.", icon: <ShieldCheck /> }
    ],
    image: "https://images.unsplash.com/photo-1551288049-bbdac8a28a1e?q=80&w=2070&auto=format&fit=crop",
    methodology: [
      { step: "Phase 1", title: "Cadrage Stratégique", desc: "Alignement sur vos objectifs de croissance et définition du périmètre métier audité." },
      { step: "Phase 2", title: "Audit de Terrain", desc: "Immersion auprès de vos collaborateurs pour extraire les cas d'usage à haute valeur ajoutée." },
      { step: "Phase 3", title: "Analyse de Rentabilité", desc: "Évaluation de la faisabilité technique et calcul du ROI prévisionnel pour chaque cas." },
      { step: "Phase 4", title: "Sélection Tactique", desc: "Priorisation des solutions : du prompt standard au développement sur-mesure." },
      { step: "Phase 5", title: "Restitution Directoire", desc: "Présentation de la Roadmap opérationnelle et des premières actions immédiates." }
    ],
    deliverables: [
      { title: "Le 'BluePrint' IA", desc: "Une cartographie exhaustive de vos processus optimisables par l'IA." },
      { title: "Rapport de Faisabilité", desc: "Audit technique de vos outils actuels et recommandations d'intégration." },
      { title: "Matrice d'Arbitrage", desc: "Outil de décision croisant Impact Business et Complexité Technique." },
      { title: "Kit de Démarrage", desc: "Banque de prompts et outils 'low-code' prêts à l'emploi pour vos équipes." },
      { title: "Roadmap 24 Mois", desc: "Feuille de route budgétée et jalonnée pour votre transformation." },
      { title: "Guide de Gouvernance", desc: "Cadre de sécurité et bonnes pratiques pour vos collaborateurs." }
    ],
    logos: [
      { name: "BNP Paribas", color: "text-emerald-600" },
      { name: "Vinci", color: "text-blue-800" },
      { name: "Thales", color: "text-blue-900" },
      { name: "Armée de Terre", color: "text-gray-800" },
      { name: "Urgo", color: "text-blue-700" },
      { name: "Icade", color: "text-red-600" }
    ]
  },
  "formation-ia": {
    number: "02",
    title: "Formation IA",
    subtitle: "Acculturation & Montée en compétences",
    description: "Comprendre et maîtriser l'IA générative pour l'utiliser à son plein potentiel. Nous formons vos collaborateurs avec des cas d'usage tirés de leur quotidien professionnel.",
    fullContent: "Notre programme de formation est conçu pour lever les barrières techniques et transformer l'IA en un allié quotidien. Plus qu'une simple démonstration d'outils, nous enseignons une méthodologie de réflexion : comment décomposer un problème pour le soumettre efficacement à une IA.",
    points: [
      "Prompt Engineering avancé: maîtriser l'art de l'instruction pour des résultats précis.",
      "Ateliers pratiques par métier: marketing, RH, finance, vente, tech.",
      "Automatisation & agents IA: créer ses propres workflows intelligents sans code.",
      "Certification Certure: valider les acquis et rassurer sur la maîtrise des outils."
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
  "prestations-sur-mesure": {
    number: "03",
    title: "Prestations sur-mesure",
    subtitle: "Développement & Intégration",
    description: "Les solutions du marché ne sont pas adaptées à vos spécificités ? Nous développons des agents IA et des outils sur mesure pour vos cas d'usage métier.",
    fullContent: "Parfois, ChatGPT ne suffit pas. Pour des besoins de sécurité, de confidentialité ou de complexité métier, nous construisons des solutions propriétaires. Nous intégrons l'intelligence artificielle directement dans vos logiciels existants pour un flux de travail transparent.",
    points: [
      "Agents IA conversationnels: experts de votre documentation interne.",
      "Automatisation de workflows: faire communiquer vos outils via l'IA.",
      "Intégration à vos systèmes: APIs, CRM, ERP, outils de production.",
      "Support & maintenance: évolution constante de vos solutions IA."
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
      "Fondamentaux & Vision Stratégique: comprendre les enjeux court et long terme.",
      "Mise en pratique Dirigeant: vos propres outils d'aide à la décision.",
      "Gouvernance & Sécurité: protéger l'entreprise et ses actifs immatériels.",
      "Roadmap stratégique: piloter la transformation de vos départements."
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
      <section className="relative min-h-[80vh] flex flex-col pt-8 md:pt-12 px-4 md:px-8 bg-[#0a0a0b] text-white overflow-hidden rounded-b-[4rem] md:rounded-b-[6rem]">
        <div className="absolute inset-0 z-0">
          <img 
            src={service.image} 
            alt={service.title} 
            className="w-full h-full object-cover opacity-20 scale-110 blur-sm"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-blue-600/20 via-transparent to-[#0a0a0b]"></div>
        </div>
        
        <Header variant="light" />

        <div className="max-w-6xl mx-auto w-full relative z-10 mt-auto pb-20 md:pb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
              <div className="space-y-4">
                <Link to="/services" className="inline-flex items-center gap-2 text-blue-500 font-black hover:text-blue-400 transition-colors group mb-2 uppercase text-xs tracking-widest">
                  <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Retour aux solutions
                </Link>
                <h1 className="text-6xl md:text-9xl font-black tracking-tighter leading-[0.85] text-white max-w-4xl italic">
                  {service.title}
                </h1>
              </div>
              <div className="hidden lg:block">
                <div className="w-32 h-32 rounded-full border border-white/20 flex items-center justify-center p-6 text-center">
                  <p className="text-[10px] font-black uppercase tracking-widest leading-tight">Certure Optimized Strategy</p>
                </div>
              </div>
            </div>

            <p className="text-2xl md:text-4xl text-gray-400 max-w-3xl font-medium leading-tight tracking-tight italic border-l-4 border-blue-600 pl-8">
              "{service.description}"
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center gap-6">
              <a 
                href="https://calendly.com/whondydrouode/30min" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-4 bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-full text-xl font-black transition-all hover:shadow-[0_0_50px_rgba(37,99,235,0.5)]"
              >
                Cadrer mon audit
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </a>
              <div className="flex items-center gap-2 text-gray-500 font-bold uppercase text-[10px] tracking-widest">
                <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                Sessions disponibles cette semaine
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Bento Approach Section */}
      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5 space-y-8">
              <p className="text-blue-600 font-black uppercase tracking-[0.3em] text-xs">Notre ADN opérationnel</p>
              <h2 className="text-5xl md:text-7xl font-black text-gray-900 tracking-tighter leading-none italic">
                L'approche<br />Certure.
              </h2>
              <p className="text-xl text-gray-500 leading-relaxed font-medium">
                {service.fullContent}
              </p>
            </div>
            
            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
              {service.points.map((point: string, i: number) => {
                const parts = point.split(':');
                const bold = parts[0];
                const rest = parts.slice(1).join(':');
                return (
                  <div key={i} className={`p-8 rounded-[3rem] border border-gray-100 flex flex-col justify-between group hover:bg-blue-600 hover:border-blue-600 transition-all duration-500 ${i === 1 || i === 2 ? 'bg-gray-50' : 'bg-white'}`}>
                    <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-12 group-hover:bg-white/20 group-hover:scale-110 transition-all">
                      <Zap className="w-6 h-6 text-blue-600 group-hover:text-white" />
                    </div>
                    <div className="space-y-3">
                      <p className="text-xl font-black text-gray-900 group-hover:text-white transition-colors">{bold}</p>
                      <p className="text-sm text-gray-500 group-hover:text-blue-100 transition-colors leading-relaxed">{rest}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Methodology Section */}
      {service.methodology && (
        <section className="py-32 bg-[#0a0a0b] relative overflow-hidden rounded-[4rem] md:rounded-[6rem] mx-4 md:mx-8">
          <div className="absolute inset-0 z-0 opacity-20 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-600 via-transparent to-transparent"></div>
          <div className="max-w-6xl mx-auto px-6 relative z-10">
            <div className="flex flex-col lg:flex-row justify-between items-end gap-12 mb-24">
              <div className="space-y-6">
                <p className="text-blue-500 font-black uppercase tracking-[0.3em] text-xs">Phasage stratatégique</p>
                <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter leading-none italic">
                  5 Phases<br />d'immersion.
                </h2>
              </div>
              <div className="max-w-sm text-right hidden lg:block">
                <p className="text-gray-500 font-medium italic">
                  Une trajectoire pensée pour minimiser la friction technique et maximiser l'adoption.
                </p>
              </div>
            </div>
            
            <div className="space-y-4">
              {service.methodology.map((m: any, i: number) => (
                <div key={i} className="group relative bg-white/5 border border-white/10 p-8 md:p-12 rounded-[3.5rem] flex flex-col md:flex-row items-center gap-12 hover:bg-white/10 transition-all duration-500">
                  <div className="text-6xl md:text-8xl font-black text-blue-600/20 group-hover:text-blue-500 transition-colors font-jakarta leading-none">
                    0{i + 1}
                  </div>
                  <div className="flex-1 space-y-4 text-center md:text-left">
                    <h4 className="text-2xl md:text-4xl font-black text-white italic tracking-tight">{m.title}</h4>
                    <p className="text-lg text-gray-400 font-medium leading-relaxed max-w-2xl">{m.desc}</p>
                  </div>
                  <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:border-white transition-all">
                    <ArrowRight className="w-6 h-6 text-white group-hover:text-black" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ROI & Key Data Section */}
      <section className="py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-7xl font-black text-gray-900 tracking-tighter leading-none italic mb-12">
              Le retour sur<br />expérience.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { val: "15 — 30", label: "Gisements / Métier", sub: "Cas d'usage identifiés" },
                { val: "50%", label: "Déploiement immédiat", sub: "Sans développement lourd" },
                { val: "×3", label: "Gain de vélocité", sub: "Sur les flux transactionnels" }
              ].map((stat, i) => (
                <div key={i} className="bg-gray-50 border border-gray-100 p-12 rounded-[3.5rem] text-center hover:bg-white hover:shadow-2xl hover:shadow-blue-600/5 transition-all group">
                  <p className="text-7xl font-black text-blue-600 tracking-tighter mb-4 group-hover:scale-110 transition-transform font-jakarta">{stat.val}</p>
                  <p className="text-lg text-gray-900 font-black uppercase tracking-tight mb-1">{stat.label}</p>
                  <p className="text-sm text-gray-500 font-medium leading-relaxed">{stat.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Deliverables Cards Section */}
      {service.deliverables && (
        <section className="py-40 bg-[#0a0a0b] relative overflow-hidden rounded-t-[4rem] md:rounded-t-[6rem]">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-24 text-white">
              <div className="space-y-6 max-w-2xl text-left">
                <p className="text-blue-500 font-black uppercase tracking-[0.3em] text-xs">Vos actifs stratégiques</p>
                <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter leading-none italic">
                  Les livrables.
                </h2>
              </div>
              <p className="text-gray-500 font-medium md:text-right max-w-xs pb-4 italic border-r border-blue-600 pr-6">
                Chaque étape génère une documentation technique et stratégique propriétaire.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {service.deliverables.map((d: any, i: number) => (
                <div key={i} className="p-12 rounded-[3.5rem] bg-white/5 border border-white/10 hover:bg-blue-600 transition-all group relative overflow-hidden h-80 flex flex-col justify-between">
                  <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center group-hover:bg-white group-hover:scale-110 transition-all">
                    <CheckCircle2 className="w-6 h-6 text-blue-500 group-hover:text-blue-600" />
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-2xl font-black text-white uppercase tracking-tight italic leading-tight group-hover:text-white">{d.title}</h4>
                    <p className="text-sm text-gray-400 leading-relaxed font-medium group-hover:text-blue-100">{d.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Benefits Section (Security & Price) */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-gray-900 rounded-[4rem] md:rounded-[6rem] p-12 md:p-24 text-white shadow-3xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] -mr-64 -mt-64"></div>
            
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div className="space-y-12">
                <h3 className="text-4xl md:text-6xl font-black tracking-tight leading-none italic">Prêt à révéler votre potentiel ?</h3>
                <div className="space-y-8">
                  {service.benefits.map((benefit: any, i: number) => (
                    <div key={i} className="flex items-start gap-6 group">
                      <div className="w-14 h-14 rounded-2xl bg-blue-600 flex items-center justify-center shrink-0 shadow-lg shadow-blue-600/20 group-hover:scale-110 transition-all">
                        {React.cloneElement(benefit.icon, { className: "w-6 h-6 text-white" })}
                      </div>
                      <div className="space-y-2">
                        <p className="text-2xl font-black text-white leading-none italic">{benefit.title}</p>
                        <p className="text-lg text-gray-400 font-medium">{benefit.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 p-12 rounded-[4rem] space-y-12 relative z-10 backdrop-blur-sm">
                <div className="space-y-2">
                  <p className="text-gray-500 font-black uppercase tracking-widest text-xs mb-4">{service.pricingLabel}</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-6xl md:text-7xl font-black text-white tracking-tighter italic">{service.price}</span>
                  </div>
                </div>
                
                <a 
                  href="https://calendly.com/whondydrouode/30min" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-4 bg-white text-black rounded-full py-6 text-2xl font-black transition-all hover:bg-blue-600 hover:text-white hover:shadow-[0_0_50px_rgba(37,99,235,0.3)]"
                >
                  Démarrer le diagnostic
                  <ArrowRight className="w-8 h-8" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cross Navigation */}
      <section className="py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12 py-20 border-y border-gray-100">
            <div className="space-y-4 text-center md:text-left">
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 italic tracking-tight leading-none">Continuer votre exploration.</h2>
              <p className="text-xl text-gray-500 font-medium">L'IA n'est plus une option, c'est votre futur standard opérationnel.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-6">
              <Link 
                to="/evenement"
                className="inline-flex items-center gap-3 bg-gray-900 hover:bg-black text-white px-10 py-5 rounded-full text-lg font-black transition-all shadow-xl"
              >
                Conférence 18 mai
                <Calendar className="w-5 h-5" />
              </Link>
              <button 
                onClick={() => navigate('/services')}
                className="inline-flex items-center gap-3 bg-white border-2 border-gray-100 hover:border-blue-600 text-gray-900 px-10 py-5 rounded-full text-lg font-black transition-all"
              >
                Autres offres
                <ArrowRight className="w-5 h-5" />
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
