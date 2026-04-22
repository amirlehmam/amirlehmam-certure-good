import React from "react";
import { Link } from "react-router-dom";
import { CheckCircle2, ArrowRight, Calendar, MapPin } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Confirmation = () => {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <div className="bg-[#0a0a0b] text-white rounded-b-[3rem] pb-20">
        <Header variant="light" />
        
        <div className="max-w-4xl mx-auto px-6 pt-20 text-center">
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-blue-600/20 mb-8">
            <CheckCircle2 className="w-12 h-12 text-blue-500" />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-none mb-6">
            C'est confirmé. <br />
            <span className="text-blue-500 italic">À très vite !</span>
          </h1>
          
          <p className="text-xl text-gray-400 font-medium max-w-2xl mx-auto leading-relaxed">
            Votre inscription à l'evènement IA de Versailles a bien été enregistrée. Un mail de confirmation vient de vous être envoyé.
          </p>
        </div>
      </div>

      <div className="flex-1 max-w-4xl mx-auto w-full px-6 -mt-12 mb-20">
        <div className="bg-white border border-gray-100 shadow-2xl rounded-[2.5rem] p-8 md:p-12">
          <h3 className="text-2xl font-black text-gray-900 mb-8">Rappel des informations</h3>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center shrink-0">
                <Calendar className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="text-xs text-gray-400 font-black uppercase tracking-widest leading-none mb-2">Date & Heure</p>
                <p className="text-lg font-bold text-gray-900">Lundi 18 mai 2026</p>
                <p className="text-gray-500">18h30 — 21h30</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="text-xs text-gray-400 font-black uppercase tracking-widest leading-none mb-2">Lieu</p>
                <p className="text-lg font-bold text-gray-900">CCI Versailles</p>
                <p className="text-gray-500">21 avenue de Paris, Versailles</p>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row gap-4">
            <Link 
              to="/" 
              className="flex-1 flex items-center justify-center gap-3 bg-gray-900 text-white rounded-full py-4 font-black transition-all hover:bg-black"
            >
              Retour à l'accueil
            </Link>
            <Link 
              to="/services" 
              className="flex-1 flex items-center justify-center gap-3 bg-blue-600 text-white rounded-full py-4 font-black transition-all hover:bg-blue-700 shadow-xl shadow-blue-600/20"
            >
              Découvrir nos services
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
};

export default Confirmation;
