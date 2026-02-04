import { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface GalleryItem {
    id: number;
    title: string;
    caption: string;
    image: string;
}

const galleryItems: GalleryItem[] = [
    {
        id: 1,
        title: 'AOTM Series',
        caption: 'Seamless connectivity with your entire production ecosystem. Real-time monitoring.',
        image: '/assets/aotm/AOTM_Series.png',
    },
    {
        id: 2,
        title: 'AOTM I Real',
        caption: 'Intelligent algorithms predict maintenance needs before they become critical.',
        image: '/assets/aotm/AOTM_I_real.png',
    },
    {
        id: 3,
        title: 'AOTM XL Real',
        caption: 'Access your data anywhere, anytime. Secure cloud backup and multi-device sync.',
        image: '/assets/aotm/AOTM_XL_real.jpg',
    },
    {
        id: 4,
        title: 'AOTM I Info',
        caption: 'Advanced tool management system engineered for exceptional professional capability.',
        image: '/assets/aotm/AOTM_I_Info.jpg',
    },
    {
        id: 5,
        title: 'AOTM XL Info',
        caption: 'Comprehensive insights into your manufacturing process with real-time data visualization.',
        image: '/assets/aotm/AOTM_XL_info.jpg',
    },
];

export default function ProductGallery() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(false);
    const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const autoPlayTimerRef = useRef<NodeJS.Timeout | null>(null);

    const scrollToItem = (index: number) => {
        if (!scrollContainerRef.current) return;
        const container = scrollContainerRef.current;
        const card = container.children[index] as HTMLElement;
        
        if (card) {
            const containerWidth = container.clientWidth;
            const cardWidth = card.offsetWidth;
            const scrollLeft = card.offsetLeft - (containerWidth / 2) + (cardWidth / 2);
            
            container.scrollTo({
                left: scrollLeft,
                behavior: 'smooth'
            });
        }
    };

    const nextSlide = () => {
        const nextIndex = (currentIndex + 1) % galleryItems.length;
        setCurrentIndex(nextIndex);
        scrollToItem(nextIndex);
    };

    const prevSlide = () => {
        const prevIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
        setCurrentIndex(prevIndex);
        scrollToItem(prevIndex);
    };

    useEffect(() => {
        if (isAutoPlaying && !selectedItem) {
            autoPlayTimerRef.current = setInterval(() => {
                nextSlide();
            }, 5000);
        }

        return () => {
            if (autoPlayTimerRef.current) {
                clearInterval(autoPlayTimerRef.current);
            }
        };
    }, [isAutoPlaying, currentIndex, selectedItem]);

    useEffect(() => {
        if (!scrollContainerRef.current) return;

        const container = scrollContainerRef.current;
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
                        const index = Array.from(container.children).indexOf(entry.target);
                        if (index !== -1 && index !== currentIndex) {
                            setCurrentIndex(index);
                        }
                    }
                });
            },
            {
                root: container,
                threshold: 0.5,
            }
        );

        Array.from(container.children).forEach((child) => observer.observe(child));

        return () => observer.disconnect();
    }, []);

    return (
        <section className="relative bg-zinc-950 py-20 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 mb-24">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-sansation text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/60">
                    <span className="text-[var(--color-primary-400)]">AOTM</span> in Action
                </h2>
                <p className="text-lg md:text-xl text-white/80 mt-4">
                    Automated tool management systems designed for precision-driven manufacturing.
                </p>
            </div>

            <div className="relative">
                {currentIndex > 0 && (
                    <button
                        onClick={prevSlide}
                        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-white/20 transition-all duration-300 group cursor-pointer"
                        aria-label="Previous slide"
                    >
                        <ChevronLeft className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
                    </button>
                )}
                
                {currentIndex < galleryItems.length - 1 && (
                    <button
                        onClick={nextSlide}
                        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-white/20 transition-all duration-300 group cursor-pointer"
                        aria-label="Next slide"
                    >
                        <ChevronRight className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
                    </button>
                )}

                <div
                    ref={scrollContainerRef}
                    className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide scroll-smooth gap-6"
                    style={{
                        scrollbarWidth: 'none',
                        msOverflowStyle: 'none',
                        paddingLeft: 'max(1.5rem, calc((100vw - 1280px) / 2 + 1.5rem))',
                        paddingRight: 'max(1.5rem, calc((100vw - 90vw) / 2))',
                    }}
                >
                    {galleryItems.map((item, index) => (
                        <div
                            key={item.id}
                            className="flex-shrink-0 w-[90%] md:w-[80%] lg:w-[70%] snap-center"
                            onClick={() => {
                                setCurrentIndex(index);
                                scrollToItem(index);
                                setSelectedItem(item);
                            }}
                        >
                            <motion.div 
                                layoutId={`card-${item.id}`}
                                className={`relative aspect-[16/10] rounded-3xl overflow-hidden bg-zinc-900 group cursor-pointer transition-all duration-500 ${
                                    index === currentIndex ? 'scale-100 opacity-100' : 'scale-95 opacity-60'
                                }`}
                            >
                                <motion.img
                                    src={item.image}
                                    alt={item.title}
                                    className={`w-full h-full object-cover transition-transform duration-700 ${
                                        item.id <= 3 ? 'group-hover:scale-105' : ''
                                    }`}
                                />
                                
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                            </motion.div>
                        </div>
                    ))}
                </div>

                <div className="flex items-center justify-center gap-4 mt-8">
                    <div className="flex items-center gap-2">
                        {galleryItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => {
                                    setCurrentIndex(galleryItems.indexOf(item));
                                    scrollToItem(galleryItems.indexOf(item));
                                }}
                                className="group relative cursor-pointer"
                                aria-label={`Go to slide ${galleryItems.indexOf(item) + 1}`}
                            >
                                <span className={`block w-2 h-2 rounded-full transition-all duration-300 ${
                                    galleryItems.indexOf(item) === currentIndex
                                        ? 'bg-white scale-125'
                                        : 'bg-white/30 hover:bg-white/50'
                                }`} />
                            </button>
                        ))}
                    </div>

                    <button
                        onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                        className={`relative ml-2 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-white/20 transition-all duration-300 cursor-pointer ${
                            isAutoPlaying ? 'ring-2 ring-white/30' : ''
                        }`}
                        aria-label={isAutoPlaying ? 'Pause gallery' : 'Play gallery'}
                    >

                        {isAutoPlaying ? (
                            <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                            </svg>
                        ) : (
                            <svg className="w-4 h-4 text-white ml-0.5" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M8 5v14l11-7z" />
                            </svg>
                        )}
                    </button>
                </div>
            </div>

            <AnimatePresence>
                {selectedItem && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            onClick={() => setSelectedItem(null)}
                            className="absolute inset-0 bg-black/90 backdrop-blur-md"
                        />
                        <motion.div
                            layoutId={`card-${selectedItem.id}`}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            className="relative w-[95vw] h-[80vh] md:h-[90vh] bg-transparent z-10 flex items-center justify-center"
                            onClick={() => setSelectedItem(null)}
                        >
                            <motion.img
                                src={selectedItem.image}
                                alt={selectedItem.title}
                                className="w-full h-full object-contain"
                                onClick={(e) => e.stopPropagation()}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent pointer-events-none" />
                            
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setSelectedItem(null);
                                }}
                                className="absolute top-4 right-4 md:top-8 md:right-8 w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/20 transition-colors cursor-pointer z-20"
                            >
                                <X className="w-5 h-5 md:w-6 md:h-6" />
                            </button>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
}
