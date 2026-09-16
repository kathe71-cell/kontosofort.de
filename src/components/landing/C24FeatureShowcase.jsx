import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { 
  CheckCircle2, ArrowRight, ExternalLink, Zap, Shield, CreditCard, Sparkles, 
  Percent, Gift, RefreshCw, Smartphone, KeyRound, Lock, Wallet, Sliders
} from "lucide-react";
import { motion } from "framer-motion";

const C24_AFFILIATE_LINK = "https://a.check24.net/misc/click.php?pid=83873&aid=18&deep=c24bank&cat=14";

const C24_PILLARS = [
  {
    id: 'pockets',
    title: 'C24 Pockets (Unterkonten)',
    icon: Wallet,
    tag: 'EIGENE IBANs',
    highlight: 'Bis zu 4 Pockets inklusive',
    desc: 'Erstellen Sie digitale Unterkonten mit eigenen deutschen IBANs. Nutzen Sie automatische Sparregeln, um Gehaltsteile oder Urlaubsbudget abzusondern.',
    features: [
      'Jedes Pocket besitzt eine vollwertige eigene IBAN',
      'Automatischer Aufrundungs-Sparer bei Kartenzahlungen',
      '0,75 % p.a. Verzinsung auch auf Pockets',
      'Karten direkt einzelnen Pockets zuweisen'
    ]
  },
  {
    id: 'cashback',
    title: 'C24 Cashback Programm',
    icon: Gift,
    tag: 'CASHBACK VORTEIL',
    highlight: 'Gutschrift bei Einkäufen',
    desc: 'Erhalten Sie automatisches Cashback bei Partnern wie CHECK24, Supermärkten, Tankstellen und Streaming-Diensten direkt auf Ihr Konto gutgeschrieben.',
    features: [
      'Automatische Erfassung ohne Punkte-Sammeln',
      'Direkte Gutschrift in Euro auf Ihr C24 Hauptkonto',
      'Monats-Übersicht aller erfassten Gutschriften',
      'Einkäufe bei ausgewählten Partnern'
    ]
  },
  {
    id: 'instant',
    title: 'SEPA Instant Überweisungen',
    icon: Zap,
    tag: 'SEPA INSTANT',
    highlight: 'Echtzeitüberweisungen 24/7',
    desc: 'Überweisungen werden im SEPA Instant Verfahren rund um die Uhr in Sekunden ausgeführt und empfangen.',
    features: [
      'SEPA Instant Überweisungen kostenfrei inklusive',
      'Echtzeit-Push-Benachrichtigung bei Buchungen',
      'Termin- & Daueraufträge flexibel steuern',
      'QR-Code & Foto-Überweisung in der C24 App'
    ]
  },
  {
    id: 'security',
    title: 'Sicherheit & eID Ausweis',
    icon: Lock,
    tag: 'BAFIN REGULIERT',
    highlight: '2FA & eID Online-Ausweis',
    desc: 'Sicherheit durch biometrische 2-Faktor-Authentifizierung. Legitimieren Sie sich per Personalausweis-NFC (eID) oder Video-Ident.',
    features: [
      'Deutscher Personalausweis per NFC mit AusweisApp',
      'Biometrisches In-App 2FA (FaceID / TouchID)'
    ]
  }
];

export default function C24FeatureShowcase() {
  const [activeTab, setActiveTab] = useState('pockets');
  const currentPillar = C24_PILLARS.find(p => p.id === activeTab) || C24_PILLARS[0];

  return (
    <section id="features" className="py-20 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-950 border border-amber-300 text-xs font-bold px-3.5 py-1.5 rounded-full shadow-sm">
            <Sparkles className="w-4 h-4 text-amber-800" />
            <span>FUNKTIONEN DES C24 SMART GIROKONTOS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Die wichtigsten Ausstattungsmerkmale auf einen Blick
          </h2>

          <p className="text-slate-600 font-medium text-base">
            Informieren Sie sich über die einzelnen Funktionen des C24 Smart Girokontos.
          </p>
        </div>

        {/* Interactive Tab Switcher */}
        <div className="flex flex-wrap justify-center gap-3">
          {C24_PILLARS.map(pillar => {
            const isActive = activeTab === pillar.id;
            return (
              <button
                key={pillar.id}
                onClick={() => setActiveTab(pillar.id)}
                className={`flex items-center gap-2 px-5 py-3 rounded-2xl text-xs font-extrabold transition-all duration-200 focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:outline-none ${
                  isActive
                    ? 'bg-slate-900 text-white shadow-lg border border-slate-900 scale-105'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200 shadow-sm'
                }`}
              >
                <pillar.icon className={`w-4 h-4 ${isActive ? 'text-amber-400' : 'text-slate-500'}`} />
                <span>{pillar.title}</span>
              </button>
            );
          })}
        </div>

        {/* Feature Detail Showcase Card */}
        <motion.div
          key={currentPillar.id}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xl grid lg:grid-cols-12 gap-8 items-center"
        >
          {/* Left Column: Details */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex flex-wrap items-center gap-3">
              <span className="bg-amber-100 text-amber-950 border border-amber-300 text-xs font-extrabold px-3 py-1 rounded-md uppercase">
                {currentPillar.tag}
              </span>
              <span className="bg-emerald-100 text-emerald-950 border border-emerald-300 text-xs font-extrabold px-3 py-1 rounded-md">
                {currentPillar.highlight}
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
              {currentPillar.title}
            </h3>

            <p className="text-slate-600 font-medium text-base leading-relaxed">
              {currentPillar.desc}
            </p>

            <div className="space-y-3 pt-2">
              {currentPillar.features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-3 text-slate-800 font-bold text-sm">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Button
                asChild
                className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-extrabold px-7 py-6 rounded-xl shadow-md border border-amber-400 text-sm focus-visible:ring-2 focus-visible:ring-amber-500"
              >
                <a href={C24_AFFILIATE_LINK} target="_blank" rel="noopener noreferrer nofollow">
                  Zum C24 Konto-Angebot *
                  <ArrowRight className="ml-2 w-4 h-4 stroke-[3]" />
                </a>
              </Button>
            </div>
          </div>

          {/* Right Column: Visual Feature Spec Card */}
          <div className="lg:col-span-5 bg-slate-900 text-white rounded-2xl p-6 sm:p-8 space-y-6 border border-slate-800 shadow-xl">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-amber-500 text-slate-950 rounded-xl flex items-center justify-center font-black">
                  C24
                </div>
                <div>
                  <h4 className="font-extrabold text-sm text-white">Smart Girokonto</h4>
                  <p className="text-[11px] font-bold text-slate-400">Deutsche IBAN</p>
                </div>
              </div>
              <span className="text-emerald-400 text-xs font-extrabold bg-slate-800 px-2.5 py-1 rounded-md border border-slate-700">
                0,00 € / Mon.
              </span>
            </div>

            <div className="space-y-3 text-xs font-semibold text-slate-300">
              <div className="flex justify-between py-1.5 border-b border-slate-800">
                <span>Tagesgeldzins:</span>
                <span className="text-amber-400 font-extrabold"><>0,75 % p.a.* <a href="https://c24.de" target="_blank" rel="noopener noreferrer">Quelle</a></></span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-slate-800">
                <span>Echtzeitüberweisung:</span>
                <span className="text-emerald-400 font-extrabold">SEPA Instant</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-slate-800">
                <span>Karten:</span>
                <span className="text-white font-extrabold">Debit‑Mastercard</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-slate-800">
                <span>Einlagensicherung:</span>
                <span className="text-white font-extrabold">100.000 € EdB</span>
              </div>
              <div className="flex justify-between py-1.5">
                <span>Legitimation:</span>
                <span className="text-emerald-400 font-extrabold">eID / Video-Ident</span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={C24_AFFILIATE_LINK}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="block text-center text-xs font-bold text-amber-400 hover:text-amber-300 underline"
              >
                * Werbelink zu CHECK24 / C24 Bank
              </a>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
