import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
    return (
        <div className="relative min-h-screen w-full bg-black overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-zinc-900/40 via-black to-black z-0"></div>
            
            {/* Content - Centered Absolute Overlay */}
            <div className="absolute inset-0 z-20 container mx-auto px-4 flex flex-col items-center justify-center text-center pointer-events-none">
                <div className="pointer-events-auto">
                    <h1 className="text-5xl md:text-7xl font-bricolage font-bold text-white tracking-tight leading-none mb-5 animate-fade-in-up">
                        Octa<span className="text-[var(--color-primary-400)]">Arm</span> <br />
                        Series X
                    </h1>
                    
                    <p className="text-lg text-zinc-400 font-satoshi max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
                        Precision engineering meets adaptive intelligence.
                    </p>

                    <p className="text-lg text-zinc-400 font-satoshi mb-5 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
                        The future of automated assembly is here.
                    </p>

                    <div className="animate-fade-in-up animation-delay-400 flex flex-col sm:flex-row items-center justify-center gap-4">
                        <button 
                            onClick={() => document.getElementById('specs')?.scrollIntoView({ behavior: 'smooth' })}
                            className="group relative inline-flex items-center gap-3 px-6 py-3 bg-transparent border border-white/20 rounded-full overflow-hidden transition-all duration-300 hover:border-white hover:bg-white/5 backdrop-blur-sm cursor-pointer"
                        >
                            <span className="font-satoshi text-white text-sm font-medium tracking-wide group-hover:text-white transition-colors">
                                View Specs
                            </span>
                        </button>
                        <Link 
                            to={"/tool-management"} 
                            className="cursor-pointer px-6 py-3 bg-[var(--color-primary-400)] rounded-full font-satoshi text-[var(--secondary)] font-medium hover:bg-[var(--color-primary-300)] transition-all duration-300 shadow-lg shadow-yellow-500/10 flex items-center justify-center"
                        >
                            <span className="whitespace-nowrap mr-2 text-black">
                                Order now
                            </span>
                            <div
                                className="flex items-center justify-center h-6 w-6 bg-black rounded-full text-[var(--color-primary-400)]"
                            >
                                <ArrowRight className="h-3 w-3 text-white" />
                            </div>
                        </Link>
                        
                    </div>
                </div>
            </div>

            {/* Robotic Arm Image - Background Layer */}
            <div className="absolute bottom-0 w-full h-full z-10 animate-fade-in-up animation-delay-600 pointer-events-none">
                <img 
                    src="/assets/product/Hero.png" 
                    alt="Robotic Arm Series X" 
                    className="w-full h-full object-contain object-bottom"
                />
                {/* Gradient Overlay to blend image with background */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-40"></div>
                <div className="absolute inset-0 bg-gradient-to-l from-black via-transparent to-black opacity-40"></div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[var(--color-primary-400)]/5 rounded-full blur-3xl z-0 pointer-events-none"></div>
        </div>
    );
}