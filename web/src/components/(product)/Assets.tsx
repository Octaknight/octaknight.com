import { useState } from 'react';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';

const videos = [
    {
        id: 'guDIwspRGJ8',
        title: 'Precision Assembly',
        description: 'High-speed automated assembly demonstration'
    },
    {
        id: 'fn3KWM1kuAw',
        title: 'Pick & Place Operations',
        description: 'Robotic sorting and handling system'
    },
    {
        id: 'csifG1AM5d8',
        title: 'Quality Inspection',
        description: 'AI-powered defect detection workflow'
    },
    {
        id: 'Og847HVwRSI',
        title: 'Industrial Integration',
        description: 'Full production line automation'
    }
];

export default function Assets() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const next = () => setCurrentIndex((prev) => (prev + 1) % videos.length);
    const prev = () => setCurrentIndex((prev) => (prev - 1 + videos.length) % videos.length);

    return (
        <div className="bg-black text-white py-16 px-4">
            <div className="max-w-7xl mx-auto">
                
                {/* Section Title */}
                <div className="mb-12">
                    <h2 className="text-2xl font-satoshi font-light tracking-tight text-zinc-100 mb-2">
                        In Action
                    </h2>
                    <div className="w-16 h-px bg-[var(--color-primary-400)]"></div>
                </div>

                {/* Main Video Section with Stacked Card Design */}
                <div className="relative">
                    {/* Featured Video */}
                    <div className="relative group">
                        <div className="relative aspect-video bg-zinc-900 rounded-2xl overflow-hidden border border-white/10 shadow-2xl transition-all duration-500">
                            <iframe
                                className="w-full h-full"
                                src={`https://www.youtube.com/embed/${videos[currentIndex].id}`}
                                title={videos[currentIndex].title}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>

                        {/* Video Info Overlay */}
                        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                            <h3 className="text-xl font-satoshi font-semibold text-white mb-1">
                                {videos[currentIndex].title}
                            </h3>
                            <p className="text-sm text-zinc-400 font-satoshi">
                                {videos[currentIndex].description}
                            </p>
                        </div>

                        {/* Navigation Arrows */}
                        <button
                            onClick={prev}
                            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/70 hover:bg-black/90 text-white p-3 rounded-full transition-all opacity-0 group-hover:opacity-100 z-10"
                            aria-label="Previous video"
                        >
                            <ChevronLeft size={24} />
                        </button>
                        <button
                            onClick={next}
                            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/70 hover:bg-black/90 text-white p-3 rounded-full transition-all opacity-0 group-hover:opacity-100 z-10"
                            aria-label="Next video"
                        >
                            <ChevronRight size={24} />
                        </button>
                    </div>

                    {/* Video Thumbnails/Cards */}
                    <div className="flex gap-4 mt-8 overflow-x-auto pb-4 scrollbar-hide">
                        {videos.map((video, idx) => (
                            <button
                                key={idx}
                                onClick={() => setCurrentIndex(idx)}
                                className={`relative flex-shrink-0 w-64 group cursor-pointer transition-all duration-300 ${
                                    idx === currentIndex 
                                        ? 'scale-100' 
                                        : 'scale-95 opacity-60 hover:opacity-100 hover:scale-100'
                                }`}
                            >
                                {/* Thumbnail Container */}
                                <div className={`relative aspect-video bg-zinc-900 rounded-xl overflow-hidden border-2 transition-all ${
                                    idx === currentIndex 
                                        ? 'border-[var(--color-primary-400)]' 
                                        : 'border-transparent'
                                }`}>
                                    {/* YouTube Thumbnail */}
                                    <img
                                        src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                                        alt={video.title}
                                        className="w-full h-full object-cover"
                                        onError={(e) => {
                                            e.currentTarget.src = `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`;
                                        }}
                                    />
                                    
                                    {/* Play Icon Overlay */}
                                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                        <div className="w-12 h-12 bg-[var(--color-primary-400)]/90 rounded-full flex items-center justify-center">
                                            <Play size={20} className="text-black ml-1" fill="currentColor" />
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Thumbnail Title */}
                                <div className="mt-2 px-1">
                                    <p className={`text-sm font-satoshi transition-colors ${
                                        idx === currentIndex 
                                            ? 'text-white font-semibold' 
                                            : 'text-zinc-500'
                                    }`}>
                                        {video.title}
                                    </p>
                                </div>
                            </button>
                        ))}
                    </div>

                    {/* Progress Indicator */}
                    <div className="flex justify-center gap-2 mt-6">
                        {videos.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setCurrentIndex(idx)}
                                className={`h-1 rounded-full transition-all duration-300 ${
                                    idx === currentIndex 
                                        ? 'w-8 bg-[var(--color-primary-400)]' 
                                        : 'w-1 bg-zinc-700 hover:bg-zinc-600'
                                }`}
                                aria-label={`Go to video ${idx + 1}`}
                            />
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
}