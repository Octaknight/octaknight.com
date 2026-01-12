import { ArrowRight } from 'lucide-react';

export default function Hero() {
    return (
        <section className="relative h-screen w-full overflow-hidden bg-black flex flex-col items-center justify-center">
            <div className="absolute inset-0 bg-black z-0" />
            
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,#422006_0%,transparent_60%)] opacity-40 z-0" />
            
            <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[150%] h-[80%] bg-[radial-gradient(ellipse_at_center,rgba(234,179,8,0.15)_0%,transparent_70%)] blur-[100px] z-0" />
            
            <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] z-0 mix-blend-overlay" />

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#000_90%)] z-0" />

            <div className="absolute top-[33%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-full text-center pointer-events-none select-none">
                <h1 className="font-bold tracking-tighter leading-none">
                    <span className="block text-[32vw] text-white/40 bg-clip-text bg-gradient-to-b from-white/60 to-white/10">
                        AOTM
                    </span>
                </h1>
            </div>

            <div className="relative z-20 w-full h-full flex flex-col items-center justify-center">
                
                <div className="relative w-full h-full flex items-center justify-center">
                    <div className="absolute inset-0 bg-yellow-400/10 blur-[120px] rounded-full opacity-60" />
                    
                    <div className="relative w-full h-full max-w-[1600px] max-h-[90vh] flex items-center justify-center">
                        <img 
                            src="/assets/aotm/AOTM_Hero.png" 
                            alt="AOTM Machine" 
                            className="relative w-full h-full object-contain drop-shadow-2xl"
                        />

                        {/* Product Labels - Using container-relative positioning */}
                        {/* AOTM I - Left/Small Machine */}
                        <div className="absolute left-[calc(50%-20vw)] top-[calc(50%vh)] sm:left-[calc(50%-18vw)] sm:top-[calc(50%+1vh)] md:left-[calc(50%-16vw)] md:top-[50%] lg:left-[calc(50%-14vw)] lg:top-[calc(50%-2vh)] flex flex-col items-center animate-fade-in delay-500">
                            <span className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-white/20 bg-black/60 backdrop-blur-xl text-white font-bold text-xs sm:text-sm md:text-base tracking-widest shadow-[0_0_15px_rgba(0,0,0,0.5)] whitespace-nowrap">
                                AOTM I
                            </span>
                        </div>

                        {/* AOTM XL - Right/Big Machine */}
                        <div className="absolute right-[calc(50%-38vw)] top-[calc(50%-12vh)] sm:right-[calc(50%-36vw)] sm:top-[calc(50%-20vh)] md:right-[calc(50%-34vw)] md:top-[calc(50%-22vh)] lg:right-[calc(50%-32vw)] lg:top-[calc(50%-24vh)] xl:right-[calc(50%-34vw)] xl:top-[calc(50%-30vh)] flex flex-col items-center animate-fade-in delay-700">
                            <span className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-white/20 bg-black/60 backdrop-blur-xl text-white font-bold text-xs sm:text-sm md:text-base tracking-widest shadow-[0_0_15px_rgba(0,0,0,0.5)] whitespace-nowrap">
                                AOTM XL
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-6 md:bottom-8 z-30 animate-fade-in-up delay-300 w-full flex justify-center px-4">
                <div className="flex items-center justify-between md:justify-start gap-4 md:gap-6 px-5 py-2.5 md:px-6 md:py-3 rounded-full border border-white/10 bg-black/40 backdrop-blur-2xl shadow-[0_0_40px_rgba(0,0,0,0.5)] hover:border-white/20 transition-colors duration-500 w-full max-w-sm md:w-auto md:max-w-none">
                    <div className="hidden md:flex items-center gap-3">
                        <span className="text-white/60 text-xs font-bold tracking-[0.2em] uppercase">
                            AOTM Series
                        </span>
                    </div>

                    {/* Divider - Desktop Only */}
                    <div className="hidden md:block w-px h-4 bg-white/10" />
                    
                    {/* Buttons */}
                    <div className="flex items-center justify-between w-full md:w-auto gap-4">
                        <button className="cursor-pointer text-white/80 hover:text-white text-sm font-medium transition-colors hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] whitespace-nowrap">
                            View Specs
                        </button>
                        
                        <button className="cursor-pointer group relative px-5 py-2 bg-[var(--color-primary-300)] text-black rounded-full font-bold text-sm hover:bg-[var(--color-primary-400)] transition-all duration-300 flex items-center gap-2 overflow-hidden">
                            <span className="relative z-10">Order Now</span>
                            <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
                            
                            {/* Hover Glow */}
                            <div className="absolute inset-0 bg-[var(--color-primary-400)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}