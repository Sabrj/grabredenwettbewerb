"use client";

import { motion } from "framer-motion";

const features = [
  { icon: "mic",   label: "Trauerreden",       desc: "Literarische Abschiedsreden der Einreicher:innen" },
  { icon: "film",  label: "Poesie am Friedhof", desc: "Literarische Kurzfilme mit poetischer Bildsprache" },
  { icon: "music", label: "Live-Musik",          desc: "Für Tote und Hinterbliebene" },
];

function FlowerIllustration() {
  return (
    <div className="relative flex items-center justify-center">
      <div
        className="relative w-full max-w-sm aspect-square"
        style={{ background: "#352741", clipPath: "polygon(8% 0%,92% 0%,100% 8%,100% 82%,90% 90%,55% 90%,50% 100%,42% 90%,10% 90%,0% 82%,0% 8%)" }}
      >
        <div className="absolute inset-0 flex items-center justify-center p-10">
          <svg viewBox="0 0 200 220" className="w-full h-full" aria-hidden="true">
            <line x1="100" y1="200" x2="90" y2="140" stroke="#2e2a3e" strokeWidth="6" strokeLinecap="round"/>
            <line x1="100" y1="200" x2="100" y2="130" stroke="#2e2a3e" strokeWidth="6" strokeLinecap="round"/>
            <line x1="100" y1="200" x2="112" y2="145" stroke="#2e2a3e" strokeWidth="6" strokeLinecap="round"/>
            <path d="M65 160 L75 210 L130 210 L140 160 Z" fill="#2e2a3e" opacity="0.9"/>
            <path d="M65 160 L100 175 L140 160" fill="#352741"/>
            <ellipse key="0-0" cx={99.0} cy={100.0} rx={9} ry={9} fill="#2e2a3e"/>
            <ellipse key="0-1" cx={89.3} cy={113.3} rx={9} ry={9} fill="#2e2a3e"/>
            <ellipse key="0-2" cx={73.7} cy={108.2} rx={9} ry={9} fill="#2e2a3e"/>
            <ellipse key="0-3" cx={73.7} cy={91.8} rx={9} ry={9} fill="#2e2a3e"/>
            <ellipse key="0-4" cx={89.3} cy={86.7} rx={9} ry={9} fill="#2e2a3e"/>
            <ellipse key="1-0" cx={119.0} cy={85.0} rx={9} ry={9} fill="#2e2a3e"/>
            <ellipse key="1-1" cx={109.3} cy={98.3} rx={9} ry={9} fill="#2e2a3e"/>
            <ellipse key="1-2" cx={93.7} cy={93.2} rx={9} ry={9} fill="#2e2a3e"/>
            <ellipse key="1-3" cx={93.7} cy={76.8} rx={9} ry={9} fill="#2e2a3e"/>
            <ellipse key="1-4" cx={109.3} cy={71.7} rx={9} ry={9} fill="#2e2a3e"/>
            <ellipse key="2-0" cx={139.0} cy={100.0} rx={9} ry={9} fill="#2e2a3e"/>
            <ellipse key="2-1" cx={129.3} cy={113.3} rx={9} ry={9} fill="#2e2a3e"/>
            <ellipse key="2-2" cx={113.7} cy={108.2} rx={9} ry={9} fill="#2e2a3e"/>
            <ellipse key="2-3" cx={113.7} cy={91.8} rx={9} ry={9} fill="#2e2a3e"/>
            <ellipse key="2-4" cx={129.3} cy={86.7} rx={9} ry={9} fill="#2e2a3e"/>
            <ellipse key="3-0" cx={109.0} cy={118.0} rx={9} ry={9} fill="#2e2a3e"/>
            <ellipse key="3-1" cx={99.3} cy={131.3} rx={9} ry={9} fill="#2e2a3e"/>
            <ellipse key="3-2" cx={83.7} cy={126.2} rx={9} ry={9} fill="#2e2a3e"/>
            <ellipse key="3-3" cx={83.7} cy={109.8} rx={9} ry={9} fill="#2e2a3e"/>
            <ellipse key="3-4" cx={99.3} cy={104.7} rx={9} ry={9} fill="#2e2a3e"/>
            <ellipse key="4-0" cx={129.0} cy={115.0} rx={9} ry={9} fill="#2e2a3e"/>
            <ellipse key="4-1" cx={119.3} cy={128.3} rx={9} ry={9} fill="#2e2a3e"/>
            <ellipse key="4-2" cx={103.7} cy={123.2} rx={9} ry={9} fill="#2e2a3e"/>
            <ellipse key="4-3" cx={103.7} cy={106.8} rx={9} ry={9} fill="#2e2a3e"/>
            <ellipse key="4-4" cx={119.3} cy={101.7} rx={9} ry={9} fill="#2e2a3e"/>
            <circle key="0" cx={85} cy={100} r={8} fill="#d4a843"/>
            <circle key="1" cx={105} cy={85} r={8} fill="#d4a843"/>
            <circle key="2" cx={125} cy={100} r={8} fill="#d4a843"/>
            <circle key="3" cx={95} cy={118} r={8} fill="#d4a843"/>
            <circle key="4" cx={115} cy={115} r={8} fill="#d4a843"/>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default function TrauergemeindSection() {
  return (
    <div>
      <section
        id="event"
        className="py-24 lg:py-32"
        style={{ background: "linear-gradient(160deg, #2e2a3e 0%, #352741 100%)" }}
        aria-labelledby="trauergemeinde-heading"
      >
        <div className="container-section">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="order-2 lg:order-1"
            >
              <FlowerIllustration />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="order-1 lg:order-2"
            >
              <span className="inline-block text-gold-400 font-body text-xs font-semibold tracking-widest uppercase mb-4">
                Für das Publikum
              </span>
              <h2
                id="trauergemeinde-heading"
                className="font-serif text-3xl md:text-4xl lg:text-5xl text-creme-200 font-black leading-tight mb-6"
              >
                Gesucht: <span className="text-gold-400 italic">Trauergemeinde</span>+
              </h2>
              <p className="text-creme-200/65 font-body leading-relaxed mb-8 text-sm">
                Sie wollen an den Trauerfeierlichkeiten teilnehmen und literarischen Figuren
                das letzte Geleit geben? Ein Abend für alle, die Literatur lieben und den Tod
                feiern wollen - auf Wiener Art.
              </p>
              <ul className="space-y-4 mb-8">
                {features.map((f, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <span
                      className="flex-shrink-0 w-10 h-10 rounded-sm flex items-center justify-center text-xs text-gold-400"
                      style={{ background: "rgba(212,168,67,0.1)", border: "1px solid rgba(212,168,67,0.2)" }}
                    >
                      {f.icon}
                    </span>
                    <div>
                      <p className="font-body font-semibold text-creme-200">{f.label}</p>
                      <p className="font-body text-sm text-creme-200/45">{f.desc}</p>
                    </div>
                  </motion.li>
                ))}
              </ul>
              <button disabled className="btn-outline-creme opacity-60 cursor-not-allowed">
                Tickets folgen im Herbst
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-creme-200">
        <div className="container-section">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {[
              { q: "Wo?",   a: "Stadtkino im Kuenstlerhaus" },
              { q: "Wann?", a: "Sonntag 8.11.2026" },
            ].map((bubble, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
              >
                <div
                  className="w-full py-12 px-8 text-center"
                  style={{
                    background: "#352741",
                    clipPath: "polygon(0% 10%,10% 0%,90% 0%,100% 10%,100% 85%,90% 95%,55% 95%,48% 115%,40% 95%,10% 95%,0% 85%)",
                  }}
                >
                  <p className="font-serif text-creme-200 text-3xl font-black mb-2">{bubble.q}</p>
                  <p className="font-serif text-gold-400 text-xl font-bold">{bubble.a}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
