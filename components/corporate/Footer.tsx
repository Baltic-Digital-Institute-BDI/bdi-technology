import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-granat-deep border-t border-granat-deep px-6 py-12 text-sm">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
        <div>
          <div className="text-mint font-bold text-lg mb-3">Baltic Digital Institute</div>
          <p className="text-szary text-xs leading-relaxed">
            Instytut technologiczny specjalizujący się w&nbsp;AI i&nbsp;cyberbezpieczeństwie. 500+&nbsp;osób przeszkolonych. 67&nbsp;kursów.
          </p>
        </div>
        <div>
          <div className="text-szary-light font-bold mb-3 text-xs uppercase tracking-wider">Segmenty</div>
          <ul className="space-y-1 text-szary">
            <li><Link href="/segmenty/klienci-indywidualni" className="hover:text-mint">Klienci Indywidualni</Link></li>
            <li><Link href="/segmenty/klient-firmowy" className="hover:text-mint">Klient Firmowy</Link></li>
            <li><Link href="/segmenty/korporacje" className="hover:text-mint">Korporacje</Link></li>
            <li><Link href="/segmenty/ngo" className="hover:text-mint">NGO</Link></li>
            <li><Link href="/segmenty/b2g-sektor-publiczny" className="hover:text-mint">B2G &middot; Sektor Publiczny</Link></li>
          </ul>
        </div>
        <div>
          <div className="text-szary-light font-bold mb-3 text-xs uppercase tracking-wider">Produkty</div>
          <ul className="space-y-1 text-szary">
            <li><Link href="/produkt/bdi-finance-hub" className="hover:text-mint">BDI Finance Hub</Link></li>
            <li><Link href="/produkt/bdi-legal-hub" className="hover:text-mint">BDI Legal Hub</Link></li>
            <li><Link href="/produkt/bdi-cybersec" className="hover:text-mint">BDI Cybersec</Link></li>
            <li><Link href="/produkt/bdi-research" className="hover:text-mint">BDI Research</Link></li>
            <li><a href="https://akademia.bdi.technology/" className="hover:text-mint">BDI Academy &rarr;</a></li>
          </ul>
        </div>
        <div>
          <div className="text-szary-light font-bold mb-3 text-xs uppercase tracking-wider">Kontakt</div>
          <p className="text-szary text-xs">Gdańsk, Hołdu Pruskiego 6</p>
          <p className="text-szary text-xs mt-1"><a href="tel:+48669996109" className="hover:text-mint">+48 669 996 109</a></p>
          <p className="text-szary text-xs mt-1"><a href="mailto:kontakt@bdi.technology" className="hover:text-mint">kontakt@bdi.technology</a></p>
          <Link href="/kontakt" className="inline-block mt-3 text-mint hover:underline text-xs">Formularz kontaktowy &rarr;</Link>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-10 pt-6 border-t border-granat text-xs text-szary flex flex-wrap gap-4 justify-between">
        <div>
          Baltic Digital Institute &middot; Fundacja &middot; NIP&nbsp;5213924185 &middot; KRS&nbsp;0000890019 &middot; BUR&nbsp;PARP&nbsp;188020 &middot; ISO&nbsp;9001:2015 &middot; RIS&nbsp;2.22/00098/2025
        </div>
        <div>&copy; 2026 BDI &middot; Wszelkie prawa zastrzeżone</div>
      </div>
    </footer>
  );
}
