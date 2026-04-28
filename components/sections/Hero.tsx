"use client";

import { motion } from "framer-motion";
import { ArrowRight, Phone, ShieldCheck, CheckCircle, ArrowDown } from "@phosphor-icons/react";
import { SITE } from "@/lib/utils";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  return (
    <section className="relative pt-36 md:pt-44 pb-24 md:pb-32 bg-hero-soft overflow-hidden">
      <div className="absolute inset-0 bg-dots opacity-50 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-[60%] divider-line opacity-30" />

      <div className="relative container-x">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Text */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease }}
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1.5 mb-8 shadow-soft"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-verify-500 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-verify-500" />
              </span>
              <span className="num text-[11px] uppercase tracking-[0.16em] text-slate-700 font-medium">
                Est. 2003 · ISO 9001 · 12,840+ moves
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease, delay: 0.05 }}
              className="display-h1"
            >
              Heavy machinery,
              <br />
              moved without
              <br />
              <span className="text-signal-500">a single dent.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease, delay: 0.2 }}
              className="lead mt-8 max-w-xl"
            >
              Industrial relocation, export packing, and pan-India heavy-haul
              logistics — engineered by specialists, not movers.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease, delay: 0.3 }}
              className="mt-10 flex flex-col sm:flex-row gap-3"
            >
              <a href="#lead-form" className="btn-cta group">
                Request a site survey
                <ArrowRight
                  size={16}
                  weight="bold"
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </a>
              <a href={`tel:${SITE.phone.replace(/\s/g, "")}`} className="btn-ghost">
                <Phone size={16} weight="bold" />
                Speak to a specialist
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, ease, delay: 0.45 }}
              className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-600"
            >
              <span className="flex items-center gap-2">
                <ShieldCheck size={16} weight="duotone" className="text-verify-500" />
                Cargo insured ₹50 Cr
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle size={16} weight="duotone" className="text-verify-500" />
                Free site survey
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle size={16} weight="duotone" className="text-verify-500" />
                Reply in &lt; 2 hours
              </span>
            </motion.div>
          </div>

          {/* Visual — image card stack */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.15 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-elevated">
              <img
                src="https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=1200&q=85"
                alt="Industrial crane lifting heavy machinery"
                className="h-full w-full object-cover"
              />
              {/* Floating stat tile */}
              <div className="absolute bottom-6 left-6 right-6 surface bg-white/95 backdrop-blur-md p-5 shadow-elevated">
                <p className="num text-xs uppercase tracking-[0.16em] text-slate-500">
                  Live ops
                </p>
                <div className="mt-2 flex items-baseline gap-2">
                  <p className="num text-2xl font-bold text-ink-900">99.4%</p>
                  <p className="text-sm text-slate-600">claim-free delivery</p>
                </div>
                <div className="mt-3 h-1 w-full rounded-full bg-slate-100 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "99.4%" }}
                    transition={{ duration: 1.4, ease, delay: 0.6 }}
                    className="h-full bg-verify-500"
                  />
                </div>
              </div>
            </div>

            {/* Top-left floating chip */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: -4 }}
              animate={{ opacity: 1, scale: 1, rotate: -4 }}
              transition={{ duration: 0.6, ease, delay: 0.6 }}
              className="absolute -top-5 -left-4 lg:-left-10 surface px-4 py-3 shadow-card"
            >
              <p className="num text-xs uppercase tracking-[0.14em] text-slate-500">
                Booked today
              </p>
              <p className="num text-lg font-bold text-ink-900 mt-0.5">
                3 site surveys
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll cue */}
        <div className="hidden md:flex absolute bottom-6 left-1/2 -translate-x-1/2 items-center gap-2 text-xs text-slate-400">
          <span className="uppercase tracking-[0.18em]">Scroll</span>
          <ArrowDown size={12} className="animate-bounce" />
        </div>
      </div>
    </section>
  );
}
