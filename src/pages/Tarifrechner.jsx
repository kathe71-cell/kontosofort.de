import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from "@/utils";
import { ArrowLeft, Shield, CheckCircle2, Calculator, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const AFFILIATE_LINK = "https://a.check24.net/misc/click.php?pid=83873&aid=18&deep=c24bank&cat=14";

export default function Tarifrechner() {
  useEffect(() => {
    document.title = "Girokonto Tarifrechner – Kostenloser Vergleich 2026 | kontosofort.de";
    
    // Set canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = "https://kontosofort.de/tarifrechner";

    // Set meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = "Unabhängiger Girokonto-Tarifrechner 2026: Vergleichen Sie kostenlose Online-Girokonten nach Gebühren, Guthabenzinsen und SEPA Instant Latenz.";

    // Load tariff calculator widget asynchronously
    const tarifScript = document.createElement('script');
    tarifScript.src = 'https://form.partner-versicherung.de/widgets/72057/tcpp-iframe-giro/giro-iframe.js';
    tarifScript.async = true;
    document.body.appendChild(tarifScript);

    return () => {
      if (tarifScript.parentNode) document.body.removeChild(tarifScript);
    };
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-amber-400 selection:text-slate-950">
      {/* Top Header */}
      <header className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex items-center justify-between">
          <a 
            href="/"
            className="inline-flex items-center gap-2 text-slate-700 hover:text-slate-950 font-bold transition-colors text-sm"
          >
            <ArrowLeft className="w-4 h-4 text-amber-600" />
            Zurück zur Startseite
          </a>

          <a href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center">
              <Shield className="w-4 h-4 text-amber-400" />
            </div>
            <span className="font-black text-slate-900">kontosofort.de</span>
          </a>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-10">
        
        {/* Title Banner */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <div className="w-14 h-14 bg-slate-900 text-amber-400 rounded-2xl flex items-center justify-center mx-auto shadow-md">
            <Calculator className="w-7 h-7" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Interaktiver Girokonto Tarifrechner
          </h1>
          <p className="text-slate-600 font-medium text-base">
            Vergleichen Sie unabhängig tagesaktuelle Kontoführungsgebühren, Guthabenzinsen und Dispositionskredite.
          </p>
        </div>

        {/* Tariff Widget Wrapper */}
        <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-10 border border-slate-200">
          <div style={{ width: "100%", minHeight: "400px" }} id="tcpp-iframe-giro"></div>
        </div>

        {/* Trust Indicators */}
        <div className="grid sm:grid-cols-3 gap-4">
          <div className="flex items-center gap-3 bg-white rounded-2xl p-4 border border-slate-200 shadow-sm">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
            <span className="text-slate-800 font-extrabold text-xs">100% Kostenloser Vergleich</span>
          </div>
          <div className="flex items-center gap-3 bg-white rounded-2xl p-4 border border-slate-200 shadow-sm">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
            <span className="text-slate-800 font-extrabold text-xs">SCHUFA‑Abfrage</span>
          </div>
          <div className="flex items-center gap-3 bg-white rounded-2xl p-4 border border-slate-200 shadow-sm">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
            <span className="text-slate-800 font-extrabold text-xs">BaFin &amp; eID Verifiziert</span>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4">
          <div className="flex flex-col items-center">
            <Button
              asChild
              size="lg"
              className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-extrabold px-8 py-6 rounded-xl shadow-md border border-amber-400 text-sm focus-visible:ring-2 focus-visible:ring-amber-500"
            >
              <a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer nofollow">
                Direkt zum C24 Smart Konto *
                <ArrowRight className="ml-2 w-4 h-4 stroke-[3]" />
              </a>
            </Button>
            <span className="text-[11px] text-slate-500 italic mt-1.5">
              * Werbelink / Partnerlink
            </span>
          </div>

          <Button
            asChild
            variant="outline"
            size="lg"
            className="bg-slate-900 hover:bg-slate-800 text-white font-bold px-6 py-6 rounded-xl border border-slate-800 text-sm"
          >
            <a href="/">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Zurück zur Startseite
            </a>
          </Button>
        </div>

      </main>
    </div>
  );
}