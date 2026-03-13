import { useState, useEffect } from 'react'; // Aggiungi useEffect qui
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

  // ScrollRestoration: forza lo scroll in cima ogni volta che cambia nav o view
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
              <div className="fixed top-20 left-0 right-0 px-8 flex justify-between z-50 pointer-events-none">
                <button
                  onClick={() => setView(null)}
                  className="pointer-events-auto text-[13px] tracking-[0.2em] uppercase opacity-50 hover:opacity-100 transition-all bg-black/20 backdrop-blur-sm px-4 py-2 rounded-sm border border-white/5"
                >
                  ← Back
                </button>
                <button
                  onClick={() => setView(view === 'creative' ? 'tech' : 'creative')}
                  className="pointer-events-auto text-[13px] tracking-[0.2em] uppercase opacity-50 hover:opacity-100 transition-all bg-black/20 backdrop-blur-sm px-4 py-2 rounded-sm border border-white/5"
                >
                  {view === 'creative' ? 'Technical CV →' : '← Portfolio'}
                </button>
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