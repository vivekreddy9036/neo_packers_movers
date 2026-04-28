export const services = [
  {
    slug: "heavy-machinery-relocation",
    title: "Heavy Machinery Relocation",
    blurb: "CNCs, presses, and transformers up to 80 MT — lifted, hauled, installed.",
    stat: "80 MT",
    statLabel: "Max payload handled",
    feature: true,
  },
  {
    slug: "industrial-packing",
    title: "Industrial Packing",
    blurb: "Vibration-rated crating built for road, rail, and sea.",
    stat: "12,840",
    statLabel: "Crates engineered",
  },
  {
    slug: "export-packing",
    title: "Export Packing",
    blurb: "IPPC-stamped, fumigated, fully CHA-cleared.",
    stat: "ISPM-15",
    statLabel: "Compliance standard",
  },
  {
    slug: "custom-crating",
    title: "Custom Crating",
    blurb: "Engineered to spec at our 18,000 sq ft workshop.",
    stat: "18k sq ft",
    statLabel: "In-house workshop",
  },
  {
    slug: "office-relocation",
    title: "Office Relocation",
    blurb: "IT-grade handling for corporate moves under 48 hours.",
    stat: "<48 hrs",
    statLabel: "Avg corporate turnaround",
  },
] as const;

export const metrics = [
  { value: "21", label: "Years of operations", suffix: "" },
  { value: "12,840", label: "Industrial moves", suffix: "" },
  { value: "99.4", label: "Claim-free delivery", suffix: "%" },
  { value: "28", label: "States served", suffix: "" },
] as const;

export const whyChooseUs = [
  {
    n: "01",
    title: "Engineered for risk",
    body: "Every crane day starts with a VR-modeled lift plan, not an estimate.",
  },
  {
    n: "02",
    title: "Custom crating workshop",
    body: "18,000 sq ft in-house facility — never outsourced, never delayed.",
  },
  {
    n: "03",
    title: "CHA in-house",
    body: "Export clearances handled under one roof. No third-party drift.",
  },
  {
    n: "04",
    title: "24/7 ops control",
    body: "Live tracking, named project manager, single point of accountability.",
  },
] as const;

export const processSteps = [
  { n: "01", title: "Survey", body: "Site walk, asset audit, risk register.", days: "Day 1–2" },
  { n: "02", title: "Engineer", body: "Lift plan, route survey, packaging spec.", days: "Day 3–5" },
  { n: "03", title: "Pack", body: "Custom crating, IPPC stamping, label QC.", days: "Day 6–9" },
  { n: "04", title: "Lift", body: "Crane ops, rigging, load securement.", days: "Day 10" },
  { n: "05", title: "Transport", body: "Heavy-haul fleet with live GPS.", days: "Day 11–14" },
  { n: "06", title: "Install", body: "Unload, position, sign-off with client.", days: "Day 15" },
] as const;

export const caseStudies = [
  {
    slug: "schuler-press-relocation",
    title: "Relocating a 62-ton Schuler press across 1,400 km",
    industry: "Automotive",
    stats: [
      { k: "62 MT", v: "Single-piece weight" },
      { k: "9 days", v: "Door-to-door" },
      { k: "0", v: "Claim incidents" },
    ],
    image:
      "https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&w=1600&q=80",
  },
  {
    slug: "pharma-reactor-rotterdam",
    title: "Shipping a pharma reactor to Rotterdam — sub-zero export packing",
    industry: "Pharma",
    stats: [
      { k: "−18°C", v: "Cold chain held" },
      { k: "ISPM-15", v: "Compliance" },
      { k: "100%", v: "Custom clearance" },
    ],
    image:
      "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1600&q=80",
  },
  {
    slug: "siemens-turbine-decommission",
    title: "Decommissioning a Siemens turbine at a live plant — zero downtime",
    industry: "Power & Energy",
    stats: [
      { k: "0 hrs", v: "Plant downtime" },
      { k: "84 MT", v: "Total tonnage" },
      { k: "3 cranes", v: "Synced lift" },
    ],
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1600&q=80",
  },
] as const;

export const testimonials = [
  {
    quote:
      "We moved a complete stamping line across two states without a single production hour lost. The lift plan they gave us before crane day was tighter than our internal one.",
    name: "R. Krishnan",
    title: "Plant Operations Head",
    company: "Tier-1 Auto Supplier (Chennai)",
  },
  {
    quote:
      "Their CHA team handled documentation we'd previously fragmented across three vendors. The reactor cleared customs in Rotterdam in 19 hours.",
    name: "Anita Pillai",
    title: "Logistics Director",
    company: "Mid-cap Pharma (Hyderabad)",
  },
  {
    quote:
      "Named project manager, live tracking, daily reports. This is what enterprise logistics is supposed to feel like.",
    name: "Vikram Sethi",
    title: "Procurement Lead",
    company: "Power Equipment OEM (Pune)",
  },
] as const;

export const industries = [
  "Automotive",
  "Pharmaceuticals",
  "Power & Energy",
  "Steel & Metals",
  "Textiles",
  "Defence",
  "Food & Beverage",
  "Chemicals",
] as const;

export const faqs = [
  {
    q: "How is heavy machinery insured during transit?",
    a: "Every shipment is covered under our marine-cum-transit policy up to ₹50 crore. Coverage starts at pickup and continues until installation sign-off. Certificate of insurance is issued before crane day.",
  },
  {
    q: "Do you handle export documentation and CHA?",
    a: "Yes. We are a CHA-licensed entity. Documentation, customs clearance, IPPC stamping, fumigation certificates, and port handling are all managed in-house — there is no third-party handoff.",
  },
  {
    q: "What is your turnaround on a site survey?",
    a: "Within 48 hours across the Mumbai–Pune–Chennai–Bengaluru corridor. Other locations within 5 working days. Surveys are free across India.",
  },
  {
    q: "Can you guarantee zero downtime for plant relocations?",
    a: "For most relocations, yes — through phased decommissioning, parallel infrastructure setup, and synchronized lift operations. We commit to specific downtime windows in writing as part of the engineering brief.",
  },
  {
    q: "What is the largest single piece you've handled?",
    a: "84 MT — a turbine rotor moved across a live power plant using three synchronized cranes. We routinely handle items up to 80 MT.",
  },
  {
    q: "Do you provide a named project manager?",
    a: "On every brief above ₹10 lakh, yes. The PM is your single point of contact from kickoff through final installation sign-off.",
  },
] as const;
