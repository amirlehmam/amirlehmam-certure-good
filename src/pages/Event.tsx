import React, { useEffect } from "react";
import { motion } from "motion/react";
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
    const win = window as any;
    win.REQUIRED_CODE_ERROR_MESSAGE = 'Veuillez choisir un code pays';
    win.LOCALE = 'fr';
    win.EMAIL_INVALID_MESSAGE = win.SMS_INVALID_MESSAGE = "Les informations que vous avez fournies ne sont pas valides. Veuillez vérifier le format du champ et réessayer.";
    win.REQUIRED_ERROR_MESSAGE = "Vous devez renseigner ce champ. ";
    win.GENERIC_INVALID_MESSAGE = "Les informations que vous avez fournies ne sont pas valides. Veuillez vérifier le format du champ et réessayer.";
    win.translation = {
      common: {
        selectedList: '{quantity} liste sélectionnée',
        selectedLists: '{quantity} listes sélectionnées',
        selectedOption: '{quantity} sélectionné',
        selectedOptions: '{quantity} sélectionnés',
      }
    };
    win.AUTOHIDE = false;

    const script = document.createElement('script');
    script.src = "https://sibforms.com/forms/end-form/build/main.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="w-full max-w-2xl mx-auto my-12">
      <style dangerouslySetInnerHTML={{ __html: `
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
        #sib-container input:-ms-input-placeholder { text-align: left; font-family: Helvetica, sans-serif; color: #c0ccda; }
        #sib-container input::placeholder { text-align: left; font-family: Helvetica, sans-serif; color: #c0ccda; }
        #sib-container textarea::placeholder { text-align: left; font-family: Helvetica, sans-serif; color: #c0ccda; }
        #sib-container a { text-decoration: underline; color: #2BB2FC; }
      `}} />
      <link rel="stylesheet" href="https://sibforms.com/forms/end-form/build/sib-styles.css" />

      <div className="sib-form" style={{ textAlign: 'center', backgroundColor: 'transparent' }}>
        <div id="sib-form-container" className="sib-form-container">
          <div id="error-message" className="sib-form-message-panel" style={{ fontSize: '16px', textAlign: 'left', fontFamily: 'Helvetica, sans-serif', color: '#661d1d', backgroundColor: '#ffeded', borderRadius: '3px', borderColor: '#ff4949', maxWidth: '540px', margin: '0 auto', display: 'none' }}>
            <div className="sib-form-message-panel__text sib-form-message-panel__text--center">
              <svg viewBox="0 0 512 512" className="sib-icon sib-notification__icon">
                <path d="M256 40c118.621 0 216 96.075 216 216 0 119.291-96.61 216-216 216-119.244 0-216-96.562-216-216 0-119.203 96.602-216 216-216m0-32C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm-11.49 120h22.979c6.823 0 12.274 5.682 11.99 12.5l-7 168c-.268 6.428-5.556 11.5-11.99 11.5h-8.979c-6.433 0-11.722-5.073-11.99-11.5l-7-168c-.283-6.818 5.167-12.5 11.99-12.5zM256 340c-15.464 0-28 12.536-28 28s12.536 28 28 28 28-12.536 28-28-12.536-28-28-28z" />
              </svg>
              <span className="sib-form-message-panel__inner-text">Nous n'avons pas pu confirmer votre inscription.</span>
            </div>
          </div>
          <div id="success-message" className="sib-form-message-panel" style={{ fontSize: '16px', textAlign: 'left', fontFamily: 'Helvetica, sans-serif', color: '#085229', backgroundColor: '#e7faf0', borderRadius: '3px', borderColor: '#13ce66', maxWidth: '540px', margin: '0 auto', display: 'none' }}>
            <div className="sib-form-message-panel__text sib-form-message-panel__text--center">
              <svg viewBox="0 0 512 512" className="sib-icon sib-notification__icon">
                <path d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 464c-118.664 0-216-96.055-216-216 0-118.663 96.055-216 216-216 118.664 0 216 96.055 216 216 0 118.663-96.055 216-216 216zm141.63-274.961L217.15 376.071c-4.705 4.667-12.303 4.637-16.97-.068l-85.878-86.572c-4.667-4.705-4.637-12.303.068-16.97l8.52-8.451c4.705-4.667 12.303-4.637 16.97.068l68.976 69.533 163.441-162.13c4.705-4.667 12.303-4.637 16.97.068l8.451 8.52c4.668 4.705 4.637 12.303-.068 16.97z" />
              </svg>
              <span className="sib-form-message-panel__inner-text">Votre inscription est confirmée.</span>
            </div>
          </div>

          <div id="sib-container" className="sib-container--large sib-container--vertical" style={{ textAlign: 'center', backgroundColor: 'rgba(245,245,245,1)', maxWidth: '540px', borderRadius: '8px', borderWidth: '1px', borderColor: '#105ef7', borderStyle: 'solid', direction: 'ltr', margin: '0 auto' }}>
            <form id="sib-form" method="POST" action="https://8edb9099.sibforms.com/serve/MUIFANpOGOYwxgMKdNyuJYO6_soF4Dcht7GVa5f8XerygRDKQVDVS-9DUwEMme0EZi1j7izY1XLWaq2dWx0nvQ9pf6QcKIamXDUp9aSSMoO648JGiMPzZyPndsuUZIa9VMXKI6HBWWAaaMX-KE-lH-PQIJA_eHaGjlf0_Mvw0q6zNFggF1fOGrgX7-Wjpyz1aeOym7hL0a_7wf0f" data-type="subscription">
              <div style={{ padding: '8px 0' }}>
                <div className="sib-form-block" style={{ fontSize: '32px', textAlign: 'left', fontWeight: 700, fontFamily: 'Helvetica, sans-serif', color: '#1c1d21', backgroundColor: 'transparent' }}>
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
                    <label className="entry__error entry__error--primary" style={{ fontSize: '16px', textAlign: 'left', fontFamily: 'Helvetica, sans-serif', color: '#661d1d', backgroundColor: '#ffeded', borderRadius: '3px', borderColor: '#ff4949' }}></label>
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
                    <label className="entry__error entry__error--primary" style={{ fontSize: '16px', textAlign: 'left', fontFamily: 'Helvetica, sans-serif', color: '#661d1d', backgroundColor: '#ffeded', borderRadius: '3px', borderColor: '#ff4949' }}></label>
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
                    <label className="entry__error entry__error--primary" style={{ fontSize: '16px', textAlign: 'left', fontFamily: 'Helvetica, sans-serif', color: '#661d1d', backgroundColor: '#ffeded', borderRadius: '3px', borderColor: '#ff4949' }}></label>
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
                  <button className="sib-form-block__button sib-form-block__button-with-loader" style={{ fontSize: '16px', textAlign: 'left', fontWeight: 700, fontFamily: 'Helvetica, sans-serif', color: '#FFFFFF', backgroundColor: '#105ef7', borderRadius: '8px', borderWidth: '0px' }} form="sib-form" type="submit">
                    <svg className="icon clickable__icon progress-indicator__icon sib-hide-loader-icon" viewBox="0 0 512 512">
                      <path d="M460.116 373.846l-20.823-12.022c-5.541-3.199-7.54-10.159-4.663-15.874 30.137-59.886 28.343-131.652-5.386-189.946-33.641-58.394-94.896-95.833-161.827-99.676C261.028 55.961 256 50.751 256 44.352V20.309c0-6.904 5.808-12.337 12.703-11.982 83.556 4.306 160.163 50.864 202.11 123.677 42.063 72.696 44.079 162.316 6.031 236.832-3.14 6.148-10.75 8.461-16.728 5.01z" />
                    </svg>
                    Je réserve ma place pour l'évènement
                  </button>
                </div>
              </div>

              <input type="text" name="email_address_check" defaultValue="" className="input--hidden" style={{ display: 'none' }} />
              <input type="hidden" name="locale" value="fr" />
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
    <main className="z-10 relative space-y-24 bg-[#0a0a0b] min-h-screen text-white font-sans selection:bg-blue-500/30 overflow-x-hidden pb-24">
      {/* MOBILE STICKY CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-[60] p-4 md:hidden">
        <button 
          onClick={scrollToForm}
          className="w-full bg-blue-600 text-white py-4 rounded-xl font-black text-lg shadow-[0_-10px_40px_rgba(37,99,235,0.3)] backdrop-blur-md"
        >
          Réserver ma place gratuite
        </button>
      </div>

      {/* HERO SECTION */}
      <section className="relative lg:p-12 p-8 overflow-hidden rounded-[2.5rem] bg-[#1a1d23] border border-white/5 shadow-2xl min-h-[650px] flex flex-col">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img 
            src="https://i.imgur.com/Yk0L9dS.png" 
            alt="Hero Background" 
            className="w-full h-full object-cover opacity-30 grayscale"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/40 via-[#1a1d23]/70 to-[#1a1d23]"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px]"></div>
        </div>

        <Header variant="light" />

        <div className="z-10 w-full mt-auto pt-20 md:pt-32 relative pb-12 text-center px-4">
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
              className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-full text-xl font-black transition-all transform hover:scale-105 shadow-2xl shadow-blue-600/30 flex items-center gap-3 mx-auto"
            >
              Je m'inscris gratuitement
              <ArrowRight className="w-6 h-6" />
            </button>
            <p className="mt-4 text-xs md:text-sm text-gray-400 font-bold uppercase tracking-widest flex items-center justify-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              Places limitées (160 disponibles)
            </p>
            <div className="mt-8 flex justify-center items-center gap-6 md:gap-10 transition-all duration-500">
              <img src="https://i.imgur.com/SFJ8DSP.png" alt="CCI" className="h-8 md:h-10 object-contain brightness-100 shadow-sm" referrerPolicy="no-referrer" />
              <img src="https://i.imgur.com/tobsWmq.jpeg" alt="Bpifrance" className="h-8 md:h-10 object-contain rounded brightness-100 shadow-sm" referrerPolicy="no-referrer" />
              <img src="https://i.ibb.co/KjVHCQbs/MEDEF-Yvelines-LOGO-RVB-1.png" alt="MEDEF" className="h-8 md:h-10 object-contain brightness-100" referrerPolicy="no-referrer" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* RESTORED PROOF BLOCK (EVENT PHOTOS) */}
      <section className="py-20 md:py-32 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-5xl font-black text-gray-900 leading-tight tracking-tight">
                Découvrez comment l’IA aide les PME et repartez avec une méthode pour la mettre en place.
              </h2>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-medium">
                Un évènement qui part de vos problématiques, avec des cas réels et une approche pratique et actionnable.
              </p>
              
              <div className="flex items-center gap-8 pt-4">
                <div className="flex flex-col">
                  <span className="text-4xl font-black text-blue-600">3</span>
                  <span className="text-xs text-gray-400 uppercase tracking-widest font-black">Événements organisés</span>
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
              className="bg-gray-100 hover:bg-gray-200 text-gray-900 px-8 py-4 rounded-full font-black text-lg transition-all"
            >
              Inscrivez-vous à l'évènement
            </button>
          </div>
        </div>
      </section>

      {/* AI CONTENT BLOCK (REDESIGNED) */}
      <section className="relative py-24 md:py-40 bg-[#0a0a0b] overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/40 via-transparent to-transparent"></div>
        <div className="max-w-6xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="space-y-12 mb-32"
          >
            <h2 className="text-4xl md:text-7xl font-black text-white leading-[0.9] tracking-tighter">
              Pendant que vous lisez ceci, un concurrent vient peut être d'automatiser ce que vous faites encore à la main.
            </h2>
            <div className="flex flex-col items-center gap-8">
              <p className="text-lg md:text-xl font-bold text-blue-500 italic">Ne laissez pas l'écart se creuser.</p>
              {/* CTA #3 */}
              <button 
                onClick={scrollToForm}
                className="bg-white text-black px-10 py-5 rounded-full text-xl font-black hover:bg-gray-200 transition-all shadow-[0_0_40px_rgba(255,255,255,0.2)]"
              >
                Je veux mon Diagnostic IA gratuit
              </button>
            </div>
          </motion.div>

          {/* PILLARS */}
          <div className="grid md:grid-cols-3 gap-6 mb-16 md:mb-32">
            {[
              { icon: BarChart3, title: "Productivité", desc: "Automatisez vos tâches les plus lourdes dès demain." },
              { icon: Target, title: "Intelligence", desc: "Augmentez la capacité d’analyse de vos équipes." },
              { icon: TrendingUp, title: "Croissance", desc: "Libérez du temps pour vos projets stratégiques." }
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-[2rem] bg-white/5 border border-white/10 flex flex-col items-center text-center group hover:bg-white/10 transition-all">
                <div className="w-12 h-12 rounded-xl bg-blue-600/20 flex items-center justify-center text-blue-500 mb-5 group-hover:scale-110 transition-transform">
                  <item.icon className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-black text-white mb-2">{item.title}</h4>
                <p className="text-gray-400 text-sm font-medium leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* FOR YOU IF */}
          <div className="mb-16 md:mb-32 text-left">
            <h3 className="text-2xl md:text-5xl font-black mb-10 text-center text-white">Cet événement est fait pour vous si :</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { icon: Building2, text: "Gérant : 5 à 200 salariés" },
                { icon: CheckSquare, text: "Besoin de résultats concrets" },
                { icon: Lightbulb, text: "Curieux de l’IA pratique" },
                { icon: ShieldCheck, text: "Zéro conférence théorique" }
              ].map((item, i) => (
                <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-4">
                  <item.icon className="w-5 h-5 text-blue-500 shrink-0" />
                  <span className="text-gray-200 font-bold text-sm leading-tight">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* USE CASES GRID (ROI FOCUSED) */}
          <div className="mb-16 md:mb-32">
            <h3 className="text-2xl md:text-5xl font-black mb-10 text-center text-white">Déploiement en PME Française : Oubliez les multinationales.</h3>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {[
                { title: "Admin Interne", figure: "70% gagnés", label: "Temps administratif", icon: FileText },
                { title: "Service Client", figure: "X3 plus vite", label: "Volume de réponses", icon: Users },
                { title: "Ops Qualité", figure: "45% plus précis", label: "Données & Précision", icon: Activity },
                { title: "Gain de Temps", figure: "15h par semaine", label: "Économie réelle", icon: TrendingUp }
              ].map((item, i) => (
                <div key={i} className="p-6 md:p-8 rounded-[2rem] bg-[#111829] border border-blue-500/20 text-center flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-600 mb-4">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-[10px] md:text-xs font-black text-gray-300 mb-2 uppercase tracking-widest">{item.title}</h4>
                  <span className="text-xl md:text-2xl font-black text-white mb-1 leading-none">{item.figure}</span>
                  <p className="text-[9px] uppercase font-black text-blue-500 tracking-[0.2em]">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* AGENDA & PROGRAM SECTION */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
            {/* Planning Column */}
            <div className="space-y-10">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 text-[10px] font-black tracking-widest uppercase italic">
                  <Clock className="w-3 h-3" />
                  La soirée (18h30 à 21h30)
                </div>
                <h2 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight leading-none">Le planning de votre soirée.</h2>
              </div>
              
              <div className="relative pt-2">
                <div className="absolute left-[7px] top-6 bottom-6 w-[1px] bg-gray-200"></div>
                <div className="space-y-4">
                  {[
                    { time: "18h30", title: "Accueil des invités" },
                    { time: "19h00", title: "Début de la conférence atelier", dur: "Atelier pratique" },
                    { time: "20h00", title: "Échanges avec les partenaires", dur: "Réseautage" },
                    { time: "20h15", title: "Questions réponses", dur: "Direct" },
                    { time: "20h45", title: "Networking", dur: "Moments privilégiés" },
                    { time: "21h30", title: "Fin de l’événement" }
                  ].map((item, i) => (
                    <div key={i} className="relative flex items-center gap-6 group">
                      <div className="absolute left-[4px] top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-blue-600 z-10"></div>
                      <div className="flex items-center gap-6 pl-10 w-full transition-all">
                        <span className="text-sm font-black text-blue-600 whitespace-nowrap leading-none w-12">{item.time}</span>
                        <div className="flex-1 flex items-center justify-between gap-x-4 border-b border-gray-100 pb-2">
                          <h4 className="text-gray-900 font-bold text-sm leading-tight">{item.title}</h4>
                          {item.dur && <span className="text-[9px] uppercase font-black tracking-widest text-gray-400 italic shrink-0">{item.dur}</span>}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Program Column */}
            <div className="space-y-10">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 text-[10px] font-black tracking-widest uppercase italic">
                  <Presentation className="w-3 h-3" />
                  Au programme
                </div>
                <h3 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight leading-none">Le contenu détaillé.</h3>
              </div>
              
              <div className="grid gap-3">
                {[
                  { title: "Introduction", desc: "Pourquoi l'IA transforme les PME aujourd'hui." },
                  { title: "Cas d'usage", desc: "Basés sur vos problématiques terrain." },
                  { title: "Live Demos", desc: "La preuve en direct sans slides." },
                  { title: "Méthodologie", desc: "Les 4 étapes pour lancer vos projets." },
                  { title: "Plan d'action", desc: "Déploiement en entreprise sous 90 jours." }
                ].map((item, i) => (
                  <div key={i} className="group p-4 rounded-2xl bg-gray-50 border border-gray-100 hover:bg-gray-100 transition-all flex items-start gap-4">
                    <div className="w-8 h-8 shrink-0 rounded-lg bg-blue-600/10 flex items-center justify-center text-blue-600 font-black text-xs">
                      {i + 1}
                    </div>
                    <div>
                      <h4 className="text-sm font-black text-gray-900 mb-0.5">{item.title}</h4>
                      <p className="text-gray-500 text-[12px] leading-snug font-medium">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* CTA #4 */}
          <div className="mt-12 text-center">
            <button 
              onClick={scrollToForm}
              className="bg-blue-600 text-white px-8 py-4 rounded-full text-base font-black transform hover:scale-105 transition-all shadow-xl shadow-blue-600/20"
            >
              Je bloque ma place pour le 18 mai
            </button>
          </div>
        </div>
      </section>

      {/* PARTICIPANT PACK (GIFT CARDS) */}
      <section className="py-24 px-6 bg-[#0a0a0b]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-none">Chaque participant repart avec :</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Votre Cas d’usage", desc: "Défini à partir de vos besoins réels.", icon: Target },
              { title: "Votre Méthodologie", desc: "Pour lancer votre projet IA sereinement.", icon: Rocket },
              { title: "Diagnostic Offert", desc: "Évaluation de maturité IA de votre boîte.", icon: Brain, highlight: true }
            ].map((item, i) => (
              <div key={i} className={`p-10 rounded-[2.5rem] relative flex flex-col items-center text-center transition-all ${item.highlight ? 'bg-blue-600 shadow-[0_0_50px_rgba(37,99,235,0.4)] scale-105 z-10' : 'bg-white/5 border border-white/10'}`}>
                {item.highlight && <span className="absolute -top-4 bg-white text-blue-600 px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest">Bonus exclusif</span>}
                <div className={`w-20 h-20 rounded-3xl flex items-center justify-center mb-8 ${item.highlight ? 'bg-white text-blue-600' : 'bg-blue-600/10 text-blue-500'}`}>
                  <item.icon className="w-10 h-10" />
                </div>
                <h4 className={`text-2xl font-black mb-4 text-white`}>{item.title}</h4>
                <p className={`text-lg md:text-xl font-medium leading-relaxed ${item.highlight ? 'text-white/90' : 'text-gray-400'}`}>{item.desc}</p>
              </div>
            ))}
          </div>
          
          {/* CTA #5 */}
          <div className="mt-16 text-center">
            <button 
              onClick={scrollToForm}
              className="bg-white text-black px-12 py-6 rounded-full text-xl font-black transform hover:scale-105 transition-all shadow-2xl shadow-white/10"
            >
              Je récupère mon Pack Participant
            </button>
          </div>
        </div>
      </section>

      {/* ACCESSIBILITY & INFO */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-50 border border-gray-100 p-8 md:p-12 rounded-[2.5rem] md:rounded-[3.5rem] shadow-xl overflow-hidden relative">
            <h2 className="text-3xl md:text-5xl font-black mb-12 flex items-center gap-4 relative z-10 tracking-tight text-gray-900">
              <MapPin className="text-blue-600 w-10 h-10" />
              Accès et Informations
            </h2>
            <div className="space-y-12 relative z-10 font-bold">
              <div className="flex items-start gap-4 p-6 bg-blue-600/5 border border-blue-600/10 rounded-3xl">
                <CheckCircle2 className="text-blue-600 shrink-0 mt-1 w-6 h-6" />
                <p className="text-lg md:text-xl text-gray-700 leading-tight">Lieu de l’événement : 21 avenue de Paris, Versailles. Accessible PMR.</p>
              </div>
              
              <div className="grid gap-3">
                {[
                  { type: "RER", line: "C", color: "bg-[#f7cd1a] text-black", station: "Versailles Château Rive Gauche", dur: "8 à 10 min à pied" },
                  { type: "RER", line: "C", color: "bg-[#f7cd1a] text-black", station: "Versailles Chantiers", dur: "15 min à pied" },
                  { type: "Ligne", line: "L", color: "bg-[#662b91] text-white", station: "Versailles Rive Droite", dur: "15 min à pied" },
                  { type: "Ligne", line: "N", color: "bg-[#00a0dc] text-white", station: "Versailles Chantiers", dur: "15 min à pied" },
                  { type: "Ligne", line: "U", color: "bg-[#de0081] text-white", station: "Versailles Chantiers", dur: "15 min à pied" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between p-4 bg-white rounded-2xl border border-gray-100 shadow-sm">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1.5">
                          <span className="text-[10px] font-black uppercase text-gray-400">{item.type}</span>
                          <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-black ${item.color}`}>
                            {item.line}
                          </div>
                        </div>
                        <span className="text-gray-900 text-base font-bold">{item.station}</span>
                      </div>
                      <span className="text-gray-500 text-[11px] font-medium">{item.dur}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PARTNERS (CREDIBILITY) */}
      <section className="py-20 px-6 bg-white border-t border-gray-100">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-gray-400 text-xs font-black tracking-[0.3em] mb-12 uppercase">Co organisé par les acteurs majeurs du territoire</p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20">
            <img src="https://i.imgur.com/SFJ8DSP.png" alt="CCI Versailles" className="h-12 md:h-16 object-contain" referrerPolicy="no-referrer" />
            <img src="https://i.imgur.com/tobsWmq.jpeg" alt="Bpifrance" className="h-12 md:h-16 object-contain rounded" referrerPolicy="no-referrer" />
            <img src="https://i.ibb.co/KjVHCQbs/MEDEF-Yvelines-LOGO-RVB-1.png" alt="MEDEF Yvelines" className="h-14 md:h-20 object-contain bg-gray-50 p-3 rounded-xl" referrerPolicy="no-referrer" />
          </div>
        </div>
      </section>

      {/* FORM SECTION */}
      <section id="registration-form" className="py-24 px-6 bg-[#0f1115] text-white">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-7xl font-black mb-6 tracking-tighter leading-none text-white">Réservez votre place libre.</h2>
          <p className="text-lg md:text-xl text-blue-500 font-bold max-w-2xl mx-auto mb-8">L’inscription est gratuite mais soumise à validation (Places limitées aux dirigeants de TPE / PME).</p>
        </div>
        <div className="max-w-3xl mx-auto text-left">
          <BrevoForm />
        </div>
      </section>

      {/* FINAL CALL TO ACTION */}
      <section className="py-24 md:py-40 px-6 relative overflow-hidden bg-white">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-8xl font-black mb-12 tracking-tighter leading-none text-gray-900">La différence commence ici.</h2>
          <div className="grid md:grid-cols-2 gap-8 mb-16 text-left">
            <div className="p-10 rounded-[2.5rem] bg-gray-50 border border-gray-100 shadow-xl">
              <p className="text-2xl text-gray-900 font-black leading-tight">Ceux qui intègrent l’IA dans leur entreprise dès aujourd'hui.</p>
            </div>
            <div className="p-10 rounded-[2.5rem] bg-gray-50 border border-gray-100 shadow-sm opacity-60">
              <p className="text-2xl text-gray-900 font-black leading-tight">Et ceux qui en parleront encore dans 6 mois.</p>
            </div>
          </div>
          <button 
            onClick={scrollToForm}
            className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-8 rounded-full text-2xl md:text-4xl font-black transition-all transform hover:scale-105 shadow-2xl shadow-blue-600/30"
          >
            Je rejoins le workshop (Gratuit)
          </button>
          <p className="mt-8 text-blue-600 font-black uppercase tracking-[0.2em] text-sm animate-pulse">Lundi 18 mai, 18h30 à Versailles</p>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Event;
