"use client";

import { useRef, useState, useCallback } from "react";
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
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [scales, setScales] = useState<number[]>(() => industries.map(() => 1));

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const newScales = cardRefs.current.map((card) => {
      if (!card) return 1;
      const rect = card.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dist = Math.sqrt((e.clientX - cx) ** 2 + (e.clientY - cy) ** 2);
      const maxDist = 320;
      return 1 + Math.max(0, (maxDist - dist) / maxDist) * 0.08;
    });
    setScales(newScales);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setScales(industries.map(() => 1));
  }, []);

  return (
    <section id="industries" className="section-py bg-canvas-50/60">
      <div className="container-x">
        <div className="max-w-xl mb-14">
          <p className="display-eyebrow mb-4">Sectors served</p>
          <h2 className="display-h2">Where our cargo lands.</h2>
        </div>

        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          {industries.map((industry, i) => {
            const Icon = ICONS[i] ?? Factory;
            return (
              <motion.div
                key={industry}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, ease, delay: i * 0.04 }}
              >
                <div
                  ref={(el) => { cardRefs.current[i] = el; }}
                  style={{
                    transform: `scale(${scales[i]})`,
                    transition: "transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.4s ease",
                    boxShadow: scales[i] > 1.03
                      ? "0 8px 28px rgba(10,22,40,0.10)"
                      : "0 1px 2px rgba(10,22,40,0.04)",
                  }}
                  className="group bg-white border border-slate-100 rounded-xl p-7 flex flex-col gap-5 min-h-[160px] cursor-default select-none"
                >
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-canvas-50 text-ink-900">
                    <Icon size={22} weight="duotone" />
                  </div>
                  <p className="font-display font-bold text-base md:text-lg text-ink-900 tracking-tight-display">
                    {industry}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
