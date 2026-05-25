"use client";

import Link from "next/link";
import NewsletterSignup from "@/components/NewsletterSignup";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
      viewport={{ once: true }} transition={{ duration: 0.8 }}
      style={{ background: "#14111c" }}
      className="text-creme-200/50"
      id="kontakt"
    >
      <div className="h-px w-full"
        style={{ background: "linear-gradient(90deg, transparent, #d4a843, #352741, #d4a843, transparent)" }}/>

      <div className="container-section py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-block mb-4 group" aria-label="Startseite">
              <Image
                src="/logo.png"
                alt="1. Wiener Grabredenwettbewerb"
                width={180} height={70}
                className="h-12 w-auto object-contain opacity-70 group-hover:opacity-100 transition-opacity" style={{ filter: "brightness(0) invert(1)" }}
              />
            </Link>
            <p className="font-body text-xs leading-relaxed text-creme-200/35 max-w-[200px]">
              Der erste Wiener Grabredenwettbewerb &ndash; 2026.
            </p>
          </div>

          {/* Nav */}
          <div>
            <h3 className="font-serif text-creme-200 font-semibold text-sm mb-5">Navigation</h3>
            <ul className="space-y-3">
              {[
                ["/",           "Startseite"],
                ["/programm",   "Infos / Programm"],
                ["/kontakt",    "Kontakt"],
              ].map(([href, label]) => (
                <li key={href}>
                  <Link href={href} className="font-body text-sm hover:text-creme-200 transition-colors duration-200">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Event */}
          <div>
            <h3 className="font-serif text-creme-200 font-semibold text-sm mb-5">Event</h3>
            <ul className="space-y-3 font-body text-sm">
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                </svg>
                <time dateTime="2026-11-08">Sonntag, 8.11.2026</time>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
                <address className="not-italic">Stadtkino im Künstlerhaus<br/>Wien, Österreich</address>
              </li>
            </ul>
          </div>

          {/* Contact + Newsletter */}
          <div>
            <h3 className="font-serif text-creme-200 font-semibold text-sm mb-5">Kontakt</h3>
            <a href="mailto:info@grabredenwettbewerb.at"
              className="font-body text-sm hover:text-creme-200 transition-colors flex items-center gap-2 mb-6">
              <svg className="w-4 h-4 text-gold-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
              info@grabredenwettbewerb.at
            </a>
            <p className="font-serif text-creme-200/60 font-semibold text-xs mb-2 uppercase tracking-wide">Newsletter</p>
            <NewsletterSignup variant="dark" compact={true} />
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderTop: "1px solid rgba(242,237,228,0.06)" }}>
          <p className="font-body text-xs text-creme-200/25">
            &copy; {new Date().getFullYear()} Wiener Grabredenwettbewerb
          </p>
          <nav>
            <ul className="flex gap-5">
              {[["/datenschutz","Datenschutz"],["/impressum","Impressum"]].map(([href,label]) => (
                <li key={href}>
                  <Link href={href} className="font-body text-xs text-creme-200/25 hover:text-creme-200/60 transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </motion.footer>
  );
}
