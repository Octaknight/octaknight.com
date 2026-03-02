export default function Intelligence() {
    return (
        <section className="bg-zinc-950 py-32 px-4 relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-[10%] -left-[150px] pointer-events-none select-none">
                <img 
                    src="/assets/aotm/octaknight_spikes_gold.png" 
                    alt="" 
                    className="w-[600px] h-[600px] object-contain transform -scale-x-100"
                />
            </div>
            <div className="absolute bottom-[10%] -right-[150px] pointer-events-none select-none">
                <img 
                    src="/assets/aotm/octaknight_spikes_gold.png" 
                    alt="" 
                    className="w-[600px] h-[600px] object-contain"
                />
            </div>

            <div className="max-w-6xl mx-auto relative z-10">
                <div className="mb-20">
                    <h2 className="text-4xl md:text-5xl font-sansation font-bold text-white tracking-wide">
                        <span className="text-[var(--color-primary-400)]">Intelligence</span> at Every Step
                    </h2>
                </div>

                {/* Shop Floor Section */}
                <div className="mb-32">
                    <h3 className="text-2xl font-sansation text-white mb-12">
                        From the <span className="text-[var(--color-primary-400)] font-bold">Shop Floor</span> ...
                    </h3>

                    <div className="flex flex-col items-center mb-12">
                        <div className="relative w-full max-w-3xl rounded-xl overflow-hidden shadow-2xl shadow-black/50 border border-white/5 bg-zinc-900/50 backdrop-blur-sm p-2">
                            <img 
                                src="/assets/aotm/gui/GUI_2.png" 
                                alt="Shop Floor Interface" 
                                className="w-full h-auto rounded-lg"
                            />
                        </div>
                        <p className="text-zinc-400 mt-6 text-sm">An interface built for Speed and Precision</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                        <div className="bg-zinc-900/40 border border-white/5 rounded-xl p-6 hover:border-[var(--color-primary-400)]/30 transition-colors shadow-lg shadow-black/20 backdrop-blur-sm group">
                            <h4 className="text-xl font-bold text-[var(--color-primary-400)] mb-3 font-sansation group-hover:text-[var(--color-primary-300)] transition-colors">Job-Specific Dispensing</h4>
                            <p className="text-zinc-400 text-sm leading-relaxed">Operators see only the tools required for their active job, minimizing errors and ensuring the right tool is used for the right task, every time.</p>
                        </div>
                        
                        <div className="bg-zinc-900/40 border border-white/5 rounded-xl p-6 hover:border-[var(--color-primary-400)]/30 transition-colors shadow-lg shadow-black/20 backdrop-blur-sm group">
                            <h4 className="text-xl font-bold text-[var(--color-primary-400)] mb-3 font-sansation group-hover:text-[var(--color-primary-300)] transition-colors">Secure Facial Recognition</h4>
                            <p className="text-zinc-400 text-sm leading-relaxed">Fast, secure, and card-less authentication. Every transaction is automatically logged, creating a complete and unchangeable audit trail.</p>
                        </div>

                        <div className="bg-zinc-900/40 border border-white/5 rounded-xl p-6 hover:border-[var(--color-primary-400)]/30 transition-colors shadow-lg shadow-black/20 backdrop-blur-sm group">
                            <h4 className="text-xl font-bold text-[var(--color-primary-400)] mb-3 font-sansation group-hover:text-[var(--color-primary-300)] transition-colors">Automated Workflows</h4>
                            <p className="text-zinc-400 text-sm leading-relaxed">Empower your team. Operators can 'claim' available jobs directly from the tablet, reducing administrative overhead.</p>
                        </div>

                        <div className="bg-zinc-900/40 border border-white/5 rounded-xl p-6 hover:border-[var(--color-primary-400)]/30 transition-colors shadow-lg shadow-black/20 backdrop-blur-sm group">
                            <h4 className="text-xl font-bold text-[var(--color-primary-400)] mb-3 font-sansation group-hover:text-[var(--color-primary-300)] transition-colors">AI-Assisted Returns</h4>
                            <p className="text-zinc-400 text-sm leading-relaxed">Integrated vision systems verify returned tools, preventing costly inventory mistakes and guaranteeing data accuracy.</p>
                        </div>
                    </div>
                </div>

                {/* Top Floor Section */}
                <div>
                    <h3 className="text-2xl font-sansation text-white mb-12">
                        To the <span className="text-[var(--color-primary-400)] font-bold">Top Floor</span> ...
                    </h3>

                    <div className="flex flex-col items-center mb-12">
                        <div className="relative w-full max-w-3xl rounded-xl overflow-hidden shadow-2xl shadow-black/50 border border-white/5 bg-zinc-900/50 backdrop-blur-sm p-2">
                            <img 
                                src="/assets/aotm/gui/GUI_3.png" 
                                alt="Admin Dashboard" 
                                className="w-full h-auto rounded-lg"
                            />
                        </div>
                        <p className="text-zinc-400 mt-6 text-sm">A Command Center for your entire operation</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                        <div className="bg-zinc-900/40 border border-white/5 rounded-xl p-6 hover:border-[var(--color-primary-400)]/30 transition-colors shadow-lg shadow-black/20 backdrop-blur-sm group">
                            <h4 className="text-xl font-bold text-[var(--color-primary-400)] mb-3 font-sansation group-hover:text-[var(--color-primary-300)] transition-colors">Fleet Management</h4>
                            <p className="text-zinc-400 text-sm leading-relaxed">Monitor the real-time status and stock levels of every dispenser across all your workshops from a single, intuitive dashboard.</p>
                        </div>
                        
                        <div className="bg-zinc-900/40 border border-white/5 rounded-xl p-6 hover:border-[var(--color-primary-400)]/30 transition-colors shadow-lg shadow-black/20 backdrop-blur-sm group">
                            <h4 className="text-xl font-bold text-[var(--color-primary-400)] mb-3 font-sansation group-hover:text-[var(--color-primary-300)] transition-colors">Proactive Inventory Alerts</h4>
                            <p className="text-zinc-400 text-sm leading-relaxed">Receive automatic low-stock and other critical notifications, allowing you to prevent production-stopping shortages before they happen.</p>
                        </div>

                        <div className="bg-zinc-900/40 border border-white/5 rounded-xl p-6 hover:border-[var(--color-primary-400)]/30 transition-colors shadow-lg shadow-black/20 backdrop-blur-sm group">
                            <h4 className="text-xl font-bold text-[var(--color-primary-400)] mb-3 font-sansation group-hover:text-[var(--color-primary-300)] transition-colors">Actionable Analytics</h4>
                            <p className="text-zinc-400 text-sm leading-relaxed">Access a full audit trail of every transaction. Understand tool usage trends and use real data to optimize job costs.</p>
                        </div>

                        <div className="bg-zinc-900/40 border border-white/5 rounded-xl p-6 hover:border-[var(--color-primary-400)]/30 transition-colors shadow-lg shadow-black/20 backdrop-blur-sm group">
                            <h4 className="text-xl font-bold text-[var(--color-primary-400)] mb-3 font-sansation group-hover:text-[var(--color-primary-300)] transition-colors">Effortless Setup</h4>
                            <p className="text-zinc-400 text-sm leading-relaxed">Easily configure Work Orders, Job Templates, and manage all your machines and operators from a powerful, centralized interface.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
