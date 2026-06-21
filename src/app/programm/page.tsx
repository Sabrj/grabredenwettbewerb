import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import TrophaeCard from "@/components/TrophaeCard";
import NewsletterSignup from "@/components/NewsletterSignup";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Programm & Informationen – 1. Wiener Grabredenwettbewerb",
  description: "Alle Informationen, Teilnahmebedingungen und Einreichmodalitäten.",
};

// Helper: render **bold** markers in text
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
  { nr: "06", text: "Die ausgewählten Autor:innen verpflichten sich, **am Sonntag, 8. November 2026 im Stadtkino im Künstlerhaus (1010 Wien)** ihren Text live vor Publikum und Jury zu präsentieren." },
  { nr: "07", text: "Für Text und Präsentation erhalten die Finalist:innen jeweils **ein Honorar von 100 €**. Der Gewinnerbeitrag wird zusätzlich mit einer Trophäe prämiert." },
  { nr: "08", text: "Einreichungen sind **per E-Mail an MeineRede@grabredenwettbewerb.at** oder durch **persönliche Abgabe in der Buchhandlung Analog** möglich." },
  { nr: "09", text: "**Einreichschluss ist 23:59 Uhr am Montag, 31. August 2026.** Der Rechtsweg ist ausgeschlossen." },
  { nr: "10", text: "Bei der Einreichung sind **Kontaktdaten (Name, E-Mail, Telefon) anzugeben**. Mit der Einreichung erklären Sie sich mit diesen Bedingungen einverstanden. Die Einreichung kann bis zur Entscheidung der Vorauswahl jederzeit zurückgezogen werden." },
];

function MailIcon() {
  return (
    <svg className="w-7 h-7 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
    </svg>
  );
}

function LetterIcon() {
  return (
    <svg className="w-7 h-7 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
    </svg>
  );
}

function PersonIcon() {
  return (
    <svg className="w-7 h-7 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
    </svg>
  );
}

function MethodCard({ icon, title, body, ctaLabel, ctaHref }: {
  icon: React.ReactNode; title: string; body: string;
  ctaLabel?: string; ctaHref?: string;
}) {
  return (
    <div style={{ background: "#352741", borderRadius: 0 }} className="p-7 flex flex-col gap-4 h-full">
      <div className="flex-shrink-0">{icon}</div>
      <div className="flex-1">
        <p className="font-serif font-black text-xl text-creme-200 mb-2">{title}</p>
        <p className="font-body text-sm text-creme-200/60 leading-relaxed whitespace-pre-line">{body}</p>
      </div>
      {ctaLabel && ctaHref && (
        <a href={ctaHref}
          target={ctaHref.startsWith("mailto") ? undefined : "_blank"}
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-gold-400 font-body text-sm font-semibold hover:text-gold-300 transition-colors">
          {ctaLabel}
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
          </svg>
        </a>
      )}
    </div>
  );
}

export default function ProgrammPage() {
  return (
    <div>
      <Header />
      <main style={{ background: "#f7f3e8", minHeight: "100vh" }}>

        {/* ── Hero: Event-Info + Newsletter + Suche ── */}
        <section
          className="pt-32 pb-20 relative overflow-hidden"
          style={{ background: "linear-gradient(160deg, #14111c 0%, #201727 55%, #352741 100%)" }}
        >
          <div className="container-section relative z-10 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

              {/* Left: Event-Daten */}
              <div>
                <span className="section-eyebrow">1. Wiener Grabredenwettbewerb</span>
                <h1 className="font-serif text-4xl md:text-5xl font-black text-creme-200 leading-tight mt-3 mb-8">
                  Programm &amp;<br/>Informationen
                </h1>
                <div className="space-y-4 font-body text-creme-200/70 text-base leading-relaxed">
                  <p className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                    </svg>
                    <span><strong className="text-creme-200">Sonntag, 8. November 2026</strong></span>
                  </p>
                  <p className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                    <span><strong className="text-creme-200">Stadtkino im Künstlerhaus</strong><br/>Karlsplatz 5, 1010 Wien</span>
                  </p>
                </div>

                <div className="mt-10 pt-8" style={{ borderTop: "1px solid rgba(212,168,67,0.2)" }}>
                  <p className="font-serif text-xl font-black text-gold-400 mb-2">
                    Wir suchen noch Redner:innen!
                  </p>
                  <p className="font-body text-creme-200/60 text-sm leading-relaxed">
                    Einreichschluss: <strong className="text-creme-200">Montag, 31. August 2026</strong>
                  </p>
                  <a
                    href="mailto:MeineRede@grabredenwettbewerb.at"
                    className="inline-flex items-center gap-2 mt-4 font-body font-semibold text-sm text-gold-400 hover:text-gold-300 transition-colors"
                  >
                    MeineRede@grabredenwettbewerb.at →
                  </a>
                </div>
              </div>

              {/* Right: Newsletter */}
              <div className="flex flex-col justify-start">
                <div className="p-8" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(212,168,67,0.15)" }}>
                  <span className="section-eyebrow mb-3 block">Bleiben Sie informiert</span>
                  <h3 className="font-serif text-2xl font-black text-creme-200 mb-2">Newsletter</h3>
                  <p className="font-body text-creme-200/50 text-sm mb-6 leading-relaxed">
                    Über unseren Newsletter bleiben Sie informiert und erhalten als Erste
                    Neuigkeiten zum Kartenverkauf.
                  </p>
                  <NewsletterSignup variant="dark" />
                  <p className="font-body text-xs text-creme-200/25 mt-4">
                    Kein Spam. Abmeldung jederzeit möglich.{" "}
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

        {/* ── Teilnahmebedingungen ── */}
        <section className="py-12 lg:py-16" style={{ background: "#352741" }}>
          <div className="container-section max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="section-eyebrow mb-2 block">Regelwerk</span>
              <h2 className="font-serif text-4xl font-black text-creme-200">
                Teilnahmebedingungen
              </h2>
            </div>

            <ol className="space-y-4">
              {bedingungen.map((b) => (
                <li key={b.nr} className="flex gap-5 items-start">
                  <span
                    className="flex-shrink-0 font-serif font-black text-sm w-10 h-10 flex items-center justify-center"
                    style={{ background: "rgba(212,168,67,0.15)", color: "#d4a843", border: "1px solid rgba(212,168,67,0.3)", borderRadius: 0 }}
                  >
                    {b.nr}
                  </span>
                  <p className="font-body text-creme-200/80 text-base leading-relaxed pt-2">
                    <B>{b.text}</B>
                  </p>
                </li>
              ))}
            </ol>

            <div className="mt-12 pt-8 text-center" style={{ borderTop: "1px solid rgba(212,168,67,0.15)" }}>
              <a
                href="mailto:MeineRede@grabredenwettbewerb.at"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gold-500 text-aubergine-900 font-body font-semibold hover:bg-gold-400 transition-colors"
                style={{ borderRadius: 0 }}
              >
                Jetzt einreichen &ndash; MeineRede@grabredenwettbewerb.at
              </a>
              <p className="font-body text-xs text-creme-200/30 mt-4">
                Mit der Einreichung stimmen Sie den Teilnahmebedingungen zu.
              </p>
            </div>
          </div>
        </section>

        {/* ── So reichen Sie ein ── */}
        <section className="py-12 lg:py-16" style={{ background: "#f7f3e8" }}>
          <div className="container-section max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="section-eyebrow">Einreichen</span>
              <h2 className="font-serif text-4xl font-black text-aubergine-500">
                So reichen Sie ein
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <MethodCard
                icon={<MailIcon />}
                title="Online"
                body={"Per E-Mail an\nMeineRede@grabredenwettbewerb.at"}
                ctaLabel="E-Mail senden"
                ctaHref="mailto:MeineRede@grabredenwettbewerb.at"
              />
              <MethodCard
                icon={<LetterIcon />}
                title="Per Brief"
                body={"Buchhandlung Analog\nOtto-Bauer-Gasse 6/1\n1060 Wien"}
              />
              <MethodCard
                icon={<PersonIcon />}
                title="Persönlich"
                body={"Direkt in der Buchhandlung Analog\nOtto-Bauer-Gasse 6/1, 1060 Wien"}
                ctaLabel="Website besuchen"
                ctaHref="https://www.buchhandlunganalog.at"
              />
            </div>
          </div>
        </section>

        {/* ── Trophäe ── */}
        <section className="py-4 pb-12" style={{ background: "#f7f3e8" }}>
          <div className="container-section max-w-4xl mx-auto">
            <TrophaeCard />
          </div>
        </section>

        {/* ── Eckdaten-Bild (Wo & Wann) ── */}
        <section className="py-12" style={{ background: "#f7f3e8" }}>
          <div className="container-section flex justify-center">
            <Image
              src="/eckdaten_v2-scaled.png"
              alt="Eckdaten: Sonntag 8.11.2026, Stadtkino im Künstlerhaus Wien"
              width={1200} height={500}
              className="w-full max-w-4xl h-auto"
            />
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
