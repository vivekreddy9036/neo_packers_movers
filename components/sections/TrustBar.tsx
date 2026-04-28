"use client";

import { ShieldCheck, CheckCircle, Certificate, Sparkle } from "@phosphor-icons/react";

const CLIENTS = [
  "Tata Steel",
  "L&T",
  "Siemens",
  "Bosch",
  "Hyundai",
  "ABB",
  "Mahindra",
  "Reliance",
  "Schneider",
  "Ashok Leyland",
];

const BADGES = [
  { icon: Certificate, label: "ISO 9001:2015" },
  { icon: ShieldCheck, label: "IATA · FIATA" },
  { icon: CheckCircle, label: "GST Verified" },
  { icon: Sparkle, label: "Cargo Insured ₹50 Cr" },
  { icon: CheckCircle, label: "MSME Registered" },
];

export function TrustBar() {
  return (
    <section className="border-y border-slate-100 bg-canvas-50/60">
      <div className="container-x py-10">
        <p className="text-center text-xs uppercase tracking-[0.2em] text-slate-500 font-medium mb-6">
          Trusted by India&rsquo;s industrial leaders
        </p>

        <div className="overflow-hidden marquee-mask">
          <div className="flex w-max animate-marquee gap-14 pr-14 items-center">
            {[...CLIENTS, ...CLIENTS].map((client, i) => (
              <span
                key={i}
                className="font-display font-bold text-2xl md:text-[28px] text-slate-400 hover:text-ink-900 transition-colors duration-300 whitespace-nowrap tracking-tight-display"
              >
                {client}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-10 pt-7 border-t border-slate-100 flex flex-wrap justify-center items-center gap-x-8 gap-y-3">
          {BADGES.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2">
              <Icon size={16} weight="duotone" className="text-verify-500" />
              <span className="text-[12px] text-slate-700 font-medium">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
