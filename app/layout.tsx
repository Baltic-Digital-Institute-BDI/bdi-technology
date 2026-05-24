import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/corporate/Header";
import { Footer } from "@/components/corporate/Footer";

const inter = Inter({ subsets: ["latin", "latin-ext"] });

export const metadata: Metadata = {
  title: "Baltic Digital Institute · Instytut technologiczny AI i cyberbezpieczeństwo",
  description: "Baltic Digital Institute · instytut technologiczny specjalizujący się w AI i cyberbezpieczeństwie · 500+ osób przeszkolonych · 67 kursów · BUR · ISO 9001:2015",
  metadataBase: new URL("https://bdi.technology"),
  openGraph: {
    type: "website",
    locale: "pl_PL",
    siteName: "Baltic Digital Institute",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl">
      <body className={`${inter.className} bg-granat text-white antialiased min-h-screen flex flex-col`}>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
