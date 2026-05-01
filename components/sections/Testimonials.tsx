"use client";

import { motion } from "framer-motion";
import { Star, CheckCircle } from "@phosphor-icons/react";
import { testimonials } from "@/lib/data";

const ease = [0.22, 1, 0.36, 1] as const;

function initials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export function Testimonials() {
  return (
    <section className="section-py bg-canvas relative overflow-hidden">
      <div className="absolute inset-0 bg-dots opacity-30 pointer-events-none" />
      <div className="container-x relative">
        <div className="max-w-2xl mb-14">
          <p className="display-eyebrow mb-4">Operators speak</p>
          <h2 className="display-h2">From the people who run plants.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, ease, delay: i * 0.08 }}
              className="group relative bg-white border border-slate-200 rounded-xl p-7 flex flex-col gap-6
                         hover:border-signal-500/30 hover:shadow-elevated hover:-translate-y-1
                         transition-all duration-300 cursor-default overflow-hidden"
            >
              {/* Decorative quote mark */}
              <span className="absolute -top-3 -right-1 font-serif text-[90px] leading-none font-black
                               text-slate-100 select-none pointer-events-none
                               transition-colors duration-300 group-hover:text-signal-500/10">
                &ldquo;
              </span>

              {/* Stars + Verified badge */}
              <div className="flex items-center justify-between">
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star
                      key={s} size={18} weight="fill"
                      className="text-amber-400 transition-transform duration-200"
                      style={{ transitionDelay: `${s * 30}ms` }}
                    />
                  ))}
                </div>
                <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-emerald-700
                                 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-full
                                 transition-colors duration-300 group-hover:bg-emerald-100">
                  <CheckCircle size={13} weight="fill" className="text-emerald-500" />
                  Verified
                </span>
              </div>

              {/* Quote */}
              <p className="relative text-ink-900 text-[15px] leading-relaxed flex-1
                            transition-colors duration-300 group-hover:text-ink-900">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-5 border-t border-slate-100 transition-colors duration-300 group-hover:border-signal-500/20">
                <div className="h-10 w-10 flex-shrink-0 grid place-items-center rounded-full
                                bg-slate-100 text-slate-600 font-semibold text-sm
                                transition-colors duration-300
                                group-hover:bg-signal-500 group-hover:text-white">
                  {initials(t.name)}
                </div>
                <div>
                  <p className="font-bold text-ink-900 text-sm leading-tight">
                    {t.name}
                  </p>
                  <p className="text-slate-500 text-xs mt-0.5">
                    {t.title} · {t.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
