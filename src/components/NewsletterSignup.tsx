"use client";

import { useState } from "react";

interface Props {
  variant?: "light" | "dark";
  compact?: boolean;
}

export default function NewsletterSignup({ variant = "light", compact = false }: Props) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const isDark = variant === "dark";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // RFC 5321-inspired: local@domain, max 254 chars, no obvious junk
    const EMAIL_RE = /^[^\s@]{1,64}@[^\s@]{1,255}\.[^\s@]{2,}$/;
    if (!EMAIL_RE.test(email) || email.length > 254) {
      setError("Bitte gültige E-Mail-Adresse eingeben.");
      return;
    }
    setError("");
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div
        className={`flex items-center gap-2 py-2.5 px-3 font-body ${compact ? "text-xs" : "text-sm"} ${
          isDark ? "text-creme-200/80 bg-white/5" : "text-aubergine-500 bg-aubergine-500/5"
        }`}
        style={{ borderLeft: "2px solid #d4a843" }}
      >
        <svg className="w-4 h-4 text-gold-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/>
        </svg>
        <span>Danke! Bestätigung folgt.</span>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="flex flex-col gap-1.5">
        <input
          type="email"
          value={email}
          onChange={(e) => { setEmail(e.target.value); setError(""); }}
          placeholder="E-Mail-Adresse"
          required
          className={`w-full bg-transparent border focus:outline-none focus:ring-1 focus:ring-gold-400/50 transition-colors font-body ${
            compact ? "px-3 py-1.5 text-xs" : "px-4 py-3 text-sm"
          } ${
            isDark
              ? "border-creme-200/20 text-creme-200 placeholder-creme-200/30 focus:border-gold-400/60"
              : "border-aubergine-500/20 text-aubergine-500 placeholder-aubergine-500/30 focus:border-gold-500/60"
          }`}
          style={{ borderRadius: 0 }}
        />
        <button
          type="submit"
          className={`w-full font-body font-semibold transition-colors ${
            compact ? "px-3 py-1.5 text-xs" : "px-5 py-2.5 text-sm"
          } ${
            isDark
              ? "bg-gold-500 text-aubergine-900 hover:bg-gold-400"
              : "bg-aubergine-500 text-creme-200 hover:bg-aubergine-600"
          }`}
          style={{ borderRadius: 0 }}
        >
          Anmelden
        </button>
      </div>
      {error && <p className="mt-1 font-body text-xs text-red-400">{error}</p>}
    </form>
  );
}
