"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const sponsors = [
  {
    id: "stadtkino",
    src: "/logo_stadtkino.png",
    alt: "Stadtkino im Künstlerhaus",
    href: "https://www.stadtkinowien.at",
  },
  {
    id: "ember",
    src: "/ember_logo.png",
    alt: "Ember-Glass",
    href: "https://ember-glass.com",
  },
  {
    id: "himmelblau",
    src: "/logo_himmelblau.png",
    alt: "Bestattung Himmelblau",
    href: "https://www.bestattung-himmelblau.at",
  },
];

export default function SponsorsSection() {
  return (
    <section className="py-12 lg:py-16" style={{ background: "#f7f3e8" }} aria-labelledby="sponsors-heading">
      <div className="container-section">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="section-eyebrow">
            Unterstützung
          </span>
          <h2 id="sponsors-heading" className="font-serif text-3xl md:text-4xl text-aubergine-500 font-black">
            Sponsoren &amp; Partner
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-3xl mx-auto">
          {sponsors.map((s, i) => (
            <motion.a
              key={s.id}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="card-purple p-8 flex items-center justify-center"
            >
              <Image
                src={s.src}
                alt={s.alt}
                width={240}
                height={120}
                className="h-16 w-auto object-contain max-w-[180px]"
              />
            </motion.a>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center font-body text-sm text-aubergine-500/40 mt-10"
        >
          Interesse als Sponsor?{" "}
          <a
            href="mailto:meinerede@grabredenwettbewerb.at"
            className="text-aubergine-500 underline underline-offset-4 hover:text-gold-500 transition-colors"
          >
            Jetzt melden
          </a>
        </motion.p>

      </div>
    </section>
  );
}
