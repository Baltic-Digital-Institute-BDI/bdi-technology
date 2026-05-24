import Link from "next/link";

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-granat/95 backdrop-blur border-b border-granat-deep">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="text-mint font-bold text-xl">bdi.technology</Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link href="/segmenty/klienci-indywidualni" className="text-szary-light hover:text-mint transition">Klienci Indywidualni</Link>
          <Link href="/segmenty/klient-firmowy" className="text-szary-light hover:text-mint transition">Firmowy</Link>
          <Link href="/segmenty/korporacje" className="text-szary-light hover:text-mint transition">Korporacje</Link>
          <Link href="/segmenty/ngo" className="text-szary-light hover:text-mint transition">NGO</Link>
          <Link href="/segmenty/b2g-sektor-publiczny" className="text-szary-light hover:text-mint transition">B2G</Link>
          <a href="https://akademia.bdi.technology/katalog" className="text-szary-light hover:text-mint transition">Kursy</a>
          <Link href="/kontakt" className="bg-mint text-granat font-bold px-4 py-2 rounded hover:bg-mint/90 transition">Kontakt</Link>
        </nav>
      </div>
    </header>
  );
}
