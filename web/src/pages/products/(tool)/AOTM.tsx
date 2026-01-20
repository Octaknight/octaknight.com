import Navbar from '@/components/Navbar';
import Hero from '@/components/(product)/(tool)/aotm/Hero';
import AOTMAdvantage from '@/components/(product)/(tool)/aotm/AOTMAdvantage';
import ProductGallery from '@/components/(product)/(tool)/aotm/ProductGallery';
import InitialVideo from '@/components/(product)/(tool)/aotm/InitialVideo';
import Specifications from '@/components/(product)/(tool)/aotm/Specifications';
import AOTMEcosystem from '@/components/(product)/(tool)/aotm/AOTMEcosystem';
import Intelligence from '@/components/(product)/(tool)/aotm/Intelligence';
// import SmarterByDesign from '@/components/(product)/(tool)/aotm/SmarterByDesign';
import IndustryProblems from '@/components/(product)/(tool)/aotm/IndustryProblems';

export default function AOTM() {
    return (
        <div className="min-h-screen bg-black text-white selection:bg-[var(--color-primary-400)] selection:text-black">
            <Navbar page="aotm" />

            <div className="relative">
                <Hero />
                
                <div className="absolute bottom-6 md:bottom-8 left-0 right-0 z-30 animate-fade-in-up delay-300 w-full flex justify-center px-4">
                    <div className="flex items-center justify-between md:justify-start gap-4 md:gap-6 px-5 py-2.5 md:px-6 md:py-3 rounded-full border border-white/10 bg-black/40 backdrop-blur-2xl shadow-[0_0_40px_rgba(0,0,0,0.5)] hover:border-white/20 transition-colors duration-500 w-full max-w-sm md:w-auto md:max-w-none">
                        <div className="hidden md:flex items-center gap-3">
                            <span className="text-white/60 text-xs font-bold tracking-[0.2em] uppercase">
                                AOTM Series
                            </span>
                        </div>

                        <div className="hidden md:block w-px h-4 bg-white/10" />
                        
                        <div className="flex items-center justify-between w-full md:w-auto gap-4">
                            <button className="cursor-pointer text-white/80 hover:text-white text-sm font-medium transition-colors hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] whitespace-nowrap">
                                View Specs
                            </button>
                            
                            <button className="cursor-pointer group relative px-5 py-2 bg-[var(--color-primary-300)] text-black rounded-full font-bold text-sm hover:bg-[var(--color-primary-400)] transition-all duration-300 flex items-center gap-2 overflow-hidden">
                                <span className="relative z-10">Order Now</span>
                                <svg className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                                
                                <div className="absolute inset-0 bg-[var(--color-primary-400)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            
            <InitialVideo />
            
            <ProductGallery />
            
            <Specifications />
            
            <AOTMEcosystem />
            
            <Intelligence />
            
            {/* <SmarterByDesign /> */}
            
            <IndustryProblems />
             
            <AOTMAdvantage />
        </div>
    );
}