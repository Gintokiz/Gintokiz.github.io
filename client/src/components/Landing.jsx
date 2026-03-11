// src/components/Landing.jsx
import { motion } from 'framer-motion';

export default function Landing({ onSelect }) {

    // Varianti per l'animazione di entrata
    const variants = {
        hidden: { opacity: 0, y: 20 }, // Parte invisibile e leggermente più in basso
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    return (
        <div className="flex h-screen w-full overflow-hidden bg-[#0a0a0a]">

            {/* LATO CREATIVO */}
            <motion.div
                initial="hidden"
                animate="visible"
                variants={variants}
                onClick={() => onSelect('creative')}
                className="group relative flex-1 cursor-pointer transition-all duration-700 hover:flex-[1.2] border-r border-white/10"
            >
                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                    <h2
                        style={{ writingMode: 'vertical-lr', fontFamily: 'Bebas Neue' }}
                        className="text-white text-6xl md:text-9xl font-black uppercase tracking-tight transition-transform duration-500 group-hover:scale-105 pointer-events-auto"
                    >
                        CREATIVE
                    </h2>
                    <p className="mt-8 text-[10px] tracking-[0.3em] uppercase text-white/50 font-sans">Portfolio</p>
                </div>
            </motion.div>

            {/* LATO TECH */}
            <motion.div
                initial="hidden"
                animate="visible"
                variants={variants}
                // Aggiungiamo un leggero ritardo al secondo elemento per un effetto "a cascata"
                transition={{ delay: 0.2 }}
                onClick={() => onSelect('tech')}
                className="group relative flex-1 cursor-pointer transition-all duration-700 hover:flex-[1.2]"
            >
                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                    <h2
                        style={{ writingMode: 'vertical-lr', fontFamily: 'Bebas Neue' }}
                        className="-translate-y-10 text-white text-6xl md:text-9xl font-black uppercase tracking-tight transition-transform duration-500 group-hover:scale-105 pointer-events-auto"
                    >
                        TECHNICAL
                    </h2>
                    <p className="-mt-16 text-[10px] tracking-[0.3em] uppercase text-white/50 font-sans">Curriculum Vitae</p>
                </div>
            </motion.div>

            {/* NOME AL CENTRO */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none text-center z-10">
                <h1 className="text-sm md:text-lg tracking-[1em] uppercase font-bold text-white whitespace-nowrap">
                    ANDRES LOPEZ
                </h1>
            </div>
        </div>
    );
}