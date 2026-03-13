import { useState } from 'react';
import data from '../data.json';
import Card from './Card';

export default function ResumeCreative() {
    // Stato per gestire l'elemento selezionato (URL e tipo)
    const [selectedItem, setSelectedItem] = useState(null);

    // Filtro foto e video dal file JSON
    const photos = data.creative.projects.filter(project => project.type === 'photo');
    const videos = data.creative.projects.filter(project => project.type === 'video');

    return (
        <section className="bg-black text-white px-8 py-24 min-h-screen">
            <div className="max-w-7xl mx-auto space-y-32">

                {/* 1. BLOCCO INTRO */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    <h1 className="flex flex-col items-start leading-[0.8] tracking-tight">
                        <span className="text-5xl md:text-7xl font-light uppercase z-10">The Brandymami</span>
                        <span className="text-3xl md:text-6xl font-normal uppercase text-[#C1121F] -mt-2 md:-mt-4">Project</span>
                    </h1>
                    <div className="text-white/80 leading-relaxed text-lg md:text-xl font-sans font-light tracking-wide">
                        <p className="text-lg font-light text-white/60 leading-relaxed">
                            Nato in provincia di Brescia per colmare un'assenza di riferimenti visivi locali,
                            Brandymami è il mio manifesto: un progetto che esplora il linguaggio cinematografico
                            ed editoriale come strumento per leggere la realtà.
                        </p>
                    </div>
                </div>

                {/* 2. GRIGLIA FOTO 1 */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {photos.slice(0, 4).map((p) => (
                        <Card
                            key={p.id}
                            {...p}
                            onClick={() => setSelectedItem({ url: p.url, type: 'photo' })}
                        />
                    ))}
                </div>

                {/* 3. BLOCCO DESCRIZIONE */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <h2 className="text-7xl md:text-8xl font-black uppercase tracking-tight leading-[0.85] text-white">
                        La visione
                    </h2>
                    <div className="text-white/80 leading-relaxed text-lg md:text-xl font-sans font-light tracking-wide">
                        <p className="text-lg font-light text-white/60 leading-relaxed">
                            Attraverso la direzione e il coinvolgimento di persone prive di esperienza pregressa,
                            il progetto si è evoluto diventando un laboratorio di stile che oggi porto con me a Torino,
                            perfezionando la mia visione attraverso la continua contaminazione tra tecnica e narrazione visiva.
                        </p>
                    </div>
                </div>

                {/* 4. GRIGLIA FOTO 2 */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {photos.slice(4).map((p) => (
                        <Card
                            key={p.id}
                            {...p}
                            onClick={() => setSelectedItem({ url: p.url, type: 'photo' })}
                        />
                    ))}
                </div>

                {/* 5. BLOCCO COLLABORAZIONI */}
                <div className="max-w-3xl mx-auto text-center space-y-6 pt-16">
                    <h3 className="text-2xl font-light uppercase tracking-widest text-[#C1121F]">Collaborazioni</h3>
                    <p className="text-white/70 leading-relaxed text-lg font-sans font-light tracking-wide">
                        Motion & Storytelling. La narrazione visiva declinata in movimento: dalla pianificazione del set alla
                        finalizzazione in color correction. Una selezione di lavori dove la tecnica incontra l'esigenza espressiva.
                    </p>
                </div>

                {/* 6. GRIGLIA VIDEO */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {videos.map((v) => (
                        <Card
                            key={v.id}
                            {...v}
                            onClick={() => setSelectedItem({ url: v.url, type: 'video' })}
                        />
                    ))}
                </div>
            </div>

            {/* Modal Universale per Foto e Video */}
            {selectedItem && (
                <div
                    className="fixed inset-0 z-[200] bg-black/95 flex items-center justify-center p-4 md:p-12 cursor-pointer transition-all"
                    onClick={() => setSelectedItem(null)}
                >
                    <div
                        className="relative max-w-6xl w-full flex items-center justify-center cursor-default"
                        onClick={e => e.stopPropagation()}
                    >
                        {/* Tasto CHIUDI - Più grande e Bold */}
                        <button
                            className="absolute -top-16 right-0 md:-right-4 text-white/40 hover:text-white uppercase tracking-[0.4em] text-sm md:text-lg font-bold transition-all duration-300 flex items-center gap-3"
                            onClick={() => setSelectedItem(null)}
                        >
                            <span>Close</span>
                            <span className="text-2xl md:text-4xl font-light">×</span>
                        </button>

                        {selectedItem.type === 'video' ? (
                            <video
                                src={selectedItem.url}
                                controls
                                autoPlay
                                className="max-w-full max-h-[80vh] shadow-2xl outline-none"
                            />
                        ) : (
                            <img
                                src={selectedItem.url}
                                className="max-w-full max-h-[80vh] object-contain shadow-2xl"
                                alt="zoom content"
                            />
                        )}
                    </div>
                </div>
            )}
        </section>
    );
}