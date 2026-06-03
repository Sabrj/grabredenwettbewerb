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
  const [loading, setLoading] = useState(false);
  const isDark = variant === "dark";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/newsletter/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json() as { ok?: boolean; error?: string };

      if (res.ok && data.ok) {
        setSubmitted(true);
      } else {
        setError(data.error ?? "Anmeldung fehlgeschlagen. Bitte versuchen Sie es erneut.");
      }
    } catch {
      setError("Verbindungsfehler. Bitte versuchen Sie es erneut.");
    } finally {
      setLoading(false);
    }
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
        <span>Danke! Bitte bestätigen Sie Ihre E-Mail.</span>
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
          disabled={loading}
          className={`w-full bg-transparent border focus:outline-none focus:ring-1 focus:ring-gold-400/50 transition-colors font-body disabled:opacity-50 ${
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
          disabled={loading}
          className={`w-full font-body font-semibold transition-colors disabled:opacity-60 ${
            compact ? "px-3 py-1.5 text-xs" : "px-5 py-2.5 text-sm"
          } ${
            isDark
              ? "bg-gold-500 text-aubergine-900 hover:bg-gold-400"
              : "bg-aubergine-500 text-creme-200 hover:bg-aubergine-600"
          }`}
          style={{ borderRadius: 0 }}
        >
          {loading ? "Wird gesendet…" : "Anmelden"}
        </button>
      </div>
      {error && <p className="mt-1 font-body text-xs text-red-400">{error}</p>}
      <p className={`mt-2 font-body leading-relaxed ${compact ? "text-[10px]" : "text-xs"} ${isDark ? "text-creme-200/30" : "text-aubergine-500/40"}`}>
        Mit der Anmeldung stimmen Sie der Verarbeitung Ihrer E-Mail-Adresse durch Mailchimp gemäß unserer{" "}
        <a href="/datenschutz" className={`underline underline-offset-2 ${isDark ? "hover:text-creme-200/60" : "hover:text-aubergine-500/70"} transition-colors`}>
          Datenschutzerklärung
        </a>{" "}
        zu. Abmeldung jederzeit möglich.
      </p>
    </form>
  );
}
