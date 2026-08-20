"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  CurrencyDollar,
  Timer,
  Seal,
  Wrench,
  GraduationCap,
  Lightbulb,
} from "@phosphor-icons/react";
import { whyChooseUs } from "@/lib/data";
import { scrollTo } from "@/lib/utils";

const ease = [0.22, 1, 0.36, 1] as const;

const ICONS = [CurrencyDollar, Timer, Seal, Wrench, GraduationCap, Lightbulb];

export function WhyChooseUs() {
  return (
    <section id="why-us" className="section-py bg-canvas-50/60">
      <div className="container-x">
        <div className="max-w-3xl mb-16">
          <p className="display-eyebrow mb-4">Why us</p>
          <h2 className="display-h2">
            Our commitment to
            <br />
            <span className="text-slate-500">excellence sets us apart.</span>
          </h2>
        </div>

        {/* 6 cards — full-width 3×2 grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {whyChooseUs.map((item, i) => {
            const Icon = ICONS[i] ?? Lightbulb;
            return (
              <motion.div
                key={item.n}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, ease, delay: i * 0.06 }}
                className="group relative bg-white border border-slate-100 rounded-2xl p-7 overflow-hidden
                           hover:border-signal-500/30 hover:shadow-elevated hover:-translate-y-0.5
                           transition-all duration-300 cursor-default"
              >
                {/* Ghost number */}
                <span className="absolute -bottom-4 -right-2 font-mono font-black text-[80px] leading-none
                                 text-slate-100 select-none pointer-events-none transition-colors duration-300
                                 group-hover:text-signal-500/10">
                  {item.n}
                </span>

                {/* Icon badge */}
                <div className="relative h-11 w-11 rounded-xl bg-signal-500/10 grid place-items-center
                                text-signal-500 mb-5 transition-colors duration-300
                                group-hover:bg-signal-500 group-hover:text-white">
                  <Icon size={20} weight="duotone" />
                </div>

                <h3 className="relative font-display font-bold text-ink-900 text-base
                               tracking-tight-display leading-snug mb-2">
                  {item.title}
                </h3>
                <p className="relative text-slate-500 text-sm leading-relaxed">
                  {item.body}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease, delay: 0.4 }}
          className="mt-10"
        >
          <a onClick={() => scrollTo("#lead-form")} className="btn-primary group cursor-pointer">
            Get a tailored proposal
            <ArrowRight
              size={16}
              weight="bold"
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
