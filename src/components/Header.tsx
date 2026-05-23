"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useAuth } from "@/context/AuthContext";
import CountdownTimer from "@/components/CountdownTimer";

const NAV_LINKS = [
  { href: "/",         label: "Startseite" },
  { href: "/programm", label: "Infos / Programm" },
  { href: "/kontakt",  label: "Kontakt" },
];

export default function Header() {
  const [isScrolled,  setIsScrolled]  = useState(false);
  const [mobileOpen,  setMobileOpen]  = useState(false);
  const { isAdmin, logout } = useAuth();
  const router = useRouter();

  useEffect(() => {
    const fn = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const navLinks = [
    ...NAV_LINKS,
    ...(isAdmin ? [
      { href: "/archive",       label: "Archiv" },
      { href: "/admin/blog/new", label: "Blog" },
    ] : []),
  ];

  const handleLogout = async () => {
    await logout();
    router.push("/");
  };

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300 ${
          isScrolled ? "shadow-md border-b border-gray-100" : "border-b border-transparent"
        }`}
      >
        {/* Countdown bar */}
        <div
          className="w-full flex items-center justify-center py-1.5 px-4"
          style={{ background: "#201727", borderBottom: "1px solid rgba(212,168,67,0.12)" }}
        >
          <CountdownTimer variant="bar" />
        </div>

        <div className="container-section">
          <div className="relative flex items-center justify-between h-14 lg:h-18">

            {/* Logo – left */}
            <Link href="/" className="flex items-center group flex-shrink-0" aria-label="Startseite">
              <Image
                src="/logo.png"
                alt="1. Wiener Grabredenwettbewerb"
                height={48} width={220}
                className="h-10 lg:h-12 w-auto object-contain transition-opacity group-hover:opacity-75"
                priority
              />
            </Link>

            {/* Nav – centered (desktop only) */}
            <nav className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
              {navLinks.map((l) => (
                <Link key={l.href} href={l.href}
                  className="font-body text-sm font-medium text-gray-800 hover:text-aubergine-500 transition-colors duration-200 relative group whitespace-nowrap">
                  {l.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-aubergine-500 transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </nav>

            {/* Right side */}
            <div className="flex items-center gap-3">

              {/* Admin / Login — desktop */}
              <div className="hidden md:flex items-center gap-3">
                {isAdmin ? (
                  <>
                    <span
                      className="font-body text-xs font-semibold uppercase tracking-widest px-2.5 py-1"
                      style={{ background: "rgba(212,168,67,0.12)", color: "#d4a843", border: "1px solid rgba(212,168,67,0.3)", borderRadius: 0 }}
                    >
                      Admin
                    </span>
                    <button
                      onClick={handleLogout}
                      className="font-body text-sm text-gray-400 hover:text-red-500 transition-colors"
                    >
                      Abmelden
                    </button>
                  </>
                ) : (
                  <Link
                    href="/login"
                    className="font-body text-sm font-medium text-gray-500 hover:text-aubergine-500 transition-colors"
                  >
                    Login
                  </Link>
                )}
              </div>

              {/* Mobile hamburger – single one */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="md:hidden flex flex-col gap-1.5 p-2 rounded focus:outline-none focus:ring-2 focus:ring-aubergine-400"
                aria-label={mobileOpen ? "Menü schließen" : "Menü öffnen"}
              >
                {[0, 1, 2].map((i) => (
                  <motion.span key={i}
                    animate={
                      i === 0 ? (mobileOpen ? { rotate: 45,  y: 8  } : { rotate: 0, y: 0 }) :
                      i === 1 ? (mobileOpen ? { opacity: 0 }          : { opacity: 1 }) :
                                 (mobileOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 })
                    }
                    transition={{ duration: 0.2 }}
                    className="block w-6 h-0.5 bg-gray-800"
                  />
                ))}
              </button>

            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile nav overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-white flex flex-col">
            <div className="flex items-center h-16 px-4 border-b border-gray-100">
              <Image src="/logo.png" alt="Logo" height={40} width={200} className="h-10 w-auto object-contain" />
            </div>

            <nav className="flex flex-col items-center justify-center flex-1 gap-8">
              {navLinks.map((l, i) => (
                <motion.div key={l.href}
                  initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }} transition={{ delay: i * 0.07 }}>
                  <Link href={l.href} onClick={() => setMobileOpen(false)}
                    className="font-serif text-3xl text-gray-800 hover:text-aubergine-500 transition-colors">
                    {l.label}
                  </Link>
                </motion.div>
              ))}

              {/* Login / Abmelden im Mobile-Overlay */}
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: navLinks.length * 0.07 }}>
                {isAdmin ? (
                  <button
                    onClick={() => { setMobileOpen(false); handleLogout(); }}
                    className="font-body text-sm text-gray-400 hover:text-red-500 transition-colors"
                  >
                    Abmelden
                  </button>
                ) : (
                  <Link
                    href="/login"
                    onClick={() => setMobileOpen(false)}
                    className="font-body text-sm text-gray-400 hover:text-aubergine-500 transition-colors"
                  >
                    Login
                  </Link>
                )}
              </motion.div>
            </nav>

            <div className="pb-8 text-center text-gray-400 text-xs font-body">8. November 2026 · Wien</div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
