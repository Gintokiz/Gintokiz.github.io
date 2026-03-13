import data from '../data.json';

export default function ResumeTechnical() {
    const techStack = [
        { category: "Languages", items: ["C", "Java", "Python", "JavaScript", "HTML5", "CSS3", "LaTeX"] },
        { category: "Frameworks & Libraries", items: ["React", "Bootstrap", "PyTorch", "Socket.io"] },
        { category: "Databases & Tools", items: ["MySQL", "MongoDB", "Node.js", "Git", "Figma", "Canva"] }
    ];

    const creativeTools = [
        { category: "Editing & Post", items: ["DaVinci Resolve", "Adobe Lightroom"] },
        { category: "Graphic & Design", items: ["Adobe Photoshop"] },
        { category: "3D & Motion", items: ["Blender", "After Effects", "Lumix Lab"] }
    ];

    return (
        <section className="bg-black text-white px-8 py-12 min-h-screen">
            <div className="max-w-7xl mx-auto space-y-16">

                {/* 1. BLOCCO INTRO - Struttura Verticale */}
                <div className="flex flex-col gap-8 mb-16">
                    <h1 className="flex flex-col leading-[0.8] tracking-tight">
                        <span className="text-4xl md:text-6xl font-normal uppercase">
                            <span className="text-blue-500">TECH STACK</span>
                            <span className="text-white"> &</span>
                        </span>
                        <span className="text-4xl md:text-6xl font-normal uppercase text-red-500 mt-2">
                            CREATIVE TOOLS
                        </span>
                    </h1>
                    <div className="max-w-4xl text-white/80 leading-relaxed text-xl md:text-2xl font-sans font-light tracking-wide mt-2">
                        <p className="text-xl font-light text-white/60">
                            Studio Informatica coltivando una visione d'insieme che unisce l'architettura dei sistemi allo sviluppo software.
                            Il mio percorso accademico si articola attorno a tre pilastri: Web Development, IA & Machine Learning, e Sistemi Embedded.
                        </p>
                    </div>
                </div>

                {/* 2. TECH STACK (Blue) */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
                    {techStack.map((group) => (
                        <div key={group.category} className="space-y-6">
                            <h3 className="text-lg uppercase tracking-[0.2em] text-blue-500 font-semibold">{group.category}</h3>
                            <div className="flex flex-wrap gap-4">
                                {group.items.map((item) => (
                                    <span key={item} className="text-2xl font-light text-white/70 hover:text-white transition-colors cursor-default">{item}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* 3. PARAGRAFO DESCRIZIONE TECNICA */}
                <div className="border-y border-white/10 py-16 space-y-12">
                    <div className="text-white/80 leading-relaxed text-xl md:text-2xl font-sans font-light tracking-wide">
                        <p className="text-xl font-light text-white/60 mb-6">
                            <strong className="text-blue-500 font-normal">Fondamenti e Sistemi:</strong> Lo studio dell'architettura degli elaboratori e dei sistemi embedded mi permette di capire come il software interagisce concretamente con l'hardware. Metto in pratica queste basi lavorando all'implementazione di codice custom in C per la gestione della mia Creality Ender 5 Pro pesantemente moddata, un progetto che mi spinge quotidianamente a scrivere codice efficiente e consapevole del consumo di risorse.
                        </p>
                        <p className="text-xl font-light text-white/60 mb-6">
                            <strong className="text-blue-500 font-normal">Web Development:</strong> Sto costruendo le mie competenze nello sviluppo full-stack. Mi sto concentrando sull'integrazione di interfacce in React con logiche server-side in Node.js, imparando a strutturare database con MySQL e MongoDB. È la parte del mio percorso in cui metto alla prova la mia capacità di creare prodotti finiti.
                        </p>
                        <p className="text-xl font-light text-white/60">
                            <strong className="text-blue-500 font-normal">IA e Machine Learning:</strong> Mi sto avvicinando al mondo dell'Intelligenza Artificiale utilizzando PyTorch per esplorare modelli di Machine Learning. È un ambito che sto integrando nel mio bagaglio tecnico per capire come i dati possano essere utilizzati per risolvere problemi complessi.
                        </p>
                    </div>
                </div>

                {/* 4. CREATIVE TOOLS (Red) */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
                    {creativeTools.map((group) => (
                        <div key={group.category} className="space-y-6">
                            <h3 className="text-lg uppercase tracking-[0.2em] text-red-500 font-semibold">{group.category}</h3>
                            <div className="flex flex-wrap gap-4">
                                {creativeTools.find(g => g.category === group.category).items.map((item) => (
                                    <span key={item} className="text-2xl font-light text-white/70 hover:text-white transition-colors cursor-default">{item}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* 5. PARAGRAFO DESCRIZIONE CREATIVA */}
                <div className="border-y border-white/10 py-16 space-y-12">
                    <div className="text-white/80 leading-relaxed text-xl md:text-2xl font-sans font-light tracking-wide">
                        <p className="text-xl font-light text-white/60 leading-relaxed">
                            <strong className="text-red-500 font-normal">Workflow Creativo:</strong> La mia produzione visiva integra fotografia, videografia e grafica per creare contenuti dall'impatto narrativo efficace. Dalla cura dell'immagine in fase di ripresa fino alla post-produzione in <strong className="text-red-500 font-normal">DaVinci Resolve</strong>, il mio workflow si avvale di strumenti come <strong className="text-red-500 font-normal">Photoshop</strong> per il graphic design, insieme a <strong className="text-red-500 font-normal">Blender</strong> e <strong className="text-red-500 font-normal">After Effects</strong> per integrare elementi 3D e motion design dinamici, trasformando ogni progetto in una narrazione visiva completa e curata nei dettagli.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
}