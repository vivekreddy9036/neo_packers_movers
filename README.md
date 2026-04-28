# Neo Industrial — Premium Logistics Website

A high-conversion industrial logistics website built for a market-leader feel.

**Single Next.js app** — UI + API routes + lead storage in one project.

- Next.js 15 (App Router · Server + Route Handlers)
- React 19 · Tailwind CSS · Framer Motion
- React Hook Form + Zod (form validation)
- Embla (testimonial carousel)
- JSON-file lead storage (swap to Postgres / CRM webhook later)

## Quick start

```bash
npm install
npm run dev
# → http://localhost:3000
```

## Project structure

```
.
├── app/
│   ├── layout.tsx
│   ├── page.tsx                  Composed homepage
│   ├── globals.css               Design tokens + utilities
│   └── api/
│       └── leads/route.ts        POST/GET — validates & stores leads
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── StickyCTA.tsx
│   └── sections/                 Hero · TrustBar · Services · Metrics ·
│                                 WhyChooseUs · Process · CaseStudies ·
│                                 Testimonials · Industries · FAQ · LeadForm
├── lib/
│   ├── utils.ts                  cn() + SITE config
│   ├── data.ts                   Services, FAQs, testimonials, etc.
│   └── leadStorage.ts            Zod schema + file-backed storage
├── data/leads.json               (auto-created on first lead)
└── tailwind.config.ts            Light theme tokens
```

## Environment

Create `.env.local`:

```
NEXT_PUBLIC_PHONE_NUMBER=+91 9999 999 999
NEXT_PUBLIC_WHATSAPP_NUMBER=919999999999
```

## Lead capture flow

```
Browser form (RHF + Zod)
   ↓ POST /api/leads
Next.js Route Handler
   ↓ revalidate with Zod
   ↓ append to data/leads.json
Response { ok, id, createdAt }
```

To wire a CRM (HubSpot / Zoho / Salesforce), drop a `fetch()` to your webhook in `app/api/leads/route.ts` after `createLead(...)`.

## Design system (light premium theme)

| Token | Hex | Use |
|---|---|---|
| `canvas` | `#FFFFFF` | Page background |
| `canvas-50` | `#FAFBFC` | Subtle section bg |
| `ink-900` | `#0A1628` | Headings, primary text |
| `slate-600` | `#525F75` | Body text |
| `slate-100` | `#E4E7EC` | Hairline borders |
| `signal-500` | `#FF6A00` | **CTA only** |
| `verify-500` | `#10B981` | Trust indicators |
| `accent-500` | `#0B5FFF` | Links, highlights |

Typography: **Inter Tight** (display) · **Inter** (body) · **JetBrains Mono** (numerics).

## Production hardening checklist

- [ ] Replace `data/leads.json` with Postgres or CRM webhook
- [ ] Add rate limiting on `/api/leads` (e.g. `@upstash/ratelimit`)
- [ ] Add Cloudflare Turnstile or hCaptcha to form
- [ ] Add OG image
- [ ] Self-host fonts via `next/font` for better LCP
- [ ] Replace stock photography with real client moves (consent permitting)
