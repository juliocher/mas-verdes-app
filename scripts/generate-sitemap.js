import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DOMAIN = 'https://willoqverde.pe';
const TODAY = new Date().toISOString().split('T')[0];

const staticRoutes = [
  { path: '', priority: '1.0', changefreq: 'weekly' },
  { path: 'nosotros', priority: '0.8', changefreq: 'monthly' },
  { path: 'coleccion', priority: '0.9', changefreq: 'weekly' },
  { path: 'hierbas', priority: '0.9', changefreq: 'weekly' },
  { path: 'flores', priority: '0.8', changefreq: 'weekly' },
  { path: 'sales', priority: '0.8', changefreq: 'weekly' },
  { path: 'muna', priority: '0.8', changefreq: 'weekly' },
  { path: 'sabores', priority: '0.9', changefreq: 'weekly' },
  { path: 'blog', priority: '0.8', changefreq: 'weekly' },
  { path: 'contacto', priority: '0.7', changefreq: 'monthly' },
  { path: 'reclamaciones', priority: '0.5', changefreq: 'yearly' },
  { path: 'politicas', priority: '0.5', changefreq: 'yearly' },
];

function extractSlugs(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const matches = [...content.matchAll(/slug:\s*['"]([^'"]+)['"]/g)];
    return [...new Set(matches.map((m) => m[1]))];
  } catch (e) {
    console.error(`Error reading ${filePath}:`, e);
    return [];
  }
}

const productsFile = path.resolve(__dirname, '../src/data/products.data.ts');
const blogFile = path.resolve(__dirname, '../src/data/blog.data.ts');

const productSlugs = extractSlugs(productsFile);
const blogSlugs = extractSlugs(blogFile);

let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

// Static routes
for (const route of staticRoutes) {
  const loc = route.path ? `${DOMAIN}/${route.path}` : `${DOMAIN}/`;
  xml += `  <url>\n`;
  xml += `    <loc>${loc}</loc>\n`;
  xml += `    <lastmod>${TODAY}</lastmod>\n`;
  xml += `    <changefreq>${route.changefreq}</changefreq>\n`;
  xml += `    <priority>${route.priority}</priority>\n`;
  xml += `  </url>\n`;
}

// Product pages
for (const slug of productSlugs) {
  xml += `  <url>\n`;
  xml += `    <loc>${DOMAIN}/producto/${slug}</loc>\n`;
  xml += `    <lastmod>${TODAY}</lastmod>\n`;
  xml += `    <changefreq>weekly</changefreq>\n`;
  xml += `    <priority>0.8</priority>\n`;
  xml += `  </url>\n`;
}

// Blog pages
for (const slug of blogSlugs) {
  xml += `  <url>\n`;
  xml += `    <loc>${DOMAIN}/blog/${slug}</loc>\n`;
  xml += `    <lastmod>${TODAY}</lastmod>\n`;
  xml += `    <changefreq>weekly</changefreq>\n`;
  xml += `    <priority>0.7</priority>\n`;
  xml += `  </url>\n`;
}

xml += '</urlset>\n';

const outPath = path.resolve(__dirname, '../public/sitemap.xml');
fs.writeFileSync(outPath, xml, 'utf8');
console.log(`✅ Sitemap successfully generated with ${staticRoutes.length + productSlugs.length + blogSlugs.length} URLs at ${outPath}`);
