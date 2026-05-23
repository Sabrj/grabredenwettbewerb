import { NextRequest, NextResponse } from "next/server";

function toHex(buf: ArrayBuffer): string {
  return Array.from(new Uint8Array(buf))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

function safeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
}

async function verifySession(token: string): Promise<boolean> {
  const secret = process.env.SESSION_SECRET;
  if (!secret) return false;

  const dotIdx = token.lastIndexOf(".");
  if (dotIdx === -1) return false;

  const payload = token.slice(0, dotIdx);
  const sig     = token.slice(dotIdx + 1);

  if (!/^[0-9a-f]{64}$/.test(sig)) return false;

  try {
    const key = await crypto.subtle.importKey(
      "raw", new TextEncoder().encode(secret),
      { name: "HMAC", hash: "SHA-256" }, false, ["sign"]
    );
    const sigBuf   = await crypto.subtle.sign("HMAC", key, new TextEncoder().encode(payload));
    const expected = toHex(sigBuf);
    if (!safeEqual(expected, sig)) return false;

    const b64    = payload.replace(/-/g, "+").replace(/_/g, "/");
    const padded = b64 + "=".repeat((4 - b64.length % 4) % 4);
    const data   = JSON.parse(atob(padded)) as { admin?: boolean; exp?: number };
    return data.admin === true && typeof data.exp === "number" && data.exp > Date.now();
  } catch {
    return false;
  }
}

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  if (!pathname.startsWith("/admin") && !pathname.startsWith("/archive")) {
    return NextResponse.next();
  }

  const token = req.cookies.get("session")?.value;
  if (!token) return NextResponse.redirect(new URL("/login", req.url));

  const ok = await verifySession(token);
  if (!ok) {
    const res = NextResponse.redirect(new URL("/login", req.url));
    res.headers.append("Set-Cookie", "session=; Path=/; Max-Age=0; HttpOnly; SameSite=Lax");
    res.headers.append("Set-Cookie", "admin_ui=; Path=/; Max-Age=0; SameSite=Lax");
    return res;
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/archive/:path*"],
};
