import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
    return(
        <div className="relative min-h-screen flex items-center justify-center bg-transparent text-center z-10">
            <div className="max-w-3xl mx-auto px-4 -mt-24">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bricolage text-white leading-snug animate-fade-in-up">
                    Engineering the Next <br />
                    <span className="text-[var(--color-primary-400)]">Industrial Revolution</span>
                </h1>
                
                <p className="mt-2 text-md sm:text-lg text-white/70 font-satoshi max-w-2xl mx-auto animate-fade-in-up animation-delay-300">
                    Discover our ecosystem of advanced robotics and smart-factory solutions designed to automate your future.
                </p>

                <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animation-delay-600">
                    <button 
                        className="px-8 py-3 cursor-pointer bg-white/5 border border-white/10 rounded-full font-satoshi text-white/80 backdrop-blur-sm hover:bg-white/10 hover:text-white transition-all duration-300"
                    >
                        Request demo
                    </button>
                    <Link to={"/tool-management"} 
                        className="cursor-pointer px-8 py-3 bg-[var(--color-primary-400)] rounded-full font-satoshi text-[var(--secondary)] font-medium hover:bg-[var(--color-primary-300)] transition-all duration-300 shadow-lg shadow-yellow-500/10 flex items-center justify-center"
                    >
                        <Link to="/tool-management" className="whitespace-nowrap mr-2 text-black">
                            Explore solutions
                        </Link>
                        <div
                            className="flex items-center justify-center h-6 w-6 bg-black rounded-full text-[var(--color-primary-400)]"
                        >
                            <ArrowRight className="h-3 w-3 text-white" />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

