"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Truck, Package, Airplane, GearSix, Buildings } from "@phosphor-icons/react";
import { services } from "@/lib/data";
import { cn } from "@/lib/utils";

const ease = [0.22, 1, 0.36, 1] as const;

const ICONS: Record<string, typeof Truck> = {
  "heavy-machinery-relocation": Truck,
  "industrial-packing": Package,
  "export-packing": Airplane,
  "custom-crating": GearSix,
  "office-relocation": Buildings,
};

export function Services() {
  const featured = services.find((s) => s.feature);
  const rest = services.filter((s) => !s.feature);

  return (
    <section id="services" className="section-py bg-canvas">
      <div className="container-x">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <p className="display-eyebrow mb-4">What we move</p>
            <h2 className="display-h2">
              Built for cargo
              <br />
              <span className="text-slate-500">that can&rsquo;t fail.</span>
            </h2>
          </div>
          <p className="lead max-w-md">
            Five specialist disciplines, one accountability chain. Every brief
            ships through the same engineering-grade workflow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {featured && (
            <ServiceCard
              service={featured}
              className="md:col-span-2 lg:row-span-2"
              large
            />
          )}
          {rest.map((service, i) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease, delay: i * 0.05 }}
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  service,
  className,
  large = false,
}: {
  service: (typeof services)[number];
  className?: string;
  large?: boolean;
}) {
  const Icon = ICONS[service.slug] ?? Truck;
  const idx = services.indexOf(service) + 1;

  return (
    <a
      href={`#service-${service.slug}`}
      className={cn(
        "group relative flex flex-col bg-white border border-slate-100 rounded-xl overflow-hidden transition-all duration-300 ease-premium hover:-translate-y-1 hover:shadow-elevated hover:border-slate-200",
        large ? "p-10 lg:p-12 min-h-[460px]" : "p-8 min-h-[300px]",
        className
      )}
    >
      <div className="flex items-start justify-between">
        <div
          className={cn(
            "grid place-items-center rounded-lg border border-slate-100 bg-canvas-50 transition-colors duration-300 group-hover:bg-ink-900 group-hover:border-ink-900",
            large ? "h-14 w-14" : "h-12 w-12"
          )}
        >
          <Icon
            size={large ? 26 : 22}
            weight="duotone"
            className="text-ink-900 transition-colors duration-300 group-hover:text-signal-500"
          />
        </div>
        <span className="num text-[11px] uppercase tracking-[0.18em] text-slate-400">
          / {String(idx).padStart(2, "0")}
        </span>
      </div>

      <div className={cn("flex-1 flex flex-col justify-end", large ? "mt-12" : "mt-10")}>
        <h3
          className={cn(
            "font-display font-bold text-ink-900 tracking-tight-display",
            large ? "text-4xl lg:text-5xl leading-[1.04]" : "text-2xl leading-[1.15]"
          )}
        >
          {service.title}
        </h3>
        <p
          className={cn(
            "mt-4 text-slate-600 leading-relaxed",
            large ? "text-lg max-w-xl" : "text-[15px]"
          )}
        >
          {service.blurb}
        </p>

        <div className="mt-7 pt-5 border-t border-slate-100 flex items-end justify-between">
          <div>
            <p className="num text-2xl font-bold text-ink-900">{service.stat}</p>
            <p className="num mt-1 text-[10px] uppercase tracking-[0.16em] text-slate-500">
              {service.statLabel}
            </p>
          </div>
          <div className="grid h-10 w-10 place-items-center rounded-lg bg-canvas-50 text-ink-900 transition-all duration-200 ease-premium group-hover:bg-signal-500 group-hover:text-white group-hover:rotate-45">
            <ArrowUpRight size={16} weight="bold" />
          </div>
        </div>
      </div>
    </a>
  );
}
