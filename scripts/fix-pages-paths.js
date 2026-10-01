import fs from 'node:fs';
import path from 'node:path';

const repoBasePath = '/Syntecxhub_WeatherApp';
const outDir = path.join(process.cwd(), 'out');

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(fullPath);
      continue;
    }

    if (!/\.(html|js|css|json|svg|txt)$/i.test(entry.name)) {
      continue;
    }

    const original = fs.readFileSync(fullPath, 'utf8');
    const updated = original
      .replaceAll('/_next/', `${repoBasePath}/_next/`)
      .replaceAll('href="/favicon.svg"', `href="${repoBasePath}/favicon.svg"`)
      .replaceAll('src="/favicon.svg"', `src="${repoBasePath}/favicon.svg"`)
      .replaceAll('href="/manifest.webmanifest"', `href="${repoBasePath}/manifest.webmanifest"`)
      .replaceAll('src="/manifest.webmanifest"', `src="${repoBasePath}/manifest.webmanifest"`)
      .replaceAll('"/static/', `"${repoBasePath}/static/`)
      .replaceAll("'/static/", `"${repoBasePath}/static/`)
      .replaceAll('"/favicon.svg', `"${repoBasePath}/favicon.svg`)
      .replaceAll("'/favicon.svg", `"${repoBasePath}/favicon.svg`);

    if (updated !== original) {
      fs.writeFileSync(fullPath, updated, 'utf8');
    }
  }
}

walk(outDir);
