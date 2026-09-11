import React from 'react';
import { 
  Zap, Shield, CreditCard, Lock, Smartphone, RefreshCw, Cpu, Award, CheckCircle2 
} from "lucide-react";
import { motion } from "framer-motion";

export default function BenefitsSection() {
  const benefits = [
    {
      icon: Zap,
      title: "SEPA Instant Echtzeitüberweisungen",
      desc: "Überweisungen rund um die Uhr (24/7/365) im SEPA Instant Verfahren ausführen und empfangen.",
      tag: "SEPA INSTANT"
    },
    {
      icon: Lock,
      title: "Zwei-Faktor-Authentifizierung & Biometrie",
      desc: "Sicherheit bei Transaktionen durch In-App-Freigaben mit FaceID, TouchID oder Geräteschlüssel.",
      tag: "DSGVO & SICHERHEIT"
    },
    {
      icon: Cpu,
      title: "Mobile Payment Integration",
      desc: "Vollständige Unterstützung für kontaktloses Bezahlen über Apple Pay, Google Pay und die C24 App.",
      tag: "MOBILE PAYMENT"
    },
    {
      icon: CreditCard,
      title: "0,00 € Kontoführungsgebühr",
      desc: "Das C24 Smart Konto hat keine monatliche Grundgebühr und erfordert keinen geforderten Mindestgeldeingang.",
      tag: "KOSTENLOSER TARIF"
    },
    {
      icon: RefreshCw,
      title: "Pockets mit eigener IBAN",
      desc: "Erstellen Sie Unterkonten mit eigenen deutschen IBANs für die strukturierte Aufteilung Ihrer Ersparnisse.",
      tag: "SUB-IBANs"
    },
    {
      icon: Shield,
      title: "100.000 € Einlagensicherung",
      desc: "Reguliert durch die Bundesanstalt für Finanzdienstleistungsaufsicht (BaFin) mit gesetzlicher Einlagensicherung (EdB).",
      tag: "BAFIN REGULIERT"
    }
  ];

  return (
    <section id="vorteile" className="py-20 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-950 border border-emerald-300 text-xs font-extrabold px-3.5 py-1.5 rounded-full shadow-sm">
            <Shield className="w-4 h-4 text-emerald-800" />
            <span>FUNKTIONEN UND VORTEILE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Vorteile des C24 Smart Girokontos
          </h2>

          <p className="text-slate-600 font-medium text-base">
            Moderne Infrastruktur, flexible Unterkonten und gesetzlich geschütztes Banking.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="bg-white rounded-2xl p-7 border border-slate-200 shadow-sm hover:shadow-xl hover:border-amber-300 transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 bg-slate-900 text-amber-400 rounded-xl flex items-center justify-center shadow-md group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors">
                    <item.icon className="w-6 h-6 stroke-[2.2]" />
                  </div>
                  <span className="bg-slate-100 text-slate-800 border border-slate-200 text-[10px] font-bold uppercase px-2.5 py-1 rounded-md">
                    {item.tag}
                  </span>
                </div>

                <h3 className="text-xl font-black text-slate-900 group-hover:text-amber-600 transition-colors">
                  {item.title}
                </h3>

                <p className="text-slate-600 text-sm font-medium leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-emerald-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Im C24 Smart Tarif enthalten</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}