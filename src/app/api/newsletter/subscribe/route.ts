import { NextRequest, NextResponse } from "next/server";

const EMAIL_RE = /^[^\s@]{1,64}@[^\s@]{1,255}\.[^\s@]{2,}$/;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => null);
    const email = typeof body?.email === "string" ? body.email.trim().toLowerCase() : "";

    if (!email || !EMAIL_RE.test(email) || email.length > 254) {
      return NextResponse.json({ error: "Ungültige E-Mail-Adresse." }, { status: 400 });
    }

    const apiKey = process.env.MAILCHIMP_API_KEY;
    const listId = process.env.MAILCHIMP_LIST_ID;
    const serverPrefix = process.env.MAILCHIMP_SERVER_PREFIX;

    if (!apiKey || !listId || !serverPrefix) {
      console.error("Mailchimp env vars missing");
      return NextResponse.json({ error: "Konfigurationsfehler." }, { status: 500 });
    }

    const credentials = Buffer.from(`anystring:${apiKey}`).toString("base64");

    const mc = await fetch(
      `https://${serverPrefix}.api.mailchimp.com/3.0/lists/${listId}/members`,
      {
        method: "POST",
        headers: {
          "Authorization": `Basic ${credentials}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email_address: email,
          status: "pending", // Double opt-in (DSGVO-konform)
        }),
      }
    );

    const data = await mc.json() as { status?: number | string; title?: string };

    if (mc.ok) {
      return NextResponse.json({ ok: true });
    }

    // Bereits eingetragen
    if (data.title === "Member Exists") {
      return NextResponse.json({ ok: true, already: true });
    }

    console.error("Mailchimp error:", data);
    return NextResponse.json({ error: "Fehler bei der Anmeldung." }, { status: 500 });

  } catch (err) {
    console.error("Newsletter route error:", err);
    return NextResponse.json({ error: "Serverfehler." }, { status: 500 });
  }
}
