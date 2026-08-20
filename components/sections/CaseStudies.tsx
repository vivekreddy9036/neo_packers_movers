"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "@phosphor-icons/react";
import { caseStudies } from "@/lib/data";

const ease = [0.22, 1, 0.36, 1] as const;

export function CaseStudies() {
  return (
    <section id="case-studies" className="section-py bg-canvas-50/60">
      <div className="container-x">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div className="max-w-xl">
            <p className="display-eyebrow mb-4">Highlight Projects</p>
            <h2 className="display-h2">
              At NEO, every
              <br />
              <span className="text-slate-500">component is a mission.</span>
            </h2>
          </div>
          <span
            className="text-sm font-semibold text-ink-900 inline-flex items-center gap-2"
          >
            View all projects
            <span className="grid h-9 w-9 place-items-center rounded-lg border border-slate-200 bg-white transition-all duration-200 group-hover:bg-ink-900 group-hover:border-ink-900 group-hover:text-white">
              <ArrowUpRight size={14} weight="bold" />
            </span>
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {caseStudies.map((cs, i) => (
            <motion.a
              href={`#case-${cs.slug}`}
              key={cs.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease, delay: i * 0.08 }}
              className="group flex flex-col bg-white border border-slate-100 rounded-xl overflow-hidden hover:shadow-elevated hover:-translate-y-1 transition-all duration-300 ease-premium"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-canvas-50">
                <img
                  src={cs.image}
                  alt={cs.title}
                  className="h-full w-full object-cover transition-all duration-700 ease-premium group-hover:scale-[1.06]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-5 left-5">
                  <span className="num inline-flex bg-white/95 backdrop-blur-sm text-ink-900 text-[10px] uppercase tracking-[0.18em] px-3 py-1.5 rounded-full font-semibold">
                    {cs.industry}
                  </span>
                </div>
                <div className="absolute top-5 right-5">
                  <div className="grid h-10 w-10 place-items-center rounded-full bg-white/95 backdrop-blur-sm text-ink-900 transition-all duration-200 group-hover:bg-signal-500 group-hover:text-white">
                    <ArrowUpRight size={14} weight="bold" />
                  </div>
                </div>
              </div>

              <div className="p-7 flex flex-col flex-1">
                <h3 className="font-display font-bold text-ink-900 text-lg leading-snug tracking-tight-display">
                  {cs.title}
                </h3>
                <div className="mt-6 grid grid-cols-3 gap-4 pt-5 border-t border-slate-100">
                  {cs.stats.map((s) => (
                    <div key={s.k}>
                      <p className="num text-base font-bold text-ink-900">
                        {s.k}
                      </p>
                      <p className="num mt-1 text-[10px] uppercase tracking-[0.14em] text-slate-500">
                        {s.v}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
