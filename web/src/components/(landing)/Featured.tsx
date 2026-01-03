import { EmblaCarousel, SLIDE_DATA } from "../Carousel";
import type { EmblaOptionsType } from "embla-carousel";

export default function Featured(){
    const OPTIONS: EmblaOptionsType = {
      align: 'start',
      slidesToScroll: 1,
      loop: true,
    };

  return (
    <div className="flex min-h-screen mt-20 flex-col items-center justify-center overflow-hidden bg-black p-4 md:p-8">
      <section className="flex flex-col font-satoshi items-center justify-center w-full max-w-7xl mx-auto px-4">
        <h2 className="text-center text-white text-3xl md:text-5xl font-semibold mb-5">
            Featured <span className="text-[var(--color-primary-400)]">Projects</span>
        </h2>
        <p className="text-lg text-zinc-400 mb-16 max-w-2xl text-center">
            Explore a curated selection of standout projects showcasing real-world deployments, technical innovations, and the engineering behind our robotics and smart-factory solutions.
        </p>
        <EmblaCarousel slides={SLIDE_DATA} options={OPTIONS} />
      </section>
    </div>
  );
}