"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import NewsletterSignup from "@/components/NewsletterSignup";

export default function EventInfoSection() {
  return (
    <section
      className="py-16 lg:py-20 relative overflow-hidden"
      style={{ background: "linear-gradient(160deg, #14111c 0%, #201727 55%, #352741 100%)" }}
      id="infos"
    >
      <div className="container-section">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 max-w-5xl mx-auto">

          {/* Left: Event Infos */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-eyebrow mb-6 block">Wo &amp; Wann</span>

            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center"
                  style={{ background: "rgba(212,168,67,0.15)", border: "1px solid rgba(212,168,67,0.3)" }}>
                  <svg className="w-5 h-5 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                  </svg>
                </div>
                <div>
                  <p className="font-serif font-bold text-creme-200 text-lg">Sonntag, 8. November 2026</p>
                  <p className="font-body text-creme-200/50 text-sm mt-0.5">Einreichschluss: Mittwoch, 30. September 2026</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center"
                  style={{ background: "rgba(212,168,67,0.15)", border: "1px solid rgba(212,168,67,0.3)" }}>
                  <svg className="w-5 h-5 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                </div>
                <div>
                  <p className="font-serif font-bold text-creme-200 text-lg">Stadtkino im Künstlerhaus</p>
                  <p className="font-body text-creme-200/50 text-sm mt-0.5">Karlsplatz 5, 1010 Wien</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center"
                  style={{ background: "rgba(212,168,67,0.15)", border: "1px solid rgba(212,168,67,0.3)" }}>
                  <svg className="w-5 h-5 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                </div>
                <div>
                  <p className="font-serif font-bold text-creme-200 text-lg">Rede einreichen</p>
                  <p className="font-body text-creme-200/50 text-sm mt-0.5">
                    Online, per Post oder persönlich in der Buchhandlung Analog
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <Link
                href="/programm"
                className="inline-flex items-center gap-2 font-body font-semibold text-sm text-gold-400 hover:text-gold-300 transition-colors group"
              >
                Alle Teilnahmebedingungen &amp; Programm
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                </svg>
              </Link>
            </div>
          </motion.div>

          {/* Right: Newsletter */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex flex-col justify-center"
          >
            <div className="p-8 lg:p-10" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(212,168,67,0.15)" }}>
              <span className="section-eyebrow mb-3 block">Bleiben Sie informiert</span>
              <h3 className="font-serif text-2xl md:text-3xl font-black text-creme-200 mb-2 leading-tight">
                Newsletter
              </h3>
              <p className="font-body text-creme-200/50 text-sm mb-6 leading-relaxed">
                Keine Neuigkeiten verpassen &ndash; Einreichstart, Finalistenliste,
                Kartenvorverkauf und mehr.
              </p>
              <NewsletterSignup variant="dark" />
              <p className="font-body text-xs text-creme-200/25 mt-4">
                Kein Spam. Abmeldung jederzeit möglich.{" "}
                <Link href="/datenschutz" className="underline underline-offset-2 hover:text-creme-200/50 transition-colors">
                  Datenschutz
                </Link>
              </p>
            </div>
          </motion.div>

        </div>
      </div>

      {/* fade out to creme */}
      <div className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, #f7f3e8)" }} />
    </section>
  );
}
