import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutz – 1. Wiener Grabredenwettbewerb",
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

export default function DatenschutzPage() {
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
            <h1 className="font-serif text-5xl font-black text-creme-200 mt-2">Datenschutz</h1>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-12 pointer-events-none"
            style={{ background: "linear-gradient(to bottom, transparent, #f7f3e8)" }} />
        </section>

        <section className="py-16">
          <div className="container-section max-w-3xl mx-auto">

            <Section title="Datenschutzerklärung">
              <p>
                Der Schutz Ihrer persönlichen Daten ist uns ein besonderes Anliegen. Wir verarbeiten
                Ihre Daten daher ausschließlich auf Grundlage der gesetzlichen Bestimmungen
                (DSGVO, TKG 2003). In diesen Datenschutzinformationen informieren wir Sie über die
                wichtigsten Aspekte der Datenverarbeitung im Rahmen unserer Website.
              </p>
            </Section>

            <Section title="Verantwortlicher">
              <p><strong className="text-aubergine-500">Buchhandlung Analog KG</strong></p>
              <p>Otto-Bauer-Gasse 6/1, 1060 Wien</p>
              <p>
                E-Mail:{" "}
                <a href="mailto:office@buchhandlunganalog.at" className="hover:text-gold-500 transition-colors">
                  office@buchhandlunganalog.at
                </a>
              </p>
            </Section>

            <Section title="Kontaktaufnahme per E-Mail">
              <p>
                Wenn Sie uns per E-Mail kontaktieren, werden Ihre angegebenen Daten zwecks Bearbeitung
                der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben
                wir nicht ohne Ihre Einwilligung weiter. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO
                (Vertragserfüllung bzw. vorvertragliche Maßnahmen).
              </p>
            </Section>

            <Section title="Cookies">
              <p>
                Diese Website verwendet keine Tracking-Cookies. Es können technisch notwendige
                Cookies eingesetzt werden, um die Funktionsfähigkeit der Website sicherzustellen.
                Diese Cookies enthalten keine personenbezogenen Daten.
              </p>
            </Section>

            <Section title="Ihre Rechte">
              <p>Ihnen stehen bezüglich Ihrer bei uns gespeicherten Daten grundsätzlich folgende Rechte zu:</p>
              <ul className="list-disc list-inside space-y-1 pl-2">
                <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
                <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
                <li>Recht auf Löschung (Art. 17 DSGVO)</li>
                <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
                <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
                <li>Recht auf Widerspruch (Art. 21 DSGVO)</li>
              </ul>
              <p className="mt-3">
                Zur Ausübung dieser Rechte wenden Sie sich bitte an:{" "}
                <a href="mailto:office@buchhandlunganalog.at" className="hover:text-gold-500 transition-colors">
                  office@buchhandlunganalog.at
                </a>
              </p>
            </Section>

            <Section title="Beschwerderecht">
              <p>
                Sie haben das Recht, sich bei der Österreichischen Datenschutzbehörde zu beschweren:
              </p>
              <p>
                Österreichische Datenschutzbehörde<br/>
                Barichgasse 40–42, 1030 Wien<br/>
                <a href="https://www.dsb.gv.at" target="_blank" rel="noopener noreferrer"
                  className="text-aubergine-500 underline underline-offset-2 hover:text-gold-500 transition-colors">
                  www.dsb.gv.at
                </a>
              </p>
            </Section>

            <Section title="Aktualität dieser Datenschutzerklärung">
              <p>
                Diese Datenschutzerklärung gilt ab Mai 2026. Wir behalten uns vor, diese
                Datenschutzerklärung gelegentlich anzupassen, damit sie stets den aktuellen
                rechtlichen Anforderungen entspricht.
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
