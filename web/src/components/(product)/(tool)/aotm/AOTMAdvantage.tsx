export default function AOTMAdvantage() {
    return (
        <section className="bg-black py-32 px-4 border-t border-white/5">
            <div className="max-w-7xl mx-auto">
                <div className="mb-20 text-center">
                    <h2 className="text-4xl md:text-5xl font-sansation font-bold text-white mb-4">
                        The AOTM Advantage
                    </h2>
                    <p className="text-xl text-zinc-400">
                        A modern platform built to outperform legacy and local solutions.
                    </p>
                </div>

                <div className="bg-zinc-900/30 rounded-3xl shadow-xl overflow-hidden border border-white/10">
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
                                <ComparisonRow 
                                    feature="Automated Tool Dispensing"
                                    local="Limited"
                                    foreign="Limited"
                                    aotm="Complete"
                                    highlight
                                />
                                <ComparisonRow 
                                    feature="Tool Lifecycle Tracking"
                                    local="Limited"
                                    foreign="Limited"
                                    aotm="Comprehensive"
                                    highlight
                                />
                                <ComparisonRow 
                                    feature="Return of Used Inserts"
                                    local="Limited"
                                    foreign="Limited"
                                    aotm="Comprehensive"
                                    highlight
                                />
                                <ComparisonRow 
                                    feature="Secure Access"
                                    local="Card / PIN"
                                    foreign="Basic biometrics"
                                    aotm="Biometrics + Face Rec"
                                    highlight
                                />
                                <ComparisonRow 
                                    feature="Real-time Analytics & Reporting"
                                    local="Basic"
                                    foreign="Limited"
                                    aotm="Advanced, AI-powered"
                                    highlight
                                />
                                <ComparisonRow 
                                    feature="ERP / MES Integration"
                                    local="Limited"
                                    foreign="Costly add-on"
                                    aotm="Standard-ready"
                                    highlight
                                />
                                <ComparisonRow 
                                    feature="Operating Cost"
                                    local="Moderate"
                                    foreign="High"
                                    aotm="Low"
                                    highlight
                                />
                            </tbody>
                        </table>
                    </div>
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
