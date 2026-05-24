"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
  full_name: z.string().min(2, "Imię i nazwisko min 2 znaki"),
  email: z.string().email("Nieprawidłowy email"),
  phone: z.string().optional(),
  message: z.string().min(10, "Wiadomość min 10 znaków"),
  source_segment: z.enum(["kursy","ai_development","cyber","consulting","fundacja","other"]),
  consent_rodo: z.boolean().refine(v => v === true, "Zgoda RODO wymagana"),
  honeypot: z.string().max(0).optional().default(""),
});
type FormData = z.infer<typeof schema>;

export function ContactForm() {
  const [status, setStatus] = useState<"idle"|"sending"|"success"|"error">("idle");
  const [error, setError] = useState<string | null>(null);
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { source_segment: "consulting", consent_rodo: false, honeypot: "" },
  });

  const onSubmit = async (data: FormData) => {
    setStatus("sending");
    setError(null);
    try {
      const res = await fetch("/api/lead-capture", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (res.ok && json.ok) {
        setStatus("success");
        reset();
      } else {
        setStatus("error");
        setError(json.error || "Błąd serwera");
      }
    } catch (e) {
      setStatus("error");
      setError("Błąd sieci. Spróbuj ponownie.");
    }
  };

  if (status === "success") {
    return (
      <div className="bg-granat-deep p-8 rounded-lg border-2 border-mint">
        <h2 className="text-mint font-bold text-2xl mb-3">Dziękujemy!</h2>
        <p className="text-szary-light">Otrzymaliśmy Twoje zapytanie · skontaktujemy się w&nbsp;ciągu max 2&nbsp;dni roboczych.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 bg-granat-deep p-6 rounded-lg border border-mint/30">
      <input type="text" {...register("honeypot")} className="hidden" tabIndex={-1} autoComplete="off" />
      <div>
        <label className="block text-szary-light text-sm mb-1">Imię i nazwisko *</label>
        <input {...register("full_name")} className="w-full bg-granat text-white px-3 py-2 rounded border border-szary/30 focus:border-mint outline-none" placeholder="Jan Kowalski" />
        {errors.full_name && <p className="text-accent-red text-xs mt-1">{errors.full_name.message}</p>}
      </div>
      <div>
        <label className="block text-szary-light text-sm mb-1">Email *</label>
        <input {...register("email")} type="email" className="w-full bg-granat text-white px-3 py-2 rounded border border-szary/30 focus:border-mint outline-none" placeholder="jan@firma.pl" />
        {errors.email && <p className="text-accent-red text-xs mt-1">{errors.email.message}</p>}
      </div>
      <div>
        <label className="block text-szary-light text-sm mb-1">Telefon (opcjonalnie)</label>
        <input {...register("phone")} type="tel" className="w-full bg-granat text-white px-3 py-2 rounded border border-szary/30 focus:border-mint outline-none" placeholder="+48 600 000 000" />
      </div>
      <div>
        <label className="block text-szary-light text-sm mb-1">Czego dotyczy?</label>
        <select {...register("source_segment")} className="w-full bg-granat text-white px-3 py-2 rounded border border-szary/30 focus:border-mint outline-none">
          <option value="consulting">Doradztwo / Transformacja cyfrowa</option>
          <option value="kursy">Szkolenia / BDI Academy</option>
          <option value="ai_development">Wdrożenia AI</option>
          <option value="cyber">Cyberbezpieczeństwo</option>
          <option value="fundacja">NGO / Fundacja</option>
          <option value="other">Inne</option>
        </select>
      </div>
      <div>
        <label className="block text-szary-light text-sm mb-1">Wiadomość *</label>
        <textarea {...register("message")} rows={4} className="w-full bg-granat text-white px-3 py-2 rounded border border-szary/30 focus:border-mint outline-none" placeholder="Opisz krótko czego potrzebujesz..."></textarea>
        {errors.message && <p className="text-accent-red text-xs mt-1">{errors.message.message}</p>}
      </div>
      <div>
        <label className="flex items-start gap-2 text-szary-light text-sm">
          <input {...register("consent_rodo")} type="checkbox" className="mt-1" />
          <span>Wyrażam zgodę na przetwarzanie moich danych osobowych zgodnie z&nbsp;RODO w&nbsp;celu odpowiedzi na zapytanie. *</span>
        </label>
        {errors.consent_rodo && <p className="text-accent-red text-xs mt-1">{errors.consent_rodo.message}</p>}
      </div>
      {error && <p className="text-accent-red text-sm">{error}</p>}
      <button type="submit" disabled={status === "sending"} className="bg-mint text-granat font-bold px-6 py-3 rounded hover:bg-mint/90 transition disabled:opacity-50 w-full">
        {status === "sending" ? "Wysyłam..." : "Wyślij zapytanie"}
      </button>
    </form>
  );
}
