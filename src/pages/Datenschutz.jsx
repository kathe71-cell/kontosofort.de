import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Shield, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { createPageUrl } from "@/utils";

export default function Datenschutz() {
  useEffect(() => {
    document.title = "Datenschutzerklärung (DSGVO) | kontosofort.de";
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = "https://kontosofort.de/datenschutz";

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
              <Lock className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-3xl font-black text-slate-900">Datenschutzerklärung</h1>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Muster-Datenschutzerklärung nach DSGVO &amp; TDDDG</p>
            </div>
          </div>

          <div className="space-y-8 text-slate-700 font-medium text-sm leading-relaxed">
            
            <section className="space-y-3">
              <h2 className="text-xl font-black text-slate-900">1. Datenschutz auf einen Blick</h2>
              <h3 className="text-base font-extrabold text-slate-800">Allgemeine Hinweise</h3>
              <p>
                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, 
                wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. 
                Wir verzichten konsequent auf das Einbinden von Drittanbieter-Schriftarten (wie Google Fonts) über externe CDNs, 
                um jegliche Übertragung von IP-Adressen in Drittstaaten vollständig zu unterbinden.
              </p>
            </section>

            <section className="space-y-3 bg-slate-50 p-6 rounded-2xl border border-slate-200">
              <h2 className="text-xl font-black text-slate-900">2. Verantwortlicher</h2>
              <p className="text-slate-800 font-semibold">
                Jens Kathe – vollständige Anschrift und Kontaktdaten siehe <Link to={createPageUrl('Impressum')} className="text-amber-700 underline">Impressum</Link>.<br /><br />
                Telefon: +49 178 6652623<br />
                E-Mail: <a href="mailto:jens@kathe.org" className="text-amber-700 underline">jens@kathe.org</a>
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-black text-slate-900">3. Datenerfassung auf unserer Website</h2>
              
              <h3 className="text-base font-extrabold text-slate-800">Server-Log-Dateien</h3>
              <p>
                Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, 
                die Ihr Browser automatisch an uns übermittelt. Dies sind:
              </p>
              <ul className="list-disc list-inside space-y-1 text-slate-700 font-semibold pl-2">
                <li>Browsertyp und Browserversion</li>
                <li>Verwendetes Betriebssystem</li>
                <li>Referrer URL</li>
                <li>Hostname des zugreifenden Rechners</li>
                <li>Uhrzeit der Serveranfrage</li>
                <li>IP-Adresse (anonymisiert)</li>
              </ul>
              <p>
                Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. Grundlagen für die Datenverarbeitung ist Art. 6 Abs. 1 lit. f DSGVO.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-black text-slate-900">4. Partnerlinks &amp; Affiliate-Links</h2>
              <p>
                Wir binden auf unserer Website Links zu Partnerbanken und Finanzdienstleistern ein (z. B. CHECK24, C24 Bank, N26). 
                Beim Anklicken dieser Links werden Sie auf die Website des jeweiligen Anbieters weitergeleitet. Es werden erst dann Daten beim Partner verarbeitet, 
                wenn Sie aktiv auf den entsprechenden Button klicken. Die Abrechnung erfolgt über anonyme Referrer-IDs (PID/AID) ohne Speicherung sensibler Inhaltsdaten.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-black text-slate-900">5. Ihre Rechte (Auskunft, Löschung, Widerruf)</h2>
              <p>
                Sie haben jederzeit im Rahmen der geltenden gesetzlichen Bestimmungen das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, 
                deren Herkunft und Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung oder Löschung dieser Daten. 
                Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden.
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