"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function ExpandableCards() {
  const [open, setOpen] = useState(true);

  return (
    <section className="py-12 lg:py-16" style={{ background: "#f7f3e8" }} id="einreichen">
      <div className="container-section">
        <div className="max-w-3xl mx-auto">

          <div style={{ background: "#352741", borderRadius: 0, overflow: "hidden" }}>

            {/* Header – klickbar zum Auf/Zuklappen */}
            <button
              onClick={() => setOpen(!open)}
              className="w-full text-left p-8 flex items-center gap-6 focus:outline-none focus:ring-2 focus:ring-gold-400/50"
              aria-expanded={open}
            >
              <div className="flex-shrink-0 w-20 h-20">
                <Image
                  src="/logoschreiber-768x602.png"
                  alt="Grabredner Logo"
                  width={96} height={96}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-body text-xs font-semibold uppercase tracking-widest text-gold-400/70 mb-1">
                  Einreichung 2026
                </p>
                <h3 className="font-serif text-2xl md:text-3xl font-black text-creme-200 leading-tight">
                  Einreichungen abgeschlossen
                </h3>
              </div>
              <motion.div
                animate={{ rotate: open ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full"
                style={{ background: "rgba(212,168,67,0.15)", border: "1px solid rgba(212,168,67,0.3)" }}
                aria-hidden="true"
              >
                <svg className="w-4 h-4 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7"/>
                </svg>
              </motion.div>
            </button>

            {/* Expandable content */}
            <AnimatePresence initial={false}>
              {open && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div
                    className="px-8 pb-8 pt-5 space-y-4 text-creme-200/75 font-body text-base leading-relaxed"
                    style={{ borderTop: "1px solid rgba(212,168,67,0.2)" }}
                  >
                    <p>
                      Die Einreichungen für den Grabredenwettbewerb 2026 sind abgeschlossen.
                      Wir danken allen Autor:innen für über 150 rührende, lustige, gefühlvolle,
                      kunstvolle, traurige und überraschende Grabreden.
                    </p>
                    <p>
                      In den kommenden Wochen wird die Auswahlkommission ihre Entscheidung treffen.
                      Alle Autor:innen werden anschließend verständigt.
                    </p>
                    <p className="text-creme-200/45 text-sm pt-1">
                      In unserem Newsletter erfahren Sie vom Einreichbeginn für den{" "}
                      <strong className="text-creme-200/60">Grabredenwettbewerb 2027</strong>.
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

          </div>
        </div>
      </div>
    </section>
  );
}
