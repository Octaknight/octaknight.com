import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import CalButton from '../CalButton';

export default function Hero() {
    return(
        <div className="Hero relative min-h-screen flex items-center justify-center bg-transparent text-center overflow-hidden">
            <video
                autoPlay
                muted
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover z-0"
            >
                <source src="/octaknight.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-5"></div>

            {/* Your content (z-10) */}
            <div className="relative max-w-3xl mx-auto px-4 -mt-24 z-10">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bricolage text-white leading-snug animate-fade-in-up">
                    Engineering the Next <br />
                    <span className="text-[var(--color-primary-400)]">Industrial Revolution</span>
                </h1>
                
                <p className="mt-2 text-md sm:text-lg text-white/70 font-satoshi max-w-2xl mx-auto animate-fade-in-up animation-delay-300">
                    Discover our ecosystem of advanced robotics and smart-factory solutions designed to automate your future.
                </p>

                <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animation-delay-600">
                    <CalButton />
                    
                    <Link 
                        to={"/tool-management"} 
                        className="cursor-pointer px-8 py-3 bg-[var(--color-primary-400)] rounded-full font-satoshi text-[var(--secondary)] font-medium hover:bg-[var(--color-primary-300)] transition-all duration-300 shadow-lg shadow-yellow-500/10 flex items-center justify-center"
                    >
                        <span className="whitespace-nowrap mr-2 text-black">
                            Explore solutions
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
    )
}