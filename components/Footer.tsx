"use client";

import { Phone, EnvelopeSimple, MapPin, WhatsappLogo } from "@phosphor-icons/react";
import { SITE } from "@/lib/utils";
import { locations } from "@/lib/data";

const SERVICES = [
  "Industrial Packing & Movement",
  "Heavy Machinery Relocation",
  "Export Ready Packing",
  "Office Goods Relocation",
  "On-site Packing & Lashing",
  "Custom Crates & Pallets",
];

const CERTS = [
  "GST: 36AAFCN9636H1ZO",
  "ISO 9001:2015",
  "IATA · FIATA",
  "ISPM-15 Certified",
  "MSME Registered",
];

export function Footer() {
  return (
    <footer className="bg-ink-900 pt-20 pb-8">
      <div className="container-x">

        {/* ── Top: brand + contact ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 pb-14 border-b border-white/[0.07]">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="h-10 w-10 grid place-items-center bg-signal-500 rounded-xl flex-shrink-0">
                <span className="font-display font-black text-white text-lg leading-none">N</span>
              </div>
              <span className="font-display font-bold text-white text-xl tracking-tight-display">
                Neo<span className="text-signal-500">.</span>Packers &amp; Movers
              </span>
            </div>
            <p className="text-slate-400 text-[15px] leading-relaxed max-w-[340px]">
              India&rsquo;s trusted industrial packing specialists. We move what
              others won&rsquo;t — engineered relocation, export packing, and
              custom crating since {SITE.established}.
            </p>
          </div>

          {/* Contact */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="space-y-4">
              <a
                href={`tel:${SITE.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-3 group"
              >
                <span className="h-9 w-9 grid place-items-center rounded-full border border-white/10 text-slate-500 group-hover:border-signal-500 group-hover:text-signal-500 transition-colors flex-shrink-0">
                  <Phone size={14} weight="bold" />
                </span>
                <span className="num text-white text-[15px] font-medium group-hover:text-signal-400 transition-colors">
                  {SITE.phone}
                </span>
              </a>

              <a
                href={`https://wa.me/${SITE.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 group"
              >
                <span className="h-9 w-9 grid place-items-center rounded-full border border-white/10 text-slate-500 group-hover:border-green-400 group-hover:text-green-400 transition-colors flex-shrink-0">
                  <WhatsappLogo size={14} weight="bold" />
                </span>
                <span className="text-slate-400 text-[15px] group-hover:text-green-400 transition-colors">
                  WhatsApp us
                </span>
              </a>

              <a
                href={`mailto:${SITE.email}`}
                className="flex items-center gap-3 group"
              >
                <span className="h-9 w-9 grid place-items-center rounded-full border border-white/10 text-slate-500 group-hover:border-signal-500 group-hover:text-signal-500 transition-colors flex-shrink-0">
                  <EnvelopeSimple size={14} weight="bold" />
                </span>
                <span className="text-slate-400 text-[14px] group-hover:text-white transition-colors break-all">
                  {SITE.email}
                </span>
              </a>
            </div>

            <div className="flex items-start gap-3">
              <span className="h-9 w-9 grid place-items-center rounded-full border border-white/10 text-slate-500 flex-shrink-0 mt-0.5">
                <MapPin size={14} weight="bold" />
              </span>
              <span className="text-slate-400 text-[14px] leading-relaxed">
                {SITE.address}
              </span>
            </div>
          </div>
        </div>

        {/* ── Middle: services + cities ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 py-14 border-b border-white/[0.07]">

          {/* Services */}
          <div className="lg:col-span-4">
            <p className="text-[10px] uppercase tracking-[0.2em] text-signal-600 font-semibold mb-5">
              Services
            </p>
            <ul className="space-y-3">
              {SERVICES.map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    className="text-slate-400 text-[14px] hover:text-white transition-colors leading-snug"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Cities */}
          <div className="lg:col-span-8">
            <p className="text-[10px] uppercase tracking-[0.2em] text-signal-600 font-semibold mb-5">
              Cities Served
            </p>
            <p className="text-[13px] text-slate-500 leading-[2.1]">
              {locations.join(" · ")}
              <span className="text-slate-600"> · and across all 28 states of India</span>
            </p>
          </div>
        </div>

        {/* ── Bottom: certs + copyright ── */}
        <div className="pt-8 flex flex-col md:flex-row gap-5 md:items-center md:justify-between">
          <div className="flex flex-wrap gap-2">
            {CERTS.map((c) => (
              <span
                key={c}
                className="num text-[11px] px-3 py-1 rounded-full border border-white/[0.09] text-slate-500"
              >
                {c}
              </span>
            ))}
          </div>
          <span className="text-[13px] text-slate-600 flex-shrink-0">
            © {new Date().getFullYear()} Neo Packers &amp; Movers
          </span>
        </div>

      </div>
    </footer>
  );
}
