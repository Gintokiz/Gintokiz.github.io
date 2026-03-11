// src/App.jsx
import { useState } from 'react';
import Landing from './components/Landing';
import ResumeCreative from './components/ResumeCreative';
import ResumeTechnical from './components/ResumeTechnical';

function App() {
  const [view, setView] = useState(null);

  return (
    <div className="min-h-screen w-full bg-[#0a0a0a] text-white">
      {!view ? (
        <Landing onSelect={setView} />
      ) : (
        <main className="max-w-6xl mx-auto px-6 py-12 animate-in fade-in duration-700">
          <button 
            onClick={() => setView(null)}
            className="fixed top-8 left-8 z-50 text-[10px] tracking-[0.3em] uppercase opacity-40 hover:opacity-100 transition-opacity"
          >
            ← Back
          </button>
          
          {view === 'creative' ? <ResumeCreative /> : <ResumeTechnical />}
        </main>
      )}
    </div>
  );
}

export default App;