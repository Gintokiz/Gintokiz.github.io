// src/components/SocialLinks.jsx
export default function SocialLinks() {
    const links = [
        { name: 'LNKD', url: 'https://www.linkedin.com/in/andres-lopez-93502920a/' },
        { name: 'IG', url: 'https://www.instagram.com/brandymami/' },
        { name: 'GITHUB', url: 'https://github.com/Gintokiz' }
    ];

    return (
        <div className="fixed bottom-8 left-0 right-0 px-8 z-50 flex items-center justify-between">
            {/* Link Social a sinistra */}
            <div className="flex gap-6">
                {links.map((link) => (
                    <a
                        key={link.name}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[14px] tracking-[0.2em] uppercase text-white/30 hover:text-white transition-colors duration-300"
                    >
                        {link.name}
                    </a>
                ))}
            </div>

            {/* Copyright a destra */}
            <div className="text-[10px] tracking-[0.2em] uppercase text-white/20 font-light select-none">
                © 2026 Andres Felipe Rosero Lopez
            </div>
        </div>
    );
}