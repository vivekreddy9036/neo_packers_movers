"use client";

import { motion } from "framer-motion";
import { ArrowRight, Phone } from "@phosphor-icons/react";
import { SITE } from "@/lib/utils";

const ease = [0.22, 1, 0.36, 1] as const;

const TRUST = [
  { value: "25+", label: "Years of experience" },
  { value: "500+", label: "Industrial projects" },
  { value: "5,000+", label: "Vehicle movements" },
  { value: "28", label: "States served" },
];

export function Hero() {
  return (
    <section className="relative h-screen min-h-[680px] w-full overflow-hidden bg-ink-900">
      {/* Background image — swap for <video> when /hero.mp4 is available */}
      <img
        src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=2000&q=85"
        alt="Industrial crane at work"
        className="absolute inset-0 h-full w-full object-cover object-center"
        loading="eager"
      />

      {/* Dark directional overlay */}
      <div className="absolute inset-0 hero-overlay" />

      {/* Subtle noise / dot texture */}
      <div className="absolute inset-0 bg-dots opacity-[0.15]" />

      {/* Bottom trust-bar gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-ink-900/80 to-transparent pointer-events-none" />

      {/* Content */}
      <div className="relative h-full flex flex-col container-x">
        {/* Centred block */}
        <div className="flex-1 flex flex-col justify-center pt-24 pb-8 max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease }}
            className="display-eyebrow text-white/60 mb-6"
          >
            EST. 1999 &nbsp;·&nbsp; ISO 9001 &nbsp;·&nbsp; IATA &amp; FIATA CERTIFIED
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.08 }}
            className="display-h1 text-white"
          >
            Packed for Safety,
            <br />
            <span className="text-signal-500">Ready for Transit.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.2 }}
            className="mt-6 text-white/70 max-w-xl leading-[1.7]"
            style={{ fontSize: "clamp(1rem, 1.4vw, 1.125rem)" }}
          >
            Safeguarding your most vital assets is not just logistics — it&rsquo;s
            an art. An art perfected over 25 years, where every nuance of
            protection is meticulously crafted.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.32 }}
            className="mt-10 flex flex-col sm:flex-row gap-3"
          >
            <a href="#lead-form" className="btn-cta group">
              Get a free quote
              <ArrowRight
                size={16}
                weight="bold"
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </a>
            <a
              href={`tel:${SITE.phone.replace(/\s/g, "")}`}
              className="btn-ghost-dark"
            >
              <Phone size={16} weight="bold" />
              Call now &nbsp; {SITE.phone}
            </a>
          </motion.div>
        </div>

        {/* Trust strip — pinned to bottom */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease, delay: 0.5 }}
          className="pb-10 grid grid-cols-2 md:grid-cols-4 gap-px border-t border-white/10"
        >
          {TRUST.map((t) => (
            <div key={t.label} className="pt-5 pr-6">
              <p className="num text-2xl md:text-3xl font-bold text-white">
                {t.value}
              </p>
              <p className="num mt-1 text-[11px] uppercase tracking-[0.16em] text-white/50">
                {t.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
