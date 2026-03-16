import { motion } from 'framer-motion';

export default function Landing({ onSelect }) {
    return (
        /* Aggiunto 'gap-4 md:gap-0' per avvicinarli in mobile e 'py-20 md:py-0' per stringere il campo visivo */
        <div className="absolute inset-0 flex flex-col md:flex-row w-full h-screen overflow-hidden bg-[#0a0a0a] gap-4 md:gap-0 py-20 md:py-0">

            {/* SEZIONE CREATIVE */}
            <motion.div
                exit={{ opacity: 0, x: -100, transition: { duration: 0.5 } }}
                onClick={() => onSelect('creative')}
                /* Rimosso border-b per un look più pulito se sono vicini, o mantenuto se preferisci la divisione */
                className="group relative flex-1 cursor-pointer transition-all duration-700 hover:flex-[1.2] flex items-center justify-center"
            >
                {/* Linea Verticale - Solo Desktop */}
                <div className="absolute right-0 top-1/2 -translate-y-1/2 h-[60%] w-[1px] bg-white/10 hidden md:block" />

                {/* 'translate-y-4' sposta leggermente il blocco verso il basso (il centro) */}
                <div className="flex flex-col items-center justify-center pointer-events-none p-4 text-center transform translate-y-4 md:translate-y-0">
                    <h2
                        className="text-white group-hover:text-red-500 text-5xl md:text-9xl font-black uppercase tracking-[0.05em] transition-all duration-300 group-hover:scale-105 pointer-events-auto"
                        style={{ fontFamily: 'Bebas Neue' }}
                    >
                        CREATIVE
                    </h2>
                    <p className="mt-2 text-[12px] tracking-[0.5em] uppercase text-white/50 font-sans">Portfolio</p>
                </div>
            </motion.div>

            {/* SEZIONE TECHNICAL */}
            <motion.div
                exit={{ opacity: 0, x: 100, transition: { duration: 0.5 } }}
                onClick={() => onSelect('tech')}
                className="group relative flex-1 cursor-pointer transition-all duration-700 hover:flex-[1.2] flex items-center justify-center"
            >
                {/* '-translate-y-4' sposta leggermente il blocco verso l'alto (il centro) */}
                <div className="flex flex-col items-center justify-center pointer-events-none p-4 text-center transform -translate-y-4 md:translate-y-0">
                    <h2
                        className="text-white group-hover:text-blue-500 text-5xl md:text-9xl font-black uppercase tracking-[0.05em] transition-all duration-300 group-hover:scale-105 pointer-events-auto"
                        style={{ fontFamily: 'Bebas Neue' }}
                    >
                        TECHNICAL
                    </h2>
                    <p className="mt-2 text-[12px] tracking-[0.3em] uppercase text-white/50 font-sans">Curriculum Vitae</p>
                </div>
            </motion.div>
        </div>
    );
}