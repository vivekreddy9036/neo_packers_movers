"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export function PageLoader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let minPassed  = false;
    let pageLoaded = false;

    const tryHide = () => {
      if (minPassed && pageLoaded) setVisible(false);
    };

    // Minimum display so the progress bar animation completes (1.3 s)
    const minTimer = setTimeout(() => { minPassed = true; tryHide(); }, 1300);

    // Wait for all resources (images, fonts, scripts) to finish
    if (document.readyState === "complete") {
      pageLoaded = true;
    } else {
      const onLoad = () => { pageLoaded = true; tryHide(); };
      window.addEventListener("load", onLoad, { once: true });
    }

    return () => clearTimeout(minTimer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } }}
          className="fixed inset-0 z-[9999] bg-white flex flex-col items-center justify-center"
        >
          {/* Logo + bar */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center gap-7"
          >
            <Image
              src="/neo-logo.png"
              alt="Neo Packers & Movers"
              width={180}
              height={80}
              className="h-12 w-auto object-contain"
              priority
            />

            {/* Progress bar track */}
            <div className="w-36 h-[2px] bg-slate-100 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-signal-500 rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
              />
            </div>
          </motion.div>

          {/* Bottom tag */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.35 }}
            className="absolute bottom-10 font-mono text-[11px] uppercase tracking-[0.18em] text-slate-400"
          >
            Engineered Relocation · Since 1999
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
