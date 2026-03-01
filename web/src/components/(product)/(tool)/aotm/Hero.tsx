import { useState } from 'react';

export default function Hero() {
    const [hovered, setHovered] = useState(false);

    return (
        <section className="relative h-screen w-full overflow-hidden bg-black flex flex-col items-center justify-center">
            <div className="absolute inset-0 bg-black z-0" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,#422006_0%,transparent_60%)] opacity-40 z-0" />
            <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[150%] h-[80%] bg-[radial-gradient(ellipse_at_center,rgba(234,179,8,0.15)_0%,transparent_70%)] blur-[100px] z-0" />
            <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] z-0 mix-blend-overlay" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#000_90%)] z-0" />

            {/* AOTM text — cross-fades between white (behind) and gold (in front) */}
            <div
                className={`absolute top-[33%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none select-none ${
                    hovered ? 'z-30' : 'z-10'
                }`}
            >
                <h1 className="relative font-bold tracking-tighter leading-none text-[32vw]">
                    {/* White faded — default state */}
                    <span
                        className={`block absolute inset-0 bg-gradient-to-b from-white/60 to-white/10 bg-clip-text text-transparent transition-opacity duration-200 ${
                            hovered ? 'opacity-0' : 'opacity-100'
                        }`}
                    >
                        AOTM
                    </span>

                    {/* Gold — hover state, using primary palette (#e9ce60 → #c27b1d) */}
                    <span
                        className={`block absolute inset-0 bg-gradient-to-b from-[#e9ce60] via-[#db9e25] to-[#c27b1d] bg-clip-text text-transparent transition-opacity duration-300 drop-shadow-[0_0_60px_rgba(233,206,96,0.4)] ${
                            hovered ? 'opacity-100' : 'opacity-0'
                        }`}
                    >
                        AOTM
                    </span>

                    {/* Invisible spacer to hold layout height */}
                    <span className="block invisible">AOTM</span>
                </h1>
            </div>

            {/* Image layer — pointer-events-none so hover overlay below can fire */}
            <div className="relative z-20 w-full h-full flex flex-col items-center justify-center pointer-events-none">
                <div className="relative w-full h-full flex items-center justify-center p-4">
                    <div className="absolute inset-0 bg-yellow-400/10 blur-[120px] rounded-full opacity-60" />
                    <div className="relative aspect-[16/9] w-full max-w-[177.78vh] max-h-[90vh] flex items-center justify-center">
                        <img
                            src="/assets/aotm/AOTM_Hero.png"
                            alt="AOTM Machine"
                            className="w-full h-full object-contain drop-shadow-2xl"
                        />
                        <div className="absolute left-[11%] top-[82%] flex flex-col items-center animate-fade-in delay-500">
                            <span className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-white/20 bg-black/60 backdrop-blur-xl text-white font-bold text-[10px] sm:text-xs md:text-sm lg:text-base tracking-widest shadow-[0_0_15px_rgba(0,0,0,0.5)] whitespace-nowrap">
                                AOTM I
                            </span>
                        </div>
                        <div className="absolute left-[82%] top-[88%] -translate-x-1/2 flex flex-col items-center animate-fade-in delay-700">
                            <span className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-white/20 bg-black/60 backdrop-blur-xl text-white font-bold text-[10px] sm:text-xs md:text-sm lg:text-base tracking-widest shadow-[0_0_15px_rgba(0,0,0,0.5)] whitespace-nowrap">
                                AOTM XL
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Invisible z-40 overlay — owns the hover events */}
            <div
                className="absolute top-[33%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-40 w-full"
                style={{ height: '30vw' }}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
            />
        </section>
    );
}