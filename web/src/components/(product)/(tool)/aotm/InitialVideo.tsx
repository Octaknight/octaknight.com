import { useRef, useEffect, useState } from 'react';
import { Play, Pause } from 'lucide-react';

export default function InitialVideo() {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(true);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 0.75;
        }
    }, []);

    const togglePlay = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <section className="w-full bg-zinc-950 py-12 md:py-24 flex justify-center">
            <div className="relative w-[95%] md:w-[90%] max-w-8xl h-[60vh] md:h-[80vh] rounded-[2rem] overflow-hidden shadow-2xl">
                <video
                    ref={videoRef}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                >
                    <source src="/assets/aotm/aotm.mp4" type="video/mp4" />
                </video>

                {/* Overlay Gradient for better integration if needed, keeping it minimal for now */}
                
                {/* Custom Play/Pause Button */}
                <button
                    onClick={togglePlay}
                    className="absolute bottom-6 left-6 md:bottom-12 md:left-12 z-20 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-white/20 transition-all duration-300 group cursor-pointer border border-white/10"
                    aria-label={isPlaying ? 'Pause video' : 'Play video'}
                >
                    {isPlaying ? (
                        <Pause className="w-5 h-5 text-white fill-white" />
                    ) : (
                        <Play className="w-5 h-5 text-white fill-white ml-1" />
                    )}
                </button>
            </div>
        </section>
    );
}