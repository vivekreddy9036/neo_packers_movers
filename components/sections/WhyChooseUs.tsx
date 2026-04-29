"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "@phosphor-icons/react";
import { whyChooseUs } from "@/lib/data";

const ease = [0.22, 1, 0.36, 1] as const;

export function WhyChooseUs() {
  return (
    <section id="why-us" className="section-py bg-canvas-50/60">
      <div className="container-x">
        <div className="max-w-3xl mb-16">
          <p className="display-eyebrow mb-4">Why Neo</p>
          <h2 className="display-h2">
            Specialists in cargo
            <br />
            <span className="text-slate-500">that can&rsquo;t go wrong.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Sticky image */}
          <div className="lg:col-span-5">
            <div className="relative lg:sticky lg:top-28 aspect-[4/5] overflow-hidden rounded-xl shadow-elevated">
              <img
                src="https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&w=1200&q=85"
                alt="Heavy machinery being lifted"
                className="h-full w-full object-cover"
              />
              <div className="absolute bottom-6 left-6 right-6 surface bg-white/95 backdrop-blur-md p-5 shadow-soft">
                <p className="num text-[11px] uppercase tracking-[0.16em] text-slate-500">
                  In-house workshop
                </p>
                <p className="num mt-1 text-2xl font-bold text-ink-900">
                  18,000 sq ft
                </p>
                <p className="text-sm text-slate-600 mt-1">
                  Custom crating built on-site
                </p>
              </div>
            </div>
          </div>

          {/* Reasons */}
          <div className="lg:col-span-7">
            <div className="space-y-3">
              {whyChooseUs.map((item, i) => (
                <motion.div
                  key={item.n}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.55, ease, delay: i * 0.07 }}
                  className="group bg-white border border-slate-100 border-l-4 border-l-signal-500 rounded-xl p-7 lg:p-8 hover:shadow-soft hover:-translate-y-px transition-all duration-300"
                >
                  <div className="flex items-start gap-6">
                    <span className="num text-signal-500 text-sm font-semibold pt-1 flex-shrink-0">
                      / {item.n}
                    </span>
                    <div>
                      <h3 className="font-display font-bold text-ink-900 text-2xl tracking-tight-display">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-slate-600 leading-relaxed text-base max-w-xl">
                        {item.body}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-8">
              <a href="#lead-form" className="btn-primary group">
                Get a tailored proposal
                <ArrowRight
                  size={16}
                  weight="bold"
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
