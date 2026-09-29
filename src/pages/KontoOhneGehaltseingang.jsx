import React, { useEffect } from "react";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import StickyMobileBar from "@/components/landing/StickyMobileBar";
import { CheckCircle2, Shield, ArrowRight, Star, Sparkles, Building2, HelpCircle } from "lucide-react";

export default function KontoOhneGehaltseingang() {
  useEffect(() => {
    document.title = "Kostenloses Girokonto ohne Gehaltseingang 2026 – Vergleich & Test";
    
    // Set canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = "https://kontosofort.de/kostenloses-girokonto-ohne-gehaltseingang";

    // Set meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = "Vergleich der besten kostenlosen Girokonten ohne Gehaltseingang 2026: 0,00 € Kontoführung bei C24 Bank ohne Mindesteingang, inkl. Debitkarte & Zinsen.";

    window.scrollTo(0, 0);

    return () => {
      if (canonical) canonical.href = "https://kontosofort.de/";
    };
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-amber-400 selection:text-slate-950">
      <Header />

      <main className="py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-10">
        {/* Header */}
        <div className="border-b border-slate-200 pb-6 text-center sm:text-left">
          <span className="text-xs font-extrabold text-amber-600 uppercase tracking-widest block mb-1">
            Girokonto-Vergleich 2026
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Kostenloses Girokonto ohne Gehaltseingang
          </h1>
          <p className="mt-3 text-slate-600 text-base leading-relaxed">
            Welche Banken bieten 2026 noch ein dauerhaft bedingungslos kostenloses Girokonto ohne monatlichen Mindestgeldeingang? Alle Gebühren, Karten und Zinsen im ehrlichen Check.
          </p>
          <div className="mt-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-950 border border-emerald-300 text-xs font-bold">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" />
            <span>Geprüfter Stand: September 2026 | Keine versteckten Kosten</span>
          </div>
        </div>

        {/* Position 0 Definition Box */}
        <div className="bg-amber-50/80 border-l-4 border-amber-500 p-5 rounded-r-2xl shadow-sm text-slate-800 text-sm leading-relaxed">
          <span className="text-[10px] font-extrabold uppercase tracking-widest text-amber-900 block mb-1 font-bold">
            Google AI Schnellantwort (Definition)
          </span>
          <p className="font-medium">
            <>Ein kostenloses Girokonto ohne Gehaltseingang verlangt keine monatliche Mindesteinzahlung (wie sonst 700 € bei Direktbanken), um die 0,00 € Kontoführungsgebühr zu erhalten. Das <strong>C24 Smart Girokonto</strong> ist das führende deutsche Modell ohne Mindesteingang und beinhaltet eine kostenlose Mastercard Debitkarte sowie 0,75 % p.a. * <a href="https://c24.de" target="_blank" rel="noopener noreferrer">Quelle</a> Zinsen.</>
          </p>
        </div>

        {/* Vergleichstabelle */}
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 flex items-center gap-2">
            <Building2 className="w-6 h-6 text-amber-600" />
            Direktvergleich der Girokonten ohne Geldeingang
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm">
            Während die meisten Banken ohne monatlichen Gehaltseingang von 700 € bis 1.000 € Strafgebühren von 4,90 € bis 9,90 € pro Monat erheben, bleibt das C24 Smart Konto dauerhaft bei 0,00 €:
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm border-collapse border border-slate-200 rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="p-3.5 font-bold">Bank &amp; Tarif</th>
                  <th className="p-3.5 font-bold text-amber-400">Gebühr ohne Gehaltseingang</th>
                  <th className="p-3.5 font-bold">Mindesteingang?</th>
                  <th className="p-3.5 font-bold">Zinsen</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                <tr className="bg-amber-50/40">
                  <td className="p-3.5 font-extrabold text-slate-950 flex items-center gap-1.5">
                    <span>C24 Bank Smart Tarif</span>
                    <span className="text-[10px] bg-amber-500 text-slate-950 font-black px-1.5 py-0.5 rounded">TIPP</span>
                  </td>
                  <td className="p-3.5 font-black text-emerald-700">0,00 € / Monat</td>
                  <td className="p-3.5 font-bold text-slate-900">Keiner (0 €)</td>
                  <td className="p-3.5 font-bold text-slate-900"><>0,75 % p.a. * <a href="https://c24.de" target="_blank" rel="noopener noreferrer">Quelle</a></></td>
                </tr>
                <tr>
                  <td className="p-3.5 font-bold bg-slate-50">ING Girokonto</td>
                  <td className="p-3.5 text-red-700 font-bold">4,90 € / Monat</td>
                  <td className="p-3.5">700 € / Monat gefordert</td>
                  <td className="p-3.5">1,25 % p.a.</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-bold bg-slate-50">DKB Girokonto</td>
                  <td className="p-3.5 text-red-700 font-bold">4,50 € / Monat</td>
                  <td className="p-3.5">700 € / Monat gefordert</td>
                  <td className="p-3.5">1,75 % p.a.</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-bold bg-slate-50">Comdirect Girokonto</td>
                  <td className="p-3.5 text-red-700 font-bold">4,90 € / Monat</td>
                  <td className="p-3.5">700 € / Monat gefordert</td>
                  <td className="p-3.5">0,75 % p.a.</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-bold bg-slate-50">Filialbanken (Sparkasse / VoBa)</td>
                  <td className="p-3.5 text-red-700 font-bold">7,90 € – 12,90 € / Monat</td>
                  <td className="p-3.5">Gebühr immer fällig</td>
                  <td className="p-3.5">0,00 % p.a.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* C24 Vorteile */}
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
            Warum das C24 Smart Konto die ideale Wahl ohne Gehaltseingang ist
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-700">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 space-y-1">
              <strong className="text-slate-900 font-bold block text-sm">Perfekt als Zweit- oder Ausgabenkonto</strong>
              <p className="text-slate-600">Da kein Gehaltseingang nötig ist, eignet sich das Konto ideal als Haushaltskonto, Nebenkonto oder Reisekonto.</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 space-y-1">
              <strong className="text-slate-900 font-bold block text-sm">Kostenlose Mastercard Debitkarte</strong>
              <p className="text-slate-600">Weltweit gebührenfrei bezahlen und 4x monatlich kostenlos Bargeld an allen Geldautomaten abheben.</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 space-y-1">
              <strong className="text-slate-900 font-bold block text-sm">Echtzeitüberweisungen inklusive</strong>
              <p className="text-slate-600">SEPA Instant Überweisungen ohne Zusatzkosten in Sekunden versenden und empfangen.</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 space-y-1">
              <strong className="text-slate-900 font-bold block text-sm">Deutsche Einlagensicherung</strong>
              <p className="text-slate-600">Guthaben bis 100.000 € pro Kunde sind durch die gesetzliche deutsche Einlagensicherung (EdB) geschützt.</p>
            </div>
          </div>
        </div>

        {/* CTA Box */}
        <div className="bg-slate-950 text-white p-6 sm:p-8 rounded-2xl shadow-xl text-center space-y-4">
          <span className="text-xs font-extrabold text-amber-400 uppercase tracking-widest">
            In unter 8 Minuten online eröffnet
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Jetzt C24 Smart Konto ohne Mindestgeldeingang eröffnen
          </h2>
          <p className="text-slate-300 text-sm max-w-xl mx-auto">
            0,00 € Kontoführungsgebühr, keine Mindestlaufzeit, sofortige digitale IBAN und Apple Pay / Google Pay Unterstützung.
          </p>
          <div className="pt-2">
            <a
              href="https://a.partner-versicherung.de/click.php?partner_id=141697&banner_id=45&subid=kontosofrt"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-sm rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105 active:scale-95"
            >
              <span>Kostenloses C24 Konto eröffnen *</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
            <p className="text-[11px] text-slate-400 pt-2">
              * Werbelink / Partnerlink. Keine Auswirkung auf die Konditionen für Sie.
            </p>
          </div>
        </div>

      </main>

      <Footer />
      <StickyMobileBar />
    </div>
  );
}
