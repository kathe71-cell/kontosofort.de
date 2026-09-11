import React from 'react';
import { HelpCircle, ChevronDown, ShieldCheck, Zap, Lock, CreditCard } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQS = [
  {
    id: 'faq-1',
    question: "Wie läuft die Kontoeröffnung beim C24 Smart Girokonto ab?",
    answer: "Die Eröffnung erfolgt digital über die C24 App. Zur Legitimation können Sie den eID Online-Ausweis (NFC-Funktion Ihres Personalausweises mit der AusweisApp) oder das Video-Ident-Verfahren nutzen. Nach erfolgreicher Identifikation wird Ihre deutsche IBAN sofort generiert."
  },
  {
    id: 'faq-2',
    question: "Ist das C24 Smart Girokonto wirklich kostenlos?",
    answer: "Ja, im C24 Smart Tarif fällt laut Angaben der C24 Bank GmbH keine monatliche Kontoführungsgebühr an. Es wird kein Mindestgeldeingang gefordert. Beleglose SEPA- und SEPA-Instant-Überweisungen sowie die Visa Debitkarte sind im Smart Tarif enthalten."
  },
  {
    id: 'faq-3',
    question: "Wie funktioniert die Verzinsung auf Girokonto und Pockets?",
    answer: "Die C24 Bank gewährt auf das Guthaben des C24 Smart Girokontos sowie auf den Pockets Tagesgeld-Zinsen (aktuell 2,50 % p.a.). Die Zinsgutschrift erfolgt monatlich direkt auf das Konto."
  },
  {
    id: 'faq-4',
    question: "Wie ist mein Guthaben rechtlich geschützt?",
    answer: "Die C24 Bank GmbH ist eine deutsche Vollbank und unterliegt der Aufsicht durch die BaFin. Einlagen sind über die gesetzliche deutsche Einlagensicherung der Entschädigungseinrichtung deutscher Banken (EdB) bis zu 100.000 € pro Kunde abgesichert."
  },
  {
    id: 'faq-5',
    question: "Was sind C24 Pockets und wie viele sind inklusive?",
    answer: "Pockets sind digitale Unterkonten mit jeweils eigenen deutschen IBANs. Im kostenlosen Smart Tarif sind bis zu 4 Pockets enthalten. Sie können zur gezielten Rücklagenbildung für Miete, Urlaub oder Steuern genutzt werden."
  },
  {
    id: 'faq-6',
    question: "Wird bei der Kontoeröffnung die SCHUFA abgefragt?",
    answer: "Die Schufa-Abfrage bei Neueröffnung des C24 Smart Girokontos erfolgt in der Regel als SCHUFA-neutrale Konditionsanfrage, was den Schufa-Score nicht negativ beeinflusst."
  }
];

export default function FAQSection() {
  return (
    <section id="faq" className="py-20 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-950 border border-amber-300 text-xs font-bold px-3.5 py-1.5 rounded-full shadow-sm">
            <HelpCircle className="w-4 h-4 text-amber-800" />
            <span>HÄUFIG GESTELLTE FRAGEN (FAQ)</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Fragen und Antworten zum C24 Smart Girokonto
          </h2>

          <p className="text-slate-600 font-medium text-base">
            Wichtige Fakten zur Beantragung, Konditionen und Sicherheit.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-md p-6 sm:p-8">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {FAQS.map((faq) => (
              <AccordionItem 
                key={faq.id} 
                value={faq.id}
                className="border border-slate-200 rounded-xl px-5 py-1 hover:border-amber-300 transition-colors data-[state=open]:bg-slate-50/80 data-[state=open]:border-amber-400"
              >
                <AccordionTrigger className="text-left font-black text-slate-900 text-base py-4 hover:no-underline focus-visible:ring-2 focus-visible:ring-amber-500 rounded-lg">
                  <span className="flex items-center gap-3">
                    <span className="w-7 h-7 bg-amber-100 text-amber-950 rounded-lg flex items-center justify-center text-xs font-extrabold flex-shrink-0">
                      ?
                    </span>
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-slate-700 font-medium text-sm leading-relaxed pb-4 pt-1 pl-10 border-t border-slate-100">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

      </div>
    </section>
  );
}