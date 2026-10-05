import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Shield, Mail, MapPin, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Impressum() {
  useEffect(() => {
    document.title = "Impressum | kontosofort.de";
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = "https://kontosofort.de/impressum";

    return () => {
      if (canonical) canonical.href = "https://kontosofort.de/";
    };
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-amber-400 selection:text-slate-950">
      {/* Header */}
      <header className="bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex items-center justify-between">
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

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="bg-white rounded-3xl shadow-xl border border-slate-200 p-8 md:p-12 space-y-8">
          
          <div className="flex items-center gap-4 pb-6 border-b border-slate-200">
            <div className="w-12 h-12 bg-slate-900 text-amber-400 rounded-2xl flex items-center justify-center shadow-md">
              <Shield className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-3xl font-black text-slate-900">Impressum</h1>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Angaben gemäß § 5 DDG (vormals § 5 TMG)</p>
            </div>
          </div>

          <div className="space-y-8 text-slate-700 font-medium text-sm leading-relaxed">
            
            <section className="space-y-3">
              <h2 className="text-xl font-black text-slate-900">Anbieter der Website</h2>
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 space-y-2">
                <p className="text-base font-black text-slate-900">Jens Kathe</p>
                <div className="flex items-start gap-2 text-slate-700 font-semibold">
                  <MapPin className="w-4 h-4 text-amber-600 mt-1 flex-shrink-0" />
                  <span>
                    Hansastraße 6<br />
                    34119 Kassel<br />
                    Deutschland
                  </span>
                </div>
              </div>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-black text-slate-900">Kontaktmöglichkeiten</h2>
              <div className="grid sm:grid-cols-2 gap-4">

                <div className="flex items-center gap-3 bg-slate-50 p-4 rounded-xl border border-slate-200">
                  <Mail className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                  <div>
                    <span className="text-xs font-bold text-slate-500 block uppercase">E-Mail</span>
                    <a href="mailto:info@karat.info" className="font-extrabold text-slate-900 hover:text-emerald-600">
                      info@karat.info
                    </a>
                  </div>
                </div>
              </div>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-black text-slate-900">Redaktionell verantwortlich</h2>
              <p className="font-semibold text-slate-800">
                Jens Kathe<br />
                Hansastraße 6<br />
                34119 Kassel
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-black text-slate-900">EU-Streitschlichtung</h2>
              <p>
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
                <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="ml-1 text-amber-700 underline font-bold">
                  https://ec.europa.eu/consumers/odr/
                </a>. 
                Unsere E-Mail-Adresse finden Sie oben im Impressum. Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </section>

          </div>

          <div className="pt-6 border-t border-slate-200 text-center">
            <Button
              asChild
              className="bg-slate-900 hover:bg-slate-800 text-white font-bold px-8 py-6 rounded-xl text-sm"
            >
              <a href="/">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Zurück zur Startseite *
              </a>
            </Button>
            <span className="text-slate-500 italic">
              * Werbelink / Partnerlink https://a.check24.net/misc/click.php?pid=83873&aid=18&deep=c24bank&cat=14
            </span>
          </div>

        </div>
      </main>
    </div>
  );
}