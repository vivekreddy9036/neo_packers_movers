"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { List, X, Phone, ArrowRight } from "@phosphor-icons/react";
import Image from "next/image";
import { cn, SITE } from "@/lib/utils";

const NAV = [
  { href: "#services",   label: "Services"     },
  { href: "#process",    label: "How We Work"  },
  { href: "#why-us",     label: "Why Neo"      },
  { href: "#industries", label: "Industries"   },
];

const ease = [0.22, 1, 0.36, 1] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);
  const [active, setActive]     = useState("");

  /* ── scroll: frosted-glass + active-section tracking ── */
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 16);

      const offset  = 100;
      const scrollY = window.scrollY + offset;
      let current   = "";
      for (const { href } of NAV) {
        const el = document.querySelector(href) as HTMLElement | null;
        if (el && el.offsetTop <= scrollY) current = href;
      }
      setActive(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ── escape key closes mobile menu ── */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      {/* ════════════════════ HEADER BAR ════════════════════ */}
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0,   opacity: 1 }}
        transition={{ duration: 0.55, ease }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-premium",
          scrolled
            ? "bg-white/90 backdrop-blur-xl border-b border-slate-100 shadow-soft"
            : "bg-transparent"
        )}
      >
        <div className="container-x flex items-center justify-between h-[68px]">

          {/* Logo */}
          <a href="#" className="flex-shrink-0">
            <Image
              src="/neo-logo.png"
              alt="Neo Packers & Movers"
              width={200}
              height={90}
              className="h-14 w-auto object-contain"
              priority
            />
          </a>

          {/* ── Desktop nav links ── */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV.map((item) => {
              const isActive = active === item.href;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className="relative px-4 py-2 rounded-lg group"
                >
                  {/* Hover pill background */}
                  <span className="absolute inset-0 rounded-lg bg-slate-100/0 group-hover:bg-slate-100/80 transition-colors duration-200" />

                  <span className={cn(
                    "relative text-[14px] font-medium transition-colors duration-200",
                    isActive
                      ? "text-signal-500"
                      : "text-slate-600 group-hover:text-ink-900"
                  )}>
                    {item.label}
                  </span>

                  {/* Animated underline */}
                  <span className={cn(
                    "absolute bottom-1 left-4 right-4 h-[2px] rounded-full bg-signal-500 origin-left transition-transform duration-300 ease-out",
                    isActive
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100"
                  )} />
                </a>
              );
            })}
          </nav>

          {/* ── Desktop right: phone + CTA ── */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={`tel:${SITE.phone.replace(/\s/g, "")}`}
              className="num flex items-center gap-2 text-[13px] font-medium text-slate-500 hover:text-signal-500 transition-colors duration-200"
            >
              <span className="h-7 w-7 grid place-items-center rounded-full bg-slate-100 group-hover:bg-signal-500/10">
                <Phone size={13} weight="bold" />
              </span>
              {SITE.phone}
            </a>

            <a href="#lead-form" className="btn-cta text-sm">
              Get a Quote
            </a>
          </div>

          {/* ── Mobile toggle ── */}
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen(!open)}
            className={cn(
              "lg:hidden relative h-9 w-9 grid place-items-center rounded-lg transition-colors duration-200",
              open ? "bg-ink-900 text-white" : "text-ink-900 hover:bg-slate-100"
            )}
          >
            <AnimatePresence mode="wait" initial={false}>
              {open ? (
                <motion.span key="x"
                  initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}     transition={{ duration: 0.15 }}>
                  <X size={18} weight="bold" />
                </motion.span>
              ) : (
                <motion.span key="list"
                  initial={{ rotate: 90, opacity: 0 }}  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}    transition={{ duration: 0.15 }}>
                  <List size={18} weight="bold" />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </motion.header>

      {/* ════════════════════ MOBILE MENU ════════════════════ */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0   }}
            exit={{    opacity: 0, y: -10 }}
            transition={{ duration: 0.22, ease }}
            className="fixed top-[68px] left-0 right-0 z-40 bg-white border-b border-slate-100 shadow-elevated lg:hidden"
          >
            <div className="container-x py-5 flex flex-col">

              {/* Nav links */}
              {NAV.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  initial={{ opacity: 0, x: -14 }}
                  animate={{ opacity: 1, x: 0   }}
                  transition={{ duration: 0.2, ease, delay: i * 0.045 }}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "flex items-center justify-between py-4 border-b border-slate-50 text-[15px] font-medium group",
                    active === item.href ? "text-signal-500" : "text-ink-900"
                  )}
                >
                  <span>{item.label}</span>
                  <ArrowRight
                    size={13}
                    weight="bold"
                    className="text-slate-300 group-hover:text-signal-500 group-hover:translate-x-0.5 transition-all duration-200"
                  />
                </motion.a>
              ))}

              {/* Contact + CTA */}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, ease, delay: 0.2 }}
                className="pt-5 flex flex-col gap-3"
              >
                <a
                  href={`tel:${SITE.phone.replace(/\s/g, "")}`}
                  onClick={() => setOpen(false)}
                  className="num flex items-center gap-2.5 text-[14px] font-medium text-slate-600 hover:text-signal-500 transition-colors"
                >
                  <Phone size={14} weight="bold" />
                  {SITE.phone}
                </a>
                <a
                  href="#lead-form"
                  onClick={() => setOpen(false)}
                  className="btn-cta w-full justify-center"
                >
                  Get a Quote
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
