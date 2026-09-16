import React from 'react';
import { ShieldCheck, Lock, Award, Building2, CheckCircle2, FileCheck } from "lucide-react";

export default function TrustSection() {
  const trustBadges = [
    {
      icon: ShieldCheck,
      title: "BaFin Lizenziert",
      desc: "Regulierte deutsche Kreditinstitute mit Vollbanklizenz."
    },
    {
      icon: Lock,
      title: "100.000 € Schutz",
      desc: "Gesetzliche europäische Einlagensicherung pro Kunde."
    },
  ];

  return (
    <section className="py-16 bg-slate-900 text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-amber-400 text-xs font-black uppercase tracking-widest block">
            SICHERHEIT &amp; TRANSPARENZ
          </span>
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
            Höchste deutsche Banken- &amp; Datenschutz-Standards
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {trustBadges.map((badge, idx) => (
            <div 
              key={idx} 
              className="bg-slate-800/80 p-5 rounded-2xl border border-slate-700/80 flex flex-col items-center text-center space-y-3 hover:border-amber-500/50 transition-colors"
            >
              <div className="w-12 h-12 bg-amber-500/20 text-amber-400 rounded-xl flex items-center justify-center border border-amber-500/30">
                <badge.icon className="w-6 h-6 stroke-[2.2]" />
              </div>
              <h3 className="font-extrabold text-sm text-white">{badge.title}</h3>
              <p className="text-xs font-medium text-slate-400 leading-relaxed">{badge.desc}</p>
            </div>
          ))}
        </div>

        <div className="pt-6 border-t border-slate-800 flex flex-wrap justify-center items-center gap-6 text-xs text-slate-400 font-semibold text-center">
          <span className="flex items-center gap-1.5 text-slate-300">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Methodik: Vergleich basierend auf öffentlich verfügbaren Produktdaten (Stand 2026‑09‑15, Quelle C24 Smart‑Produkt‑Seite).
          </span>
          <span className="text-slate-700">•</span>
          <span className="flex items-center gap-1.5 text-slate-300">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Kostenlose Online-Beantragung
          </span>
          <span className="text-slate-700">•</span>
          <span className="flex items-center gap-1.5 text-slate-300">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Keine Mindestvertragslaufzeit
          </span>
        </div>

      </div>
    </section>
  );
}