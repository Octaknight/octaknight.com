const FEATURES = [
    {
        id: 'shop-floor',
        label: 'Shop Floor',
        title: "Built for Speed & Precision",
        description: "On the shop floor, every second counts. Our operator interface is stripped down to the essentials large touch targets, facial recognition login, and job-specific tool lists. No training required.",
        image: "/assets/aotm/gui/GUI_1.png",
        highlight: "Operator View",
        metrics: [
            {
                label: "Latency",
                value: "15ms",
            },
            {
                label: "Accuracy",
                value: "99.99%",
            }
        ]
    },
    {
        id: 'admin',
        label: 'Admin Control',
        title: "Total Command Center",
        description: "Manage your entire fleet from one screen. Configure permissions, set up new machines, and monitor live status across multiple facilities without leaving your desk.",
        image: "/assets/aotm/gui/GUI_2.png",
        highlight: "Admin Dashboard",
        metrics: [
            {
                label: "Fleet Capacity",
                value: "500+",
            },
            {
                label: "Security",
                value: "E2EE",
            }
        ]
    },
    {
        id: 'analytics',
        label: 'Analytics',
        title: "Data That Drives Decisions",
        description: "Stop guessing. Get detailed reports on tool usage, job costs, and inventory turnover. Identify bottlenecks and clear actionable insights to optimize your operations.",
        image: "/assets/aotm/gui/GUI_3.png",
        highlight: "Advanced Insights",
        metrics: [
            {
                label: "Efficiency",
                value: "+24%",
            },
            {
                label: "Data Points",
                value: "2M+",
            }
        ]
    }
];

export default function Intelligence() {
    return (
        <section className="bg-zinc-950 py-32 px-4 relative overflow-hidden">
            <div className="absolute top-1/4 -right-[10%] w-[600px] h-[600px] bg-[var(--color-primary-400)]/20 blur-[100px] rounded-full pointer-events-none mix-blend-screen opacity-40" />
            <div className="absolute bottom-1/4 -left-[10%] w-[500px] h-[500px] bg-[var(--color-primary-400)]/20 blur-[100px] rounded-full pointer-events-none mix-blend-screen opacity-40" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="mb-32 text-center max-w-3xl mx-auto">
                    <h2 className="text-4xl md:text-6xl font-sansation font-bold text-white mb-8">
                        Intelligence at <span className="text-[var(--color-primary-400)]">Every Step</span>
                    </h2>
                    <p className="text-xl text-zinc-400 font-sansation">
                        Complete visibility and control from the shop floor to the top floor.
                    </p>
                </div>

                <div className="space-y-32">
                    {FEATURES.map((feature:any, index) => (
                        <div 
                            key={feature.id}
                            className={`group relative ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
                        >
                            <div className={`grid lg:grid-cols-12 gap-12 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                                <div className={`lg:col-span-8 ${index % 2 !== 0 ? 'lg:order-last' : ''}`}>
                                    <div className="relative perspective-1000 cursor-pointer">
                                        <div className="absolute -inset-1 bg-gradient-to-r from-[var(--color-primary-400)] to-[var(--color-primary-600)] rounded-2xl blur opacity-10 group-hover:opacity-30 transition duration-500 will-change-opacity"></div>
                                        <div className="relative rounded-2xl overflow-hidden bg-zinc-900 border border-white/10 shadow-2xl shadow-black/50 transform transition-transform duration-500 hover:scale-[1.01] will-change-transform">
                                            <div className="absolute top-0 left-0 w-full h-8 bg-zinc-900/90 border-b border-white/5 flex items-center px-4 gap-2 z-10 backdrop-blur-sm">
                                                <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                                                <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                                                <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                                                <div className="ml-4 px-3 py-0.5 rounded-full bg-black/50 border border-white/5 text-[10px] text-zinc-500 font-mono">
                                                    octaknight.os
                                                </div>
                                            </div>
                                            <img 
                                                src={feature.image} 
                                                alt={feature.title}
                                                className="w-full h-auto pt-8"
                                                loading={index === 0 ? "eager" : "lazy"}
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none" />
                                        </div>
                                    </div>
                                </div>

                                <div className={`lg:col-span-4 space-y-8 ${index % 2 !== 0 ? 'lg:order-first' : ''}`}>
                                    <div className="cursor-default">
                                        <div className="flex items-center gap-3 mb-6">
                                            <span className="text-[var(--color-primary-400)] text-xs font-bold tracking-[0.2em] uppercase">
                                                {feature.highlight}
                                            </span>
                                        </div>
                                        <h3 className="text-3xl md:text-5xl font-sansation font-bold text-white mb-6 leading-tight">
                                            {feature.title}
                                        </h3>
                                        <p className="text-zinc-400 text-lg leading-relaxed font-sansation">
                                            {feature.description}
                                        </p>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4 pt-8 border-t border-white/5 cursor-default">
                                        {feature.metrics.map((metric:any, index:any) => (
                                            <div key={index} className="space-y-2">
                                                <div className="text-2xl font-mono text-white">{metric.value}</div>
                                                <div className="text-xs text-zinc-500 uppercase tracking-widest">{metric.label}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
