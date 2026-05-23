"use client";

import { useState, useEffect } from "react";

// Einreichschluss: 31. August 2026, 23:59 Uhr Wien (CEST = UTC+2)
const DEADLINE = new Date("2026-08-31T23:59:00+02:00");

interface T { days: number; hours: number; minutes: number; seconds: number; expired: boolean }

function calc(): T {
  const diff = DEADLINE.getTime() - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0, expired: true };
  return {
    days:    Math.floor(diff / 86400000),
    hours:   Math.floor((diff % 86400000) / 3600000),
    minutes: Math.floor((diff % 3600000)  / 60000),
    seconds: Math.floor((diff % 60000)    / 1000),
    expired: false,
  };
}

function pad(n: number) { return String(n).padStart(2, "0"); }

// ── variant="bar": schmale Zeile im Header ──────────────────
function Bar({ t }: { t: T }) {
  if (t.expired) return (
    <span className="font-body text-xs text-creme-200/50">Einreichschluss abgelaufen</span>
  );
  return (
    <div className="flex items-center gap-1.5 font-body text-xs tabular-nums">
      <svg className="w-3 h-3 text-gold-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
      </svg>
      <span className="text-creme-200/60">Einreichschluss:</span>
      <span className="text-gold-400 font-semibold">
        {pad(t.days)}<span className="text-creme-200/30 mx-0.5">T</span>
        {pad(t.hours)}<span className="text-creme-200/30 mx-0.5">h</span>
        {pad(t.minutes)}<span className="text-creme-200/30 mx-0.5">m</span>
        {pad(t.seconds)}<span className="text-creme-200/30 mx-0.5">s</span>
      </span>
    </div>
  );
}

// ── variant="full": große Blöcke für Programm-Seite ─────────
function Full({ t }: { t: T }) {
  if (t.expired) return (
    <div className="text-center font-body text-creme-200/50 py-4">Einreichschluss abgelaufen</div>
  );
  const blocks = [
    { value: t.days,    label: "Tage" },
    { value: t.hours,   label: "Stunden" },
    { value: t.minutes, label: "Minuten" },
    { value: t.seconds, label: "Sekunden" },
  ];
  return (
    <div className="flex items-center justify-center gap-3 md:gap-5 flex-wrap">
      {blocks.map((b, i) => (
        <div key={b.label} className="flex items-center gap-3 md:gap-5">
          <div className="text-center">
            <div
              className="font-serif font-black text-3xl md:text-5xl text-creme-200 tabular-nums w-16 md:w-24 flex items-center justify-center py-3"
              style={{ background: "rgba(212,168,67,0.12)", border: "1px solid rgba(212,168,67,0.25)" }}
            >
              {pad(b.value)}
            </div>
            <p className="font-body text-xs text-creme-200/40 uppercase tracking-widest mt-2">{b.label}</p>
          </div>
          {i < blocks.length - 1 && (
            <span className="font-serif font-black text-2xl text-gold-400/30 mb-5" aria-hidden="true">:</span>
          )}
        </div>
      ))}
    </div>
  );
}

// ── Main export ──────────────────────────────────────────────
export default function CountdownTimer({ variant = "full" }: { variant?: "full" | "bar" }) {
  const [time, setTime] = useState<T | null>(null);

  useEffect(() => {
    setTime(calc());
    const id = setInterval(() => setTime(calc()), 1000);
    return () => clearInterval(id);
  }, []);

  if (!time) return null; // avoid SSR hydration mismatch

  if (variant === "bar") return <Bar t={time} />;
  return <Full t={time} />;
}
