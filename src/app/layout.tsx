import type { Metadata, Viewport } from "next";
import "./globals.css";
import { AuthProvider } from "@/context/AuthContext";

export const metadata: Metadata = {
  title: {
    default: "1. Wiener Grabredenwettbewerb",
    template: "%s | Wiener Grabredenwettbewerb",
  },
  description: "Der erste Wiener Grabredenwettbewerb – wo Trauer Kunst wird. 8. November 2026, Stadtkino im Künstlerhaus.",
  metadataBase: new URL("https://grabredenwettbewerb.at"),
  keywords: ["Grabredenwettbewerb", "Wien", "Literatur", "Trauerrede", "Wettbewerb", "Stadtkino"],
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    type: "website",
    locale: "de_AT",
    siteName: "1. Wiener Grabredenwettbewerb",
    title: "1. Wiener Grabredenwettbewerb – Grabreden für die Unsterblichen",
    description: "Profis und Laien verabschieden ihre literarischen Lieblinge. 8. November 2026, Wien.",
    images: [{ url: "/logo.png", width: 1200, height: 630, alt: "1. Wiener Grabredenwettbewerb" }],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,700;0,800;0,900;1,400;1,700&family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased min-h-screen">
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
