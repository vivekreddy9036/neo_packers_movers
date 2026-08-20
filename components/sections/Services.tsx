"use client";

import { motion } from "framer-motion";
import { services } from "@/lib/data";
import { cn } from "@/lib/utils";

const ease = [0.22, 1, 0.36, 1] as const;

const BENTO: Record<string, { grid: string; large: boolean; video?: string }> = {
  "industrial-packing": {
    grid: "lg:col-start-1 lg:col-span-2 lg:row-start-1 lg:row-span-2",
    large: true,
    video: "https://ik.imagekit.io/factamrita/Neo_Packers_Movers/Final_Grid_2_Video?updatedAt=1777542847552",
  },
  "wooden-boxes": {
    grid: "lg:col-start-3 lg:col-span-1 lg:row-start-1 lg:row-span-1",
    large: false,
  },
  "export-packing": {
    grid: "lg:col-start-4 lg:col-span-1 lg:row-start-1 lg:row-span-1",
    large: false,
  },
  "heavy-machinery": {
    grid: "lg:col-start-3 lg:col-span-2 lg:row-start-2 lg:row-span-2",
    large: true,
    video: "https://ik.imagekit.io/factamrita/Neo_Packers_Movers/Final_Grid_1_Video?updatedAt=1777542828084",
  },
  "container-lashing": {
    grid: "lg:col-start-1 lg:col-span-1 lg:row-start-3 lg:row-span-1",
    large: false,
  },
  "cargo-packing": {
    grid: "lg:col-start-2 lg:col-span-1 lg:row-start-3 lg:row-span-1",
    large: false,
  },
  "office-goods": {
    grid: "lg:col-start-1 lg:col-span-4 lg:row-start-4 lg:row-span-1",
    large: false,
  },
};

export function Services() {
  return (
    <section id="services" className="section-py bg-canvas">
      <div className="container-x">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <p className="display-eyebrow mb-4">Our Offerings</p>
            <h2 className="display-h2">
              Our expertise,
              <br />
              <span className="text-slate-500">your peace of mind.</span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-[220px_220px_220px_220px] gap-4">
          {services.map((service, i) => {
            const meta = BENTO[service.slug];
            const hasVideo = !!meta?.video;

            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, ease, delay: i * 0.05 }}
                className={cn(
                  "flex flex-col rounded-xl overflow-hidden min-h-[200px]",
                  hasVideo ? "relative" : "bg-white border border-slate-100 p-7",
                  meta?.grid ?? ""
                )}
              >
                {hasVideo ? (
                  <>
                    <video
                      src={meta!.video}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                    <div className="relative flex-1 flex flex-col justify-end p-7">
                      <h3 className="font-display font-bold text-white text-2xl lg:text-[1.6rem] tracking-tight-display leading-snug">
                        {service.title}
                      </h3>
                      <div className="mt-4 pt-4 border-t border-white/20">
                        <p className="num text-lg font-bold text-white leading-tight">
                          {service.stat}
                        </p>
                        <p className="num mt-0.5 text-[10px] uppercase tracking-[0.14em] text-white/55">
                          {service.statLabel}
                        </p>
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="flex-1 flex flex-col justify-end">
                    <h3 className="font-display font-bold text-ink-900 tracking-tight-display text-lg leading-snug">
                      {service.title}
                    </h3>
                    <div className="mt-4 pt-4 border-t border-slate-100">
                      <p className="num text-lg font-bold text-ink-900 leading-tight">
                        {service.stat}
                      </p>
                      <p className="num mt-0.5 text-[10px] uppercase tracking-[0.14em] text-slate-500">
                        {service.statLabel}
                      </p>
                    </div>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
