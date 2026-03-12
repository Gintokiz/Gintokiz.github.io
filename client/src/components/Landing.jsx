import { motion } from 'framer-motion';

export default function Landing({ onSelect }) {
    return (
        <div className="absolute inset-0 flex flex-col md:flex-row w-full h-screen overflow-hidden bg-[#0a0a0a]">

            {/* SEZIONE CREATIVE */}
            <motion.div
                exit={{ opacity: 0, x: -100, transition: { duration: 0.5 } }}
                onClick={() => onSelect('creative')}
                className="group relative flex-1 cursor-pointer transition-all duration-700 hover:flex-[1.2] border-b md:border-b-0 border-white/10 flex items-center justify-center"
            >
                {/* Linea Verticale - Centrata perfettamente */}
                <div className="absolute right-0 top-1/2 -translate-y-1/2 h-[60%] w-[1px] bg-white/10 hidden md:block" />

                <div className="flex flex-col items-center justify-center pointer-events-none p-4 text-center">
                    <h2
                        className="text-white group-hover:text-red-500 text-5xl md:text-9xl font-black uppercase tracking-[0.05em] transition-all duration-300 group-hover:scale-105 pointer-events-auto"
                        style={{ fontFamily: 'Bebas Neue' }}
                    >
                        CREATIVE
                    </h2>
                    <p className="mt-2 text-[10px] tracking-[0.5em] uppercase text-white/50 font-sans">Portfolio</p>
                </div>
            </motion.div>

            {/* SEZIONE TECHNICAL */}
            <motion.div
                exit={{ opacity: 0, x: 100, transition: { duration: 0.5 } }}
                onClick={() => onSelect('tech')}
                className="group relative flex-1 cursor-pointer transition-all duration-700 hover:flex-[1.2] flex items-center justify-center"
            >
                <div className="flex flex-col items-center justify-center pointer-events-none p-4 text-center">
                    <h2
                        className="text-white group-hover:text-blue-500 text-5xl md:text-9xl font-black uppercase tracking-[0.05em] transition-all duration-300 group-hover:scale-105 pointer-events-auto"
                        style={{ fontFamily: 'Bebas Neue' }}
                    >
                        TECHNICAL
                    </h2>
                    <p className="mt-2 text-[10px] tracking-[0.3em] uppercase text-white/50 font-sans">Curriculum Vitae</p>
                </div>
            </motion.div>
        </div>
    );
}