"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const features = [
  { icon: "⏱", text: "Max. 8 Minuten Redezeit" },
  { icon: "📖", text: "Fiktive Romanfiguren willkommen" },
  { icon: "🏆", text: "Jury & Publikum küren die beste Rede" },
];

/* Speech-bubble illustration placeholder */
function RipIllustration() {
  return (
    <div className="relative flex items-center justify-center">
      {/* Outer polygon bubble */}
      <div className="relative w-full max-w-sm aspect-square rounded-sm overflow-hidden"
        style={{ background: "#352741", clipPath: "polygon(0% 8%, 8% 0%, 92% 0%, 100% 8%, 100% 82%, 92% 90%, 60% 90%, 50% 100%, 40% 90%, 8% 90%, 0% 82%)" }}>
        <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
          {/* RIP card */}
          <div className="relative w-36 h-44 rounded-sm flex flex-col items-start justify-start p-4"
            style={{ background: "#2e2a3e", transform: "rotate(-8deg)" }}>
            <span className="font-serif text-creme-200 text-xl font-bold mb-2">RIP</span>
            <div className="w-full h-1 bg-creme-200/30 mb-1 rounded"/>
            <div className="w-3/4 h-1 bg-creme-200/30 mb-1 rounded"/>
            <div className="w-full h-1 bg-creme-200/30 mb-1 rounded"/>
            <div className="w-2/3 h-1 bg-creme-200/30 rounded"/>
          </div>
          {/* Pencil */}
          <div className="absolute top-12 right-10 w-5 h-28 rounded-t-sm"
            style={{ background: "#2e2a3e", transform: "rotate(30deg)", transformOrigin: "bottom center" }}>
            <div className="w-5 h-3 rounded-t-sm" style={{ background: "#d4a843" }}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function GrabrednerSection() {
  return (
    <section id="einreichen" className="py-24 lg:py-32 bg-creme-200" aria-labelledby="grabredner-heading">
      <div className="container-section">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Text */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7 }}>

            <span className="inline-block text-aubergine-500 font-body text-xs font-semibold tracking-widest uppercase mb-4">
              Für Einreicher:innen
            </span>
            <h2 id="grabredner-heading"
              className="font-serif text-3xl md:text-4xl lg:text-5xl text-aubergine-500 font-black leading-tight mb-6">
              Gesucht:{" "}
              <span className="italic" style={{ color: "#352741" }}>Grabredner:innen</span>
            </h2>

            <div className="space-y-4 text-aubergine-500/80 font-body leading-relaxed mb-6 text-[15px]">
              <p>
                Wir lieben sie oder wir hassen sie. Sie hinterlassen uns mal ratlos, mal ängstlich, mal glücklich.
                Sie lassen uns auf jeden Fall nicht kalt. Die literarischen Figuren aus unseren Lieblingsbüchern
                sind treue BegleiterInnen unserer Lebens- und Vorstellungswelten.
              </p>
              <p>
                Aber irgendwann sind wir auf der letzten Seite angelangt und das Buch wird zugeklappt.
                Ein jedes Leben geht zu Ende. Selbst ein Erfundenes.
              </p>
              <p>
                Doch wer hält die Grabrede für unsere literarischen Lieblinge? Wer betrauert sie öffentlich
                und nicht nur im Stillen? Wer, wenn nicht wir? Und wo, wenn nicht in Wien?
              </p>
            </div>

            <ul className="space-y-3 mb-8">
              {features.map((f, i) => (
                <motion.li key={i} initial={{ opacity: 0, x: -15 }} whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-3">
                  <span className="flex-shrink-0 w-9 h-9 rounded-full bg-aubergine-500/10 flex items-center justify-center text-base">
                    {f.icon}
                  </span>
                  <span className="font-body text-aubergine-500 font-medium">{f.text}</span>
                </motion.li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
              <Link href="mailto:meinerede@grabredenwettbewerb.at" className="btn-primary">
                Rede einreichen
              </Link>
              <a href="mailto:meinerede@grabredenwettbewerb.at"
                className="font-body text-sm text-aubergine-500/60 hover:text-aubergine-500 transition-colors flex items-center gap-1.5">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                meinerede@grabredenwettbewerb.at
              </a>
            </div>
          </motion.div>

          {/* Illustration */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.15 }}>
            <RipIllustration />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
