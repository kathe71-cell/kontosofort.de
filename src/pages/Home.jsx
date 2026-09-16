import React, { useEffect } from 'react';
import Header from '@/components/landing/Header';
import HeroSection from '@/components/landing/HeroSection';
import C24FeatureShowcase from '@/components/landing/C24FeatureShowcase';
import C24TechMatrixSection from '@/components/landing/C24TechMatrixSection';
import BenefitsSection from '@/components/landing/BenefitsSection';
import TrustSection from '@/components/landing/TrustSection';
import TarifrechnerSection from '@/components/landing/TarifrechnerSection';
import ComparisonSection from '@/components/landing/ComparisonSection';
import FAQSection from '@/components/landing/FAQSection';
import Footer from '@/components/landing/Footer';

import StickyMobileBar from '@/components/landing/StickyMobileBar';

export default function Home() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "kontosofort.de",
    "url": "https://kontosofort.de",
    "logo": "https://kontosofort.de/favicon.svg",
    "description": "Informationsportal zum C24 Smart Girokonto in Deutschland.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Kassel",
      "postalCode": "34119",
      "addressCountry": "DE"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+49-178-6652623",
      "email": "jens@kathe.org",
      "contactType": "customer service"
    }
  };

  useEffect(() => {
    document.title = "C24 Smart Girokonto – Kostenloses Online-Konto | kontosofort.de";
    
    // Set meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = "Informationen zum C24 Smart Girokonto: 0,00 € Kontoführungsgebühr, 0,75 % p.a. Tagesgeld‑Zinsen, SEPA Instant Echtzeitüberweisung & Debit‑Mastercard.";

    // Add structured data
    const ldJsonScript = document.createElement('script');
    ldJsonScript.type = 'application/ld+json';
    ldJsonScript.text = JSON.stringify(organizationSchema);
    document.head.appendChild(ldJsonScript);

    return () => {
      if (ldJsonScript.parentNode) document.head.removeChild(ldJsonScript);
    };
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-amber-400 selection:text-slate-950">
      <Header />
      <main>
        <HeroSection />
        <C24FeatureShowcase />
        <C24TechMatrixSection />
        <BenefitsSection />
        <TarifrechnerSection />
        <ComparisonSection />
        <TrustSection />
        <FAQSection />
      </main>
      <Footer />
      <StickyMobileBar />

    </div>
  );
}