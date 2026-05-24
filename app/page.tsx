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

// 6 why-cards · per KR feedback 2026-05-24 (4 updates) + zachowane 2 cards
const WHY_CARDS = [
  {
    title: "Doświadczony zespół praktyków",
    desc: "Eksperci ds. AI, cyberbezpieczeństwa, transformacji cyfrowej.",
    icon: "users",
  },
  {
    title: "Wsparcie w pozyskiwaniu dotacji",
    desc: "Nasze Centrum Kompetencyjne BDI Finance Hub — od identyfikacji programu po rozliczenie.",
    icon: "wallet",
  },
  {
    title: "Autorskie produkty AI",
    desc: "Nasze BDI AI & Cyber Lab — tworzymy produkty projektowane pod Wasze procesy.",
    icon: "cpu",
  },
  {
    title: "Stałe wsparcie po wdrożeniu",
    desc: "Mentoring, aktualizacje, monitoring i optymalizacja na bieżąco.",
    icon: "shield",
  },
  {
    title: "Doświadczenie w sektorze MŚP, korporacji i publicznym",
    desc: "Realizacje dla firm prywatnych, dużych organizacji oraz administracji publicznej.",
    icon: "building",
  },
  {
    title: "Akredytacja ISO 9001:2015",
    desc: "System zarządzania jakością · wpis BUR PARP · certyfikat BDI Academy.",
    icon: "award",
  },
];

function WhyIcon({ name }: { name: string }) {
  const common = "w-10 h-10 stroke-mint";
  switch (name) {
    case "users":
      return <svg className={common} viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>;
    case "wallet":
      return <svg className={common} viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 12V8H6a2 2 0 0 1-2-2c0-1.1.9-2 2-2h12v4"/><path d="M4 6v12c0 1.1.9 2 2 2h14v-4"/><path d="M18 12a2 2 0 0 0-2 2c0 1.1.9 2 2 2h4v-4h-4z"/></svg>;
    case "cpu":
      return <svg className={common} viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3"/></svg>;
    case "shield":
      return <svg className={common} viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>;
    case "building":
      return <svg className={common} viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="2" width="16" height="20" rx="2"/><path d="M9 22v-4h6v4M8 6h.01M16 6h.01M8 10h.01M16 10h.01M8 14h.01M16 14h.01"/></svg>;
    case "award":
      return <svg className={common} viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="7"/><path d="M8.21 13.89 7 23l5-3 5 3-1.21-9.12"/></svg>;
    default:
      return null;
  }
}

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="px-6 py-20 max-w-7xl mx-auto text-center">
        <div className="inline-block text-xs uppercase tracking-widest text-mint font-bold mb-3">Baltic Digital Institute</div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-mint mb-6 leading-tight">
          Wdrożenia i&nbsp;szkolenia AI &amp;&nbsp;Cyberbezpieczeństwa dla biznesu, NGO i&nbsp;sektora publicznego
        </h1>
        <p className="text-xl text-szary-light max-w-3xl mx-auto mb-10">
          Pomagamy organizacjom budować cyfrową odporność. Szkolimy zespoły, wdrażamy rozwiązania AI i&nbsp;w&nbsp;obszarze cyberbezpieczeństwa, nawigujemy transformację cyfrową organizacji &mdash; od&nbsp;pierwszej diagnozy do&nbsp;działającego rozwiązania.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <Link href="/kontakt" className="bg-mint text-granat font-bold px-6 py-3 rounded hover:bg-mint/90 transition">Porozmawiajmy</Link>
          <a href="https://akademia.bdi.technology/katalog" className="bg-granat-deep border-2 border-mint/40 text-mint font-bold px-6 py-3 rounded hover:border-mint transition">Katalog 67 kursów &rarr;</a>
        </div>
      </section>

      {/* WHY CARDS · 6-grid 3x2 */}
      <section className="px-6 py-16 bg-granat-deep">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-mint mb-10 text-center">Dlaczego BDI</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_CARDS.map((c, i) => (
              <div key={i} className="bg-granat p-6 rounded-lg border border-mint/20">
                <div className="mb-4"><WhyIcon name={c.icon} /></div>
                <h3 className="text-lg font-bold text-mint mb-2">{c.title}</h3>
                <p className="text-szary-light text-sm leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEGMENTY · 5 */}
      <section id="segmenty" className="px-6 py-16 max-w-7xl mx-auto">
        <div className="text-xs uppercase tracking-widest text-mint font-bold mb-3 text-center">Rozwiązania dopasowane do Ciebie</div>
        <h2 className="text-3xl font-bold text-mint mb-10 text-center">5 segmentów &middot; 5 ścieżek</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SEGMENTY.map(s => (
            <Link key={s.slug} href={`/segmenty/${s.slug}`} className="block bg-granat-deep hover:bg-granat-deep/80 p-6 rounded-lg border-2 border-mint/20 hover:border-mint transition group">
              <h3 className="text-lg font-bold text-mint mb-2 group-hover:text-mint">{s.label}</h3>
              <p className="text-szary-light text-sm">{s.desc}</p>
              <div className="mt-3 text-mint text-sm group-hover:translate-x-1 transition inline-block">Sprawdź &rarr;</div>
            </Link>
          ))}
        </div>
      </section>

      {/* PRODUKTY · 4 */}
      <section id="produkty" className="px-6 py-16 bg-granat-deep">
        <div className="max-w-7xl mx-auto">
          <div className="text-xs uppercase tracking-widest text-accent-amber font-bold mb-3 text-center">Hub-y i produkty BDI</div>
          <h2 className="text-3xl font-bold text-mint mb-10 text-center">4 produkty specjalistyczne</h2>
          <div className="grid md:grid-cols-2 gap-5">
            {PRODUKTY.map(p => (
              <Link key={p.slug} href={`/produkt/${p.slug}`} className="block bg-granat hover:bg-granat/80 p-6 rounded-lg border-2 border-accent-amber/30 hover:border-accent-amber transition group">
                <h3 className="text-lg font-bold text-accent-amber mb-2">{p.label}</h3>
                <p className="text-szary-light text-sm">{p.desc}</p>
                <div className="mt-3 text-accent-amber text-sm group-hover:translate-x-1 transition inline-block">Poznaj &rarr;</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* KURSY preview */}
      <section id="kursy" className="px-6 py-16 max-w-7xl mx-auto text-center">
        <div className="text-xs uppercase tracking-widest text-mint font-bold mb-3">BDI Academy</div>
        <h2 className="text-3xl font-bold text-mint mb-4">Ponad 60 kursów cyfrowych</h2>
        <p className="text-szary-light max-w-2xl mx-auto mb-8">
          14 klastrów tematycznych &middot; AI &middot; Cybersec &middot; Legal &middot; Marketing &middot; Healthcare &middot; Industry &middot; Dev &middot; Management &middot; NGO. Standard 10&nbsp;000&nbsp;zł &middot; z&nbsp;dofinansowaniem do&nbsp;95% &middot; już od&nbsp;500&nbsp;zł.
        </p>
        <a href="https://akademia.bdi.technology/katalog" className="inline-block bg-mint text-granat font-bold px-6 py-3 rounded hover:bg-mint/90 transition">Zobacz pełen katalog &rarr;</a>
      </section>
    </>
  );
}
