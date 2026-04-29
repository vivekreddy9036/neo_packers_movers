"use client";

import { useCallback, useState } from "react";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import { X, User, ChatTeardropDots } from "@phosphor-icons/react";
import { faqs } from "@/lib/data";

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", damping: 25, stiffness: 300 },
  },
  exit: { opacity: 0, y: 20, scale: 0.95, transition: { duration: 0.2 } },
};

const listVariants: Variants = {
  visible: { transition: { staggerChildren: 0.07 } },
};

const msgVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 400, damping: 28 } },
};

export function FloatingFAQ() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = useCallback(() => setIsOpen((p) => !p), []);

  return (
    <div className="fixed bottom-6 left-6 z-50 flex flex-col items-start gap-3">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="faq-panel"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            style={{ transformOrigin: "bottom left" }}
            className="w-[360px] sm:w-[400px] overflow-hidden rounded-xl border border-slate-200 bg-white shadow-elevated"
          >
            {/* Header */}
            <div className="flex items-center justify-between gap-3 px-5 py-4 border-b border-slate-100 bg-canvas-50">
              <div className="flex items-center gap-3">
                <BotAvatar className="h-10 w-10" />
                <div>
                  <p className="font-semibold text-ink-900 text-sm">Neo Support</p>
                  <p className="flex items-center gap-1.5 text-xs text-slate-500">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    Online · replies instantly
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="grid h-8 w-8 place-items-center rounded-full text-slate-400 hover:bg-slate-100 hover:text-ink-900 transition-colors"
                aria-label="Close FAQ"
              >
                <X size={16} weight="bold" />
              </button>
            </div>

            {/* Chat messages */}
            <motion.div
              className="flex flex-col gap-5 p-5 h-[460px] overflow-y-auto scroll-smooth"
              initial="hidden"
              animate="visible"
              variants={listVariants}
            >
              {faqs.map((faq, i) => (
                <motion.div key={i} variants={msgVariants} className="space-y-3">
                  {/* User question */}
                  <div className="flex items-end justify-end gap-2.5">
                    <div className="bg-ink-900 text-white text-[13px] leading-relaxed px-4 py-3 rounded-2xl rounded-br-sm max-w-[82%]">
                      {faq.q}
                    </div>
                    <div className="h-7 w-7 flex-shrink-0 rounded-full bg-slate-200 grid place-items-center">
                      <User size={13} weight="bold" className="text-slate-500" />
                    </div>
                  </div>

                  {/* Bot answer */}
                  <div className="flex items-end gap-2.5">
                    <BotAvatar className="h-7 w-7" />
                    <div className="bg-slate-100 text-slate-700 text-[13px] leading-relaxed px-4 py-3 rounded-2xl rounded-bl-sm max-w-[82%]">
                      {faq.a}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle button */}
      <motion.button
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.94 }}
        onClick={toggle}
        aria-label="Toggle FAQ chat"
        className="relative h-14 w-14 rounded-full bg-ink-900 text-white shadow-elevated grid place-items-center overflow-hidden"
      >
        {/* Glow ring */}
        <span className="absolute inset-0 -z-10 rounded-full bg-ink-900/30 blur-xl" />

        <AnimatePresence mode="wait" initial={false}>
          {isOpen ? (
            <motion.span
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.18 }}
            >
              <X size={22} weight="bold" />
            </motion.span>
          ) : (
            <motion.span
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.18 }}
              className="relative h-full w-full grid place-items-center"
            >
              {/* Fallback icon — hidden if image loads */}
              <ChatTeardropDots size={22} weight="fill" className="text-white" />
              {/* Custom icon from /public/neo-icon.png */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/neo-icon.png"
                alt=""
                className="absolute inset-0 h-full w-full object-cover rounded-full"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
            </motion.span>
          )}
        </AnimatePresence>

        {/* Notification dot */}
        {!isOpen && (
          <span className="absolute top-0.5 right-0.5 h-3.5 w-3.5 rounded-full bg-signal-500 border-2 border-white" />
        )}
      </motion.button>
    </div>
  );
}

function BotAvatar({ className }: { className?: string }) {
  return (
    <div className={`flex-shrink-0 rounded-full bg-ink-900 overflow-hidden grid place-items-center ${className}`}>
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
