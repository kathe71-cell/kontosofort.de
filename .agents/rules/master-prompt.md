# Master Prompt & Richtlinien für Vercel Landingpages & Finanzportale

Dieses Dokument enthält die verbindlichen Vorgaben für die Erstellung von modernen, extrem hochwertigen, rechtssicheren und conversion-starken Landingpages für den Vercel-Export.

---

## 1. Rechtliche Konformität, UWG-Schutz & Abmahn-Sicherheit (DE/EU)
- **Striktes Verbot unbefugter Superlative & Siegel**:
  - KEINE unbelegten Begriffe wie „TESTSIEGER“, „BESTES GIROKONTO“, „OFFIZIELLES PORTAL“ oder fiktive Rankings verwenden.
  - Alle Produktangaben müssen rein faktenbasiert und sachlich nachprüfbar sein (z. B. „0,00 € Kontoführungsgebühr beim C24 Smart Tarif“, „2,50 % p.a. Tagesgeld-Zinsen“).
- **Transparente Affiliate- & Werbekennzeichnung**:
  - Jeder Call-to-Action-Button und Werbelink muss durch ein Sternchen (*) und den Zusatz `* Werbelink / Partnerlink` gekennzeichnet sein.
  - Im Header und Footer ist die rechtlich erforderliche Offenlegung einzubinden (kontosofort.de ist ein unabhängiges Portal und steht in keinem gesellschaftsrechtlichen Verhältnis zum Anbieter).
- **Transparenz bei Tarifrechnern**:
  - Alle Ersparnis- oder Zinsrechner müssen als beispielhafte Modellrechnung mit Rechtshinweis ausgewiesen werden (`* Modellrechnung. Die tatsächliche Höhe hängt vom individuellen Nutzungsverhalten und den Konditionen des Anbieters ab.`).

---

## 2. Strukturierungs-Vorgaben (Single-Provider vs. Multi-Provider)
- **Single-Provider Modus**:
  - Wenn ein einzelner Anbieter/Produkt gefordert wird, KEINE Multibank-Vergleiche, keine Konkurrenz-Logos und keine Vergleichs-Filter einbauen.
  - Stattdessen eine fokussierte **Single-Product Showcase Landing Page** erstellen (mit Feature-Explorer, technischer Spezifikations-Matrix, C24 Ersparnisrechner und spezifischen FAQs).

---

## 3. Visual Identity & Helles Farbkonzept (Keine dunklen Themes)
- **Primärflächen**: Warmes Alabaster / Off-White (`bg-slate-50`, `#f8fafc`, `bg-white`), helle feine Rahmen (`border-slate-200`) und schwebende weiße Karten (`bg-white shadow-sm hover:shadow-xl`).
- **Farbakzente**: Edles Amber/Gold (`#f59e0b` / `#d97706`), Tech Emerald (`#10b981`), Deep Slate (`#0f172a`, `#020617`).
- Keine billigen Lila-Blau-Einheitsverläufe.

---

## 4. 100 % DSGVO-Konforme Typografie & Privacy
- **Keine Google-Fonts CDNs**: Es dürfen KEINE externen Schriftarten (`fonts.googleapis.com`) eingebunden werden!
- **System Font Stack**: Nutzung des nativen System-Schriftarten-Stacks (`-apple-system`, `BlinkMacSystemFont`, `ui-sans-serif`, `system-ui`, `Segoe UI`, `Roboto`).
- Keine IP-Adressübertragung in Drittstaaten beim Laden der Seite.

---

## 5. Maximale Kontraste & Lesbarkeit (WCAG AAA)
- **Button-Lesbarkeit**:
  - Auf hellen Akzent-Buttons (Amber/Gold `#f59e0b`) stets tiefdunkle, fettgedruckte Schrift (`text-slate-950 font-extrabold`) für mindestens 12:1 Kontrast.
  - Auf dunklen Buttons (`bg-slate-900`) reinweißes Styling (`text-white font-bold`).
- **Mikro-Texte & Badges**: Knackscharfe, hohe Kontraste (z. B. `bg-amber-100 text-amber-950 border border-amber-300`).

---

## 6. SEO & Schema.org Structured Data
- Vollständiges JSON-LD Schema Markup in `index.html`: `WebSite`, `Organization`, `Product`, `Offer`, `FAQPage`, `BreadcrumbList`.
- OpenGraph Meta Tags, Twitter Cards, Meta Titles (<60 Zeichen), Meta Descriptions (<155 Zeichen) und Canonical URLs.
- Sprach-Tag `lang="de"` und saubere Überschriften-Hierarchie (`h1` bis `h4`).

---

## 7. Vercel Export Readiness & CLI
- `vercel.json` mit SPA-Rewrites (`"source": "/(.*)", "destination": "/index.html"`).
- `public/robots.txt`, `public/sitemap.xml`, `public/favicon.svg`.
- Clean Build Verification via `npm run build`.
- Bereitstellung von Anweisungen & CLI-Befehlen für Vercel-Deployment (`vercel deploy --temporary`).
