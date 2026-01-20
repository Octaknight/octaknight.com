import { Grid, MousePointerClick, Network } from 'lucide-react';

export default function SmarterByDesign() {
    return (
        <section className="bg-white py-32 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="mb-24 text-center">
                    <h2 className="text-4xl md:text-6xl font-sansation font-bold text-black mb-6">
                        Smarter by Design.
                    </h2>
                    <p className="text-xl text-zinc-600 max-w-3xl mx-auto">
                        Engineered from the ground up for unparalleled density, speed, and scalability. We reimagined how tools should be stored and dispensed.
                    </p>
                </div>

                <div className="space-y-12">
                    <DesignCard 
                        icon={<Grid size={40} />}
                        title="Industry-Leading Storage Density"
                        description="AOTM leads the market in storage efficiency. The innovative, cartridge-free system eliminates wasted space from bulky packaging and cartridges, allowing you to store more unique tool types in a smaller footprint than any other solution. Maximize your inventory, not your floor space. This means you can place more machines in the same area or use the saved space for production."
                    />
                    <DesignCard 
                        icon={<MousePointerClick size={40} />}
                        title="True One-Touch Withdrawal"
                        description="AOTM is the only dispensing solution that offers a truly automated, single-step withdrawal. There are no drawers to open, no boxes to handle, and no secondary actions required. Your operator selects their tool on the screen and receives it directly from the machine. It is the fastest, cheapest, and simplest dispensing workflow on the market, saving seconds on every transaction that add up to hours every month."
                    />
                    <DesignCard 
                        icon={<Network size={40} />}
                        title="A Scalable, Networked Fleet"
                        description="Your tool management system should grow with your business. Pair any number of AOTM units together to create a single, unified inventory management system. Every AOTM has the capability of communicating with others in the fleet, allowing you to manage your entire operation: whether it's one machine or fifty, manage them all from a single, centralized dashboard. Scale up without complexity."
                    />
                </div>
            </div>
        </section>
    );
}

function DesignCard({ title, description, icon }: { title: string; description: string; icon: React.ReactNode }) {
    return (
        <div className="bg-zinc-50 p-12 rounded-3xl flex flex-col md:flex-row gap-8 items-start shadow-sm hover:shadow-xl transition-all duration-300 group border border-zinc-200">
            <div className="flex-shrink-0 w-20 h-20 bg-[var(--color-primary-400)]/10 rounded-2xl flex items-center justify-center text-[var(--color-primary-400)] group-hover:bg-[var(--color-primary-400)] group-hover:text-white transition-colors duration-300">
                {icon}
            </div>
            <div>
                <h3 className="text-3xl font-sansation font-bold text-black mb-4">
                    {title}
                </h3>
                <p className="text-zinc-600 leading-relaxed text-lg">
                    {description}
                </p>
            </div>
        </div>
    );
}
