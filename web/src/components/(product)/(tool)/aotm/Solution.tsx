
const FEATURES = [
    {
        id: 'hardware',
        title: 'Secure Hardware',
        description: 'Rugged, shop-floor ready dispensers act as the physical gatekeepers of your inventory',
        icon: '/assets/aotm/icons/octaknight_iot.png',
    },
    {
        id: 'software',
        title: 'Powerful Software',
        description: 'Rugged, shop-floor ready dispensers act as the physical gatekeepers of your inventory',
        icon: '/assets/aotm/icons/octaknight_solid.png',
    },
    {
        id: 'intelligence',
        title: 'Integrated Intelligence',
        description: 'Rugged, shop-floor ready dispensers act as the physical gatekeepers of your inventory',
        icon: '/assets/aotm/icons/octaknight_iot.png',
    },
];

export default function Solution() {
    return (
        <section className="relative bg-black py-20 md:py-28 px-6 overflow-hidden font-satoshi">

            {/* Gold spikes — right side */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[140px] md:w-[220px] h-[80%] pointer-events-none select-none">
                <img
                    src="/assets/aotm/octaknight_spikes_gold.png"
                    alt=""
                    aria-hidden="true"
                    className="w-full h-full object-contain object-right"
                />
            </div>

            {/* Centered content */}
            <div className="relative z-10 max-w-3xl mx-auto text-center">

                {/* Title block */}
                <div className="mb-10 md:mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-2 font-sansation">
                        Solution?
                    </h2>
                    <h3 className="text-7xl md:text-9xl font-bold text-[var(--color-primary-400)] leading-none mb-3 font-sansation">
                        AOTM
                    </h3>
                    <p className="text-sm md:text-base text-zinc-400 tracking-wide">
                        Advanced Operations and Task Management
                    </p>
                </div>

                {/* Body paragraph */}
                <p className="text-base md:text-xl text-white leading-relaxed mb-12 md:mb-16 max-w-2xl mx-auto">
                    <span className="text-[var(--color-primary-400)] font-semibold">AOTM</span> is an Intelligent platform for Total Control over your inventory,
                    tools and jobs all the while keeping a track; down to the minute detail.
                </p>

                {/* Feature rows — left-aligned text block, centered on page */}
                <div className="flex flex-col gap-10 md:gap-12 text-left max-w-xl mx-auto">
                    {FEATURES.map((feature) => (
                        <div key={feature.id} className="flex items-start gap-6 md:gap-8">
                            {/* Icon */}
                            <img
                                src={feature.icon}
                                alt=""
                                aria-hidden="true"
                                className="w-16 h-16 md:w-20 md:h-20 flex-shrink-0 object-contain"
                            />
                            {/* Text */}
                            <div>
                                <h4 className="font-bold text-lg md:text-xl mb-1.5 text-[var(--color-primary-400)]">
                                    {feature.title}
                                </h4>
                                <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}