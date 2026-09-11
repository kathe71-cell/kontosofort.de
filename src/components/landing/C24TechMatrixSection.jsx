import React from 'react';
import { 
  Cpu, Zap, ShieldCheck, Lock, AlertTriangle, CheckCircle2, XCircle, 
  HelpCircle, Server, Smartphone, KeyRound, ArrowRight, ExternalLink 
} from "lucide-react";
import { Button } from "@/components/ui/button";

const C24_AFFILIATE_LINK = "https://a.check24.net/misc/click.php?pid=83873&aid=18&deep=c24bank&cat=14";

const C24_TECH_SPECS = [
  {
    kategorie: 'Echtzeitüberweisungen',
    c24: 'SEPA Instant (ISO 20022, 24/7/365)',
    altbank: 'Standard SEPA (Stapelverarbeitung 24-48h)',
    note: 'Überweisung in Echtzeit rund um die Uhr ohne Zusatzkosten.'
  },
  {
    kategorie: 'Sicherheits- & Authentifizierung',
    c24: 'Biometrie, 2FA & FIDO2 Passkey Support',
    altbank: 'SMS-TAN / ChipTAN-Leser',
    note: 'Schutz vor Phishing durch Zwei-Faktor-Authentifizierung in der App.'
  },
  {
    kategorie: 'Mobile Payment & Kartensysteme',
    c24: 'Visa Debit, Apple Pay & Google Pay',
    altbank: 'Eingeschränkte Girocard-Unterstützung',
    note: 'Kompatibel mit allen gängigen kontaktlosen Bezahlverfahren.'
  },
  {
    kategorie: 'Identifikations-Verfahren',
    c24: 'eID Online-Ausweis (NFC) & Video-Ident',
    altbank: 'Filialbesuch / PostIdent per Brief',
    note: 'Kontoeröffnung vollständig digital über das Smartphone.'
  },
  {
    kategorie: 'Guthabenverzinsung (Tagesgeld)',
    c24: '2,50 % p.a. auf Girokonto & Pockets',
    altbank: '0,00 % p.a. Verzinsung',
    note: 'Verzinsung laut aktuellem Angebot des Anbieters.'
  },
  {
    kategorie: 'Unterkonten (Sub-IBANs)',
    c24: 'Bis zu 4 Pockets mit eigener IBAN',
    altbank: 'Nicht enthalten / Gebührenpflichtig',
    note: 'Unterkonten zur Aufteilung von Miete, Steuern & Sparzielen.'
  }
];

export default function C24TechMatrixSection() {
  return (
    <section id="specs" className="py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 bg-slate-900 text-white border border-slate-700 text-xs font-extrabold px-3.5 py-1.5 rounded-full shadow-sm">
            <Cpu className="w-4 h-4 text-amber-400" />
            <span>C24 SMART MERKMALÜBERSICHT</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Technische Ausstattungsmerkmale im Überblick
          </h2>

          <p className="text-slate-600 font-medium text-base">
            Ubersicht der Merkmale des C24 Smart Girokontos im Vergleich zu traditionellen Filialbanken.
          </p>
        </div>

        {/* Matrix Table Container */}
        <div className="bg-slate-50 rounded-3xl border border-slate-200 shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[650px]">
              <thead>
                <tr className="bg-slate-900 text-white border-b border-slate-800 text-xs uppercase tracking-wider">
                  <th className="py-4 px-6 font-extrabold w-1/3">Merkmal</th>
                  <th className="py-4 px-6 font-extrabold text-amber-400 w-1/3">C24 Smart Girokonto</th>
                  <th className="py-4 px-6 font-extrabold text-slate-400 w-1/3">Klassische Filialbank</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-xs sm:text-sm">
                {C24_TECH_SPECS.map((item, index) => (
                  <tr key={index} className="hover:bg-white transition-colors">
                    <td className="py-4 px-6 font-extrabold text-slate-900">
                      <div>{item.kategorie}</div>
                      <span className="text-[11px] font-medium text-slate-500 block mt-0.5">{item.note}</span>
                    </td>
                    <td className="py-4 px-6 font-bold text-slate-900 bg-amber-50/60 border-l border-r border-amber-200/50">
                      <span className="inline-flex items-center gap-2 text-amber-950 font-extrabold">
                        <CheckCircle2 className="w-4 h-4 text-amber-700 flex-shrink-0" />
                        {item.c24}
                      </span>
                    </td>
                    <td className="py-4 px-6 font-medium text-slate-500 bg-slate-100/40">
                      <span className="inline-flex items-center gap-2 text-slate-600">
                        <XCircle className="w-4 h-4 text-slate-400 flex-shrink-0" />
                        {item.altbank}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Practical Security Guidelines */}
        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Security Guidelines */}
          <div className="bg-emerald-50/80 rounded-2xl p-6 border border-emerald-200 shadow-sm space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-emerald-700 text-white rounded-xl flex items-center justify-center shadow-md">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-black text-emerald-950">Empfohlene Nutzung</h3>
                <p className="text-xs font-bold text-emerald-800">Sicherheits-Empfehlungen</p>
              </div>
            </div>

            <ul className="space-y-3 text-xs sm:text-sm font-semibold text-slate-800">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-700 flex-shrink-0 mt-0.5" />
                <span><strong>Biometrie &amp; 2FA nutzen:</strong> Aktivieren Sie FaceID / TouchID für Ihre App-Freigaben, um unbefugten Zugriff zu verhindern.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-700 flex-shrink-0 mt-0.5" />
                <span><strong>Pockets zur Budgetierung verwenden:</strong> Richten Sie Unterkonten ein, um wiederkehrende Ausgaben gezielt zu verwalten.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-700 flex-shrink-0 mt-0.5" />
                <span><strong>Apple Pay / Google Pay aktivieren:</strong> Nutzen Sie die virtuelle Karte für kontaktloses Bezahlen mit dem Smartphone.</span>
              </li>
            </ul>
          </div>

          {/* General Guidance */}
          <div className="bg-amber-50/80 rounded-2xl p-6 border border-amber-200 shadow-sm space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-amber-600 text-slate-950 rounded-xl flex items-center justify-center shadow-md">
                <AlertTriangle className="w-6 h-6 stroke-[2.5]" />
              </div>
              <div>
                <h3 className="text-lg font-black text-amber-950">Sicherheits-Hinweise</h3>
                <p className="text-xs font-bold text-amber-900">Allgemeine Tipps beim Online-Banking</p>
              </div>
            </div>

            <ul className="space-y-3 text-xs sm:text-sm font-semibold text-slate-800">
              <li className="flex items-start gap-2.5">
                <XCircle className="w-5 h-5 text-amber-700 flex-shrink-0 mt-0.5" />
                <span><strong>Keine vertraulichen Daten weitergeben:</strong> Die C24 Bank wird Sie niemals per SMS oder E-Mail nach PINs oder Passwörtern fragen.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <XCircle className="w-5 h-5 text-amber-700 flex-shrink-0 mt-0.5" />
                <span><strong>Vorsicht bei öffentlichen WLAN-Netzen:</strong> Führen Sie sensible Transaktionen bevorzugt über gesicherte Verbindungen aus.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <XCircle className="w-5 h-5 text-amber-700 flex-shrink-0 mt-0.5" />
                <span><strong>Zugangsdaten geheim halten:</strong> Speichern Sie Zugangsdaten nicht unverschlüsselt auf dem Mobilgerät.</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Callout Banner */}
        <div className="bg-slate-900 rounded-2xl p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 border border-slate-800 shadow-xl">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-2xl font-black text-amber-400">Zum C24 Smart Girokonto</h3>
            <p className="text-slate-300 text-sm font-medium max-w-xl">
              Informieren Sie sich direkt beim Anbieter C24 Bank über Konditionen und Kontoeröffnung.
            </p>
          </div>
          <Button
            asChild
            size="lg"
            className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-extrabold px-8 py-6 rounded-xl shadow-lg border border-amber-400 text-base flex-shrink-0 focus-visible:ring-2 focus-visible:ring-amber-500"
          >
            <a href={C24_AFFILIATE_LINK} target="_blank" rel="noopener noreferrer nofollow">
              Zum C24 Angebot *
              <ArrowRight className="ml-2 w-5 h-5 stroke-[3]" />
            </a>
          </Button>
        </div>

      </div>
    </section>
  );
}
