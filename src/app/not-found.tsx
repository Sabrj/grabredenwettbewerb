import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <Header />
      <main style={{ background: "#f7f3e8", minHeight: "100vh" }}>
        <section
          className="pt-32 pb-20"
          style={{ background: "linear-gradient(160deg, #14111c 0%, #201727 55%, #352741 100%)" }}
        >
          <div className="container-section max-w-2xl mx-auto text-center">
            <span className="section-eyebrow mb-4 block">Seite nicht gefunden</span>
            <h1 className="font-serif text-6xl md:text-8xl font-black text-creme-200 leading-none mb-4">
              404
            </h1>
            <p className="font-body text-creme-200/60 text-lg leading-relaxed mb-10 max-w-md mx-auto">
              Diese Seite existiert nicht — anders als die Erinnerung an eine gute Grabrede.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/" className="btn-primary px-8 py-3">
                Zur Startseite
              </Link>
              <Link
                href="/rueckblick/2026"
                className="font-body text-sm text-creme-200/60 hover:text-creme-200 transition-colors underline underline-offset-4 flex items-center justify-center"
              >
                Rückblick 2026 ansehen
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
