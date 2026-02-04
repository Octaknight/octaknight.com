import { useState } from "react";
import { aotmSpecs } from "../../../../data/aotmSpecs";
import type { MaterialSpec, SizeWeightSpec } from "../../../../data/aotmSpecs";

export default function Specifications() {
    const [selectedModel, setSelectedModel] = useState<'AOTM_I' | 'AOTM_XL'>('AOTM_I');
    
    const currentSpecs = aotmSpecs[selectedModel];

    return (
        <section id="specs" className="bg-[#101010] py-24 px-4 border-t border-white/5 relative overflow-hidden">
            <div className="absolute top-1/4 -right-[10%] w-[600px] h-[600px] bg-[var(--color-primary-400)]/20 blur-[100px] rounded-full pointer-events-none mix-blend-screen opacity-10" />
            <div className="absolute bottom-1/4 -left-[10%] w-[500px] h-[500px] bg-[var(--color-primary-400)]/20 blur-[100px] rounded-full pointer-events-none mix-blend-screen opacity-10" />
            <div className="max-w-7xl mx-auto">
                <div className="mb-20 text-center">
                    <h2 className="text-4xl md:text-6xl font-sansation font-bold text-white mb-6">
                        Product <span className="text-[var(--color-primary-400)]">Specifications</span>
                    </h2>
                    <p className="text-xl max-w-3xl mx-auto text-zinc-400">
                        Explore the technical foundations metrics that define the AOTM series.
                    </p>
                </div>

                <div className="mb-32">
                    <div className="flex gap-4 mb-12">
                        <button
                            onClick={() => setSelectedModel('AOTM_I')}
                            className={`px-6 py-3 rounded-lg font-sansation font-bold text-lg transition-all duration-300 cursor-pointer ${
                                selectedModel === 'AOTM_I'
                                    ? 'bg-white text-black'
                                    : 'bg-transparent text-white border border-white/20 hover:border-white/40'
                            }`}
                        >
                            AOTM I
                        </button>
                        <button
                            onClick={() => setSelectedModel('AOTM_XL')}
                            className={`px-6 py-3 rounded-lg font-sansation font-bold text-lg transition-all duration-300 cursor-pointer ${
                                selectedModel === 'AOTM_XL'
                                    ? 'bg-white text-black'
                                    : 'bg-transparent text-white border border-white/20 hover:border-white/40'
                            }`}
                        >
                            AOTM XL
                        </button>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-8 lg:gap-16 items-center">
                        <div className="relative flex justify-center items-center min-h-[500px] lg:min-h-[700px]">
                            <div className="relative w-full h-full flex items-center justify-center">
                                <div className="grid grid-cols-2 gap-8 w-full max-w-2xl transition-opacity duration-500">
                                    <div className="flex items-center justify-center p-4 border border-white/10 rounded-lg bg-black/20">
                                        <img
                                            src={currentSpecs.specImages.front}
                                            alt={`${currentSpecs.displayName} Front View`}
                                            className="w-full h-auto opacity-90"
                                            style={{ filter: 'invert(1)' }}
                                        />
                                    </div>
                                    <div className="flex items-center justify-center p-4 border border-white/10 rounded-lg bg-black/20">
                                        <img
                                            src={currentSpecs.specImages.right}
                                            alt={`${currentSpecs.displayName} Side View`}
                                            className="w-full h-auto opacity-90"
                                            style={{ filter: 'invert(1)' }}
                                        />
                                    </div>
                                    <div className="flex items-center justify-center p-4 border border-white/10 rounded-lg bg-black/20">
                                        <img
                                            src={currentSpecs.specImages.left}
                                            alt={`${currentSpecs.displayName} Left View`}
                                            className="w-full h-auto opacity-90"
                                            style={{ filter: 'invert(1)' }}
                                        />
                                    </div>
                                    <div className="flex items-center justify-center p-4 border border-white/10 rounded-lg bg-black/20">
                                        <img
                                            src={currentSpecs.specImages.back}
                                            alt={`${currentSpecs.displayName} Technical Detail`}
                                            className="w-full h-auto opacity-90"
                                            style={{ filter: 'invert(1)' }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col gap-12">
                            <div className="space-y-6">
                                <h2 className="text-3xl md:text-2xl font-light tracking-tight text-zinc-100">Materials</h2>
                                <div className="space-y-3">
                                    {currentSpecs.materials.map((material: MaterialSpec, index: number) => (
                                        <SpecRow key={index} label={material.label} value={material.value} />
                                    ))}
                                </div>

                                <div className="pt-6 flex items-center justify-between text-zinc-500 text-sm border-t border-zinc-900/50 mt-6">
                                    <div className="flex gap-3 items-center">
                                        {currentSpecs.certifications.ce && <span className="font-semibold tracking-widest">CE</span>}
                                        {currentSpecs.certifications.fc && <span className="font-semibold tracking-widest">FC</span>}
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span>♻️ {currentSpecs.recyclable} Recyclable</span>
                                    </div>
                                </div>

                                <p className="text-xs text-zinc-600 leading-relaxed">
                                    {currentSpecs.description}
                                </p>
                            </div>

                            <div className="space-y-6">
                                <h2 className="text-3xl md:text-2xl font-light tracking-tight text-zinc-100">Size & Weight</h2>
                                <div className="space-y-3">
                                    {currentSpecs.sizeAndWeight.map((spec: SizeWeightSpec, index: number) => (
                                        <SpecRow key={index} label={spec.label} value={spec.value} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mb-20 text-center">
                    <h2 className="text-4xl md:text-5xl font-sansation font-bold text-white mb-6">
                        Choose Your <span className="text-[var(--color-primary-400)]">Capacity.</span>
                    </h2>
                    <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
                        Find the perfect fit for your production line.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 relative">
                    <div className="hidden md:block absolute left-1/2 top-52 bottom-0 w-px bg-white/10 -translate-x-1/2" />

                    <div className="flex flex-col items-center">
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

                        <div className="w-full space-y-8">
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
                        <div className="mb-12 text-center">
                            <div className="relative w-64 h-48 mb-6 mx-auto flex items-center justify-center">
                                <img 
                                    src="/assets/aotm/AOTM_XL.png" 
                                    alt="AOTM-XL" 
                                    className="max-w-full max-h-full object-contain drop-shadow-2xl"
                                />
                            </div>
                            <h3 className="text-3xl font-sansation font-bold text-white mb-2">AOTM-XL</h3>
                            <p className="text-zinc-500">High Capacity</p>
                        </div>

                        <div className="w-full space-y-8">
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

function SpecRow({ label, value }: { label: string; value: string }) {
    return (
        <div className="flex justify-between items-baseline py-3 border-b border-zinc-900">
            <span className="text-zinc-500 font-medium text-sm md:text-sm">{label}</span>
            <span className="text-zinc-300 text-right text-sm md:text-sm">{value}</span>
        </div>
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