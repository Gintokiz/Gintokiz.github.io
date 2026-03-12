export default function Navbar({ active, onNavigate, onResetView }) {
    return (
        <nav className="fixed top-0 left-0 w-full z-[100] px-8 py-8">
            <div className="max-w-[1800px] mx-auto flex justify-between items-center">

                {/* SINISTRA: Nome / Logo */}
                <div
                    className="cursor-pointer group"
                    onClick={onResetView}
                >
                    <h1 className="text-lg tracking-[1em] uppercase font-bold text-white whitespace-nowrap transition-opacity group-hover:opacity-60">
                        ANDRES LOPEZ
                    </h1>
                </div>

                {/* DESTRA: Menu di Navigazione */}
                <div className="flex gap-12">
                    {['home', 'about', 'contact'].map((link) => (
                        <button
                            key={link}
                            onClick={() => typeof onNavigate === 'function' ? onNavigate(link) : console.log("Errore: onNavigate non trovata")}
                            className={`cursor-pointer text-[20px] uppercase tracking-[0.3em] transition-all duration-300 ${active === link
                                ? 'text-white opacity-100'
                                : 'text-white/40 hover:text-white hover:opacity-100'
                                }`}
                        >
                            {link}
                        </button>
                    ))}
                </div>

            </div>
        </nav>
    );
}