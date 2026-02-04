import React, {
  useState,
  useEffect,
  useCallback,
  useRef,
  type ComponentPropsWithRef,
} from 'react';
import {
  type EmblaCarouselType,
  type EmblaEventType,
  type EmblaOptionsType,
} from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';
import { Link } from 'react-router-dom';

const TWEEN_FACTOR_BASE = 0.2;

type SlideData = {
  index: number;
  title: string;
  description: string;
  ctaText: string;
  link: string;
};

export const SLIDE_DATA: SlideData[] = [
  {
    index: 0,
    title: 'AOTM I',
    description:
      'Automated tool dispensing and inventory management system for high-efficiency industrial workspaces.',
    ctaText: 'Explore AOTM I',
    link: '/aotm'
  },
  {
    index: 1,
    title: 'AOTM XL',
    description:
      'Automated tool dispensing and inventory management system, the largest in its segment for high-volume industrial operations.',
    ctaText: 'Explore AOTM XL',
    link: '/aotm'
  }
];

type UsePrevNextButtonsType = {
  prevBtnDisabled: boolean;
  nextBtnDisabled: boolean;
  onPrevButtonClick: () => void;
  onNextButtonClick: () => void;
};

export const usePrevNextButtons = (
  emblaApi: EmblaCarouselType | undefined,
  onButtonClick?: (emblaApi: EmblaCarouselType) => void,
): UsePrevNextButtonsType => {
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
    if (onButtonClick) onButtonClick(emblaApi);
  }, [emblaApi, onButtonClick]);

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
    if (onButtonClick) onButtonClick(emblaApi);
  }, [emblaApi, onButtonClick]);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect(emblaApi);
    emblaApi.on('reInit', onSelect).on('select', onSelect);
  }, [emblaApi, onSelect]);

  return {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  };
};

// --- Arrow Button Components ---
type ArrowButtonPropType = ComponentPropsWithRef<'button'>;

export const PrevButton: React.FC<ArrowButtonPropType> = (props) => {
  const { children, ...restProps } = props;

  return (
    <button
      className="appearance-none bg-transparent touch-manipulation no-underline cursor-pointer border-0 p-0 m-0 w-10 h-10 z-10 rounded-full text-amber-400 flex items-center justify-center ring-1 ring-amber-400 disabled:text-neutral-600 disabled:ring-neutral-600"
      type="button"
      {...restProps}
    >
      <svg
        className="w-[35%] h-[35%]"
        viewBox="0 0 532 532"
      >
        <path
          fill="currentColor"
          d="M355.66 11.354c13.793-13.805 36.208-13.805 50.001 0 13.785 13.804 13.785 36.238 0 50.034L201.22 266l204.442 204.61c13.785 13.805 13.785 36.239 0 50.044-13.793 13.796-36.208 13.796-50.002 0a5994246.277 5994246.277 0 0 0-229.332-229.454 35.065 35.065 0 0 1-10.326-25.126c0-9.2 3.393-18.26 10.326-25.2C172.192 194.973 332.731 34.31 355.66 11.354Z"
        />
      </svg>
      {children}
    </button>
  );
};

export const NextButton: React.FC<ArrowButtonPropType> = (props) => {
  const { children, ...restProps } = props;

  return (
    <button
      className="appearance-none bg-transparent touch-manipulation no-underline cursor-pointer border-0 p-0 m-0 w-10 h-10 z-10 rounded-full text-amber-400 flex items-center justify-center ring-1 ring-amber-400 disabled:text-neutral-600 disabled:ring-neutral-600"
      type="button"
      {...restProps}
    >
      <svg
        className="w-[35%] h-[35%]"
        viewBox="0 0 532 532"
      >
        <path
          fill="currentColor"
          d="M176.34 520.646c-13.793 13.805-36.208 13.805-50.001 0-13.785-13.804-13.785-36.238 0-50.034L330.78 266 126.34 61.391c-13.785-13.805-13.785-36.239 0-50.044 13.793-13.796 36.208-13.796 50.002 0 22.928 22.947 206.395 206.507 229.332 229.454a35.065 35.065 0 0 1 10.326 25.126c0 9.2-3.393 18.26-10.326 25.2-45.865 45.901-206.404 206.564-229.332 229.52Z"
        />
      </svg>
      {children}
    </button>
  );
};

type UseDotButtonType = {
  selectedIndex: number;
  scrollSnaps: number[];
  onDotButtonClick: (index: number) => void;
};

export const useDotButton = (
  emblaApi: EmblaCarouselType | undefined,
  onButtonClick?: (emblaApi: EmblaCarouselType) => void,
): UseDotButtonType => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onDotButtonClick = useCallback(
    (index: number) => {
      if (!emblaApi) return;
      emblaApi.scrollTo(index);
      if (onButtonClick) onButtonClick(emblaApi);
    },
    [emblaApi, onButtonClick],
  );

  const onInit = useCallback((emblaApi: EmblaCarouselType) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    onSelect(emblaApi);

    emblaApi.on('reInit', onInit).on('reInit', onSelect).on('select', onSelect);
  }, [emblaApi, onInit, onSelect]);

  return {
    selectedIndex,
    scrollSnaps,
    onDotButtonClick,
  };
};

type DotButtonPropType = ComponentPropsWithRef<'button'>;

export const DotButton: React.FC<DotButtonPropType> = (props) => {
  const { children, ...restProps } = props;

  return (
    <button
      type="button"
      className="appearance-none bg-transparent touch-manipulation no-underline cursor-pointer border-0 p-0 m-0 w-6 h-6 flex items-center justify-center rounded-full
                 after:content-[''] after:w-2 after:h-2 after:rounded-full after:ring-1 after:ring-neutral-600"
      {...restProps}
    >
      {children}
    </button>
  );
};

type PropType = {
  slides: SlideData[];
  options?: EmblaOptionsType;
};

export const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const tweenFactor = useRef(0);
  const tweenNodes = useRef<HTMLElement[]>([]);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  const setTweenNodes = useCallback((emblaApi: EmblaCarouselType): void => {
    tweenNodes.current = emblaApi.slideNodes().map((slideNode) => {
      return slideNode.querySelector(
        '.embla-parallax-layer',
      ) as HTMLElement;
    });
  }, []);

  const setTweenFactor = useCallback((emblaApi: EmblaCarouselType) => {
    tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length;
  }, []);

  const tweenParallax = useCallback(
    (emblaApi: EmblaCarouselType, eventName?: EmblaEventType) => {
      const engine = emblaApi.internalEngine();
      const scrollProgress = emblaApi.scrollProgress();
      const slidesInView = emblaApi.slidesInView();
      const isScrollEvent = eventName === 'scroll';

      emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
        let diffToTarget = scrollSnap - scrollProgress;
        const slidesInSnap = engine.slideRegistry[snapIndex];

        slidesInSnap.forEach((slideIndex) => {
          if (isScrollEvent && !slidesInView.includes(slideIndex)) return;

          if (engine.options.loop) {
            engine.slideLooper.loopPoints.forEach((loopItem) => {
              const target = loopItem.target();

              if (slideIndex === loopItem.index && target !== 0) {
                const sign = Math.sign(target);

                if (sign === -1) {
                  diffToTarget = scrollSnap - (1 + scrollProgress);
                }
                if (sign === 1) {
                  diffToTarget = scrollSnap + (1 - scrollProgress);
                }
              }
            });
          }

          const translate = diffToTarget * (-1 * tweenFactor.current) * 100;
          const tweenNode = tweenNodes.current[slideIndex];
          if (tweenNode) {
            tweenNode.style.transform = `translateX(${translate}%)`;
          }
        });
      });
    },
    [],
  );

  useEffect(() => {
    if (!emblaApi) return;

    setTweenNodes(emblaApi);
    setTweenFactor(emblaApi);
    tweenParallax(emblaApi);

    emblaApi
      .on('reInit', setTweenNodes)
      .on('reInit', setTweenFactor)
      .on('reInit', tweenParallax)
      .on('scroll', tweenParallax)
      .on('slideFocus', tweenParallax);
  }, [emblaApi, tweenParallax, setTweenNodes, setTweenFactor]);

  return (
    <div className="max-w-7xl mx-auto">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex touch-pan-y ml-[-1rem]">
          {slides.map((slide, index) => (
            <div className="flex-[0_0_100%] md:flex-[0_0_80%] min-w-0 pl-4" key={slide.index}>
              <div className="rounded-[1.8rem] h-[500px] md:h-[700px] overflow-hidden relative">
                <div className="embla-parallax-layer relative h-[600px] md:h-[800px] w-full flex justify-center">
                  <img
                    className="max-w-none flex-[0_0_calc(115%_+_2rem)] object-cover w-full h-full"
                    src={`https://pub-05ef32feaa264b41bf7b2f560600c73e.r2.dev/tools/products/aotm/${slide.index}.png`}
                    alt={slide.title}
                  />
                </div>
                {index === selectedIndex && (
                  <div
                    className="absolute bottom-0 left-0 w-full h-1/3 z-10"
                    style={{
                      background: 'linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,0))',
                    }}
                  ></div>
                )}

                {index === selectedIndex && (
                  <div className="absolute bottom-0 left-0 p-8 z-20 text-white w-full md:w-2/3 lg:w-1/2">
                    <h2 className="text-2xl md:text-3xl font-bold mb-2">
                      {slide.title}
                    </h2>
                    <p className="text-base md:text-lg text-neutral-300 mb-4">
                      {slide.description}
                    </p>
                    <Link to={slide.link}>
                    <button className="bg-amber-400 cursor-pointer text-black font-semibold py-2 px-5 rounded-lg transition-transform active:scale-95 hover:bg-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-black">
                      {slide.ctaText}
                    </button>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-[auto_1fr] justify-between gap-[1.2rem] mt-4 px-4 md:px-0">
        <div className="grid grid-cols-2 gap-[0.6rem] items-center">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        <div className="flex flex-wrap justify-end items-center mr-[-0.25rem]">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={`
                appearance-none bg-transparent touch-manipulation no-underline cursor-pointer border-0 p-0 m-0 w-6 h-6 flex items-center justify-center rounded-full
                after:content-[''] after:w-2 after:h-2 after:rounded-full after:ring-1
                ${
                  index === selectedIndex
                    ? 'after:ring-amber-400'
                    : 'after:ring-neutral-600'
                }
              `}
            />
          ))}
        </div>
      </div>
    </div>
  );
};