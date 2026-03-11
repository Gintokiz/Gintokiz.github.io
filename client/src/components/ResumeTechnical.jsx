import data from '../data.json';

export default function ResumeTechnical() {
    return (
        <section className="animate-in fade-in duration-500">
            <h2 className="text-4xl font-extrabold mb-8 text-slate-900">Tech Stack</h2>

            <div className="flex flex-wrap gap-3">
                {data.technical.skills.map((skill, index) => (
                    <span
                        key={index}
                        className="px-4 py-2 bg-slate-900 text-white rounded-full text-sm font-semibold tracking-wide"
                    >
                        {skill}
                    </span>
                ))}
            </div>
        </section>
    );
}