// src/components/SocialLinks.jsx
export default function SocialLinks() {
    const links = [
        { name: 'LNKD', url: 'https://www.linkedin.com/in/andres-lopez-93502920a/' },
        { name: 'IG', url: 'https://www.instagram.com/brandymami/' },
        { name: 'GITHUB', url: 'https://github.com/Gintokiz' }
    ];

    return (
        <div className="fixed bottom-6 md:bottom-10 left-0 right-0 px-6 md:px-10 z-50 flex items-center justify-between pointer-events-none">

            {/* Link Social a sinistra */}
            <div className="flex gap-5 md:gap-8 pointer-events-auto">
                {links.map((link) => (
                    <a
                        key={link.name}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[12px] md:text-[16px] tracking-[0.2em] uppercase text-white/50 hover:text-white transition-all duration-300 font-medium"
                    >
                        {link.name}
                    </a>
                ))}
            </div>

            {/* Copyright a destra */}
            {/* Mobile: 10px | Desktop: 12px
                Colore: white/40 è un grigio chiaro */}
            <div className="text-[10px] md:text-[12px] tracking-[0.2em] uppercase text-white/40 font-normal select-none text-right">
                <span className="hidden sm:inline">© 2026 </span>
                Andres Felipe Rosero Lopez
            </div>
        </div>
    );
}