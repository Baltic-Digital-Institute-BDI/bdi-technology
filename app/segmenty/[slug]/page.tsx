import { notFound } from "next/navigation";
import Link from "next/link";

const SEGMENTY: Record<string, { label: string; hero: string; long: string; bullets: string[]; produkty: string[] }> = {
  "klienci-indywidualni": {
    label: "Klienci Indywidualni",
    hero: "Niezależnie czy zaczynasz od zera, czy chcesz się przekwalifikować",
    long: "Zaczynasz w branży cyfrowej? Chcesz się przekwalifikować do AI/cyber? Tutaj startujesz. Wsparcie w pozyskaniu dofinansowania (BUR · KFS · programy EU · do 95%) · certyfikat BDI Academy · mentoring 1:1.",
    bullets: ["67 kursów z dofinansowaniem do 95%", "Certyfikat BDI Academy (BUR + ISO 9001)", "Mentoring 1:1 z trenerem", "Społeczność BDI Academy"],
    produkty: ["bdi-finance-hub"],
  },
  "klient-firmowy": {
    label: "Klient Firmowy",
    hero: "Twoja firma rośnie · czas na cyfrowe kompetencje w zespole",
    long: "MŚP · JDG · firma rodzinna · zespół 5-50 osób. Dostarczamy kursy + custom advisory + AI deployment. Dofinansowanie KFS do 90% dla firm.",
    bullets: ["Group training (in-house lub remote)", "Custom AI deployment", "KFS do 90% dla firm", "Trener przypisany do zespołu"],
    produkty: ["bdi-finance-hub", "bdi-legal-hub", "bdi-cybersec"],
  },
  "korporacje": {
    label: "Korporacje",
    hero: "Transformacja na skalę · compliance · dojrzałość AI",
    long: "Spółki notowane · grupy kapitałowe · sektory regulowane (finanse · zdrowie · energetyka · sektor publiczny). AI governance · NIS2/DORA · ISO 27001 · audyty.",
    bullets: ["AI governance + AI Act compliance", "NIS2 · DORA · ISO 27001 implementation", "vCISO + audyty", "Custom enterprise training programs"],
    produkty: ["bdi-cybersec", "bdi-legal-hub", "bdi-research"],
  },
  "ngo": {
    label: "NGO",
    hero: "Każda godzina i każda złotówka liczy się w działalności społecznej",
    long: "Fundacje · stowarzyszenia · OPP. Cyfryzacja procesów · AI w działalności statutowej · automatyzacja. Programy EU dla NGO · do 95%.",
    bullets: ["Kurs F1 NGO Digital Transformation", "Automatyzacja procesów grantowych", "Programy EU/NIW/FIO finansowanie", "Custom NGO Cyfryzacji workflow"],
    produkty: ["bdi-finance-hub"],
  },
  "b2g-sektor-publiczny": {
    label: "B2G · Sektor Publiczny",
    hero: "Modernizujesz urząd · NIS2 · KSeF · AI w administracji",
    long: "JST · urzędy centralne · jednostki podległe. NIS2 dla samorządów · KSeF · AI w zamówieniach (PZP) · e-administracja. Doświadczenie w sektorze publicznym Pomorza.",
    bullets: ["Kurs H1 e-Administracja NIS2 dla JST", "AI w PZP · zamówienia publiczne", "KSeF + e-Faktura compliance", "Custom training dla urzędów"],
    produkty: ["bdi-legal-hub", "bdi-cybersec"],
  },
};

export function generateStaticParams() {
  return Object.keys(SEGMENTY).map(slug => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const s = SEGMENTY[params.slug];
  if (!s) return {};
  return {
    title: `${s.label} · Baltic Digital Institute`,
    description: s.hero,
  };
}

export default function SegmentPage({ params }: { params: { slug: string } }) {
  const s = SEGMENTY[params.slug];
  if (!s) notFound();
  return (
    <section className="px-6 py-16 max-w-5xl mx-auto">
      <div className="text-xs uppercase tracking-widest text-mint font-bold mb-3">Segment</div>
      <h1 className="text-4xl md:text-5xl font-bold text-mint mb-6">{s.label}</h1>
      <p className="text-2xl text-szary-light mb-6">{s.hero}</p>
      <p className="text-szary-light mb-10">{s.long}</p>
      <h2 className="text-xl font-bold text-mint mb-4">Co oferujemy</h2>
      <ul className="space-y-2 mb-10">
        {s.bullets.map((b, i) => (
          <li key={i} className="text-szary-light pl-6 relative">
            <span className="absolute left-0 top-2 w-2 h-2 bg-mint rounded-full"></span>{b}
          </li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-3">
        <Link href="/kontakt" className="bg-mint text-granat font-bold px-6 py-3 rounded hover:bg-mint/90 transition">Skontaktuj się &rarr;</Link>
        <a href="https://akademia.bdi.technology/katalog" className="bg-granat-deep border-2 border-mint/40 text-mint font-bold px-6 py-3 rounded hover:border-mint transition">Katalog kursów &rarr;</a>
      </div>
    </section>
  );
}
