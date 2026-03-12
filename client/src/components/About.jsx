export default function About() {
    return (
        <section className="max-w-6xl mx-auto pt-24 pb-20 px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                {/* COLONNA SINISTRA: Testo */}
                <div className="space-y-16">

                    <div className="space-y-8">
                        <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight">Chi sono</h1>

                        <div className="max-w-prose space-y-6">
                            <p className="text-white/80 leading-relaxed text-lg md:text-xl font-sans font-light tracking-wide">
                                Sono Andres Lopez, studente di Informatica e visual creator con base a Torino. Il mio background è un mix peculiare di gestione operativa, controllo qualità e produzione di contenuti digitali. Vedo il codice come uno strumento di costruzione e la narrazione visiva come un mezzo di connessione: il mio obiettivo è applicare questo approccio multidisciplinare per offrire valore aggiunto in ogni sfida professionale. Sono in costante aggiornamento, spinto dalla volontà di imparare e dalla passione per tutto ciò che è innovativo.
                            </p>
                            <p className="text-white/80 leading-relaxed text-lg md:text-xl font-sans font-light tracking-wide">
                                Trasferirmi a Torino è stata la mia scelta più consapevole: volevo un contesto che stimolasse la mia crescita e non è un caso che io abbia scelto proprio questa città per approfondire i miei studi in Informatica presso l’Università di Torino, dove sono attualmente al terzo anno.
                            </p>
                        </div>
                    </div>

                    <div className="space-y-8">
                        <h2 className="text-2xl font-bold uppercase tracking-widest text-white/90">Cosa faccio quando non scrivo codice?</h2>

                        <div className="max-w-prose space-y-6">
                            <p className="text-white/80 leading-relaxed text-lg md:text-xl font-sans font-light tracking-wide">
                                Vivo la cultura urbana di Torino attraverso il gruppo Alter. Qui, il mio ruolo è dare forma alle storie: mi occupo di fotografia, regia di video-interviste, color correction e montaggio. È un lavoro di squadra che richiede sensibilità, tecnica e capacità di lettura del territorio.
                            </p>
                            <p className="text-white/80 leading-relaxed text-lg md:text-xl font-sans font-light tracking-wide">
                                Parallelamente, collaboro con realtà dinamiche come la Torino Tattoo Convention, dove gestisco la strategia social, i contenuti e le campagne di sponsorizzazione. Il mio approccio è semplice: unisco la precisione analitica appresa sui banchi di Informatica con la creatività necessaria per comunicare in modo efficace. Che si tratti di sviluppare un’applicazione o di montare un contenuto visivo, il mio obiettivo resta lo stesso: portare innovazione, cura del dettaglio e una visione chiara in ogni progetto che intraprendo.
                            </p>
                        </div>
                    </div>
                </div>

                {/* COLONNA DESTRA: Foto (Sticky) */}
                <div className="lg:sticky lg:top-32">
                    <div className="aspect-[4/5] w-full bg-zinc-900 border border-white/10 flex items-center justify-center relative overflow-hidden group transition-all duration-500 hover:border-white/30">
                        <span className="text-white/20 uppercase tracking-[0.2em] text-sm font-light select-none">
                            [foto 4:5]
                        </span>
                        {/* Overlay decorativo per il futuro inserimento dell'immagine */}
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                    </div>
                    <p className="mt-6 text-[10px] uppercase tracking-[0.3em] text-white/40 font-light">
                        Torino, 2026
                    </p>
                </div>

            </div>
        </section>
    );
}