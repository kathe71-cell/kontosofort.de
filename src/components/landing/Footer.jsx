import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from "@/utils";
import { Shield, Lock, ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 text-xs border-t border-slate-800 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-slate-900 border border-slate-700 rounded-xl flex items-center justify-center">
                <Shield className="w-5 h-5 text-amber-400" />
              </div>
              <span className="text-xl font-black tracking-tight text-white">
                kontosofort<span className="text-emerald-400">.de</span>
              </span>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed max-w-md">
              Unabhängiges Informationsportal zum C24 Smart Girokonto. Wir informieren sachlich über Konditionen, 
              SEPA-Instant Überweisungen, Tagesgeld-Zinsen und digitale Kontoeröffnung in Deutschland.
            </p>


          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="font-extrabold text-white text-sm tracking-wider uppercase">Navigation</h4>
            <ul className="space-y-2 font-medium">
              <li>
                <a href="#features" className="hover:text-amber-400 transition-colors">Highlights</a>
              </li>
              <li>
                <a href="#specs" className="hover:text-amber-400 transition-colors">Technische Specs</a>
              </li>
              <li>
                <a href="#vorteile" className="hover:text-amber-400 transition-colors">Vorteile</a>
              </li>
              <li>
                <Link to={createPageUrl('Tarifrechner')} className="hover:text-amber-400 transition-colors">Ersparnisrechner</Link>
              </li>
              <li>
                <a href="#faq" className="hover:text-amber-400 transition-colors">FAQ</a>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div className="space-y-3">
            <h4 className="font-extrabold text-white text-sm tracking-wider uppercase">Rechtliches</h4>
            <ul className="space-y-2 font-medium">
              <li>
                <Link to={createPageUrl('Impressum')} className="hover:text-amber-400 transition-colors">Impressum</Link>
              </li>
              <li>
                <Link to={createPageUrl('Datenschutz')} className="hover:text-amber-400 transition-colors">Datenschutzerklärung</Link>
              </li>
              <li>
                <span className="text-slate-500 font-normal">Aufsichtsbehörde der Partnerbank: BaFin</span>
              </li>
              <li>
                <span className="text-slate-500 font-normal">Einlagensicherung: EdB (100.000 €)</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Legal Disclosure Box */}
        <div className="bg-slate-900/90 rounded-2xl p-6 border border-slate-800 space-y-2">
          <h4 className="font-bold text-amber-400 text-xs flex items-center gap-1.5">
            * Transparenzhinweis &amp; Werbe-Offenlegung (UWG / Telemediengesetz)
          </h4>
          <p className="text-slate-400 text-[11px] leading-relaxed">
            kontosofort.de ist ein unabhängiges Informationsportal und keine Bank oder Finanzdienstleistungsinstitut. 
            Links mit einem Sternchen (*) oder Schaltflächen wie „Zum Angebot“ sind Werbelinks (Affiliate-Links). 
            Wenn Sie über diese Links ein Girokonto bei der C24 Bank GmbH abschließen, erhalten wir unter Umständen eine Vermittlungsprovision vom Partner (z. B. CHECK24 / C24 Bank). 
            Für Sie entstehen dadurch keinerlei zusätzliche Kosten oder veränderte Konditionen. Alle Angaben ohne Gewähr; maßgeblich sind stets die tagesaktuellen Vertragsbedingungen auf der Website der C24 Bank GmbH.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] text-slate-500">
          <p>© 2026 kontosofort.de – Alle Rechte vorbehalten.</p>
        </div>

      </div>
    </footer>
  );
}