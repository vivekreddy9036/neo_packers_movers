"use client";

import { Phone, EnvelopeSimple, MapPin } from "@phosphor-icons/react";
import { SITE } from "@/lib/utils";

const COLS = [
  {
    title: "Services",
    links: [
      "Heavy Machinery Relocation",
      "Industrial Packing",
      "Export Packing",
      "Custom Crating",
      "Office Relocation",
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
    ],
  },
  {
    title: "Company",
    links: ["About", "Certifications", "Press kit", "Careers", "Contact"],
  },
  {
    title: "Locations",
    links: ["Mumbai", "Pune", "Chennai", "Bengaluru", "Delhi NCR"],
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
              <div className="h-9 w-9 grid place-items-center bg-ink-900 rounded-xl">
                <span className="font-display font-black text-white text-base">
                  N
                </span>
              </div>
              <span className="font-display font-bold text-ink-900 text-lg tracking-tight-display">
                Neo<span className="text-signal-500">.</span>Industrial
              </span>
            </div>
            <p className="mt-5 text-slate-600 text-[15px] leading-relaxed max-w-sm">
              India&rsquo;s industrial cargo arrives intact. We move what others
              won&rsquo;t — engineered relocation, export, and crating since {SITE.established}.
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
                <span className="grid h-9 w-9 flex-shrink-0 place-items-center rounded-full bg-canvas-50 border border-slate-100">
                  <MapPin size={14} weight="bold" />
                </span>
                <span className="text-[15px] pt-1.5">
                  Operating across 28 states, India
                </span>
              </div>
            </div>
          </div>

          {/* Columns */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            {COLS.map((col) => (
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

        {/* Compliance strip */}
        <div className="border-t border-slate-100 py-6 flex flex-col md:flex-row gap-4 md:items-center md:justify-between text-xs text-slate-500">
          <div className="flex flex-wrap gap-x-5 gap-y-2 num">
            <span>GST: 27ABCDE1234F1Z5</span>
            <span>CIN: U63090MH2003PTC123456</span>
            <span>ISO 9001:2015</span>
            <span>IATA · FIATA</span>
          </div>
          <div className="flex gap-5">
            <a href="#" className="hover:text-ink-900 transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-ink-900 transition-colors">
              Terms
            </a>
            <span>© {new Date().getFullYear()} Neo Industrial</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
