import React from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  CheckCircle2, ArrowRight, Building2, Laptop, Clock, XCircle, Shield
} from "lucide-react";
import { motion } from "framer-motion";

const C24_AFFILIATE_LINK = "https://a.check24.net/misc/click.php?pid=83873&aid=18&deep=c24bank&cat=14";

const comparisonData = [
  {
    feature: "Kontoführungsgebühr",
    c24: "0,00 € / Monat",
    filiale: "5,90 € – 12,50 € / Monat",
    c24Win: true
  },
  {
    feature: "Tagesgeld-Verzinsung",
    c24: "2,50 % p.a. inklusive",
    filiale: "0,00 % / Minimalverzinsung",
    c24Win: true
  },
  {
    feature: "SEPA Instant Überweisungen",
    c24: "Kostenfrei rund um die Uhr",
    filiale: "Stapelverarbeitung (24–48h)",
    c24Win: true
  },
  {
    feature: "Digitales Ident-Verfahren",
    c24: "eID Online-Ausweis & Video-Ident",
    filiale: "Filialtermin oder Brief-PostIdent",
    c24Win: true
  },
  {
    feature: "Unterkonten mit eigener IBAN",
    c24: "Bis zu 4 Pockets inklusive",
    filiale: "Nicht enthalten / Aufpreis",
    c24Win: true
  },
  {
    feature: "Cashback Programm",
    c24: "Bis zu 10 % Cashback bei Partnern",
    filiale: "Kein Cashback",
    c24Win: true
  }
];

export default function ComparisonSection() {
  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-amber-950 font-extrabold text-xs uppercase tracking-wider bg-amber-100 border border-amber-300 px-3 py-1 rounded-full">
            MERKMALÜBERSICHT
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            C24 Smart Girokonto im Gegenüberstellungsvergleich
          </h2>
        </div>

        <div className="bg-white rounded-3xl shadow-lg border border-slate-200 overflow-hidden">
          <div className="grid grid-cols-12 bg-slate-900 text-white font-extrabold text-xs uppercase tracking-wider py-4 px-6">
            <div className="col-span-5 sm:col-span-4 text-slate-300">Merkmal</div>
            <div className="col-span-4 sm:col-span-4 text-amber-400 flex items-center gap-2">
              <Laptop className="w-4 h-4 text-amber-400" />
              <span>C24 Smart Girokonto</span>
              <span className="hidden sm:inline bg-amber-500 text-slate-950 text-[10px] font-extrabold px-2 py-0.5 rounded">C24 SMART</span>
            </div>
            <div className="col-span-3 sm:col-span-4 text-slate-400 flex items-center gap-2">
              <Building2 className="w-4 h-4 text-slate-400" />
              <span>Klassische Filialbank</span>
            </div>
          </div>

          <div className="divide-y divide-slate-200 text-xs sm:text-sm">
            {comparisonData.map((row, idx) => (
              <div key={idx} className="grid grid-cols-12 p-6 items-center hover:bg-slate-50 transition-colors">
                <div className="col-span-5 sm:col-span-4 font-black text-slate-900">
                  {row.feature}
                </div>
                <div className="col-span-4 sm:col-span-4 font-extrabold text-amber-950 flex items-center gap-2 bg-amber-50/70 p-2.5 rounded-lg border border-amber-200/70">
                  <CheckCircle2 className="w-4 h-4 text-amber-700 flex-shrink-0" />
                  <span>{row.c24}</span>
                </div>
                <div className="col-span-3 sm:col-span-4 font-medium text-slate-500 flex items-center gap-2">
                  <XCircle className="w-4 h-4 text-slate-400 flex-shrink-0" />
                  <span>{row.filiale}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="p-6 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs font-semibold text-slate-600">
              Informieren Sie sich direkt bei der C24 Bank über die Kontoeröffnung.
            </p>
            <Button
              asChild
              className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-extrabold px-6 py-5 rounded-xl text-xs shadow-md border border-amber-400 focus-visible:ring-2 focus-visible:ring-amber-500"
            >
              <a href={C24_AFFILIATE_LINK} target="_blank" rel="noopener noreferrer nofollow">
                Zum C24 Angebot *
                <ArrowRight className="ml-1.5 w-4 h-4 stroke-[3]" />
              </a>
            </Button>
          </div>
        </div>

      </div>
    </section>
  );
}