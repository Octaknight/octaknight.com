
const ICON_CLASS = "w-14 h-14 flex-shrink-0 object-contain";

const PROBLEMS = [
    {
        id: 'downtime',
        title: 'Lost Productivity and Downtime',
        description: 'How many man-hours are wasted searching for a specific tool? What is the cost of the idle machine waiting for a single out-of-stock insert?',
        icon: <img src="/assets/aotm/icons/caution.png" alt="" aria-hidden="true" className={ICON_CLASS} />,
    },
    {
        id: 'shrinkage',
        title: 'Inventory Shrinkage and Loss',
        description: 'How do you account for valuable consumables that are lost, hoarded, misplaced or broken without a clear audit trail?',
        icon: <img src="/assets/aotm/icons/rupee.png" alt="" aria-hidden="true" className={ICON_CLASS} />,
    },
    {
        id: 'costing',
        title: 'Inaccurate Job Costing',
        description: 'Can you confidently and profitably price your next job when you are only estimating the tool costs of your last one?',
        icon: <img src="/assets/aotm/icons/piechart.png" alt="" aria-hidden="true" className={ICON_CLASS} />,
    },
    {
        id: 'accountability',
        title: 'Lack of Accountability',
        description: 'Without a clear record, who is responsible for a broken tool or a depleted bay? How do you trace tool usage back to a specific operator, machine and job?',
        icon: <img src="/assets/aotm/icons/notepad.png" alt="" aria-hidden="true" className={ICON_CLASS} />,
    },
];

export default function IndustryProblems() {
    return (
        <section className="relative bg-[#0f0e0e] py-20 md:py-32 px-4 overflow-hidden font-satoshi">

            {/* Decorative octaknight spikes — left side */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[180px] md:w-[280px] h-[75%] pointer-events-none select-none">
                <img
                    src="/assets/aotm/octaknight_spikes.png"
                    alt=""
                    aria-hidden="true"
                    className="w-full h-full object-contain object-left"
                    style={{ filter: 'hue-rotate(330deg) saturate(0.5) brightness(0.45)' }}
                />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-2xl md:max-w-3xl mx-auto">

                {/* Title */}
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-4 font-sansation">
                        Every Unmanaged Tool is a<br />
                        <span className="text-[#e05252]">Hidden Cost</span>
                    </h2>
                    <p className="text-sm md:text-base text-zinc-400 max-w-xl mx-auto leading-relaxed">
                        The problem is that tools get robbed left and right, so how do you keep a track of them, haan, haan?
                    </p>
                </div>

                {/* Problem rows */}
                <div className="flex flex-col gap-10 md:gap-12">
                    {PROBLEMS.map((problem) => (
                        <div key={problem.id} className="flex items-start gap-6 md:gap-8">
                            {/* Icon */}
                            <div className="flex-shrink-0 mt-1">
                                {problem.icon}
                            </div>

                            {/* Text */}
                            <div>
                                <h3 className="text-white font-bold text-lg md:text-xl mb-2 leading-snug">
                                    {problem.title}
                                </h3>
                                <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
                                    {problem.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
