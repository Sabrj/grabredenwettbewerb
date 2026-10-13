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
          {/* Left: Event info */}
          <div className="flex-1 text-center lg:text-left">
            <span className="section-eyebrow mb-4 block">1. Wiener Grabredenwettbewerb</span>
            <h2 className="font-serif text-3xl md:text-4xl font-black text-creme-200 leading-tight mb-4">
              8. November 2026
            </h2>
            <div className="space-y-2 font-body text-creme-200/60 text-base mb-6">
              <p>Beginn: 15h</p>
              <p>Stadtkino im Künstlerhaus<br/>
                <span className="text-sm">Akademiestraße 13, 1010 Wien</span>
              </p>
            </div>
            <Link
              href="/programm"
              className="inline-flex items-center gap-2 font-body text-sm text-gold-400 hover:text-gold-300 transition-colors group"
            >
              Mehr Infos
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
              </svg>
            </Link>
          </div>

          {/* Right: Ticket CTA */}
          <div className="flex-shrink-0 text-center">
            <p className="font-body text-creme-200/50 text-sm mb-4">
              Tickets sind ab 15. Oktober erhältlich
            </p>
            <a
              href="https://tickets.stadtkinowien.at/seatselection/?show_id=2160&location_id=2"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 font-body font-bold text-aubergine-900 hover:opacity-90 transition-opacity text-base"
              style={{ background: "#d4a843", borderRadius: 0 }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"/>
              </svg>
              Tickets kaufen
            </a>
            <p className="font-body text-creme-200/30 text-xs mt-3">
              Auch über das Stadtkino erhältlich
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
