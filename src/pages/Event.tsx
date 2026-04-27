import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import { 
  Calendar, 
  MapPin, 
  Ticket, 
  Users, 
  CheckCircle2, 
  AlertTriangle, 
  Zap, 
  Brain, 
  Lightbulb, 
  Target, 
  Video, 
  Compass, 
  Rocket, 
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Clock,
  Presentation,
  ShieldCheck,
  Award,
  CircleDot,
  BarChart3,
  TrendingUp,
  Building2,
  CheckSquare,
  FileText,
  Activity
} from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const BrevoForm = () => {
  useEffect(() => {
    // Configuration des messages Brevo
    (window as any).REQUIRED_CODE_ERROR_MESSAGE = 'Veuillez choisir un code pays';
    (window as any).LOCALE = 'fr';
    (window as any).EMAIL_INVALID_MESSAGE = (window as any).SMS_INVALID_MESSAGE = "Les informations que vous avez fournies ne sont pas valides. Veuillez vérifier le format du champ et réessayer.";
    (window as any).REQUIRED_ERROR_MESSAGE = "Vous devez renseigner ce champ. ";
    (window as any).GENERIC_INVALID_MESSAGE = "Les informations que vous avez fournies ne sont pas valides. Veuillez vérifier le format du champ et réessayer.";
    (window as any).translation = {
      common: {
        selectedList: '{quantity} liste sélectionnée',
        selectedLists: '{quantity} listes sélectionnées',
        selectedOption: '{quantity} sélectionné',
        selectedOptions: '{quantity} sélectionnés',
      }
    };

    // Chargement du script Brevo
    const script = document.createElement("script");
    script.src = "https://sibforms.com/forms/end-form/build/main.js";
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="w-full">
      <style>{`
        @font-face {
          font-display: block;
          font-family: Roboto;
          src: url(https://assets.brevo.com/font/Roboto/Latin/normal/normal/7529907e9eaf8ebb5220c5f9850e3811.woff2) format("woff2"), url(https://assets.brevo.com/font/Roboto/Latin/normal/normal/25c678feafdc175a70922a116c9be3e7.woff) format("woff")
        }

        @font-face {
          font-display: fallback;
          font-family: Roboto;
          font-weight: 600;
          src: url(https://assets.brevo.com/font/Roboto/Latin/medium/normal/6e9caeeafb1f3491be3e32744bc30440.woff2) format("woff2"), url(https://assets.brevo.com/font/Roboto/Latin/medium/normal/71501f0d8d5aa95960f6475d5487d4c2.woff) format("woff")
        }

        @font-face {
          font-display: fallback;
          font-family: Roboto;
          font-weight: 700;
          src: url(https://assets.brevo.com/font/Roboto/Latin/bold/normal/3ef7cf158f310cf752d5ad08cd0e7e60.woff2) format("woff2"), url(https://assets.brevo.com/font/Roboto/Latin/bold/normal/ece3a1d82f18b60bcce0211725c476aa.woff) format("woff")
        }

        #sib-container input:-ms-input-placeholder {
          text-align: left;
          font-family: Helvetica, sans-serif;
          color: #999999;
        }

        #sib-container input::placeholder {
          text-align: left;
          font-family: Helvetica, sans-serif;
          color: #999999;
        }

        #sib-container textarea::placeholder {
          text-align: left;
          font-family: Helvetica, sans-serif;
          color: #999999;
        }

        #sib-container input.input {
          color: #000000 !important;
        }

        #sib-container a {
          text-decoration: underline;
          color: #2BB2FC;
        }
      `}</style>
      <link rel="stylesheet" href="https://sibforms.com/forms/end-form/build/sib-styles.css" />
      
      <div className="sib-form" style={{ textAlign: 'center', backgroundColor: 'transparent' }}>
        <div id="sib-form-container" className="sib-form-container">
          <div id="error-message" className="sib-form-message-panel" style={{ fontSize: '16px', textAlign: 'left', fontFamily: 'Helvetica, sans-serif', color: '#661d1d', backgroundColor: '#ffeded', borderRadius: '3px', borderColor: '#ff4949', maxWidth: '540px' }}>
            <div className="sib-form-message-panel__text sib-form-message-panel__text--center">
              <svg viewBox="0 0 512 512" className="sib-icon sib-notification__icon">
                <path d="M256 40c118.621 0 216 96.075 216 216 0 119.291-96.61 216-216 216-119.244 0-216-96.562-216-216 0-119.203 96.602-216 216-216m0-32C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm-11.49 120h22.979c6.823 0 12.274 5.682 11.99 12.5l-7 168c-.268 6.428-5.556 11.5-11.99 11.5h-8.979c-6.433 0-11.722-5.073-11.99-11.5l-7-168c-.283-6.818 5.167-12.5 11.99-12.5zM256 340c-15.464 0-28 12.536-28 28s12.536 28 28 28 28-12.536 28-28-12.536-28-28-28z" />
              </svg>
              <span className="sib-form-message-panel__inner-text">
                Nous n'avons pas pu confirmer votre inscription.
              </span>
            </div>
          </div>
          <div id="success-message" className="sib-form-message-panel" style={{ fontSize: '16px', textAlign: 'left', fontFamily: 'Helvetica, sans-serif', color: '#085229', backgroundColor: '#e7faf0', borderRadius: '3px', borderColor: '#13ce66', maxWidth: '540px' }}>
            <div className="sib-form-message-panel__text sib-form-message-panel__text--center">
              <svg viewBox="0 0 512 512" className="sib-icon sib-notification__icon">
                <path d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 464c-118.664 0-216-96.055-216-216 0-118.663 96.055-216 216-216 118.664 0 216 96.055 216 216 0 118.663-96.055 216-216 216zm141.63-274.961L217.15 376.071c-4.705 4.667-12.303 4.637-16.97-.068l-85.878-86.572c-4.667-4.705-4.637-12.303.068-16.97l8.52-8.451c4.705-4.667 12.303-4.637 16.97.068l68.976 69.533 163.441-162.13c4.705-4.667 12.303-4.637 16.97.068l8.451 8.52c4.668 4.705 4.637 12.303-.068 16.97z" />
              </svg>
              <span className="sib-form-message-panel__inner-text">
                Votre inscription est confirmée.
              </span>
            </div>
          </div>
          <div id="sib-container" className="sib-container--large sib-container--vertical" style={{ textAlign: 'center', backgroundColor: 'rgba(245,245,245,1)', maxWidth: '540px', borderRadius: '8px', borderWidth: '1px', borderColor: '#105ef7', borderStyle: 'solid', direction: 'ltr' }}>
            <form id="sib-form" method="POST" action="https://8edb9099.sibforms.com/serve/MUIFANpOGOYwxgMKdNyuJYO6_soF4Dcht7GVa5f8XerygRDKQVDVS-9DUwEMme0EZi1j7izY1XLWaq2dWx0nvQ9pf6QcKIamXDUp9aSSMoO648JGiMPzZyPndsuUZIa9VMXKI6HBWWAaaMX-KE-lH-PQIJA_eHaGjlf0_Mvw0q6zNFggF1fOGrgX7-Wjpyz1aeOym7hL0a_7wf0f" data-type="subscription">
              <div style={{ padding: '8px 0' }}>
                <div className="sib-form-block" style={{ fontSize: '32px', textAlign: 'left', fontWeight: '700', fontFamily: 'Helvetica, sans-serif', color: '#1c1d21', backgroundColor: 'transparent' }}>
                  <p>Réservez votre place</p>
                </div>
              </div>
              <div style={{ padding: '8px 0' }}>
                <div className="sib-form-block" style={{ fontSize: '16px', textAlign: 'left', fontFamily: 'Helvetica, sans-serif', color: '#3C4858', backgroundColor: 'transparent' }}>
                  <div className="sib-text-form-block">
                    <p>🕰️ Lundi 18 Mai à 19h&nbsp;</p>
                    <p>📍 21 Avenue de Paris, 78000 Versailles&nbsp;</p>
                  </div>
                </div>
              </div>
              <div style={{ padding: '8px 0' }}>
                <div className="sib-form-block" style={{ fontSize: '12px', textAlign: 'left', fontFamily: 'Helvetica, sans-serif', color: '#3C4858', backgroundColor: 'transparent' }}>
                  <div className="sib-text-form-block">
                    <p><em><strong>*Les places étant limitées, elles sont attribuées en priorité aux dirigeants d'entreprise. L’inscription est soumise à validation.</strong></em></p>
                  </div>
                </div>
              </div>
              <div style={{ padding: '8px 0' }}>
                <div className="sib-input sib-form-block">
                  <div className="form__entry entry_block">
                    <div className="form__label-row ">
                      <label className="entry__label" style={{ fontWeight: 700, textAlign: 'left', fontSize: '16px', fontFamily: 'Helvetica, sans-serif', color: '#3c4858' }} htmlFor="FIRSTNAME" data-required="*">Prénom</label>
                      <div className="entry__field">
                        <input className="input " maxLength={200} type="text" id="FIRSTNAME" name="FIRSTNAME" autoComplete="off" placeholder="Prénom" data-required="true" required />
                      </div>
                    </div>
                    <label className="entry__error entry__error--primary" style={{ fontSize: '16px', textAlign: 'left', fontFamily: 'Helvetica, sans-serif', color: '#661d1d', backgroundColor: '#ffeded', borderRadius: '3px', borderColor: '#ff4949' }}>
                    </label>
                  </div>
                </div>
              </div>
              <div style={{ padding: '8px 0' }}>
                <div className="sib-input sib-form-block">
                  <div className="form__entry entry_block">
                    <div className="form__label-row ">
                      <label className="entry__label" style={{ fontWeight: 700, textAlign: 'left', fontSize: '16px', fontFamily: 'Helvetica, sans-serif', color: '#3c4858' }} htmlFor="LASTNAME" data-required="*">Nom de famille</label>
                      <div className="entry__field">
                        <input className="input " maxLength={200} type="text" id="LASTNAME" name="LASTNAME" autoComplete="off" placeholder="Nom de famille" data-required="true" required />
                      </div>
                    </div>
                    <label className="entry__error entry__error--primary" style={{ fontSize: '16px', textAlign: 'left', fontFamily: 'Helvetica, sans-serif', color: '#661d1d', backgroundColor: '#ffeded', borderRadius: '3px', borderColor: '#ff4949' }}>
                    </label>
                  </div>
                </div>
              </div>
              <div style={{ padding: '8px 0' }}>
                <div className="sib-form-block sib-divider-form-block">
                  <div style={{ border: 0, borderBottom: '1px solid #E5EDF6' }}></div>
                </div>
              </div>
              <div style={{ padding: '8px 0' }}>
                <div className="sib-input sib-form-block">
                  <div className="form__entry entry_block">
                    <div className="form__label-row ">
                      <label className="entry__label" style={{ fontWeight: 700, textAlign: 'left', fontSize: '16px', fontFamily: 'Helvetica, sans-serif', color: '#3c4858' }} htmlFor="EMAIL" data-required="*">Adresse e-mail professionnelle</label>
                      <div className="entry__field">
                        <input className="input " type="text" id="EMAIL" name="EMAIL" autoComplete="off" placeholder="Adresse e-mail" data-required="true" required />
                      </div>
                    </div>
                    <label className="entry__error entry__error--primary" style={{ fontSize: '16px', textAlign: 'left', fontFamily: 'Helvetica, sans-serif', color: '#661d1d', backgroundColor: '#ffeded', borderRadius: '3px', borderColor: '#ff4949' }}>
                    </label>
                  </div>
                </div>
              </div>
              <div style={{ padding: '8px 0' }}>
                <div className="sib-form-block" style={{ fontSize: '10px', textAlign: 'left', fontFamily: 'Helvetica, sans-serif', color: '#3C4858', backgroundColor: 'transparent' }}>
                  <div className="sib-text-form-block">
                    <p><em><strong>Les informations sont collectées pour vérifier les inscriptions à l’entrée et faciliter le networking entre les participants.</strong></em></p>
                  </div>
                </div>
              </div>
              <div style={{ padding: '8px 0' }}>
                <div className="sib-form-block sib-divider-form-block">
                  <div style={{ border: 0, borderBottom: '1px solid #E5EDF6' }}></div>
                </div>
              </div>
              <div style={{ padding: '8px 0' }}>
                <div className="sib-form-block" style={{ textAlign: 'left' }}>
                  <button className="sib-form-block__button sib-form-block__button-with-loader" style={{ fontSize: '16px', textAlign: 'left', fontWeight: '700', fontFamily: 'Helvetica, sans-serif', color: '#FFFFFF', backgroundColor: '#105ef7', borderRadius: '8px', borderWidth: '0px' }} form="sib-form" type="submit">
                    <svg className="icon clickable__icon progress-indicator__icon sib-hide-loader-icon" viewBox="0 0 512 512">
                      <path d="M460.116 373.846l-20.823-12.022c-5.541-3.199-7.54-10.159-4.663-15.874 30.137-59.886 28.343-131.652-5.386-189.946-33.641-58.394-94.896-95.833-161.827-99.676C261.028 55.961 256 50.751 256 44.352V20.309c0-6.904 5.808-12.337 12.703-11.982 83.556 4.306 160.163 50.864 202.11 123.677 42.063 72.696 44.079 162.316 6.031 236.832-3.14 6.148-10.75 8.461-16.728 5.01z" />
                    </svg>
                    Je réserve ma place pour l'évènement
                  </button>
                </div>
              </div>

              <input type="text" name="email_address_check" value="" className="input--hidden" style={{ display: 'none' }} readOnly />
              <input type="hidden" name="locale" value="fr" />
              <input type="hidden" name="REDIRECTION_URL" value={window.location.origin + "/certure/evenement/confirmation"} />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div className="border-b border-white/10 py-6">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left group"
      >
        <h4 className="text-xl font-medium text-white group-hover:text-blue-400 transition-colors">{question}</h4>
        {isOpen ? <ChevronUp className="w-6 h-6 text-gray-400" /> : <ChevronDown className="w-6 h-6 text-gray-400" />}
      </button>
      {isOpen && (
        <motion.div 
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          className="mt-4 text-gray-400 leading-relaxed"
        >
          {answer}
        </motion.div>
      )}
    </div>
  );
};

const Event = () => {
  const scrollToForm = () => {
    document.getElementById('registration-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="z-10 relative bg-white min-h-screen text-gray-900 font-sans selection:bg-blue-500/30 overflow-x-hidden pb-12">
      {/* HERO SECTION */}
      <section className="relative lg:p-12 p-6 overflow-hidden rounded-b-[2.5rem] md:rounded-b-[4rem] bg-[#1a1d23] border-b border-white/5 shadow-2xl min-h-[700px] flex flex-col justify-between">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img 
            src="https://i.imgur.com/Yk0L9dS.png" 
            alt="Hero Background" 
            className="w-full h-full object-cover opacity-50 grayscale mix-blend-overlay"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/60 via-[#1a1d23]/80 to-[#1a1d23]"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px]"></div>
        </div>

        <Header variant="light" />

        <div className="z-10 w-full pt-32 md:pt-40 relative pb-12 text-center px-4 mt-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-white mb-6 text-4xl md:text-7xl font-black tracking-tight leading-[0.9]"
          >
            L’IA au service <br /> des <span className="text-blue-500 italic text-5xl md:text-8xl">TPE et PME</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed font-medium"
          >
            En 2 heures, assistez à des démonstrations concrètes et repartez avec les étapes pour lancer votre projet IA
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col items-center mb-12"
          >
            <div className="text-gray-100 font-bold space-y-1 text-lg md:text-xl text-left inline-block">
              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-blue-500 shrink-0" />
                <span>Lundi 18 mai à 18h30</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-blue-500 shrink-0" />
                <span>21 avenue de Paris, Versailles</span>
              </div>
              <div className="flex items-center gap-3">
                <Ticket className="w-5 h-5 text-blue-500 shrink-0" />
                <span>Gratuit, dans la limite des places disponibles</span>
              </div>
            </div>
          </motion.div>

          {/* CTA #1 */}
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.3 }}
          >
            <button 
              onClick={scrollToForm}
              className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-full text-xl md:text-2xl font-black transition-all transform hover:scale-105 shadow-2xl shadow-blue-600/30 flex items-center gap-3 mx-auto"
            >
              Je m'inscris gratuitement
              <ArrowRight className="w-6 h-6" />
            </button>
            <p className="mt-4 text-xs md:text-sm text-gray-400 font-bold uppercase tracking-widest flex items-center justify-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              Les places sont limitées
            </p>
            <div className="mt-8 flex flex-wrap justify-center items-center gap-x-8 gap-y-6 md:gap-10 transition-all duration-500 max-w-[280px] md:max-w-none mx-auto">
              <img src="https://i.imgur.com/SFJ8DSP.png" alt="CCI" className="h-8 md:h-10 object-contain brightness-100 shadow-sm" referrerPolicy="no-referrer" />
              <img src="https://i.imgur.com/tobsWmq.jpeg" alt="Bpifrance" className="h-8 md:h-10 object-contain rounded brightness-100 shadow-sm" referrerPolicy="no-referrer" />
              <img src="https://i.ibb.co/KjVHCQbs/MEDEF-Yvelines-LOGO-RVB-1.png" alt="MEDEF" className="h-8 md:h-10 object-contain brightness-100" referrerPolicy="no-referrer" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* RESTORED PROOF BLOCK (EVENT PHOTOS) */}
      <section className="py-16 md:py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center md:text-left">
          <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center mb-16">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-6xl font-black text-gray-900 leading-[0.9] tracking-tighter">
                Découvrez comment l’IA aide les PME et repartez avec une méthode pour la mettre en place.
              </h2>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-medium">
                Un évènement qui part de vos problématiques, avec des cas réels et une approche pratique et actionnable.
              </p>
              
              <div className="flex items-center gap-8 pt-4">
                <div className="flex flex-col">
                  <span className="text-4xl font-black text-blue-600">3</span>
                  <span className="text-xs text-gray-400 uppercase tracking-widest font-black">Evènements organisés</span>
                </div>
                <div className="h-10 w-px bg-gray-200"></div>
                <div className="flex flex-col">
                  <span className="text-4xl font-black text-blue-600">+450</span>
                  <span className="text-xs text-gray-400 uppercase tracking-widest font-black">dirigeants réunis</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                "https://i.imgur.com/NNkL0s4.jpeg",
                "https://i.imgur.com/ei9QeBb.jpeg",
                "https://i.imgur.com/RpReEdA.jpeg",
                "https://i.imgur.com/IwKG25g.jpeg"
              ].map((src, i) => (
                <div key={i} className="aspect-square rounded-[2rem] overflow-hidden border border-gray-100 shadow-xl relative group">
                  <img 
                    src={src} 
                    alt={`Édition précédente ${i + 1}`} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                    <span className="text-white text-[10px] uppercase tracking-widest font-black">Archives Certure</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* CTA #2 */}
          <div className="text-center">
            <button 
              onClick={scrollToForm}
              className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-full text-xl md:text-2xl font-black transition-all transform hover:scale-105 shadow-2xl shadow-blue-600/30 flex items-center justify-center gap-3 mx-auto"
            >
               S'inscrire à l'évènement
               <ArrowRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </section>

      {/* AI CONTENT BLOCK (REDESIGNED) */}
      <section className="relative py-16 md:py-24 bg-[#0a0a0b] overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/40 via-transparent to-transparent"></div>
        <div className="max-w-6xl mx-auto px-6 relative z-10 font-bold">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="space-y-16"
          >
            <h2 className="text-4xl md:text-6xl font-black text-white leading-[0.9] tracking-tighter text-center max-w-5xl mx-auto">
              +200 dirigeants réunis pour networker et prendre une longueur d’avance avec l’IA
            </h2>

            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center bg-white/5 p-8 md:p-12 rounded-[3.5rem] border border-white/10 backdrop-blur-sm">
              {/* LEFT: Speaker Info */}
              <div className="space-y-8 flex flex-col items-center lg:items-start text-center lg:text-left">
                <div className="space-y-4">
                  <p className="text-blue-500 font-black uppercase tracking-[0.2em] text-xs">Votre intervenant</p>
                  <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-[2.5rem] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                    <div className="relative aspect-square w-48 md:w-56 rounded-[2.5rem] overflow-hidden border-2 border-blue-500/20">
                      <img 
                        src="https://i.ibb.co/zH8SmGXT/1769535707491-1.jpg" 
                        alt="Rudy Thimothée" 
                        className="w-full h-full object-cover transition-all duration-500"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-2xl md:text-3xl font-black text-white">Rudy Thimothée</h3>
                  <p className="text-gray-400 font-bold">CTO et Directeur AI Humanskills</p>
                </div>

                <div className="space-y-4 w-full">
                  <p className="text-[10px] text-gray-400 font-black uppercase tracking-widest italic">Il les a accompagnés à déployer l’IA :</p>
                  <div className="bg-white/90 backdrop-blur-sm p-4 md:p-6 rounded-3xl flex flex-wrap justify-center lg:justify-start items-center gap-6 md:gap-8">
                    <img src="https://i.ibb.co/bgzvgNRs/L-Ore-al-logo-svg-1.png" alt="L'Oréal" className="h-4 md:h-5 object-contain" referrerPolicy="no-referrer" />
                    <img src="https://i.ibb.co/5Whghx5z/Air-Liquide-logo-France-2017-svg.png" alt="Air Liquide" className="h-4 md:h-5 object-contain" referrerPolicy="no-referrer" />
                    <img src="https://i.ibb.co/7dBZZhYX/Logo-Carrefour-2010-svg.png" alt="Carrefour" className="h-4 md:h-5 object-contain" referrerPolicy="no-referrer" />
                    <img src="https://i.ibb.co/9mT7Ykf1/Air-France-Logo-svg.png" alt="Air France" className="h-4 md:h-5 object-contain" referrerPolicy="no-referrer" />
                    <img src="https://i.ibb.co/Y4BgqCtL/bnp-paribas-logo.webp" alt="BNP Paribas" className="h-4 md:h-5 object-contain" referrerPolicy="no-referrer" />
                  </div>
                </div>
              </div>

              {/* RIGHT: Value Proposition */}
              <div className="space-y-8 flex flex-col items-center lg:items-start text-center lg:text-left">
                <p className="text-xl md:text-3xl text-gray-200 font-bold leading-tight italic">
                  "Rudy va vous expliquer comment l’IA transforme les PME à travers des cas concrets, des démos live, une méthode pratique et un plan d’action clair"
                </p>
                
                {/* CTA #3 */}
                <button 
                  onClick={scrollToForm}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-full text-xl md:text-2xl font-black transition-all transform hover:scale-105 shadow-2xl shadow-blue-600/30 flex items-center justify-center gap-3 w-fit mt-4"
                >
                  Bloquer ma place gratuite
                  <ArrowRight className="w-6 h-6" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* AGENDA & LOCATION SECTION */}
      <section className="py-16 md:py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 text-center md:text-left">
            {/* Planning Column */}
            <div className="space-y-10">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 text-[10px] font-black tracking-widest uppercase italic">
                  <Clock className="w-3 h-3" />
                  La soirée (18h30 à 21h30)
                </div>
                <h2 className="text-4xl md:text-6xl font-black text-gray-900 leading-[0.9] tracking-tighter">
                  Au programme de votre soirée.
                </h2>
              </div>
              
              <div className="relative pt-2">
                <div className="absolute left-[7px] top-6 bottom-6 w-[1px] bg-gray-200"></div>
                <div className="space-y-4">
                  {[
                    { time: "18h30", title: "Accueil des invités" },
                    { time: "19h00", title: "Début de la conférence atelier" },
                    { time: "20h00", title: "Échanges avec les partenaires" },
                    { time: "20h15", title: "Questions réponses" },
                    { time: "20h45", title: "Networking" },
                    { time: "21h30", title: "Fin de l’evènement" }
                  ].map((item, i) => (
                    <div key={i} className="relative flex items-center gap-6 group">
                      <div className="absolute left-[4px] top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-blue-600 z-10"></div>
                      <div className="flex items-center gap-6 pl-10 w-full transition-all">
                        <span className="text-sm font-black text-blue-600 whitespace-nowrap leading-none w-12">{item.time}</span>
                        <div className="flex-1 flex items-center justify-between gap-x-4 border-b border-gray-100 pb-2">
                          <h4 className="text-gray-900 font-bold text-sm leading-tight">{item.title}</h4>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Location & Photos Column */}
            <div className="space-y-10">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 text-[10px] font-black tracking-widest uppercase italic">
                  <MapPin className="w-3 h-3" />
                  Lieu
                </div>
                <div className="space-y-1">
                  <h3 className="text-2xl md:text-4xl font-black text-gray-900 tracking-tight leading-none">CCI Versailles/Yvelines</h3>
                  <p className="text-lg text-gray-500 font-bold italic">21 avenue de Paris, Versailles</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border border-gray-100">
                  <img 
                    src="https://i.ibb.co/2YdTLydx/image.jpg" 
                    alt="CCI Versailles Extérieur" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://i.imgur.com/Yk0L9dS.png';
                    }}
                  />
                </div>
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border border-gray-100">
                  <img 
                    src="https://i.ibb.co/tT2gLQ5p/image.jpg" 
                    alt="CCI Versailles Intérieur" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://i.imgur.com/RpReEdA.jpeg';
                    }}
                  />
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm font-bold text-red-600 bg-red-50 px-4 py-2 rounded-xl w-fit">
                <AlertTriangle className="w-4 h-4" />
                <span>Plus que 15 places disponibles</span>
              </div>
            </div>
          </div>
          
          {/* CTA #4 */}
          <div className="mt-12 text-center md:flex md:flex-col md:items-center">
            <button 
              onClick={scrollToForm}
              className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-full text-xl md:text-2xl font-black transition-all transform hover:scale-105 shadow-2xl shadow-blue-600/30 flex items-center justify-center gap-3 mx-auto md:w-fit"
            >
              Réserver ma place pour le 18 mai
              <ArrowRight className="w-6 h-6" />
            </button>
            <div className="mt-8 flex flex-col items-center">
              <p className="text-[10px] text-gray-400 font-black uppercase tracking-widest mb-4">Ils sont partenaires de l'evènement</p>
              <div className="flex justify-center items-center gap-6 md:gap-10">
                <img src="https://i.imgur.com/SFJ8DSP.png" alt="CCI" className="h-6 md:h-7 object-contain" referrerPolicy="no-referrer" />
                <img src="https://i.imgur.com/tobsWmq.jpeg" alt="Bpifrance" className="h-6 md:h-7 object-contain rounded" referrerPolicy="no-referrer" />
                <img src="https://i.ibb.co/KjVHCQbs/MEDEF-Yvelines-LOGO-RVB-1.png" alt="MEDEF" className="h-6 md:h-7 object-contain" referrerPolicy="no-referrer" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PARTICIPANT PACK (GIFT CARDS) */}
      <section className="py-16 md:py-24 px-4 md:px-6 bg-[#0a0a0b] relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
        <div className="max-w-6xl mx-auto font-bold">
          <div className="text-center mb-12 md:mb-20">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-[0.9]">
              Chaque dirigeant repart avec :
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-4 md:gap-12">
            {[
              { 
                title: "Un cas d'usage IA", 
                desc: "Défini à partir de vos propres besoins et problématiques métiers.", 
                accent: "bg-blue-500"
              },
              { 
                title: "Une démarche concrète", 
                desc: "Une méthodologie étape par étape pour lancer un projet IA dans votre entreprise.", 
                accent: "bg-purple-500"
              },
              { 
                title: "Un diagnostic offert", 
                desc: "Une évaluation complète de votre maturité IA pour prioriser vos actions.", 
                highlight: true,
                accent: "bg-white"
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className={`p-8 md:p-12 rounded-[2rem] md:rounded-[3.5rem] relative flex flex-col items-center justify-center text-center transition-all duration-500 hover:scale-[1.02] border ${
                  item.highlight 
                  ? 'bg-blue-600 border-blue-400 shadow-[0_20px_80px_rgba(37,99,235,0.35)] z-10' 
                  : 'bg-white/5 border-white/10'
                }`}
              >
                <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-24 h-1 rounded-full ${item.accent} opacity-50`}></div>
                
                {item.highlight && (
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-white text-blue-600 px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest shadow-xl">
                    Offert
                  </div>
                )}
                
                <h4 className="text-xl md:text-3xl font-black mb-4 md:mb-6 text-white leading-tight">
                  {item.title}
                </h4>
                <p className={`text-base md:text-xl font-medium leading-relaxed ${item.highlight ? 'text-white/90' : 'text-gray-400'}`}>
                  {item.desc}
                </p>
                
                <div className={`mt-6 md:mt-8 flex items-center justify-center gap-2 ${item.highlight ? 'text-white/40' : 'text-blue-500/40'}`}>
                  <div className="w-1.5 h-1.5 rounded-full bg-current"></div>
                  <div className="w-8 h-[1px] bg-current"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-current"></div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* CTA #5 */}
          <div className="mt-12 md:mt-20 text-center">
            <motion.button 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              onClick={scrollToForm}
              className="group relative inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 md:px-12 md:py-6 rounded-full text-xl md:text-2xl font-black transition-all hover:scale-105 hover:shadow-[0_0_50px_rgba(37,99,235,0.4)]"
            >
              M'inscrire à la soirée
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </motion.button>
            <p className="mt-4 text-gray-500 font-bold italic text-sm italic uppercase tracking-widest">Places limitées</p>
          </div>
        </div>
      </section>

      {/* ACCESSIBILITY & INFO */}
      <section className="pt-20 md:pt-32 pb-0 px-2 md:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gray-900 border border-white/10 px-4 py-8 md:p-16 rounded-[2rem] md:rounded-[4rem] shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 blur-[100px] -mr-48 -mt-48"></div>
            
            <div className="relative z-10 text-center mb-10 md:mb-16">
              <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-blue-600 text-white text-[10px] md:text-sm font-black tracking-[0.2em] uppercase mb-6 md:mb-8 shadow-xl shadow-blue-600/20">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                </span>
                Le rendez-vous IA incontournable du 78
              </div>
              <h2 className="text-3xl md:text-6xl font-black tracking-tight text-white leading-none">
                Accès et Informations
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start relative z-10">
              <div className="space-y-6 md:space-y-8">
                <div className="bg-white/5 border border-white/10 p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] space-y-6">
                  <div className="flex items-start gap-4 md:gap-5">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-blue-600 flex items-center justify-center shrink-0">
                      <MapPin className="text-white w-5 h-5 md:w-6 md:h-6" />
                    </div>
                    <div className="space-y-1 md:space-y-2">
                      <p className="text-gray-500 font-bold uppercase tracking-widest text-[9px] md:text-xs">Lieu de l’evènement</p>
                      <p className="text-lg md:text-2xl text-white font-black leading-tight">
                        21 avenue de Paris, <br />78000 Versailles
                      </p>
                    </div>
                  </div>

                  <div className="relative aspect-[16/9] rounded-2xl md:rounded-3xl overflow-hidden group">
                    <img 
                      src="https://i.ibb.co/gZmr9RVt/initial-gallerie-histoire-versailles.jpg" 
                      alt="Château de Versailles" 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                    <div className="absolute bottom-3 left-4 md:bottom-4 md:left-6">
                      <p className="text-white font-black text-[10px] md:text-sm flex items-center gap-2">
                        <MapPin className="w-3 h-3 md:w-4 md:h-4 text-blue-500" />
                        À 2mn du Château de Versailles
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-gray-500 text-[10px] md:text-sm font-bold bg-white/5 px-3 py-1.5 rounded-lg w-fit">
                    <CheckCircle2 className="w-3 h-3 md:w-4 md:h-4" />
                    Accessible PMR
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-gray-500 font-bold uppercase tracking-widest text-[10px] mb-4 text-center lg:text-left">Venir en transport en commun</p>
                <div className="grid gap-2 md:gap-3">
                  {[
                    { type: "RER", line: "C", icon: "https://i.ibb.co/WW8771K9/images-6.png", station: "Versailles Château RG", dur: "8-10 min" },
                    { type: "RER", line: "C", icon: "https://i.ibb.co/WW8771K9/images-6.png", station: "Versailles Chantiers", dur: "15 min" },
                    { type: "Ligne", line: "L", icon: "https://i.ibb.co/TqHXwswH/images-4.png", station: "Versailles Rive Droite", dur: "15 min" },
                    { type: "Ligne", line: "N", icon: "https://i.ibb.co/zT2JbtV4/Paris-transit-icons-Train-N.jpg", station: "Versailles Chantiers", dur: "15 min" },
                    { type: "Ligne", line: "U", icon: "https://i.ibb.co/S73tKV6v/images-5.png", station: "Versailles Chantiers", dur: "15 min" }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between p-3 md:p-4 bg-white/5 rounded-xl md:rounded-2xl border border-white/5 hover:bg-white/10 transition-all group">
                      <div className="flex items-center gap-3 md:gap-4">
                        <img src={item.icon} alt={item.line} className="w-8 h-8 md:w-10 md:h-10 object-contain rounded-lg" referrerPolicy="no-referrer" />
                        <div className="flex flex-col">
                          <span className="text-white text-sm md:text-lg font-black leading-tight">{item.station}</span>
                          <span className="text-gray-500 text-[8px] md:text-xs font-bold uppercase tracking-widest">{item.type} {item.line}</span>
                        </div>
                      </div>
                      <span className="text-blue-400 text-[10px] md:text-sm font-black whitespace-nowrap bg-blue-400/10 px-2 py-1 md:px-3 md:py-1 rounded-full">{item.dur}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PARTNERS (CREDIBILITY) */}
      <section className="pb-20 pt-4 px-6 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-gray-900 text-sm md:text-lg font-black tracking-widest mb-10 uppercase">Co-organisé par les acteurs majeurs du 78</p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20">
            <img src="https://i.imgur.com/SFJ8DSP.png" alt="CCI Versailles" className="h-12 md:h-16 object-contain" referrerPolicy="no-referrer" />
            <img src="https://i.imgur.com/tobsWmq.jpeg" alt="Bpifrance" className="h-12 md:h-16 object-contain rounded" referrerPolicy="no-referrer" />
            <img src="https://i.ibb.co/KjVHCQbs/MEDEF-Yvelines-LOGO-RVB-1.png" alt="MEDEF Yvelines" className="h-14 md:h-20 object-contain bg-gray-50 p-3 rounded-xl" referrerPolicy="no-referrer" />
          </div>
        </div>
      </section>

      {/* FORM SECTION */}
      <section id="registration-form" className="py-16 md:py-24 px-6 bg-[#0f1115] text-white">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter leading-[0.9] text-white">
            Les places partent vite. <br className="hidden md:block" /> Bloquez la vôtre.
          </h2>
          <p className="text-lg md:text-xl text-blue-500 font-bold max-w-2xl mx-auto mb-8">
            L’inscription est gratuite mais soumise à validation (Places limitées).
          </p>
        </div>
        <div className="max-w-3xl mx-auto text-left">
          <BrevoForm />
        </div>
      </section>

      {/* FINAL CALL TO ACTION */}
      <section className="py-16 md:py-32 px-6 relative overflow-hidden bg-white">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-black mb-12 tracking-tighter leading-[0.85] text-gray-900 max-w-4xl mx-auto italic uppercase">
            L'evènement IA incontournable à Versailles.
          </h2>
          
          <button 
            onClick={scrollToForm}
            className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 md:px-12 md:py-6 rounded-full text-xl md:text-2xl font-black transition-all transform hover:scale-105 shadow-2xl shadow-blue-600/30 flex items-center justify-center gap-3 mx-auto"
          >
            S'inscrire à l'evènement (Gratuit)
            <ArrowRight className="w-6 h-6 hidden md:block" />
          </button>
          <p className="mt-8 text-blue-600 font-black uppercase tracking-[0.2em] text-sm animate-pulse">Lundi 18 mai, 18h30 à Versailles</p>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Event;
