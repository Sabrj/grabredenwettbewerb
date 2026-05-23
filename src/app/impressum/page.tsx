import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum – 1. Wiener Grabredenwettbewerb",
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-10">
      <h2 className="font-serif text-xl font-black text-aubergine-500 mb-3 pb-2"
        style={{ borderBottom: "1px solid rgba(53,39,65,0.12)" }}>
        {title}
      </h2>
      <div className="font-body text-sm text-aubergine-500/75 leading-relaxed space-y-2">
        {children}
      </div>
    </div>
  );
}

export default function ImpressumPage() {
  return (
    <div>
      <Header />
      <main style={{ background: "#f7f3e8", minHeight: "100vh" }}>

        {/* Hero */}
        <section
          className="pt-32 pb-16 relative"
          style={{ background: "linear-gradient(160deg, #14111c 0%, #201727 60%, #352741 100%)" }}
        >
          <div className="container-section text-center">
            <span className="section-eyebrow">Rechtliches</span>
            <h1 className="font-serif text-5xl font-black text-creme-200 mt-2">Impressum</h1>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-12 pointer-events-none"
            style={{ background: "linear-gradient(to bottom, transparent, #f7f3e8)" }} />
        </section>

        {/* Legal text */}
        <section className="py-16">
          <div className="container-section max-w-3xl mx-auto">

            <p className="font-body text-xs text-aubergine-500/50 mb-10">
              Informationspflicht laut §5 E-Commerce Gesetz, §14 Unternehmensgesetzbuch,
              §63 Gewerbeordnung und Offenlegungspflicht laut §25 Mediengesetz.
            </p>
            <p className="font-body text-xs text-aubergine-500/50 mb-10">
              Dieses Impressum ist auch gültig für Angebote auf: Instagram, Facebook, LinkedIn, Tumblr
            </p>

            <Section title="Diensteanbieter / Medieninhaber">
              <p><strong className="text-aubergine-500">Buchhandlung Analog KG</strong></p>
              <p>Inhaber und Geschäftsführer: Baruch Pomper</p>
              <p>Otto-Bauer-Gasse 6/1<br/>1060 Wien</p>
            </Section>

            <Section title="Unternehmensangaben">
              <p>Firmenbuchnummer: FN 589009 s</p>
              <p>Firmenbuchgericht: Handelsgericht Wien</p>
              <p>Umsatzsteuer-ID: ATU78563804</p>
              <p>Mitglied bei: WKO, WKW, FG Buch- und Medienwirtschaft</p>
              <p>
                Gewerbeordnung:{" "}
                <a href="https://www.ris.bka.gv.at" target="_blank" rel="noopener noreferrer"
                  className="text-aubergine-500 underline underline-offset-2 hover:text-gold-500 transition-colors">
                  ris.bka.gv.at
                </a>
              </p>
              <p>Aufsichtsbehörde/Gewerbebehörde: Magistratisches Bezirksamt für den 6. Bezirk</p>
              <p className="mt-2 italic">
                Tätigkeitsbeschreibung: Handel mit Waren aller Art, im speziellen der Handel mit
                Büchern, Zeitschriften, Papierwaren, Spielwaren, Schallplatten und Geschenkartikeln.
              </p>
            </Section>

            <Section title="Kontakt">
              <p>
                Telefon:{" "}
                <a href="tel:+436601864267" className="hover:text-gold-500 transition-colors">
                  +43 660 1864267
                </a>
              </p>
              <p>
                E-Mail:{" "}
                <a href="mailto:office@buchhandlunganalog.at"
                  className="hover:text-gold-500 transition-colors">
                  office@buchhandlunganalog.at
                </a>
              </p>
            </Section>

            <Section title="Angaben zur Online-Streitbeilegung">
              <p>
                Verbraucher haben die Möglichkeit, Beschwerden an die Online-Streitbeilegungsplattform
                der EU zu richten:{" "}
                <a href="http://ec.europa.eu/odr" target="_blank" rel="noopener noreferrer"
                  className="text-aubergine-500 underline underline-offset-2 hover:text-gold-500 transition-colors">
                  ec.europa.eu/odr
                </a>
                . Sie können allfällige Beschwerde auch an die oben angegebene E-Mail-Adresse richten.
              </p>
            </Section>

            <Section title="Haftungsausschluss">
              <p>
                Dieser Haftungsausschluss ist als Teil des Internetangebotes zu betrachten, von dem aus
                auf diese Webseite verwiesen wurde. Sofern Teile oder einzelne Formulierungen dieses Textes
                der geltenden Rechtslage nicht, nicht mehr oder nicht vollständig entsprechen sollten,
                bleiben die übrigen Teile des Dokumentes in ihrem Inhalt und ihrer Gültigkeit davon unberührt.
              </p>
            </Section>

            <Section title="Haftung für Inhalte dieser Webseite">
              <p>
                Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit,
                Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.
                Als Diensteanbieter sind wir für eigene Inhalte auf diesen Seiten nach den allgemeinen
                Gesetzen verantwortlich. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
                Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt.
              </p>
            </Section>

            <Section title="Haftung für Links auf Webseiten Dritter">
              <p>
                Unser Angebot enthält Links zu externen Websites. Auf den Inhalt dieser externen
                Webseiten haben wir keinerlei Einfluss. Für die Inhalte der verlinkten Seiten ist stets
                der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Bei Bekanntwerden von
                Rechtsverletzungen werden wir derartige Links umgehend entfernen.
              </p>
            </Section>

            <Section title="Urheberrecht">
              <p>
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf dieser Webseite
                unterliegen dem Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und
                jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
                schriftlichen Zustimmung des jeweiligen Autors. Downloads und Kopien dieser Seite
                sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
              </p>
              <p>
                Das Copyright dieser Webseite liegt bei{" "}
                <a href="https://www.buchhandlunganalog.at" target="_blank" rel="noopener noreferrer"
                  className="text-aubergine-500 underline underline-offset-2 hover:text-gold-500 transition-colors">
                  www.buchhandlunganalog.at
                </a>
                , alle Rechte vorbehalten.
              </p>
            </Section>

            <div className="pt-4 text-center">
              <Link href="/" className="font-body text-sm text-aubergine-500/50 hover:text-aubergine-500 transition-colors underline underline-offset-4">
                ← Zurück zur Startseite
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
