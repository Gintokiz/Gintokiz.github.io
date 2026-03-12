export default function Contact() {
    const contacts = [
        { label: "Email (Pro)", value: "brandymami95@gmail.com", href: "mailto:brandymami95@gmail.com" },
        { label: "Email (Personal)", value: "andresgintoki@gmail.com", href: "mailto:andresgintoki@gmail.com" },
        { label: "LinkedIn", value: "in/andres-lopez", href: "https://www.linkedin.com/in/andres-lopez-93502920a/" },
        { label: "Instagram", value: "@brandymami", href: "https://www.instagram.com/brandymami/" },
        { label: "GitHub", value: "Gintokiz", href: "https://github.com/Gintokiz" }
    ];

    return (
        <section className="bg-black text-white px-8 py-24 min-h-screen flex flex-col justify-center">
            <div className="max-w-4xl mx-auto w-full space-y-16">

                {/* TITOLO */}
                <h2 className="text-5xl md:text-7xl font-light uppercase tracking-widest text-white/20">
                    Let's Connect
                </h2>

                {/* LISTA CONTATTI */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {contacts.map((c) => (
                        <a
                            key={c.label}
                            href={c.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group space-y-2 border-l border-white/10 pl-6 hover:border-blue-500 transition-colors"
                        >
                            <span className="block text-sm uppercase tracking-[0.2em] text-white/40 group-hover:text-blue-500 transition-colors">
                                {c.label}
                            </span>
                            <span className="block text-xl md:text-2xl font-light text-white group-hover:text-white transition-colors">
                                {c.value}
                            </span>
                        </a>
                    ))}
                </div>

                {/* NOTA FINALE */}
                <p className="pt-12 text-white/40 font-light italic">
                    Always open to new projects, collaborations, or a simple tech chat.
                </p>
            </div>
        </section>
    );
}