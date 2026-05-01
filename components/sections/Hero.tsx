"use client";

import Image from "next/image";
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
    <section className="relative h-screen min-h-[680px] w-full overflow-hidden bg-white flex flex-col">
      {/* Full-bleed background image */}
      <Image
        src="/hero-truck.png"
        alt="Neo Packers fleet on highway"
        fill
        className="object-cover"
        style={{ objectPosition: "65% center" }}
        priority
      />

      {/* Horizontal overlay: opaque white left (text readable) → transparent right (image shows) */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to right, rgba(255,255,255,0.96) 0%, rgba(255,255,255,0.92) 28%, rgba(255,255,255,0.65) 48%, rgba(255,255,255,0.20) 68%, rgba(255,255,255,0) 82%)",
        }}
      />

      {/* Bottom fade: keeps trust strip readable over the image */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
        style={{
          background:
            "linear-gradient(to top, rgba(255,255,255,0.90) 0%, rgba(255,255,255,0.50) 50%, rgba(255,255,255,0) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative flex-1 flex flex-col container-x">
        {/* Centred block */}
        <div className="flex-1 flex flex-col justify-center pt-24 pb-8 max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease }}
            className="display-eyebrow mb-6"
          >
            EST. 1999 &nbsp;·&nbsp; ISO 9001 &nbsp;·&nbsp; IATA &amp; FIATA CERTIFIED
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.08 }}
            className="display-h1"
          >
            Packed for Safety,
            <br />
            <span className="text-signal-500">Ready for Transit.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.2 }}
            className="mt-6 lead max-w-xl"
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
              className="btn-ghost"
            >
              <Phone size={16} weight="bold" />
              Call now &nbsp; {SITE.phone}
            </a>
          </motion.div>
        </div>
      </div>

      {/* Trust strip — pinned to bottom, full width */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease, delay: 0.5 }}
        className="relative pb-10 container-x grid grid-cols-2 md:grid-cols-4 gap-px border-t border-slate-100"
      >
        {TRUST.map((t) => (
          <div key={t.label} className="pt-5 pr-6">
            <p className="num text-2xl md:text-3xl font-bold text-ink-900">
              {t.value}
            </p>
            <p className="num mt-1 text-[11px] uppercase tracking-[0.16em] text-slate-500">
              {t.label}
            </p>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
