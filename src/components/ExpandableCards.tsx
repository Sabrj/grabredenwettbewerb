"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import NewsletterSignup from "@/components/NewsletterSignup";

export default function ExpandableCards() {
  return (
    <section className="py-12 lg:py-16" style={{ background: "#f7f3e8" }} id="einreichen">
      <div className="container-section">
        <div className="max-w-3xl mx-auto">
          <div style={{ background: "#352741", borderRadius: 0, overflow: "hidden" }}>
            <div className="p-8 md:p-10">
              <p className="font-body text-xs font-semibold uppercase tracking-widest text-gold-400/70 mb-2">
                Grabredenwettbewerb 2027
              </p>
              <h3 className="font-serif text-2xl md:text-3xl font-black text-creme-200 leading-tight mb-4">
                Einreichungen für 2027 sind bald möglich.
              </h3>
              <p className="font-body text-creme-200/60 text-base leading-relaxed mb-6 max-w-lg">
                Der 1. Wiener Grabredenwettbewerb ist Geschichte — und welch eine Geschichte!
                Der 2. Wiener Grabredenwettbewerb kommt bestimmt.
                Melden Sie sich für unseren Newsletter an und erfahren Sie als Erste vom Einreichbeginn.
              </p>
              <div className="max-w-sm">
                <NewsletterSignup variant="dark" />
              </div>
              <div className="mt-6 pt-6" style={{ borderTop: "1px solid rgba(212,168,67,0.15)" }}>
                <Link
                  href="/ueber"
                  className="inline-flex items-center gap-2 font-body text-sm text-creme-200/50 hover:text-gold-400 transition-colors group"
                >
                  Über den Wettbewerb
                  <svg className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
