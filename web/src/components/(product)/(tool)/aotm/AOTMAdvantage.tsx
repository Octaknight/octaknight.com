export default function AOTMAdvantage() {
    const features = [
        {
            feature: "Automated Tool Dispensing",
            local: "Limited",
            foreign: "Limited",
            aotm: "Complete"
        },
        {
            feature: "Tool Lifecycle Tracking",
            local: "Limited",
            foreign: "Limited",
            aotm: "Comprehensive"
        },
        {
            feature: "Return of Used Inserts",
            local: "Limited",
            foreign: "Limited",
            aotm: "Comprehensive"
        },
        {
            feature: "Secure Access",
            local: "Card / PIN",
            foreign: "Basic biometrics",
            aotm: "Biometrics + Face Rec"
        },
        {
            feature: "Real-time Analytics & Reporting",
            local: "Basic",
            foreign: "Limited",
            aotm: "Advanced, AI-powered"
        },
        {
            feature: "ERP / MES Integration",
            local: "Limited",
            foreign: "Costly add-on",
            aotm: "Standard-ready"
        },
        {
            feature: "Operating Cost",
            local: "Moderate",
            foreign: "High",
            aotm: "Low"
        }
    ];

    return (
        <section className="bg-black py-20 md:py-32 px-4 border-t border-white/5">
            <div className="max-w-7xl mx-auto">
                <div className="mb-12 md:mb-20 text-center">
                    <h2 className="text-3xl md:text-5xl font-sansation font-bold text-white mb-4">
                        The AOTM <span className="text-[var(--color-primary-400)]">Advantage</span>
                    </h2>
                    <p className="text-lg md:text-xl text-zinc-400">
                        A modern platform built to outperform legacy and local solutions.
                    </p>
                </div>

                {/* Desktop Table View */}
                <div className="hidden md:block bg-zinc-900/30 rounded-3xl shadow-xl overflow-hidden border border-white/10">
                    <div className="overflow-x-auto">
                        <table className="w-full min-w-[1000px] border-collapse">
                            <thead>
                                <tr className="bg-white/5">
                                    <th className="text-left py-8 px-8 text-zinc-400 font-bold text-lg w-1/4">Feature</th>
                                    <th className="text-center py-8 px-8 text-zinc-400 font-bold text-lg w-1/4">Local Solutions</th>
                                    <th className="text-center py-8 px-8 text-zinc-400 font-bold text-lg w-1/4">Foreign Solutions</th>
                                    <th className="text-center py-8 px-8 text-[var(--color-primary-400)] font-bold text-xl w-1/4 bg-[var(--color-primary-400)]/10">
                                        Octaknight AOTM
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5">
                                {features.map((item, index) => (
                                    <ComparisonRow 
                                        key={index}
                                        feature={item.feature}
                                        local={item.local}
                                        foreign={item.foreign}
                                        aotm={item.aotm}
                                        highlight
                                    />
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Mobile Card View */}
                <div className="md:hidden space-y-6">
                    {features.map((item, index) => (
                        <div key={index} className="bg-zinc-900/30 rounded-2xl p-6 border border-white/10 space-y-4">
                            <h3 className="text-white font-bold text-xl border-b border-white/10 pb-3">
                                {item.feature}
                            </h3>
                            
                            <div className="space-y-3">
                                <div className="flex justify-between items-center">
                                    <span className="text-zinc-500 text-sm">Local</span>
                                    <span className="text-zinc-400 font-medium">{item.local}</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-zinc-500 text-sm">Foreign</span>
                                    <span className="text-zinc-400 font-medium">{item.foreign}</span>
                                </div>
                                <div className="flex justify-between items-center pt-2 border-t border-white/5">
                                    <span className="text-[var(--color-primary-400)] font-bold">Octaknight AOTM</span>
                                    <span className="text-[var(--color-primary-400)] font-bold text-lg">{item.aotm}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function ComparisonRow({ feature, local, foreign, aotm, highlight }: { feature: string; local: string; foreign: string; aotm: string; highlight?: boolean }) {
    return (
        <tr className="group hover:bg-white/5 transition-colors">
            <td className="py-6 px-8 text-white font-bold text-lg">{feature}</td>
            <td className="py-6 px-8 text-zinc-500 text-center text-lg">{local}</td>
            <td className="py-6 px-8 text-zinc-500 text-center text-lg">{foreign}</td>
            <td className={`py-6 px-8 text-center text-lg font-bold ${highlight ? 'text-[var(--color-primary-400)] bg-[var(--color-primary-400)]/5' : 'text-white'}`}>
                {aotm}
            </td>
        </tr>
    );
}
