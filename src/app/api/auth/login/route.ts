import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

const rateMap = new Map<string, { count: number; resetAt: number }>();

function getIP(req: NextRequest): string {
  return req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
}

function checkRate(ip: string): boolean {
  const now = Date.now();
  const entry = rateMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateMap.set(ip, { count: 1, resetAt: now + 15 * 60 * 1000 });
    return false;
  }
  entry.count++;
  return entry.count > 5;
}

function buildToken(secret: string): string {
  const payload = Buffer.from(
    JSON.stringify({ admin: true, exp: Date.now() + 24 * 60 * 60 * 1000 })
  ).toString("base64url");
  const sig = crypto.createHmac("sha256", secret).update(payload).digest("hex");
  return `${payload}.${sig}`;
}

function serializeCookie(name: string, value: string, opts: {
  httpOnly?: boolean; secure?: boolean; maxAge?: number; path?: string; sameSite?: string;
}): string {
  let cookie = `${name}=${value}`;
  if (opts.path)     cookie += `; Path=${opts.path}`;
  if (opts.maxAge)   cookie += `; Max-Age=${opts.maxAge}`;
  if (opts.sameSite) cookie += `; SameSite=${opts.sameSite}`;
  if (opts.httpOnly) cookie += `; HttpOnly`;
  if (opts.secure)   cookie += `; Secure`;
  return cookie;
}

export async function POST(req: NextRequest) {
  if (checkRate(getIP(req))) {
    return NextResponse.json(
      { error: "Zu viele Versuche. Bitte 15 Minuten warten." },
      { status: 429 }
    );
  }

  let body: { password?: unknown };
  try { body = await req.json(); }
  catch { return NextResponse.json({ error: "Ungültige Anfrage." }, { status: 400 }); }

  const { password } = body;
  if (typeof password !== "string" || password.length === 0 || password.length > 128) {
    return NextResponse.json({ error: "Ungültiges Passwort." }, { status: 400 });
  }

  const inputHash  = crypto.createHash("sha256").update(password).digest();
  const storedHash = Buffer.from(process.env.ADMIN_PASSWORD_HASH!, "hex");

  const isValid =
    inputHash.length === storedHash.length &&
    crypto.timingSafeEqual(inputHash, storedHash);

  if (!isValid) {
    return NextResponse.json({ error: "Falsches Passwort." }, { status: 401 });
  }

  const isProd = process.env.NODE_ENV === "production";
  const token  = buildToken(process.env.SESSION_SECRET!);
  const maxAge = 24 * 60 * 60;

  const response = NextResponse.json({ ok: true });
  response.headers.append("Set-Cookie", serializeCookie("session", token, {
    httpOnly: true, secure: isProd, maxAge, path: "/", sameSite: "Lax",
  }));
  response.headers.append("Set-Cookie", serializeCookie("admin_ui", "1", {
    httpOnly: false, secure: isProd, maxAge, path: "/", sameSite: "Lax",
  }));
  return response;
}
