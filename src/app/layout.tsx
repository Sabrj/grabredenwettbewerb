import type { Metadata, Viewport } from "next";
import { Playfair_Display, Lora } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/context/AuthContext";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "700", "800", "900"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Wiener Grabredenwettbewerb",
    template: "%s | Wiener Grabredenwettbewerb",
  },
  description: "Der Wiener Grabredenwettbewerb – Profis und Laien halten Grabreden auf ihre literarischen Lieblinge. Jährlich in Wien.",
  metadataBase: new URL("https://grabredenwettbewerb.at"),
  keywords: ["Grabredenwettbewerb", "Wien", "Literatur", "Trauerrede", "Wettbewerb", "Stadtkino", "Grabrede"],
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    type: "website",
    locale: "de_AT",
    siteName: "Wiener Grabredenwettbewerb",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de" className={`${playfair.variable} ${lora.variable}`}>
      <body className="antialiased min-h-screen">
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
