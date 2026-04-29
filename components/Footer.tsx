"use client";

import { Phone, EnvelopeSimple, MapPin } from "@phosphor-icons/react";
import { SITE } from "@/lib/utils";
import { locations } from "@/lib/data";

const NAV_COLS = [
  {
    title: "Services",
    links: [
      "Industrial Packing & Movement",
      "Heavy Machinery Relocation",
      "Export Ready Packing",
      "Office Goods Relocation",
      "On-site Packing & Lashing",
      "Custom Crates & Pallets",
      "VCI & Shrink Wrapping",
    ],
  },
  {
    title: "Industries",
    links: [
      "Automotive",
      "Pharmaceuticals",
      "Power & Energy",
      "Steel & Metals",
      "Defence",
      "Food & Beverage",
      "Chemicals",
    ],
  },
  {
    title: "Company",
    links: ["About", "Certifications", "Press Kit", "Careers", "Contact"],
  },
];

export function Footer() {
  return (
    <footer className="bg-canvas border-t border-slate-100 pt-24 pb-10">
      <div className="container-x">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16">
          {/* Brand */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2.5">
              <div className="h-9 w-9 grid place-items-center bg-ink-900 rounded-lg">
                <span className="font-display font-black text-white text-base">
                  N
                </span>
              </div>
              <span className="font-display font-bold text-ink-900 text-lg tracking-tight-display">
                Neo<span className="text-signal-500">.</span>Packers &amp; Movers
              </span>
            </div>
            <p className="mt-5 text-slate-600 text-[15px] leading-relaxed max-w-sm">
              India&rsquo;s trusted industrial packing specialists. We move what
              others won&rsquo;t — engineered relocation, export packing, and
              custom crating since {SITE.established}.
            </p>

            <div className="mt-8 space-y-3">
              <a
                href={`tel:${SITE.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-3 text-ink-900 hover:text-signal-500 transition-colors"
              >
                <span className="grid h-9 w-9 place-items-center rounded-full bg-canvas-50 border border-slate-100">
                  <Phone size={14} weight="bold" />
                </span>
                <span className="num text-[15px] font-medium">{SITE.phone}</span>
              </a>
              <a
                href={`mailto:${SITE.email}`}
                className="flex items-center gap-3 text-slate-700 hover:text-ink-900 transition-colors"
              >
                <span className="grid h-9 w-9 place-items-center rounded-full bg-canvas-50 border border-slate-100">
                  <EnvelopeSimple size={14} weight="bold" />
                </span>
                <span className="text-[15px]">{SITE.email}</span>
              </a>
              <div className="flex items-start gap-3 text-slate-700">
                <span className="grid h-9 w-9 flex-shrink-0 place-items-center rounded-full bg-canvas-50 border border-slate-100 mt-0.5">
                  <MapPin size={14} weight="bold" />
                </span>
                <span className="text-[15px] leading-relaxed">{SITE.address}</span>
              </div>
            </div>
          </div>

          {/* Nav columns */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-8">
            {NAV_COLS.map((col) => (
              <div key={col.title}>
                <p className="text-xs uppercase tracking-[0.16em] text-slate-500 mb-5 font-semibold">
                  {col.title}
                </p>
                <ul className="space-y-3">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-[14px] text-slate-700 hover:text-signal-500 transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Cities served */}
        <div className="border-t border-slate-100 py-8">
          <p className="text-xs uppercase tracking-[0.16em] text-slate-500 font-semibold mb-4">
            Cities Served
          </p>
          <p className="text-[13px] text-slate-500 leading-relaxed">
            {locations.join(" · ")}
            <span className="text-slate-400"> · and across all 28 states of India</span>
          </p>
        </div>

        {/* Compliance strip */}
        <div className="border-t border-slate-100 py-6 flex flex-col md:flex-row gap-4 md:items-center md:justify-between text-xs text-slate-500">
          <div className="flex flex-wrap gap-x-5 gap-y-2 num">
            <span>GST: 36AAFCN9636H1ZO</span>
            <span>ISO 9001:2015</span>
            <span>IATA · FIATA</span>
            <span>ISPM-15 Certified</span>
            <span>MSME Registered</span>
          </div>
          <div className="flex gap-5">
            <a href="#" className="hover:text-ink-900 transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-ink-900 transition-colors">
              Terms
            </a>
            <span>© {new Date().getFullYear()} Neo Packers &amp; Movers</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
