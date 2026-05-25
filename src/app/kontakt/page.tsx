import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt – 1. Wiener Grabredenwettbewerb",
  description: "Kontakt zu den Veranstaltern des 1. Wiener Grabredenwettbewerbs.",
};

export default function KontaktPage() {
  return (
    <div>
      <Header />
      <main style={{ background: "#f7f3e8", minHeight: "100vh" }}>

        {/* Hero */}
        <section
          className="pt-32 pb-16 relative overflow-hidden"
          style={{ background: "linear-gradient(160deg, #14111c 0%, #201727 60%, #352741 100%)" }}
        >
          <div className="container-section text-center relative z-10">
            <span className="section-eyebrow">Schreiben Sie uns</span>
            <h1 className="font-serif text-5xl md:text-6xl font-black text-creme-200 leading-tight mt-2">
              Kontakt
            </h1>
            <p className="font-body text-creme-200/60 mt-4 max-w-lg mx-auto leading-relaxed">
              Bei Fragen zum Wettbewerb, zur Einreichung oder zum Event – wir freuen uns von Ihnen zu hören.
            </p>
          </div>
          {/* fade out */}
          <div className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none"
            style={{ background: "linear-gradient(to bottom, transparent, #f7f3e8)" }} />
        </section>

        {/* Content */}
        <section className="py-16">
          <div className="container-section max-w-4xl mx-auto space-y-16">

            {/* Mail CTA */}
            <div className="text-center">
              <p className="font-body text-aubergine-500/70 mb-6 text-lg">
                Haben Sie eine Rede fertig oder eine Frage?
              </p>
              <a
                href="mailto:info@grabredenwettbewerb.at"
                className="btn-primary text-base px-8 py-4 inline-flex items-center gap-3"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                info@grabredenwettbewerb.at
              </a>
            </div>

            {/* Divider skull */}
            <div className="flex items-center gap-4 max-w-xs mx-auto">
              <div className="flex-1 h-px" style={{ background: "rgba(53,39,65,0.15)" }} />
              <svg width="18" height="18" viewBox="0 0 20 20" className="opacity-30 flex-shrink-0" aria-hidden="true">
                <ellipse cx="10" cy="8.5" rx="6" ry="6" fill="#352741"/>
                <circle cx="7" cy="8" r="1.8" fill="#f7f3e8"/>
                <circle cx="13" cy="8" r="1.8" fill="#f7f3e8"/>
                <rect x="6" y="12.5" width="8" height="3.5" rx="1.5" fill="#352741"/>
                <rect x="7.3" y="13" width="1.2" height="2.8" fill="#f7f3e8"/>
                <rect x="9.4" y="13" width="1.2" height="2.8" fill="#f7f3e8"/>
                <rect x="11.5" y="13" width="1.2" height="2.8" fill="#f7f3e8"/>
              </svg>
              <div className="flex-1 h-px" style={{ background: "rgba(53,39,65,0.15)" }} />
            </div>

            {/* Veranstalter cards */}
            <div>
              <h2 className="font-serif text-3xl font-black text-aubergine-500 text-center mb-10">
                Die Veranstalter
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

                {/* Buchhandlung Analog */}
                <div className="overflow-hidden" style={{ background: "#352741" }}>
                  <div className="p-8 flex flex-col gap-5">
                    <Image
                      src="/logo_analog-768x393.png"
                      alt="Buchhandlung Analog"
                      width={300}
                      height={154}
                      className="w-full max-w-[200px] h-auto object-contain"
                    />
                    <div className="space-y-2 font-body text-sm text-creme-200/70">
                      <p className="font-semibold text-creme-200 text-base">Buchhandlung Analog</p>
                      <p>Otto-Bauer-Gasse 6/1<br/>1060 Wien</p>
                      <a href="tel:+436601864267" className="block hover:text-gold-400 transition-colors">
                        +43 660 1864267
                      </a>
                      <a href="mailto:office@buchhandlunganalog.at" className="block hover:text-gold-400 transition-colors">
                        office@buchhandlunganalog.at
                      </a>
                    </div>
                    <a
                      href="https://www.buchhandlunganalog.at"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-gold-400 font-body text-sm font-semibold hover:text-gold-300 transition-colors"
                    >
                      Website besuchen
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                      </svg>
                    </a>
                  </div>
                </div>

                {/* This Night Only */}
                <div className="overflow-hidden" style={{ background: "#352741" }}>
                  <div className="p-8 flex flex-col gap-5">
                    <Image
                      src="/logo_thisnightonly-768x393.png"
                      alt="This Night Only"
                      width={300}
                      height={154}
                      className="w-full max-w-[200px] h-auto object-contain"
                    />
                    <div className="space-y-2 font-body text-sm text-creme-200/70">
                      <p className="font-semibold text-creme-200 text-base">This Night Only</p>
                      <p>Kulturveranstaltungen &amp; Produktion<br/>Wien</p>
                    </div>
                    <a
                      href="https://www.thisnightonly.at"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-gold-400 font-body text-sm font-semibold hover:text-gold-300 transition-colors"
                    >
                      Website besuchen
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                      </svg>
                    </a>
                  </div>
                </div>

              </div>
            </div>

            {/* Footer links */}
            <div className="text-center pt-4">
              <p className="font-body text-sm text-aubergine-500/40">
                <Link href="/impressum" className="hover:text-aubergine-500 transition-colors underline underline-offset-4">
                  Impressum
                </Link>
                {" · "}
                <Link href="/datenschutz" className="hover:text-aubergine-500 transition-colors underline underline-offset-4">
                  Datenschutz
                </Link>
              </p>
            </div>

          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
