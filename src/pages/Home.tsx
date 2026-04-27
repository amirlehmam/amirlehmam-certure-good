import React from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { 
  ArrowUpRight, 
  ArrowRight, 
  ArrowLeft,
  ArrowUp,
  ArrowDown,
  Calendar,
  MapPin,
  Zap,
  Database, 
  Mail, 
  LayoutGrid, 
  Files, 
  Cpu, 
  CheckCircle2, 
  MessageSquare,
  Hourglass, 
  Lock,
  Linkedin,
  Users,
  Target,
  TrendingUp,
  ShieldCheck
} from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Hero = () => {
  return (
    <section className="overflow-hidden min-h-[650px] flex flex-col lg:p-12 p-8 shadow-gray-200 text-white bg-[#0f1115] w-full rounded-[2.5rem] relative shadow-2xl justify-between">
      <div className="absolute inset-0 z-0">
        <motion.img 
          initial={{ scale: 1.1 }}
          animate={{ 
            scale: [1.1, 1.2, 1.1],
            rotate: [0, 1, 0]
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1f147f7d-661c-4181-a17e-e2ca5322b1b0_1600w.webp" 
          alt="Abstract 3D" 
          className="opacity-60 mix-blend-overlay w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-0 right-0 bottom-0 left-0" style={{ background: "radial-gradient(ellipse 50% 70% at 0% 100%, rgba(45,92,243,0.3) 0%, transparent 60%), radial-gradient(ellipse 40% 50% at 100% 0%, rgba(45,92,243,0.15) 0%, transparent 50%), linear-gradient(to bottom, rgba(15,17,21,0.7) 0%, transparent 40%, rgba(15,17,21,0.9) 100%)" }}></div>
      </div>
      
      <Header variant="light" />

      <div className="z-10 w-full mt-auto pt-32 relative pb-12">
        <h1 className="text-white mb-8">
          L'IA dans vos outils, <br />
          <span className="text-blue-500 italic">pas à côté.</span>
        </h1>
        <p className="text-body-lg text-gray-400 max-w-2xl mb-10">
          Nous auditons, formons et développons des solutions IA sur mesure pour les PME et ETI. Transformez la promesse technologique en gains opérationnels immédiats.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a href="https://calendly.com/whondydrouode/30min" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-white text-black pl-6 pr-2 py-2 rounded-full text-base font-medium hover:bg-gray-100 transition-all group">
            Demander un audit
            <span className="bg-black text-white rounded-full w-9 h-9 flex items-center justify-center group-hover:scale-110 transition-transform">
              <ArrowUpRight className="w-5 h-5" />
            </span>
          </a>
          <div className="flex items-center gap-6 px-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-white font-jakarta tracking-tighter">x5.2</p>
              <p className="text-[10px] text-gray-500 uppercase tracking-widest font-sans">ROI / 12 mois</p>
            </div>
            <div className="w-px h-8 bg-white/10"></div>
            <div className="text-center">
              <p className="text-2xl font-bold text-white font-jakarta tracking-tighter">97%</p>
              <p className="text-[10px] text-gray-500 uppercase tracking-widest font-sans">Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Clients = () => {
  const clients = [
    { name: "L'Oréal", logo: "https://i.imgur.com/6qEBDoO.png" },
    { name: "Carrefour", logo: "https://i.imgur.com/YSaZ0FQ.png" },
    { name: "Nestlé", logo: "https://i.imgur.com/1UT3Ckj.png" },
    { name: "SNCF Connect", logo: "https://i.imgur.com/omWFpUf.png" },
    { name: "Fnac Darty", logo: "https://i.imgur.com/Pdrvuov.png" },
    { name: "Engie", logo: "https://i.imgur.com/2sZmGxV.png" }
  ];

  return (
    <section className="py-24 border-b border-gray-100 bg-white/50">
      <div className="text-center mb-16">
        <div className="inline-flex items-center rounded-full border border-gray-200 bg-white/80 backdrop-blur-sm px-3 py-1 text-badge text-gray-500 mb-6 shadow-sm">Confiance</div>
        <h2 className="text-gray-900">De la PME au grand groupe.</h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12 items-center max-w-5xl mx-auto">
        {clients.map((client, i) => (
          <div key={i} className="flex justify-center px-4">
            <img 
              src={client.logo} 
              alt={client.name} 
              className="h-12 w-auto max-w-[140px] object-contain" 
              referrerPolicy="no-referrer" 
            />
          </div>
        ))}
      </div>
      <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-12 max-w-4xl mx-auto">
        <div className="text-center">
          <p className="text-5xl font-bold text-gray-900 font-jakarta tracking-tighter mb-2">50+</p>
          <p className="text-body-sm text-gray-500">Entreprises accompagnées</p>
        </div>
        <div className="text-center">
          <p className="text-5xl font-bold text-gray-900 font-jakarta tracking-tighter mb-2">97%</p>
          <p className="text-body-sm text-gray-500">Taux de satisfaction</p>
        </div>
        <div className="text-center">
          <p className="text-5xl font-bold text-gray-900 font-jakarta tracking-tighter mb-2">x5.2</p>
          <p className="text-body-sm text-gray-500">ROI moyen / 12 mois</p>
        </div>
      </div>
    </section>
  );
};

const Constat = () => {
  const points = [
    { label: "-1.8h", title: "Perdues par jour / collaborateur", desc: "Recherche d'informations, ressaisies manuelles et processus obsolètes.", icon: <Hourglass className="w-5 h-5" />, color: "bg-blue-50", textColor: "text-orange-500" },
    { label: "80%", title: "Shadow IA non maîtrisée", desc: "Vos collaborateurs utilisent déjà l'IA sans gouvernance, exposant vos données.", icon: <ShieldCheck className="w-5 h-5" />, color: "bg-gray-50", textColor: "text-red-500" },
    { label: "Dette", title: "Opérationnelle croissante", desc: "L'absence d'IA structurée freine votre agilité et votre capacité à scaler.", icon: <TrendingUp className="w-5 h-5" />, color: "bg-blue-50", textColor: "text-blue-600" },
    { label: "+15", title: "Gisements de productivité", desc: "Identifiés en moyenne par audit : des gains immédiats inexploités.", icon: <Target className="w-5 h-5" />, color: "bg-gray-50", textColor: "text-emerald-600" }
  ];

  return (
    <section className="py-24">
      <div className="text-center mb-20">
        <div className="inline-flex items-center rounded-full border border-gray-200 bg-white/80 backdrop-blur-sm px-3 py-1 text-badge text-gray-500 mb-6 shadow-sm">Le constat</div>
        <h2 className="text-gray-900 mb-8">
          L'absence d'IA structurée <br /> <span className="text-blue-600 italic">freine votre croissance.</span>
        </h2>
        <p className="text-subtitle text-gray-500 max-w-2xl mx-auto">
          Vos équipes perdent un temps précieux sur des tâches répétitives. Sans cadre, l'IA reste sous-exploitée ou mal utilisée.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {points.map((point, i) => (
          <div key={i} className="bg-white border border-gray-100 p-8 rounded-[2.5rem] transition-all hover:scale-[1.02] duration-300 flex flex-col justify-between min-h-[280px] shadow-sm">
            <div className={`text-5xl font-extrabold ${point.textColor} font-jakarta tracking-tighter mb-4`}>{point.label}</div>
            <div>
              <h4 className="text-gray-900 mb-2">{point.title}</h4>
              <p className="text-body-sm text-gray-500">{point.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const OffersOverview = () => {
  const offers = [
    { title: "Audit IA", slug: "audit-ia", desc: "Identifiez les cas d'usage les plus impactants.", price: "Dès 6 000€", tag: "Bpifrance" },
    { title: "Formation IA", slug: "formation-ia", desc: "Rendez vos équipes autonomes sur l'IA générative.", price: "3 500€", tag: "Qualiopi" },
    { title: "Développement", slug: "prestations-sur-mesure", desc: "Solutions et agents IA sur-mesure.", price: "Sur devis", tag: "Custom" },
    { title: "Coaching", slug: "coaching-dirigeant", desc: "Accompagnement stratégique pour décideurs.", price: "5 000€", tag: "1-to-1" }
  ];

  return (
    <section className="py-24 bg-[#0f1115] rounded-[2.5rem] px-8 lg:px-16 text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
      <div className="relative z-10 flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
        <div className="max-w-2xl">
          <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 backdrop-blur-sm px-3 py-1 text-badge text-gray-400 mb-6 shadow-sm">Nos Services</div>
          <h2 className="text-white">Quatre offres pour <br /> <span className="text-gray-400 italic">transformer votre entreprise</span></h2>
        </div>
        <Link to="/services" className="bg-white text-black px-8 py-4 rounded-full btn-lg hover:bg-gray-100 transition-all flex items-center gap-2">
          Voir le détail <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
        {offers.map((offer, i) => (
          <Link 
            key={i} 
            to={`/services/${offer.slug}`}
            className="bg-white/5 border border-white/10 p-8 rounded-[2.5rem] hover:bg-blue-600/10 hover:border-blue-500/30 hover:scale-[1.02] transition-all duration-300 group cursor-pointer"
          >
            <div className="flex justify-between items-start mb-8">
              <div className="w-10 h-10 rounded-xl bg-blue-600/20 flex items-center justify-center text-blue-500 font-jakarta font-bold text-sm">
                {String(i + 1).padStart(2, '0')}
              </div>
            </div>
            <h4 className="text-white mb-3 group-hover:text-blue-400 transition-colors">{offer.title}</h4>
            <p className="text-body-sm text-gray-400 mb-8">{offer.desc}</p>
            <div className="flex items-center justify-between pt-6 border-t border-white/10">
              <span className="text-lg font-bold font-jakarta tracking-tighter">{offer.price}</span>
              <ArrowUpRight className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors" />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

const ThreeColumnGrid = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-12">
      <div className="lg:col-span-4 flex flex-col justify-center">
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left pl-10">
          <h3 className="text-gray-900 mb-1">Concentrez-vous sur ce qui compte vraiment.</h3>
          <p className="text-body text-gray-500 mb-8">L'IA ne remplace pas l'humain, elle le libère des tâches qui n'auraient jamais dû être les siennes.</p>
          <button className="group flex items-center gap-3 bg-gray-900 text-white pl-5 pr-2 py-2 rounded-full btn-lg hover:bg-gray-800 transition-all">
            <span>Voir comment ça marche</span>
            <span className="bg-white text-black rounded-full w-8 h-8 flex items-center justify-center group-hover:scale-110 transition-transform">
              <ArrowUpRight className="w-5 h-5" />
            </span>
          </button>
        </div>
      </div>

      <div className="lg:col-span-4 relative group cursor-pointer">
        <div className="relative h-[500px] w-full rounded-[2.5rem] overflow-hidden bg-gray-50 border border-gray-100">
          <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105 z-0 flex items-center justify-center">
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Central Agent */}
              <div className="z-10 bg-[#2D5CF3] rounded-2xl p-4 flex flex-col items-center gap-2 shadow-xl border border-white/20 w-40 text-center">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <Cpu className="text-white w-6 h-6" />
                </div>
                <span className="text-xs text-white font-bold font-sans">Agent IA Certure</span>
                <span className="inline-flex items-center gap-1 text-[9px] text-white bg-white/20 rounded-full px-2 py-0.5 font-sans">
                  <span className="w-1 h-1 rounded-full bg-white animate-pulse"></span>Actif
                </span>
              </div>

              {/* Orbital Systems */}
              {[
                { icon: <Database className="w-4 h-4" />, label: "ERP", pos: "top-28 left-12" },
                { icon: <Mail className="w-4 h-4" />, label: "Mail", pos: "top-28 right-12" },
                { icon: <LayoutGrid className="w-4 h-4" />, label: "CRM", pos: "bottom-10 left-12" },
                { icon: <Files className="w-4 h-4" />, label: "Cloud", pos: "bottom-10 right-12" }
              ].map((item, i) => (
                <div key={i} className={`absolute ${item.pos} bg-white rounded-xl p-3 flex items-center gap-2 shadow-md border border-gray-100 z-20 hover:scale-110 transition-transform duration-300`}>
                  <div className="text-[#2D5CF3]">{item.icon}</div>
                  <span className="text-xs text-gray-700 font-medium font-sans">{item.label}</span>
                </div>
              ))}

              {/* Connection Lines (SVG) */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" viewBox="0 0 400 500">
                <line x1="100" y1="136" x2="200" y2="250" stroke="#2D5CF3" strokeWidth="1" strokeDasharray="4" />
                <line x1="300" y1="136" x2="200" y2="250" stroke="#2D5CF3" strokeWidth="1" strokeDasharray="4" />
                <line x1="100" y1="436" x2="200" y2="250" stroke="#2D5CF3" strokeWidth="1" strokeDasharray="4" />
                <line x1="300" y1="436" x2="200" y2="250" stroke="#2D5CF3" strokeWidth="1" strokeDasharray="4" />
              </svg>
            </div>
          </div>
          <div className="absolute top-10 left-10 text-gray-900 z-20 pointer-events-none">
            <h3 className="mb-1">Systèmes connectés</h3>
            <p className="text-body text-gray-500">Sans migration</p>
          </div>
        </div>
      </div>

      <div className="lg:col-span-4 relative group cursor-pointer">
        <div className="relative h-[500px] w-full rounded-[2.5rem] overflow-hidden bg-[#1a1a1a]">
          <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105 z-0">
            <div className="absolute inset-0 bg-[#0f1115] flex items-center justify-center p-6">
              <div className="w-full max-w-xs space-y-2">
                {[
                  { title: "IA générative au quotidien", status: "Module 1 · Validé", icon: <CheckCircle2 className="w-4 h-4 text-[#2D5CF3]" />, active: false },
                  { title: "Automatisation sans coder", status: "Module 2 · Validé", icon: <CheckCircle2 className="w-4 h-4 text-[#2D5CF3]" />, active: false },
                  { title: "IA pour les processus RH", status: "Module 3 · En cours", icon: <Hourglass className="w-4 h-4 text-[#2D5CF3]" />, active: true },
                  { title: "Déploiement & maintenance", status: "Module 4 · À venir", icon: <Lock className="w-4 h-4 text-gray-500" />, active: false, locked: true }
                ].map((item, i) => (
                  <div key={i} className={`flex items-center gap-3 border rounded-xl p-3 ${item.active ? "bg-[#2D5CF3]/10 border-[#2D5CF3]/30" : "bg-white/5 border-white/10"} ${item.locked ? "opacity-40" : ""}`}>
                    {item.icon}
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-white font-sans">{item.title}</p>
                      <p className={`text-[10px] font-sans ${item.active ? "text-[#2D5CF3]" : "text-gray-500"}`}>{item.status}</p>
                    </div>
                  </div>
                ))}
                <div className="pt-2">
                  <div className="flex justify-between mb-1.5">
                    <span className="text-[10px] text-gray-400 font-sans">Progression équipe</span>
                    <span className="text-[10px] text-[#2D5CF3] font-sans">6 / 8 validés</span>
                  </div>
                  <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: "75%" }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      className="h-full bg-[#2D5CF3] rounded-full" 
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/80 z-10 pointer-events-none"></div>
          <div className="absolute top-10 left-10 text-white z-20 pointer-events-none">
            <h3 className="mb-1">Formation terrain</h3>
            <p className="text-body text-gray-400">Résultats mesurables</p>
          </div>
          <div className="absolute bottom-6 w-full px-6 z-20">
            <button className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-full text-sm hover:bg-gray-200 transition font-sans">
              En savoir plus <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const BentoSection = () => {
  return (
    <div className="lg:px-8 z-10 w-full pr-6 pl-6 relative">
      <div className="text-center w-full mb-24">
        <div className="inline-flex items-center rounded-full border border-gray-200 bg-white/80 backdrop-blur-sm px-3 py-1 text-badge text-gray-500 mb-6 shadow-sm">Résultats</div>
        <h2 className="text-gray-900 mb-6">Chaque heure récupérée est une heure <br className="hidden md:block" /> investie dans ce qui compte.</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="group flex flex-col overflow-hidden hover:shadow-[0_20px_60px_rgb(0,0,0,0.08)] transition-all duration-500 bg-white border-gray-100 border rounded-[2.5rem] p-6 sm:p-8 relative shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
          <div className="absolute inset-0 bg-gradient-to-b from-[#eef2ff]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-[2.5rem]"></div>
          <h3 className="text-gray-900 mb-1">Vos chiffres,<br />sans les demander.</h3>
          <p className="text-body text-gray-400 mb-6">Vos données se consolident seules. Vous décidez avec les bonnes informations, au bon moment.</p>
          <div className="w-full rounded-2xl overflow-hidden border border-gray-100 shadow-[0_4px_24px_rgba(0,0,0,0.06)]">
            <div className="flex bg-white border-b border-gray-100 px-4 py-3 items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#2D5CF3] animate-pulse flex-shrink-0"></div>
                <span className="text-[10px] font-medium text-gray-500 uppercase tracking-widest font-sans">Vue Direction</span>
              </div>
              <span className="text-[10px] text-[#2D5CF3] border border-[#2D5CF3]/20 px-2.5 py-1 rounded-full font-sans">Live</span>
            </div>
            <div className="bg-white divide-y divide-gray-100">
              {[
                { label: "CA semaine", value: "284 K€", change: "+12%", up: true },
                { label: "Délais fournisseurs", value: "J+3", change: "−2j", up: false, color: "text-[#2D5CF3]" },
                { label: "Taux traitement", value: "94%", change: "+8%", up: true }
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between px-4 py-3.5">
                  <span className="text-sm text-gray-500 font-sans">{item.label}</span>
                  <div className="flex items-center gap-2">
                    <span className={`text-sm font-medium ${item.color || "text-gray-900"} font-jakarta tracking-tight`}>{item.value}</span>
                    <span className="inline-flex items-center gap-1 text-[10px] text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-full font-sans whitespace-nowrap">
                      {item.up ? <ArrowUp className="w-2.5 h-2.5" /> : <ArrowDown className="w-2.5 h-2.5" />}
                      {item.change}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-gray-50/80 border-t border-gray-100 px-4 pt-4 pb-4">
              <svg viewBox="0 0 300 48" className="w-full h-14 block overflow-visible">
                <defs>
                  <linearGradient id="green-grad-2" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#10b981" stopOpacity="0.18"></stop>
                    <stop offset="100%" stopColor="#10b981" stopOpacity="0"></stop>
                  </linearGradient>
                </defs>
                <motion.path 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 1.5, duration: 1 }}
                  d="M0,40 C40,38 70,30 100,26 S160,16 200,12 S260,6 300,3 V48 H0 Z" 
                  fill="url(#green-grad-2)" 
                />
                <motion.path 
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ delay: 0.3, duration: 2, ease: "easeOut" }}
                  d="M0,40 C40,38 70,30 100,26 S160,16 200,12 S260,6 300,3" 
                  fill="none" 
                  stroke="#10b981" 
                  strokeWidth="1.5" 
                  strokeLinecap="round" 
                />
                <motion.circle 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 2.3, duration: 0.5 }}
                  cx="300" cy="3" r="3" fill="#10b981" 
                  className="animate-pulse"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div className="group flex flex-col overflow-hidden hover:shadow-[0_20px_60px_rgb(0,0,0,0.08)] transition-all duration-500 bg-white border-gray-100 border rounded-[2.5rem] p-6 sm:p-8 relative shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <div className="absolute inset-0 bg-gradient-to-b from-[#eef2ff]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-[2.5rem]"></div>
            <h3 className="text-gray-900 mb-1">Une intégration propre.<br />Une équipe qui suit.</h3>
            <p className="text-body text-gray-400 mb-6">L'IA se greffe sur votre architecture existante. Vos équipes sont formées pour maintenir, pas pour dépendre.</p>
            <div className="space-y-2.5">
              {[
                { name: "Gmail", color: "#EA4335", logo: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg" },
                { name: "Slack", color: "#E01E5A", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg" },
                { name: "Excel", color: "#217346", logo: "https://i.imgur.com/w54ZUTx.png" },
                { name: "HubSpot", color: "#FF7A59", logo: "https://i.imgur.com/hbjYTPh.png" }
              ].map((tool, i) => (
                <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 border border-gray-100">
                  <div className="w-8 h-8 rounded-lg bg-white shadow-sm border border-gray-100 flex items-center justify-center flex-shrink-0 p-1.5">
                    <img src={tool.logo} alt={tool.name} className="w-full h-full object-contain" referrerPolicy="no-referrer" />
                  </div>
                  <span className="text-sm text-gray-600 font-sans flex-1">{tool.name}</span>
                  <span className="inline-flex items-center gap-1.5 text-[10px] font-medium text-emerald-700 bg-emerald-50 border border-emerald-100 rounded-full px-2.5 py-1 font-sans flex-shrink-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0"></span>Connecté
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="group relative bg-gray-900 rounded-[2.5rem] border border-white/10 p-6 sm:p-8 flex flex-col justify-between overflow-hidden transition-all duration-500">
            <div>
              <h3 className="text-white mb-1">Un résultat<br />mesurable.</h3>
              <p className="text-body text-gray-400">Dès la sixième semaine, les gains sont visibles et chiffrés.</p>
            </div>
            <div className="mt-6 flex items-end justify-between">
              <div>
                <p className="text-5xl sm:text-6xl text-white font-jakarta font-medium tracking-tighter">+30%</p>
                <p className="text-xs text-gray-500 font-sans mt-2">Efficacité moyenne · Semaine 6</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <ArrowUpRight className="text-black w-5 h-5" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const TeamSection = () => {
  const mainExperts = [
    {
      name: "Amir Lehmam",
      role: "Co-Fondateur & Expert Productivité IA",
      initials: "AL",
      image: "https://i.imgur.com/jctvwLR.jpeg",
      desc: "Spécialiste de l'optimisation des processus par l'IA générative. Amir accompagne les dirigeants dans la définition de leur stratégie IA et la mise en place de solutions à fort impact opérationnel.",
      tags: ["STRATÉGIE IA", "PRODUCTIVITÉ", "CONSEIL"]
    },
    {
      name: "Rudy Thimothee",
      role: "Co-Fondateur & Expert Automatisation",
      initials: "RT",
      image: "https://i.imgur.com/HVIPOER.jpeg",
      desc: "Ingénieur spécialisé dans l'automatisation intelligente et le développement d'agents IA. Rudy conçoit et déploie les solutions techniques sur-mesure adaptées aux enjeux métiers de chaque client.",
      tags: ["AUTOMATISATION", "AGENTS IA", "NO-CODE"]
    }
  ];

  const otherExperts = [
    { id: "E1", role: "Expert IA", title: "Consultant Senior" },
    { id: "E2", role: "Expert IA", title: "Formateur Certifié" },
    { id: "E3", role: "Expert IA", title: "Ingénieur IA" },
    { id: "E4", role: "Expert IA", title: "Ingénieur Automatisation" },
    { id: "E5", role: "Expert IA", title: "Chef de Projet" }
  ];

  return (
    <section className="py-24">
      <div className="mb-16">
        <div className="inline-flex items-center rounded-full border border-gray-200 bg-white/80 backdrop-blur-sm px-3 py-1 text-badge text-gray-500 mb-6 shadow-sm uppercase">Notre équipe</div>
        <h2 className="text-gray-900 mb-8">
          Des experts IA <span className="text-blue-600 italic">à vos côtés.</span>
        </h2>
        <p className="text-subtitle text-gray-500 max-w-2xl">
          Notre collectif réunit des spécialistes en productivité, ingénieurs IA et formateurs certifiés pour répondre à chaque spécificité de votre entreprise.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {mainExperts.map((expert, i) => (
          <div key={i} className="bg-[#111829] rounded-[2.5rem] p-8 md:p-10 border border-white/5 relative overflow-hidden group">
            <div className="relative z-10">
              <div className="w-20 h-20 rounded-full overflow-hidden mb-8 border-2 border-blue-600/30">
                {expert.image ? (
                  <img src={expert.image} alt={expert.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                ) : (
                  <div className="w-full h-full bg-blue-600 flex items-center justify-center text-white text-2xl font-bold">
                    {expert.initials}
                  </div>
                )}
              </div>
              <h3 className="text-white text-2xl mb-1">{expert.name}</h3>
              <p className="text-blue-500 text-sm font-medium mb-6">{expert.role}</p>
              <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-md">
                {expert.desc}
              </p>
              <div className="flex flex-wrap gap-2">
                {expert.tags.map((tag, j) => (
                  <span key={j} className="text-[10px] font-bold tracking-wider text-blue-400 bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-full uppercase">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
        {otherExperts.map((expert, i) => (
          <div key={i} className="bg-gray-50 border border-gray-100 rounded-2xl p-6 text-center hover:bg-white hover:shadow-md transition-all">
            <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 font-bold mb-4 mx-auto">
              {expert.id}
            </div>
            <p className="text-xs font-bold text-gray-900 mb-1">{expert.role}</p>
            <p className="text-[10px] text-blue-600">{expert.title}</p>
          </div>
        ))}
      </div>

      <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 flex items-center gap-6">
        <div className="text-4xl font-bold text-blue-600 font-jakarta">7</div>
        <div>
          <p className="text-sm font-bold text-gray-900 mb-1">Experts à votre disposition</p>
          <p className="text-xs text-gray-500">
            Automatisation, IA générative, No-Code, stratégie digitale, formation : notre collectif couvre l'ensemble de vos besoins en transformation IA.
          </p>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  return (
    <section className="overflow-hidden bg-gray-50 border-gray-200/60 border-b pt-24 pb-24 relative">
      <div className="lg:px-8 w-full pr-6 pl-6">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-20 gap-8">
          <h2 className="text-gray-900 w-full">
            Des équipes qui font enfin <br className="hidden md:block" />
            <span className="text-gray-400 italic">ce pour quoi elles ont été recrutées.</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-8 min-h-[520px] flex flex-col justify-between hover:shadow-[0_20px_40px_rgba(0,0,0,0.04)] transition-shadow duration-500 group rounded-[2.5rem] border border-gray-100">
            <div>
              <h3 className="text-gray-900 mb-1">La bonne décision au bon moment.</h3>
              <p className="text-body text-gray-500">"En six semaines, nos reportings se font seuls. Je passe mes lundis matin à décider, pas à consolider des fichiers."</p>
            </div>
            <div className="flex items-center gap-3 pt-6 border-t border-gray-100 mt-auto">
              <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Profile" className="w-10 h-10 rounded-full object-cover bg-gray-100 grayscale group-hover:grayscale-0 transition-all duration-500" referrerPolicy="no-referrer" />
              <div>
                <p className="text-sm text-gray-900 font-sans">Marc D.</p>
                <p className="text-xs text-gray-500 font-sans">Directeur Général · PME Industrie</p>
              </div>
            </div>
          </div>
          <div className="relative min-h-[520px] bg-gray-900 overflow-hidden group rounded-[2.5rem]">
            <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8188a0ea-1b46-4f51-b821-9271bdd23929_800w.jpg" alt="Abstract" className="group-hover:scale-105 group-hover:opacity-60 transition-all duration-700 opacity-70 w-full h-full object-cover absolute inset-0" referrerPolicy="no-referrer" />
            <div className="bg-gradient-to-t from-black/80 via-transparent to-black/20 absolute inset-0"></div>
            <div className="absolute top-8 left-8 right-8 flex justify-between items-start z-10">
              <span className="text-white text-lg tracking-tight mix-blend-overlay font-sans">Certure©</span>
            </div>
            <div className="absolute bottom-8 right-8 z-10">
              <span className="text-white/60 text-xs uppercase tracking-widest font-sans">Depuis 2024</span>
            </div>
          </div>
          <div className="min-h-[520px] flex flex-col overflow-hidden group bg-white p-8 relative justify-between rounded-[2.5rem] border border-gray-100">
            <div className="flex justify-between items-start z-10">
              <h3 className="text-gray-900 mb-1">Erreurs admin</h3>
            </div>
            <div className="relative flex flex-col items-center justify-center w-56 h-56 my-8 mx-auto">
              <svg className="w-full h-full transform -rotate-90 drop-shadow-xl absolute inset-0" viewBox="0 0 200 200">
                <circle cx="100" cy="100" r="90" stroke="#f3f4f6" strokeWidth="1.5" fill="none"></circle>
                <motion.circle 
                  initial={{ strokeDashoffset: 565 }}
                  whileInView={{ strokeDashoffset: 28 }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  cx="100" cy="100" r="90" stroke="#10b981" strokeWidth="1.5" fill="none" strokeDasharray="565" 
                  className="transition-all duration-1000 ease-out group-hover:stroke-[3]"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center flex-col">
                <span className="text-5xl text-gray-900 font-jakarta font-medium tracking-tighter">-95%</span>
              </div>
            </div>
            <p className="text-gray-500 text-sm mb-8 font-sans">De fautes d'inattention sur les taches répétitives.</p>
          </div>
          <div className="min-h-[520px] flex flex-col group overflow-hidden text-white bg-gray-900 p-8 relative justify-between rounded-[2.5rem] border border-white/10">
            <div className="flex justify-between items-start z-10">
              <h3 className="text-white mb-1">Prêt à savoir ce que l'IA peut faire pour vous ?</h3>
              <ArrowUpRight className="text-gray-400 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 w-6 h-6" />
            </div>
            <div className="z-10 relative mt-8">
              <p className="text-gray-400 leading-relaxed mb-12 max-w-[260px] text-[15px] font-sans">Un diagnostic de 3 jours. Un rapport. Une roadmap. Vous repartez avec un plan concret.</p>
              <div className="space-y-2 text-sm text-gray-400">
                <a href="mailto:contact@certure.fr" className="block hover:text-blue-400 transition-colors font-sans">contact@certure.fr</a>
                <a href="https://calendly.com/whondydrouode/30min" target="_blank" rel="noopener noreferrer" className="block hover:text-blue-400 transition-colors font-sans">calendly.com/whondydrouode/30min</a>
                <a href="#" className="block hover:text-blue-400 transition-colors font-sans">certure.fr</a>
              </div>
            </div>
            <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-blue-600/10 rounded-full blur-[80px] group-hover:bg-blue-600/20 transition-all duration-700 pointer-events-none"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const faqs = [
    { q: "Est-ce que ça va perturber le travail de mes équipes ?", a: "Non. L'IA s'intègre dans les outils que vos équipes utilisent déjà. Aucune migration, aucune réorganisation. Le changement se passe en coulisses." },
    { q: "Est-ce que l'IA va remplacer des postes ?", a: "Non. Elle prend en charge ce qui mobilise du temps sans valeur ajoutée. Le tri, la relance, la saisie. Vos équipes font ce pour quoi elles ont été recrutées." },
    { q: "Est-ce compatible avec notre architecture existante ?", a: "Oui. Certure se connecte à vos outils actuels (ERP, messagerie, CRM, SIRH) sans dette technique supplémentaire. Aucune migration requise." },
    { q: "Par où on commence ?", a: "Par un diagnostic de 3 jours. On analyse vos outils, vos process, vos données. Vous repartez avec un rapport de maturité IA et une roadmap priorisée. Sans engagement." },
    { q: "Combien de temps avant de voir des résultats ?", a: "Les premiers gains sont visibles à la sixième semaine. Le diagnostic est livré en 3 jours. Le déploiement est opérationnel en 30 jours." },
    { q: "Et si mes équipes ne sont pas à l'aise avec la technologie ?", a: "C'est exactement pour ça que la formation fait partie de chaque mission. Elle est concrète, courte, et ancrée dans les outils que vos équipes utilisent déjà." }
  ];

  return (
    <section className="py-16 px-4">
      <div className="w-full">
        <div className="text-center mb-12">
          <div className="inline-flex items-center rounded-full border border-gray-200 bg-white/80 backdrop-blur-sm px-3 py-1 text-badge text-gray-500 mb-6 shadow-sm">Questions</div>
          <h2 className="text-gray-900">Ce que vous vous demandez vraiment.</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
          {faqs.map((faq, i) => (
            <div key={i} className="group">
              <h4 className="text-gray-900 mb-2 flex items-center gap-2">
                <span className="bg-gray-100 rounded-lg p-1 group-hover:bg-gray-200 transition-colors">
                  <ArrowRight className="text-gray-400 w-3 h-3" />
                </span>
                {faq.q}
              </h4>
              <p className="text-body-sm text-gray-500 pl-8">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const EventCallout = () => {
  return (
    <section className="py-24 px-4">
      <div className="bg-[#0f1115] rounded-[3rem] p-8 md:p-16 relative overflow-hidden border border-white/5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium mb-6">
              <Zap className="w-3 h-3" />
              Evènement exclusif
            </div>
            <h2 className="text-white mb-6">Dirigeants : et si votre entreprise était déjà <span className="text-blue-500 italic">en retard sur l’IA ?</span></h2>
            <p className="text-gray-400 text-lg mb-8">
              Rejoignez-nous le 18 mai à la CCI de Versailles pour une conférence concrète sur l'IA dans les PME. 160 places uniquement.
            </p>
            <div className="flex flex-wrap gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-blue-500" />
                18 mai 2026 à 19h
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-blue-500" />
                CCI Versailles
              </div>
            </div>
          </div>
          <Link to="/evenement" className="bg-white text-black px-10 py-5 rounded-full text-xl font-bold hover:bg-gray-100 transition-all transform hover:scale-105 flex items-center gap-3 shrink-0">
            Je réserve ma place
            <ArrowRight className="w-6 h-6" />
          </Link>
        </div>
      </div>
    </section>
  );
};

const Home = () => {
  return (
    <main className="md:p-6 lg:p-8 z-10 p-4 relative space-y-12">
      <Hero />
      <Clients />
      <Constat />
      <OffersOverview />
      <ThreeColumnGrid />
      <BentoSection />
      <Testimonials />
      <TeamSection />
      <EventCallout />
      <FAQ />
      <Footer />
    </main>
  );
};

export default Home;
