import { useState, useEffect } from 'react';
import { Download, ArrowUp } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/(product)/(tool)/aotm/Hero';
import AOTMAdvantage from '@/components/(product)/(tool)/aotm/AOTMAdvantage';
// import ProductGallery from '@/components/(product)/(tool)/aotm/ProductGallery';
// import InitialVideo from '@/components/(product)/(tool)/aotm/InitialVideo';
// import Specifications from '@/components/(product)/(tool)/aotm/Specifications';
// import AOTMEcosystem from '@/components/(product)/(tool)/aotm/AOTMEcosystem';
import Intelligence from '@/components/(product)/(tool)/aotm/Intelligence';
import SmarterByDesign from '@/components/(product)/(tool)/aotm/SmarterByDesign';
import IndustryProblems from '@/components/(product)/(tool)/aotm/IndustryProblems';
import CTASection from '@/components/(product)/(tool)/aotm/CTASection';
import OrderModal from '@/components/(product)/OrderModal';
import Solution from '@/components/(product)/(tool)/aotm/Solution';
import Specifications from '@/components/(product)/(tool)/aotm/Specifications';

export default function AOTM() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [showTopBtn, setShowTopBtn] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 400) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

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
                            <button 
                                onClick={() => document.getElementById('specs')?.scrollIntoView({ behavior: 'smooth' })}
                                className="cursor-pointer text-white/80 hover:text-white text-sm font-medium transition-colors hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] whitespace-nowrap"
                            >
                                View Specs
                            </button>

                            <div className="w-px h-4 bg-white/10 hidden md:block" />

                            <a 
                                href="https://pub-05ef32feaa264b41bf7b2f560600c73e.r2.dev/tools/products/aotm/brochure.pdf" 
                                target="_blank"
                                rel="noopener noreferrer"
                                className="cursor-pointer text-white/80 hover:text-white text-sm font-medium transition-colors hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] whitespace-nowrap flex items-center gap-2"
                            >
                                <Download size={14} />
                                <span>Brochure</span>
                            </a>
                            
                            <button 
                                onClick={() => setIsModalOpen(true)}
                                className="cursor-pointer group relative px-5 py-2 bg-[var(--color-primary-300)] text-black rounded-full font-bold text-sm hover:bg-[var(--color-primary-400)] transition-all duration-300 flex items-center gap-2 overflow-hidden"
                            >
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
            
            {/* <InitialVideo />
            
            <ProductGallery />
                        
            <AOTMEcosystem />
             */}
            
            <IndustryProblems />

            <Solution/>

            <Intelligence />

            <SmarterByDesign />
            
            <Specifications />

            <AOTMAdvantage />
            
            <CTASection />

            <OrderModal 
                isOpen={isModalOpen} 
                onClose={() => setIsModalOpen(false)} 
                productName='AOTM Series'
            />

            {/* Back to Top Button */}
            <button
                onClick={scrollToTop}
                className={`fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 p-4 rounded-full border border-white/10 bg-black/40 backdrop-blur-2xl shadow-[0_0_40px_rgba(0,0,0,0.5)] text-white/50 hover:text-white hover:border-white/20 hover:bg-white/5 transition-all duration-500 cursor-pointer ${showTopBtn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}
                aria-label="Back to top"
            >
                <ArrowUp size={22} strokeWidth={2} />
            </button>
        </div>
    );
}