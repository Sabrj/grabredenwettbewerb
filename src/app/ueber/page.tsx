import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import NewsletterSignup from "@/components/NewsletterSignup";
import EckdatenSection from "@/components/EckdatenSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Über den Wettbewerb – 1. Wiener Grabredenwettbewerb",
  description: "Was ist der Wiener Grabredenwettbewerb? Idee, Einreichbedingungen und Newsletter für 2027.",
};

function B({ children }: { children: string }) {
  const parts = children.split(/(\*\*[^*]+\*\*)/);
  return (
    <>
      {parts.map((part, i) =>
        part.startsWith("**") && part.endsWith("**")
          ? <strong key={i} className="font-semibold text-creme-200">{part.slice(2, -2)}</strong>
          : part
      )}
    </>
  );
}

const bedingungen: { nr: string; text: string }[] = [
  { nr: "01", text: "Die Grabrede darf **ausschließlich auf eine fiktive, literarische Figur** geschrieben werden. Die Figur muss in der Vorlage nicht verstorben sein." },
  { nr: "02", text: "Die Rede darf in vorgetragenem Zustand **maximal 8 Minuten** dauern." },
  { nr: "03", text: "**Pro Teilnehmer:in darf ein Text** eingereicht werden." },
  { nr: "04", text: "**Texte können nur in deutscher Sprache** eingereicht werden." },
  { nr: "05", text: "Der Text muss selbst geschrieben sein; Zitate und Übersetzungen sind als solche auszuweisen. **Die Verwendung von KI-Tools ist nicht erlaubt und führt zum Ausschluss.**" },
  { nr: "06", text: "Die ausgewählten Autor:innen verpflichten sich, **ihren Text live vor Publikum und Jury** zu präsentieren." },
  { nr: "07", text: "Für Text und Präsentation erhalten die Finalist:innen jeweils **ein Honorar von 100 €**. Der Gewinnerbeitrag wird zusätzlich mit einer Trophäe prämiert." },
  { nr: "08", text: "Einreichungen sind **per E-Mail an MeineRede@grabredenwettbewerb.at** oder durch **persönliche Abgabe in der Buchhandlung Analog** möglich." },
  { nr: "09", text: "**Einreichschluss und Veranstaltungstermin** werden rechtzeitig bekanntgegeben. Der Rechtsweg ist ausgeschlossen." },
  { nr: "10", text: "Bei der Einreichung sind **Kontaktdaten (Name, E-Mail, Telefon) anzugeben**. Mit der Einreichung erklären Sie sich mit diesen Bedingungen einverstanden." },
];

export default function UeberPage() {
  return (
    <div>
      <Header />
      <main style={{ background: "#f7f3e8", minHeight: "100vh" }}>

        {/* ── Hero ── */}
        <section
          className="pt-32 pb-20 relative overflow-hidden"
          style={{ background: "linear-gradient(160deg, #14111c 0%, #201727 55%, #352741 100%)" }}
        >
          <div className="container-section relative z-10 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              <div>
                <span className="section-eyebrow">1. Wiener Grabredenwettbewerb</span>
                <h1 className="font-serif text-4xl md:text-5xl font-black text-creme-200 leading-tight mt-3 mb-6">
                  Über den<br/>Wettbewerb
                </h1>
                <p className="font-body text-creme-200/60 text-base leading-relaxed">
                  Was ist der Wiener Grabredenwettbewerb — und wie kann ich mitmachen?
                </p>
                <div className="mt-8">
                  <Link
                    href="/rueckblick/2026"
                    className="inline-flex items-center gap-2 font-body text-sm text-gold-400 hover:text-gold-300 transition-colors group"
                  >
                    Rückblick 2026 ansehen
                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                    </svg>
                  </Link>
                </div>
              </div>
              <div className="flex flex-col justify-start">
                <div className="p-5" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(212,168,67,0.15)" }}>
                  <span className="section-eyebrow mb-2 block text-xs">Grabredenwettbewerb 2027</span>
                  <p className="font-body text-creme-200/50 text-xs mb-4 leading-relaxed">
                    Nächste Ausgabe: 2027. Details werden noch bekanntgegeben.
                    Jetzt anmelden und als Erste informiert sein.
                  </p>
                  <NewsletterSignup variant="dark" />
                  <p className="font-body text-xs text-creme-200/25 mt-3">
                    Kein Spam.{" "}
                    <Link href="/datenschutz" className="underline underline-offset-2 hover:text-creme-200/50 transition-colors">
                      Datenschutz
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none"
            style={{ background: "linear-gradient(to bottom, transparent, #f7f3e8)" }} />
        </section>

        {/* ── Beschreibung ── */}
        <section className="py-14 lg:py-20" style={{ background: "#f7f3e8" }}>
          <div className="container-section max-w-3xl mx-auto">
            <div className="mb-10">
              <span className="section-eyebrow mb-4 block">Was ist das?</span>
              <h2 className="font-serif text-3xl md:text-4xl font-black text-aubergine-500 leading-tight">
                Der Wiener Grabredenwettbewerb
              </h2>
            </div>
            <div className="space-y-5 font-body text-aubergine-500/80 text-base leading-relaxed">
              <p>
                Der Wiener Grabredenwettbewerb feiert eine bisher wenig geachtete,
                zutiefst wienerische Literaturgattung: <strong className="text-aubergine-500">Die Trauerrede.</strong>
              </p>
              <p>
                Vor Publikum verabschieden Autorinnen und Autoren ihre Lieblingsfiguren aus der Literatur.
                Ob alt oder jung, ob gut oder böse, ob tatsächlich in der Vorlage verstorben oder bis
                zur letzten Seite lebendig &ndash; jede Figur hat einen Abschied verdient. Eine Jury aus
                Expert*innen kürt die beste Rede und auch die Stimme des Publikums findet nach einem
                Urnengang Gehör.
              </p>
              <p>
                Begleitet wird der Grabredenwettbewerb durch die wundervoll melancholischen Wienerlieder
                von{" "}
                <a href="https://www.kollegiumkalksburg.at/" target="_blank" rel="noopener noreferrer"
                  className="text-gold-600 underline underline-offset-2 hover:text-gold-500 transition-colors">
                  Kollegium Kalksburg
                </a>{" "}
                sowie einzelnen Episoden aus der Kurzfilmreihe{" "}
                <strong className="text-aubergine-500">REST IN POETRY</strong> von Michael Stavarič und Tina-Maria Feyrer.
              </p>
              <p className="pt-2">
                Kontakt:{" "}
                <a href="mailto:info@grabredenwettbewerb.at"
                  className="text-gold-600 underline underline-offset-2 hover:text-gold-500 transition-colors">
                  info@grabredenwettbewerb.at
                </a>
              </p>
            </div>
          </div>
        </section>

        {/* ── Einreichbedingungen ── */}
        <section className="py-14 lg:py-20" style={{ background: "#352741" }}>
          <div className="container-section max-w-3xl mx-auto">
            <div className="mb-10">
              <span className="section-eyebrow mb-4 block">Mitmachen</span>
              <h2 className="font-serif text-3xl md:text-4xl font-black text-creme-200 leading-tight">
                Einreichbedingungen
              </h2>
              <p className="font-body text-creme-200/50 text-sm mt-3">
                Die folgenden Bedingungen gelten für den Wettbewerb. Termine für 2027 werden rechtzeitig bekanntgegeben.
              </p>
            </div>
            <ol className="space-y-4">
              {bedingungen.map((b) => (
                <li key={b.nr} className="flex items-start gap-5">
                  <span
                    className="flex-shrink-0 font-body text-xs font-bold tracking-widest pt-0.5"
                    style={{ color: "#d4a843", minWidth: "2rem" }}
                  >
                    {b.nr}
                  </span>
                  <p className="font-body text-creme-200/70 text-sm leading-relaxed">
                    <B>{b.text}</B>
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ── Sponsoren ── */}
        <EckdatenSection />

        {/* ── Newsletter CTA ── */}
        <section className="py-12 lg:py-16" style={{ background: "#352741" }}>
          <div className="container-section max-w-2xl mx-auto text-center">
            <span className="section-eyebrow mb-4 block">Grabredenwettbewerb 2027</span>
            <h2 className="font-serif text-3xl font-black text-creme-200 mb-4">
              Nächste Einreichung folgt
            </h2>
            <p className="font-body text-creme-200/60 text-base leading-relaxed mb-8">
              Melden Sie sich jetzt an und erfahren Sie als Erste vom Einreichbeginn und
              allen Neuigkeiten rund um den Grabredenwettbewerb 2027.
            </p>
            <div className="max-w-sm mx-auto">
              <NewsletterSignup variant="dark" />
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
