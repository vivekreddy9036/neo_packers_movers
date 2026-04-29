"use client";

import { motion } from "framer-motion";
import { processSteps } from "@/lib/data";

const ease = [0.22, 1, 0.36, 1] as const;

export function Process() {
  return (
    <section className="section-py bg-canvas relative overflow-hidden">
      <div className="container-x relative">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div className="max-w-xl">
            <p className="display-eyebrow mb-4">How we operate</p>
            <h2 className="display-h2">
              A 6-stage workflow,
              <br />
              <span className="text-slate-500">every move.</span>
            </h2>
          </div>
          <p className="lead max-w-md">
            From the first site walk to the final installation sign-off — the
            same engineering discipline.
          </p>
        </div>

        {/* Connector line */}
        <div className="relative">
          <div className="hidden lg:block absolute left-0 right-0 top-[44px] h-px bg-slate-100" />
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.4, ease }}
            style={{ transformOrigin: "left" }}
            className="hidden lg:block absolute left-0 right-0 top-[44px] h-px bg-gradient-to-r from-signal-500 via-signal-500 to-transparent"
          />

          <div className="flex lg:grid lg:grid-cols-6 gap-5 overflow-x-auto pb-6 lg:pb-0 -mx-4 px-4 lg:mx-0 lg:px-0 snap-x snap-mandatory scroll-smooth">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.n}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.55, ease, delay: i * 0.08 }}
                className="snap-start flex-shrink-0 w-[260px] lg:w-auto group"
              >
                <div className="relative">
                  <div className="relative h-[88px] flex items-center">
                    <div className="grid h-[88px] w-[88px] place-items-center rounded-full bg-white border-2 border-slate-200 shadow-soft transition-all duration-300 group-hover:border-signal-500 group-hover:shadow-elevated group-hover:bg-canvas-50">
                      <span className="num text-2xl font-bold text-ink-900">
                        {step.n}
                      </span>
                    </div>
                  </div>

                  <div className="mt-7">
                    <h3 className="font-display font-bold text-xl text-ink-900 tracking-tight-display">
                      {step.title}
                    </h3>
                    <p className="num mt-1 text-[11px] uppercase tracking-[0.16em] text-signal-600 font-medium">
                      {step.days}
                    </p>
                    <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                      {step.body}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
