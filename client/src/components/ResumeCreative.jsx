// src/components/ResumeCreative.jsx
import { useState } from 'react';
import data from '../data.json';
import Card from './Card';

export default function ResumeCreative() {
    // Stato per gestire quale immagine mostrare a schermo intero
    const [selectedImg, setSelectedImg] = useState(null);

    // Filtriamo solo i progetti di tipo "photo"
    const photoProjects = data.creative.projects.filter(project => project.type === 'photo');

    return (
        <section className="space-y-24 py-12 relative">
            {/* Titolo Principale */}
            <h2 className="text-6xl md:text-7xl font-black text-white tracking-tighter uppercase leading-none">
                {data.creative.heroTitle}
            </h2>

            <div>
                {/* Sottotitolo Sezione - Elegante con linea laterale bianca */}
                <h3 className="text-xs uppercase tracking-[0.4em] font-medium mb-12 text-slate-500 border-l border-white pl-4">
                    Selected Photography
                </h3>

                {/* Griglia a 3 colonne (lg:grid-cols-3) per dare spazio alle immagini */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {photoProjects.map((project) => (
                        <Card
                            key={project.id}
                            {...project}
                            onClick={() => setSelectedImg(project.url)}
                        />
                    ))}
                </div>
            </div>

            {/* LIGHTBOX (Il Modale) - Sfondo nero profondo e sfocatura */}
            {selectedImg && (
                <div
                    className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 cursor-zoom-out animate-in fade-in duration-500"
                    onClick={() => setSelectedImg(null)}
                >
                    <div className="relative w-full h-full flex items-center justify-center">
                        <img
                            src={selectedImg}
                            className="max-w-full max-h-[85vh] object-contain shadow-[0_0_80px_rgba(0,0,0,0.5)] animate-in zoom-in duration-300"
                            alt="Ingrandimento"
                        />

                        {/* Pulsante Chiudi - Minimalista */}
                        <button
                            className="absolute top-10 right-10 text-white/50 text-2xl font-light hover:text-white transition-colors"
                            onClick={() => setSelectedImg(null)}
                        >
                            CLOSE —
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
}