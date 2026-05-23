import { NextResponse } from "next/server";

export async function POST() {
  const response = NextResponse.json({ ok: true });
  response.headers.append("Set-Cookie", "session=; Path=/; Max-Age=0; HttpOnly; SameSite=Lax");
  response.headers.append("Set-Cookie", "admin_ui=; Path=/; Max-Age=0; SameSite=Lax");
  return response;
}
