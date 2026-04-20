import React from "react";
import { Link } from "react-router-dom";
import { Linkedin, Cpu, ArrowRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="mt-8 w-full bg-[#050505] rounded-[2.5rem] overflow-hidden relative shadow-2xl border border-white/5">
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#1e3a8a]/10 rounded-full blur-[120px] pointer-events-none -translate-x-1/3 translate-y-1/3"></div>
      <div className="z-10 text-center pt-24 pr-8 pb-16 pl-8 relative">
        <div className="mx-auto w-20 h-20 bg-[#1e3a8a]/20 rounded-2xl flex items-center justify-center mb-8 border border-[#2D5CF3]/20 shadow-[0_0_40px_rgba(45,92,243,0.15)] backdrop-blur-sm">
          <div className="w-12 h-12 bg-[#2D5CF3]/10 rounded-lg flex items-center justify-center border border-[#2D5CF3]/30">
            <Cpu className="text-[#2D5CF3] text-2xl drop-shadow-[0_0_8px_rgba(45,92,243,0.5)]" />
          </div>
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl text-white mb-6 font-jakarta font-medium tracking-tighter">Vos outils sont prêts.<br /><span className="text-gray-400">Êtes-vous prêt ?</span></h2>
        <p className="text-gray-400 text-lg mb-10 max-w-lg mx-auto leading-relaxed font-sans">Un diagnostic suffit pour savoir exactement quoi automatiser et combien vous allez récupérer.</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="https://calendly.com/whondydrouode/30min" target="_blank" rel="noopener noreferrer" className="hover:brightness-110 transition-all flex gap-2 text-white font-sans bg-gradient-to-b from-[#2D5CF3] to-[#1e3a8a] border-[#2D5CF3]/20 border rounded-full pt-3 pr-8 pb-3 pl-8 shadow-[0_0_25px_rgba(45,92,243,0.2)] items-center">
            Réserver mon diagnostic <ArrowRight className="w-5 h-5" />
          </a>
          <Link to="/services" className="px-8 py-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all font-sans">Voir nos offres</Link>
        </div>
      </div>
      <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent w-full my-8 opacity-50"></div>
      <div className="px-8 md:px-16 pb-16 grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10">
        <div className="lg:col-span-5 space-y-6">
          <h3 className="text-3xl text-white font-jakarta font-medium tracking-tighter">Certure<span className="text-[#2D5CF3]">.</span></h3>
          <p className="text-gray-500 text-sm leading-relaxed max-w-sm font-sans">L'IA dans vos outils. Des résultats dès le premier mois.</p>
          <div className="flex gap-4 pt-2">
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors text-gray-400 hover:text-white border border-white/5">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
        <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8 lg:pl-12">
          <div className="space-y-6">
            <h4 className="text-white font-sans">Nos Offres</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li><a href="#" className="hover:text-[#2D5CF3] transition-colors font-sans">Diagnostic IA</a></li>
              <li><a href="#" className="hover:text-[#2D5CF3] transition-colors font-sans">Formation</a></li>
              <li><a href="#" className="hover:text-[#2D5CF3] transition-colors font-sans">Déploiement</a></li>
            </ul>
          </div>
          <div className="space-y-6">
            <h4 className="text-white font-sans">Entreprise</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li><a href="#" className="hover:text-[#2D5CF3] transition-colors font-sans">Notre équipe</a></li>
              <li><Link to="/evenement" className="hover:text-[#2D5CF3] transition-colors font-sans">Événement</Link></li>
              <li><a href="#" className="hover:text-[#2D5CF3] transition-colors font-sans">Contact</a></li>
            </ul>
          </div>
          <div className="space-y-6 hidden sm:block">
            <h4 className="text-white font-sans">Ressources</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li><a href="mailto:contact@certure.fr" className="hover:text-[#2D5CF3] transition-colors font-sans">contact@certure.fr</a></li>
              <li><a href="https://calendly.com/whondydrouode/30min" target="_blank" rel="noopener noreferrer" className="hover:text-[#2D5CF3] transition-colors font-sans">Prendre RDV</a></li>
              <li><a href="#" className="hover:text-[#2D5CF3] transition-colors font-sans">certure.fr</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-white/5 py-6 px-8 md:px-16 text-center lg:text-left text-xs text-gray-600 font-sans relative z-10">
        © 2026 Certure · Mentions légales
      </div>
    </footer>
  );
};

export default Footer;
