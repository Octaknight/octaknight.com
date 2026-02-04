import { ArrowRight } from "lucide-react";
import OrderModal from "@/components/(product)/OrderModal";
import CalButton from "@/components/CalButton";
import { useState } from "react";

const CTASection = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <section className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="relative overflow-hidden rounded-[2rem] bg-[#030303] border border-white/5 shadow-2xl isolate group">
                
                <div className="absolute inset-0 opacity-30 group-hover:opacity-50 transition-opacity duration-1000 pointer-events-none">
                    <div className="absolute top-[-50%] left-[-20%] w-[80%] h-[150%] bg-[conic-gradient(from_0deg,transparent_0deg,#E9CE60_100deg,transparent_180deg)] animate-[spin_30s_linear_infinite] blur-[100px] mix-blend-screen opacity-100" />
                    <div className="absolute bottom-[-50%] right-[-20%] w-[80%] h-[150%] bg-[conic-gradient(from_180deg,transparent_0deg,#FCD34D_100deg,transparent_180deg)] animate-[spin_45s_linear_infinite_reverse] blur-[100px] mix-blend-screen opacity-100" />
                </div>

                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)] z-0 pointer-events-none opacity-50" />

                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay pointer-events-none z-0" />

                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-50" />
                
                <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10 p-10 md:p-14 lg:p-16">
                    
                    <div className="flex flex-col gap-6 text-center md:text-left max-w-2xl">
                        <div className="space-y-5">
                            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.1]">
                                Ready to eliminate <br className="hidden md:block"/>
                                <span className="text-white">tool chaos?</span>
                            </h2>
                            <p className="text-lg md:text-xl text-white/50 leading-relaxed font-light max-w-lg mx-auto md:mx-0">
                                Deploy AOTM in your facility and start tracking tools, costs, and accountability from day one.
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center gap-5 w-full md:w-auto shrink-0">
                        <button
                        onClick={() => setIsModalOpen(true)}
                        className="cursor-pointer px-6 py-3 bg-[var(--color-primary-400)] rounded-full font-satoshi text-[var(--secondary)] font-medium hover:bg-[var(--color-primary-300)] transition-all duration-300 shadow-lg shadow-yellow-500/10 flex items-center justify-center w-full sm:w-auto"
                    >
                        <span className="whitespace-nowrap mr-2 text-black">
                            Request a Quote
                        </span>
                        <div
                            className="flex items-center justify-center h-6 w-6 bg-black rounded-full text-[var(--color-primary-400)]"
                        >
                            <ArrowRight className="h-3 w-3 text-white" />
                        </div>
                    </button>

                     <CalButton buttonText="Talk to an Engineer" />
                    </div>
                </div>
            </div>

            <OrderModal 
                isOpen={isModalOpen} 
                onClose={() => setIsModalOpen(false)} 
                productName='AOTM Series'
            />
        </section>
    );
};

export default CTASection;
