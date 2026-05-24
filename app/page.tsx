import Link from "next/link";

export default function HomePage() {
  return (
    <section className="px-6 py-20 max-w-7xl mx-auto text-center">
      <div className="inline-block text-xs uppercase tracking-widest text-mint font-bold mb-3">Baltic Digital Institute</div>
      <h1 className="text-5xl md:text-6xl font-bold text-mint mb-6">bdi.technology</h1>
      <p className="text-xl text-szary-light max-w-2xl mx-auto mb-10">
        Instytut technologiczny specjalizujący się w&nbsp;AI i&nbsp;cyberbezpieczeństwie. Sprint 2 LIVE w&nbsp;toku &mdash; pełna strona dostępna w&nbsp;ciągu 5-7&nbsp;dni roboczych.
      </p>
      <div className="grid md:grid-cols-3 gap-6 text-left max-w-5xl mx-auto">
        <a href="https://akademia.bdi.technology/katalog" className="block bg-granat-deep hover:bg-granat-deep/80 p-6 rounded-lg border-2 border-mint/40 hover:border-mint transition">
          <h2 className="text-lg font-bold text-mint mb-2">Katalog 67 kursów</h2>
          <p className="text-szary-light text-sm">14 klastrów &middot; AI &middot; Cybersec &middot; Legal &middot; Marketing &middot; Healthcare</p>
        </a>
        <Link href="/kontakt" className="block bg-granat-deep hover:bg-granat-deep/80 p-6 rounded-lg border-2 border-accent-blue/40 hover:border-accent-blue transition">
          <h2 className="text-lg font-bold text-accent-blue mb-2">Kontakt</h2>
          <p className="text-szary-light text-sm">Skontaktuj się z&nbsp;nami &middot; odpowiadamy w&nbsp;ciągu max 2&nbsp;dni roboczych</p>
        </Link>
        <Link href="/segmenty/korporacje" className="block bg-granat-deep hover:bg-granat-deep/80 p-6 rounded-lg border-2 border-accent-amber/40 hover:border-accent-amber transition">
          <h2 className="text-lg font-bold text-accent-amber mb-2">Dla Korporacji</h2>
          <p className="text-szary-light text-sm">Custom AI solutions &middot; transformacja cyfrowa &middot; cyberbezpieczeństwo enterprise</p>
        </Link>
      </div>
    </section>
  );
}
