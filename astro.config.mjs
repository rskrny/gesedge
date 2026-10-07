// @ts-check
// One repo, two sites. SITE=en builds gesedge.com, SITE=zh builds huanqiao.gesedge.com.
// Pages live in src/<site>/pages; shared code in src/shared. See DECISIONS 2026-10-06.
import { defineConfig } from 'astro/config';

const site = process.env.SITE === 'zh' ? 'zh' : 'en';
const host = site === 'zh' ? 'https://huanqiao.gesedge.com' : 'https://gesedge.com';

export default defineConfig({
  site: host,
  srcDir: `./src/${site}`,
  outDir: `./dist/${site}`,
  trailingSlash: 'always',
  build: { format: 'directory', inlineStylesheets: 'always' },
  compressHTML: true,
});
