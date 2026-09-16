import React, { useEffect } from "react";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import { CheckCircle2, ArrowRight, TrendingUp, PiggyBank, ShieldCheck } from "lucide-react";

export default function TagesgeldZinsenVergleich() {
  useEffect(() => {
    document.title = "Tagesgeld Zinsen 2026 – Tagesgeld direkt auf dem Girokonto | kontosofort.de";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-amber-400 selection:text-slate-950">
      <Header />

      <main className="py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-10">
        {/* Header */}
        <div className="border-b border-slate-200 pb-6 text-center sm:text-left">
          <span className="text-xs font-extrabold text-amber-600 uppercase tracking-widest block mb-1">
            Zins-Ratgeber 2026
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Tagesgeld-Zinsen direkt auf dem Girokonto
          </h1>
          <p className="mt-3 text-slate-600 text-base leading-relaxed">
            <>0,75 % p.a. * <a href="https://c24.de" target="_blank" rel="noopener noreferrer">Quelle</a></>
          </p>
          <div className="mt-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-950 border border-emerald-300 text-xs font-bold">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" />
            <span>Zinsstand: September 2026 | Gesetzliche Einlagensicherung</span>
          </div>
        </div>

        {/* Position 0 Definition Box */}
        <div className="bg-amber-50/80 border-l-4 border-amber-500 p-5 rounded-r-2xl shadow-sm text-slate-800 text-sm leading-relaxed">
          <span className="text-[10px] font-extrabold uppercase tracking-widest text-amber-900 block mb-1 font-bold">
            Google AI Schnellantwort (Definition)
          </span>
          <p className="font-medium">
            <>Ein verzinstes Girokonto mit Tagesgeld-Pockets zahlt Zinsen (wie 0,75 % p.a. * <a href="https://c24.de" target="_blank" rel="noopener noreferrer">Quelle</a> bei der C24 Bank) auf flexible Unterkonten direkt in der Banking-App. Das Guthaben bleibt täglich verfügbar, ohne dass Überweisungen zu externen Banken abgewartet werden müssen.</>
          </p>
        </div>

        {/* Zinsrechner Box */}
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 flex items-center gap-2">
            <TrendingUp className="w-6 h-6 text-amber-600" />
            <>Beispielrechnung: Wie viel Zinsen bringen 0,75 % p.a. * <a href="https://c24.de" target="_blank" rel="noopener noreferrer">Quelle</a>?</>
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm border-collapse border border-slate-200 rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="p-3.5 font-bold">Anlagebetrag</th>
                  <th className="p-3.5 font-bold">Zinssatz p.a.</th>
                  <th className="p-3.5 font-bold text-amber-400">Zinsertrag / Jahr</th>
                  <th className="p-3.5 font-bold">Zinsertrag / Monat</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                <tr>
                  <td className="p-3.5 font-bold bg-slate-50">5.000 € (Notgroschen)</td>
                  <td className="p-3.5">0,75 %</td>
                  <td className="p-3.5 font-bold text-emerald-700">37,50 €</td>
                  <td className="p-3.5">ca. 3,13 €</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-bold bg-slate-50">10.000 € (Ersparnisse)</td>
                  <td className="p-3.5">0,75 %</td>
                  <td className="p-3.5 font-bold text-emerald-700">75,00 €</td>
                  <td className="p-3.5">ca. 6,25 €</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-bold bg-slate-50">25.000 € (Rücklage)</td>
                  <td className="p-3.5">0,75 %</td>
                  <td className="p-3.5 font-bold text-emerald-700">187,50 €</td>
                  <td className="p-3.5">ca. 15,63 €</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-bold bg-slate-50">50.000 € (Maximal)</td>
                  <td className="p-3.5">0,75 %</td>
                  <td className="p-3.5 font-bold text-emerald-700">375,00 €</td>
                  <td className="p-3.5">ca. 31,25 €</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-[11px] text-slate-500 italic">
            * Modellrechnung vor Kapitalertragsteuer (Freistellungsauftrag bis 1.000 € für Singles / 2.000 € für Verheiratete direkt in der App einrichtbar).
          </p>
        </div>

        {/* CTA */}
        <div className="bg-slate-950 text-white p-6 sm:p-8 rounded-2xl shadow-xl text-center space-y-4">
          <span className="text-xs font-extrabold text-amber-400 uppercase tracking-widest">
            Tagesgeld Zinsen sichern
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            C24 Smart Konto mit Tagesgeldpocket eröffnen
          </h2>
          <p className="text-slate-300 text-sm max-w-xl mx-auto">
            0,00 € Kontoführungsgebühr, kostenlose Debitkarte und 0,75 % p.a. Zinsen direkt im kostenlosen Smart-Tarif.
          </p>
          <div className="pt-2">
            <a
              href="https://a.partner-versicherung.de/click.php?partner_id=141697&banner_id=45&subid=kontosofrt"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-sm rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105 active:scale-95"
            >
              <span>Jetzt C24 Konto mit Zinsen eröffnen *</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
            <p className="text-[11px] text-slate-400 pt-2">
              * Werbelink / Partnerlink
            </p>
          </div>
        </div>

      </main>

      <Footer />
    </div>
  );
}
