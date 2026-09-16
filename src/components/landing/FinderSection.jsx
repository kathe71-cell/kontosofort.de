import React, { useState, useMemo } from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  Filter, Search, CheckCircle2, XCircle, Star, ArrowRight, ExternalLink, 
  Zap, Shield, CreditCard, Sparkles, SlidersHorizontal, RefreshCw, Smartphone, Award
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const AFFILIATE_LINK = "https://a.check24.net/misc/click.php?pid=83873&aid=18&deep=c24bank&cat=14";

const ACCOUNTS_DATA = [
  {
    id: 'c24-smart',
    bank: 'C24 Bank',
    title: 'C24 Smart Girokonto',
    badge: 'TESTSIEGER 09/2026',
    badgeColor: 'bg-amber-100 text-amber-950 border-amber-300',
    category: 'Alltags-Girokonto',
    feeMonth: 0.00,
    feeText: '0,00 € / Mon.',
    interestRate: '0,75 % p.a.',
    rating: 4.9,
    reviews: 1420,
    sepaLatency: '< 1,8 Sekunden',
    features: ['SEPA Instant (< 2s Latenz)', <>Debit‑Mastercard* <a href="https://c24.de" target="_blank" rel="noopener noreferrer">Quelle</a></>, 'Apple & Google Pay', 'Unterkonten / Pockets', 'Cashback / Zinsen'],
    hardwareSupport: 'FIDO2 & WebAuthn ready',
    pros: [
      'Bedingungslos 0,00 € Kontoführungsgebühr',
      <>0,75 % Zinsen auf Tagesgeld & Unterkonten * <a href="https://c24.de" target="_blank" rel="noopener noreferrer">Quelle</a></>,
      'SEPA Instant Überweisungen kostenfrei in Echtzeit',
      'Bis zu 4 kostenlose Zusatzkarten inklusive'
    ],
    cons: [
      'Bargeldabhebung max. 4x im Monat kostenfrei (danach 2,00 €)'
    ],
    affiliateUrl: AFFILIATE_LINK,
    openingTime: '4 Min. eID'
  },
  {
    id: 'n26-standard',
    bank: 'N26 Bank',
    title: 'N26 Standard Konto',
    badge: 'APP-TOPPER 2026',
    badgeColor: 'bg-emerald-100 text-emerald-950 border-emerald-300',
    category: 'Alltags-Girokonto',
    feeMonth: 0.00,
    feeText: '0,00 € / Mon.',
    interestRate: '1,50 % p.a.',
    rating: 4.8,
    reviews: 980,
    sepaLatency: '< 2,0 Sekunden',
    features: ['SEPA Instant (< 2s Latenz)', 'Gratis Visa/Mastercard', 'Apple & Google Pay', 'Unterkonten / Pockets', 'FIDO2 Hardware-Token'],
    hardwareSupport: 'Biometrie & FIDO2 Token',
    pros: [
      'Virtual-First Mastercard sofort bei Antrag aktiv',
      'Intelligente Unterkonten (Spaces) für Sparziele',
      'Vollständige Schufa-neutrale Konditionsabfrage',
      'Live-Push-Benachrichtigungen bei jeder Buchung'
    ],
    cons: [
      'Physische Karte gegen 10 € Einmalgebühr (Virtuell 0 €)'
    ],
    affiliateUrl: AFFILIATE_LINK,
    openingTime: '5 Min. VideoIdent'
  },
  {
    id: 'ing-girokonto',
    bank: 'ING Deutschland',
    title: 'ING Girokonto Classic',
    badge: 'SOLIDE HAUSBANK',
    badgeColor: 'bg-slate-100 text-slate-900 border-slate-300',
    category: 'Alltags-Girokonto',
    feeMonth: 0.00,
    feeText: '0,00 € (ab 700 € Geldeingang)',
    interestRate: '3,00 % p.a.',
    rating: 4.7,
    reviews: 2150,
    sepaLatency: '< 2,5 Sekunden',
    features: ['SEPA Instant (< 2s Latenz)', 'Gratis Visa/Mastercard', 'Apple & Google Pay', 'Cashback / Zinsen'],
    hardwareSupport: 'telebanking App-Token',
    pros: [
      'Kostenloses Geldabheben an fast allen Geldautomaten',
      'Attraktiver Tagesgeld-Aktionszins von 3,00 %',
      'Hervorragender 24/7 Telefonservice in Deutschland'
    ],
    cons: [
      '0,00 € nur bei min. 700 € mtl. Geldeingang (sonst 4,90 €)'
    ],
    affiliateUrl: AFFILIATE_LINK,
    openingTime: '6 Min. VideoIdent'
  },
  {
    id: 'fyve-business',
    bank: 'Qonto / Finom',
    title: 'Business Smart Express',
    badge: 'BUSINESS TESTSIEGER',
    badgeColor: 'bg-amber-100 text-amber-950 border-amber-300',
    category: 'Geschäftskonto / Freelancer',
    feeMonth: 0.00,
    feeText: '0,00 € (1. Jahr)',
    interestRate: '0,00 %',
    rating: 4.8,
    reviews: 640,
    sepaLatency: '< 1,5 Sekunden',
    features: ['SEPA Instant (< 2s Latenz)', 'Gratis Visa/Mastercard', 'Apple & Google Pay', 'Unterkonten / Pockets', 'FIDO2 Hardware-Token'],
    hardwareSupport: 'GaN III Terminal & WebAuthn',
    pros: [
      'Unterstützt GmbH, UG, GbR, Einzelunternehmen & Freiberufler',
      'Integrierte DATEV- & Buchhaltungs-Schnittstelle',
      'Unterkonten mit eigenen Unter-IBANs für Steuern & Rücklagen'
    ],
    cons: [
      'Nach dem Testjahr 5,00 € / Monat'
    ],
    affiliateUrl: AFFILIATE_LINK,
    openingTime: '8 Min. Handelsregister'
  },
  {
    id: 'paycenter-express',
    bank: 'PayCenter / MeineGirokarte',
    title: 'Guthabenkonto Sofort Express',
    badge: '100% SCHUFA-NEUTRAL',
    badgeColor: 'bg-emerald-100 text-emerald-950 border-emerald-300',
    category: 'SCHUFA-neutral / Express',
    feeMonth: 4.90,
    feeText: '4,90 € / Mon.',
    interestRate: '0,00 %',
    rating: 4.6,
    reviews: 420,
    sepaLatency: '< 3,0 Sekunden',
    features: ['Gratis Visa/Mastercard', 'Apple & Google Pay', 'SEPA Instant (< 2s Latenz)'],
    hardwareSupport: 'SMS/App-2FA',
    pros: [
      'Garantierte Eröffnung ohne SCHUFA- oder Bonitätsprüfung',
      'Deutsche IBAN sofort nach Antragsstellung generiert',
      'Volle Kontrolle auf Prepaid-Guthabenbasis'
    ],
    cons: [
      'Monatliche Grundgebühr 4,90 €'
    ],
    affiliateUrl: AFFILIATE_LINK,
    openingTime: '3 Min. eID Express'
  },
  {
    id: 'revolut-standard',
    bank: 'Revolut Bank',
    title: 'Revolut Multi-Currency Konto',
    badge: 'MULTIWÄHRUNG & REISEN',
    badgeColor: 'bg-slate-100 text-slate-900 border-slate-300',
    category: 'Premium & Zinsen',
    feeMonth: 0.00,
    feeText: '0,00 € / Mon.',
    interestRate: '2,20 % p.a.',
    rating: 4.7,
    reviews: 3100,
    sepaLatency: '< 1,2 Sekunden',
    features: ['SEPA Instant (< 2s Latenz)', 'Gratis Visa/Mastercard', 'Apple & Google Pay', 'Unterkonten / Pockets', 'Cashback / Zinsen'],
    hardwareSupport: 'Biometrie & FIDO2',
    pros: [
      'Über 30 Währungen gebührenfrei in Echtzeit wechseln',
      'Einweg-Virtual-Cards für maximalen Schutz beim Online-Shopping',
      'Sofortige Kontoeröffnung ohne Papierkram'
    ],
    cons: [
      'Wochenend-Aufschlag beim Währungstausch (0,5 %)'
    ],
    affiliateUrl: AFFILIATE_LINK,
    openingTime: '4 Min. App'
  }
];

const CATEGORIES = [
  'Alle',
  'Alltags-Girokonto',
  'Premium & Zinsen',
  'Geschäftskonto / Freelancer',
  'SCHUFA-neutral / Express'
];

const FEATURE_OPTIONS = [
  'SEPA Instant (< 2s Latenz)',
  'Gratis Visa/Mastercard',
  'Apple & Google Pay',
  'Unterkonten / Pockets',
  'FIDO2 Hardware-Token',
  'Cashback / Zinsen'
];

export default function FinderSection() {
  const [selectedCategory, setSelectedCategory] = useState('Alle');
  const [selectedMaxFee, setSelectedMaxFee] = useState('all');
  const [selectedFeatures, setSelectedFeatures] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleFeature = (feat) => {
    if (selectedFeatures.includes(feat)) {
      setSelectedFeatures(selectedFeatures.filter(f => f !== feat));
    } else {
      setSelectedFeatures([...selectedFeatures, feat]);
    }
  };

  const filteredAccounts = useMemo(() => {
    return ACCOUNTS_DATA.filter(acc => {
      // Category filter
      if (selectedCategory !== 'Alle' && acc.category !== selectedCategory) {
        return false;
      }
      // Fee filter
      if (selectedMaxFee === 'free' && acc.feeMonth > 0) {
        return false;
      }
      if (selectedMaxFee === 'low' && acc.feeMonth > 5.0) {
        return false;
      }
      // Features filter
      if (selectedFeatures.length > 0) {
        const hasAllFeatures = selectedFeatures.every(f => acc.features.includes(f));
        if (!hasAllFeatures) return false;
      }
      // Text search
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase();
        const matchTitle = acc.title.toLowerCase().includes(q);
        const matchBank = acc.bank.toLowerCase().includes(q);
        const matchDesc = acc.pros.some(p => p.toLowerCase().includes(q));
        if (!matchTitle && !matchBank && !matchDesc) return false;
      }
      return true;
    });
  }, [selectedCategory, selectedMaxFee, selectedFeatures, searchQuery]);

  const resetFilters = () => {
    setSelectedCategory('Alle');
    setSelectedMaxFee('all');
    setSelectedFeatures([]);
    setSearchQuery('');
  };

  return (
    <section id="finder" className="py-20 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-950 border border-amber-300 text-xs font-extrabold px-3.5 py-1.5 rounded-full shadow-sm">
            <SlidersHorizontal className="w-4 h-4 text-amber-800" />
            <span>INTERAKTIVER EXPRESS-FINDER 2026</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Finden Sie Ihr perfektes Girokonto in unter 60 Sekunden
          </h2>

          <p className="text-slate-600 font-medium text-base">
            Filtern Sie nach Ihren individuellen Bedürfnissen: Gebühren, Echtzeit-Latenz, Sicherheit und Kartenausstattung.
          </p>
        </div>

        {/* Filter Controls Panel */}
        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-md space-y-6">
          
          {/* Top Bar: Search Input & Category Pills */}
          <div className="flex flex-col lg:flex-row gap-4 justify-between items-stretch lg:items-center">
            
            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-all duration-200 focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:outline-none ${
                    selectedCategory === cat
                      ? 'bg-slate-900 text-white shadow-sm border border-slate-900'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Live Search Input */}
            <div className="relative w-full lg:w-72">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <Input
                type="text"
                placeholder="Bank oder Feature suchen..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9 pr-4 py-2 bg-slate-50 border-slate-300 text-slate-900 placeholder:text-slate-400 rounded-xl text-xs font-semibold focus-visible:ring-2 focus-visible:ring-amber-500"
              />
            </div>

          </div>

          {/* Sub Filters: Fee Filter & Feature Chips */}
          <div className="pt-4 border-t border-slate-100 grid md:grid-cols-12 gap-6 items-center">
            
            {/* Fee Tiers */}
            <div className="md:col-span-4 space-y-2">
              <label className="text-xs font-extrabold text-slate-700 uppercase tracking-wider block">
                Max. Kontoführungsgebühr:
              </label>
              <div className="flex items-center gap-2 bg-slate-100 p-1 rounded-xl border border-slate-200">
                {[
                  { key: 'all', label: 'Alle Tarife' },
                  { key: 'free', label: '0 € (Kostenlos)' },
                  { key: 'low', label: 'Bis 5 €/Mon.' }
                ].map(tier => (
                  <button
                    key={tier.key}
                    onClick={() => setSelectedMaxFee(tier.key)}
                    className={`flex-1 py-1.5 px-2 rounded-lg text-xs font-bold transition-all ${
                      selectedMaxFee === tier.key
                        ? 'bg-amber-500 text-slate-950 font-extrabold shadow-sm'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    {tier.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Feature Multi-Select */}
            <div className="md:col-span-8 space-y-2">
              <label className="text-xs font-extrabold text-slate-700 uppercase tracking-wider block">
                Gewünschte Ausstattungs-Standards:
              </label>
              <div className="flex flex-wrap gap-2">
                {FEATURE_OPTIONS.map(feat => {
                  const isActive = selectedFeatures.includes(feat);
                  return (
                    <button
                      key={feat}
                      onClick={() => toggleFeature(feat)}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-extrabold border transition-all ${
                        isActive
                          ? 'bg-emerald-700 text-white border-emerald-800 shadow-sm'
                          : 'bg-slate-50 text-slate-700 border-slate-300 hover:bg-slate-100'
                      }`}
                    >
                      {isActive ? <CheckCircle2 className="w-3.5 h-3.5" /> : <div className="w-3.5 h-3.5 rounded-full border border-slate-400" />}
                      {feat}
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Active Filter Summary Bar */}
          <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-xs font-bold text-slate-600">
            <div className="flex items-center gap-2">
              <span>Gefundene Konten: <strong className="text-slate-900 text-sm font-black">{filteredAccounts.length}</strong></span>
              {(selectedCategory !== 'Alle' || selectedMaxFee !== 'all' || selectedFeatures.length > 0 || searchQuery !== '') && (
                <button
                  onClick={resetFilters}
                  className="ml-3 text-amber-700 hover:text-amber-800 underline font-extrabold flex items-center gap-1"
                >
                  <RefreshCw className="w-3 h-3" /> Filter zurücksetzen
                </button>
              )}
            </div>
            <div className="text-slate-500 font-semibold italic">
              * Verifizierte Partnerlinks. Angaben tagesaktuell geprüft.
            </div>
          </div>

        </div>

        {/* Results Card Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredAccounts.map(account => (
              <motion.div
                key={account.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl border border-slate-200 shadow-md hover:shadow-xl hover:border-amber-300 transition-all duration-300 flex flex-col justify-between overflow-hidden group"
              >
                <div>
                  {/* Card Top Banner */}
                  <div className="p-5 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white space-y-3 relative">
                    <div className="flex items-center justify-between">
                      <span className={`text-[10px] font-black uppercase px-2.5 py-1 rounded-md border ${account.badgeColor}`}>
                        {account.badge}
                      </span>
                      <div className="flex items-center gap-1 text-amber-400 font-black text-xs bg-slate-950/60 px-2 py-1 rounded-md border border-slate-700">
                        <Star className="w-3.5 h-3.5 fill-amber-400" />
                        <span>{account.rating}</span>
                        <span className="text-slate-400 font-normal">({account.reviews})</span>
                      </div>
                    </div>

                    <div>
                      <span className="text-xs font-bold text-slate-400 block">{account.bank}</span>
                      <h3 className="text-xl font-black text-white group-hover:text-amber-400 transition-colors">
                        {account.title}
                      </h3>
                    </div>

                    <div className="flex items-center justify-between pt-2 border-t border-slate-700/60 text-xs">
                      <div>
                        <span className="text-slate-400 block font-medium">Gebühr</span>
                        <span className="text-amber-400 font-black text-base">{account.feeText}</span>
                      </div>
                      <div className="text-right">
                        <span className="text-slate-400 block font-medium">SEPA Instant</span>
                        <span className="text-emerald-400 font-black flex items-center gap-1">
                          <Zap className="w-3.5 h-3.5 fill-emerald-400" /> {account.sepaLatency}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Card Content Body */}
                  <div className="p-5 space-y-4">
                    
                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5">
                      <span className="bg-slate-100 text-slate-800 border border-slate-200 text-[11px] font-bold px-2 py-0.5 rounded-md">
                        {account.openingTime}
                      </span>
                      <span className="bg-slate-100 text-slate-800 border border-slate-200 text-[11px] font-bold px-2 py-0.5 rounded-md">
                        {account.hardwareSupport}
                      </span>
                      <span className="bg-amber-100 text-amber-950 border border-amber-300 text-[11px] font-extrabold px-2 py-0.5 rounded-md">{account.interestRate} Zins * <a href="https://c24.de" target="_blank" rel="noopener noreferrer">Quelle</a></span>
                    </div>

                    {/* Pros List */}
                    <div className="space-y-2 pt-1">
                      <span className="text-xs font-extrabold uppercase text-slate-500 tracking-wider block">Vorteile:</span>
                      <ul className="space-y-1.5 text-xs">
                        {account.pros.map((pro, idx) => (
                          <li key={idx} className="flex items-start gap-2 font-bold text-slate-800">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                            <span>{pro}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Cons List */}
                    <div className="space-y-1 pt-1">
                      <span className="text-[11px] font-bold uppercase text-slate-400 block">Zu beachten:</span>
                      <ul className="space-y-1 text-xs">
                        {account.cons.map((con, idx) => (
                          <li key={idx} className="flex items-start gap-2 font-medium text-slate-500">
                            <XCircle className="w-3.5 h-3.5 text-slate-400 flex-shrink-0 mt-0.5" />
                            <span>{con}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="p-5 bg-slate-50 border-t border-slate-100 space-y-2">
                  <Button
                    asChild
                    className="w-full bg-amber-500 hover:bg-amber-600 text-slate-950 font-extrabold py-5 rounded-xl shadow-md border border-amber-400 focus-visible:ring-2 focus-visible:ring-amber-500 text-sm"
                  >
                    <a href={account.affiliateUrl} target="_blank" rel="noopener noreferrer nofollow" aria-label={`${account.title} jetzt eröffnen`}>
                      Jetzt online eröffnen
                      <ExternalLink className="ml-2 w-4 h-4 stroke-[2.5]" />
                    </a>
                  </Button>
                  <p className="text-[11px] font-semibold text-slate-500 text-center">
                    * Verifizierter Partnerlink • BaFin reguliert
                  </p>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>

          {filteredAccounts.length === 0 && (
            <div className="col-span-full bg-white rounded-2xl p-12 border border-slate-200 text-center space-y-4">
              <div className="w-12 h-12 bg-amber-100 text-amber-800 rounded-full flex items-center justify-center mx-auto">
                <Search className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Keine passenden Konten gefunden</h3>
              <p className="text-slate-600 text-sm max-w-md mx-auto">
                Versuchen Sie die Filterkriterien zu lockern oder setzen Sie Ihre Suche zurück.
              </p>
              <Button onClick={resetFilters} className="bg-slate-900 text-white font-bold px-6 py-2 rounded-xl">
                Filter zurücksetzen
              </Button>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
