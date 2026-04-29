"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MagnifyingGlass,
  PencilLine,
  Package,
  Crane,
  Truck,
  CheckCircle,
} from "@phosphor-icons/react";
import { processSteps } from "@/lib/data";

const ease = [0.22, 1, 0.36, 1] as const;
const SPRING = { type: "spring" as const, stiffness: 65, damping: 28 };
const INSTANT = { duration: 0 };

const STAGE_ICONS = [
  MagnifyingGlass,
  PencilLine,
  Package,
  Crane,
  Truck,
  CheckCircle,
] as const;

// Centre of node i as % of the flex container (6 equal columns, justify-between)
const nodePct = (i: number) => ((2 * i + 1) / 12) * 100;

export function Process() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  // Detect the wrap-around reset (step 5 → 0) so we can snap instantly
  // instead of animating backwards across the whole track.
  const prevActive = useRef(0);
  const isResetting =
    active === 0 && prevActive.current === processSteps.length - 1;

  useEffect(() => {
    prevActive.current = active;
  });

  // Auto-advance every 2.8 s; pause on hover
  useEffect(() => {
    if (paused) return;
    const t = setInterval(
      () => setActive((a) => (a + 1) % processSteps.length),
      2800
    );
    return () => clearInterval(t);
  }, [paused]);

  const transition = isResetting ? INSTANT : SPRING;

  return (
    <section className="section-py bg-canvas relative overflow-hidden">
      <div className="container-x relative">
        {/* Header */}
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
            same engineering discipline, every time.
          </p>
        </div>

        {/* ═══════════════════════════════════════════════
            DESKTOP — horizontal animated track (lg+)
        ════════════════════════════════════════════════ */}
        <div
          className="hidden lg:block"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="relative">
            {/*
              Rail wrapper spans exactly from the RIGHT EDGE of circle 0
              to the LEFT EDGE of circle 5.
              Each circle is 88 px wide (half = 44 px).
              nodePct(0) = 8.33 %  →  left  = calc(8.33%  + 44px)
              nodePct(5) = 91.67 % →  right = calc(8.33%  + 44px)
            */}
            <div
              className="absolute"
              style={{
                top: "43px",
                height: "2px",
                left: `calc(${nodePct(0)}% + 44px)`,
                right: `calc(${100 - nodePct(5)}% + 44px)`,
              }}
            >
              {/* Grey background rail */}
              <div className="absolute inset-0 bg-slate-100 rounded-full" />

              {/* Orange progress — width is a % of the wrapper above,
                  so 0 % at step 0 and 100 % at step 5.
                  Framer Motion spring-interpolates between these. */}
              <motion.div
                className="absolute left-0 top-0 h-full bg-signal-500 rounded-full"
                animate={{ width: `${(active / 5) * 100}%` }}
                transition={transition}
              />
            </div>

            {/* ── Travelling icon bubble ──
                Positioned at nodePct(active) % from the left so it
                sits over the correct circle centre. z-20 keeps it
                above everything including the circles (z-10). */}
            <motion.div
              className="absolute z-20"
              style={{ top: "24px" }} // 44 − 20 = centres the 40 px bubble on the rail
              animate={{ left: `${nodePct(active)}%` }}
              transition={transition}
            >
              {/* Inner wrapper handles −50 % centering without conflicting with Framer */}
              <div className="-translate-x-1/2">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={active}
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.5, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="h-10 w-10 rounded-full bg-signal-500 grid place-items-center shadow-elevated ring-4 ring-signal-500/20"
                  >
                    {(() => {
                      const Icon = STAGE_ICONS[active];
                      return (
                        <Icon size={18} weight="fill" className="text-white" />
                      );
                    })()}
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>

            {/* ── Stage nodes ── */}
            <div className="flex justify-between">
              {processSteps.map((step, i) => {
                const Icon = STAGE_ICONS[i];
                const isPast = i < active;
                const isCurrent = i === active;

                return (
                  <button
                    key={step.n}
                    onClick={() => {
                      setActive(i);
                      setPaused(true);
                    }}
                    className="flex flex-col items-center w-[calc(100%/6)] focus:outline-none"
                  >
                    {/* z-10 keeps circles above the rail line */}
                    <motion.div
                      animate={{
                        borderColor:
                          isPast || isCurrent ? "#F97316" : "#e2e8f0",
                        backgroundColor: isCurrent ? "#fff7ed" : "#ffffff",
                      }}
                      transition={{ duration: 0.4 }}
                      className="relative z-10 h-[88px] w-[88px] rounded-full border-2 grid place-items-center shadow-soft"
                    >
                      <motion.span
                        animate={{ scale: isCurrent ? 1.18 : 1 }}
                        transition={{
                          type: "spring",
                          stiffness: 220,
                          damping: 18,
                        }}
                      >
                        <Icon
                          size={30}
                          weight={isCurrent ? "fill" : "duotone"}
                          className={
                            isCurrent
                              ? "text-signal-500"
                              : isPast
                              ? "text-signal-400"
                              : "text-slate-300"
                          }
                        />
                      </motion.span>
                    </motion.div>

                    {/* Stage label */}
                    <div className="mt-6 text-center px-1">
                      <h3 className="font-display font-bold text-[1.05rem] text-ink-900 tracking-tight-display leading-snug">
                        {step.title}
                      </h3>
                      <p className="num mt-1 text-[10px] uppercase tracking-[0.16em] text-signal-600 font-medium">
                        {step.days}
                      </p>
                      <motion.p
                        animate={{ opacity: isCurrent ? 1 : 0.28 }}
                        transition={{ duration: 0.35 }}
                        className="mt-2 text-xs text-slate-600 leading-relaxed"
                      >
                        {step.body}
                      </motion.p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* ═══════════════════════════════════════════════
            MOBILE — scroll-driven vertical timeline (< lg)
        ════════════════════════════════════════════════ */}
        <div className="lg:hidden">
          {processSteps.map((step, i) => {
            const Icon = STAGE_ICONS[i];
            const isLast = i === processSteps.length - 1;

            return (
              <motion.div
                key={step.n}
                initial={{ opacity: 0, x: -18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, ease }}
                className="flex gap-5 relative"
              >
                {/* Left column: icon node + connecting line */}
                <div className="flex flex-col items-center flex-shrink-0">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                      delay: 0.1,
                    }}
                    className="h-14 w-14 rounded-full border-2 border-signal-500 bg-white grid place-items-center z-10 shadow-soft"
                  >
                    <Icon size={22} weight="duotone" className="text-signal-500" />
                  </motion.div>

                  {!isLast && (
                    <div className="w-0.5 flex-1 bg-slate-100 overflow-hidden min-h-[56px]">
                      <motion.div
                        className="w-full bg-signal-500"
                        initial={{ height: "0%" }}
                        whileInView={{ height: "100%" }}
                        viewport={{ once: true, margin: "-30px" }}
                        transition={{
                          duration: 0.75,
                          ease: "linear",
                          delay: 0.35,
                        }}
                      />
                    </div>
                  )}
                </div>

                {/* Right column: content card */}
                <div className={`flex-1 ${isLast ? "pb-0" : "pb-6"}`}>
                  <div className="bg-white border border-slate-100 rounded-xl p-5 shadow-soft">
                    <div className="flex items-start justify-between gap-3 mb-1">
                      <h3 className="font-display font-bold text-xl text-ink-900 tracking-tight-display">
                        {step.title}
                      </h3>
                      <span className="num text-[10px] uppercase tracking-[0.14em] text-signal-600 font-medium flex-shrink-0 pt-1">
                        {step.days}
                      </span>
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {step.body}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
