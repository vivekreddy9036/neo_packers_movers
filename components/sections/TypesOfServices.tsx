"use client";

import { motion } from "framer-motion";

const SERVICE_TYPES = [
  {
    title: "Volatile Corrosion Inhibitor",
    image: "https://ik.imagekit.io/2ecf22k5j/neo%20packers%20and%20movers/Services/Volatile%20Corrosion%20Inhibitor.png?updatedAt=1787241356103",
  },
  {
    title: "Heat Shrink Wrapping",
    image: "https://ik.imagekit.io/2ecf22k5j/neo%20packers%20and%20movers/Services/Heat%20shrink%20wrapping.png?updatedAt=1787241355399",
  },
  {
    title: "Vacuum Packing",
    image: "https://ik.imagekit.io/2ecf22k5j/neo%20packers%20and%20movers/Services/Vacuum%20packing.png?updatedAt=1787241355156",
  },
  {
    title: "Saddle Securing",
    image: "https://ik.imagekit.io/2ecf22k5j/neo%20packers%20and%20movers/Services/Saddle%20securing.png?updatedAt=1787241354575",
  },
  {
    title: "Container Lashing",
    image: "https://ik.imagekit.io/2ecf22k5j/neo%20packers%20and%20movers/Services/Container%20lashing.png?updatedAt=1787241354911",
  },
  {
    title: "On Site Packing",
    image: "https://ik.imagekit.io/2ecf22k5j/neo%20packers%20and%20movers/Services/On%20site%20packing.png?updatedAt=1787241352747",
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

export function TypesOfServices() {
  return (
    <section id="types-of-services" className="section-py bg-white">
      <div className="container-x">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <p className="display-eyebrow mb-4">Types of Services</p>
            <h2 className="display-h2">
              Every method,
              <br />
              <span className="text-slate-500">engineered for protection.</span>
            </h2>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICE_TYPES.map((svc, i) => (
            <motion.div
              key={svc.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, ease, delay: i * 0.07 }}
              className="group rounded-2xl overflow-hidden border border-slate-100 bg-white
                shadow-[0_2px_8px_rgba(10,22,40,0.06)]
                hover:shadow-[0_16px_40px_rgba(10,22,40,0.12)]
                hover:-translate-y-1.5
                transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]"
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={svc.image}
                  alt={svc.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                />
                {/* Subtle dark vignette at bottom of image */}
                <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-black/20 to-transparent" />
              </div>

              {/* Title strip */}
              <div className="relative px-5 py-4 flex items-center gap-3">
                {/* Animated red left accent */}
                <span className="block w-[3px] h-5 rounded-full bg-signal-500 shrink-0
                  scale-y-0 group-hover:scale-y-100 origin-top
                  transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]" />
                <h3 className="font-display font-bold text-ink-900 text-[15px] leading-snug tracking-tight">
                  {svc.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
