import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Landing from './components/Landing';
import ResumeCreative from './components/ResumeCreative';
import ResumeTechnical from './components/ResumeTechnical';
import Navbar from './components/Navbar';
import SocialLinks from './components/SocialLinks';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  const [view, setView] = useState(null);
  const [nav, setNav] = useState('home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [nav, view]);

  const renderContent = () => {
    if (nav === 'about') return <About />;
    if (nav === 'contact') return <Contact />;
    if (nav === 'home') {
      if (!view) return <Landing onSelect={setView} />;
      return view === 'creative' ? <ResumeCreative /> : <ResumeTechnical />;
    }
  };

  return (
    <div className="min-h-screen w-full bg-[#0a0a0a] text-white overflow-x-hidden">
      <Navbar
        active={nav}
        onNavigate={(link) => { setNav(link); setView(null); }}
        onResetView={() => { setNav('home'); setView(null); }}
      />

      <SocialLinks />

      <main className="pt-32 px-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={nav + view}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="w-full"
          >
            {nav === 'home' && view && (
              <div className="fixed top-20 left-0 right-0 px-6 md:px-8 flex justify-between z-50 pointer-events-none">

                {/* Bottone Sinistro: Ritorno alla Landing */}
                <button
                  onClick={() => setView(null)}
                  className="pointer-events-auto text-[11px] md:text-[13px] tracking-[0.2em] uppercase opacity-50 hover:opacity-100 transition-all bg-black/20 backdrop-blur-sm px-3 py-2 md:px-4 md:py-2 rounded-sm border border-white/5"
                >
                  <span className="md:hidden">← Back</span>
                  <span className="hidden md:inline">← Portfolio</span>
                </button>

                {/* Bottone Destro: Download CV con Icona */}
                <a
                  href="/assets/Andres_Lopez_CV.pdf"
                  download="Andres_Lopez_CV.pdf"
                  className="pointer-events-auto flex items-center gap-2 text-[11px] md:text-[13px] tracking-[0.2em] uppercase opacity-50 hover:opacity-100 transition-all bg-black/20 backdrop-blur-sm px-3 py-2 md:px-4 md:py-2 rounded-sm border border-white/5"
                >
                  <svg className="w-3 h-3 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  <span className="md:hidden">CV</span>
                  <span className="hidden md:inline">Download CV</span>
                </a>
              </div>
            )}

            {renderContent()}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}

export default App;
