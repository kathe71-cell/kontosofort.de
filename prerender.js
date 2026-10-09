import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const toAbsolute = (p) => path.resolve(__dirname, p);

const template = fs.readFileSync(toAbsolute('dist/index.html'), 'utf-8');
const { render } = await import('./dist-ssr/entry-server.js');

const ROUTES = {
  '/': {
    title: 'C24 Smart Girokonto – Kostenloses Online-Konto | kontosofort.de',
    description: 'Informationen zum C24 Smart Girokonto: 0,00 € Kontoführungsgebühr, 0,75 % p.a. Tagesgeld-Zinsen, SEPA Instant Echtzeitüberweisung & Visa Debitkarte.',
  },
  '/tarifrechner': {
    title: 'Girokonto Tarifrechner – Kostenloser Vergleich 2026 | kontosofort.de',
    description: 'Vergleichen Sie C24 Tarife: Smart, Plus und Max. Gebühren, Zinsen, Pockets und Zusatzleistungen im transparenten Rechner.',
  },
  '/kostenloses-girokonto-ohne-gehaltseingang': {
    title: 'Kostenloses Girokonto ohne Gehaltseingang 2026 | kontosofort.de',
    description: 'Bedingungslos kostenlose Girokonten ohne monatlichen Mindesteingang: Konditionen, Zinsen und Girocard-Verfügbarkeit.',
  },
  '/tagesgeld-zinsen-vergleich': {
    title: 'Tagesgeld Zinsen 2026 – Tagesgeld direkt auf dem Girokonto | kontosofort.de',
    description: 'Tagesgeld-Zinsen direkt auf dem Girokonto: Attraktive Verzinsung ohne Umbuchung oder Kündigungsfristen im Vergleich.',
  },
  '/impressum': {
    title: 'Impressum | kontosofort.de',
    description: 'Impressum und gesetzliche Anbieterkennzeichnung gemäß § 5 DDG von kontosofort.de.',
  },
  '/datenschutz': {
    title: 'Datenschutzerklärung (DSGVO) | kontosofort.de',
    description: 'Datenschutzerklärung von kontosofort.de: DSGVO-konforme Datenverarbeitung ohne Profiling und ohne externe Google CDN Fonts.',
  },
};

console.log(`Starting prerendering of ${Object.keys(ROUTES).length} routes for kontosofort.de...`);

for (const [url, meta] of Object.entries(ROUTES)) {
  const appHtml = render(url);

  let html = template.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);

  // Update Title
  html = html.replace(/<title>.*?<\/title>/, `<title>${meta.title}</title>`);
  html = html.replace(/<meta property="og:title" content=".*?" \/>/, `<meta property="og:title" content="${meta.title}" />`);
  html = html.replace(/<meta name="twitter:title" content=".*?" \/>/, `<meta name="twitter:title" content="${meta.title}" />`);

  // Update Description
  html = html.replace(/<meta name="description" content=".*?" \/>/, `<meta name="description" content="${meta.description}" />`);
  html = html.replace(/<meta property="og:description" content=".*?" \/>/, `<meta property="og:description" content="${meta.description}" />`);
  html = html.replace(/<meta name="twitter:description" content=".*?" \/>/, `<meta name="twitter:description" content="${meta.description}" />`);

  // Update Canonical & OG URL
  const canonicalUrl = `https://kontosofort.de${url === '/' ? '/' : url}`;
  html = html.replace(/<link rel="canonical" href=".*?" \/>/, `<link rel="canonical" href="${canonicalUrl}" />`);
  html = html.replace(/<meta property="og:url" content=".*?" \/>/, `<meta property="og:url" content="${canonicalUrl}" />`);

  const filePath = url === '/' ? 'dist/index.html' : `dist${url}/index.html`;
  const dir = path.dirname(toAbsolute(filePath));
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  fs.writeFileSync(toAbsolute(filePath), html);
  console.log(`  ✓ ${url} -> ${filePath} (${(html.length / 1024).toFixed(1)} kB)`);
}

console.log('Static Site Prerendering complete!');


// --- Auto-injected Dynamic Sitemap ---
try {
  let routeKeys = [];
  if (Array.isArray(ROUTES)) {
    routeKeys = ROUTES.map(r => r.url || r.path);
  } else {
    routeKeys = Object.keys(ROUTES);
  }

  const sitemapUrlset = routeKeys
    .filter(url => url && !url.includes('404') && !url.includes('embed'))
    .map(url => {
      let loc = `https://kontosofort.de${url === '/' ? '' : url}`;
      let priority = url === '/' ? '1.0' : '0.8';
      const today = new Date().toISOString().split('T')[0];
      return `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>${priority}</priority>\n  </url>`;
    }).join('\n');

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemapUrlset}\n</urlset>`;

  fs.writeFileSync(toAbsolute('dist/sitemap.xml'), sitemapXml);
  fs.writeFileSync(toAbsolute('public/sitemap.xml'), sitemapXml);
  console.log('  - Generated dynamic sitemap.xml for ' + 'kontosofort.de');
} catch (e) {
  console.error('Error generating sitemap:', e.message);
}
// -----------------------------------
