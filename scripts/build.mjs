// node scripts/build.mjs en|zh   (set PREVIEW=1 for the workers.dev previews)
// Builds one site into dist/<site> and adds its Cloudflare _redirects/_headers files.
import { execSync } from 'node:child_process';
import { appendFileSync, copyFileSync, existsSync } from 'node:fs';

const site = process.argv[2];
if (site !== 'en' && site !== 'zh') throw new Error('usage: node scripts/build.mjs en|zh');

execSync('npx astro build', { stdio: 'inherit', env: { ...process.env, SITE: site } });
if (existsSync(`src/${site}/_redirects`)) copyFileSync(`src/${site}/_redirects`, `dist/${site}/_redirects`);
if (process.env.PREVIEW === '1') appendFileSync(`dist/${site}/_headers`, '\n/*\n  X-Robots-Tag: noindex, nofollow\n');
