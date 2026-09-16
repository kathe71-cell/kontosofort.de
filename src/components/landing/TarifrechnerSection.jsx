import React, { useState } from 'react';
import { Calculator, ArrowRight, CheckCircle2, Sparkles, TrendingUp, Percent, Gift, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";

const C24_AFFILIATE_LINK = "https://a.check24.net/misc/click.php?pid=83873&aid=18&deep=c24bank&cat=14";

export default function TarifrechnerSection() {
  const [oldFee, setOldFee] = useState(9.90);
  const [savingsBalance, setSavingsBalance] = useState(5000);
  const [showCashback, setShowCashback] = useState(false);
  const [cardSpend, setCardSpend] = useState(2000);

  // Calculations (illustrative sample calculation):
  const feeSavings = oldFee * 12;
  const interestEarned = savingsBalance * 0.0075;
  const cashbackEarned = showCashback ? cardSpend * 0.025 * 12 : cardSpend * 0.0005 * 12;

  const totalBenefit = Math.round(feeSavings + interestEarned + cashbackEarned);

  return (
    <section id="tarifrechner" className="py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-950 border border-amber-300 text-xs font-bold px-3.5 py-1.5 rounded-full shadow-sm">
            <Calculator className="w-4 h-4 text-amber-800" />
            <span>BEISPIELHAFTER ERSPARNIS- &amp; ZINSRECHNER</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Mögliche Ersparnisse &amp; Zinsvorteile berechnen
          </h2>

          <p className="text-slate-600 font-medium text-base">
            Beispielhafte Modellrechnung auf Basis von 0,00 € Kontoführungsgebühr, 0,75 % p.a. * <a href="https://c24.de" target="_blank" rel="noopener noreferrer">Quelle</a> Tagesgeld‑Zinsen und (optional) C24 Cashback.
          </p>
        </div>

        {/* Calculator Card */}
        <div className="bg-slate-50 rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl max-w-4xl mx-auto grid md:grid-cols-12 gap-8 items-center">
          
          {/* Controls Left Column */}
          <div className="md:col-span-7 space-y-6">
            
            {/* Slider 1: Old Fee */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-sm font-bold text-slate-900">
                <span>Bisherige Kontoführungsgebühr:</span>
                <span className="bg-slate-900 text-amber-400 px-3 py-1 rounded-lg text-sm font-extrabold">{oldFee.toFixed(2)} € / Mon.</span>
              </div>
              <Slider
                value={[oldFee]}
                min={0}
                max={20}
                step={0.50}
                onValueChange={(val) => setOldFee(val[0])}
                className="py-2"
              />
              <div className="flex justify-between text-[11px] font-bold text-slate-500">
                <span>0,00 €</span>
                <span>10,00 €</span>
                <span>20,00 €</span>
              </div>
            </div>

              {/* Slider 2: Durchschnittlicher Kontostand (Zinsen) */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-sm font-bold text-slate-900">
                  <span>Durchschnittlicher Kontostand (0,75 % p.a. Zinsen):</span>
                  <span className="bg-slate-900 text-emerald-400 px-3 py-1 rounded-lg text-sm font-extrabold">{savingsBalance.toLocaleString('de-DE')} €</span>
                </div>
                <Slider
                  value={[savingsBalance]}
                  min={0}
                  max={25000}
                  step={500}
                  onValueChange={(val) => setSavingsBalance(val[0])}
                  className="py-2"
                />
                <div className="flex justify-between text-[11px] font-bold text-slate-500">
                  <span>0 €</span>
                  <span>10.000 €</span>
                  <span>25.000 €</span>
                </div>
              </div>

              {/* Slider 3: Monthly Card Payments */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-sm font-bold text-slate-900">
                  <span>Monatliche Kartenzahlungen (0,05 % Basis‑Cashback, bis zu 2,5 % Aktions‑Cashback * <a href="https://c24.de" target="_blank" rel="noopener noreferrer">Quelle</a>)</span>
                  <span className="bg-slate-900 text-emerald-400 px-3 py-1 rounded-lg text-sm font-extrabold">{cardSpend.toLocaleString('de-DE')} €</span>
                </div>
                <Slider
                  value={[cardSpend]}
                  min={0}
                  max={10000}
                  step={100}
                  onValueChange={(val) => setCardSpend(val[0])}
                  className="py-2"
                />
                <div className="flex justify-between text-[11px] font-bold text-slate-500">
                  <span>0 €</span>
                  <span>10.000 €</span>
                  <span>25.000 €</span>
                </div>
              </div>

            {/* Cashback Toggle */}
            <div className="flex items-center space-x-2 mb-4">
              <Switch id="cashback-toggle" checked={showCashback} onCheckedChange={setShowCashback} />
              <label htmlFor="cashback-toggle" className="text-sm font-medium text-slate-900">
                Aktions‑Cashback (bis zu 2,5 %) * <a href="https://c24.de" target="_blank" rel="noopener noreferrer">Quelle</a>
              </label>
            </div>

            <div className="p-4 bg-white rounded-xl border border-slate-200 text-xs font-semibold text-slate-700 space-y-1">
              <span className="text-slate-900 font-extrabold flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Aufschlüsselung der Modellrechnung:
              </span>
              <p className="text-slate-600">
                Geschätzte Zinsen ({Math.round(interestEarned)} €/Jahr) + Geschätztes Cashback ({Math.round(cashbackEarned)} €/Jahr) + Gebühren-Ersparnis ({Math.round(feeSavings)} €/Jahr).
              </p>
              {showCashback && (
                <p className="text-slate-500 italic">
                  Hinweis: Der Cashback-Betrag ist eine theoretische Modellrechnung, die unterstellt, dass Ihr gesamter eingegebener Jahresumsatz von {(cardSpend * 12).toLocaleString('de-DE')} € zum Aktions‑Cashback-Satz von bis zu 2,5 % qualifiziert. In der Praxis gilt dieser Satz üblicherweise nur bei ausgewählten Partnern, nicht für sämtliche Kartenumsätze.
                </p>
              )}
            </div>

          </div>

          {/* Results Right Column */}
          <div className="md:col-span-5 bg-slate-900 text-white rounded-2xl p-6 sm:p-8 space-y-6 text-center border border-slate-800 shadow-xl">
            <div className="inline-flex items-center gap-1.5 bg-amber-500/20 text-amber-300 border border-amber-500/40 text-xs font-extrabold px-3 py-1 rounded-full">
              <TrendingUp className="w-3.5 h-3.5" /> GESCHÄTZTER JAHRVORTEIL *
            </div>

            <div>
              <span className="text-5xl sm:text-6xl font-black text-amber-400 tracking-tight block">
                + {totalBenefit} €
              </span>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mt-1">
                rechnerischer Vorteil pro Jahr
              </span>
            </div>

            <p className="text-xs font-medium text-slate-300">
                * Modellrechnung. Die angegebenen Beträge (z. B. 600 €) gelten nur, wenn der gesamte Jahresumsatz (24 000 €) für das 2,5 %‑Aktions‑Cashback qualifiziert ist; sonst kann der Betrag niedriger ausfallen. Die tatsächlichen Beträge richten sich nach Ihren realen Umsätzen und den Konditionen des Anbieters.
            </p>

            <Button
              asChild
              className="w-full bg-amber-500 hover:bg-amber-600 text-slate-950 font-extrabold py-6 rounded-xl text-base shadow-lg border border-amber-400 focus-visible:ring-2 focus-visible:ring-amber-500"
            >
              <a href={C24_AFFILIATE_LINK} target="_blank" rel="noopener noreferrer nofollow">
                Zum C24 Angebot *
                <ArrowRight className="ml-2 w-5 h-5 stroke-[3]" />
              </a>
            </Button>
          </div>

        </div>

        <div className="text-center text-[11px] text-slate-500 max-w-2xl mx-auto space-y-1">
          <p flex items-center justify-center gap-1>
            <Info className="w-3 h-3 inline mr-1" />
            Rechtlicher Hinweis: Die Modellrechnung dient ausschließlich zu Informationszwecken und stellt keine Gewährleistung oder Zinsgarantie dar. 
            Maßgeblich sind stets die tagesaktuellen Angaben auf der Website der C24 Bank GmbH.
          </p>
        </div>

      </div>
    </section>
  );
}