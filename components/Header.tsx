"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { List, X, Phone } from "@phosphor-icons/react";
import Image from "next/image";
import { cn, SITE } from "@/lib/utils";

const NAV = [
  { href: "#services", label: "Services" },
  { href: "#industries", label: "Industries" },
  { href: "#why-us", label: "Why Neo" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-premium",
        scrolled
          ? "bg-white/85 backdrop-blur-lg border-b border-slate-100 shadow-soft"
          : "bg-transparent"
      )}
    >
      <div className="container-x flex items-center justify-between py-4">
        <a href="#" className="flex items-center gap-2.5 group">
          <Image
            src="/neo-logo.png"
            alt="Neo Packers & Movers"
            width={200}
            height={90}
            className="h-10 w-auto object-contain"
            priority
          />
        </a>

        <nav className="hidden lg:flex items-center gap-9">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[14px] text-slate-600 hover:text-ink-900 transition-colors duration-200 font-medium"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href={`tel:${SITE.phone.replace(/\s/g, "")}`}
            className="num flex items-center gap-2 text-sm font-medium text-ink-900 hover:text-signal-500 transition-colors"
          >
            <Phone size={14} weight="bold" />
            {SITE.phone}
          </a>
          <a href="#lead-form" className="btn-cta">
            Get a Quote
          </a>
        </div>

        <button
          aria-label="Menu"
          className="lg:hidden text-ink-900 p-2 -mr-2"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={22} /> : <List size={22} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-slate-100 bg-white">
          <nav className="container-x py-6 flex flex-col gap-5">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-ink-900 text-base font-medium"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#lead-form"
              onClick={() => setOpen(false)}
              className="btn-cta mt-2 w-full"
            >
              Get a Quote
            </a>
          </nav>
        </div>
      )}
    </motion.header>
  );
}
