import React from 'react';
import { 
  Cpu, Zap, ShieldCheck, Lock, AlertTriangle, CheckCircle2, XCircle, 
  HelpCircle, Server, Smartphone, KeyRound, ArrowRight, ExternalLink 
} from "lucide-react";
import { Button } from "@/components/ui/button";

const AFFILIATE_LINK = "https://a.check24.net/misc/click.php?pid=83873&aid=18&deep=c24bank&cat=14";

const MATRIX_ITEMS = [
  {
    kategorie: 'SEPA Instant Latenz',
    c24: '< 1,8s (ISO 20022 XML)',
    n26: '< 2,0s (Instant Protocol)',
    ing: '< 2,5s (Standard SEPA)',
    traditionell: '24 - 48h (Stapelverarbeitung)',
    note: 'Echtzeitüberweisung rund um die Uhr (24/7/365) ohne Aufpreis.'
  },
  {
    kategorie: 'Sicherheit & HW-Token',
    c24: 'FIDO2 / WebAuthn & Passkey',
    n26: 'Biometrie + FIDO2 Token',
    ing: 'App-Freigabe (2FA)',
    traditionell: 'SMS-TAN / ChipTAN Reader',
    note: 'Schutz vor Phishing durch kryptographische Hardware-Token.'
  },
  {
    kategorie: 'POS Terminal Standard',
    c24: 'GaN III & USB-PD 3.1 140W',
    n26: 'NFC 13.56 MHz / Qi2',
    ing: 'Standard NFC POS',
    traditionell: 'Veraltete Magnetstreifen-POS',
    note: 'Maximale Ladegeschwindigkeit & kontaktlose Kartenterminal-Hardware.'
  },
  {
    kategorie: 'Ident-Verfahren & Speed',
    c24: 'eID Online-Ausweis (< 3 Min)',
    n26: 'VideoIdent (< 5 Min)',
    ing: 'VideoIdent / PostIdent',
    traditionell: 'Filialbesuch / PostIdent (2-5 Tage)',
    note: 'Keine Papierformulare erforderlich. Sofortige IBAN-Generierung.'
  },
  {
    kategorie: 'Fremdwährungsgebühr (FX)',
    c24: '0,00 % (Mastercard Kurs)',
    n26: '0,00 % (Standard Tarif)',
    ing: '1,75 % Aufschlag',
    traditionell: '1,75 % - 2,50 % Aufschlag',
    note: 'Kostenfreies Bezahlen weltweit ohne Devisenaufschlag.'
  },
  {
    kategorie: 'Unterkonten / Sub-IBANs',
    c24: 'Inklusive (eigene IBANs)',
    n26: 'Inklusive (Spaces)',
    ing: 'Nur Tagesgeldkonto',
    traditionell: 'Nicht verfügbar / Kostenpflichtig',
    note: 'Automatische Budgetierung für Steuern, Fixkosten & Rücklagen.'
  }
];

export default function ExpertMatrixSection() {
  return (
    <section id="matrix" className="py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 bg-slate-900 text-white border border-slate-700 text-xs font-extrabold px-3.5 py-1.5 rounded-full shadow-sm">
            <Cpu className="w-4 h-4 text-amber-400" />
            <span>EXPERTEN-VERGLEICHSMATRIX 2026</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Technische Spezifikationen &amp; Protokollvergleich
          </h2>

          <p className="text-slate-600 font-medium text-base">
            Direkter Vergleich moderner Neobanken im Vergleich zu veralteten Filialbank-Systemen.
          </p>
        </div>

        {/* Matrix Table Container */}
        <div className="bg-slate-50 rounded-2xl border border-slate-200 shadow-lg overflow-hidden">
          <div className="overflow-x-auto w-full">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-900 text-white border-b border-slate-800 text-xs uppercase tracking-wider">
                  <th className="py-4 px-6 font-extrabold w-1/4">Feature / Standard</th>
                  <th className="py-4 px-4 font-extrabold text-amber-400 w-1/5">C24 Bank</th>
                  <th className="py-4 px-4 font-extrabold text-emerald-400 w-1/5">N26 Bank</th>
                  <th className="py-4 px-4 font-extrabold text-slate-300 w-1/5">ING Deutschland</th>
                  <th className="py-4 px-4 font-extrabold text-slate-400 w-1/5">Filialbank (Alt)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-xs sm:text-sm">
                {MATRIX_ITEMS.map((item, index) => (
                  <tr key={index} className="hover:bg-white transition-colors">
                    <td className="py-4 px-6 font-extrabold text-slate-900">
                      <div>{item.kategorie}</div>
                      <span className="text-[11px] font-medium text-slate-500 block mt-0.5">{item.note}</span>
                    </td>
                    <td className="py-4 px-4 font-black text-slate-900 bg-amber-50/50">
                      <span className="inline-flex items-center gap-1.5 text-amber-950 font-extrabold">
                        <CheckCircle2 className="w-4 h-4 text-amber-700 flex-shrink-0" />
                        {item.c24}
                      </span>
                    </td>
                    <td className="py-4 px-4 font-bold text-slate-800">
                      <span className="inline-flex items-center gap-1.5 text-emerald-950 font-bold">
                        <CheckCircle2 className="w-4 h-4 text-emerald-700 flex-shrink-0" />
                        {item.n26}
                      </span>
                    </td>
                    <td className="py-4 px-4 font-bold text-slate-700">
                      {item.ing}
                    </td>
                    <td className="py-4 px-4 font-semibold text-slate-500 bg-slate-100/60">
                      <span className="inline-flex items-center gap-1.5 text-slate-600">
                        <XCircle className="w-4 h-4 text-slate-400 flex-shrink-0" />
                        {item.traditionell}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Engineering Dos & Don'ts Guide */}
        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Engineering Dos */}
          <div className="bg-emerald-50/80 rounded-2xl p-6 border border-emerald-200 shadow-sm space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-emerald-700 text-white rounded-xl flex items-center justify-center shadow-md">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-black text-emerald-950">Ingenieur-Tipps: Empfohlen (DOs)</h3>
                <p className="text-xs font-bold text-emerald-800">Maximale Sicherheit &amp; Latenz-Optimierung</p>
              </div>
            </div>

            <ul className="space-y-3 text-xs sm:text-sm font-semibold text-slate-800">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-700 flex-shrink-0 mt-0.5" />
                <span><strong>FIDO2 / Passkey 2FA aktivieren:</strong> Verhindert Phishing-Angriffe durch kryptographische Hardware-Verifizierung im Ausweis oder YubiKey.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-700 flex-shrink-0 mt-0.5" />
                <span><strong>SEPA Instant nutzen:</strong> Überweisungen innerhalb von 1,8 Sekunden verifiziert abwickeln anstelle von 48h Bankbearbeitungszeiten.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-700 flex-shrink-0 mt-0.5" />
                <span><strong>Separate Unterkonten (Pockets):</strong> Automatische Aufteilung von Steuern und Fixkosten zur Vermeidung unbeabsichtigter Dispo-Zinsen.</span>
              </li>
            </ul>
          </div>

          {/* Engineering Don'ts */}
          <div className="bg-amber-50/80 rounded-2xl p-6 border border-amber-200 shadow-sm space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-amber-600 text-slate-950 rounded-xl flex items-center justify-center shadow-md">
                <AlertTriangle className="w-6 h-6 stroke-[2.5]" />
              </div>
              <div>
                <h3 className="text-lg font-black text-amber-950">Sicherheits-Warnungen: Verboten (DON'Ts)</h3>
                <p className="text-xs font-bold text-amber-900">Häufige Fehler bei der Online-Kontoeröffnung</p>
              </div>
            </div>

            <ul className="space-y-3 text-xs sm:text-sm font-semibold text-slate-800">
              <li className="flex items-start gap-2.5">
                <XCircle className="w-5 h-5 text-amber-700 flex-shrink-0 mt-0.5" />
                <span><strong>SMS-TAN über ungesichertes Mobilfunknetz:</strong> SMS-Protokolle sind anfällig für SIM-Swapping. Nutzen Sie stets biometrische In-App-Freigaben.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <XCircle className="w-5 h-5 text-amber-700 flex-shrink-0 mt-0.5" />
                <span><strong>Öffentliches WLAN ohne TLS 1.3/VPN:</strong> Eröffnen Sie Online-Konten niemals im unverschlüsselten Hotspot ohne gesicherte End-to-End Verbindung.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <XCircle className="w-5 h-5 text-amber-700 flex-shrink-0 mt-0.5" />
                <span><strong>Unnötige Filialgebühren zahlen:</strong> Zahlen Sie keine 5–10 € Grundgebühren bei Banken mit veralteter Infrastruktur.</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Callout Action Banner */}
        <div className="bg-slate-900 rounded-2xl p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 border border-slate-800 shadow-xl">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-2xl font-black text-amber-400">Bereit für ein modernes Girokonto?</h3>
            <p className="text-slate-300 text-sm font-medium max-w-xl">
              Eröffnen Sie jetzt in unter 5 Minuten Ihr kostenloses Konto mit SEPA Instant Latenz und eID-Legitimation.
            </p>
          </div>
          <Button
            asChild
            size="lg"
            className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-extrabold px-8 py-6 rounded-xl shadow-lg border border-amber-400 text-base flex-shrink-0 focus-visible:ring-2 focus-visible:ring-amber-500"
          >
            <a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer nofollow">
              Jetzt Konto testen
              <ArrowRight className="ml-2 w-5 h-5 stroke-[3]" />
            </a>
          </Button>
        </div>

      </div>
    </section>
  );
}
