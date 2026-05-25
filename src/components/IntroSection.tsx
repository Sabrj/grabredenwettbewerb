"use client";

import { motion } from "framer-motion";

const item = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

function Ornament() {
  return (
    <div className="ornament-divider my-10" aria-hidden="true">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-aubergine-500/25">
        <path d="M12 2C9 2 7 5 7 8c0 2 1 3.5 2.5 4.5L8 22h8l-1.5-9.5C16 11.5 17 10 17 8c0-3-2-6-5-6z"
          fill="currentColor" opacity="0.4"/>
        <circle cx="12" cy="7" r="2" fill="currentColor" opacity="0.6"/>
        <rect x="9" y="19" width="6" height="1.5" rx="0.75" fill="currentColor" opacity="0.3"/>
        <rect x="10" y="21" width="4" height="1" rx="0.5" fill="currentColor" opacity="0.2"/>
      </svg>
    </div>
  );
}

export default function IntroSection() {
  return (
    <section className="py-16 lg:py-24 overflow-hidden" style={{ background: "#f7f3e8" }}>
      <div className="container-section">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.14 }}
          className="max-w-3xl mx-auto"
        >
          {/* Taglines */}
          <motion.div variants={item} className="text-center mb-8">
            <p className="font-body font-semibold text-aubergine-500/70 text-base md:text-lg leading-relaxed tracking-wide">
              Profis und Laien verabschieden ihre literarischen Lieblinge.<br/>
              Jury und Publikum fällen ihr Urteil.
            </p>
          </motion.div>

          {/* Title card */}
          <motion.div
            variants={item}
            className="card-purple px-8 py-8 mb-4 text-center relative overflow-hidden" style={{ borderRadius: 0 }}
          >
            <span
              className="absolute -top-4 -left-2 font-serif font-black select-none pointer-events-none"
              style={{ fontSize: "12rem", lineHeight: 1, color: "#d4a843", opacity: 0.08 }}
              aria-hidden="true"
            >
              „
            </span>
            <p className="relative font-serif italic text-xl md:text-2xl lg:text-3xl text-creme-200 font-bold leading-snug">
              Willkommen zum ersten<br/>
              <span className="text-gold-400">Wiener Grabredenwettbewerb!</span>
            </p>
          </motion.div>

          <Ornament />

          {/* Body text */}
          <div className="space-y-5 font-body text-aubergine-500/80 leading-relaxed text-base">
            <motion.p
              variants={item}
              className="pl-5 italic text-aubergine-500 text-[1.05rem]"
              style={{ borderLeft: "3px solid #d4a843" }}
            >
              Wir lieben sie oder wir hassen sie. Sie hinterlassen uns mal ratlos,
              mal ängstlich, mal glücklich. Sie lassen uns auf jeden Fall nicht kalt.
            </motion.p>

            <motion.p variants={item}>
              Die literarischen Figuren aus unseren Lieblingsbüchern sind treue
              Begleiter:innen unserer Lebens- und Vorstellungswelten. Wir wollen sie
              nicht missen.
            </motion.p>

            <motion.p variants={item}>
              Aber irgendwann sind wir auf der letzten Seite angelangt und das Buch
              wird zugeklappt. Ein jedes Leben geht zu Ende. Selbst ein Erfundenes.
            </motion.p>

            {/* Pull quote */}
            <motion.div
              variants={item}
              className="px-6 py-5 my-2"
              style={{ background: "rgba(58,48,80,0.06)", borderLeft: "none" }}
            >
              <p className="font-serif text-lg md:text-xl text-aubergine-500 font-bold text-center leading-snug">
                Doch wer hält die Grabrede für unsere literarischen Lieblinge?
              </p>
            </motion.div>

            <motion.p variants={item}>
              Wer betrauert sie öffentlich und nicht nur im Stillen? Wer zieht
              Résumé über ihr Wirken? Wer sorgt für eine „schöne Leich'"?
            </motion.p>

            <motion.p
              variants={item}
              className="font-serif font-bold text-2xl md:text-3xl text-aubergine-500 text-center pt-4"
            >
              Wer, wenn nicht wir?&ensp;
              <span style={{ color: "#d4a843" }}>Und wo, wenn nicht in Wien?</span>
            </motion.p>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
