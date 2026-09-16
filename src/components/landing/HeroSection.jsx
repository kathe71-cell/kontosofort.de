import React from 'react';
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, Clock, Shield, CreditCard, CheckCircle2, Zap, Lock, Sparkles, Percent, Gift
} from "lucide-react";
import { motion } from "framer-motion";

const C24_AFFILIATE_LINK = "https://a.check24.net/misc/click.php?pid=83873&aid=18&deep=c24bank&cat=14";

export default function HeroSection() {
  const c24Highlights = [
    { icon: Clock, title: "Online-Legitimation", desc: "Per eID Online-Ausweis oder Video-Ident" },
    { icon: Zap, title: "SEPA Instant", desc: "Kostenfreie Echtzeitüberweisungen 24/7" },
    { icon: Percent, title: "0,75 % p.a. Zinsen", desc: "Verzinsung auf Tagesgeld & Pockets" },
    { icon: Shield, title: "Einlagensicherung", desc: "Einlagensicherung über die EdB (bis 100.000 €)" }
  ];

  return (
    <section id="home" className="relative pt-32 pb-16 lg:pt-36 lg:pb-24 bg-gradient-to-b from-slate-100/80 via-slate-50 to-white overflow-hidden border-b border-slate-200/60">
      {/* Background Subtle Tech Shapes */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: C24 Hero Messaging */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Factual Top Badge */}
            <div className="inline-flex items-center gap-2 bg-amber-100 border border-amber-300 px-3.5 py-1.5 rounded-full text-amber-950 text-xs font-bold shadow-sm">
              <Shield className="w-4 h-4 text-amber-800" />
              <span>KOSTENLOSES ONLINE-GIROKONTO • C24 SMART TARIF</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1]">
              C24 Smart Girokonto –{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-emerald-600 to-slate-900">
                0,00 € Kontoführung, 0,75 % Zinsen &amp; Debit‑Mastercard
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-700 font-medium leading-relaxed max-w-2xl">
              Das kostenlose Online-Girokonto der C24 Bank mit Debit‑Mastercard, 
              Tagesgeld-Zinsen, Unterkonten mit eigener IBAN und automatischer Cashback-Funktion bei Partnern.
            </p>

            {/* Feature Highlights Grid */}
            <div className="grid sm:grid-cols-2 gap-3 pt-2 pb-2">
              {c24Highlights.map((item, index) => (
                <div key={index} className="flex items-start gap-3 bg-white p-3.5 rounded-xl border border-slate-200 shadow-sm hover:border-amber-300 transition-colors">
                  <div className="p-2 bg-amber-100 rounded-lg text-slate-950 flex-shrink-0">
                    <item.icon className="w-4 h-4 text-amber-900" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">{item.title}</h3>
                    <p className="text-xs font-semibold text-slate-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button
                asChild
                size="lg"
                className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-extrabold px-8 py-7 text-lg rounded-xl shadow-lg border border-amber-400 hover:scale-[1.02] transition-all focus-visible:ring-2 focus-visible:ring-amber-500"
              >
                <a href={C24_AFFILIATE_LINK} target="_blank" rel="noopener noreferrer nofollow" aria-label="Zum C24 Smart Girokonto Angebot">
                  Zum C24 Smart Girokonto *
                  <ArrowRight className="ml-2 w-5 h-5 stroke-[3]" />
                </a>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="bg-slate-900 hover:bg-slate-800 text-white font-bold px-7 py-7 text-base rounded-xl border border-slate-700 focus-visible:ring-2 focus-visible:ring-amber-500"
              >
                <a href="#features" onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
                }}>
                  Funktionen im Detail
                </a>
              </Button>
            </div>

            {/* Trust Notes */}
            <div className="flex flex-wrap items-center gap-4 text-xs font-bold text-slate-600 pt-2 border-t border-slate-200">
              <span className="flex items-center gap-1.5 text-slate-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" /> BaFin Vollbanklizenz (C24 Bank GmbH)
              </span>
              <span className="text-slate-300">•</span>
              <span className="flex items-center gap-1.5 text-slate-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Bei der Kontoeröffnung wird eine SCHUFA‑Abfrage durchgeführt, um die Bonität zu prüfen. * <a href="https://hilfe.c24.de/hc/de/articles/11313979448722-Wann-erfolgt-eine-Datenübermittlung-an-die-SCHUFA" target="_blank" rel="noopener noreferrer">Quelle</a>
              </span>
              <span className="text-slate-300">•</span>
              <span className="text-slate-500 italic">* Werbelink / Partnerlink zu C24</span>
            </div>
          </motion.div>

          {/* Right Column: Factual C24 Card & Spec Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-5"
          >
            <div className="relative">
              {/* Outer Card Container */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xl space-y-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-400/20 rounded-bl-full pointer-events-none" />

                {/* Card Header */}
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-slate-900 rounded-2xl flex items-center justify-center text-amber-400 shadow-inner">
                      <CreditCard className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h2 className="font-black text-slate-900 text-lg">C24 Smart</h2>
                        <span className="bg-emerald-100 text-emerald-950 border border-emerald-300 text-[10px] font-bold px-2 py-0.5 rounded-md">0,00 € TARIF</span>
                      </div>
                      <p className="text-xs font-bold text-slate-500">C24 Bank GmbH (Frankfurt am Main)</p>
                    </div>
                  </div>
                </div>

                {/* Core Specifications */}
                <div className="space-y-3">
                  {[
                    { label: "Kontoführungsgebühr", val: "0,00 € / Monat", highlight: true },
                    { label: "Tagesgeld-Zinsen", val: <>0,75 % p.a. inklusive * <a href="https://c24.de" target="_blank" rel="noopener noreferrer">Quelle</a></>, highlight: true },
                    { label: "Echtzeit-Überweisung", val: "SEPA Instant inklusive", highlight: false },
                    { label: "Gratiskarten", val: "Debit‑Mastercard inklusive", highlight: false },
                    { label: "Cashback Programm", val: <>Basis‑Cashback 0,05 % (optional Aktions‑Cashback bis zu 2,5 % * <a href="https://www.c24.de/preise" target="_blank" rel="noopener noreferrer">Quelle</a>)</>, highlight: true },
                    { label: "Sicherheit & Auth", val: "Biometrie & 2-Faktor-Auth", highlight: false }
                  ].map((spec, i) => (
                    <div key={i} className="flex items-center justify-between text-sm py-1.5 border-b border-slate-100 last:border-0">
                      <span className="font-bold text-slate-700 flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                        {spec.label}
                      </span>
                      <span className={`font-extrabold text-xs px-2.5 py-1 rounded-md ${
                        spec.highlight ? 'bg-amber-100 text-slate-950 border border-amber-300' : 'bg-slate-100 text-slate-900'
                      }`}>
                        {spec.val}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Quick Action Box */}
                <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200 space-y-3">
                  <div className="flex items-center justify-between text-xs font-bold text-slate-700">
                    <span>Legitimation:</span>
                    <span className="text-emerald-700 font-extrabold flex items-center gap-1">
                      <Sparkles className="w-3.5 h-3.5" /> eID Online-Ausweis &amp; Video-Ident
                    </span>
                  </div>
                  <Button
                    asChild
                    className="w-full bg-amber-500 hover:bg-amber-600 text-slate-950 font-extrabold py-5 rounded-xl text-sm shadow-md border border-amber-400 focus-visible:ring-2 focus-visible:ring-amber-500"
                  >
                    <a href={C24_AFFILIATE_LINK} target="_blank" rel="noopener noreferrer nofollow">
                      Zum Angebot der C24 Bank *
                      <ArrowRight className="ml-2 w-4 h-4 stroke-[3]" />
                    </a>
                  </Button>
                </div>

              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}