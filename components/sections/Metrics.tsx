"use client";

import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import { metrics } from "@/lib/data";

const ease = [0.22, 1, 0.36, 1] as const;

export function Metrics() {
  return (
    <section className="relative bg-ink-900 text-white overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />
      <div className="absolute -top-40 left-1/3 h-80 w-80 rounded-full bg-signal-500/20 blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-40 right-1/4 h-80 w-80 rounded-full bg-accent-500/20 blur-[120px] pointer-events-none" />

      <div className="container-x relative py-24 md:py-32">
        <div className="max-w-2xl mb-16">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-signal-400 font-medium mb-4">
            By the numbers
          </p>
          <h2 className="font-display font-bold tracking-tight-display text-4xl md:text-5xl leading-[1.04] text-white">
            Two decades of moving
            <br />
            <span className="text-white/60">what couldn&rsquo;t be moved.</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 lg:gap-x-2">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease, delay: i * 0.08 }}
              className="border-t border-white/15 pt-6 lg:pr-6"
            >
              <div className="num text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight tabular-nums leading-none">
                <Counter target={m.value} />
                <span className="text-signal-500">{m.suffix}</span>
              </div>
              <p className="mt-5 text-xs uppercase tracking-[0.18em] text-white/60">
                {m.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Counter({ target }: { target: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const num = parseFloat(target.replace(/,/g, ""));
  const isFloat = target.includes(".");
  const motionVal = useMotionValue(0);
  const spring = useSpring(motionVal, { stiffness: 60, damping: 18 });
  const display = useTransform(spring, (v) => {
    return isFloat ? v.toFixed(1) : Math.round(v).toLocaleString("en-IN");
  });

  useEffect(() => {
    if (inView) motionVal.set(num);
  }, [inView, num, motionVal]);

  return <motion.span ref={ref}>{display}</motion.span>;
}
