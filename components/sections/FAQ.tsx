"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus, Phone } from "@phosphor-icons/react";
import { faqs } from "@/lib/data";
import { SITE } from "@/lib/utils";

const ease = [0.22, 1, 0.36, 1] as const;

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="section-py bg-canvas">
      <div className="container-x">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-4">
            <p className="display-eyebrow mb-4">Common questions</p>
            <h2 className="display-h2">
              The answers
              <br />
              <span className="text-slate-500">procurement teams ask.</span>
            </h2>
            <p className="lead mt-6">
              Can&rsquo;t find your question? Speak to a specialist — most
              callers reach an answer in under 90 seconds.
            </p>
            <a
              href={`tel:${SITE.phone.replace(/\s/g, "")}`}
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-ink-900 group"
            >
              <span className="grid h-10 w-10 place-items-center rounded-full bg-canvas-50 border border-slate-100 group-hover:bg-ink-900 group-hover:text-white transition-colors">
                <Phone size={14} weight="bold" />
              </span>
              <span className="num">{SITE.phone}</span>
            </a>
          </div>

          <div className="lg:col-span-8">
            <div className="space-y-3">
              {faqs.map((faq, i) => {
                const isOpen = open === i;
                return (
                  <div
                    key={i}
                    className={`bg-white border rounded-2xl transition-all duration-300 ${
                      isOpen
                        ? "border-slate-200 shadow-soft"
                        : "border-slate-100 hover:border-slate-200"
                    }`}
                  >
                    <button
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="w-full flex items-start justify-between gap-6 px-6 py-6 md:px-7 text-left"
                      aria-expanded={isOpen}
                    >
                      <span className="font-display font-semibold text-ink-900 text-lg md:text-xl tracking-tight-display pr-4">
                        {faq.q}
                      </span>
                      <span
                        className={`grid h-9 w-9 flex-shrink-0 place-items-center rounded-full transition-all duration-300 ease-premium ${
                          isOpen
                            ? "bg-signal-500 text-white rotate-45"
                            : "bg-canvas-50 text-ink-900"
                        }`}
                      >
                        <Plus size={16} weight="bold" />
                      </span>
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4, ease }}
                          className="overflow-hidden"
                        >
                          <p className="px-6 md:px-7 pb-7 pr-16 text-slate-600 leading-relaxed text-base max-w-2xl">
                            {faq.a}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
