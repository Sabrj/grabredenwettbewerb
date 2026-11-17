"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function EventBanner() {
  return (
    <section
      className="py-10 lg:py-14 relative"
      style={{ background: "linear-gradient(160deg, #14111c 0%, #201727 55%, #352741 100%)" }}
    >
      <div className="container-section max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-16"
        >
          {/* Left: Rückblick */}
          <div className="flex-1 text-center lg:text-left">
            <h2 className="font-serif text-3xl md:text-4xl font-black text-creme-200 leading-tight mb-4">
              Das war der 1. Wiener Grabredenwettbewerb
            </h2>
            <p className="font-body text-creme-200/60 text-base mb-6 leading-relaxed">
              11 literarische Figuren wurden betrauert, verabschiedet oder zum Teufel geschickt.
              Ein unvergesslicher Nachmittag voller Grabreden, Wienerlieder und Applaus.
            </p>
            <Link
              href="/rueckblick/2026"
              className="inline-flex items-center gap-2 font-body font-semibold text-sm text-gold-400 hover:text-gold-300 transition-colors group"
            >
              Zum Rückblick 2026
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
              </svg>
            </Link>
          </div>

          {/* Right: 2027 teaser */}
          <div className="flex-shrink-0 text-center lg:text-left max-w-xs">
            <div className="p-6" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(212,168,67,0.2)" }}>
              <span className="section-eyebrow mb-2 block text-xs">Grabredenwettbewerb 2027</span>
              <p className="font-body text-creme-200/60 text-sm leading-relaxed mb-4">
                Nächste Einreichung folgt. Jetzt im Newsletter anmelden und als Erste informiert sein.
              </p>
              <Link
                href="/ueber"
                className="inline-flex items-center gap-2 font-body font-semibold text-sm text-creme-200/70 hover:text-creme-200 transition-colors group"
              >
                Mehr erfahren
                <svg className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                </svg>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
