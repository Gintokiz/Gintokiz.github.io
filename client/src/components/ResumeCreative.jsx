import { useState } from 'react';
import data from '../data.json';
import Card from './Card';

export default function ResumeCreative() {
    const [selectedImg, setSelectedImg] = useState(null);

    const photoProjects = data.creative.projects.filter(project => project.type === 'photo');

    return (
        <section className="space-y-24 py-12 relative">
            <h1
                className="text-4xl md:text-7xl font-black uppercase tracking-[0.02em]"
                style={{ fontFamily: 'Bebas Neue' }}
            >
                {data.creative.heroTitle}
            </h1>

            <div>
                <h3 className="text-xs uppercase tracking-[0.4em] font-medium mb-12 text-slate-500 border-l border-white pl-4">
                    Selected Photography
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {photoProjects.map((project) => (
                        <Card
                            key={project.id}
                            {...project}
                            onClick={() => setSelectedImg(project.url)}
                        />
                    ))}
                </div>
            </div>

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