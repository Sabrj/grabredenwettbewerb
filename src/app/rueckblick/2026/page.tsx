import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import PhotoGallery from "@/components/PhotoGallery";
import TrophaeCard from "@/components/TrophaeCard";
import NewsletterSignup from "@/components/NewsletterSignup";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rückblick 2026 – 1. Wiener Grabredenwettbewerb",
  description: "Fotos, Gewinner und Rückblick auf den 1. Wiener Grabredenwettbewerb vom 8. November 2026.",
};

export default function Rueckblick2026() {
  return (
    <div>
      <Header />
      <main style={{ background: "#f7f3e8", minHeight: "100vh" }}>

        {/* ── Hero ── */}
        <section
          className="pt-32 pb-20 relative overflow-hidden"
          style={{ background: "linear-gradient(160deg, #14111c 0%, #201727 55%, #352741 100%)" }}
        >
          <div className="container-section relative z-10 max-w-3xl mx-auto text-center">
            <span className="section-eyebrow mb-4 block">8. November 2026 · Stadtkino im Künstlerhaus</span>
            <h1 className="font-serif text-4xl md:text-6xl font-black text-creme-200 leading-tight mb-6">
              Rückblick 2026
            </h1>
            <p className="font-body text-creme-200/60 text-lg leading-relaxed max-w-xl mx-auto">
              In 10 Reden wurden 11 literarische Figuren betrauert, verabschiedet oder zum Teufel geschickt.
              Ein außergewöhnlicher Nachmittag.
            </p>
          </div>
        </section>

        {/* ── Dankestext + Event Fotos ── */}
        <section className="py-14 lg:py-20" style={{ background: "#f7f3e8" }}>
          <div className="container-section">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              <div className="max-w-xl">
                <span className="section-eyebrow mb-4 block">Danke</span>
                <h2 className="font-serif text-3xl font-black text-aubergine-500 mb-8 leading-tight">
                  Das war der 1. Wiener Grabredenwettbewerb
                </h2>
                <p className="font-body text-aubergine-500/80 text-base leading-relaxed">
                  1000 Dank an alle Redner:innen, unsere fantastische Moderatorin{" "}
                  <strong className="text-aubergine-500">Birgit Denk</strong>, an{" "}
                  <a href="https://www.kollegiumkalksburg.at/" target="_blank" rel="noopener noreferrer"
                    className="text-gold-600 underline underline-offset-2 hover:text-gold-500 transition-colors">
                    Kollegium Kalksburg
                  </a>{" "}
                  für die traurigen Gesänge (spezieller Dank an die singende Säge!), an{" "}
                  <strong className="text-aubergine-500">Tina-Maria Feyrer</strong> und{" "}
                  <strong className="text-aubergine-500">Michael Stavarič</strong> für den Ausschnitt
                  aus REST IN POETRY, sowie selbstverständlich unsere Jury:{" "}
                  <strong className="text-aubergine-500">Rotraut Schöberl, Carl Achleitner,
                  Dr. Paula Wojcik</strong> und <strong className="text-aubergine-500">Michael Stavarič</strong>.
                </p>
                <p className="font-body text-aubergine-500/60 text-base leading-relaxed mt-4">
                  Wir sind überwältigt von dem großen Zuspruch und den positiven Rückmeldungen
                  und freuen uns auf kommendes Jahr. Vielen Dank auch an alle, die uns unterstützt
                  und an unsere Idee geglaubt haben.
                </p>
              </div>
              <div>
                <PhotoGallery
                  inline
                  variant="light"
                  subtitle="Impressionen · © Teresa Wagenhofer"
                  images={[
                    { src: "/gallery/event-01.jpg" }, { src: "/gallery/event-02.jpg" },
                    { src: "/gallery/event-03.jpg" }, { src: "/gallery/event-04.jpg" },
                    { src: "/gallery/event-05.jpg" }, { src: "/gallery/event-06.jpg" },
                    { src: "/gallery/event-07.jpg" }, { src: "/gallery/event-08.jpg" },
                    { src: "/gallery/event-09.jpg" }, { src: "/gallery/event-10.jpg" },
                    { src: "/gallery/event-11.jpg" }, { src: "/gallery/event-12.jpg" },
                    { src: "/gallery/event-13.jpg" }, { src: "/gallery/event-14.jpg" },
                    { src: "/gallery/event-15.jpg" }, { src: "/gallery/event-16.jpg" },
                  ]}
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── Gewinner + Gewinner Fotos ── */}
        <section className="py-14 lg:py-20" style={{ background: "#352741" }}>
          <div className="container-section">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              <div>
                <div className="mb-8">
                  <span className="section-eyebrow mb-4 block">Preisträger:innen</span>
                  <h2 className="font-serif text-3xl md:text-4xl font-black text-creme-200 leading-tight">
                    Die Gewinner:innen
                  </h2>
                </div>

                <div className="mb-8 p-6"
                  style={{ background: "rgba(212,168,67,0.08)", border: "1px solid rgba(212,168,67,0.3)" }}>
                  <p className="font-body text-xs font-semibold uppercase tracking-widest text-gold-400 mb-3">
                    Hauptpreis der Jury
                  </p>
                  <h3 className="font-serif text-2xl font-black text-creme-200 mb-2">Paul Ferstl</h3>
                  <p className="font-body text-creme-200/70 text-base leading-relaxed">
                    Für seinen einfühlsamen und humorvollen Nachruf auf{" "}
                    <em className="text-creme-200">die kleine Raupe Nimmersatt</em>.
                    Die Trophäe wurde gestaltet von{" "}
                    <a href="https://ember-glass.com" target="_blank" rel="noopener noreferrer"
                      className="text-gold-400 hover:text-gold-300 transition-colors underline underline-offset-2">
                      ember-glass
                    </a>{" "}
                    und gestiftet von{" "}
                    <a href="https://www.bestattung-himmelblau.at" target="_blank" rel="noopener noreferrer"
                      className="text-gold-400 hover:text-gold-300 transition-colors underline underline-offset-2">
                      Bestattung Himmelblau
                    </a>.
                  </p>
                </div>

                <div>
                  <p className="font-body text-xs font-semibold uppercase tracking-widest text-creme-200/40 mb-4">
                    Publikumspreis (per Urnengang) — gestiftet von{" "}
                    <a href="https://www.gutbehuetet.com" target="_blank" rel="noopener noreferrer"
                      className="text-creme-200/60 hover:text-gold-400 transition-colors underline underline-offset-2">
                      Gut Behütet
                    </a>
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {[
                      { name: "Manuela Reiter", role: "als Buhlschaft — begrub den Jedermann" },
                      { name: "Paul Ferstl",    role: "betrauerte die kleine Raupe Nimmersatt" },
                      { name: "David Hassbach", role: "hielt den Nachruf auf Tom Turbo" },
                    ].map((w) => (
                      <div key={w.name} className="p-4 text-center"
                        style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(212,168,67,0.15)" }}>
                        <p className="font-serif font-black text-creme-200 text-base mb-1">{w.name}</p>
                        <p className="font-body text-creme-200/50 text-xs leading-relaxed">{w.role}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <PhotoGallery
                  inline
                  variant="dark"
                  subtitle="Fotos der Preisträger:innen · © Teresa Wagenhofer"
                  images={[
                    { src: "/gallery/gewinner-01-gruppe.jpg", caption: "Die Gewinnerinnen und Gewinner des 1. Wiener Grabredenwettbewerbs." },
                    { src: "/gallery/gewinner-02-paul-ferstl-hauptpreis.jpg", caption: "Den Hauptpreis verlieh die Jury an Paul Ferstl." },
                    { src: "/gallery/gewinner-03-publikumspreis-a.jpg", caption: "Die drei Publikumslieblinge: Manuela Reiter, Paul Ferstl und David Hassbach." },
                    { src: "/gallery/gewinner-04-publikumspreis-b.jpg", caption: "Manuela Reiter, Paul Ferstl und David Hassbach – prämiert mit einem Gutschein von Gut Behütet." },
                    { src: "/gallery/gewinner-05-finale.jpg", caption: "Wir gratulieren allen Gewinner:innen. Es war ein wundervoller Nachmittag!" },
                  ]}
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── Redner + Redner Fotos ── */}
        <section className="py-14 lg:py-20" style={{ background: "#14111c" }}>
          <div className="container-section">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              <div>
                <span className="section-eyebrow mb-4 block">Die Teilnehmer:innen</span>
                <h2 className="font-serif text-3xl font-black text-creme-200 mb-6 leading-tight">
                  Die Rednerinnen und Redner 2026
                </h2>
                <p className="font-body text-creme-200/70 text-base leading-relaxed">
                  In 10 großartigen Reden wurden 11 literarische Figuren betrauert, verabschiedet
                  oder zum Teufel geschickt. Die Redner:innen hatten 5 Minuten Zeit, ihrer
                  literarischen Figur einen würdigen — oder unwürdigen — Abgang zu bescheren.
                </p>
              </div>
              <div>
                <PhotoGallery
                  inline
                  variant="dark"
                  subtitle="Fotos der Redner:innen · © Teresa Wagenhofer"
                  images={[
                    { src: "/gallery/redner-01-gruppe.jpg" },
                    { src: "/gallery/redner-02-iris-hefner.jpg", caption: "Iris Hefner verabschiedet Pippi Langstrumpf." },
                    { src: "/gallery/redner-03-martina-richards.jpg", caption: "Martina Richards trauert um Miss Marple." },
                    { src: "/gallery/redner-04-stefan-kutzenberger.jpg", caption: "Stefan Kutzenberger lässt das Leben von Don Quijote Revue passieren." },
                    { src: "/gallery/redner-05-thomas-posch.jpg", caption: "Thomas Posch trauert um Fritz Fantom." },
                    { src: "/gallery/redner-06-david-hassbach.jpg", caption: "David Hassbach verabschiedet Tom Turbo." },
                    { src: "/gallery/redner-07-mara-schwarzfels.jpg", caption: "Mara Schwarzfels betrauert Frankensteins Monster." },
                    { src: "/gallery/redner-08-paul-ferstl.jpg", caption: "Paul Ferstl reminisziert über das Leben der kleinen Raupe Nimmersatt." },
                    { src: "/gallery/redner-09-katrin-martinkovich.jpg", caption: "Katrin Martinkovich beklagt den Verlust von Moby Dick." },
                    { src: "/gallery/redner-10-manuela-reiter.jpg", caption: "Manuela Reiter begräbt Jedermann – in der Rolle der Buhlschaft." },
                    { src: "/gallery/redner-11-christoph-becker.jpg", caption: "Christoph Becker hält einen Nachruf auf Max & Moritz – im Doppelpack." },
                  ]}
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── Trophäe ── */}
        <section className="py-10 pb-14" style={{ background: "#f7f3e8" }}>
          <div className="container-section max-w-4xl mx-auto">
            <TrophaeCard />
          </div>
        </section>

        {/* ── Newsletter ── */}
        <section className="py-12 lg:py-16" style={{ background: "#352741" }}>
          <div className="container-section max-w-2xl mx-auto text-center">
            <span className="section-eyebrow mb-4 block">Grabredenwettbewerb 2027</span>
            <h2 className="font-serif text-3xl font-black text-creme-200 mb-4">
              Nächste Einreichung folgt
            </h2>
            <p className="font-body text-creme-200/60 text-base leading-relaxed mb-8">
              Melden Sie sich jetzt an und erfahren Sie als Erste vom Einreichbeginn 2027.
            </p>
            <div className="max-w-sm mx-auto">
              <NewsletterSignup variant="dark" />
            </div>
          </div>
        </section>

        <div className="py-10 text-center" style={{ background: "#f7f3e8" }}>
          <Link href="/" className="font-body text-sm text-aubergine-500/50 hover:text-aubergine-500 transition-colors underline underline-offset-4">
            &#8592; Zurück zur Startseite
          </Link>
        </div>

      </main>
      <Footer />
    </div>
  );
}
