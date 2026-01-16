

export default function Specifications() {
    return (
        <section className="bg-black/10 py-32 px-4 border-t border-white/5">
            <div className="max-w-7xl mx-auto">
                <div className="mb-20 text-center">
                    <h2 className="text-4xl md:text-5xl font-sansation font-bold text-white mb-6">
                        Specifications
                    </h2>
                    <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
                        Compare models to find the perfect fit for your production line.
                    </p>
                </div>

                {/* Comparison Table */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 relative">
                    {/* Vertical Divider (Desktop only) */}
                    <div className="hidden md:block absolute left-1/2 top-52 bottom-0 w-px bg-white/10 -translate-x-1/2" />

                    {/* AOTM Column */}
                    <div className="flex flex-col items-center">
                        {/* Header */}
                        <div className="mb-12 text-center">
                            <div className="relative w-64 h-48 mb-6 mx-auto flex items-center justify-center">
                                <img 
                                    src="/assets/aotm/AOTM_I.png" 
                                    alt="AOTM" 
                                    className="max-w-full max-h-full object-contain drop-shadow-2xl"
                                />
                            </div>
                            <h3 className="text-3xl font-sansation font-bold text-white mb-2">AOTM-I</h3>
                            <p className="text-zinc-500">Standard Capacity</p>
                        </div>

                        {/* Specs */}
                        <div className="w-full space-y-8">
                            <SpecItem label="Capacity" value="102 slots" />
                            <SpecItem label="Max Inserts (5mm thick)" value="~4,500" />
                            <SpecItem label="Footprint (L×W×H)" value="1030 × 685 × 555 mm" />
                            <SpecItem label="Interface" value="12.7&quot; touchscreen GUI" />
                            <SpecItem label="Networking" value="Wi-Fi + LAN" />
                            
                            {/* Mock Specs */}
                            <SpecItem label="Power Supply" value="110-240V AC, 50/60Hz" />
                            <SpecItem label="Weight" value="~85 kg" />
                            <SpecItem label="Security" value="RFID Access Control" />
                        </div>
                    </div>

                    {/* AOTM-XL Column */}
                    <div className="flex flex-col items-center">
                        {/* Header */}
                        <div className="mb-12 text-center">
                            <div className="relative w-64 h-48 mb-6 mx-auto flex items-center justify-center">
                                <img 
                                    src="/assets/aotm/AOTM_XL.png" 
                                    alt="AOTM-XL" 
                                    className="max-w-full max-h-full object-contain drop-shadow-2xl"
                                />
                            </div>
                            <h3 className="text-3xl font-sansation font-bold text-white mb-2">AOTM-XL</h3>
                            <p className="text-[var(--color-primary-400)]">High Capacity</p>
                        </div>

                        {/* Specs */}
                        <div className="w-full space-y-8">
                            <SpecItem label="Capacity" value="204 slots" highlight />
                            <SpecItem label="Max Inserts (5mm thick)" value="~9,000" highlight />
                            <SpecItem label="Footprint (L×W×H)" value="1030 × 685 × 940 mm" />
                            <SpecItem label="Interface" value="12.7&quot; touchscreen GUI" />
                            <SpecItem label="Networking" value="Wi-Fi + LAN" />
                            
                            {/* Mock Specs */}
                            <SpecItem label="Power Supply" value="110-240V AC, 50/60Hz" />
                            <SpecItem label="Weight" value="~120 kg" />
                            <SpecItem label="Security" value="RFID + Biometric Access" highlight />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function SpecItem({ label, value, highlight = false }: { label: string; value: string; highlight?: boolean }) {
    return (
        <div className="flex flex-col items-center text-center border-b border-white/5 pb-4 last:border-0">
            <span className="text-zinc-500 text-sm uppercase tracking-wider mb-1">{label}</span>
            <span className={`text-xl md:text-2xl font-bold ${highlight ? 'text-[var(--color-primary-400)]' : 'text-white'}`}>
                {value}
            </span>
        </div>
    );
}