"use client";

import { motion } from "framer-motion";

const partners = [
  { id: "analog",     icon: "📚", name: "Buchhandlung Analog",       desc: "Ihr lokaler Buchhändler für literarische Entdeckungen." },
  { id: "stadtkino",  icon: "🎬", name: "Stadtkino im Künstlerhaus", desc: "Cinematisches Erbe Wiens – Heimat des Wettbewerbs." },
  { id: "himmelblau", icon: "⚱️", name: "Bestattung Himmelblau",     desc: "Stifter der Trophäe – Abschied mit Würde und Stil." },
  { id: "ember",      icon: "✨", name: "Ember-Glass",               desc: "Gestalter der Trophäe – handgefertigte Kunstobjekte." },
  { id: "tno",        icon: "🌙", name: "This Night Only",           desc: "Einzigartige Abendveranstaltungen für das Besondere." },
];

const card = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function PartnersSection() {
  return (
    <>
      {/* Trophy Section */}
      <section className="py-20 lg:py-28"
        style={{ background: "linear-gradient(160deg, #14111c 0%, #2e2a3e 100%)" }}
        aria-labelledby="trophy-heading">
        <div className="container-section">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="text-center mb-12">
            <span className="inline-block text-gold-400 font-body text-xs font-semibold tracking-widest uppercase mb-4">
              Preise
            </span>
            <h2 id="trophy-heading" className="font-serif text-3xl md:text-4xl text-creme-200 font-black mb-3">
              Zu gewinnen: <span className="text-gold-400 italic">Trophäe</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {[
              {
                icon: "⚱️",
                name: "Bestattung Himmelblau",
                role: "Stifter der Trophäe",
                desc: "Die Trophäe wird von unserem Partner Bestattung Himmelblau gestiftet.",
              },
              {
                icon: "✨",
                name: "Ember-Glass",
                role: "Gestalter der Trophäe",
                desc: "Gestaltet und gefertigt von Ember-Glass – Bild folgt in Kürze.",
              },
            ].map((item, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.15 }}
                whileHover={{ y: -5 }}
                className="rounded-sm p-8 text-center"
                style={{ background: "rgba(212,168,67,0.07)", border: "1px solid rgba(212,168,67,0.2)" }}>
                {/* Trophy placeholder */}
                <div className="w-28 h-28 mx-auto mb-5 rounded-sm flex items-center justify-center text-5xl"
                  style={{ background: "rgba(212,168,67,0.1)", border: "1px solid rgba(212,168,67,0.15)" }}>
                  🏆
                </div>
                <span className="inline-block text-gold-400 text-xs font-body font-semibold tracking-widest uppercase mb-2">
                  {item.role}
                </span>
                <h3 className="font-serif text-xl text-creme-200 font-bold mb-2">{item.name}</h3>
                <p className="font-body text-sm text-creme-200/50">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section id="partner" className="py-24 lg:py-32 bg-creme-200" aria-labelledby="partners-heading">
        <div className="container-section">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} className="text-center mb-14">
            <span className="inline-block text-aubergine-500 font-body text-xs font-semibold tracking-widest uppercase mb-4">
              Unterstützer
            </span>
            <h2 id="partners-heading" className="font-serif text-3xl md:text-4xl text-aubergine-500 font-black">
              Partner:innen &{" "}
              <span className="italic" style={{ color: "#352741" }}>Sponsor:innen</span>
            </h2>
            <div className="section-divider mt-8 max-w-xs mx-auto"/>
          </motion.div>

          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            transition={{ staggerChildren: 0.1 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {partners.map((p) => (
              <motion.div key={p.id} variants={card} whileHover={{ y: -5 }}
                className="bg-white border border-aubergine-500/10 rounded-sm p-6 flex flex-col gap-4
                           hover:shadow-monument hover:border-gold-500/30 transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-creme-200 border border-aubergine-500/10 flex items-center justify-center text-2xl shadow-subtle">
                  {p.icon}
                </div>
                <div>
                  <h3 className="font-serif text-base font-bold text-aubergine-500 mb-1">{p.name}</h3>
                  <p className="font-body text-sm text-aubergine-500/60 leading-relaxed">{p.desc}</p>
                </div>
                <div className="mt-auto h-0.5 w-6 bg-aubergine-500/20 group-hover:bg-gold-400 transition-all duration-500"/>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
