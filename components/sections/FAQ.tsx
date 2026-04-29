"use client";

import { motion } from "framer-motion";
import { User } from "@phosphor-icons/react";
import { faqs } from "@/lib/data";

const ease = [0.22, 1, 0.36, 1] as const;

export function FAQ() {
  return (
    <section id="faq" className="section-py bg-canvas-50/60">
      <div className="container-x">
        <div className="text-center mb-12">
          <p className="display-eyebrow mb-4">Common questions</p>
          <h2 className="display-h2">
            Answers, <span className="text-slate-500">instantly.</span>
          </h2>
        </div>

        <div className="max-w-2xl mx-auto bg-white border border-slate-200 rounded-xl overflow-hidden shadow-elevated">
          {/* Bot header */}
          <div className="flex items-center gap-3 px-5 py-4 border-b border-slate-100 bg-canvas-50">
            <BotAvatar size={10} />
            <div>
              <p className="font-semibold text-ink-900 text-sm">Neo Support</p>
              <p className="flex items-center gap-1.5 text-xs text-slate-500">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 inline-block" />
                Online · replies instantly
              </p>
            </div>
          </div>

          {/* Message thread */}
          <div className="p-5 space-y-6 max-h-[600px] overflow-y-auto scroll-smooth">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, ease, delay: i * 0.04 }}
                className="space-y-3"
              >
                {/* User question — right */}
                <div className="flex items-end justify-end gap-2.5">
                  <div className="bg-ink-900 text-white text-[14px] leading-relaxed px-4 py-3 rounded-2xl rounded-br-sm max-w-[82%]">
                    {faq.q}
                  </div>
                  <div className="h-8 w-8 flex-shrink-0 rounded-full bg-slate-200 grid place-items-center">
                    <User size={14} weight="bold" className="text-slate-500" />
                  </div>
                </div>

                {/* Bot answer — left */}
                <div className="flex items-end gap-2.5">
                  <BotAvatar size={8} />
                  <div className="bg-slate-100 text-slate-700 text-[14px] leading-relaxed px-4 py-3 rounded-2xl rounded-bl-sm max-w-[82%]">
                    {faq.a}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function BotAvatar({ size }: { size: number }) {
  return (
    <div
      className={`h-${size} w-${size} flex-shrink-0 rounded-full bg-ink-900 overflow-hidden grid place-items-center`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/neo-icon.png"
        alt="Neo"
        className="h-full w-full object-cover"
        onError={(e) => {
          e.currentTarget.style.display = "none";
        }}
      />
    </div>
  );
}
