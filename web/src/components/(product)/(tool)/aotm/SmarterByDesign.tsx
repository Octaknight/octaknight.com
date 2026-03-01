export default function SmarterByDesign() {
    return (
        <section className="bg-zinc-950 py-32 px-6 relative overflow-hidden">
            {/* Ambient Background Effects */}
            <div className="absolute top-[30%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[var(--color-primary-400)]/5 blur-[120px] rounded-full pointer-events-none mix-blend-screen" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="mb-20 text-center">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-sansation font-bold text-white tracking-wide">
                        Smarter by <span className="text-[var(--color-primary-400)]">Design</span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
                    
                    {/* Card 1 */}
                    <div className="bg-zinc-900/40 border border-white/5 rounded-2xl p-8 hover:border-[var(--color-primary-400)]/30 transition-colors shadow-xl shadow-black/30 backdrop-blur-sm group flex flex-col items-start gap-6 h-full">
                        <div className="w-20 h-20 flex-shrink-0">
                            <img 
                                src="/assets/aotm/cardIcons/card1.png" 
                                alt="" 
                                aria-hidden="true" 
                                className="w-full h-full object-contain"
                            />
                        </div>
                        <div className="flex-1">
                            <h3 className="text-xl md:text-2xl font-bold text-[var(--color-primary-400)] mb-4 font-sansation group-hover:text-[var(--color-primary-300)] transition-colors leading-tight">
                                True One-Touch Withdrawal
                            </h3>
                            <div className="text-zinc-400 text-[15px] leading-relaxed space-y-4">
                                <p>
                                    AOTM is the only dispensing solution that offers a truly automated, single-step withdrawal. There are no drawers to open, no boxes to handle, and no secondary actions required.
                                </p>
                                <p>
                                    Your operator selects their tool on the screen and receives it directly from the machine. It is the fastest, cheapest, and simplest dispensing workflow on the market.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-zinc-900/40 border border-white/5 rounded-2xl p-8 hover:border-[var(--color-primary-400)]/30 transition-colors shadow-xl shadow-black/30 backdrop-blur-sm group flex flex-col items-start gap-6 h-full">
                        <div className="w-20 h-20 flex-shrink-0">
                            <img 
                                src="/assets/aotm/cardIcons/card2.png" 
                                alt="" 
                                aria-hidden="true" 
                                className="w-full h-full object-contain"
                            />
                        </div>
                        <div className="flex-1">
                            <h3 className="text-xl md:text-2xl font-bold text-[var(--color-primary-400)] mb-4 font-sansation group-hover:text-[var(--color-primary-300)] transition-colors leading-tight">
                                Industry-Leading Storage Density
                            </h3>
                            <div className="text-zinc-400 text-[15px] leading-relaxed space-y-4">
                                <p>
                                    AOTM leads the market in storage efficiency. The innovative, cartridge-free system eliminates wasted space from bulky packaging and cartridges, allowing you to store more unique tool types in a smaller footprint than any other solution.
                                </p>
                                <p className="font-medium text-zinc-300">
                                    Maximize your inventory, not your floor space.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-zinc-900/40 border border-white/5 rounded-2xl p-8 hover:border-[var(--color-primary-400)]/30 transition-colors shadow-xl shadow-black/30 backdrop-blur-sm group flex flex-col items-start gap-6 h-full">
                        <div className="w-20 h-20 flex-shrink-0">
                            <img 
                                src="/assets/aotm/cardIcons/card3.png" 
                                alt="" 
                                aria-hidden="true" 
                                className="w-full h-full object-contain"
                            />
                        </div>
                        <div className="flex-1">
                            <h3 className="text-xl md:text-2xl font-bold text-[var(--color-primary-400)] mb-4 font-sansation group-hover:text-[var(--color-primary-300)] transition-colors leading-tight">
                                A Scalable, Networked Fleet
                            </h3>
                            <div className="text-zinc-400 text-[15px] leading-relaxed space-y-4">
                                <p>
                                    Your tool management system should grow with your business. Pair any number of AOTM units together to create a single, unified inventory management system.
                                </p>
                                <p>
                                    Every AOTM has the capability of communicating with others in the fleet, allowing you to manage your entire operation: whether it's one machine or fifty, manage them all from a single, centralized dashboard.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
