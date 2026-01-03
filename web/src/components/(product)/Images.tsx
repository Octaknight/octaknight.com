import { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const images = [
    'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1600&h=900&fit=crop',
    'https://images.unsplash.com/photo-1563207153-f403bf289096?w=1600&h=900&fit=crop',
    'https://png.pngtree.com/thumb_back/fh260/background/20230623/pngtree-futuristic-robot-arms-in-3d-render-on-black-background-image_3658036.jpg',
    'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1600&h=900&fit=crop',
    'https://images.unsplash.com/photo-1535303311164-664fc9ec6532?w=1600&h=900&fit=crop',
];

export default function Images() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isExpanded, setIsExpanded] = useState(false);

    const next = () => setCurrentIndex((prev) => (prev + 1) % images.length);
    const prev = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

    return (
        <>
            {/* Slider Section */}
            <div className="bg-black py-16 px-4">
                <div className="max-w-7xl mx-auto">
                    {/* Section Title */}
                    <div className="mb-8">
                        <h2 className="text-2xl font-sansation font-light tracking-tight text-zinc-100 mb-2">
                            Product Gallery
                        </h2>
                        <div className="w-16 h-px bg-[var(--color-primary-400)]"></div>
                    </div>
                    
                    <div className="relative group">
                        {/* Main Image */}
                        <div 
                            className="relative aspect-video bg-zinc-900 rounded-lg overflow-hidden cursor-pointer"
                            onClick={() => setIsExpanded(true)}
                        >
                            <img
                                src={images[currentIndex]}
                                alt={`Product view ${currentIndex + 1}`}
                                className="w-full h-full object-contain"
                            />
                        </div>

                        {/* Navigation Arrows */}
                        <button
                            onClick={prev}
                            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white p-2 rounded-full transition-all"
                            aria-label="Previous image"
                        >
                            <ChevronLeft size={24} />
                        </button>
                        <button
                            onClick={next}
                            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white p-2 rounded-full transition-all"
                            aria-label="Next image"
                        >
                            <ChevronRight size={24} />
                        </button>
                    </div>

                    {/* Thumbnails */}
                    <div className="flex gap-4 mt-4 justify-center">
                        {images.map((img, idx) => (
                            <button
                                key={idx}
                                onClick={() => setCurrentIndex(idx)}
                                className={`w-20 h-20 rounded-md overflow-hidden border-2 transition-all ${
                                    idx === currentIndex 
                                        ? 'border-[var(--color-primary-400)]' 
                                        : 'border-transparent opacity-50 hover:opacity-100'
                                }`}
                            >
                                <img
                                    src={img}
                                    alt={`Thumbnail ${idx + 1}`}
                                    className="w-full h-full object-cover"
                                />
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Expanded View Modal */}
            {isExpanded && (
                <div 
                    className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
                    onClick={() => setIsExpanded(false)}
                >
                    {/* Close Button */}
                    <button
                        onClick={() => setIsExpanded(false)}
                        className="absolute top-4 right-4 text-white hover:text-[var(--color-primary-400)] transition-colors"
                        aria-label="Close expanded view"
                    >
                        <X size={32} />
                    </button>

                    {/* Expanded Image */}
                    <div 
                        className="relative max-w-7xl max-h-full"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <img
                            src={images[currentIndex]}
                            alt={`Product view ${currentIndex + 1}`}
                            className="max-w-full max-h-[90vh] object-contain"
                        />

                        {/* Navigation in Expanded View */}
                        <button
                            onClick={prev}
                            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white p-3 rounded-full transition-all"
                            aria-label="Previous image"
                        >
                            <ChevronLeft size={32} />
                        </button>
                        <button
                            onClick={next}
                            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white p-3 rounded-full transition-all"
                            aria-label="Next image"
                        >
                            <ChevronRight size={32} />
                        </button>
                    </div>

                    {/* Image Counter */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm">
                        {currentIndex + 1} / {images.length}
                    </div>
                </div>
            )}
        </>
    );
}