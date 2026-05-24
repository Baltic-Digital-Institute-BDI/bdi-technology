// app/api/lead-capture/route.ts
// bdi.technology · General inquiry lead capture
// Sprint 2 · S2-011 · port z bdi-akademia (LIVE od 2026-05-22 · scrubbed S1-005a)
// RPC: public.www_capture_lead SECURITY DEFINER
// CORS: bdi.technology + www.bdi.technology

import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { createClient } from "@supabase/supabase-js";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

const LeadSchema = z.object({
  full_name: z.string().min(2).max(120),
  email: z.string().email(),
  message: z.string().min(10).max(2000),
  source_segment: z.enum(["kursy","ai_development","cyber","consulting","fundacja","other"]),
  phone: z.string().regex(/^\+?[\d\s-]{9,18}$/).optional().nullable(),
  organization: z.string().max(200).optional().nullable(),
  role: z.string().max(100).optional().nullable(),
  consent_rodo: z.boolean().refine(v => v === true, "Zgoda RODO wymagana"),
  consent_marketing: z.boolean().optional().default(false),
  honeypot: z.string().max(0).optional().default(""),
});

const ALLOWED = new Set(["https://bdi.technology", "https://www.bdi.technology"]);

function corsHeaders(origin: string | null): Record<string, string> {
  const allow = origin && ALLOWED.has(origin) ? origin : "https://bdi.technology";
  return {
    "Access-Control-Allow-Origin": allow,
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Accept",
    "Vary": "Origin",
  };
}

export async function POST(req: NextRequest) {
  const origin = req.headers.get("origin");
  const headers = corsHeaders(origin);
  const ip = req.headers.get("x-forwarded-for") || "unknown";

  try {
    const body = await req.json();
    const parsed = LeadSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json({ ok: false, error: "Validation failed", details: parsed.error.flatten() }, { status: 400, headers });
    }
    const data = parsed.data;
    if (data.honeypot && data.honeypot.length > 0) {
      return NextResponse.json({ ok: false }, { status: 400, headers });
    }

    const { data: rpcRes, error } = await supabase.rpc("www_capture_lead", {
      payload: {
        ...data,
        page_url: req.headers.get("referer"),
        referrer: req.headers.get("referer"),
        ip_address: ip,
      },
    });

    if (error || !rpcRes || (rpcRes as any).ok !== true) {
      return NextResponse.json({ ok: false, error: "Błąd zapisu zgłoszenia" }, { status: 500, headers });
    }

    return NextResponse.json({
      ok: true,
      lead_id: (rpcRes as any).lead_id,
      message: "Dziękujemy · skontaktujemy się w ciągu max 2 dni roboczych.",
    }, { status: 200, headers });
  } catch (e) {
    return NextResponse.json({ ok: false, error: "Błąd serwera" }, { status: 500, headers });
  }
}

export async function OPTIONS(req: NextRequest) {
  return new NextResponse(null, { status: 204, headers: corsHeaders(req.headers.get("origin")) });
}
