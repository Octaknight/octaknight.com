export default function AOTMEcosystem() {
    return (
        <section className="bg-zinc-100 py-32 px-4 relative overflow-hidden">
            <div className="absolute top-0 -left-[20%] w-[800px] h-[800px] bg-[var(--color-primary-400)]/30 blur-[120px] rounded-full pointer-events-none opacity-70" />
            <div className="absolute bottom-0 -right-[20%] w-[800px] h-[800px] bg-[var(--color-primary-400)]/30 blur-[120px] rounded-full pointer-events-none opacity-70" />
            <div className="max-w-4xl mx-auto">
                <div className="mb-24 text-center">
                    <h2 className="text-4xl md:text-6xl font-sansation font-bold text-zinc-900 mb-6">
                        The AOTM Ecosystem
                    </h2>
                    <p className="text-xl text-zinc-500 font-medium font-sansation">
                        Hardware, Software, and Intelligence working as One
                    </p>
                </div>

                <div className="relative space-y-12">
                    <div className="absolute left-[2.5rem] md:left-1/2 top-10 bottom-10 w-px border-l-2 border-dashed border-zinc-200 -translate-x-1/2 hidden md:block" />
                    
                    <div className="absolute left-8 top-10 bottom-10 w-px border-l-2 border-dashed border-zinc-200 -translate-x-1/2 md:hidden" />

                    <EcosystemItem 
                        number="01"
                        title="Secure Hardware"
                        description="Rugged, shop-floor ready dispensers act as the physical gatekeepers of your inventory."
                    />
                    
                    <EcosystemItem 
                        number="02"
                        title="Powerful Software"
                        description="An intuitive platform providing real-time data, automated workflows, and complete control for operators/admins"
                    />
                    
                    <EcosystemItem 
                        number="03"
                        title="Integrated Intelligence"
                        description="AI vision systems automate facial recognition and verify tool returns, guaranteeing the integrity of your data."
                    />
                </div>
            </div>
        </section>
    );
}

function EcosystemItem({ title, description, number }: { title: string; description: string; number: string }) {
    return (
        <div className="relative group cursor-pointer">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-16">
                
                <div className="relative z-10 shrink-0">
                    <div className="w-16 h-16 rounded-full bg-zinc-500/5 backdrop-blur-sm border-2 border-zinc-200 shadow-sm flex items-center justify-center group-hover:border-[var(--color-primary-400)] group-hover:scale-110 transition-transform duration-300 ease-out">
                        <span className="font-sansation font-bold text-xl text-zinc-400 group-hover:text-[var(--color-primary-400)] transition-colors duration-300">
                            {number}
                        </span>
                    </div>
                </div>

                <div className="flex-1 bg-white p-8 md:p-10 rounded-3xl border border-zinc-100 shadow-sm hover:border-[var(--color-primary-400)]/20 hover:shadow-lg hover:shadow-[var(--color-primary-400)]/5 transition-all duration-300 ease-out w-full transform md:group-hover:translate-x-2">
                    <h3 className="text-2xl font-sansation font-bold text-zinc-900 mb-3">
                        {title}
                    </h3>
                    <p className="text-zinc-500 leading-relaxed text-lg font-sansation">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    );
}
