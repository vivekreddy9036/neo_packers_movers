"use client";

import { motion } from "framer-motion";
import {
  Car,
  FirstAid,
  Lightning,
  Factory,
  TShirt,
  Shield,
  ForkKnife,
  Flask,
} from "@phosphor-icons/react";
import { industries } from "@/lib/data";

const ICONS = [Car, FirstAid, Lightning, Factory, TShirt, Shield, ForkKnife, Flask];

const ease = [0.22, 1, 0.36, 1] as const;

export function Industries() {
  return (
    <section id="industries" className="section-py bg-canvas-50/60">
      <div className="container-x">
        <div className="max-w-xl mb-14">
          <p className="display-eyebrow mb-4">Sectors served</p>
          <h2 className="display-h2">Where our cargo lands.</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {industries.map((industry, i) => {
            const Icon = ICONS[i] ?? Factory;
            return (
              <motion.a
                href="#"
                key={industry}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, ease, delay: i * 0.04 }}
                className="group bg-white border border-slate-100 rounded-xl p-7 flex flex-col gap-5 min-h-[160px] hover:border-slate-200 hover:shadow-soft hover:-translate-y-1 transition-all duration-300 ease-premium"
              >
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-canvas-50 text-ink-900 transition-colors duration-300 group-hover:bg-ink-900 group-hover:text-signal-500">
                  <Icon size={22} weight="duotone" />
                </div>
                <p className="font-display font-bold text-base md:text-lg text-ink-900 tracking-tight-display">
                  {industry}
                </p>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
