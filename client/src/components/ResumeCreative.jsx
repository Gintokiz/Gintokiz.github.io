import { useState } from 'react';
import data from '../data.json';
import Card from './Card';

export default function ResumeCreative() {
    const [selectedImg, setSelectedImg] = useState(null);

    // Filtro foto e video
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
                        <Card key={p.id} {...p} onClick={() => setSelectedImg(p.url)} />
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
                        <Card key={p.id} {...p} onClick={() => setSelectedImg(p.url)} />
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
                        <Card key={v.id} {...v} onClick={() => setSelectedImg(v.url)} />
                    ))}
                </div>
            </div>

            {/* Modal */}
            {selectedImg && (
                <div className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-8 cursor-zoom-out" onClick={() => setSelectedImg(null)}>
                    <img src={selectedImg} className="max-w-full max-h-[80vh] object-contain" alt="zoom" />
                </div>
            )}
        </section>
    );
}