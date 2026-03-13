import { useState } from 'react';

export default function Navbar({ active, onNavigate, onResetView }) {
    const [isOpen, setIsOpen] = useState(false);

    const menuLinks = ['home', 'about', 'contact'];

    const handleNavigation = (link) => {
        onNavigate(link);
        setIsOpen(false); // Chiude il menu dopo il click
    };

    return (
        <nav className="fixed top-0 left-0 w-full z-[100] px-6 py-4 md:px-8 md:py-5">
            {/* LAYER SFUMATURA */}
            <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-black via-black/80 to-transparent -z-10 pointer-events-none"></div>

            <div className="max-w-[1800px] mx-auto flex justify-between items-center relative">

                {/* SINISTRA: Nome / Logo - Rimpicciolito su mobile */}
                <div className="cursor-pointer group" onClick={onResetView}>
                    <h1 className="text-sm md:text-lg tracking-[0.6em] md:tracking-[1em] uppercase font-bold text-white whitespace-nowrap transition-opacity group-hover:opacity-60">
                        ANDRES LOPEZ
                    </h1>
                </div>

                {/* DESTRA: Menu Desktop (Nascosto su mobile) */}
                <div className="hidden md:flex gap-12">
                    {menuLinks.map((link) => (
                        <button
                            key={link}
                            onClick={() => handleNavigation(link)}
                            className={`cursor-pointer text-[18px] uppercase tracking-[0.3em] transition-all duration-300 ${active === link
                                ? 'text-white opacity-100'
                                : 'text-white/40 hover:text-white hover:opacity-100'
                                }`}
                        >
                            {link}
                        </button>
                    ))}
                </div>

                {/* HAMBURGER BUTTON (Solo mobile) */}
                <button
                    className="md:hidden flex flex-col gap-1.5 z-[110]"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <span className={`w-6 h-0.5 bg-white transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                    <span className={`w-6 h-0.5 bg-white transition-all ${isOpen ? 'opacity-0' : ''}`}></span>
                    <span className={`w-6 h-0.5 bg-white transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                </button>

                {/* MOBILE MENU OVERLAY */}
                <div className={`fixed inset-0 bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center gap-12 transition-transform duration-500 md:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                    {menuLinks.map((link) => (
                        <button
                            key={link}
                            onClick={() => handleNavigation(link)}
                            className={`text-2xl uppercase tracking-[0.4em] ${active === link ? 'text-white' : 'text-white/40'}`}
                        >
                            {link}
                        </button>
                    ))}
                </div>

            </div>
        </nav>
    );
}