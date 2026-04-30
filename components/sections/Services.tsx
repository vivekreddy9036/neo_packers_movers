"use client";

import { motion } from "framer-motion";
import { services } from "@/lib/data";
import { cn } from "@/lib/utils";

const ease = [0.22, 1, 0.36, 1] as const;

const BENTO: Record<string, { grid: string; large: boolean }> = {
  "industrial-packing": {
    grid: "lg:col-start-1 lg:col-span-2 lg:row-start-1 lg:row-span-2",
    large: true,
  },
  "export-packing": {
    grid: "lg:col-start-3 lg:col-span-1 lg:row-start-1 lg:row-span-1",
    large: false,
  },
  "office-relocation": {
    grid: "lg:col-start-4 lg:col-span-1 lg:row-start-1 lg:row-span-1",
    large: false,
  },
  "heavy-machinery-relocation": {
    grid: "lg:col-start-3 lg:col-span-2 lg:row-start-2 lg:row-span-2",
    large: true,
  },
  "on-site-packing": {
    grid: "lg:col-start-1 lg:col-span-1 lg:row-start-3 lg:row-span-1",
    large: false,
  },
  "custom-crating": {
    grid: "lg:col-start-2 lg:col-span-1 lg:row-start-3 lg:row-span-1",
    large: false,
  },
};

export function Services() {
  return (
    <section id="services" className="section-py bg-canvas">
      <div className="container-x">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <p className="display-eyebrow mb-4">What we move</p>
            <h2 className="display-h2">
              Built for cargo
              <br />
              <span className="text-slate-500">that can&rsquo;t fail.</span>
            </h2>
          </div>
          <p className="lead max-w-md">
            Six specialist disciplines, one accountability chain. Every brief
            ships through the same engineering-grade workflow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-[220px_220px_220px] gap-4">
          {services.map((service, i) => {
            const meta = BENTO[service.slug];
            const isLarge = meta?.large ?? false;

            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, ease, delay: i * 0.05 }}
                className={cn(
                  "flex flex-col bg-white border border-slate-100 rounded-xl p-7 min-h-[200px]",
                  meta?.grid ?? ""
                )}
              >
                {/* Content pushed to bottom */}
                <div className="flex-1 flex flex-col justify-end">
                  <h3
                    className={cn(
                      "font-display font-bold text-ink-900 tracking-tight-display",
                      isLarge
                        ? "text-2xl lg:text-[1.6rem] leading-snug"
                        : "text-lg leading-snug"
                    )}
                  >
                    {service.title}
                  </h3>

                  {isLarge && (
                    <p className="mt-2 text-slate-600 text-[14px] leading-relaxed">
                      {service.blurb}
                    </p>
                  )}

                  <div className="mt-4 pt-4 border-t border-slate-100">
                    <p className="num text-lg font-bold text-ink-900 leading-tight">
                      {service.stat}
                    </p>
                    <p className="num mt-0.5 text-[10px] uppercase tracking-[0.14em] text-slate-500">
                      {service.statLabel}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
}
