import React from "react";
import { Link } from "react-router-dom";
import { Wordmark } from "../ui/Wordmark";
import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";

export default function Footer() {
  return (
    <footer className="bg-bg-secondary pt-24 pb-12 border-t border-border">
      <div className="max-w-[1200px] mx-auto px-4 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mb-24">
          <div className="space-y-4">
            <Wordmark />
            <p className="text-[14px] text-text-secondary leading-relaxed font-light max-w-xs">
              L'IA au service des TPE et PME françaises. <br />
              Audit, formation, développement de solutions.
            </p>
          </div>
          
          <div className="space-y-6">
            <h4 className="text-[11px] font-bold text-text-primary uppercase tracking-widest">Navigation</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="text-[14px] text-text-secondary hover:text-text-primary transition-colors font-light">Accueil</Link></li>
              <li><a href="/#offres" className="text-[14px] text-text-secondary hover:text-text-primary transition-colors font-light">Nos Offres</a></li>
              <li><Link to="/formations" className="text-[14px] text-text-secondary hover:text-text-primary transition-colors font-light">Nos Formations</Link></li>
              <li><a href="/#equipe" className="text-[14px] text-text-secondary hover:text-text-primary transition-colors font-light">L'Équipe</a></li>
            </ul>
          </div>
          
          <div className="space-y-6">
            <h4 className="text-[11px] font-bold text-text-primary uppercase tracking-widest">Contact</h4>
            <ul className="space-y-3">
              <li><a href="https://calendly.com/whondydrouode/30min" className="text-[14px] text-blue hover:opacity-80 transition-opacity font-medium">Réserver un diagnostic</a></li>
              <li><a href="mailto:olivier@certure.fr" className="text-[14px] text-text-secondary hover:text-text-primary transition-colors font-light">olivier@certure.fr</a></li>
            </ul>
          </div>
        </div>

        <div className="mb-24 p-8 bg-white border border-border flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-8">
            <img 
              src="https://franchise.tempeos.com/wp-content/uploads/sites/3/2023/06/qualiopi-tempeos_logo.png" 
              alt="Certifié Qualiopi" 
              className="h-20 w-auto object-contain"
              loading="lazy"
            />
            <div className="hidden md:block text-left">
              <p className="text-[14px] font-semibold text-text-primary uppercase tracking-wider">Certifié Qualiopi</p>
              <p className="text-[12px] text-text-tertiary">La certification qualité a été délivrée au titre de l'action de formation.</p>
            </div>
          </div>
          <Button 
            variant="secondary" 
            className="text-[11px] px-8" 
            href="https://drive.google.com/file/d/1AbYNyA39ifObir4XwD66UXTkzK_4SUHZ/view?usp=sharing"
          >
            Consulter le certificat
          </Button>
        </div>
        
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-[11px] text-text-tertiary font-light tracking-wide">
            © 2026 Certure · SAS au capital de 100 € · RCS Versailles 920 302 346
          </div>
          <div className="flex gap-8">
            <a href="#" className="text-[11px] text-text-tertiary hover:text-text-primary transition-colors font-light">Mentions légales</a>
            <a href="#" className="text-[11px] text-text-tertiary hover:text-text-primary transition-colors font-light">Paramètres de confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
