"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useAuth } from "@/context/AuthContext";

export default function LoginPage() {
  const [password, setPassword] = useState("");
  const [error, setError]       = useState("");
  const [loading, setLoading]   = useState(false);
  const { login }  = useAuth();
  const router     = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Basic client-side length guard (server validates too)
    if (password.length === 0 || password.length > 128) {
      setError("Ungültiges Passwort.");
      return;
    }

    setLoading(true);
    const result = await login(password);
    setLoading(false);

    if (result.ok) {
      router.push("/");
    } else {
      setError(result.error ?? "Falsches Passwort. Bitte erneut versuchen.");
      setPassword("");
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4"
      style={{ background: "linear-gradient(160deg, #0e0b14 0%, #201727 60%, #352741 100%)" }}
    >
      <div className="w-full max-w-sm">

        {/* Logo */}
        <div className="flex justify-center mb-10">
          <Image
            src="/logo.png"
            alt="Grabredenwettbewerb"
            width={200}
            height={80}
            className="h-14 w-auto object-contain opacity-90"
          />
        </div>

        {/* Card */}
        <div style={{ background: "#352741", borderRadius: 0 }} className="p-8">
          <h1 className="font-serif text-2xl font-black text-creme-200 mb-1">Admin Login</h1>
          <p className="font-body text-xs text-creme-200/40 mb-8">
            Nur für Administratoren.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4" autoComplete="off">
            <div>
              <label className="font-body text-xs uppercase tracking-widest text-creme-200/50 block mb-1.5">
                Passwort
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••••"
                required
                autoFocus
                maxLength={128}
                className="w-full px-4 py-3 font-body text-sm bg-transparent border border-creme-200/15
                  text-creme-200 placeholder-creme-200/20
                  focus:outline-none focus:border-gold-400/50 focus:ring-1 focus:ring-gold-400/30
                  transition-colors"
                style={{ borderRadius: 0 }}
              />
            </div>

            {error && (
              <p className="font-body text-xs text-red-400 flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M12 9v2m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/>
                </svg>
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-gold-500 text-aubergine-900 font-body font-bold text-sm
                hover:bg-gold-400 transition-colors disabled:opacity-60"
              style={{ borderRadius: 0 }}
            >
              {loading ? "Wird geprüft…" : "Einloggen"}
            </button>
          </form>
        </div>

        <div className="flex items-center justify-between mt-6 px-1">
          <a
            href="/"
            className="font-body text-xs text-creme-200/30 hover:text-creme-200/70 transition-colors flex items-center gap-1.5"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/>
            </svg>
            Zurück zur Startseite
          </a>
          <p className="font-body text-xs text-creme-200/20">Admin</p>
        </div>
      </div>
    </div>
  );
}
