export default function Card({ title, url, type, format, onClick }) {
    const formatClasses = {
        '4:5': 'aspect-[4/5]',
        '9:16': 'aspect-[9/16]'
    };

    return (
        <div
            onClick={onClick}
            className="group relative bg-zinc-900 rounded-sm overflow-hidden border border-white/5 hover:border-white/20 transition-all duration-700 cursor-pointer w-full max-w-[280px] mx-auto"
        >
            <div className={`${formatClasses[format] || 'aspect-video'} overflow-hidden`}>
                {type === 'video' ? (
                    <video
                        src={url}
                        className="w-full h-full object-cover transition-all duration-700 brightness-[0.8] group-hover:brightness-100 group-hover:scale-105"
                        muted
                        loop
                        autoPlay
                        playsInline
                    />
                ) : (
                    <img
                        src={url}
                        alt={title}
                        className="w-full h-full object-cover transition-all duration-700 brightness-[0.8] group-hover:brightness-100 group-hover:scale-105"
                    />
                )}
            </div>

            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <span className="text-white text-xs tracking-[0.2em] uppercase font-light border-b border-white/40 pb-1">
                    {type === 'video' ? 'View Video' : 'View Image'}
                </span>
            </div>
        </div>
    );
}