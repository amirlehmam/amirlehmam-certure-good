import React from "react";
import { Link } from "react-router-dom";
import { Linkedin, Cpu, ArrowRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="mt-8 w-full bg-[#050505] rounded-[2.5rem] overflow-hidden relative shadow-2xl border border-white/5">
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#1e3a8a]/10 rounded-full blur-[120px] pointer-events-none -translate-x-1/3 translate-y-1/3"></div>
      
      <div className="px-8 md:px-16 pt-16 pb-16 grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10">
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
              <li><Link to="/services#service-2" className="hover:text-[#2D5CF3] transition-colors font-sans">Audit IA</Link></li>
              <li><Link to="/services#service-4" className="hover:text-[#2D5CF3] transition-colors font-sans">Coaching Dirigeant</Link></li>
              <li><Link to="/services#service-1" className="hover:text-[#2D5CF3] transition-colors font-sans">Formation IA</Link></li>
              <li><Link to="/services#service-3" className="hover:text-[#2D5CF3] transition-colors font-sans">Prestations sur-mesure</Link></li>
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
