

export default function Specifications() {


    return (
        <section id="specs" className="bg-[#101010] py-24 px-4 border-t border-white/5 relative overflow-hidden">
            <div className="absolute top-1/4 -right-[10%] w-[600px] h-[600px] bg-[var(--color-primary-400)]/20 blur-[100px] rounded-full pointer-events-none mix-blend-screen opacity-10" />
            <div className="absolute bottom-1/4 -left-[10%] w-[500px] h-[500px] bg-[var(--color-primary-400)]/20 blur-[100px] rounded-full pointer-events-none mix-blend-screen opacity-10" />
            <div className="max-w-7xl mx-auto">
                {/* <div className="mb-32 text-center">
                    <h2 className="text-4xl md:text-6xl font-sansation font-bold text-white mb-6">
                        About <span className="text-[var(--color-primary-400)]">Product</span>
                    </h2>
                    <p className="text-xl max-w-3xl mx-auto text-zinc-400 leading-relaxed font-sansation">
                        The AOTM series redefines automated inventory management. Designed for the modern shop floor, it combines robust hardware with intelligent software to deliver 24/7 control over your tools and assets. Experience a new standard of efficiency, accountability, and speed.
                    </p>
                </div> */}

                <div className="mb-6 text-center">
                    <h2 className="text-4xl md:text-5xl font-sansation font-bold text-white mb-10">
                        About <span className="text-[var(--color-primary-400)]">Product</span>
                    </h2>
                    <p className="text-xl text-zinc-400 max-w-5xl mx-auto font-sansation">
                        The AOTM series redefines automated inventory management. Designed for the modern shop floor, it combines robust hardware with intelligent software to deliver 24/7 control over your tools and assets. Experience a new standard of efficiency, accountability, and speed.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 relative">
                    <div className="hidden md:block absolute left-1/2 top-40 bottom-0 w-px bg-white/10 -translate-x-1/2" />

                    <div className="flex flex-col items-center">
                        <div className="mb-16 text-center w-full">
                            <div className="relative w-full aspect-square max-w-md mx-auto mb-10 flex items-center justify-center">
                                <img 
                                    src="/assets/aotm/AOTM_I.png" 
                                    alt="AOTM" 
                                    className="w-full h-full object-contain drop-shadow-2xl"
                                />
                            </div>
                            <h3 className="text-4xl font-sansation font-bold text-white mb-2">AOTM-I</h3>
                            <p className="text-zinc-500 text-lg">Standard Capacity</p>
                        </div>

                        <div className="w-full space-y-8 px-4 md:px-8">
                            <SpecItem label="Capacity" value="102 slots" />
                            <SpecItem label="Max Inserts (5mm thick)" value="~4,500" />
                            <SpecItem label="Footprint (L×W×H)" value="1030 × 685 × 555 mm" />
                            <SpecItem label="Interface" value="12.7&quot; touchscreen GUI" />
                            <SpecItem label="Networking" value="Wi-Fi + LAN" />
                            
                            <SpecItem label="Power Supply" value="110-240V AC, 50/60Hz" />
                            <SpecItem label="Weight" value="~85 kg" />
                            <SpecItem label="Security" value="RFID Access Control" />
                        </div>
                    </div>

                    <div className="flex flex-col items-center">
                        <div className="mb-16 text-center w-full">
                            <div className="relative w-full aspect-square max-w-md mx-auto mb-10 flex items-center justify-center">
                                <img 
                                    src="/assets/aotm/AOTM_XL.png" 
                                    alt="AOTM-XL" 
                                    className="w-full h-full object-contain drop-shadow-2xl"
                                />
                            </div>
                            <h3 className="text-4xl font-sansation font-bold text-white mb-2">AOTM-XL</h3>
                            <p className="text-zinc-500 text-lg">High Capacity</p>
                        </div>

                        <div className="w-full space-y-8 px-4 md:px-8">
                            <SpecItem label="Capacity" value="204 slots" />
                            <SpecItem label="Max Inserts (5mm thick)" value="~9,000" />
                            <SpecItem label="Footprint (L×W×H)" value="1030 × 685 × 940 mm" />
                            <SpecItem label="Interface" value="12.7&quot; touchscreen GUI" />
                            <SpecItem label="Networking" value="Wi-Fi + LAN" />
                            
                            <SpecItem label="Power Supply" value="110-240V AC, 50/60Hz" />
                            <SpecItem label="Weight" value="~120 kg" />
                            <SpecItem label="Security" value="RFID + Biometric Access" />
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