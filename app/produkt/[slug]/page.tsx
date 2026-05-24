import { notFound } from "next/navigation";
import Link from "next/link";

const PRODUKTY: Record<string, { label: string; hero: string; features: { title: string; desc: string }[]; segments: string[] }> = {
  "bdi-finance-hub": {
    label: "BDI Finance Hub",
    hero: "Wsparcie w pozyskaniu dofinansowania na rozwój kompetencji cyfrowych",
    features: [
      { title: "BUR · PARP", desc: "Baza Usług Rozwojowych · refundacja do 95% · uczestnik osobiście" },
      { title: "KFS · Krajowy Fundusz Szkoleniowy", desc: "Do 90% dla firm · łatwy wniosek przez PUP · 1-4 tygodnie procesowanie" },
      { title: "Programy EU · FERS · FENG · regionalne RPO", desc: "Programy makroregionalne · do 95% kosztów kwalifikowanych" },
    ],
    segments: ["klienci-indywidualni", "klient-firmowy", "ngo"],
  },
  "bdi-legal-hub": {
    label: "BDI Legal Hub",
    hero: "Compliance prawny · AI Act · NIS2 · DORA · RODO",
    features: [
      { title: "AI Act EU + AI Governance", desc: "Implementacja AI Act dla wysokiego ryzyka systemów · governance framework" },
      { title: "NIS2 + DORA + ISO 27001", desc: "Cybersec compliance · audyty · dokumentacja · vCISO" },
      { title: "RODO + Privacy", desc: "Pełen pakiet RODO · DPIA · privacy by design · audyty zgodności" },
    ],
    segments: ["klient-firmowy", "korporacje", "b2g-sektor-publiczny"],
  },
  "bdi-cybersec": {
    label: "BDI Cybersec",
    hero: "Cyberbezpieczeństwo enterprise · ISO 27001 · NIS2 · vCISO",
    features: [
      { title: "ISO 27001 + NIS2 implementation", desc: "Wdrożenie ISMS · audyty · certyfikacja · ciągłe doskonalenie" },
      { title: "vCISO + SOC", desc: "Wirtualny CISO · monitoring SOC 24/7 · incident response" },
      { title: "Pentesty + Red Team", desc: "Penetration testing · audyty bezpieczeństwa · symulacje phishingowe" },
    ],
    segments: ["klient-firmowy", "korporacje", "b2g-sektor-publiczny"],
  },
  "bdi-research": {
    label: "BDI Research",
    hero: "Badania stosowane · AI/ML R&D · publikacje · projekty UE",
    features: [
      { title: "Applied AI/ML Research", desc: "Custom AI projects · prototypy · MVP-to-Production pipeline" },
      { title: "Publikacje + IP", desc: "Patenty · publikacje naukowe · współpraca z uczelniami" },
      { title: "Projekty EU · Horizon · FENG", desc: "Aplikacje grantowe · wykonawstwo · konsorcja" },
    ],
    segments: ["korporacje", "b2g-sektor-publiczny"],
  },
};

export function generateStaticParams() {
  return Object.keys(PRODUKTY).map(slug => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const p = PRODUKTY[params.slug];
  if (!p) return {};
  return {
    title: `${p.label} · Baltic Digital Institute`,
    description: p.hero,
  };
}

export default function ProduktPage({ params }: { params: { slug: string } }) {
  const p = PRODUKTY[params.slug];
  if (!p) notFound();
  return (
    <section className="px-6 py-16 max-w-5xl mx-auto">
      <div className="text-xs uppercase tracking-widest text-accent-amber font-bold mb-3">Produkt BDI</div>
      <h1 className="text-4xl md:text-5xl font-bold text-accent-amber mb-6">{p.label}</h1>
      <p className="text-2xl text-szary-light mb-10">{p.hero}</p>
      <div className="grid md:grid-cols-3 gap-5 mb-10">
        {p.features.map((f, i) => (
          <div key={i} className="bg-granat-deep p-5 rounded-lg border border-accent-amber/30">
            <h3 className="text-accent-amber font-bold mb-2">{f.title}</h3>
            <p className="text-szary-light text-sm">{f.desc}</p>
          </div>
        ))}
      </div>
      <div className="bg-granat-deep p-6 rounded-lg border border-mint/30 mb-8">
        <p className="text-szary-light mb-3">Dla kogo:</p>
        <div className="flex flex-wrap gap-2">
          {p.segments.map(s => (
            <Link key={s} href={`/segmenty/${s}`} className="bg-granat text-mint px-3 py-1 rounded text-sm hover:bg-mint hover:text-granat transition">
              {s.replace(/-/g, " ")}
            </Link>
          ))}
        </div>
      </div>
      <Link href="/kontakt" className="inline-block bg-accent-amber text-granat font-bold px-6 py-3 rounded hover:bg-accent-amber/90 transition">Skontaktuj się &rarr;</Link>
    </section>
  );
}
