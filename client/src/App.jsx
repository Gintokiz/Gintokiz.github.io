import { useState } from 'react';

function App() {
  // Questo sarà il nostro "cervello" che sceglie cosa visualizzare
  const [view, setView] = useState('creative');

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header Comune */}
      <header className="mb-10 text-center">
        <h1 className="text-4xl font-bold text-gray-900">Il Tuo Nome</h1>
        <p className="text-gray-600">Multimedia Creator & Developer</p>

        {/* Navigazione per lo Switch */}
        <nav className="mt-6 flex justify-center gap-4">
          <button
            onClick={() => setView('creative')}
            className={`px-4 py-2 rounded-lg font-medium ${view === 'creative' ? 'bg-black text-white' : 'bg-gray-200 text-gray-700'}`}
          >
            Portfolio Creativo
          </button>
          <button
            onClick={() => setView('tech')}
            className={`px-4 py-2 rounded-lg font-medium ${view === 'tech' ? 'bg-black text-white' : 'bg-gray-200 text-gray-700'}`}
          >
            Curriculum IT
          </button>
        </nav>
      </header>

      {/* Area dinamica: qui cambieremo i componenti */}
      <main>
        {view === 'creative' ? (
          <div>
            <h2 className="text-2xl font-bold">Sezione Fotografia / Video</h2>
            {/* Qui in futuro importeremo <ResumeCreative /> */}
          </div>
        ) : (
          <div>
            <h2 className="text-2xl font-bold">Sezione Sviluppo IT</h2>
            {/* Qui in futuro importeremo <ResumeTechnical /> */}
          </div>
        )}
      </main>
    </div>
  );
}

export default App;