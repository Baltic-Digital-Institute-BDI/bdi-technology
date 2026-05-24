import { ContactForm } from "@/components/corporate/ContactForm";

export const metadata = {
  title: "Kontakt · Baltic Digital Institute",
  description: "Skontaktuj się z BDI · Gdańsk Hołdu Pruskiego 6 · +48 669 996 109 · kontakt@bdi.technology · odpowiadamy w ciągu max 2 dni roboczych",
};

export default function KontaktPage() {
  return (
    <section className="px-6 py-16 max-w-5xl mx-auto">
      <div className="text-xs uppercase tracking-widest text-mint font-bold mb-3">Kontakt</div>
      <h1 className="text-4xl md:text-5xl font-bold text-mint mb-6">Porozmawiajmy</h1>
      <p className="text-xl text-szary-light mb-10">
        Wypełnij formularz &mdash; nasz zespół skontaktuje się z&nbsp;Tobą w&nbsp;ciągu maksymalnie <b className="text-mint">2&nbsp;dni roboczych</b>.
      </p>
      <div className="grid md:grid-cols-2 gap-10">
        <ContactForm />
        <div className="space-y-6">
          <div className="bg-granat-deep p-6 rounded-lg border border-mint/30">
            <h2 className="text-mint font-bold text-lg mb-3">Adres</h2>
            <p className="text-szary-light">Hołdu Pruskiego 6<br/>80-861 Gdańsk</p>
          </div>
          <div className="bg-granat-deep p-6 rounded-lg border border-mint/30">
            <h2 className="text-mint font-bold text-lg mb-3">Kontakt bezpośredni</h2>
            <p className="text-szary-light"><a href="tel:+48669996109" className="text-mint hover:underline">+48 669 996 109</a></p>
            <p className="text-szary-light mt-2"><a href="mailto:kontakt@bdi.technology" className="text-mint hover:underline">kontakt@bdi.technology</a></p>
          </div>
          <div className="bg-granat-deep p-6 rounded-lg border border-mint/30">
            <h2 className="text-mint font-bold text-lg mb-3">Godziny pracy</h2>
            <p className="text-szary-light">Poniedziałek-Piątek &middot; 9:00-17:00</p>
            <p className="text-szary text-xs mt-2">SLA odpowiedzi: max 2 dni robocze</p>
          </div>
        </div>
      </div>
    </section>
  );
}
