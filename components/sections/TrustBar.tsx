"use client";

import { ShieldCheck, CheckCircle, Certificate, Sparkle } from "@phosphor-icons/react";

const FEATURED_LOGOS = [
  {
    name: "TATA",
    url: "https://ik.imagekit.io/2ecf22k5j/neo%20packers%20and%20movers/tata1.png",
  },
  {
    name: "Lockheed Martin",
    url: "https://ik.imagekit.io/2ecf22k5j/neo%20packers%20and%20movers/neo%20logo/lockhead%20martin.png",
  },
  {
    name: "Bharat Dynamics Limited",
    url: "https://ik.imagekit.io/2ecf22k5j/neo%20packers%20and%20movers/neo%20logo/bharat%20dynamics%20limited%20logo.png",
  },
  {
    name: "MSNO",
    url: "https://ik.imagekit.io/2ecf22k5j/neo%20packers%20and%20movers/neo%20logo/msn.png",
  },
];

const MARQUEE_LOGOS = [
  { name: "Adani",            url: "https://ik.imagekit.io/2ecf22k5j/neo%20packers%20and%20movers/neo%20logo/adani.jpg" },
  { name: "Megha Healthcare", url: "https://ik.imagekit.io/2ecf22k5j/neo%20packers%20and%20movers/neo%20logo/megna%20health%20care.png" },
  { name: "TechnipFMC",       url: "https://ik.imagekit.io/2ecf22k5j/neo%20packers%20and%20movers/neo%20logo/fmc%20logo.png" },
  { name: "GMR",              url: "https://ik.imagekit.io/2ecf22k5j/neo%20packers%20and%20movers/neo%20logo/gmr.png" },
  { name: "Hetero",           url: "https://ik.imagekit.io/2ecf22k5j/neo%20packers%20and%20movers/neo%20logo/Hetero%20logo.png" },
  { name: "AIS Stranich",     url: "https://ik.imagekit.io/2ecf22k5j/neo%20packers%20and%20movers/neo%20logo/AIS%20Stranich%20Indi%20logo.png" },
  { name: "Kernex",           url: "https://ik.imagekit.io/2ecf22k5j/neo%20packers%20and%20movers/neo%20logo/Kernex%20logo.png" },
  { name: "Suzlon",           url: "https://ik.imagekit.io/2ecf22k5j/neo%20packers%20and%20movers/neo%20logo/Suzlon.png" },
  { name: "Amneal",           url: "https://ik.imagekit.io/2ecf22k5j/neo%20packers%20and%20movers/neo%20logo/Amneal%20logo.png" },
  { name: "Air Liquide",      url: "https://ik.imagekit.io/2ecf22k5j/neo%20packers%20and%20movers/neo%20logo/Air%20logo.png" },
  { name: "Tech Mahindra",    url: "https://ik.imagekit.io/2ecf22k5j/neo%20packers%20and%20movers/neo%20logo/tech%20mahindra%20logo.jpg" },
  { name: "Wipro",            url: "https://ik.imagekit.io/2ecf22k5j/neo%20packers%20and%20movers/neo%20logo/wipro%20logo.png" },
  { name: "Zen Technologies", url: "https://ik.imagekit.io/2ecf22k5j/neo%20packers%20and%20movers/neo%20logo/Zen%20Technologies%20logo.png" },
  { name: "Dr. Reddys",       url: "https://ik.imagekit.io/2ecf22k5j/neo%20packers%20and%20movers/neo%20logo/dr%20reddy.png" },
  { name: "Atlas Copco",      url: "https://ik.imagekit.io/2ecf22k5j/neo%20packers%20and%20movers/neo%20logo/Atlas%20Copco%20logo.jpg" },
  { name: "DESMI",            url: "https://ik.imagekit.io/2ecf22k5j/neo%20packers%20and%20movers/neo%20logo/DESMI%20logo.png" },
  { name: "Bilfinger",        url: "https://ik.imagekit.io/2ecf22k5j/neo%20packers%20and%20movers/neo%20logo/Bilfinger%20logo.1%20jpg.jpg" },
  { name: "ONGC",             url: "https://ik.imagekit.io/2ecf22k5j/neo%20packers%20and%20movers/neo%20logo/ONGC%20logo.png" },
  { name: "RenewSys",         url: "https://ik.imagekit.io/2ecf22k5j/neo%20packers%20and%20movers/neo%20logo/RenewSys%20logo.png" },
  { name: "Premier Energies", url: "https://ik.imagekit.io/2ecf22k5j/neo%20packers%20and%20movers/neo%20logo/Premier%20Energies%20logo.png" },
  { name: "Drillmec",         url: "https://ik.imagekit.io/2ecf22k5j/neo%20packers%20and%20movers/neo%20logo/Drillmec%20logo.png" },
  { name: "Sigma Advanced",   url: "https://ik.imagekit.io/2ecf22k5j/neo%20packers%20and%20movers/neo%20logo/sigma%20advanced.jpg" },
  { name: "Skyroot",          url: "https://ik.imagekit.io/2ecf22k5j/neo%20packers%20and%20movers/neo%20logo/skyroot1.png" },
];

const BADGES = [
  { icon: Certificate, label: "ISPM 15 Certified" },
  { icon: ShieldCheck,  label: "ATA SPEC 300" },
  { icon: CheckCircle,  label: "ASTM D6251" },
  { icon: Sparkle,      label: "MIL-STD Compliant" },
  { icon: CheckCircle,  label: "In-house FHAT Plant" },
];

export function TrustBar() {
  return (
    <section className="border-y border-slate-100 bg-white">
      <div className="container-x py-10">
        <p className="text-center text-xs uppercase tracking-[0.2em] text-slate-500 font-medium mb-8">
          Trusted by India&rsquo;s industrial leaders
        </p>

        {/* Featured 3 logos — large & prominent */}
        <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-8 mb-8">
          {FEATURED_LOGOS.map((logo) => (
            <img
              key={logo.name}
              src={logo.url}
              alt={logo.name}
              style={{ mixBlendMode: "multiply" }}
              className="h-16 max-w-[180px] w-auto object-contain opacity-90 hover:opacity-100 transition-all duration-300"
            />
          ))}
        </div>

        {/* Scrolling marquee — all other logos */}
        <div className="overflow-hidden marquee-mask border-t border-slate-100 pt-7">
          <div className="flex w-max animate-marquee gap-16 pr-16 items-center">
            {[...MARQUEE_LOGOS, ...MARQUEE_LOGOS].map((logo, i) => (
              <img
                key={i}
                src={logo.url}
                alt={logo.name}
                style={{ mixBlendMode: "multiply" }}
                className="h-10 max-w-[140px] w-auto object-contain opacity-90 hover:opacity-100 transition-all duration-300 flex-shrink-0"
              />
            ))}
          </div>
        </div>

        {/* Certification badges */}
        <div className="mt-8 pt-7 border-t border-slate-100 flex flex-wrap justify-center items-center gap-x-8 gap-y-3">
          {BADGES.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2">
              <Icon size={16} weight="duotone" className="text-verify-500" />
              <span className="text-[12px] text-slate-700 font-medium">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
