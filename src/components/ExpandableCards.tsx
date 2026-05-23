"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const SKULL_SVG = [
  "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>",
  "<ellipse cx='10' cy='8.5' rx='6' ry='6' fill='#d4a843' opacity='0.8'/>",
  "<circle cx='7' cy='8' r='1.8' fill='#201727'/>",
  "<circle cx='13' cy='8' r='1.8' fill='#201727'/>",
  "<path d='M9.2 11 L10 12.3 L10.8 11Z' fill='#201727'/>",
  "<rect x='6' y='12.5' width='8' height='3.5' fill='#d4a843' opacity='0.8'/>",
  "<rect x='7.3' y='13' width='1.2' height='2.8' fill='#201727'/>",
  "<rect x='9.4' y='13' width='1.2' height='2.8' fill='#201727'/>",
  "<rect x='11.5' y='13' width='1.2' height='2.8' fill='#201727'/>",
  "</svg>",
].join("");

const SKULL_BG = 'url("data:image/svg+xml,' + encodeURIComponent(SKULL_SVG) + '")';;

const SKULL_WRAPPER: React.CSSProperties = {
  background: "#201727 " + SKULL_BG + " repeat",
  backgroundSize: "20px 20px",
  padding: "12px",
  borderRadius: 0,
};

export default function ExpandableCards() {
  const [open, setOpen] = useState(false);

  return (
    <section className="py-12 lg:py-16" style={{ background: "#f7f3e8" }} id="einreichen">
      <div className="container-section">
        <div className="max-w-3xl mx-auto">

          <motion.div
            style={SKULL_WRAPPER}
            onClick={() => setOpen(!open)}
            whileHover={{ scale: 1.005 }}
            transition={{ duration: 0.2 }}
            className="cursor-pointer select-none"
            role="button"
            aria-expanded={open}
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") setOpen(!open);
            }}
          >
            <div style={{ background: "#352741", borderRadius: 0, overflow: "hidden" }}>

              {/* Header */}
              <div className="p-8 flex items-center gap-6">
                <div className="flex-shrink-0 w-24 h-24">
                  <Image
                    src="/logoschreiber-768x602.png"
                    alt="Grabredner Logo"
                    width={96}
                    height={96}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-body text-xs font-semibold uppercase tracking-widest text-gold-400/70 mb-1">
                    Jetzt mitmachen
                  </p>
                  <h3 className="font-serif text-2xl md:text-3xl font-black text-creme-200 leading-tight">
                    Gesucht: Grabredner:innen
                  </h3>
                </div>
                <motion.div
                  animate={{ rotate: open ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0 text-gold-400"
                  aria-hidden="true"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
                  </svg>
                </motion.div>
              </div>

              {/* Expandable */}
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
                      onClick={(e) => e.stopPropagation()}
                    >
                      <p>
                        Wir suchen literaturbegeisterte und rhetorisch ambitionierte Grabredner:innen.
                        Die fiktive Person muss nicht im Roman verstorben sein &ndash; aber irgendwann
                        müssen wir alle das Zeitliche segnen. Das gilt auch für Romanfiguren.
                      </p>
                      <p>
                        Über den Sommer trifft die Buchhandlung Analog eine Auswahl &ndash; die
                        Verfasser:innen der besten Reden werden eingeladen, am 8. November im
                        Stadtkino im Künstlerhaus live vor Publikum und Jury vorzutragen.
                      </p>
                      <p className="text-creme-200/45 text-sm pt-1">
                        Alle Teilnahmebedingungen &amp; Einreichschluss unter{" "}
                        <a
                          href="/programm"
                          onClick={(e) => e.stopPropagation()}
                          className="text-gold-400 underline underline-offset-2 hover:text-gold-300 transition-colors"
                        >
                          Infos / Programm →
                        </a>
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
