
const PROBLEMS = [
    {
        id: 'downtime',
        number: '01',
        label: 'Downtime',
        title: "Lost Productivity",
        stat: "15%",
        statLabel: "Wasted Man-Hours",
        description: "Searching for tools stops production. Keep your machines running, not waiting."
    },
    {
        id: 'shrinkage',
        number: '02',
        label: 'Shrinkage',
        title: "Inventory Loss",
        stat: "20%",
        statLabel: "Annual Loss",
        description: "Tools walk away. Stop paying for inventory that just disappears."
    },
    {
        id: 'costing',
        number: '03',
        label: 'Costing',
        title: "Guesswork Pricing",
        stat: "???",
        statLabel: "True Cost Unknown",
        description: "Guessing costs money. Know the exact price of every job before you bid."
    },
    {
        id: 'accountability',
        number: '04',
        label: 'Accountability',
        title: "Zero Traceability",
        stat: "404",
        statLabel: "Record Not Found",
        description: "No secrets. Know exactly who took what, and when."
    }
];

export default function IndustryProblems() {
    return (
        <section className="bg-[#0f0e0e] py-32 px-4 border-t border-white/5 relative overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--color-primary-400)_0%,_transparent_20%)] opacity-5 pointer-events-none" />

            <div className="max-w-5xl mx-auto relative z-10">
                <div className="mb-24">
                    <h2 className="text-4xl md:text-6xl font-sansation font-bold text-white mb-6 leading-tight">
                        Industry Challenges <br/>
                        <span className="text-[var(--color-primary-400)]">& Hidden Costs.</span>
                    </h2>
                    <p className="text-lg md:text-xl text-zinc-400 max-w-3xl font-satoshi font-light">
                        Manufacturing is a game of margins. Every missing tool and every idle second is a silent drain on your bottom line. It’s time to stop the bleed.
                    </p>
                </div>

                <div className="space-y-24">
                    {PROBLEMS.map((problem) => (
                        <div 
                            key={problem.id}
                            className="group relative border-l-2 border-zinc-900 pl-8 md:pl-16 py-4 transition-all duration-500 hover:border-[var(--color-primary-400)] cursor-pointer"
                        >
                            <div className="flex flex-col md:flex-row md:items-baseline gap-4 md:gap-8 mb-4">
                                <span className="font-mono text-[var(--color-primary-400)] text-sm tracking-widest uppercase mb-2 md:mb-0">
                                    {problem.number} {problem.label}
                                </span>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr] gap-8 md:gap-16 items-end">
                                <div>
                                    <h3 className="text-3xl md:text-5xl font-sansation font-bold text-white mb-4 group-hover:text-zinc-200 transition-colors">
                                        {problem.title}
                                    </h3>
                                    <p className="text-zinc-500 text-lg leading-relaxed max-w-xl">
                                        {problem.description}
                                    </p>
                                </div>

                                <div className="flex flex-col items-start md:items-end">
                                    <div className="text-5xl md:text-7xl font-mono font-bold text-zinc-800 group-hover:text-red-500/80 transition-colors duration-500">
                                        {problem.stat}
                                    </div>
                                    <div className="text-xs text-zinc-600 uppercase tracking-widest mt-2 font-mono">
                                        {problem.statLabel}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-32 pt-20 border-t border-white/5 text-center">
                   <p className="text-2xl md:text-3xl font-sansation font-bold text-[var(--color-primary-400)]">
                        Stop managing chaos. <span className="text-white">Start engineering precision.</span>
                   </p>
                </div>
            </div>
        </section>
    );
}
