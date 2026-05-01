"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  UserCircle,
  Package,
  Globe,
  Fire,
  Seal,
  Diamond,
} from "@phosphor-icons/react";
import { whyChooseUs } from "@/lib/data";

const ease = [0.22, 1, 0.36, 1] as const;

const ICONS = [UserCircle, Package, Globe, Fire, Seal, Diamond];

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
            <div className="relative lg:sticky lg:top-28 aspect-[4/5] overflow-hidden rounded-2xl shadow-elevated">
              <img
                src="https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&w=1200&q=85"
                alt="Heavy machinery being lifted"
                className="h-full w-full object-cover"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-ink-900/70 via-transparent to-transparent" />

              {/* Stat badge */}
              <div className="absolute bottom-6 left-6 right-6">
                <p className="num text-[10px] uppercase tracking-[0.18em] text-white/60 mb-1">
                  In-house workshop
                </p>
                <p className="num text-3xl font-bold text-white leading-none">
                  18,000 <span className="text-signal-400">sq ft</span>
                </p>
                <p className="text-sm text-white/70 mt-1.5">
                  Custom crating built on-site
                </p>
              </div>
            </div>
          </div>

          {/* 6 reasons — 2-column grid */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1">
              {whyChooseUs.map((item, i) => {
                const Icon = ICONS[i] ?? Diamond;
                return (
                  <motion.div
                    key={item.n}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.55, ease, delay: i * 0.06 }}
                    className="group relative bg-white border border-slate-100 rounded-2xl p-6 overflow-hidden
                               hover:border-signal-500/30 hover:shadow-elevated hover:-translate-y-0.5
                               transition-all duration-300 cursor-default"
                  >
                    {/* Ghost number — decorative background */}
                    <span
                      className="absolute -bottom-4 -right-2 font-mono font-black text-[80px] leading-none
                                 text-slate-100 select-none pointer-events-none transition-colors duration-300
                                 group-hover:text-signal-500/10"
                    >
                      {item.n}
                    </span>

                    {/* Icon badge */}
                    <div className="relative h-11 w-11 rounded-xl bg-signal-500/10 grid place-items-center
                                    text-signal-500 mb-5 transition-colors duration-300
                                    group-hover:bg-signal-500 group-hover:text-white">
                      <Icon size={20} weight="duotone" />
                    </div>

                    {/* Content */}
                    <h3 className="relative font-display font-bold text-ink-900 text-[0.95rem] md:text-base
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
              className="mt-8"
            >
              <a href="#lead-form" className="btn-primary group">
                Get a tailored proposal
                <ArrowRight
                  size={16}
                  weight="bold"
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
