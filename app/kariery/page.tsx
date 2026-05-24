export const metadata = { title: "Kariery w BDI · Baltic Digital Institute" };
export default function KarieryPage() {
  return (
    <section className="px-6 py-20 max-w-3xl mx-auto text-center">
      <div className="text-xs uppercase tracking-widest text-mint font-bold mb-3">Kariery</div>
      <h1 className="text-4xl font-bold text-mint mb-6">Dołącz do zespołu BDI</h1>
      <p className="text-xl text-szary-light mb-10">Aktualnie nie prowadzimy otwartego naboru. Zostaw nam aplikację &mdash; skontaktujemy się gdy pojawi się odpowiednia rola.</p>
      <a href="/kontakt" className="inline-block bg-mint text-granat font-bold px-6 py-3 rounded hover:bg-mint/90 transition">Zostaw aplikację &rarr;</a>
    </section>
  );
}
