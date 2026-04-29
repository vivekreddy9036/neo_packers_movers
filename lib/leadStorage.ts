import { promises as fs } from "node:fs";
import path from "node:path";
import { randomUUID } from "node:crypto";
import { z } from "zod";

export const leadSchema = z.object({
  moveType: z.enum(["industrial", "export", "office", "other"]),
  origin: z.string().trim().min(2).max(80),
  destination: z.string().trim().min(2).max(80),
  name: z.string().trim().min(2).max(80),
  phone: z.string().regex(/^[6-9]\d{9}$/, "Invalid Indian mobile number"),
  email: z.string().email().max(120),
});

export type Lead = z.infer<typeof leadSchema>;

export type StoredLead = Lead & {
  id: string;
  createdAt: string;
  source: string;
  ip: string | null;
};

// /tmp is the only writable dir on Vercel serverless; local dev uses ./data
const DATA_DIR =
  process.env.NODE_ENV === "production"
    ? "/tmp"
    : path.resolve(process.cwd(), "data");
const FILE = path.join(DATA_DIR, "leads.json");

async function ensureFile() {
  await fs.mkdir(DATA_DIR, { recursive: true });
  try {
    await fs.access(FILE);
  } catch {
    await fs.writeFile(FILE, "[]", "utf8");
  }
}

async function readAll(): Promise<StoredLead[]> {
  await ensureFile();
  const raw = await fs.readFile(FILE, "utf8");
  try {
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

async function writeAll(leads: StoredLead[]): Promise<void> {
  await ensureFile();
  await fs.writeFile(FILE, JSON.stringify(leads, null, 2), "utf8");
}

export async function createLead(
  lead: Lead,
  meta: { source: string; ip: string | null }
): Promise<StoredLead> {
  const stored: StoredLead = {
    ...lead,
    id: randomUUID(),
    createdAt: new Date().toISOString(),
    source: meta.source,
    ip: meta.ip,
  };
  const all = await readAll();
  all.push(stored);
  await writeAll(all);
  return stored;
}

export async function listLeads(): Promise<StoredLead[]> {
  return readAll();
}
