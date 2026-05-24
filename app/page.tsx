import Link from "next/link";

const SEGMENTY = [
  { slug: "klienci-indywidualni", label: "Klienci Indywidualni", desc: "Zaczynasz w branży cyfrowej? Chcesz przekwalifikować się do AI/cyber? Tutaj startujesz." },
  { slug: "klient-firmowy", label: "Klient Firmowy", desc: "Twoja firma rośnie · potrzebujesz cyfrowych kompetencji w zespole." },
  { slug: "korporacje", label: "Korporacje", desc: "Transformacja na skalę · compliance · dojrzałość AI." },
  { slug: "ngo", label: "NGO", desc: "Każda godzina i każda złotówka liczy się w działalności społecznej." },
  { slug: "b2g-sektor-publiczny", label: "B2G · Sektor Publiczny", desc: "Modernizujesz urząd · NIS2 · KSeF · AI w administracji." },
];

const PRODUKTY = [
  { slug: "bdi-finance-hub", label: "BDI Finance Hub", desc: "Wsparcie w pozyskaniu dofinansowania BUR · KFS · programy EU" },
  { slug: "bdi-legal-hub", label: "BDI Legal Hub", desc: "AI Act · NIS2 · DORA · RODO · compliance prawny" },
  { slug: "bdi-cybersec", label: "BDI Cybersec", desc: "ISO 27001 · NIS2 · SOC · pentesty · vCISO" },
  { slug: "bdi-research", label: "BDI Research", desc: "Badania stosowane · AI/ML R&D · publikacje · projekty UE" },
];

export default function HomePage() {
  return (
    <>
      <section className="px-6 py-20 max-w-7xl mx-auto text-center">
        <div className="inline-block text-xs uppercase tracking-widest text-mint font-bold mb-3">Baltic Digital Institute</div>
        <h1 className="text-5xl md:text-6xl font-bold text-mint mb-6">Pomagamy organizacjom budować cyfrową odporność</h1>
        <p className="text-xl text-szary-light max-w-3xl mx-auto mb-4">
          Szkolimy zespoły, wdrażamy AI i&nbsp;cyberbezpieczeństwo, prowadzimy przez transformację cyfrową — od&nbsp;pierwszej diagnozy do&nbsp;działającego rozwiązania.
        </p>
        <p className="text-base text-mint max-w-2xl mx-auto mb-10">
          <b>500+ osób</b> przeszkolonych &middot; <b>67 kursów</b> w&nbsp;BDI Academy &middot; akredytacja ISO&nbsp;9001:2015 &middot; wpis BUR&nbsp;PARP&nbsp;188020
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <Link href="/kontakt" className="bg-mint text-granat font-bold px-6 py-3 rounded hover:bg-mint/90 transition">Porozmawiajmy</Link>
          <a href="https://akademia.bdi.technology/katalog" className="bg-granat-deep border-2 border-mint/40 text-mint font-bold px-6 py-3 rounded hover:border-mint transition">Katalog 67 kursów &rarr;</a>
        </div>
      </section>

      <section id="segmenty" className="px-6 py-16 bg-granat-deep">
        <div className="max-w-7xl mx-auto">
          <div className="text-xs uppercase tracking-widest text-mint font-bold mb-3 text-center">Rozwiązania dopasowane do Ciebie</div>
          <h2 className="text-3xl font-bold text-mint mb-10 text-center">5 segmentów &middot; 5 ścieżek</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {SEGMENTY.map(s => (
              <Link key={s.slug} href={`/segmenty/${s.slug}`} className="block bg-granat hover:bg-granat/80 p-6 rounded-lg border-2 border-mint/20 hover:border-mint transition group">
                <h3 className="text-lg font-bold text-mint mb-2 group-hover:text-mint">{s.label}</h3>
                <p className="text-szary-light text-sm">{s.desc}</p>
                <div className="mt-3 text-mint text-sm group-hover:translate-x-1 transition inline-block">Sprawdź &rarr;</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="produkty" className="px-6 py-16 max-w-7xl mx-auto">
        <div className="text-xs uppercase tracking-widest text-accent-amber font-bold mb-3 text-center">Hub-y i produkty BDI</div>
        <h2 className="text-3xl font-bold text-mint mb-10 text-center">4 produkty specjalistyczne</h2>
        <div className="grid md:grid-cols-2 gap-5">
          {PRODUKTY.map(p => (
            <Link key={p.slug} href={`/produkt/${p.slug}`} className="block bg-granat-deep hover:bg-granat-deep/80 p-6 rounded-lg border-2 border-accent-amber/30 hover:border-accent-amber transition group">
              <h3 className="text-lg font-bold text-accent-amber mb-2">{p.label}</h3>
              <p className="text-szary-light text-sm">{p.desc}</p>
              <div className="mt-3 text-accent-amber text-sm group-hover:translate-x-1 transition inline-block">Poznaj &rarr;</div>
            </Link>
          ))}
        </div>
      </section>

      <section id="kursy" className="px-6 py-16 bg-granat-deep">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-xs uppercase tracking-widest text-mint font-bold mb-3">BDI Academy</div>
          <h2 className="text-3xl font-bold text-mint mb-4">Ponad 60 kursów cyfrowych</h2>
          <p className="text-szary-light max-w-2xl mx-auto mb-8">
            14 klastrów tematycznych &middot; AI &middot; Cybersec &middot; Legal &middot; Marketing &middot; Healthcare &middot; Industry &middot; Dev &middot; Management &middot; NGO. Standard 10&nbsp;000&nbsp;zł &middot; z&nbsp;dofinansowaniem do&nbsp;95% &middot; już od&nbsp;500&nbsp;zł.
          </p>
          <a href="https://akademia.bdi.technology/katalog" className="inline-block bg-mint text-granat font-bold px-6 py-3 rounded hover:bg-mint/90 transition">Zobacz pełen katalog &rarr;</a>
        </div>
      </section>
    </>
  );
}
