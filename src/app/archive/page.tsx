"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const archiveData = [
  {
    year: 2026,
    entries: [
      {
        id: "anna-karenina",
        figureName: "Anna Karenina",
        bookTitle: "Anna Karenina",
        bookAuthor: "Leo Tolstoy",
        description: "Eine Rede, die das tragische Schicksal der unglücklich Liebenden zwischen gesellschaftlichem Zwang und innerem Freiheitsdrang beleuchtet.",
        speechAuthor: "Anna Müller",
      },
      {
        id: "santiago",
        figureName: "Santiago",
        bookTitle: "Der Alte Mann und das Meer",
        bookAuthor: "Ernest Hemingway",
        description: "Eine Hommage an den alten Fischer, der im Kampf mit dem Marlin das Wesen menschlicher Ausdauer und Würde verkörpert.",
        speechAuthor: "Thomas Weber",
      },
      {
        id: "holden",
        figureName: "Holden Caulfield",
        bookTitle: "Der Fänger im Roggen",
        bookAuthor: "J.D. Salinger",
        description: "Eine Trauerrede für den ewigen Außenseiter, der die Unaufrichtigkeit der Erwachsenenwelt nie akzeptieren wollte.",
        speechAuthor: "Maria Hoffmann",
      },
    ],
  },
];

export default function ArchivePage() {
  return (
    <main>
      <Header />

      {/* Hero */}
      <section className="relative pt-36 pb-20" style={{ background: "linear-gradient(160deg, #14111c 0%, #2e2a3e 60%, #352741 100%)" }}>
        <div className="container-section text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="inline-block text-gold-400 font-body text-xs font-semibold tracking-widest uppercase mb-5">
              Vergangene Wettbewerbe
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-white font-black leading-tight mb-6">
              Archiv der <span className="text-gold-400 italic">Grabreden</span>
            </h1>
            <p className="font-body text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
              Die schönsten Trauerreden aus den vergangenen Jahren – ein Denkmal für die Unsterblichen der Weltliteratur.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 lg:py-24" style={{ background: "#f7f3e8" }}>
        <div className="container-section">
          <div className="max-w-3xl mx-auto">
            {archiveData.map((yearData) => (
              <div key={yearData.year}>
                {/* Year node */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }} transition={{ duration: 0.5 }}
                  className="flex items-center gap-5 mb-8"
                >
                  <div className="flex-shrink-0 w-16 h-16 rounded-full border-4 bg-white flex items-center justify-center shadow-monument"
                    style={{ borderColor: "#352741" }}>
                    <span className="font-serif text-sm font-black" style={{ color: "#352741" }}>{yearData.year}</span>
                  </div>
                  <div className="flex-1 h-px" style={{ background: "linear-gradient(90deg, #35274140, transparent)" }}/>
                </motion.div>

                {/* Entries */}
                <div className="ml-8 pl-10 space-y-6 pb-10" style={{ borderLeft: "2px solid #35274120" }}>
                  {yearData.entries.map((entry, index) => (
                    <motion.article
                      key={entry.id}
                      initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }} transition={{ delay: index * 0.1, duration: 0.5 }}
                      className="relative"
                    >
                      <div className="absolute -left-[46px] top-5 w-3.5 h-3.5 rounded-full bg-white border-2"
                        style={{ borderColor: "#352741" }}/>
                      <div className="rounded-2xl p-6 bg-white border border-aubergine-500/10 hover:shadow-monument transition-shadow duration-300"
                        style={{ borderLeft: "4px solid #352741" }}>
                        <div className="flex items-start justify-between gap-3 mb-2">
                          <div>
                            <h3 className="font-serif text-xl font-black text-aubergine-500">{entry.figureName}</h3>
                            <p className="font-body text-sm text-aubergine-500/50 italic">
                              aus <cite className="not-italic italic">{entry.bookTitle}</cite> von {entry.bookAuthor}
                            </p>
                          </div>
                          <span className="flex-shrink-0 px-3 py-1 rounded-full text-xs font-semibold font-body"
                            style={{ background: "#35274115", color: "#352741" }}>
                            #{index + 1}
                          </span>
                        </div>
                        <p className="font-body text-sm text-aubergine-500/70 leading-relaxed mt-3 mb-4">{entry.description}</p>
                        <div className="flex items-center justify-between pt-3" style={{ borderTop: "1px solid #35274110" }}>
                          <div className="flex items-center gap-2">
                            <div className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-serif font-black text-white"
                              style={{ background: "#352741" }}>
                              {entry.speechAuthor.charAt(0)}
                            </div>
                            <span className="font-body text-sm text-aubergine-500/60">
                              Rede von <span className="font-semibold text-aubergine-500">{entry.speechAuthor}</span>
                            </span>
                          </div>
                          <a href="#" className="font-body text-sm font-semibold hover:underline underline-offset-4 transition-colors"
                            style={{ color: "#352741" }}>
                            Rede lesen →
                          </a>
                        </div>
                      </div>
                    </motion.article>
                  ))}
                </div>
              </div>
            ))}

            {/* Placeholder */}
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
              className="flex items-center gap-5 mt-2">
              <div className="flex-shrink-0 w-16 h-16 rounded-full border-4 border-dashed bg-white flex items-center justify-center"
                style={{ borderColor: "#35274130" }}>
                <span className="text-xl font-black" style={{ color: "#35274130" }}>+</span>
              </div>
              <p className="font-body text-sm italic" style={{ color: "#35274150" }}>
                Weitere Einträge folgen nach dem Wettbewerb 2026 …
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
