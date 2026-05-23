"use client";

import Image from "next/image";
import { motion } from "framer-motion";

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

const SW_SM: React.CSSProperties = {
  background: "#201727 " + SKULL_BG + " repeat",
  backgroundSize: "20px 20px",
  padding: "9px",
  borderRadius: 0,
};

export default function EckdatenSection() {
  return (
    <section className="py-12 lg:py-16" style={{ background: "#f7f3e8" }} id="event">
      <div className="container-section">

        <div className="text-center mb-10">
          <span className="section-eyebrow">Hinter dem Vorhang</span>
          <h3 className="font-serif text-3xl md:text-4xl text-aubergine-500 font-black">
            Organisation &amp; Sponsoren
          </h3>
        </div>

        {/* Veranstalter */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <p className="font-body text-xs font-semibold uppercase tracking-widest text-aubergine-500/40 text-center mb-5">
            Veranstalter
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-xl mx-auto">
            {[
              { src: "/logo_analog-768x393.png",       alt: "Buchhandlung Analog",  href: "https://www.buchhandlunganalog.at" },
              { src: "/logo_thisnightonly-768x393.png", alt: "This Night Only",      href: "https://www.thisnightonly.at" },
            ].map((v, i) => (
              <motion.div key={i} style={SW_SM} whileHover={{ y: -4, scale: 1.02 }} transition={{ duration: 0.2 }}>
                <a
                  href={v.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center p-7"
                  style={{ background: "#352741", borderRadius: 0 }}
                >
                  <Image src={v.src} alt={v.alt} width={300} height={154}
                    className="w-full max-w-[200px] h-auto object-contain" />
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skull divider */}
        <div className="flex items-center gap-4 my-8 max-w-2xl mx-auto">
          <div className="flex-1 h-px" style={{ background: "rgba(53,39,65,0.12)" }} />
          <svg width="16" height="16" viewBox="0 0 20 20" className="opacity-25 flex-shrink-0" aria-hidden="true">
            <ellipse cx="10" cy="8.5" rx="6" ry="6" fill="#352741"/>
            <circle cx="7" cy="8" r="1.8" fill="#f7f3e8"/>
            <circle cx="13" cy="8" r="1.8" fill="#f7f3e8"/>
            <rect x="6" y="12.5" width="8" height="3.5" fill="#352741"/>
            <rect x="7.3" y="13" width="1.2" height="2.8" fill="#f7f3e8"/>
            <rect x="9.4" y="13" width="1.2" height="2.8" fill="#f7f3e8"/>
            <rect x="11.5" y="13" width="1.2" height="2.8" fill="#f7f3e8"/>
          </svg>
          <div className="flex-1 h-px" style={{ background: "rgba(53,39,65,0.12)" }} />
        </div>

        {/* Sponsoren */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-body text-xs font-semibold uppercase tracking-widest text-aubergine-500/40 text-center mb-5">
            Sponsoren &amp; Partner
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-2xl mx-auto">
            {[
              { src: "/logo_stadtkino.png",   alt: "Stadtkino im Künstlerhaus", href: "https://www.stadtkinowien.at" },
              { src: "/ember_logo.png",        alt: "Ember-Glass",               href: "https://ember-glass.com" },
              { src: "/logo_himmelblau.png",   alt: "Bestattung Himmelblau",     href: "https://www.bestattung-himmelblau.at" },
            ].map((s, i) => (
              <motion.div
                key={s.href}
                style={SW_SM}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -4, scale: 1.02 }}
              >
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center p-6"
                  style={{ background: "#352741", borderRadius: 0 }}
                >
                  <Image src={s.src} alt={s.alt} width={240} height={120}
                    className="h-14 w-auto object-contain max-w-[160px]" />
                </a>
              </motion.div>
            ))}
          </div>

          <p className="text-center font-body text-sm text-aubergine-500/40 mt-10">
            Interesse als Sponsor?{" "}
            <a href="mailto:office@buchhandlunganalog.at"
              className="text-aubergine-500 underline underline-offset-4 hover:text-gold-500 transition-colors">
              Jetzt melden
            </a>
          </p>
        </motion.div>

      </div>
    </section>
  );
}
