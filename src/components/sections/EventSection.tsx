import React from "react";
import { Button } from "../ui/Button";

export default function EventSection() {
  return (
    <section className="py-24 bg-bg-dark text-white">
      <div className="max-w-[1120px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-white/50 mb-6">
               ÉVÉNEMENT · 18 MAI · CCI VERSAILLES
            </div>
            <h2 className="text-3xl md:text-5xl font-heavy leading-tight text-white mb-8 tracking-tight">
               Dirigeants : et si votre entreprise était déjà en retard sur l'IA ?
            </h2>
            <p className="text-lg text-white/70 leading-relaxed max-w-[500px] mb-10">
               En 90 minutes, identifiez les 3 leviers IA les plus rentables pour votre PME. Sans jargon. Avec MEDEF 78, Bpifrance et la CCI Versailles.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-8">
              <Button variant="on-dark" href="/evenement">
                Je réserve ma place →
              </Button>
              <div className="text-xs text-white/50 font-medium">Libre à 30 participants · gratuit · certification Qualiopi</div>
            </div>
          </div>
          
          <div className="relative group">
            <div className="aspect-[16/10] bg-bg-dark-soft rounded-lg overflow-hidden border border-white/10 flex items-center justify-center p-12 text-center text-xs text-white/30 uppercase tracking-[0.2em] font-medium">
               Image Événement
            </div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue/10 rounded-full blur-3xl pointer-events-none"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
