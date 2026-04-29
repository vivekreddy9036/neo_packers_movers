import { NextRequest, NextResponse } from "next/server";
import { leadSchema, createLead, listLeads } from "@/lib/leadStorage";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid JSON body" },
      { status: 400 }
    );
  }

  const parse = leadSchema.safeParse(body);
  if (!parse.success) {
    return NextResponse.json(
      {
        ok: false,
        error: "Validation failed",
        issues: parse.error.flatten(),
      },
      { status: 400 }
    );
  }

  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    req.headers.get("x-real-ip") ??
    null;
  const source = req.headers.get("x-source") ?? "neoindustrial-web";

  try {
    const stored = await createLead(parse.data, { source, ip });

    // TODO: forward to CRM webhook + send notification email
    // await fetch(process.env.CRM_WEBHOOK_URL, { method: "POST", body: JSON.stringify(stored) })

    return NextResponse.json(
      { ok: true, id: stored.id, createdAt: stored.createdAt },
      { status: 201 }
    );
  } catch (e) {
    console.error("[lead] storage error", e);
    return NextResponse.json(
      { ok: false, error: "Could not save lead" },
      { status: 500 }
    );
  }
}

// Dev-only: read all leads. Locked down in production.
export async function GET() {
  if (process.env.NODE_ENV === "production") {
    return NextResponse.json({ ok: false, error: "Forbidden" }, { status: 403 });
  }
  const leads = await listLeads();
  return NextResponse.json({ ok: true, count: leads.length, leads });
}
