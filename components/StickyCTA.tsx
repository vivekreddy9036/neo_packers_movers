"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { WhatsappLogo, Phone } from "@phosphor-icons/react";
import { scrollTo, SITE } from "@/lib/utils";

export function StickyCTA() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const max = document.body.scrollHeight - window.innerHeight;
      const ratio = max > 0 ? window.scrollY / max : 0;
      setShow(ratio > 0.25);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <AnimatePresence>
        {show && (
          <motion.a
            initial={{ opacity: 0, y: 16, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(
              "Hi Neo Industrial, I'd like to discuss a move."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="fixed bottom-6 right-6 z-40 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-elevated hover:scale-105 transition-transform duration-200"
          >
            <WhatsappLogo size={28} weight="fill" />
          </motion.a>
        )}
      </AnimatePresence>

      {/* Mobile bottom action bar */}
      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ y: 80 }}
            animate={{ y: 0 }}
            exit={{ y: 80 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed bottom-0 left-0 right-0 z-30 lg:hidden bg-white/95 backdrop-blur-md border-t border-slate-100 grid grid-cols-2 shadow-elevated"
          >
            <a
              onClick={() => scrollTo("#lead-form")}
              className="grid place-items-center py-4 text-sm font-semibold text-ink-900 border-r border-slate-100 cursor-pointer"
            >
              Get Quote
            </a>
            <a
              href={`tel:${SITE.phone.replace(/\s/g, "")}`}
              className="flex items-center justify-center gap-2 py-4 text-sm font-semibold bg-signal-500 text-white"
            >
              <Phone size={14} weight="bold" />
              Call now
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
