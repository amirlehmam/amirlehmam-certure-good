import React from "react";
import { Wordmark } from "../ui/Wordmark";
import { Badge } from "../ui/Badge";

export default function Footer() {
  return (
    <footer className="bg-bg-secondary pt-24 pb-12 border-t border-border-default">
      <div className="max-w-[1120px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          <div className="space-y-6">
            <Wordmark />
            <a 
              href="https://drive.google.com/file/d/1AbYNyA39ifObir4XwD66UXTkzK_4SUHZ/view?usp=sharing" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-white p-2 rounded-lg border border-border-default hover:shadow-md transition-shadow"
            >
              <img 
                src="https://franchise.tempeos.com/wp-content/uploads/sites/3/2023/06/qualiopi-tempeos_logo.png" 
                alt="Certifié Qualiopi" 
                className="h-16 w-auto object-contain"
                referrerPolicy="no-referrer"
              />
            </a>
            <p className="text-sm text-text-secondary leading-relaxed">
              L'IA au service des PME françaises.<br />
              Audit, formation, intégration.
            </p>
          </div>
          
          <div className="space-y-6">
            <h4 className="text-xs uppercase tracking-wider font-bold text-text-title">Nos offres</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-text-secondary hover:text-blue transition-colors">Audit IA</a></li>
              <li><a href="#" className="text-sm text-text-secondary hover:text-blue transition-colors">Formation équipes</a></li>
              <li><a href="#" className="text-sm text-text-secondary hover:text-blue transition-colors">Coaching dirigeant</a></li>
              <li><a href="#" className="text-sm text-text-secondary hover:text-blue transition-colors">Développement IA</a></li>
            </ul>
          </div>
          
          <div className="space-y-6">
            <h4 className="text-xs uppercase tracking-wider font-bold text-text-title">Entreprise</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-text-secondary hover:text-blue transition-colors">Notre équipe</a></li>
              <li><a href="#" className="text-sm text-text-secondary hover:text-blue transition-colors">Études de cas</a></li>
              <li><a href="#" className="text-sm text-text-secondary hover:text-blue transition-colors">Événements</a></li>
              <li><a href="#" className="text-sm text-text-secondary hover:text-blue transition-colors">Blog</a></li>
            </ul>
          </div>
          
          <div className="space-y-6">
            <h4 className="text-xs uppercase tracking-wider font-bold text-text-title">Contact</h4>
            <ul className="space-y-3">
              <li><a href="https://calendly.com/whondydrouode/30min" className="text-sm text-text-secondary hover:text-blue transition-colors font-semibold">Prendre rendez-vous gratuitement</a></li>
              <li><a href="mailto:contact@certure.fr" className="text-sm text-text-secondary hover:text-blue transition-colors">contact@certure.fr</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-12 border-t border-border-subtle flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-[10px] text-text-tertiary uppercase tracking-wider">
            © 2026 Certure · SAS au capital de 100 € · RCS Versailles 920 302 346
          </div>
          <div className="flex gap-8">
            <a href="#" className="text-[10px] text-text-tertiary uppercase tracking-wider hover:text-blue transition-colors">Mentions légales</a>
            <a href="#" className="text-[10px] text-text-tertiary uppercase tracking-wider hover:text-blue transition-colors">CGV</a>
            <a href="#" className="text-[10px] text-text-tertiary uppercase tracking-wider hover:text-blue transition-colors">RGPD</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
