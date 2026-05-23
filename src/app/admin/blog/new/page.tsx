import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Neuer Blogeintrag – Admin",
};

export default function NewBlogPage() {
  return (
    <div className="min-h-screen flex items-center justify-center"
      style={{ background: "linear-gradient(160deg, #0e0b14 0%, #201727 60%, #352741 100%)" }}>
      <div className="text-center space-y-4">
        <p className="font-serif text-3xl font-black text-creme-200">Coming soon</p>
        <p className="font-body text-sm text-creme-200/40">Blog-Verwaltung wird noch eingerichtet.</p>
        <Link href="/" className="font-body text-sm text-gold-400 underline underline-offset-4 hover:text-gold-300 transition-colors">
          ← Zurück
        </Link>
      </div>
    </div>
  );
}
