"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback } from "react";
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react";

const PHOTOS = [
  "https://ik.imagekit.io/2ecf22k5j/neo%20packers%20and%20movers/neo%20logo/image1.png?updatedAt=1787238390407",
  "https://ik.imagekit.io/2ecf22k5j/neo%20packers%20and%20movers/neo%20logo/image2.png?updatedAt=1787238391959",
  "https://ik.imagekit.io/2ecf22k5j/neo%20packers%20and%20movers/neo%20logo/image3.png?updatedAt=1787238391932",
  "https://ik.imagekit.io/2ecf22k5j/neo%20packers%20and%20movers/neo%20logo/image%204.png?updatedAt=1787238391754",
  "https://ik.imagekit.io/2ecf22k5j/neo%20packers%20and%20movers/neo%20logo/image5.png?updatedAt=1787238391807",
  "https://ik.imagekit.io/2ecf22k5j/neo%20packers%20and%20movers/neo%20logo/image%206.png?updatedAt=1787238391376",
  "https://ik.imagekit.io/2ecf22k5j/neo%20packers%20and%20movers/neo%20logo/image6.png?updatedAt=1787238392093",
];

export function PastWork() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", slidesToScroll: 1 },
    [Autoplay({ delay: 3000, stopOnInteraction: false })]
  );

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section id="past-work" className="section-py bg-canvas">
      <div className="container-x">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <p className="display-eyebrow mb-4">Past Work</p>
            <h2 className="display-h2">
              Packed for Safety,
              <br />
              <span className="text-slate-500">Ready for Transit.</span>
            </h2>
          </div>

          {/* Prev / Next buttons */}
          <div className="flex gap-3">
            <button
              onClick={scrollPrev}
              className="h-11 w-11 grid place-items-center rounded-full border border-slate-200 bg-white hover:bg-signal-500 hover:border-signal-500 hover:text-white text-ink-900 transition-all duration-200 shadow-soft"
            >
              <ArrowLeft size={16} weight="bold" />
            </button>
            <button
              onClick={scrollNext}
              className="h-11 w-11 grid place-items-center rounded-full border border-slate-200 bg-white hover:bg-signal-500 hover:border-signal-500 hover:text-white text-ink-900 transition-all duration-200 shadow-soft"
            >
              <ArrowRight size={16} weight="bold" />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex ml-[-20px]">
            {PHOTOS.map((src, i) => (
              <div
                key={i}
                className="flex-none w-[85%] sm:w-[60%] md:w-[45%] lg:w-[32%] pl-5"
              >
                <div className="relative rounded-2xl overflow-hidden shadow-elevated group aspect-[4/3]">
                  <img
                    src={src}
                    alt={`NEO past work ${i + 1}`}
                    className="h-full w-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                  />
                  {/* Subtle gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
