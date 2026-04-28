"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { CaretLeft, CaretRight, Quotes } from "@phosphor-icons/react";
import { testimonials } from "@/lib/data";

export function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 7000, stopOnInteraction: true }),
  ]);
  const [selected, setSelected] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelected(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section className="section-py bg-canvas relative overflow-hidden">
      <div className="absolute inset-0 bg-dots opacity-30 pointer-events-none" />
      <div className="container-x relative">
        <div className="max-w-2xl mb-14">
          <p className="display-eyebrow mb-4">Operators speak</p>
          <h2 className="display-h2">From the people who run plants.</h2>
        </div>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="min-w-0 shrink-0 grow-0 basis-full pr-12 md:pr-24"
              >
                <div className="max-w-4xl">
                  <Quotes
                    size={48}
                    weight="fill"
                    className="text-signal-500/80 mb-8"
                  />
                  <p className="font-display font-medium text-2xl md:text-3xl lg:text-[40px] text-ink-900 leading-[1.2] tracking-tight-display">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="mt-12 flex items-center gap-5 pt-8 border-t border-slate-100">
                    <div className="h-12 w-12 grid place-items-center bg-ink-900 rounded-full text-white font-display font-bold">
                      {t.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <div>
                      <p className="font-semibold text-ink-900">{t.name}</p>
                      <p className="text-sm text-slate-500 mt-0.5">
                        {t.title} · {t.company}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex items-center justify-between">
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                aria-label={`Slide ${i + 1}`}
                onClick={() => emblaApi?.scrollTo(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  selected === i
                    ? "w-12 bg-signal-500"
                    : "w-6 bg-slate-200 hover:bg-slate-300"
                }`}
              />
            ))}
          </div>
          <div className="flex gap-2">
            <button
              aria-label="Previous"
              onClick={() => emblaApi?.scrollPrev()}
              className="grid h-11 w-11 place-items-center rounded-full border border-slate-200 bg-white text-ink-900 hover:border-ink-900 transition-colors"
            >
              <CaretLeft size={16} weight="bold" />
            </button>
            <button
              aria-label="Next"
              onClick={() => emblaApi?.scrollNext()}
              className="grid h-11 w-11 place-items-center rounded-full border border-slate-200 bg-white text-ink-900 hover:border-ink-900 transition-colors"
            >
              <CaretRight size={16} weight="bold" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
